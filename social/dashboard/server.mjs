// social.pravnix.ai: preview, render and post Pravnya's reels.
// No dependencies; run with `node --env-file=<env file> social/dashboard/server.mjs`. See dashboard/README.md.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import crypto from "node:crypto";
import { createAuth, createLimiter, verifyPassword } from "./lib/auth.mjs";
import { createStore } from "./lib/store.mjs";
import { createRenders, FILE_RE } from "./lib/renders.mjs";
import { buildUploads, call, envFromProcess, sendUpload } from "../scripts/upload-post.mjs";

const env = process.env;
for (const k of ["DATA_DIR", "SESSION_SECRET", "DASHBOARD_PASSWORD_HASH"]) if (!env[k]) throw new Error(`${k} is not set`);
const PORT = Number(env.PORT || 3020);
const ORIGIN = env.PUBLIC_ORIGIN || "https://social.pravnix.ai";
const store = createStore(env.DATA_DIR);
const auth = createAuth(env.SESSION_SECRET);
const limiter = createLimiter();
const uploadEnv = envFromProcess(env);
const renders = createRenders({ store, token: env.GITHUB_TOKEN, repo: env.GITHUB_REPO || "raibhaskarr/pravnya-marketing", ref: env.GITHUB_REF || "main" });
const PUBLIC = path.join(import.meta.dirname, "public");
const inFlight = new Set();

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const SECURITY_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; img-src 'self' data: https:; media-src 'self'; style-src 'self'; script-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
  "Strict-Transport-Security": "max-age=31536000",
  "X-Robots-Tag": "noindex, nofollow",
};
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".txt": "text/plain" };

function send(res, status, body, headers = {}) {
  const isJson = typeof body !== "string" && !Buffer.isBuffer(body);
  res.writeHead(status, { ...SECURITY_HEADERS, "Cache-Control": "no-store", ...(isJson ? { "Content-Type": "application/json" } : {}), ...headers });
  res.end(isJson ? JSON.stringify(body) : body);
}

function sendFile(res, file, headers = {}) {
  send(res, 200, fs.readFileSync(path.join(PUBLIC, file)), { "Content-Type": TYPES[path.extname(file)], ...headers });
}

async function readJson(req) {
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > 100_000) throw new HttpError(413, "Request too large");
    chunks.push(c);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString() || "{}");
  } catch {
    throw new HttpError(400, "Invalid JSON");
  }
}

// Video with Range support so the browser can seek.
function sendVideo(req, res, file) {
  const { size } = fs.statSync(file);
  const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
  const base = { ...SECURITY_HEADERS, "Content-Type": "video/mp4", "Accept-Ranges": "bytes", "Cache-Control": "private, max-age=86400" };
  if (!m || (!m[1] && !m[2])) {
    res.writeHead(200, { ...base, "Content-Length": size });
    return fs.createReadStream(file).pipe(res);
  }
  const start = m[1] ? Number(m[1]) : Math.max(0, size - Number(m[2]));
  const end = m[1] && m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
  if (start > end || start >= size) {
    res.writeHead(416, { ...base, "Content-Range": `bytes */${size}` });
    return res.end();
  }
  res.writeHead(206, { ...base, "Content-Range": `bytes ${start}-${end}/${size}`, "Content-Length": end - start + 1 });
  fs.createReadStream(file, { start, end }).pipe(res);
}

// A script is approved per language; changing its text (or post) needs a new approval.
const scriptKey = (reel, lang) =>
  crypto
    .createHash("sha256")
    .update(JSON.stringify([reel.id, lang, reel.scenes.map((s) => [s.headline[lang], s.narration[lang]]), reel.post[lang], reel.hashtags]))
    .digest("hex")
    .slice(0, 16);

function currentReel(reelId) {
  const { current } = renders.state();
  const manifest = renders.manifest();
  const reel = manifest?.reels.find((r) => r.id === reelId);
  if (!reel) throw new HttpError(404, "That reel isn't in the current render");
  return { reel, runId: current.id, dir: renders.dirFor(current.id) };
}

function postRequest(body) {
  const { reel, runId, dir } = currentReel(body.reel);
  const when = body.mode === "at" ? { at: body.at } : body.mode === "queue" ? { queue: true } : {};
  let uploads;
  try {
    uploads = buildUploads(reel, body.lang, Array.isArray(body.platforms) ? body.platforms : [], when, uploadEnv);
  } catch (e) {
    throw new HttpError(400, e.message);
  }
  for (const u of uploads) if (!fs.existsSync(path.join(dir, u.file))) throw new HttpError(400, `${u.file} wasn't rendered`);
  return { reel, runId, dir, when, uploads };
}

function stateFor() {
  const s = renders.state();
  const manifest = renders.manifest();
  const approvals = store.read("approvals", {});
  return {
    render: s,
    manifest,
    approvals: Object.fromEntries(
      (manifest?.reels ?? []).map((r) => [r.id, Object.fromEntries(["en", "hi"].map((l) => [l, approvals[scriptKey(r, l)] ?? null]))]),
    ),
    posts: store.read("posts", []).slice(0, 50),
    config: { uploadPost: Boolean(uploadEnv.apiKey && uploadEnv.user), github: Boolean(env.GITHUB_TOKEN), timezone: uploadEnv.timezone, ai: uploadEnv.ai },
  };
}

const routes = {
  "GET /login": (req, res) => (auth.isSignedIn(req) ? send(res, 302, "", { Location: "/" }) : sendFile(res, "login.html")),
  "POST /api/login": async (req, res) => {
    const ip = req.headers["cf-connecting-ip"] || req.headers["x-real-ip"] || req.socket.remoteAddress;
    if (limiter.blocked(ip)) throw new HttpError(429, "Too many attempts. Try again in 15 minutes.");
    const { password } = await readJson(req);
    if (!verifyPassword(password, env.DASHBOARD_PASSWORD_HASH)) {
      limiter.fail(ip);
      throw new HttpError(401, "Wrong password");
    }
    limiter.reset(ip);
    send(res, 200, { ok: true }, { "Set-Cookie": auth.cookieFor() });
  },
  "POST /api/logout": (req, res) => send(res, 200, { ok: true }, { "Set-Cookie": auth.clearCookie() }),

  // Everything below needs a session (checked in the handler).
  "GET /": (req, res) => sendFile(res, "app.html"),
  "GET /api/state": (req, res) => send(res, 200, stateFor()),
  "POST /api/render": async (req, res) => {
    await renders.start();
    send(res, 200, stateFor());
  },
  "POST /api/render/refresh": async (req, res) => {
    await renders.refresh();
    send(res, 200, stateFor());
  },
  "POST /api/render/latest": async (req, res) => {
    await renders.loadLatest();
    send(res, 200, stateFor());
  },
  "POST /api/approve": async (req, res) => {
    const { reel: reelId, lang, approved, name } = await readJson(req);
    const { reel } = currentReel(reelId);
    if (!["en", "hi"].includes(lang)) throw new HttpError(400, "Language must be en or hi");
    if (approved && !String(name || "").trim()) throw new HttpError(400, "Add the reviewer's name");
    store.update("approvals", {}, (a) => {
      if (approved) a[scriptKey(reel, lang)] = { by: String(name).trim().slice(0, 60), at: new Date().toISOString() };
      else delete a[scriptKey(reel, lang)];
      return a;
    });
    send(res, 200, stateFor());
  },
  "POST /api/post/preview": async (req, res) => {
    const { uploads } = postRequest(await readJson(req));
    send(res, 200, { uploads });
  },
  "POST /api/post": async (req, res) => {
    const body = await readJson(req);
    const { reel, runId, dir, when, uploads } = postRequest(body);
    if (!stateFor().approvals[reel.id]?.[body.lang]) throw new HttpError(400, "Approve this script before posting");
    if (!uploadEnv.apiKey || !uploadEnv.user) throw new HttpError(400, "Upload-Post isn't set up on the server yet");
    const lock = `${reel.id}:${body.lang}`;
    if (inFlight.has(lock)) throw new HttpError(409, "Already posting this reel");
    inFlight.add(lock);
    try {
      const results = [];
      for (const u of uploads) {
        try {
          results.push({ file: u.file, platforms: u.platforms, response: await sendUpload(u, dir, uploadEnv) });
        } catch (e) {
          results.push({ file: u.file, platforms: u.platforms, error: e.message });
        }
      }
      const entry = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), reel: reel.id, title: reel.title, lang: body.lang, when, render: runId, results };
      store.update("posts", [], (p) => [entry, ...p].slice(0, 500));
      send(res, 200, { entry, state: stateFor() });
    } finally {
      inFlight.delete(lock);
    }
  },
  "GET /api/scheduled": async (req, res) => send(res, 200, await call("/uploadposts/schedule", uploadEnv)),
};

async function handle(req, res) {
  const url = new URL(req.url, ORIGIN);
  const key = `${req.method} ${url.pathname}`;

  if (req.method !== "GET" && req.method !== "HEAD") {
    // CSRF: only same-origin fetches with our header may change anything.
    const origin = req.headers.origin;
    if (req.headers["x-requested-with"] !== "fetch" || (origin && origin !== ORIGIN && origin !== `http://localhost:${PORT}`)) throw new HttpError(403, "Forbidden");
  }
  if (["/app.css", "/login.js", "/favicon.svg", "/robots.txt"].includes(url.pathname)) return sendFile(res, url.pathname.slice(1), { "Cache-Control": "public, max-age=300" });
  if (key === "GET /login" || key === "POST /api/login" || key === "POST /api/logout") return routes[key](req, res);

  if (!auth.isSignedIn(req)) {
    if (req.method === "GET" && !url.pathname.startsWith("/api/") && !url.pathname.startsWith("/media/")) return send(res, 302, "", { Location: "/login" });
    throw new HttpError(401, "Please sign in again");
  }
  if (url.pathname === "/app.js") return sendFile(res, "app.js");

  const media = /^\/media\/(\d+)\/([^/]+)$/.exec(url.pathname);
  if (media && req.method === "GET") {
    if (!FILE_RE.test(media[2])) throw new HttpError(404, "Not found");
    const file = path.join(renders.dirFor(media[1]), media[2]);
    if (!fs.existsSync(file)) throw new HttpError(404, "Not found");
    return sendVideo(req, res, file);
  }
  const status = /^\/api\/status\/([A-Za-z0-9_-]{1,80})$/.exec(url.pathname);
  if (status && req.method === "GET") {
    const kind = url.searchParams.get("kind") === "job" ? "job_id" : "request_id";
    return send(res, 200, await call(`/uploadposts/status?${kind}=${encodeURIComponent(status[1])}`, uploadEnv));
  }
  const cancel = /^\/api\/scheduled\/([A-Za-z0-9_-]{1,80})$/.exec(url.pathname);
  if (cancel && req.method === "DELETE") return send(res, 200, await call(`/uploadposts/schedule/${cancel[1]}`, uploadEnv, { method: "DELETE" }));

  if (!routes[key]) throw new HttpError(404, "Not found");
  await routes[key](req, res);
}

http
  .createServer((req, res) =>
    handle(req, res).catch((e) => {
      if (!(e instanceof HttpError)) console.error(e);
      if (!res.headersSent) send(res, e.status || 500, { error: e.message || "Something went wrong" });
      else res.end();
    }),
  )
  .listen(PORT, "127.0.0.1", () => console.log(`social dashboard on http://127.0.0.1:${PORT}`));

// Keep a running render moving even when nobody has the page open.
setInterval(() => {
  if (renders.state().active) renders.refresh().catch((e) => console.error("render refresh:", e.message));
}, 60_000).unref();

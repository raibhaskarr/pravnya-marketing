// Starts the "Render social reels" GitHub Actions workflow and imports its videos into DATA_DIR/renders/<run id>/.
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const WORKFLOW = "social-render.yml";
const KEEP = 3; // renders kept on disk (the current one is never removed)
export const FILE_RE = /^[a-z0-9-]+\.mp4$/;

export function createRenders({ store, token, repo, ref }) {
  async function gh(pathname, init = {}) {
    if (!token) throw new Error("GITHUB_TOKEN is not set");
    const res = await fetch(`https://api.github.com/repos/${repo}${pathname}`, {
      ...init,
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", ...init.headers },
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 300)}`);
    return res.status === 204 ? null : res.json();
  }

  const summary = (r) => ({ id: r.id, status: r.status, conclusion: r.conclusion, url: r.html_url, startedAt: r.created_at, commit: r.head_sha?.slice(0, 7) });
  const state = () => store.read("state", { current: null, active: null, error: null });
  const setState = (patch) => store.update("state", { current: null, active: null, error: null }, (s) => ({ ...s, ...patch }));

  async function start() {
    const s = state();
    if (s.active) throw new Error("A render is already running");
    const startedAt = Date.now();
    const res = await gh(`/actions/workflows/${WORKFLOW}/dispatches`, {
      method: "POST",
      body: JSON.stringify({ ref, inputs: { filter: "" }, return_run_details: true }),
    });
    let id = res?.workflow_run_id;
    // Older API behaviour: no run id in the reply, so find the run we just started.
    for (let i = 0; !id && i < 10; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      const { workflow_runs } = await gh(`/actions/workflows/${WORKFLOW}/runs?event=workflow_dispatch&per_page=5`);
      id = workflow_runs.find((r) => Date.parse(r.created_at) >= startedAt - 10_000)?.id;
    }
    if (!id) throw new Error("Started the render but couldn't find it on GitHub. Check the Actions tab.");
    return setState({ active: summary(await gh(`/actions/runs/${id}`)), error: null });
  }

  /** Refreshes the running render; imports it when it succeeds. */
  async function refresh() {
    const s = state();
    if (!s.active) return s;
    const r = await gh(`/actions/runs/${s.active.id}`);
    if (r.status !== "completed") return setState({ active: summary(r) });
    if (r.conclusion !== "success") return setState({ active: null, error: `The render ${r.conclusion}. See ${r.html_url}` });
    await importRun(r);
    return setState({ active: null, current: summary(r), error: null });
  }

  /** Imports the newest successful render (e.g. one started from GitHub instead of the dashboard). */
  async function loadLatest() {
    const { workflow_runs } = await gh(`/actions/workflows/${WORKFLOW}/runs?status=success&per_page=1`);
    const r = workflow_runs[0];
    if (!r) throw new Error("No successful render yet");
    if (state().current?.id !== r.id) await importRun(r);
    return setState({ current: summary(r), error: null });
  }

  async function importRun(r) {
    const final = path.join(store.rendersDir, String(r.id));
    if (fs.existsSync(path.join(final, "reels.json"))) return;
    const { artifacts } = await gh(`/actions/runs/${r.id}/artifacts`);
    const artifact = artifacts.find((a) => a.name === "reels" && !a.expired);
    if (!artifact) throw new Error("That render has no videos (they expire after 14 days)");

    const tmp = `${final}.tmp`;
    fs.rmSync(tmp, { recursive: true, force: true });
    fs.mkdirSync(tmp, { recursive: true });
    const zip = path.join(tmp, "reels.zip");
    // GitHub redirects to a signed storage URL; fetch drops the token on that cross-origin hop.
    const res = await fetch(artifact.archive_download_url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error(`Downloading videos failed: ${res.status}`);
    await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(zip));
    await run("unzip", ["-q", "-o", "-j", zip, "-d", tmp]);
    fs.rmSync(zip);
    for (const f of fs.readdirSync(tmp)) if (f !== "reels.json" && !FILE_RE.test(f)) fs.rmSync(path.join(tmp, f), { recursive: true, force: true });
    JSON.parse(fs.readFileSync(path.join(tmp, "reels.json"), "utf8")); // must be valid
    fs.renameSync(tmp, final);
    prune(String(r.id));
  }

  function prune(keepId) {
    const current = String(state().current?.id ?? "");
    const dirs = fs
      .readdirSync(store.rendersDir)
      .filter((d) => /^\d+$/.test(d))
      .sort((a, b) => Number(b) - Number(a));
    for (const d of dirs.slice(KEEP)) if (d !== current && d !== keepId) fs.rmSync(path.join(store.rendersDir, d), { recursive: true, force: true });
  }

  function manifest(id = state().current?.id) {
    if (!id) return null;
    try {
      return JSON.parse(fs.readFileSync(path.join(store.rendersDir, String(id), "reels.json"), "utf8"));
    } catch {
      return null;
    }
  }

  // One GitHub operation at a time, so the background check and a click can't import the same run twice.
  let queue = Promise.resolve();
  const serial = (fn) => (...args) => (queue = queue.catch(() => {}).then(() => fn(...args)));

  return {
    state,
    start: serial(start),
    refresh: serial(refresh),
    loadLatest: serial(loadLatest),
    manifest,
    dirFor: (id) => path.join(store.rendersDir, String(id)),
  };
}

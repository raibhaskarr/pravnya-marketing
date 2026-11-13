// Pravnya Social dashboard. Plain DOM; every bit of text from the server goes in via textContent.
const LANGS = { en: "English", hi: "हिन्दी" };
const PLATFORMS = { instagram: "Instagram Reels", youtube: "YouTube Shorts", facebook: "Facebook", linkedin: "LinkedIn (square)" };
const app = document.getElementById("app");
let state = null;
const ui = {}; // per reel: { lang, platforms, mode, at, reviewer, preview, busy, message }
const reviewerName = () => localStorageGet("reviewer") || "";

function localStorageGet(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function localStorageSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else if (k in el && typeof v !== "string") el[k] = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) if (c != null && c !== false) el.append(c instanceof Node ? c : String(c));
  return el;
}

async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(path, {
    method,
    headers: { "X-Requested-With": "fetch", ...(body ? { "Content-Type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 401) {
    location.replace("/login");
    throw new Error("Signed out");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

const fmt = (iso) =>
  iso ? new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "";

// ---------- Render status ----------
function renderSection() {
  const { render, config } = state;
  const box = h("section", { class: "card", id: "render" });
  const notices = [];
  if (!config.github) notices.push(h("p", { class: "notice" }, "GITHUB_TOKEN isn't set on the server, so rendering from here is off."));
  if (!config.uploadPost) notices.push(h("p", { class: "notice" }, "Upload-Post isn't set up on the server yet. You can preview posts but not send them."));
  if (render.error) notices.push(h("p", { class: "notice error" }, render.error));

  const current = render.current
    ? h("p", {}, "Videos rendered ", h("b", {}, fmt(render.current.startedAt)), ` from commit ${render.current.commit} · `, h("a", { href: render.current.url, target: "_blank", rel: "noopener" }, "run on GitHub"))
    : h("p", { class: "muted" }, "No videos yet. Render them, or load the latest render from GitHub.");
  const active = render.active
    ? h("p", { class: "notice ok" }, h("span", { class: "spinner" }), ` Rendering (${render.active.status.replace("_", " ")}), started ${fmt(render.active.startedAt)}. Usually 10–15 minutes. `, h("a", { href: render.active.url, target: "_blank", rel: "noopener" }, "Watch on GitHub"))
    : null;

  const busy = { value: false };
  const action = (path) => async (e) => {
    if (busy.value) return;
    busy.value = true;
    e.target.disabled = true;
    try {
      state = await api(path, { method: "POST" });
      draw();
    } catch (err) {
      alert(err.message);
      e.target.disabled = false;
    } finally {
      busy.value = false;
    }
  };
  box.append(
    h("div", { class: "reel-head" }, h("h2", {}, "Videos"), h("div", { class: "row" },
      h("button", { type: "button", onclick: action("/api/render/latest"), disabled: !config.github || !!render.active }, "Load latest render"),
      h("button", { type: "button", class: "primary", onclick: action("/api/render"), disabled: !config.github || !!render.active, title: "Makes voiceovers and renders every reel from the main branch" }, "Render again"),
    )),
    current,
    ...(active ? [active] : []),
    ...notices,
  );
  return box;
}

// ---------- One reel ----------
function reelCard(reel) {
  const s = (ui[reel.id] ??= { lang: "en", platforms: Object.keys(PLATFORMS), mode: "now", at: "", preview: null, busy: false, message: null });
  const lang = s.lang;
  const runId = state.render.current.id;
  const approval = state.approvals[reel.id]?.[lang];
  const redraw = () => document.getElementById(`reel-${reel.id}`).replaceWith(reelCard(reel));
  const set = (patch, again = true) => {
    Object.assign(s, patch);
    if (again) redraw();
  };

  const videos = h("div", { class: "videos" },
    ["reel", "square"].map((f) => {
      const file = `${reel.id}-${lang}-${f}.mp4`;
      return reel.videos.includes(file)
        ? h("video", { src: `/media/${runId}/${file}`, controls: true, preload: "metadata", class: f, "aria-label": `${reel.title}, ${LANGS[lang]}, ${f === "reel" ? "vertical" : "square"}` })
        : h("p", { class: "muted small" }, `${f} video not rendered`);
    }),
  );

  const script = h("ol", { class: "script", lang },
    reel.scenes.map((sc) => h("li", {}, h("b", {}, sc.headline[lang]), h("br"), sc.narration[lang])),
    h("li", {}, h("b", {}, lang === "hi" ? "मुफ़्त शुरू करें" : "Free to start"), h("br"), state.manifest.outro[lang]),
  );

  // Approval
  let nameInput;
  const approvalRow = approval
    ? h("div", { class: "row" }, h("span", { class: "pill ok" }, "Approved"), h("span", { class: "small muted" }, `by ${approval.by}, ${fmt(approval.at)}`),
        h("button", { type: "button", class: "danger", onclick: () => approve(false) }, "Withdraw"))
    : h("div", { class: "row" },
        h("span", { class: "pill" }, "Not approved"),
        (nameInput = h("input", { type: "text", placeholder: "Reviewer's name", value: reviewerName(), "aria-label": "Reviewer's name", maxlength: "60" })),
        h("button", { type: "button", onclick: () => approve(true) }, lang === "hi" ? "Hindi script and post approved" : "Script and post approved"));
  async function approve(approved) {
    const name = nameInput?.value.trim();
    if (approved && !name) return alert("Add the reviewer's name first.");
    if (name) localStorageSet("reviewer", name);
    try {
      state = await api("/api/approve", { method: "POST", body: { reel: reel.id, lang, approved, name } });
      redraw();
    } catch (e) {
      alert(e.message);
    }
  }

  // Posting
  const body = () => ({ reel: reel.id, lang, platforms: s.platforms, mode: s.mode, at: s.at });
  async function preview() {
    try {
      set({ preview: (await api("/api/post/preview", { method: "POST", body: body() })).uploads, message: null });
    } catch (e) {
      set({ preview: null, message: { kind: "error", text: e.message } });
    }
  }
  async function post() {
    const when = s.mode === "at" ? `at ${s.at.replace("T", " ")} (${state.config.timezone})` : s.mode === "queue" ? "in the next free queue slot" : "right now";
    if (!confirm(`Post "${reel.title}" in ${LANGS[lang]} to ${s.platforms.map((p) => PLATFORMS[p]).join(", ")} ${when}?\n\nThis publishes publicly.`)) return;
    set({ busy: true, message: null });
    try {
      const { entry, state: next } = await api("/api/post", { method: "POST", body: body() });
      state = next;
      const failed = entry.results.filter((r) => r.error);
      set({ busy: false, preview: null, message: failed.length ? { kind: "error", text: failed.map((f) => `${f.platforms.join(", ")}: ${f.error}`).join("\n") } : { kind: "ok", text: "Sent to Upload-Post. Track it under Posts below." } }, false);
      draw();
    } catch (e) {
      set({ busy: false, message: { kind: "error", text: e.message } });
    }
  }

  const platformBoxes = h("fieldset", {}, h("legend", {}, "Where"),
    Object.entries(PLATFORMS).map(([p, label]) =>
      h("label", { class: "check" }, h("input", { type: "checkbox", checked: s.platforms.includes(p), onchange: (e) => set({ platforms: e.target.checked ? [...s.platforms, p] : s.platforms.filter((x) => x !== p), preview: null }) }), label)),
  );
  const whenBoxes = h("fieldset", {}, h("legend", {}, "When"),
    [["now", "Now"], ["at", "Schedule"], ["queue", "Next queue slot"]].map(([m, label]) =>
      h("label", { class: "check" }, h("input", { type: "radio", name: `when-${reel.id}`, checked: s.mode === m, onchange: () => set({ mode: m, preview: null }) }), label)),
    s.mode === "at" ? h("input", { type: "datetime-local", value: s.at, "aria-label": `Date and time (${state.config.timezone})`, oninput: (e) => set({ at: e.target.value, preview: null }, false) }) : null,
    s.mode === "at" ? h("span", { class: "small muted" }, state.config.timezone) : null,
  );
  const canPost = approval && state.config.uploadPost && s.platforms.length && !s.busy && (s.mode !== "at" || s.at);
  const why = !approval ? "Approve the script first" : !state.config.uploadPost ? "Upload-Post isn't set up yet" : "";

  return h("article", { class: "card", id: `reel-${reel.id}` },
    h("div", { class: "reel-head" },
      h("h2", {}, reel.title),
      h("div", { class: "tabs", role: "tablist", "aria-label": "Language" },
        Object.entries(LANGS).map(([l, label]) => h("button", { type: "button", role: "tab", "aria-selected": String(l === lang), onclick: () => set({ lang: l, preview: null, message: null }) }, label,
          state.approvals[reel.id]?.[l] ? " ✓" : ""))),
    ),
    h("div", { class: "reel-body" },
      videos,
      h("div", {},
        h("h3", {}, "Script (on-screen line, then voice)"), script,
        h("h3", {}, "Post text"), h("pre", { class: "post", lang }, `${reel.post[lang]}\n\n${reel.hashtags.join(" ")}`),
        h("div", { class: "panel" }, h("h3", {}, "Review"), approvalRow),
        h("div", { class: "panel" },
          h("h3", {}, "Post"),
          platformBoxes,
          whenBoxes,
          h("div", { class: "row" },
            h("button", { type: "button", onclick: preview, disabled: !s.platforms.length }, "Preview what's sent"),
            h("button", { type: "button", class: "primary", onclick: post, disabled: !canPost, title: why }, s.busy ? "Posting…" : "Post"),
            why ? h("span", { class: "small muted" }, why) : null),
          state.config.ai ? h("p", { class: "small muted" }, "Posts are labelled as containing AI-generated content (the voiceover).") : null,
          s.message ? h("p", { class: `notice ${s.message.kind}` }, s.message.text) : null,
          s.preview ? previewBox(s.preview) : null,
        ),
      ),
    ),
  );
}

function previewBox(uploads) {
  const shown = ["title", "youtube_title", "scheduled_date", "timezone", "add_to_queue", "is_ai_generated", "user"];
  return h("div", { class: "preview" },
    uploads.map((u) => h("div", {},
      h("b", {}, `${u.file} → ${u.platforms.map((p) => PLATFORMS[p]).join(", ")}`),
      h("dl", {}, shown.filter((k) => u.fields[k]).flatMap((k) => [h("dt", {}, k === "title" ? "caption" : k), h("dd", {}, u.fields[k])])),
    )),
  );
}

// ---------- Posts and schedule ----------
function postsSection() {
  const rows = state.posts.flatMap((p) => p.results.map((r, i) => {
    const id = r.response?.request_id || r.response?.job_id;
    const kind = r.response?.request_id ? "request" : "job";
    const statusCell = h("td", {});
    if (r.error) statusCell.append(h("span", { class: "pill bad" }, "Failed"), " ", h("span", { class: "small" }, r.error));
    else {
      statusCell.append(h("span", { class: "pill ok" }, r.response?.scheduled_date ? `Scheduled ${fmt(r.response.scheduled_date)}` : "Sent"));
      if (id) statusCell.append(" ", h("button", { type: "button", onclick: async (e) => {
        e.target.disabled = true;
        try {
          const st = await api(`/api/status/${encodeURIComponent(id)}?kind=${kind}`);
          const list = (st.results || []).map((x) => h("li", {}, `${x.platform}: ${x.success ? "posted" : x.message || "failed"} `, x.post_url ? h("a", { href: x.post_url, target: "_blank", rel: "noopener" }, "open") : null));
          e.target.replaceWith(h("div", { class: "small" }, `Status: ${st.status ?? "unknown"}`, h("ul", {}, list)));
        } catch (err) {
          e.target.replaceWith(h("span", { class: "small muted" }, err.message));
        }
      } }, "Check status"));
    }
    return h("tr", {},
      h("td", {}, i === 0 ? fmt(p.createdAt) : ""),
      h("td", {}, i === 0 ? `${p.title} (${p.lang})` : ""),
      h("td", {}, r.platforms.map((x) => PLATFORMS[x]).join(", ")),
      statusCell);
  }));
  const scheduled = h("div", {});
  return h("section", { class: "card" },
    h("div", { class: "reel-head" }, h("h2", {}, "Posts"),
      h("button", { type: "button", disabled: !state.config.uploadPost, onclick: () => loadScheduled(scheduled) }, "Show scheduled posts")),
    scheduled,
    rows.length
      ? h("div", { class: "table-wrap" }, h("table", {}, h("thead", {}, h("tr", {}, h("th", {}, "Sent"), h("th", {}, "Reel"), h("th", {}, "Where"), h("th", {}, "Result"))), h("tbody", {}, rows)))
      : h("p", { class: "muted" }, "Nothing posted from here yet."));
}

async function loadScheduled(box) {
  box.replaceChildren(h("p", { class: "muted" }, h("span", { class: "spinner" }), " Loading…"));
  try {
    const { scheduled_posts = [] } = await api("/api/scheduled");
    box.replaceChildren(scheduled_posts.length
      ? h("ul", {}, scheduled_posts.map((p) => h("li", {}, `${fmt(p.scheduled_date)} · ${(p.title || "").split("\n")[0].slice(0, 80)} `,
          h("button", { type: "button", class: "danger", onclick: async (e) => {
            if (!confirm("Cancel this scheduled post?")) return;
            e.target.disabled = true;
            try {
              await api(`/api/scheduled/${encodeURIComponent(p.job_id)}`, { method: "DELETE" });
              loadScheduled(box);
            } catch (err) {
              alert(err.message);
              e.target.disabled = false;
            }
          } }, "Cancel"))))
      : h("p", { class: "muted" }, "Nothing scheduled."));
  } catch (e) {
    box.replaceChildren(h("p", { class: "notice error" }, e.message));
  }
}

// ---------- Page ----------
function draw() {
  const sections = [renderSection()];
  if (state.manifest && state.render.current) sections.push(...state.manifest.reels.map(reelCard));
  sections.push(postsSection());
  app.replaceChildren(...sections);
}

async function load() {
  try {
    state = await api("/api/state");
    draw();
  } catch (e) {
    app.replaceChildren(h("p", { class: "notice error" }, e.message));
  }
}

// While a render runs, check on it every 20 seconds and redraw when it finishes.
setInterval(async () => {
  if (!state?.render.active) return;
  try {
    const next = await api("/api/render/refresh", { method: "POST" });
    const changed = next.render.active?.status !== state.render.active?.status || next.render.current?.id !== state.render.current?.id || next.render.error;
    state = next;
    if (changed) draw();
  } catch {}
}, 20_000);

document.getElementById("logout").addEventListener("click", async () => {
  await api("/api/logout", { method: "POST" }).catch(() => {});
  location.replace("/login");
});
load();

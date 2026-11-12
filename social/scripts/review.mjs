// Builds out/review.html: every rendered video next to its script and post text in both languages,
// so a reviewer (ideally a native Hindi speaker) can check them before posting.
import fs from "node:fs";
import path from "node:path";
import { loadOutro, loadReels } from "./load-reels.mjs";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "out");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const reels = await loadReels();
const outro = await loadOutro();

const section = (reel) => {
  const col = (lang) => {
    const videos = ["reel", "square"]
      .map((f) => `${reel.id}-${lang}-${f}.mp4`)
      .filter((f) => fs.existsSync(path.join(out, f)))
      .map((f) => `<video src="${f}" controls preload="metadata"></video>`)
      .join("");
    const lines = [...reel.scenes.map((s) => [s.headline[lang], s.narration[lang]]), [lang === "hi" ? "मुफ़्त शुरू करें" : "Free to start", outro[lang]]]
      .map(([h, n], i) => `<li><b>${i + 1}. ${esc(h)}</b><br>${esc(n)}</li>`)
      .join("");
    return `<div class="col" lang="${lang}"><h3>${lang === "hi" ? "हिन्दी" : "English"}</h3><div class="videos">${videos || "<p class=muted>Not rendered yet</p>"}</div>
      <h4>Script (on-screen line, then voice)</h4><ol>${lines}</ol>
      <h4>Post text</h4><pre>${esc(reel.post[lang])}\n\n${esc(reel.hashtags.join(" "))}</pre></div>`;
  };
  return `<section><h2>${esc(reel.title)} <code>${reel.id}</code></h2><div class="cols">${col("en")}${col("hi")}</div></section>`;
};

fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(
  path.join(out, "review.html"),
  `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pravnya reels review</title>
<style>body{font:16px/1.5 system-ui,"Noto Sans Devanagari",sans-serif;margin:0 auto;max-width:1200px;padding:24px;background:#F7F4EF;color:#1C1C1A}
h1,h2{color:#1A3D27}section{background:#fff;border:1px solid #E4DDD0;border-radius:16px;padding:20px;margin:24px 0}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:24px}@media(max-width:800px){.cols{grid-template-columns:1fr}}
.videos{display:flex;gap:12px;flex-wrap:wrap}video{height:420px;max-width:100%;border-radius:12px;background:#000}
pre{white-space:pre-wrap;background:#F0F5F2;padding:12px;border-radius:8px;font:inherit}.muted{color:#8A8A84}code{font-size:13px;color:#5A5A56}</style>
<h1>Pravnya reels: review before posting</h1><p>Check each Hindi script and post for natural wording and accuracy. Nothing here is posted until someone runs <code>npm run post -- &lt;reel&gt; --live</code>.</p>
${reels.map(section).join("")}`,
);
console.log(`wrote ${path.relative(process.cwd(), path.join(out, "review.html"))}`);

// Writes out/reels.json: every reel's scripts and post text, plus which videos were rendered.
// The social.pravnix.ai dashboard reads it, so it never needs the TypeScript sources.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { loadOutro, loadReels } from "./load-reels.mjs";

const out = path.resolve(import.meta.dirname, "../out");
const reels = await loadReels();
let commit = process.env.GITHUB_SHA;
try {
  commit ??= execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
} catch {}

const manifest = {
  generatedAt: new Date().toISOString(),
  commit: commit ?? null,
  outro: await loadOutro(),
  reels: reels.map((r) => ({ ...r, videos: fs.readdirSync(out).filter((f) => f.startsWith(`${r.id}-`) && f.endsWith(".mp4")).sort() })),
};
fs.writeFileSync(path.join(out, "reels.json"), JSON.stringify(manifest, null, 2));
console.log(`wrote out/reels.json (${manifest.reels.length} reels)`);

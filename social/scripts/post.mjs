// Posts a rendered reel to Instagram, YouTube Shorts, Facebook and LinkedIn through Upload-Post.
// Needs UPLOAD_POST_API_KEY and UPLOAD_POST_USER in social/.env. (The social.pravnix.ai dashboard does the same.)
//
// Usage:
//   npm run post -- <reel-id> --lang en|hi [--at 2026-11-20T19:00] [--queue] [--platforms instagram,youtube] [--live]
//
// Without --live it only prints what it would send (dry run).
// --at is in Asia/Kolkata time unless POST_TIMEZONE says otherwise. Without --at or --queue it posts immediately.
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { loadReels } from "./load-reels.mjs";
import { buildUploads, envFromProcess, PLATFORMS, sendUpload } from "./upload-post.mjs";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    lang: { type: "string", default: "en" },
    at: { type: "string" },
    queue: { type: "boolean", default: false },
    platforms: { type: "string", default: PLATFORMS.join(",") },
    live: { type: "boolean", default: false },
  },
});
const [reelId] = positionals;
const reel = (await loadReels()).find((r) => r.id === reelId);
if (!reel) throw new Error(`Unknown reel "${reelId}". Reels live in src/reels/.`);

const env = envFromProcess();
const out = path.resolve(import.meta.dirname, "../out");
const platforms = values.platforms.split(",").map((p) => p.trim());
const uploads = buildUploads(reel, values.lang, platforms, { at: values.at, queue: values.queue }, env);

for (const upload of uploads) {
  if (!fs.existsSync(path.join(out, upload.file))) throw new Error(`Missing out/${upload.file}. Run: npm run render -- ${upload.file.replace(".mp4", "")}`);
  console.log(`\n${values.live ? "POSTING" : "DRY RUN"}: ${upload.file} → ${upload.platforms.join(", ")}`);
  console.log(Object.entries(upload.fields).map(([k, v]) => `  ${k}: ${String(v).replace(/\n/g, "⏎")}`).join("\n"));
  if (values.live) console.log(`  → ${JSON.stringify(await sendUpload(upload, out, env))}`);
}
if (!values.live) console.log("\nDry run only. Add --live to send.");

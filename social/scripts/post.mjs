// Posts a rendered reel to Instagram, YouTube Shorts, Facebook and LinkedIn through Upload-Post.
// Needs UPLOAD_POST_API_KEY and UPLOAD_POST_USER in social/.env.
//
// Usage:
//   npm run post -- <reel-id> --lang en|hi [--at 2026-11-20T19:00] [--queue] [--platforms instagram,youtube] [--live]
//
// Without --live it only prints what it would send (dry run).
// --at is in Asia/Kolkata time unless POST_TIMEZONE says otherwise. Without --at or --queue it posts immediately.
// Vertical video (…-reel.mp4) goes to Instagram, YouTube and Facebook; square (…-square.mp4) to LinkedIn.
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { loadReels } from "./load-reels.mjs";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    lang: { type: "string", default: "en" },
    at: { type: "string" },
    queue: { type: "boolean", default: false },
    platforms: { type: "string", default: "instagram,youtube,facebook,linkedin" },
    live: { type: "boolean", default: false },
  },
});
const [reelId] = positionals;
const reel = (await loadReels()).find((r) => r.id === reelId);
if (!reel) throw new Error(`Unknown reel "${reelId}". Reels live in src/reels/.`);
const lang = values.lang;
if (!["en", "hi"].includes(lang)) throw new Error("--lang must be en or hi");
if (values.at && values.queue) throw new Error("Use --at or --queue, not both");

const platforms = values.platforms.split(",").map((p) => p.trim());
const root = path.resolve(import.meta.dirname, "..");
const caption = `${reel.post[lang]}\n\n${reel.hashtags.join(" ")}`;
// YouTube needs a title (max 100 chars): first line of the post, plus #Shorts.
const ytTitle = `${reel.post[lang].split("\n")[0].replace(/[\p{Extended_Pictographic}️]/gu, "").trim().slice(0, 88)} #Shorts`;
const ai = process.env.POST_AI_DISCLOSURE !== "false"; // the voiceover is AI-generated

const jobs = [
  { format: "reel", platforms: platforms.filter((p) => p !== "linkedin") },
  { format: "square", platforms: platforms.filter((p) => p === "linkedin") },
].filter((j) => j.platforms.length);

for (const job of jobs) {
  const video = path.join(root, "out", `${reel.id}-${lang}-${job.format}.mp4`);
  if (!fs.existsSync(video)) throw new Error(`Missing ${path.relative(root, video)}. Run: npm run render -- ${reel.id}-${lang}-${job.format}`);

  const fields = {
    user: process.env.UPLOAD_POST_USER ?? "(UPLOAD_POST_USER)",
    title: caption,
    async_upload: "true",
    is_ai_generated: String(ai),
  };
  if (values.at) Object.assign(fields, { scheduled_date: values.at, timezone: process.env.POST_TIMEZONE || "Asia/Kolkata" });
  if (values.queue) fields.add_to_queue = "true";
  if (job.platforms.includes("instagram")) Object.assign(fields, { media_type: "REELS", share_to_feed: "true" });
  if (job.platforms.includes("youtube")) {
    Object.assign(fields, {
      youtube_title: ytTitle,
      youtube_description: caption,
      privacyStatus: "public",
      selfDeclaredMadeForKids: "false",
      containsSyntheticMedia: String(ai),
      defaultLanguage: lang,
      defaultAudioLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      categoryId: "27", // Education
    });
  }
  if (job.platforms.includes("facebook")) {
    Object.assign(fields, { facebook_media_type: "REELS", facebook_description: caption });
    if (process.env.FACEBOOK_PAGE_ID) fields.facebook_page_id = process.env.FACEBOOK_PAGE_ID;
  }
  if (job.platforms.includes("linkedin")) {
    Object.assign(fields, { linkedin_description: caption, visibility: "PUBLIC" });
    if (process.env.LINKEDIN_PAGE_ID) fields.target_linkedin_page_id = process.env.LINKEDIN_PAGE_ID;
  }

  console.log(`\n${values.live ? "POSTING" : "DRY RUN"}: ${path.basename(video)} → ${job.platforms.join(", ")}`);
  console.log(Object.entries(fields).map(([k, v]) => `  ${k}: ${String(v).replace(/\n/g, "⏎")}`).join("\n"));
  if (!values.live) continue;

  const key = process.env.UPLOAD_POST_API_KEY;
  if (!key || !process.env.UPLOAD_POST_USER) throw new Error("Set UPLOAD_POST_API_KEY and UPLOAD_POST_USER in social/.env");
  const form = new FormData();
  for (const [k, v] of Object.entries(fields)) form.append(k, v);
  for (const p of job.platforms) form.append("platform[]", p);
  if (job.platforms.includes("youtube")) for (const t of reel.hashtags) form.append("tags[]", t.replace(/^#/, ""));
  form.append("video", new Blob([fs.readFileSync(video)], { type: "video/mp4" }), path.basename(video));
  const res = await fetch("https://api.upload-post.com/api/upload", { method: "POST", headers: { Authorization: `Apikey ${key}` }, body: form });
  const body = await res.text();
  if (!res.ok) throw new Error(`Upload-Post ${res.status}: ${body}`);
  console.log(`  → ${body}`);
}
if (!values.live) console.log("\nDry run only. Add --live to send.");

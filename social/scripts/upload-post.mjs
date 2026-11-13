// Builds and sends Upload-Post requests. Shared by `npm run post` and the social.pravnix.ai dashboard,
// so both send exactly the same thing.
import fs from "node:fs";
import path from "node:path";

export const API = "https://api.upload-post.com/api";
export const PLATFORMS = ["instagram", "youtube", "facebook", "linkedin"];

/**
 * One reel + language → the uploads to send. Vertical video goes to Instagram, YouTube and Facebook;
 * the square cut goes to LinkedIn, so a post to all four is two uploads.
 *
 * reel: { id, post: {en, hi}, hashtags }
 * when: { at?: "2026-11-20T19:00", queue?: boolean }  (neither = post now)
 * env:  { user, timezone, ai, facebookPageId, linkedinPageId }
 */
export function buildUploads(reel, lang, platforms, when, env) {
  if (!["en", "hi"].includes(lang)) throw new Error("Language must be en or hi");
  const unknown = platforms.filter((p) => !PLATFORMS.includes(p));
  if (unknown.length) throw new Error(`Unknown platform: ${unknown.join(", ")}`);
  if (!platforms.length) throw new Error("Pick at least one platform");
  if (when.at && when.queue) throw new Error("Schedule a time or add to the queue, not both");
  if (when.at && !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(when.at)) throw new Error("Time must look like 2026-11-20T19:00");

  const caption = `${reel.post[lang]}\n\n${reel.hashtags.join(" ")}`;
  // YouTube needs a title (max 100 chars): first line of the post, plus #Shorts.
  const ytTitle = `${reel.post[lang].split("\n")[0].replace(/[\p{Extended_Pictographic}️]/gu, "").trim().slice(0, 88)} #Shorts`;
  const ai = env.ai !== false; // the voiceover is AI-generated

  return [
    { format: "reel", platforms: platforms.filter((p) => p !== "linkedin") },
    { format: "square", platforms: platforms.filter((p) => p === "linkedin") },
  ]
    .filter((u) => u.platforms.length)
    .map((u) => {
      const fields = { user: env.user || "(UPLOAD_POST_USER)", title: caption, async_upload: "true", is_ai_generated: String(ai) };
      if (when.at) Object.assign(fields, { scheduled_date: when.at, timezone: env.timezone || "Asia/Kolkata" });
      if (when.queue) fields.add_to_queue = "true";
      if (u.platforms.includes("instagram")) Object.assign(fields, { media_type: "REELS", share_to_feed: "true" });
      if (u.platforms.includes("youtube")) {
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
      if (u.platforms.includes("facebook")) {
        Object.assign(fields, { facebook_media_type: "REELS", facebook_description: caption });
        if (env.facebookPageId) fields.facebook_page_id = env.facebookPageId;
      }
      if (u.platforms.includes("linkedin")) {
        Object.assign(fields, { linkedin_description: caption, visibility: "PUBLIC" });
        if (env.linkedinPageId) fields.target_linkedin_page_id = env.linkedinPageId;
      }
      const tags = u.platforms.includes("youtube") ? reel.hashtags.map((t) => t.replace(/^#/, "")) : [];
      return { file: `${reel.id}-${lang}-${u.format}.mp4`, platforms: u.platforms, fields, tags };
    });
}

/** Reads Upload-Post settings from environment variables. */
export function envFromProcess(e = process.env) {
  return {
    apiKey: e.UPLOAD_POST_API_KEY,
    user: e.UPLOAD_POST_USER,
    timezone: e.POST_TIMEZONE || "Asia/Kolkata",
    ai: e.POST_AI_DISCLOSURE !== "false",
    facebookPageId: e.FACEBOOK_PAGE_ID,
    linkedinPageId: e.LINKEDIN_PAGE_ID,
  };
}

/** Sends one upload. `dir` holds the rendered MP4s. Returns Upload-Post's JSON response. */
export async function sendUpload(upload, dir, env) {
  if (!env.apiKey || !env.user) throw new Error("UPLOAD_POST_API_KEY and UPLOAD_POST_USER are not set");
  const video = path.join(dir, upload.file);
  if (!fs.existsSync(video)) throw new Error(`Missing video ${upload.file}`);
  const form = new FormData();
  for (const [k, v] of Object.entries(upload.fields)) form.append(k, v);
  for (const p of upload.platforms) form.append("platform[]", p);
  for (const t of upload.tags) form.append("tags[]", t);
  form.append("video", new Blob([fs.readFileSync(video)], { type: "video/mp4" }), upload.file);
  return call("/upload", env, { method: "POST", body: form });
}

/** Calls any Upload-Post endpoint, e.g. call("/uploadposts/schedule", env). */
export async function call(pathname, env, init = {}) {
  if (!env.apiKey) throw new Error("UPLOAD_POST_API_KEY is not set");
  const res = await fetch(`${API}${pathname}`, { ...init, headers: { Authorization: `Apikey ${env.apiKey}`, ...init.headers } });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  if (!res.ok) throw new Error(`Upload-Post ${res.status}: ${body.message || body.error || text.slice(0, 300)}`);
  return body;
}

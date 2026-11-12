// Generates voiceovers with Sarvam AI (Bulbul) for every scene + outro of every reel, in English and Hindi.
// Needs SARVAM_API_KEY in social/.env. Only re-generates clips whose text or voice changed.
// Usage: npm run tts [-- <reel-id>]
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { loadOutro, loadReels } from "./load-reels.mjs";

const key = process.env.SARVAM_API_KEY;
if (!key) throw new Error("Set SARVAM_API_KEY in social/.env (see .env.example)");

const VOICE = {
  en: { language_code: "en-IN", speaker: process.env.SARVAM_SPEAKER_EN || "priya" },
  hi: { language_code: "hi-IN", speaker: process.env.SARVAM_SPEAKER_HI || "priya" },
};
const MODEL = process.env.SARVAM_MODEL || "bulbul:v3";
const PACE = Number(process.env.SARVAM_PACE || 1);
const RATE = 24000;

const root = path.resolve(import.meta.dirname, "..");
const voiceDir = path.join(root, "public/voice");
const manifestPath = path.join(root, "src/voice-manifest.json");
fs.mkdirSync(voiceDir, { recursive: true });
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

/** Seconds of audio in a PCM WAV file. */
function wavSeconds(buf) {
  let offset = 12;
  let byteRate = 0;
  while (offset < buf.length - 8) {
    const id = buf.toString("ascii", offset, offset + 4);
    const size = buf.readUInt32LE(offset + 4);
    if (id === "fmt ") byteRate = buf.readUInt32LE(offset + 16);
    if (id === "data") return Math.min(size, buf.length - offset - 8) / byteRate;
    offset += 8 + size + (size % 2);
  }
  throw new Error("Not a WAV file");
}

async function speak(text, lang) {
  const res = await fetch("https://api.sarvam.ai/text-to-speech", {
    method: "POST",
    headers: { "api-subscription-key": key, "Content-Type": "application/json" },
    body: JSON.stringify({ text, ...VOICE[lang], model: MODEL, pace: PACE, speech_sample_rate: RATE, output_audio_codec: "wav" }),
  });
  if (!res.ok) throw new Error(`Sarvam ${res.status}: ${await res.text()}`);
  const { audios } = await res.json();
  return Buffer.from(audios[0], "base64");
}

const filter = process.argv[2] ?? "";
const reels = (await loadReels()).filter((r) => r.id.includes(filter));
const outro = await loadOutro();

for (const reel of reels) {
  for (const lang of ["en", "hi"]) {
    const texts = [...reel.scenes.map((s) => s.narration[lang]), outro[lang]];
    const clips = [];
    for (const [i, text] of texts.entries()) {
      const hash = crypto.createHash("sha1").update(JSON.stringify([text, VOICE[lang], MODEL, PACE])).digest("hex").slice(0, 10);
      const file = `${reel.id}-${lang}-${i}-${hash}.wav`;
      const full = path.join(voiceDir, file);
      if (!fs.existsSync(full)) {
        fs.writeFileSync(full, await speak(text, lang));
        console.log(`  generated ${file}`);
      }
      clips.push({ file, seconds: Number(wavSeconds(fs.readFileSync(full)).toFixed(3)) });
    }
    manifest[reel.id] = { ...manifest[reel.id], [lang]: clips };
    console.log(`✓ ${reel.id} ${lang}: ${clips.reduce((a, c) => a + c.seconds, 0).toFixed(1)}s of voice`);
  }
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

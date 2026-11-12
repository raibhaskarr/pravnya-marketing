import manifest from "./voice-manifest.json";
import type { Lang, Reel } from "./reels/types";

export const FPS = 30;
const PAD_SECONDS = 0.45;

export type VoiceClip = { file: string; seconds: number };
type Manifest = Record<string, Partial<Record<Lang, VoiceClip[]>>>;

/** Voice clips for a reel, one per scene plus the outro, if they've been generated (scripts/tts.mjs). */
export function voiceFor(reel: Reel, lang: Lang): VoiceClip[] | undefined {
  const clips = (manifest as Manifest)[reel.id]?.[lang];
  return clips && clips.length === reel.scenes.length + 1 ? clips : undefined;
}

function estimateSeconds(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(2.4, words / 2.6);
}

/** Frames for each scene, then the outro: voice length + a short pause, or a reading-speed estimate. */
export function sceneFrames(reel: Reel, lang: Lang, outroNarration: string): number[] {
  const voice = voiceFor(reel, lang);
  const texts = [...reel.scenes.map((s) => s.narration[lang]), outroNarration];
  return texts.map((t, i) => Math.round(((voice ? voice[i].seconds : estimateSeconds(t)) + PAD_SECONDS) * FPS));
}

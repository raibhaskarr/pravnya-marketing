import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { loadFont as loadDevanagari } from "@remotion/google-fonts/NotoSansDevanagari";
import type { Lang } from "./reels/types";

// Same palette as the website (website/tailwind.config.ts).
export const colors = {
  forest: "#2C5F3E",
  forestDark: "#1A3D27",
  forestSubtle: "#EBF3EE",
  sageSubtle: "#F0F5F2",
  gold: "#B8935A",
  goldSubtle: "#FAF3E8",
  background: "#F7F4EF",
  surface: "#FFFFFF",
  darkSurface: "#1C2B22",
  ink: "#1C1C1A",
  inkSecondary: "#5A5A56",
};

const display = loadFraunces("normal", { weights: ["600"], subsets: ["latin"] }).fontFamily;
const body = loadJakarta("normal", { weights: ["500", "700"], subsets: ["latin"] }).fontFamily;
const deva = loadDevanagari("normal", { weights: ["500", "700"], subsets: ["devanagari", "latin"] }).fontFamily;

/** Headline and body fonts per language. Hindi uses Noto Sans Devanagari, with Latin words (Pravnya, AI, IEP) in the same face. */
export const fonts = (lang: Lang) =>
  lang === "hi"
    ? { headline: deva, body: deva, headlineWeight: 700 }
    : { headline: display, body, headlineWeight: 600 };

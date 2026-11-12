export const LANGS = ["en", "hi"] as const;
export type Lang = (typeof LANGS)[number];
export type Text = Record<Lang, string>;

export type Scene = {
  /** File in public/screens (synced from the website's app screenshots). Omit for a text-only card. */
  screen?: string;
  /** Short on-screen line (≤ ~7 words). */
  headline: Text;
  /** What the voice says. Also shown as captions. One or two short sentences. */
  narration: Text;
  /** Where to zoom on the screenshot, 0 = top, 1 = bottom. Default 0.35. */
  focus?: number;
};

export type Reel = {
  id: string;
  /** Internal name for the review page. */
  title: string;
  scenes: Scene[];
  /** Post text for each language. Keep claims within what the app really does; no medical claims. */
  post: Text;
  hashtags: string[];
};

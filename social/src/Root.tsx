import { Composition } from "remotion";
import { AppDemoReel, OUTRO, type Format, type ReelProps } from "./AppDemoReel";
import { reels } from "./reels";
import { LANGS } from "./reels/types";
import { FPS, sceneFrames } from "./timing";

const SIZES: Record<Format, { width: number; height: number }> = {
  reel: { width: 1080, height: 1920 }, // Instagram Reels, YouTube Shorts, Facebook Reels
  square: { width: 1080, height: 1080 }, // LinkedIn and Facebook feed
};

// One composition per reel × language × format, e.g. "log-in-seconds-hi-reel".
export function Root() {
  return (
    <>
      {reels.flatMap((reel) =>
        LANGS.flatMap((lang) =>
          (Object.keys(SIZES) as Format[]).map((format) => (
            <Composition
              key={`${reel.id}-${lang}-${format}`}
              id={`${reel.id}-${lang}-${format}`}
              component={AppDemoReel}
              defaultProps={{ reelId: reel.id, lang, format } satisfies ReelProps}
              durationInFrames={sceneFrames(reel, lang, OUTRO.narration[lang]).reduce((a, b) => a + b, 0)}
              fps={FPS}
              {...SIZES[format]}
            />
          )),
        ),
      )}
    </>
  );
}

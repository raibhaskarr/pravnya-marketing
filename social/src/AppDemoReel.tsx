import { AbsoluteFill, Audio, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Captions } from "./components/Captions";
import { Phone } from "./components/Phone";
import { colors, fonts } from "./brand";
import { reels } from "./reels";
import type { Lang, Scene, Text } from "./reels/types";
import { sceneFrames, voiceFor } from "./timing";

export type Format = "reel" | "square";
export type ReelProps = { reelId: string; lang: Lang; format: Format };

export const OUTRO: { headline: Text; narration: Text } = {
  headline: { en: "Free to start", hi: "मुफ़्त शुरू करें" },
  narration: {
    en: "Pravnya. Free to start, on the web and Android.",
    hi: "Pravnya. वेब और Android पर मुफ़्त शुरू करें।",
  },
};

export const findReel = (id: string) => {
  const reel = reels.find((r) => r.id === id);
  if (!reel) throw new Error(`Unknown reel "${id}"`);
  return reel;
};

function Headline({ text, lang, size, color }: { text: string; lang: Lang; size: number; color: string }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame, fps, config: { damping: 200 } });
  const f = fonts(lang);
  return (
    <div
      style={{
        fontFamily: f.headline,
        fontWeight: f.headlineWeight,
        fontSize: size,
        lineHeight: lang === "hi" ? 1.35 : 1.12,
        color,
        textAlign: "center",
        padding: "0 70px",
        opacity: p,
        transform: `translateY(${(1 - p) * 30}px)`,
      }}
    >
      {text}
    </div>
  );
}

function SceneView({ scene, lang, format, frames }: { scene: Scene; lang: Lang; format: Format; frames: number }) {
  const square = format === "square";
  const f = fonts(lang);
  const captionSize = square ? 34 : 44;
  if (!scene.screen) {
    // Hook card: big statement on dark green.
    return (
      <AbsoluteFill style={{ background: colors.forestDark, justifyContent: "center" }}>
        <Headline text={scene.headline[lang]} lang={lang} size={square ? 84 : 104} color="#fff" />
        <AbsoluteFill style={{ justifyContent: "flex-end", paddingBottom: square ? 70 : 220 }}>
          <Captions text={scene.narration[lang]} durationInFrames={frames} fontFamily={f.body} size={captionSize} />
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }
  return (
    <AbsoluteFill style={{ background: colors.background }}>
      <div style={{ position: "absolute", top: square ? 40 : 130, left: 0, right: 0 }}>
        <Headline text={scene.headline[lang]} lang={lang} size={square ? 54 : 72} color={colors.forestDark} />
      </div>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: square ? 170 : 380 }}>
        <Phone screen={scene.screen} focus={scene.focus} width={square ? 300 : 520} durationInFrames={frames} />
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: "flex-end", paddingBottom: square ? 36 : 190 }}>
        <Captions text={scene.narration[lang]} durationInFrames={frames} fontFamily={f.body} size={captionSize} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

function Outro({ lang, format }: { lang: Lang; format: Format }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame, fps, config: { damping: 200 } });
  const square = format === "square";
  const f = fonts(lang);
  return (
    <AbsoluteFill style={{ background: colors.forestDark, alignItems: "center", justifyContent: "center", gap: 36 }}>
      <Img src={staticFile("brand/pravnya-logo-mark.svg")} style={{ width: square ? 130 : 180, transform: `scale(${0.8 + 0.2 * p})`, opacity: p }} />
      <div style={{ fontFamily: fonts("en").headline, fontWeight: 600, fontSize: square ? 92 : 120, color: "#fff" }}>Pravnya</div>
      <div style={{ fontFamily: f.body, fontWeight: 700, fontSize: square ? 44 : 56, color: "#9FC5AC" }}>{OUTRO.headline[lang]}</div>
      <div
        style={{
          fontFamily: fonts("en").body,
          fontWeight: 700,
          fontSize: square ? 40 : 50,
          color: colors.forestDark,
          background: "#fff",
          borderRadius: 999,
          padding: "18px 44px",
          opacity: interpolate(frame, [10, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        pravnya.com
      </div>
      <div style={{ fontFamily: fonts("en").body, fontSize: square ? 28 : 34, color: "#C8D4CC" }}>Web · Android</div>
    </AbsoluteFill>
  );
}

export function AppDemoReel({ reelId, lang, format }: ReelProps) {
  const reel = findReel(reelId);
  const frames = sceneFrames(reel, lang, OUTRO.narration[lang]);
  const voice = voiceFor(reel, lang);
  let start = 0;
  const items = [...reel.scenes, null].map((scene, i) => {
    const from = start;
    start += frames[i];
    return (
      <Sequence key={i} from={from} durationInFrames={frames[i]}>
        {scene ? <SceneView scene={scene} lang={lang} format={format} frames={frames[i]} /> : <Outro lang={lang} format={format} />}
        {voice ? <Audio src={staticFile(`voice/${voice[i].file}`)} /> : null}
      </Sequence>
    );
  });
  return <AbsoluteFill style={{ background: colors.background }}>{items}</AbsoluteFill>;
}

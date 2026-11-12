import { useCurrentFrame } from "remotion";

/** Shows the narration in short chunks spread evenly over the scene, like burned-in subtitles. */
export function Captions({ text, durationInFrames, fontFamily, size }: { text: string; durationInFrames: number; fontFamily: string; size: number }) {
  const frame = useCurrentFrame();
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  for (let i = 0; i < words.length; i += 6) chunks.push(words.slice(i, i + 6).join(" "));
  const index = Math.min(chunks.length - 1, Math.floor((frame / durationInFrames) * chunks.length));
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "0 60px" }}>
      <span
        style={{
          fontFamily,
          fontSize: size,
          fontWeight: 700,
          lineHeight: 1.35,
          color: "#fff",
          background: "rgba(28,43,34,0.86)",
          borderRadius: 18,
          padding: "14px 26px",
          textAlign: "center",
        }}
      >
        {chunks[index]}
      </span>
    </div>
  );
}

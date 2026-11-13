import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

/** App screenshot in a phone frame, sliding up on entry with a slow push-in towards `focus`. */
export function Phone({ screen, focus = 0.35, width, durationInFrames }: { screen: string; focus?: number; width: number; durationInFrames: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.12], { extrapolateRight: "clamp" });
  const height = width * (2556 / 1179);
  return (
    <div
      style={{
        width,
        height,
        borderRadius: width * 0.12,
        background: "#111",
        padding: width * 0.025,
        boxShadow: "0 40px 80px rgba(28,43,34,0.28)",
        transform: `translateY(${(1 - enter) * 120}px)`,
        opacity: enter,
      }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: width * 0.1, overflow: "hidden", background: "#fff" }}>
        <Img
          src={staticFile(`screens/${screen}`)}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${zoom})`, transformOrigin: `50% ${focus * 100}%` }}
        />
      </div>
    </div>
  );
}

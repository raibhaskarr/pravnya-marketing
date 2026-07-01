import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderBrandOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0E1410",
          backgroundImage:
            "radial-gradient(circle at 12% -8%, rgba(46, 125, 91, 0.35), transparent 60%), radial-gradient(circle at 88% 8%, rgba(196, 154, 90, 0.18), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", width: 56, height: 56, borderRadius: 12, background: "#3D9E73", marginBottom: 40 }} />
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600, color: "#F0EDE6", letterSpacing: -1 }}>Pravnix Labs</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#9AB5A5", maxWidth: 900 }}>
          Responsible AI for meaningful human problems.
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}

import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1410",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 256,
            height: 256,
            borderRadius: 56,
            background: "#3D9E73",
          }}
        />
      </div>
    ),
    { width: 512, height: 512 },
  );
}

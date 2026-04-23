import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Majlis Studio — AI Transformation & Web Development, Abu Dhabi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #000000 0%, #022636 50%, #2f7cab 100%)",
          color: "#f1f1f1",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Majlis Studio
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            AI Transformation & Web Development
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              opacity: 0.7,
              marginTop: 16,
            }}
          >
            Abu Dhabi, UAE
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 40,
              padding: "12px 32px",
              borderRadius: 9999,
              background: "rgba(47, 124, 171, 0.3)",
              border: "1px solid rgba(241, 241, 241, 0.2)",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            AI-Powered Ideas. Automated Execution.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

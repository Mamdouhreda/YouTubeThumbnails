import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #FF0000",
            borderRadius: "20px",
            padding: "40px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: "bold",
              background: "linear-gradient(to right, #FF0000, #FF4444)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            YouTube Thumbnail Downloader
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "#ffffff",
              margin: 0,
              textAlign: "center",
            }}
          >
            Get High Quality YouTube Thumbnails
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

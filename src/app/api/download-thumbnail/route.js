import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get("url");
  const filename = url.searchParams.get("filename");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing image URL" }, { status: 400 });
  }

  try {
    // Fetch the image from YouTube
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Get the image data as an array buffer
    const imageBuffer = await response.arrayBuffer();

    // Return the image with appropriate headers for download
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="${
          filename || "thumbnail.jpg"
        }"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error downloading thumbnail:", error);
    return NextResponse.json(
      { error: "Failed to download image" },
      { status: 500 }
    );
  }
}

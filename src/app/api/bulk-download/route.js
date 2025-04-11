import { NextResponse } from "next/server";
import JSZip from "jszip";

export async function POST(request) {
  try {
    const { videoIds, sizes = ["maxresdefault"] } = await request.json();

    if (!Array.isArray(videoIds) || videoIds.length === 0) {
      return NextResponse.json(
        { error: "No video IDs provided" },
        { status: 400 }
      );
    }

    if (!Array.isArray(sizes) || sizes.length === 0) {
      return NextResponse.json(
        { error: "No thumbnail sizes selected" },
        { status: 400 }
      );
    }

    // Create a ZIP file containing all thumbnails
    const zip = new JSZip();
    let successCount = 0;

    for (const videoId of videoIds) {
      for (const size of sizes) {
        try {
          const response = await fetch(
            `https://img.youtube.com/vi/${videoId}/${size}.jpg`
          );

          if (response.ok) {
            const arrayBuffer = await response.arrayBuffer();
            zip.file(`${videoId}_${size}.jpg`, arrayBuffer);
            successCount++;
          }
        } catch (error) {
          console.error(
            `Error downloading thumbnail for ${videoId} (${size}):`,
            error
          );
        }
      }
    }

    if (successCount === 0) {
      return NextResponse.json(
        { error: "Failed to download any thumbnails" },
        { status: 500 }
      );
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipBuffer = await zipBlob.arrayBuffer();

    return new NextResponse(zipBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=youtube-thumbnails.zip",
      },
    });
  } catch (error) {
    console.error("Error processing bulk download:", error);
    return NextResponse.json(
      { error: "Failed to process bulk download" },
      { status: 500 }
    );
  }
}

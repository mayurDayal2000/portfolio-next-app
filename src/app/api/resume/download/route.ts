import { head } from "@vercel/blob";
import { NextResponse } from "next/server";

// Downloads the resume file from Vercel Blob Storage
export async function GET() {
  try {
    const filename = process.env.NEXT_PUBLIC_CV_FILENAME as string;

    // Get the blob URL from Vercel Blob
    const blobUrl = `https://${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com/${filename}`;

    // Fetch the file from Vercel Blob
    const response = await fetch(blobUrl);

    if (!response.ok) {
      console.error(`Blob fetch failed: ${response.status} ${response.statusText}`);
      return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
    }

    // Get the file as a buffer
    const buffer = await response.arrayBuffer();

    // Return the file with appropriate headers
    return new NextResponse(buffer, {
      headers: {
        "Cache-Control": "public, max-age=2592000",
        "Content-Disposition": `inline; filename=${filename}`,
        "Content-Type": "application/pdf",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 });
  }
}

// Checks if the resume is available without downloading it
export async function HEAD() {
  try {
    const filename = process.env.NEXT_PUBLIC_CV_FILENAME as string;

    // Check if the blob exists
    try {
      await head(`https://${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com/${filename}`);

      return new NextResponse(null, {
        headers: {
          "Content-Type": "application/pdf",
        },
        status: 200,
      });
    } catch {
      return new NextResponse(null, { status: 404 });
    }
  } catch (error) {
    console.error("Error checking resume availability:", error);
    return new NextResponse(null, { status: 500 });
  }
}

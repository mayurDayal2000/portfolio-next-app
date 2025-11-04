import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { RESUME_FILE_PATH, RESUME_FILENAME } from "@/lib/resume-utils";

/**
 * GET handler - Downloads the resume file
 */
export async function GET() {
  try {
    const absolutePath = path.resolve(process.cwd(), RESUME_FILE_PATH as string);

    if (!existsSync(absolutePath)) {
      return NextResponse.json({ error: "Resume file not found", success: false }, { status: 404 });
    }

    const fileBuffer = await readFile(absolutePath);

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        "Cache-Control": "public, max-age=3600, immutable",
        "Content-Disposition": `attachment; filename="${RESUME_FILENAME as string}"`,
        "Content-Type": "application/pdf",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return NextResponse.json(
      { error: "Failed to serve resume file", success: false },
      { status: 500 }
    );
  }
}

/**
 * HEAD handler - Checks if resume file exists
 */
export async function HEAD() {
  try {
    const absolutePath = path.resolve(process.cwd(), RESUME_FILE_PATH as string);

    if (!existsSync(absolutePath)) {
      return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(null, {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Content-Type": "application/pdf",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error checking resume availability:", error);
    return new NextResponse(null, { status: 500 });
  }
}

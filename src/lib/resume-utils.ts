export interface ResumeConfig {
  filename: string;
  url: string;
}

export interface ResumeAvailability {
  available: boolean;
  error?: string;
}

export interface DownloadResult {
  error?: string;
  success: boolean;
}

const RESUME_URL = process.env.DISCORD_CV_URL;
const RESUME_FILENAME = process.env.NEXT_PUBLIC_CV_FILENAME;

/**
 * Gets resume configuration from environment variables
 */
export function getResumeConfig(): ResumeConfig {
  return {
    filename: RESUME_FILENAME as string,
    url: RESUME_URL as string,
  };
}

/**
 * Checks if the resume file is available on the server
 */
export async function checkResumeAvailability(): Promise<ResumeAvailability> {
  try {
    const { url } = getResumeConfig();
    const response = await fetch(url, { method: "HEAD" });

    if (response.ok) {
      return { available: true };
    }

    return {
      available: false,
      error: response.status === 404 ? "Resume file not found" : "Server error",
    };
  } catch (error) {
    console.error("Error checking resume availability:", error);
    return {
      available: false,
      error: "Network error - please check your connection",
    };
  }
}

/**
 * Downloads the resume file
 */
export async function downloadResume(): Promise<DownloadResult> {
  try {
    const { filename, url } = getResumeConfig();

    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      return {
        error: response.status === 404 ? "Resume file not found" : "Failed to download resume",
        success: false,
      };
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);

    return { success: true };
  } catch (error) {
    console.error("Error downloading resume:", error);
    return {
      error: "Failed to download resume. Please try again.",
      success: false,
    };
  }
}

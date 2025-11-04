import { type NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import type { ContactFormData } from "@/lib/discord";
import { formatDiscordMessage, sendToDiscord } from "@/lib/discord";
import { checkRateLimit, formatResetTime } from "@/lib/rate-limit";

// Validation schema matching the frontend
const ContactFormSchema = z
  .object({
    audienceType: z.enum(["recruiter", "hiring-manager", "client", "other"] as const, {
      message: "Please select an option",
    }),
    budget: z.string().optional(),
    company: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Please enter a valid email"),
    message: z
      .string()
      .min(1, "Message is required")
      .min(10, "Message should be at least 10 characters")
      .max(500, "Message should not exceed 500 characters"),
    name: z.string().min(1, "Name is required"),
    purpose: z.string().min(1, "Purpose is required"),
    roleInterest: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.audienceType === "recruiter" || data.audienceType === "hiring-manager") {
      if (!data.company || (typeof data.company === "string" && data.company.trim().length === 0)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Company name is required",
          path: ["company"],
        });
      }
      if (
        !data.roleInterest ||
        (typeof data.roleInterest === "string" && data.roleInterest.trim().length === 0)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Role/Position is required",
          path: ["roleInterest"],
        });
      }
    }
  });

/**
 * Gets the client IP address from the request
 */
function getClientIp(request: NextRequest): string {
  // Try various headers that might contain the real IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // Fallback to a default (shouldn't happen in production)
  return "unknown";
}

/**
 * POST /api/contact
 * Handles contact form submissions and sends them to Discord
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIp);
    if (!rateLimitResult.allowed) {
      const resetTimeFormatted = formatResetTime(rateLimitResult.resetTime);
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: `You've submitted too many requests. Please try again in ${resetTimeFormatted}.`,
        },
        {
          headers: {
            "Retry-After": String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
          status: 429,
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          details: validationResult.error.issues,
          error: "Validation failed",
          message: "Please check your form and try again.",
        },
        { status: 400 }
      );
    }

    const formData: ContactFormData = validationResult.data;

    // Check if Discord webhook URL is configured
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL is not configured");
      return NextResponse.json(
        {
          error: "Configuration error",
          message: "Contact form is not properly configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Format and send message to Discord
    const discordPayload = formatDiscordMessage(formData);
    const result = await sendToDiscord(webhookUrl, discordPayload);

    if (!result.success) {
      console.error("Failed to send to Discord:", result.error);

      // Retry once after a short delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const retryResult = await sendToDiscord(webhookUrl, discordPayload);

      if (!retryResult.success) {
        return NextResponse.json(
          {
            error: "Failed to send message",
            message: "Unable to process your request. Please try again or contact me directly.",
          },
          { status: 500 }
        );
      }
    }

    // Success response
    return NextResponse.json(
      {
        message: "Your message has been sent successfully!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 * Handles CORS preflight requests
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      status: 200,
    }
  );
}

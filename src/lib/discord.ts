/**
 * Discord Integration Utilities
 * Handles message formatting and webhook communication
 */

export interface ContactFormData {
  audienceType: "recruiter" | "hiring-manager" | "client" | "other";
  budget?: string;
  company?: string;
  email: string;
  message: string;
  name: string;
  purpose: string;
  roleInterest?: string;
}

export interface DiscordEmbed {
  title: string;
  color: number;
  fields: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  footer: {
    text: string;
  };
  timestamp: string;
}

export interface DiscordWebhookPayload {
  embeds: DiscordEmbed[];
}

/**
 * Sanitizes user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove HTML brackets
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
}

/**
 * Maps audience type to display label
 */
function getAudienceTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    client: "Client",
    "hiring-manager": "Hiring Manager",
    other: "Other",
    recruiter: "Recruiter",
  };
  return labels[type] || type;
}

/**
 * Maps purpose to display label
 */
function getPurposeLabel(purpose: string): string {
  const labels: Record<string, string> = {
    collaboration: "Collaboration",
    contract: "Contract Work",
    "full-time": "Full-time Role",
    "new-project": "New Project (Freelance)",
    other: "Just saying hi!",
  };
  return labels[purpose] || purpose;
}

/**
 * Maps budget to display label
 */
function getBudgetLabel(budget: string): string {
  const labels: Record<string, string> = {
    "5k-10k": "$5K - $10K",
    "10k-25k": "$10K - $25K",
    "25k-plus": "$25K+",
    "under-5k": "< $5K",
  };
  return labels[budget] || budget;
}

/**
 * Formats contact form data into a Discord embed message
 */
export function formatDiscordMessage(data: ContactFormData): DiscordWebhookPayload {
  const fields: DiscordEmbed["fields"] = [
    {
      inline: true,
      name: "👤 Name",
      value: sanitizeInput(data.name),
    },
    {
      inline: true,
      name: "📧 Email",
      value: sanitizeInput(data.email),
    },
    {
      inline: true,
      name: "🎯 Audience Type",
      value: getAudienceTypeLabel(data.audienceType),
    },
    {
      inline: true,
      name: "📋 Purpose",
      value: getPurposeLabel(data.purpose),
    },
  ];

  // Add conditional fields based on audience type
  if (data.company) {
    fields.push({
      inline: true,
      name: "🏢 Company",
      value: sanitizeInput(data.company),
    });
  }

  if (data.roleInterest) {
    fields.push({
      inline: true,
      name: "💼 Role/Position",
      value: sanitizeInput(data.roleInterest),
    });
  }

  if (data.budget) {
    fields.push({
      inline: true,
      name: "💰 Budget",
      value: getBudgetLabel(data.budget),
    });
  }

  // Add message as a full-width field
  fields.push({
    inline: false,
    name: "💬 Message",
    value: sanitizeInput(data.message),
  });

  const embed: DiscordEmbed = {
    color: 5814783, // Brand primary color (#58B0FF in decimal)
    fields,
    footer: {
      text: "Portfolio Contact Form",
    },
    timestamp: new Date().toISOString(),
    title: "🔔 New Contact Form Submission",
  };

  return {
    embeds: [embed],
  };
}

/**
 * Sends a message to Discord via webhook
 */
export async function sendToDiscord(
  webhookUrl: string,
  payload: DiscordWebhookPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(webhookUrl, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Discord webhook error:", response.status, errorText);
      return {
        error: `Discord API returned ${response.status}`,
        success: false,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send Discord webhook:", error);
    return {
      error: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
}

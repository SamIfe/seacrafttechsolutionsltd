import { company } from "@/content/company";
import type { ContactFormValues } from "@/lib/validations";

export type EmailResult =
  | { ok: true }
  | { ok: false; error: string };

type ResendResponse = {
  id?: string;
  message?: string;
};

export async function sendContactEmail(
  data: ContactFormValues,
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `Website enquiry from ${data.name}`;
  const textBody = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    // TODO: Set RESEND_API_KEY in production to deliver contact form emails via Resend.
    console.info("[email stub] Contact form submission:", {
      to: company.email,
      subject,
      body: textBody,
    });
    return { ok: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [company.email],
        reply_to: data.email,
        subject,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const payload = (await response.json()) as ResendResponse;
      return {
        ok: false,
        error: payload.message ?? "Email delivery failed",
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Email delivery failed" };
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";
import { ContactNotification } from "@/components/emails/ContactNotification";
import { ContactConfirmation } from "@/components/emails/ContactConfirmation";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (Note: resets on serverless cold starts)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    
    const requestData = rateLimit.get(ip);
    if (requestData) {
      if (requestData.lastReset < windowStart) {
        // Reset window
        rateLimit.set(ip, { count: 1, lastReset: now });
      } else if (requestData.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      } else {
        rateLimit.set(ip, { count: requestData.count + 1, lastReset: requestData.lastReset });
      }
    } else {
      rateLimit.set(ip, { count: 1, lastReset: now });
    }

    // 2. Parse and Validate Request
    const body = await req.json();
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: result.error.errors },
        { status: 400 }
      );
    }

    const { name, email, message, botField } = result.data;

    // 3. Honeypot Spam Check
    if (botField) {
      // If a bot filled out the hidden field, silently reject
      return NextResponse.json({ success: true });
    }

    const myEmail = process.env.CONTACT_EMAIL;
    
    if (!myEmail || !process.env.RESEND_API_KEY) {
      console.error("Missing environment variables: CONTACT_EMAIL or RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 4. Send Emails (Concurrent)
    const [notificationResponse, confirmationResponse] = await Promise.all([
      // Email to Portfolio Owner
      resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // Update domain once verified on Resend
        to: myEmail,
        replyTo: email,
        subject: `New Message from ${name}`,
        react: React.createElement(ContactNotification, { name, email, message }),
      }),
      // Auto-reply to Sender
      resend.emails.send({
        from: "Praveen <onboarding@resend.dev>", // Update domain once verified on Resend
        to: email,
        subject: "Thank you for reaching out!",
        react: React.createElement(ContactConfirmation, { name }),
      }),
    ]);

    if (notificationResponse.error || confirmationResponse.error) {
      console.error("Resend Error:", notificationResponse.error || confirmationResponse.error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const inquiryTypes = new Set([
  "Partnership or integration inquiry",
  "Press or research",
  "Investor relations",
  "Career inquiry",
  "Pravnya product question",
  "Other",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 200, email: 320, type: 100, message: 5000 };

// In-memory, best-effort limiter: fine on a long-lived Node server, a no-op
// safety net on serverless (state resets per instance). Swap the Map for a
// durable store (e.g. Upstash/Redis) if real abuse shows up in the logs.
const submissionsByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

type ContactPayload = {
  name: string;
  email: string;
  type: string;
  message: string;
  company?: string; // honeypot — real users never fill this in
};

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim() || body.name.length > MAX_LENGTHS.name) return "A valid name is required.";
  if (!body.email?.trim() || !EMAIL_RE.test(body.email) || body.email.length > MAX_LENGTHS.email) {
    return "A valid email address is required.";
  }
  if (!body.type || !inquiryTypes.has(body.type)) return "A valid inquiry type is required.";
  if (!body.message?.trim() || body.message.length > MAX_LENGTHS.message) return "A message is required.";
  return null;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots that fill hidden fields get a fake success with no send.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  if (!webhookUrl) {
    // Nothing is wired up yet — say so plainly instead of pretending to send.
    return NextResponse.json(
      { ok: false, error: "not_configured", message: "Message delivery isn't configured yet." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        type: body.type,
        message: body.message,
        source: "pravnix.ai contact form",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Delivery failed. Please try again." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Delivery failed. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

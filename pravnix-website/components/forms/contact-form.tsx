"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

const inquiryTypes = [
  "Partnership or integration inquiry",
  "Press or research",
  "Investor relations",
  "Career inquiry",
  "Pravnya product question",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fields, setFields] = useState({ name: "", email: "", type: "", message: "" });

  const mailtoFallback = (() => {
    const subject = fields.type || "Message from pravnix.ai";
    const body = `${fields.message}\n\n— ${fields.name}${fields.email ? ` (${fields.email})` : ""}`;
    return `mailto:${siteConfig.emails.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      type: String(formData.get("type") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""), // honeypot
    };
    setFields({ name: payload.name, email: payload.email, type: payload.type, message: payload.message });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error === "not_configured" ? null : (data.error ?? null));
      }
    } catch {
      setStatus("error");
      setErrorMessage(null);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-border bg-bg-surface p-6 shadow-glowS">
        <p className="text-sm text-text-secondary">Thanks — your message has been sent. We respond personally within one business day.</p>
      </div>
    );
  }

  return (
    <form className="rounded-md border border-border bg-bg-surface p-6 shadow-glowS" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-text-primary">
          Your name
          <input required name="name" className="rounded-md border border-border bg-bg-inset px-4 py-3 text-text-primary placeholder:text-text-placeholder" placeholder="Name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-text-primary">
          Email
          <input required type="email" name="email" className="rounded-md border border-border bg-bg-inset px-4 py-3 text-text-primary placeholder:text-text-placeholder" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-text-primary">
          I am reaching out about
          <select required name="type" defaultValue="" className="rounded-md border border-border bg-bg-inset px-4 py-3 text-text-primary">
            <option value="" disabled>Select one</option>
            {inquiryTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-text-primary">
          Message
          <textarea required name="message" rows={6} className="rounded-md border border-border bg-bg-inset px-4 py-3 text-text-primary placeholder:text-text-placeholder" placeholder="How can we help?" />
        </label>
        {/* Honeypot: hidden from sighted users and screen readers, bots often fill every field */}
        <label className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          Leave this blank
          <input tabIndex={-1} autoComplete="off" name="company" />
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold tracking-[0.03em] text-white transition hover:bg-forest-bright hover:shadow-glowForest disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
        {status === "error" ? (
          <p className="text-sm text-text-secondary">
            {errorMessage ?? "We couldn't send this automatically."} Please email us directly at{" "}
            <a href={mailtoFallback} className="text-forest-bright hover:text-text-primary">
              {siteConfig.emails.general}
            </a>{" "}
            — your message above won&apos;t be lost if you copy it in.
          </p>
        ) : null}
      </div>
    </form>
  );
}

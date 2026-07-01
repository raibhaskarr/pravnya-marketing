"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-6 shadow-s md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        trackEvent("contact_submit");
        // TODO: Submit to an approved form backend with spam protection.
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Your name
          <input required name="name" className="rounded-sm border border-border-strong bg-white px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email address
          <input required type="email" name="email" className="rounded-sm border border-border-strong bg-white px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          I am a
          <select name="role" className="rounded-sm border border-border-strong bg-white px-4 py-3 font-normal">
            <option>Parent</option>
            <option>Therapist or professional</option>
            <option>School or centre</option>
            <option>Investor</option>
            <option>Journalist</option>
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Subject
          <input name="subject" className="rounded-sm border border-border-strong bg-white px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Message
          <textarea required name="message" rows={6} className="rounded-sm border border-border-strong bg-white px-4 py-3 font-normal" />
        </label>
        <button type="submit" className="min-h-11 rounded-full bg-forest px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-forest-light">
          Send message
        </button>
        {submitted ? (
          <p role="status" className="rounded-md bg-forest-subtle px-4 py-3 text-sm text-forest-dark">
            Thank you. We'll be in touch within one working day.
          </p>
        ) : null}
      </div>
    </form>
  );
}


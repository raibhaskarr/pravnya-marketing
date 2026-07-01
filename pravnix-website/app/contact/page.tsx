import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Hero title="Get in touch." body="We respond personally to every message. Response time: one business day." />
      <section className="pb-24">
        <div className="container-standard grid gap-10 lg:grid-cols-[1fr_0.78fr]">
          <ContactForm />
          <aside className="rounded-md border border-border bg-bg-surface p-7 shadow-glowS">
            <h2 className="text-xl font-semibold text-text-primary">Direct contacts</h2>
            <div className="mt-6 grid gap-5 text-sm">
              {Object.entries(siteConfig.emails).map(([label, email]) => (
                <div key={label}>
                  <p className="capitalize text-text-tertiary">{label}</p>
                  <a href={`mailto:${email}`} className="mt-1 inline-flex text-text-secondary hover:text-text-primary">{email}</a>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-border pt-6 text-sm leading-6 text-text-secondary">
              Pravnya product support is handled at <a href="https://pravnya.com/contact" className="text-forest-bright hover:text-text-primary">pravnya.com/contact</a>. This form is for company-level inquiries.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

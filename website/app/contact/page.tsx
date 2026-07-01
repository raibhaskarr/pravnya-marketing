import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Hero } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Hero centered title="We respond to every message personally." body="Questions, feedback, support requests — we read them all." />
      <section className="pb-20">
        <div className="container-standard">
          <ContactForm />
          <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-forest-subtle p-6 text-sm leading-7 text-forest-dark">
            <p>We aim to respond within one working day. For urgent matters — particularly anything related to your data or account — we prioritize those first.</p>
            <div className="mt-5 grid gap-2">
              <p>Support: support@pravnya.com</p>
              <p>Press: press@pravnya.com</p>
              <p>Partnerships: partnerships@pravnya.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


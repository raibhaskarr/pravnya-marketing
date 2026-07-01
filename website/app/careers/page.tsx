import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("careers");

export default function CareersPage() {
  return (
    <>
      <Hero centered eyebrow="Careers" title="We're building something that matters. Join us if that's what you're looking for." body="Pravnya is an early-stage company building a long-term product. We are deliberate about the people we add." />
      <section className="pb-20">
        <div className="container-standard max-w-3xl rounded-xl border border-border bg-surface p-8 shadow-s">
          <h2 className="font-display text-3xl text-ink">Open roles</h2>
          <p className="mt-5 text-lg leading-8 text-ink-secondary">
            There are no public roles listed yet. If you are interested in responsible AI, family technology, or products where trust is genuinely the foundation, we would like to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}


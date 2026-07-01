import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("blog");

const pillars = [
  "Understanding your child",
  "Navigating the system",
  "The record",
  "Privacy and data",
  "Ask Pravnya AI",
];

export default function BlogPage() {
  return (
    <>
      <Hero centered eyebrow="Coming soon" title="Careful writing for parents navigating development." body="Long-form, expert content that parents will find genuinely useful. Not promotional. Not keyword-stuffed." />
      <section className="pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-5">
          {pillars.map((pillar) => (
            <article key={pillar} className="rounded-lg border border-border bg-surface p-6 shadow-s">
              <h2 className="font-display text-2xl text-ink">{pillar}</h2>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner title="Build your child's record." href="/contact" />
    </>
  );
}


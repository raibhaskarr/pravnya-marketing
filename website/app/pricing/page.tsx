import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("pricing");

const tiers = [
  ["Record", "Free tier", "Unlimited capture, timeline and search, basic monthly review."],
  ["Understand", "Premium tier", "AI pattern recognition, appointment preparation, professional sharing, and exports."],
  ["Professional", "Coming later", "For therapists, schools, and clinics. Professional intake from family records."],
];

export default function PricingPage() {
  return (
    <>
      <Hero centered eyebrow="Pricing" title="Free to start. Premium for the families who need more." body="Families should not face a financial barrier to starting their child's developmental record." />
      <section className="pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-3">
          {tiers.map(([name, label, body]) => (
            <article key={name} className="rounded-xl border border-border bg-surface p-8 shadow-s">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">{label}</p>
              <h2 className="mt-4 font-display text-3xl text-ink">{name}</h2>
              <p className="mt-5 text-base leading-7 text-ink-secondary">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner title="Start with the record." body="No countdown timers. No urgency pressure. Just a useful place to begin." />
    </>
  );
}


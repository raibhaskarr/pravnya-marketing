import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiPrinciples } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("whyPravnya");

export default function WhyPravnyaPage() {
  return (
    <>
      <Hero centered eyebrow="What we believe" title="We built Pravnya because the tools that existed weren't good enough for the families who needed them most." />
      <section className="py-20">
        <div className="container-standard">
          <blockquote className="mx-auto max-w-4xl border-l-4 border-gold bg-gold-subtle p-8 font-display text-3xl leading-tight text-ink">
            Every child deserves to be understood. Not tracked. Not compared. Understood.
          </blockquote>
          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-8 text-ink-secondary">
            <p>That belief shapes every feature, every AI decision, every privacy practice, and every word on this website.</p>
            <p>It means progress in Pravnya is always measured within a child's own story — never against other children.</p>
            <p>It means the record belongs to the family — not to us, not to professionals, not to advertisers.</p>
          </div>
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard grid gap-12 lg:grid-cols-2">
          <SectionHeading align="left" title="Not a single tool was built for the family's longitudinal understanding." body="Milestone trackers measure moments. Photo apps preserve memories. Clinical tools serve professional workflows. School apps manage communication." />
          <SectionHeading align="left" title="The parent who knows their child best should feel the most confident." body="Parents who have spent months building detailed knowledge often arrive at professional appointments feeling uncertain because their knowledge is in informal form." />
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard">
          <SectionHeading title="We chose trustworthy over impressive. Here's why." body="Pravnya AI always shows what observations its insights come from, acknowledges when evidence is limited, never uses diagnostic language, and can be edited or dismissed by you." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiPrinciples.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
      <section className="bg-gold-subtle py-20 text-center">
        <div className="container-standard">
          <h2 className="font-display text-4xl text-ink">Three things we will never do.</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 font-display text-2xl text-ink">
            <p>We will never build a product that makes you feel like a worse parent.</p>
            <p>We will never reduce your child to a data profile.</p>
            <p>We will never treat your family's trust as a commercial asset.</p>
          </div>
        </div>
      </section>
      <CtaBanner title="Does this feel like the product you've been looking for?" cta="Start your record — it's free" href="/contact" />
    </>
  );
}


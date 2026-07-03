import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("growth");

export default function GrowthPage() {
  return (
    <>
      <Hero centered eyebrow="Growth" title="Progress that belongs to your child alone." body="Not a percentile. Not a rank. A story of how far this specific child has come — in their own time, on their own terms." />
      <section className="pb-20">
        <div className="container-standard grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading align="left" title="The most important thing about a developmental record is what you can't see on day one." body="On the day you capture an observation, it is a single point. Placed among twenty similar observations across three months, it becomes a pattern." />
          <div className="rounded-xl border border-border bg-surface p-4 shadow-s md:p-8">
            <img
              src="/assets/brand/illustration-growth-timeline.svg"
              alt="A gentle growth timeline showing isolated observations becoming visible patterns over time"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="We measure progress one way: against where this child was." body="Pravnya does not rank your child against a population. It shows you what has changed in your child's own record across the time you have been watching." />
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-background p-8 font-mono text-sm leading-7">
            <p>Instead of: "Below average for age" → Pravnya shows: "3 new communication skills in 60 days"</p>
            <p>Instead of: "At the 32nd percentile" → Pravnya shows: "Sleep patterns consistent for 6 weeks"</p>
            <p>Instead of: "Delayed in fine motor" → Pravnya shows: "Independent spoon use achieved, 14 July"</p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard">
          <blockquote className="mx-auto max-w-4xl border-l-4 border-gold bg-gold-subtle p-8 font-display text-2xl leading-tight text-ink">
            "Pravnya was the first tool that showed me what she had actually done — what she had learned, what had changed, what she was working toward."
          </blockquote>
        </div>
      </section>
      <CtaBanner title="Start building the record now. The compound starts today." cta="Begin for free" />
    </>
  );
}

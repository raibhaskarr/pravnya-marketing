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
          <SectionHeading align="left" title="The most important thing about a developmental record is what you can't see on day one." body="On the day you log an entry, it is a single point. Placed among other entries for the same goal, at home and at the centre, it starts to show how your child is growing." />
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
          <SectionHeading title="We measure progress one way: against where this child was." body="Pravnya does not rank your child against a population. It shows how each goal is going against your child's own history, with a coloured bar for the last five tries — from needing help to doing it independently." />
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-background p-8 font-mono text-sm leading-7">
            <p>Instead of: "Below average for age" → Pravnya shows: "Getting stronger"</p>
            <p>Instead of: "At the 32nd percentile" → Pravnya shows: "Steady — doing this well"</p>
            <p>Instead of: "Delayed in communication" → Pravnya shows: "First time this showed up at Home"</p>
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
      <CtaBanner title="Start building the record now. The compound starts today." cta="Start free" />
    </>
  );
}

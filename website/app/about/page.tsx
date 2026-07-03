import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Hero
        title="We built Pravnya because of a moment every parent knows."
        visualSrc="/assets/brand/illustration-parent-child-moment.svg"
        visualAlt="A parent and child sitting together as everyday moments become an organized Pravnya record"
        visualCaption="The company began with a simple question: where should all these moments go?"
      />
      <section className="pb-20">
        <div className="container-standard grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-ink-secondary">
            <p>There is a moment many parents know.</p>
            <p>It happens in a waiting room, or the night before an appointment, or in the middle of a conversation where someone asks: "So, what exactly has changed?"</p>
            <p>The memory is real. The knowledge is there. But it has no shape.</p>
            <p>That moment is the origin of Pravnya. Not a market opportunity. A gap in the world that we had experienced personally, and that we couldn't find anyone building a real answer to.</p>
          </div>
          <PlaceholderFrame label="Founding team photograph" />
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="The beliefs that shape everything we build." />
          <div className="mt-10 grid gap-5">
            {[
              "Every child deserves to be understood — not tracked, not compared, understood.",
              "Progress cannot be compared. It belongs to the child who is making it.",
              "Parents deserve confidence in the conversations that matter most.",
              "AI must remain honest and human-centred — especially here.",
              "Trust is earned slowly. We are building for the long term.",
            ].map((belief) => <div key={belief} className="rounded-lg border-l-4 border-gold bg-gold-subtle p-6 font-display text-2xl">{belief}</div>)}
          </div>
        </div>
      </section>
      <CtaBanner title="Build the record your child's story deserves." />
    </>
  );
}

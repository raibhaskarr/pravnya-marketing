import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
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
      <section className="pb-16 md:pb-20">
        <div className="container-standard">
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-8 text-ink-secondary">
            <p>Before an appointment or school meeting, parents are often asked a simple question: “What exactly has changed?”</p>
            <p>The knowledge is there, but it is scattered across memory, messages, photos and reports. Pravnya was built to give that knowledge a useful shape.</p>
            <p>We are building a calm, private companion that helps families keep what matters and speak with confidence when the conversation matters.</p>
          </div>
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="The beliefs that shape everything we build." />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5">
            {[
              "Every child deserves to be understood—not ranked.",
              "Parents deserve confidence in important conversations.",
              "AI must explain what it knows and what it does not.",
              "A family's trust is never a commercial asset.",
            ].map((belief) => <div key={belief} className="rounded-lg border-l-4 border-gold bg-gold-subtle p-6 font-display text-2xl">{belief}</div>)}
          </div>
        </div>
      </section>
      <CtaBanner title="Keep what matters in one place." cta="Start free" />
    </>
  );
}

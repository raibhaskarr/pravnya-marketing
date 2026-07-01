import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PrincipleCard } from "@/components/ui/principle-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiPrinciples } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("responsibleAi");

export default function ResponsibleAiPage() {
  return (
    <>
      <Hero title="These are not guidelines. They are permanent commitments." body="Every AI output in every Pravnix product is governed by nine published principles. They do not change as models improve. They do not have exceptions for better user experience. They are permanent." />
      <section className="py-24">
        <div className="container-narrow">
          <SectionHeading title="The reasoning behind the permanence." body="Most AI product principles are guidelines — aspirations that can be overridden by a product decision, a commercial incentive, or a new model capability. We chose a different architecture. The families who trust us with their child's developmental story deserve commitments that hold under commercial pressure." />
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="The nine permanent principles" title="A public specification for how Pravnix AI behaves." />
          <div className="mt-10 grid gap-4">
            {aiPrinciples.map(([number, title, body]) => <PrincipleCard key={number} number={number} title={title} body={body} />)}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="From principle to product." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "When Pravnya AI generates a pattern observation, it shows the specific entries, number of observations, and a limited-evidence label when appropriate.",
              "Every AI-generated appointment preparation summary includes inline edit controls on each section before export.",
              "When AI surfaces a question for an appointment, it shows the pattern that prompted it and why a professional is better positioned to interpret it.",
            ].map((body) => <PrincipleCard key={body} body={body} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-surface py-24">
        <div className="container-narrow">
          <SectionHeading title="These commitments have a cost. We accept it." body="Applying these principles means we have declined features that would have been popular. We have built AI outputs that are less impressive than what the underlying models could produce. We have chosen honest uncertainty over confident-sounding outputs that parents might have preferred in the moment." />
          <div className="mt-8"><Button href="/contact" variant="secondary">Contact us with questions</Button></div>
        </div>
      </section>
      <CtaBanner title="These principles are public so you can hold us to them." primary="Contact us" secondary="Explore AI engineering" secondaryHref="/ai-engineering" />
    </>
  );
}

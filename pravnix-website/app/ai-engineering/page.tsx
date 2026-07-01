import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { PrincipleCard } from "@/components/ui/principle-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { engineeringPrinciples, tradeoffs } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("aiEngineering");

export default function AiEngineeringPage() {
  return (
    <>
      <Hero title="We separate what AI can do from what AI should do." body="Then we build for should. That decision shows up in the engineering — in how outputs are structured, what sources are surfaced, and what the model is never allowed to say." />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="The principles that shape how we build." />
          <div className="mt-10 grid gap-4">
            {engineeringPrinciples.map(([number, title, body]) => <PrincipleCard key={number} number={number} title={title} body={body} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-narrow">
          <SectionHeading title="Why longitudinal matters." body="Most AI operates on a point-in-time basis: you provide input, the model provides output. Longitudinal intelligence is different. The record accumulates over months. The model reads the accumulated record — not just the most recent input — and surfaces patterns that are only visible across time." />
        </div>
        <div className="container-standard mt-12 grid gap-5 md:grid-cols-3">
          {[
            "The product becomes more valuable the longer it is used — because the record accumulates and becomes the primary intelligence input.",
            "Isolated observations that might mislead a point-in-time system are contextualized by the surrounding record.",
            "The switching cost is not the subscription fee. It is the loss of months or years of specific, organized developmental history.",
          ].map((body) => <PrincipleCard key={body} body={body} />)}
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="The tradeoffs we made — and why." />
          <div className="mt-10"><ComparisonTable rows={tradeoffs} /></div>
        </div>
      </section>
      <section className="bg-bg-surface py-24">
        <div className="container-standard">
          <SectionHeading title="The stack (at a high level)." body="We use frontier language models via API, with output validation layers that enforce the nine permanent AI principles before any output is surfaced to the user. We do not fine-tune on family data. We do not store model context between unrelated sessions." />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Large language models", "Output validation", "Longitudinal retrieval", "Privacy-preserving design", "Mobile-first architecture"].map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="If this is how you think about AI, we should talk." body="The engineering challenges at Pravnix require the same combination that the product requires: technical rigor and principled constraint." />
          <div className="mt-8"><Button href="/careers" variant="secondary">See engineering roles</Button></div>
        </div>
      </section>
    </>
  );
}

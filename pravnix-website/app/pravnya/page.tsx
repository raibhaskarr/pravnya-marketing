import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PrincipleCard } from "@/components/ui/principle-card";
import { SpecificationBlock } from "@/components/ui/specification-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiPrinciples } from "@/content/pages";
import { pageMetadata, softwareApplicationJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("pravnya");

export default function PravnyaPage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <Hero title="Pravnya: the living developmental record." body="Built for families. Governed by published AI principles. Designed to be trusted across years." primaryCta="Visit Pravnya.com" primaryHref="https://pravnya.com" secondaryCta="Read the AI architecture" secondaryHref="/ai-engineering" />
      <section className="py-24">
        <div className="container-narrow">
          <SectionHeading title="The product in precise terms." body="Pravnya is a longitudinal record management system with a parent-facing interface and an AI layer that operates under published constraints. It captures developmental observations, organizes that information into a structured record, and analyzes the record to surface patterns, generate summaries, and assist with appointment preparation — always tracing outputs to source observations." />
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading title="How the AI works — and what it does not do." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Input layer", "Parent observations via text, voice, photos, and documents. Each entry is tagged with domain, setting, date, and associated professional."],
              ["Intelligence layer", "Longitudinal pattern detection, summary generation, appointment preparation, and question surfacing based on record patterns."],
              ["Constraint layer", "Nine permanent AI principles govern every output: no diagnostic language, no population comparison, no overclaiming, and evidence visibility required."],
            ].map(([title, body]) => <PrincipleCard key={title} title={title} body={body} />)}
          </div>
          <div className="mt-10">
            <SpecificationBlock title="Nine principles" lines={aiPrinciples.map(([number, title, body]) => `${number}  ${title.padEnd(32)} ${body}`)} />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard grid gap-5 md:grid-cols-3">
          {[
            "The record belongs to the family. Pravnix does not own, license, or commercialize family data.",
            "AI models are trained on general datasets. Family records are never used as training data.",
            "Families export their complete record at any time, in full, in standard formats.",
          ].map((body) => <PrincipleCard key={body} body={body} />)}
        </div>
      </section>
      <CtaBanner title="Pravnya is the first product built from the Pravnix operating philosophy." primary="Visit Pravnya.com" primaryHref="https://pravnya.com" secondary="Contact us about partnership" secondaryHref="/contact" />
    </>
  );
}

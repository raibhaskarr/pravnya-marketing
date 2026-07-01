import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/ui/blog-card";
import { SpecificationBlock } from "@/components/ui/specification-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { openQuestions, researchAreas } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("research");

export default function ResearchPage() {
  return (
    <>
      <Hero title="We publish what we learn because the field benefits from specificity." body="Pravnix Labs shares its research on responsible AI in sensitive domains, longitudinal intelligence, and the specific challenges of building AI products for families." />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="What we are working on." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {researchAreas.map(([title, body]) => <BlogCard key={title} eyebrow="Research area" title={title} body={body} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading title="Published work." />
          <div className="mt-10">
            <BlogCard eyebrow="Coming 2026" title="Trustworthy over impressive: AI output design in sensitive domains" body="Forthcoming paper on the design principles behind Pravnya's AI output layer." />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="Questions we don't yet have answers to." />
          <div className="mt-10"><SpecificationBlock lines={openQuestions} /></div>
        </div>
      </section>
      <section className="bg-bg-surface py-24">
        <div className="container-standard">
          <SectionHeading title="We are interested in research partners." body="Pravnix Labs is interested in research collaborations with academic institutions, public health organizations, and AI ethics groups working on responsible AI in sensitive human domains." />
          <div className="mt-8"><Button href="/contact">Contact us about research</Button></div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/ui/blog-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PrincipleCard } from "@/components/ui/principle-card";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { careerStatements, hiringSteps } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("careers");

export default function CareersPage() {
  return (
    <>
      <Hero title="We are small and careful. We are looking for the same." body="Pravnix Labs is an early-stage company building a product that families will use across years of their child's life. We hire at the rate the product quality requires — not at the rate investors expect." />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="What working here means." />
          <div className="mt-10 grid gap-4">
            {careerStatements.map((body) => <PrincipleCard key={body} body={body} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-narrow">
          <SectionHeading title="The kind of people we want to work with." body="We are not looking for people who are excited about AI. We are looking for people who are careful about AI — who find the constraint more interesting than the capability, who want to build something that is trusted rather than something that is impressive." />
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="Current openings." />
          <div className="mt-10">
            <BlogCard eyebrow="No open roles listed" title="We do not always have open roles." body="We share all openings here and on relevant public channels. If the way we think resonates, contact us directly." />
          </div>
          <div className="mt-8"><Button href="/contact" variant="secondary">Get notified of new roles</Button></div>
        </div>
      </section>
      <section className="bg-bg-surface py-24">
        <div className="container-standard">
          <SectionHeading title="How we hire." />
          <div className="mt-10"><Timeline steps={hiringSteps} /></div>
        </div>
      </section>
      <CtaBanner title="If this is the work you're looking for, we should talk." primary="Contact us directly" secondary="Read Responsible AI" secondaryHref="/responsible-ai" />
    </>
  );
}

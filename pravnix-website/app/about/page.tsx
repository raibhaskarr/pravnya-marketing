import type { Metadata } from "next";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { PrincipleCard } from "@/components/ui/principle-card";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutBeliefs } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Hero eyebrow="About Pravnix Labs" title="We built this because we experienced the gap ourselves." body="Pravnix Labs began with a specific observation: the tools available to families navigating complex child development were inadequate in a way that had a specific structure and a specific solution. We built the solution before we had a company name. The company name came later." />
      <section className="py-24">
        <div className="container-standard grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeading title="The problem that started everything" body="There is a moment many parents know. The night before an appointment with a specialist. Trying to reconstruct, from memory, the specific evidence that would make the next thirty minutes useful. The knowledge is real. The record is not. We experienced this. We looked for an existing product that solved it and found products that solved parts of it — milestone trackers that measured moments, photo apps that preserved memories, clinical tools that served professionals. None of them was built around the family's longitudinal understanding of their specific child." />
          <PlaceholderVisual label="Founder/company visual placeholder" />
        </div>
      </section>
      <section className="border-y border-border py-12">
        <div className="container-standard grid gap-8 sm:grid-cols-3">
          {["2025|Year founded", "9|AI principles governing every output", "1|Product in market"].map((item) => {
            const [number, label] = item.split("|");
            return <div key={label}><p className="font-display text-4xl text-forest-bright">{number}</p><p className="mt-2 text-sm text-text-secondary">{label}</p></div>;
          })}
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="The beliefs that govern every decision." body="These are not aspirations. They are active commitments whose value is demonstrated by the decisions that honor them under pressure." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutBeliefs.map((belief) => <PrincipleCard key={belief} body={belief} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading title="We publish what we believe." body="The Vision Handbook defines our purpose, principles, and AI philosophy. The Manifesto explains what we believe. The Mission Handbook governs how we work." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Vision Handbook", "The constitutional document. Defines our purpose, mission, 12 principles, 9 permanent AI commitments, and what Pravnix will never become."],
              ["Manifesto", "38 declarations of what Pravnix believes. Written for families, employees, investors, and anyone who wants to know what kind of company this is."],
              ["Mission Handbook", "How we execute the mission every day. Operational, specific, and honest about the decisions that are genuinely hard."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-md bg-bg-surface p-7 shadow-glowS">
                <FileText aria-hidden className="h-8 w-8 text-forest-bright" weight="duotone" />
                <h3 className="mt-5 text-lg font-semibold text-text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{body}</p>
                <div className="mt-5"><Button href="/responsible-ai" variant="ghost">Read</Button></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="The people building it." body="Pravnix Labs is a small team. We are hiring at the rate the product quality requires." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProductCard eyebrow="Founder profile" title="Founder biography placeholder" body="Approved founder profile, photo, and role details will be added after review. No biography is fabricated here." muted />
            <ProductCard eyebrow="Team profile" title="Team photograph placeholder" body="Approved team imagery and biographies will be added after review. The site currently preserves the layout without inventing people." muted />
          </div>
        </div>
      </section>
      <CtaBanner title="Want to understand the company behind Pravnya?" primary="Contact the team" secondary="Read our Responsible AI commitment" />
    </>
  );
}

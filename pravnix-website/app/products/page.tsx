import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PrincipleCard } from "@/components/ui/principle-card";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("products");

export default function ProductsPage() {
  return (
    <>
      <Hero title="We build products, not platforms." body="Pravnix Labs does not sell an AI engine. We do not license a model. We build specific products for specific human problems, with a specific commitment to the people who will use them." />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="In market" title="Pravnya" body="An AI-powered child development companion. Helps parents capture moments, understand patterns, celebrate progress, and build a trusted developmental record over time. Launched 2025. Used by families navigating developmental differences across India." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ProductCard {...products[0]} />
            <div className="grid gap-4">
              {["Longitudinal intelligence — AI that improves as the record grows", "Nine permanent AI principles — trustworthy by design", "Privacy-first — no data sold, no models trained on family records"].map((item) => <PrincipleCard key={item} body={item} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading title="What makes a Pravnix product." />
          <div className="mt-10 grid gap-4">
            {[
              ["01", "Built for a specific human problem, not for a market trend."],
              ["02", "Privacy-first by architecture — not by policy update."],
              ["03", "AI that is honest about what it knows and does not know."],
              ["04", "Designed to be trusted across years, not to maximize engagement."],
            ].map(([number, body]) => <PrincipleCard key={number} number={number} body={body} />)}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="In development" title="The next problem." body="Pravnix Labs is working on its second product. It is in early development and we will announce it when it is ready to be announced — not when announcing creates momentum. If you are interested in early access or partnership, contact us." />
          <div className="mt-8"><Button href="/contact">Contact</Button></div>
        </div>
      </section>
      <CtaBanner title="Products built with principles." primary="Talk to us" secondary="Read Responsible AI" />
    </>
  );
}

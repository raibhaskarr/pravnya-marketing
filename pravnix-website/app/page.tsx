import type { Metadata } from "next";
import { Brain, Eye, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, homeStats, products } from "@/content/pages";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home");

const icons = [ShieldCheck, Scales, Eye];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero
        centered
        display
        showScroll
        eyebrow="Pravnix Labs"
        title="Responsible AI for meaningful human problems."
        body="We build AI products that hold themselves to a higher standard — because the families who use them deserve it."
        primaryCta="See our products"
        primaryHref="/products"
        secondaryCta="Read our AI principles"
      />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="What we build" title="Products built from principles, not from market trends." body="Every Pravnix product begins with a specific human problem and a specific commitment to the people experiencing it." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => <ProductCard key={product.title} {...product} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="Why we are different" title="We separated what AI can do from what AI should do. And we chose should." body="Most AI companies build for capability first and ask about responsibility later. We built the responsibility framework before we wrote the first line of model code." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title} className="rounded-md bg-bg-surface p-7 shadow-glowS">
                  <Icon aria-hidden className="h-8 w-8 text-forest-bright" weight="duotone" />
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-y border-border py-12">
        <div className="container-standard grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map(([number, label, sub]) => (
            <div key={label} className="border-border lg:border-r lg:last:border-r-0">
              <p className="font-display text-4xl font-medium text-forest-bright">{number}</p>
              <p className="mt-2 text-sm text-text-secondary">{label}</p>
              {sub ? <p className="mt-1 text-xs text-text-tertiary">{sub}</p> : null}
            </div>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Research & Innovation" title="We publish what we learn." body="Pravnix Labs shares its research on responsible AI, longitudinal intelligence, and family technology. Not because sharing is expected of AI companies — because we believe the field benefits from specificity rather than secrecy." />
          <div className="rounded-md bg-bg-inset p-6 shadow-glowS">
            <Brain aria-hidden className="h-10 w-10 text-forest-bright" weight="duotone" />
            <p className="mt-6 text-lg leading-8 text-text-secondary">Specific findings. Careful claims. Open questions that remain open until we can answer them properly.</p>
            <div className="mt-6"><Button href="/research" variant="ghost">Explore our research</Button></div>
          </div>
        </div>
      </section>
      <section className="bg-light-bg py-24">
        <div className="container-narrow">
          <blockquote className="border-l-[3px] border-forest pl-6 font-display text-3xl font-medium leading-tight text-light-text">
            "Every child deserves to be understood. That belief shapes every product decision, every AI choice, every privacy practice."
          </blockquote>
          <p className="mt-6 text-sm text-light-muted">— Pravnix Labs, Vision Handbook</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading eyebrow="Careers" title="We are building carefully. We are hiring the same way." body="Small team. Specific problem. High standards for the quality of thinking we bring to it." />
          <div className="mt-8"><Button href="/careers" variant="secondary">See open roles</Button></div>
        </div>
      </section>
      <CtaBanner title="Interested in what we're building?" primary="Contact us" secondary="Read our Responsible AI commitment" />
    </>
  );
}

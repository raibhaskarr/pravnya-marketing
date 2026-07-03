import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AiExplanationCard } from "@/components/ui/ai-explanation-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnnotatedScreenshot } from "@/components/ui/screenshot-presentations";
import { aiCards, aiPrinciples } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("askPravnya");

export default function AskPravnyaAiPage() {
  return (
    <>
      <Hero
        centered
        eyebrow="Pravnya AI"
        title="AI that works from your record, not from the internet."
        body="Pravnya AI doesn't give you generic advice about child development. It reads your specific record and helps you understand what you've been observing — honestly, carefully, with every insight traced to evidence."
      />
      <section className="pb-20">
        <div className="container-standard">
          <SectionHeading title="What Pravnya AI actually does." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aiCards.map((card) => <AiExplanationCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>
      <section className="bg-forest-subtle py-20">
        <div className="container-standard">
          <SectionHeading title="We are equally clear about what Pravnya AI does not do." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Pravnya AI does not diagnose.", "Pravnya AI does not replace professional expertise.", "Pravnya AI does not make decisions."].map((text) => (
              <div key={text} className="rounded-lg bg-surface p-6 text-lg font-semibold text-ink shadow-s">{text}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading align="left" title="What it looks like in practice." body="A pattern card shows the summary, the supporting entries, a confidence indicator, and a practical note about how to use the insight." />
          <AnnotatedScreenshot
            src="/assets/screenshots/screenshot-ask-pravnya.webp"
            label="App screenshot: Ask Pravnya"
            alt="Ask Pravnya AI screen showing evidence, confidence, and a careful summary"
            caption="Evidence-traced AI summary with confidence indicator."
            callouts={["Sources visible", "Confidence stated", "Uncertainty named"]}
          />
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="Nine commitments we hold permanently." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiPrinciples.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
      <CtaBanner title="Ready to see what your record reveals?" body="Build your record for two weeks. Then let Pravnya AI show you what it finds." />
    </>
  );
}

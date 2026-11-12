import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AiExplanationCard } from "@/components/ui/ai-explanation-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TwoPhoneComparison } from "@/components/ui/screenshot-presentations";
import { aiCards, aiPrinciples } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("askPravnya");

export default function AskPravnyaAiPage() {
  return (
    <>
      <Hero
        centered
        eyebrow="Pravnya AI"
        title="AI that works from your child's goals, not from the internet."
        body="Pravnya AI doesn't give you generic advice about child development. It works from your child's own goals and the notes you log — and it only proposes. You review and approve before anything is saved."
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
          <SectionHeading
            align="left"
            title="What it looks like in practice."
            body="After you log a session, the AI review shows each proposed entry with the words it was based on and how confident the AI is. Uncheck anything that isn't right, then add the rest. On Home, ask Pravnya a question and it answers using your child's goals."
          />
          <TwoPhoneComparison
            left={{
              src: "/assets/screenshots/screenshot-ai-review.webp",
              label: "App screenshot: AI review",
              alt: "Pravnya AI review screen showing Found 2 pieces of evidence, with two proposed goal entries and an Add 2 approved button",
              caption: "Review each suggestion before it is saved.",
            }}
            right={{
              src: "/assets/screenshots/screenshot-ask-pravnya.webp",
              label: "App screenshot: Ask Pravnya",
              alt: "Pravnya Home chat showing a parent's question and Pravnya's answer",
              caption: "Ask a question from Home.",
            }}
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
      <CtaBanner title="Ready to log your first note?" body="Start with one session. Pravnya's AI matches it to your child's goals, and you decide what is saved." />
    </>
  );
}

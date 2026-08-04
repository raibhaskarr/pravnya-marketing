import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Timeline } from "@/components/sections/timeline";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { workflowSteps } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("howItWorks");

const howFaq = [
  { question: "Do I need to use it every day?", answer: "No. Add an update when something feels useful to remember. Some families add notes daily; others add one or two each week." },
  { question: "When do insights become useful?", answer: "Pravnya can organize the first update immediately. Patterns become more meaningful as information builds across days, settings and caregivers." },
  { question: "Can I add older reports?", answer: "Yes. You can upload existing reports and then continue adding new moments and updates." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero centered eyebrow="How it works" title="Start with one update. Build a useful picture over time." body="No filing system to learn. No long forms before you can begin." />
      <section className="pb-16 md:pb-20">
        <div className="container-standard">
          <Timeline steps={workflowSteps} />
        </div>
      </section>
      <section className="bg-surface py-16 md:py-20">
        <div className="container-standard grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <SectionHeading align="left" eyebrow="A simple example" title="A therapy update becomes useful later." />
            <ol className="mt-8 grid gap-4 text-lg leading-8 text-ink-secondary">
              <li><strong className="text-ink">1.</strong> Speak or type what happened after the session.</li>
              <li><strong className="text-ink">2.</strong> Pravnya connects it to the date, setting and relevant focus.</li>
              <li><strong className="text-ink">3.</strong> When a pattern appears, you can see its supporting updates.</li>
              <li><strong className="text-ink">4.</strong> Before the next meeting, create a short summary and questions.</li>
            </ol>
          </div>
          <PhoneMockup src="/assets/screenshots/screenshot-today.webp" label="Pravnya Today" alt="Pravnya Today screen showing a recent update" caption="Useful today. More useful over time." className="max-w-[280px]" />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Common questions" title="Starting is straightforward." />
          <div className="mt-10"><FaqAccordion items={howFaq} /></div>
        </div>
      </section>
      <CtaBanner title="Ready to add the first update?" body="Free to start. No credit card." cta="Start free" />
    </>
  );
}

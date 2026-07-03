import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Timeline } from "@/components/sections/timeline";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { workflowSteps } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("howItWorks");

const howFaq = [
  {
    question: "Do I need to use it every day?",
    answer:
      "No. Pravnya works around your schedule. Some families capture something every day. Others add to their record once or twice a week. The record grows in value regardless of frequency.",
  },
  {
    question: "How long before I see the AI features working?",
    answer:
      "The AI features improve as your record grows. With 15–20 observations, you will start seeing patterns identified in your review summaries.",
  },
  {
    question: "What if I have records from before Pravnya?",
    answer:
      "You can import past observations, assessments, and documents. Many families start by uploading existing reports and then begin adding new observations forward from there.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        centered
        eyebrow="From scattered to organized in days"
        title="Simple enough to start now. Powerful enough to matter later."
        body="Pravnya is built around five workflows that fit real family life — and become more valuable every month you use them."
      />
      <section className="pb-20">
        <div className="container-standard">
          <Timeline steps={workflowSteps} />
          <div className="mt-16 grid gap-8">
            {[
              "Every Pravnya record begins with your child. Add the basics — their name, age, the professionals they work with, and the developmental areas you're most focused on.",
              "There is no right time to capture. There is only before you forget. The record builds in the margins of your day.",
              "As your record grows, Pravnya connects observations across time. The record holds what memory cannot: the specific detail, the exact date, the direct quote.",
              "The day before an appointment, open Pravnya and generate a preparation summary. Select the time period and the domains most relevant to the meeting.",
              "A Pravnya record is not just useful today. A family that has maintained a record across years holds something irreplaceable.",
            ].map((body, index) => (
              <article key={body} className="rounded-lg border border-border bg-surface p-8 shadow-s">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">Step {index + 1}</p>
                <p className="mt-4 text-lg leading-8 text-ink-secondary">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface py-20"><FaqAccordion items={howFaq} /></section>
      <CtaBanner title="Ready to start?" cta="Begin your record — free" />
    </>
  );
}

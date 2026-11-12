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
  { question: "Do I need to use it every day?", answer: "No. Log something when it feels useful to remember. Some families log after every therapy session; others add a note or two each week." },
  { question: "When does Growth become useful?", answer: "Your first approved entry shows up on its goal straight away. Trends become more meaningful as entries build up across days and settings, like home and the centre." },
  { question: "Can I add my child's IEP?", answer: "Yes. Upload a PDF or photo of your child's IEP or therapy plan during setup or later from Goals. Pravnya finds the goals and progress updates in it, and you choose what to add." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero centered eyebrow="How it works" title="Start with one note. Build a useful picture over time." body="Add your child, optionally upload their IEP, and log what happened. No filing system to learn." />
      <section className="pb-16 md:pb-20">
        <div className="container-standard">
          <Timeline steps={workflowSteps} />
        </div>
      </section>
      <section className="bg-surface py-16 md:py-20">
        <div className="container-standard grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <SectionHeading align="left" eyebrow="A simple example" title="A therapy session becomes progress you can see." />
            <ol className="mt-8 grid gap-4 text-lg leading-8 text-ink-secondary">
              <li><strong className="text-ink">1.</strong> After Aarav&apos;s speech therapy, write, photograph or record what happened.</li>
              <li><strong className="text-ink">2.</strong> Pravnya&apos;s AI matches it to Aarav&apos;s goals and proposes entries, showing what each is based on.</li>
              <li><strong className="text-ink">3.</strong> You uncheck anything that isn&apos;t right and add the rest.</li>
              <li><strong className="text-ink">4.</strong> The entries show up on Growth, and Activities suggests what to try at home.</li>
            </ol>
          </div>
          <PhoneMockup src="/assets/screenshots/screenshot-ai-review.webp" label="Pravnya AI review" alt="Pravnya AI review screen showing Found 2 pieces of evidence, with two proposed goal entries and an Add 2 approved button" caption="Nothing is saved until you approve it." className="max-w-[280px]" />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Common questions" title="Starting is straightforward." />
          <div className="mt-10"><FaqAccordion items={howFaq} /></div>
        </div>
      </section>
      <CtaBanner title="Ready to log the first note?" body="Free to start. No credit card." cta="Start free" />
    </>
  );
}

import Link from "next/link";
import { Lock, ShieldCheck, Star } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { FeatureCard } from "@/components/ui/feature-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { Hero } from "@/components/sections/hero";
import { Timeline } from "@/components/sections/timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { commitments, workflowSteps } from "@/content/pages/shared";
import { pageMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home");

const homeFaq = [
  {
    question: "Is Pravnya for all children or only children with diagnosed conditions?",
    answer:
      "Pravnya is for any family that wants to better understand and document their child's development. Most of our families are navigating developmental differences — but the product is built for any parent who pays close attention and wants a better record of what they've seen.",
  },
  {
    question: "Does Pravnya give medical advice or diagnoses?",
    answer:
      "No. Pravnya helps you organize and understand what you've observed. It does not assess, diagnose, or make clinical recommendations. We help you arrive at those conversations better prepared.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your record belongs to you. We do not sell it, share it with third parties, or use it to train AI models. You can export your complete record at any time.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <Hero
        eyebrow="For parents who pay close attention"
        title="You've been paying close attention. Finally, somewhere for all of it."
        body="Pravnya helps parents capture moments, understand patterns, and walk into every appointment knowing exactly what they've seen."
        primaryCta="Start your record — it's free"
        secondaryCta="See how it works"
        visualSrc="/assets/brand/illustration-parent-child-moment.svg"
        visualAlt="A parent and child sitting together as everyday moments become an organized Pravnya record"
        visualCaption="A calm place for the small moments that become meaningful over time."
      />
      <section className="pb-16">
        <div className="container-standard flex flex-wrap gap-4 text-sm text-ink-secondary">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-forest" /> Private by design. Your record stays yours.</span>
          <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-forest" /> 4.9 rating from families</span>
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-forest" /> No data sold. No ads.</span>
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard">
          <SectionHeading
            eyebrow="The problem every parent recognizes"
            title="The notes are everywhere. The knowledge is in your head. The appointment is tomorrow."
            body="You've noticed things. You've observed patterns. You've had thoughts at two in the morning that felt important and were gone by the time you could write them down. You have the knowledge — scattered across photos, messages, voice memos, notebooks, and memory. You just have nowhere to put it that helps it all make sense. That's what Pravnya is for."
          />
          <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-border bg-surface p-4 shadow-s md:p-8">
            <img
              src="/assets/brand/illustration-scattered-to-pravnya.svg"
              alt="Scattered notes, photos, messages, and voice memos becoming one Pravnya record"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-sage-subtle py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="What Pravnya does" title="Three things every family deserves." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="How it works" title="Simple enough to use after a hard day." />
          <div className="mt-12"><Timeline steps={workflowSteps} /></div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="font-semibold text-forest hover:text-forest-dark">See the full walkthrough →</Link>
          </div>
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="The record, in your hands" title="Built for real family life." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <PhoneMockup src="/assets/screenshots/screenshot-today.webp" label="App screenshot: Today" alt="Pravnya Today screen showing recent child development observations" caption="Capture anything. Nothing gets lost." />
            <PhoneMockup src="/assets/screenshots/screenshot-journey.webp" label="App screenshot: Journey" alt="Pravnya Journey screen showing a child's organized development timeline" caption="Your child's story, organized over time." />
            <PhoneMockup src="/assets/screenshots/screenshot-growth.webp" label="App screenshot: Growth" alt="Pravnya Growth screen showing progress patterns over time" caption="Your record becomes your preparation." />
          </div>
        </div>
      </section>
      <section className="bg-forest-subtle py-20">
        <div className="container-standard grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Our AI"
            title="AI that tells you what it knows — and what it doesn't."
            body="Most AI sounds confident. Pravnya AI is designed to be honest. Every insight is traced to specific observations in your record. When evidence is limited, the AI says so."
          />
          <div className="grid gap-4">
            {["AI explains. Every output shows its sources.", "AI admits uncertainty. Limited evidence is named, not hidden.", "You stay in control. Edit, correct, or dismiss any AI output."].map((text) => (
              <div key={text} className="rounded-lg bg-surface p-6 shadow-s">{text}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-dark-surface py-20 text-center text-background">
        <div className="container-standard">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8FAF99]">Privacy</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl">Your child's story belongs to your family.</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-lg text-[#C8D4CC]">
            <p>Your record is never sold.</p>
            <p>Your data is never used to train AI models.</p>
            <p>You can export or delete your record at any time.</p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Common questions" title="Questions parents ask." />
          <div className="mt-10"><FaqAccordion items={homeFaq} /></div>
        </div>
      </section>
      <CtaBanner title="Start your child's record today." body="Free to start. Takes two minutes. No credit card." cta="Join beta" href="/contact" />
    </>
  );
}

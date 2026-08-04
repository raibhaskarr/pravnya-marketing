import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Lock, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { Timeline } from "@/components/sections/timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { commitments, workflowSteps } from "@/content/pages/shared";
import { siteConfig } from "@/content/site";
import { pageMetadata, faqJsonLd, organizationJsonLd, softwareApplicationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home");

const homeFaq = [
  {
    question: "Who is Pravnya for?",
    answer: "Pravnya is for parents who want one clear place for child development notes, school and therapy updates, goals, reports and questions. A diagnosis is not required.",
  },
  {
    question: "Is Pravnya a medical or diagnostic tool?",
    answer: "No. Pravnya organizes what you and your care team record. It does not diagnose, assess or replace professional advice.",
  },
  {
    question: "How does Pravnya use AI?",
    answer: "Pravnya uses your record to organize updates, surface possible patterns and prepare summaries. It shows what an insight is based on and says when there is not enough information.",
  },
  {
    question: "Who can see my child's information?",
    answer: "You control access. Pravnya does not sell your record or use it to train AI models. You can export or delete your data.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaq)} />

      <section className="w-full max-w-full overflow-hidden py-14 md:py-24">
        <div className="container-standard grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="mb-5 inline-flex border-b border-forest pb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">
              Your child's development, in one place
            </p>
            <h1 className="max-w-full break-words font-display text-[36px] font-semibold leading-[1.08] text-ink sm:text-[44px] md:text-[58px] lg:text-[64px]">
              Remember what happened. See what's changing. Be ready for every conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-secondary">
              Save everyday moments, school and therapy updates, goals, reports and questions. Pravnya organizes them and helps you understand what may matter.
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button href={siteConfig.signUpUrl} className="w-full sm:w-auto">Start free</Button>
              <Button href="#how-it-works" variant="ghost" className="w-full sm:w-auto">See how it works</Button>
            </div>
            <p className="mt-5 text-sm text-ink-tertiary">Free to start · No credit card · Private by design</p>
          </div>
          <PhoneMockup
            src="/assets/screenshots/screenshot-today.webp"
            label="Pravnya Today screen"
            alt="Pravnya Today screen showing one clear place for a parent's daily updates and actions"
            caption="One clear place to see what matters today."
            className="max-w-[330px]"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface py-5">
        <div className="container-standard flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-secondary">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-forest" /> Your record stays yours</span>
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-forest" /> No data sold or used to train AI</span>
          <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-forest" /> Built for real family life</span>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading
            eyebrow="Pravnya brings it together"
            title="Important information is scattered everywhere."
            body="A voice note after therapy. A school message you need later. A small change you want to remember. Keep it in one useful place instead of rebuilding the story from memory."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-sage-subtle py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="How it works" title="Capture. Understand. Act." body="Start with one update. Pravnya makes it useful over time." />
          <div className="mt-12"><Timeline steps={workflowSteps} /></div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 font-semibold text-forest hover:text-forest-dark">
              See the full walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">Meet your AI Companion</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink">One useful insight. Its evidence. One next step.</h2>
            <p className="mt-5 text-lg leading-8 text-ink-secondary">
              Pravnya helps you notice what may matter, choose one weekly focus and prepare for school or therapy conversations. It explains what each insight is based on and says when information is missing.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-l md:p-8">
            <p className="text-sm font-semibold text-forest">This week, Pravnya noticed</p>
            <p className="mt-3 text-xl font-semibold leading-8 text-ink">Visual preparation helped with two recent transitions.</p>
            <p className="mt-3 leading-7 text-ink-secondary">There is not enough school information yet to know whether this is happening there too.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-forest">
              <span className="rounded-full bg-forest-subtle px-4 py-2">Why am I seeing this?</span>
              <span className="rounded-full bg-forest-subtle px-4 py-2">Add a school update</span>
              <span className="rounded-full bg-forest-subtle px-4 py-2">Choose this week's focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-surface py-16 text-background md:py-20">
        <div className="container-standard grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9FC5AC]">Our privacy promise</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">Your child's information stays under your control.</h2>
          </div>
          <div className="grid gap-4 text-[#DCE8E0]">
            <p>We do not sell your data.</p>
            <p>We do not use your record to train AI models.</p>
            <p>You decide who can see or contribute.</p>
            <p>You can export or delete your record.</p>
            <Link href="/privacy" className="mt-2 font-semibold text-white underline underline-offset-4">Read our privacy promise</Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Common questions" title="What parents usually ask." />
          <div className="mt-10"><FaqAccordion items={homeFaq} /></div>
        </div>
      </section>

      <CtaBanner title="Create your child's space in about two minutes." body="Free to start. No credit card required." cta="Start free" />
    </>
  );
}

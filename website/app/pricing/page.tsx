import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import Link from "next/link";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("pricing");

const tiers = [
  ["Record", "Free tier", "Unlimited capture."],
  ["Understand", "Premium tier", "AI pattern recognition."],
  ["Professional", "Coming later", "For therapists, schools, and clinics. Professional intake from family records."],
];

const pricingFaq = [
  { question: "Is Pravnya really free?", answer: "Yes. Everything you can do in Pravnya today is free, with no credit card needed to sign up." },
  { question: "What will Premium include?", answer: "Premium is not available yet. It is planned for families who want more from Pravnya's AI, such as help spotting patterns across goals." },
  { question: "Is it free in the UAE and outside India?", answer: "Yes. Pravnya launched in India and works the same way for families in the UAE and elsewhere." },
  { question: "Do I pay to invite my child's therapist?", answer: "No. Inviting a therapist to your child's care team is free, for you and for them." },
];

export default function PricingPage() {
  return (
    <>
      <Hero centered eyebrow="Pricing" title="Free to start. Premium for the families who need more." body="Families should not face a financial barrier to starting their child's developmental record." />
      <section className="pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-3">
          {tiers.map(([name, label, body]) => (
            <article key={name} className="rounded-xl border border-border bg-surface p-8 shadow-s">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">{label}</p>
              <h2 className="mt-4 font-display text-3xl text-ink">{name}</h2>
              <p className="mt-5 text-base leading-7 text-ink-secondary">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface py-16 md:py-20">
        <div className="container-standard max-w-3xl">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Everything in Pravnya today is free.</h2>
          <p className="mt-4 text-lg leading-8 text-ink-secondary">There is no paid plan yet. Families in India, the UAE and everywhere else get the full app:</p>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-ink-secondary">
            <li>Log sessions and moments at home by note, photo or voice</li>
            <li>AI suggestions matched to your child&apos;s goals, which you approve</li>
            <li>Goals from your child&apos;s IEP or therapy plan</li>
            <li>Growth against your child&apos;s own history, and ideas to try at home</li>
            <li>Ask Pravnya, care team invites and a weekly therapy schedule</li>
            <li>The web app and the Android app</li>
          </ul>
          <p className="mt-6 text-ink-secondary">See everything in detail on <Link href="/features" className="font-semibold text-forest underline underline-offset-4">What you can do</Link>.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <JsonLd data={faqJsonLd(pricingFaq)} />
        <div className="container-standard">
          <h2 className="text-center font-display text-3xl text-ink md:text-4xl">Pricing questions</h2>
          <div className="mt-10"><FaqAccordion items={pricingFaq} /></div>
        </div>
      </section>
      <CtaBanner title="Start with the record." body="No countdown timers. No urgency pressure. Just a useful place to begin." />
    </>
  );
}


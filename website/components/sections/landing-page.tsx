import Link from "next/link";
import { ArrowRight, Lock } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import type { LandingPage } from "@/content/landing/types";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function LandingPageView({ page }: { page: LandingPage }) {
  return (
    <>
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd data={breadcrumbJsonLd([{ name: page.seo.title, path: `/${page.slug}` }])} />

      <section className="w-full max-w-full overflow-hidden py-14 md:py-24">
        <div className="container-standard grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="mb-5 inline-flex border-b border-forest pb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">
              {page.eyebrow}
            </p>
            <h1 className="max-w-full break-words font-display text-[34px] font-semibold leading-[1.1] text-ink sm:text-[42px] md:text-[54px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-secondary">{page.intro}</p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button href={siteConfig.signUpUrl} className="w-full sm:w-auto">Start free</Button>
              <Button href="/how-it-works" variant="ghost" className="w-full sm:w-auto">See how it works</Button>
            </div>
            <p className="mt-5 text-sm text-ink-tertiary">Free to start · No credit card · Private by design</p>
          </div>
          <PhoneMockup src={page.screenshot.src} label={page.title} alt={page.screenshot.alt} caption={page.screenshot.caption} className="max-w-[310px]" />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-standard max-w-3xl">
          {page.sections.map((section) => (
            <div key={section.heading} className="mb-12 last:mb-0">
              <h2 className="font-display text-[28px] font-medium leading-tight text-ink md:text-[36px]">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-lg leading-8 text-ink-secondary">{p}</p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 text-ink-secondary">
                  {section.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage-subtle py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="How Pravnya helps" title="One place for what happens in therapy and at home." />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {page.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-border bg-surface p-6 shadow-s">
                <p className="text-sm font-semibold text-forest">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 leading-7 text-ink-secondary">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-ink-secondary">
            <Lock className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden />
            <span>
              Your child&apos;s record is never sold or used to train AI, and you decide who sees it.{" "}
              <Link href="/privacy" className="font-semibold text-forest underline underline-offset-4">Read our privacy promise</Link>
            </span>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Questions" title="What parents ask." />
          <div className="mt-10"><FaqAccordion items={page.faq} /></div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-standard max-w-3xl">
          <h2 className="font-display text-2xl text-ink">Keep reading</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {page.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex items-center gap-2 font-semibold text-forest hover:text-forest-dark">
                  {link.label} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Start with one note." body="Free to start. No credit card required." cta="Start free" />
    </>
  );
}

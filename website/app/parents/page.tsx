import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { ParentsFeatureSection } from "@/components/sections/parents-feature-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCard } from "@/components/ui/feature-card";
import { FloatingScreenshot } from "@/components/ui/screenshot-presentations";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  audienceGroups,
  CaretRight,
  contactRows,
  familyFits,
  Heart,
  helpActions,
  parentFeatures,
  parentLoveReasons,
  parentsFaq,
  parentsHero,
  parentsJsonLd,
  parentsToc,
  pravnyaPieces,
  privacyPoints,
  responsibleAiPoints,
  UsersThree,
} from "@/content/pages/parents";
import { Lock, SealCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("parents");

function AnchorSection({ id, children, className = "py-20" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`${className} scroll-mt-28`}>
      {children}
    </section>
  );
}

function Toc() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav aria-label="Parents page sections" className="rounded-2xl border border-border bg-surface p-4 shadow-s">
        <p className="px-3 pb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-forest">On this page</p>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
          {parentsToc.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink-secondary transition hover:bg-forest-subtle hover:text-forest lg:block lg:whitespace-normal lg:rounded-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default function ParentsPage() {
  return (
    <>
      <JsonLd data={parentsJsonLd} />
      <Hero
        eyebrow={parentsHero.eyebrow}
        title={parentsHero.title}
        body={parentsHero.body}
        primaryCta="Join Beta"
        primaryHref="/contact"
        secondaryCta="Download"
        secondaryHref="/download"
        placeholder="Parent and child everyday moment"
      />

      <div className="container-standard pb-20">
        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          <Toc />
          <div className="min-w-0">
            <AnchorSection id="why-pravnya-exists" className="pb-20">
              <div className="rounded-3xl bg-surface p-6 shadow-s md:p-10">
                <SectionHeading align="left" eyebrow="Why Pravnya exists" title="Parents already collect the memories. Pravnya helps keep them, understand them, and use them." />
                <div className="mt-8 space-y-6 text-lg leading-8 text-ink-secondary">
                  <p>
                    Every parent already does this: you take the photo. You save the voice note your child left you.
                    You text a grandparent about the new word your toddler said this morning. You have a folder —
                    somewhere — of moments you want to remember.
                  </p>
                  <p>
                    The trouble is, none of it lives in one place. A milestone gets captured on a phone that later runs
                    out of storage. A worry you meant to mention to the paediatrician gets lost between appointments. A
                    pattern that would be obvious across six months of notes stays invisible because those notes are
                    scattered across apps, files, and memory.
                  </p>
                  <p>
                    Pravnya was built to close that gap: to bring the moments, the memories, and the meaning into one
                    trusted place — organised automatically, easy to search, and ready whenever you need it.
                  </p>
                </div>
              </div>
            </AnchorSection>

            <AnchorSection id="what-is-pravnya" className="pb-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_330px]">
                <div>
                  <SectionHeading align="left" eyebrow="What is Pravnya?" title="One app. One timeline. One place for your child's journey." />
                  <div className="mt-8 grid gap-3">
                    {pravnyaPieces.map((piece) => (
                      <div key={piece} className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-base leading-7 text-ink-secondary shadow-xs">
                        <CaretRight aria-hidden className="mt-1 h-5 w-5 shrink-0 text-forest" weight="bold" />
                        <p>{piece}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-gold bg-gold-subtle p-5 text-base leading-7 text-ink">
                    <strong>What Pravnya is not:</strong> Pravnya is not a medical tool, and it does not diagnose,
                    assess, or evaluate your child. It's a companion for what you're already noticing.
                  </div>
                </div>
                <FloatingScreenshot
                  src="/assets/screenshots/screenshot-today.webp"
                  label="App screenshot: Today"
                  alt="Pravnya Today screen showing a sanitized demo child record"
                  caption="Sanitized demo screenshot for launch review."
                />
              </div>
            </AnchorSection>

            <AnchorSection id="core-features" className="pb-20">
              <SectionHeading
                eyebrow="Core features"
                title="Everything a family needs to understand a child's developmental story."
                body="Every feature supports a screenshot placeholder, an icon, and an optional CTA so final product imagery can be dropped in without redesigning the page."
              />
              <div className="mt-12">
                <ParentsFeatureSection features={parentFeatures} />
              </div>
            </AnchorSection>

            <AnchorSection id="why-parents-love-pravnya" className="pb-20">
              <div className="rounded-3xl bg-gold-subtle p-6 md:p-10">
                <SectionHeading eyebrow="Why parents love Pravnya" title="A calmer way to hold what matters." />
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {parentLoveReasons.map((reason) => (
                    <div key={reason} className="flex gap-3 rounded-2xl bg-white/70 p-5 text-base leading-7 text-ink-secondary shadow-xs">
                      <Heart aria-hidden className="mt-1 h-5 w-5 shrink-0 text-forest" weight="duotone" />
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-10 border-l-4 border-forest bg-white/70 p-6 font-display text-2xl leading-tight text-ink">
                  Many families tell us the appointment-preparation report alone is what makes Pravnya worth it — walking
                  in with a clear, organised account of what they've seen.
                </blockquote>
              </div>
            </AnchorSection>

            <AnchorSection id="responsible-ai" className="pb-20">
              <SectionHeading
                eyebrow="Responsible AI"
                title="AI should amplify a parent's understanding — never replace it."
                body="These are permanent commitments, not settings that might change with the next product update."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {responsibleAiPoints.map((point) => (
                  <FeatureCard key={point} icon={Sparkle} title={point.split(".")[0]} body={point} />
                ))}
              </div>
            </AnchorSection>

            <AnchorSection id="privacy-first" className="pb-20">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <SectionHeading
                  align="left"
                  eyebrow="Privacy first"
                  title="Your child's developmental record is one of the most personal things a family can keep."
                  body="We treat it that way. Our promise: we will never treat your family's trust as a commercial asset."
                />
                <div className="grid gap-4">
                  {privacyPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-border bg-surface p-5 shadow-xs">
                      <Lock aria-hidden className="mb-3 h-6 w-6 text-forest" weight="duotone" />
                      <p className="text-base leading-7 text-ink-secondary">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnchorSection>

            <AnchorSection id="who-is-it-for" className="pb-20">
              <div className="rounded-3xl bg-surface p-6 shadow-s md:p-10">
                <SectionHeading eyebrow="Who is it for?" title="Pravnya is built for the people around a child's development." />
                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {audienceGroups.map((group) => (
                    <div key={group} className="rounded-2xl border border-border bg-background p-5 text-center font-semibold text-ink">
                      <UsersThree aria-hidden className="mx-auto mb-3 h-7 w-7 text-forest" weight="duotone" />
                      {group}
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  {familyFits.map((fit) => (
                    <span key={fit} className="rounded-full border border-forest/20 bg-forest-subtle px-4 py-2 text-sm font-semibold text-forest">
                      {fit}
                    </span>
                  ))}
                </div>
                <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-ink-secondary">
                  Pravnya doesn't diagnose or treat anything, and it isn't a substitute for the professionals in a child's life.
                  It offers every family the same thing: a trusted place to keep what they notice, and clarity when it's time to talk about it.
                </p>
              </div>
            </AnchorSection>

            <AnchorSection id="beta-programme" className="pb-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
                <div>
                  <SectionHeading
                    align="left"
                    eyebrow="Beta programme"
                    title="An intentionally early, closely supported chapter."
                    body="We're growing thoughtfully — family by family, school by school, community by community — rather than rushing to scale before the product is ready for the trust families are placing in it."
                  />
                  <p className="mt-6 text-lg leading-8 text-ink-secondary">
                    Early feedback shapes what we build next. The questions you ask, the friction you hit, and the
                    features you wish existed all feed straight back into the product.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button href="/contact">Join Beta</Button>
                    <Button href="/download" variant="secondary">Download</Button>
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-surface p-8 shadow-s">
                  <SealCheck aria-hidden className="h-10 w-10 text-forest" weight="duotone" />
                  <h3 className="mt-5 font-display text-3xl leading-tight text-ink">What this means in practice</h3>
                  <p className="mt-4 text-base leading-7 text-ink-secondary">
                    A small, attentive team. Feedback that reaches real people, quickly. A product that improves because
                    real families are using it and telling us what they need.
                  </p>
                </div>
              </div>
            </AnchorSection>

            <AnchorSection id="how-you-can-help" className="pb-20">
              <SectionHeading eyebrow="How you can help" title="Pravnya grows the way trust grows." body="Through people who've experienced it recommending it to people they care about." />
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {helpActions.map((action) => (
                  <div key={action} className="rounded-2xl border border-border bg-surface p-5 text-base leading-7 text-ink-secondary shadow-xs">
                    {action}
                  </div>
                ))}
              </div>
            </AnchorSection>

            <AnchorSection id="faq" className="pb-20">
              <SectionHeading eyebrow="FAQ" title="Questions parents ask." />
              <div className="mt-10">
                <FaqAccordion items={parentsFaq} />
              </div>
            </AnchorSection>

            <AnchorSection id="contact" className="pb-4">
              <div className="rounded-3xl bg-dark-surface p-6 text-background shadow-l md:p-10">
                <SectionHeading
                  eyebrow="Contact"
                  title="Bring Pravnya to a family, school, therapist, centre, NGO, or parent community."
                  body="Tell us who you are and how you want to help. We respond personally."
                  className="[&_*]:text-background"
                />
                <div className="mx-auto mt-10 grid max-w-3xl gap-3">
                  {contactRows.map(([label, value]) => (
                    <div key={label} className="grid gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-[150px_1fr]">
                      <span className="font-semibold uppercase tracking-[0.08em] text-[#9FC5AC]">{label}</span>
                      <span className="text-[#EAF3ED]">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/contact" variant="light">Contact Us</Button>
                  <Button href="/features" variant="ghost" className="text-background hover:text-white">Learn More</Button>
                </div>
              </div>
            </AnchorSection>
          </div>
        </div>
      </div>

      <CtaBanner title="Ready to start your child's record?" body="Start with one note, one photo, one moment worth keeping." cta="Join Beta" href="/contact" />
    </>
  );
}

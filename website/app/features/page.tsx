import type { Metadata } from "next";
import { FeatureCard } from "@/components/ui/feature-card";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup, TabletMockup } from "@/components/ui/screenshot-presentations";
import { Hero } from "@/components/sections/hero";
import { featureDetails } from "@/content/pages/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("features");

const features = [
  {
    label: "Feature 01 — Capture",
    title: "Record in moments. Not in marathons.",
    body:
      "A child says something new. They navigate something that was hard last week. You notice a pattern you've never seen before. These moments are small and fast. The record should match them. Pravnya capture takes under two minutes in any format — voice, text, photo, or document.",
    placeholder: "App screenshot: Today",
    src: "/assets/screenshots/screenshot-today.webp",
    alt: "Pravnya Today screen ready for a real production screenshot",
    caption: "Capture, review, and act from the daily home view.",
    frame: "phone",
  },
  {
    label: "Feature 02 — Organize",
    title: "The record organizes itself. You live your life.",
    body:
      "Every observation you capture is automatically structured: tagged by developmental domain, connected to the professional or setting it relates to, and placed in the timeline where it belongs. You never sort. You never file. You never wonder where something went.",
    placeholder: "App screenshot: Journey",
    src: "/assets/screenshots/screenshot-journey.webp",
    alt: "Pravnya Journey screen ready for a real production screenshot",
    caption: "A living timeline of moments, memories, and progress.",
    frame: "phone",
  },
  {
    label: "Feature 03 — Understand",
    title: "See what's changed. Not just what happened.",
    body:
      "The most valuable thing about a longitudinal record is not any single entry. It is the pattern that emerges across dozens of entries over months. Pravnya AI reads your record and surfaces those patterns, with every insight traced back to specific entries.",
    placeholder: "App screenshot: Growth",
    src: "/assets/screenshots/screenshot-growth.webp",
    alt: "Pravnya Growth screen ready for a real production screenshot",
    caption: "Growth is shown through patterns over time, not comparison.",
    frame: "phone",
  },
  {
    label: "Feature 04 — Prepare",
    title: "Walk into every appointment ready.",
    body:
      "Before every meeting — therapy, school review, pediatrician, specialist — Pravnya generates a clear, organized summary of what you've observed in the relevant period. It covers what used to take an hour to reconstruct from memory.",
    placeholder: "App screenshot: appointment brief",
    src: "/assets/screenshots/screenshot-preparation-summary.webp",
    alt: "Pravnya preparation summary ready for a real production screenshot",
    caption: "Structured summaries help families walk into appointments prepared.",
    frame: "tablet",
  },
  {
    label: "Feature 05 — Share",
    title: "You decide what goes where. And to whom.",
    body:
      "Pravnya makes sharing controlled, contextual, and consensual. You select what to include. You review what will be shared. You initiate the share. You can revoke access at any time.",
    placeholder: "App screenshot: sharing permissions",
    src: "/assets/screenshots/screenshot-sharing-permissions.webp",
    alt: "Pravnya sharing permissions screen ready for a real production screenshot",
    caption: "Parents decide what is shared, with whom, and for how long.",
    frame: "phone",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero
        centered
        eyebrow="Five features. One purpose."
        title="Built around what parents actually need."
        body="Not what developers assumed they'd need. What years of listening to families showed us."
      />
      <section className="pb-20">
        <div className="container-standard grid gap-16">
          {features.map((feature, index) => (
            <article key={feature.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={index % 2 ? "lg:order-2" : ""}>
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">{feature.label}</p>
                <h2 className="font-display text-4xl leading-tight text-ink">{feature.title}</h2>
                <p className="mt-5 text-lg leading-8 text-ink-secondary">{feature.body}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {featureDetails.slice(0, 4).map((detail) => <FeatureCard key={detail.label} icon={detail.icon} title={detail.label} body={detail.body} />)}
                </div>
              </div>
              {feature.frame === "tablet" ? (
                <TabletMockup src={feature.src} label={feature.placeholder} alt={feature.alt} caption={feature.caption} />
              ) : (
                <PhoneMockup src={feature.src} label={feature.placeholder} alt={feature.alt} caption={feature.caption} />
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="How Pravnya compares." />
          <div className="mt-10"><ComparisonTable /></div>
        </div>
      </section>
      <CtaBanner title="Every feature. One record. Your family." cta="Start free" href="/contact" />
    </>
  );
}

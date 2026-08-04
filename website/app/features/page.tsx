import type { Metadata } from "next";
import { Camera, ChartLineUp, ClipboardText, Microphone, ShareNetwork } from "@phosphor-icons/react/dist/ssr";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Hero } from "@/components/sections/hero";
import { PhoneMockup, TabletMockup } from "@/components/ui/screenshot-presentations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("features");

const features = [
  {
    icon: Microphone,
    title: "Save an update",
    body: "Type it, speak it, add a photo or upload a document. Most updates take less than two minutes.",
    src: "/assets/screenshots/screenshot-today.webp",
    alt: "Pravnya Today screen for saving a child development update",
    caption: "Capture an update before you forget it.",
    frame: "phone",
  },
  {
    icon: Camera,
    title: "Keep it organized",
    body: "Pravnya puts moments, reports, goals and care-team updates into one searchable timeline.",
    src: "/assets/screenshots/screenshot-journey.webp",
    alt: "Pravnya Journey timeline organizing child development updates",
    caption: "A timeline that builds itself.",
    frame: "phone",
  },
  {
    icon: ChartLineUp,
    title: "See patterns",
    body: "Understand what is changing across time, home, school and therapy—and where more information is needed.",
    src: "/assets/screenshots/screenshot-growth.webp",
    alt: "Pravnya Growth screen showing progress patterns",
    caption: "Progress shown as a story, not a score.",
    frame: "phone",
  },
  {
    icon: ClipboardText,
    title: "Prepare for conversations",
    body: "Create a clear summary for a school meeting, therapy review or appointment using the information already in your record.",
    src: "/assets/screenshots/screenshot-preparation-summary.webp",
    alt: "Pravnya meeting preparation summary",
    caption: "Walk in with the examples and questions you need.",
    frame: "tablet",
  },
  {
    icon: ShareNetwork,
    title: "Share safely",
    body: "Choose what another caregiver or professional can see. Review it first and change access when you need to.",
    src: "/assets/screenshots/screenshot-sharing-permissions.webp",
    alt: "Pravnya sharing permission controls",
    caption: "You decide who sees what.",
    frame: "phone",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero centered eyebrow="What you can do" title="Five useful things. No complicated setup." body="Pravnya helps you save what happened, understand what is changing and use that information when it matters." />
      <section className="pb-20">
        <div className="container-standard grid gap-12 md:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="grid min-w-0 items-center gap-8 rounded-2xl border border-border bg-surface p-6 shadow-s md:p-10 lg:grid-cols-[1fr_0.72fr]">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <Icon className="h-9 w-9 text-forest" weight="duotone" aria-hidden />
                  <h2 className="mt-5 font-display text-4xl leading-tight text-ink">{feature.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-secondary">{feature.body}</p>
                </div>
                {feature.frame === "tablet" ? (
                  <TabletMockup src={feature.src} label={feature.title} alt={feature.alt} caption={feature.caption} />
                ) : (
                  <PhoneMockup src={feature.src} label={feature.title} alt={feature.alt} caption={feature.caption} className="max-w-[270px]" />
                )}
              </article>
            );
          })}
        </div>
      </section>
      <CtaBanner title="Start with one update." body="Pravnya becomes more useful as your family's record grows." cta="Start free" />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("journey");

const stages = [
  ["Something feels different", "The first stage rarely arrives with clarity. It arrives as a feeling — that something is different, something is worth watching, something you can't quite name yet."],
  ["Finding the right people", "The search for professionals involves appointments, referrals, waiting lists, and consultations. Each new professional needs to understand your child quickly."],
  ["Building a support system", "You have a team now. Each professional sees your child in a specific context. None of them sees what you see at home."],
  ["Navigating transitions", "New school year, new therapist, new city, new specialist — transitions are among the most stressful moments in developmental navigation."],
  ["The long view", "Years into this journey, the thing you will want most is a clear account of how far your child has come."],
];

export default function JourneyPage() {
  return (
    <>
      <Hero centered eyebrow="The parent journey" title="You didn't choose this journey. But you're navigating it." body="Pravnya is built for every stage of what families experience — from the first time something feels different, to years of coordinated support." />
      <section className="pb-20">
        <div className="container-standard max-w-4xl">
          <div className="space-y-8">
            {stages.map(([title, body], index) => (
              <article key={title} className="rounded-lg border border-border bg-surface p-8 shadow-s">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">Stage {index + 1}</p>
                <h2 className="mt-3 font-display text-3xl text-ink">{title}</h2>
                <p className="mt-4 text-lg leading-8 text-ink-secondary">{body}</p>
                <p className="mt-5 rounded-md bg-forest-subtle p-4 text-sm font-semibold text-forest-dark">
                  Pravnya helps by preserving the record before, during, and after this stage.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Whatever stage you're at — the record should start now." />
    </>
  );
}


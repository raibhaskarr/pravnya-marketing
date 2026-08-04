import type { Metadata } from "next";
import { Eye, Lock, User } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("whyPravnya");

export default function WhyPravnyaPage() {
  return (
    <>
      <Hero centered eyebrow="Why Pravnya" title="Parents notice important things. Pravnya helps make that knowledge usable." body="Small moments are easy to lose. A trusted record gives them shape when a school, therapist or doctor asks what has changed." />
      <section className="pb-16 md:pb-20">
        <div className="container-standard">
          <SectionHeading title="Trustworthy by design." body="Pravnya is built to support a parent's understanding—not replace it." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard icon={Eye} title="Insights show their basis" body="See the updates and period behind what Pravnya suggests." />
            <FeatureCard icon={User} title="Parents stay in control" body="Correct, dismiss and decide what should be shared." />
            <FeatureCard icon={Lock} title="Privacy is not an add-on" body="Your record is not sold or used to train AI models." />
          </div>
        </div>
      </section>
      <section className="bg-gold-subtle py-16 text-center md:py-20">
        <div className="container-standard">
          <h2 className="font-display text-4xl text-ink">Every child deserves to be understood—not ranked.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink-secondary">Pravnya follows the child's own story over time and keeps professional judgment where it belongs: with qualified people and informed families.</p>
        </div>
      </section>
      <CtaBanner title="Keep what matters. Use it when it matters." cta="Start free" />
    </>
  );
}

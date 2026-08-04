import type { Metadata } from "next";
import { Heart, Lock, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("parents");

const reasons = [
  { icon: Heart, title: "Less to remember alone", body: "Save the detail while it is fresh instead of reconstructing it before an appointment." },
  { icon: UsersThree, title: "A clearer shared picture", body: "Bring home, school and therapy updates together without losing who said what." },
  { icon: Lock, title: "Control stays with you", body: "Choose who can contribute or view information. Export or delete your record when you want." },
];

const faq = [
  { question: "Does my child need a diagnosis?", answer: "No. Pravnya is useful for any family keeping track of development, support, school or therapy information." },
  { question: "Will Pravnya compare my child with others?", answer: "No. Pravnya focuses on your child's own information over time and does not diagnose or rank children." },
  { question: "Can another caregiver contribute?", answer: "Yes. You can invite caregivers and professionals, decide what they can do and change access later." },
];

export default function ParentsPage() {
  return (
    <>
      <Hero centered eyebrow="For parents" title="A calmer way to hold what matters." body="Keep the moments, questions and professional updates you may need later—without carrying all of it in your head." />
      <section className="pb-16 md:pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => <FeatureCard key={reason.title} {...reason} />)}
        </div>
      </section>
      <section className="bg-surface py-16 md:py-20">
        <div className="container-standard grid gap-10 lg:grid-cols-2">
          <SectionHeading align="left" eyebrow="What Pravnya is" title="A private child development companion." body="It helps you capture updates, understand possible patterns and prepare for conversations." />
          <SectionHeading align="left" eyebrow="What Pravnya is not" title="Not a doctor, diagnosis or score." body="Pravnya supports your record and preparation. Professionals remain essential for medical, clinical and educational decisions." />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Questions parents ask" title="Clear answers before you start." />
          <div className="mt-10"><FaqAccordion items={faq} /></div>
        </div>
      </section>
      <CtaBanner title="Start with one moment worth remembering." body="Free to start. No credit card." cta="Start free" />
    </>
  );
}

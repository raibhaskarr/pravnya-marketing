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
  { icon: UsersThree, title: "Home and therapy, side by side", body: "See how your child's goals are going at home and at the centre, in one place." },
  { icon: Lock, title: "Control stays with you", body: "Approve every AI suggestion before it is saved. Decide who joins your child's care team, and delete your account when you want." },
];

const faq = [
  { question: "Does my child need a diagnosis?", answer: "No. Pravnya is useful for any family keeping track of development, support, school or therapy information." },
  { question: "Will Pravnya compare my child with others?", answer: "No. Pravnya focuses on your child's own information over time and does not diagnose or rank children." },
  { question: "Can my child's therapist be part of it?", answer: "Yes. From Profile, invite your child's therapist by email to join their care team. You can resend or cancel an invite, and remove anyone from the care team at any time." },
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
          <SectionHeading align="left" eyebrow="What Pravnya is" title="A private child development companion." body="It helps you log what happened, keep your child's goals in one place and see how they are growing." />
          <SectionHeading align="left" eyebrow="What Pravnya is not" title="Not a doctor, diagnosis or score." body="Pravnya supports your record of your child's goals. Professionals remain essential for medical, clinical and educational decisions." />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Questions parents ask" title="Clear answers before you start." />
          <div className="mt-10"><FaqAccordion items={faq} /></div>
        </div>
      </section>
      <CtaBanner title="Start with one note worth remembering." body="Free to start. No credit card." cta="Start free" />
    </>
  );
}

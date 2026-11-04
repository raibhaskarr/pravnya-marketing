import type { Metadata } from "next";
import {
  Briefcase,
  Buildings,
  ChartLineUp,
  Handshake,
  Lock,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("partners");

const ways = [
  {
    icon: Buildings,
    title: "Give your team real tooling",
    body: "Your therapists and admins get their own accounts to manage every child's goals, evidence and schedule in one place, alongside the families already using Pravnya at home.",
  },
  {
    icon: Handshake,
    title: "Introduce Pravnya to your families",
    body: "Recommend Pravnya to the parents you work with. They get one private place to keep what they're seeing at home, in sync with what you're tracking at the centre.",
  },
];

const teamFeatures = [
  {
    icon: UsersThree,
    title: "One place for every child you support",
    body: "See goals, evidence and progress for every client across your centre, not one spreadsheet or notebook per therapist.",
  },
  {
    icon: ChartLineUp,
    title: "Shared goals and evidence",
    body: "Log progress against the same goals parents see at home, so updates don't have to be re-explained from scratch at every session.",
  },
  {
    icon: Briefcase,
    title: "Invite your own therapists",
    body: "Bring your team on with their own logins and the right access to the children they work with.",
  },
  {
    icon: Lock,
    title: "Families stay in control",
    body: "Parents decide what a centre can see and contribute. Nothing changes about who owns a child's record.",
  },
];

const partnersFaq = [
  {
    question: "Is there a cost for centres?",
    answer: "We're still finalizing pricing for centres. Tell us about your practice and we'll figure out what makes sense together.",
  },
  {
    question: "Can my therapists start using it today?",
    answer: "Yes. Reach out and we'll get your centre and your first therapist accounts set up.",
  },
  {
    question: "Do parents still own their data if we're connected?",
    answer: "Yes. A family's record belongs to them. Connecting with your centre only shares what they choose to share, and they can change that at any time.",
  },
  {
    question: "We're not a formal centre, just a small practice or independent therapist — can we still partner?",
    answer: "Yes. \"Centre\" just means wherever your team sees clients, however small. Reach out and tell us about your practice.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        eyebrow="For therapy centres & practices"
        title="Partner with Pravnya."
        body="Give your team one place to track the children you support, and help the families you see keep that same record at home."
        primaryCta="Let's talk"
        primaryHref="mailto:partnerships@pravnya.com"
        secondaryCta="Read how Pravnya works"
        secondaryHref="/how-it-works"
      />

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Two ways to work with us" title="Partnering with Pravnya isn't one-size-fits-all." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ways.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-subtle py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="What your team gets" title="Tooling built for how a centre actually works." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamFeatures.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading eyebrow="Common questions" title="What centres usually ask." />
          <div className="mt-10"><FaqAccordion items={partnersFaq} /></div>
        </div>
      </section>

      <CtaBanner
        title="Tell us about your centre."
        body="We're growing our partner list thoughtfully, centre by centre. Reach out and we'll figure out the right fit together."
        cta="Email partnerships@pravnya.com"
        href="mailto:partnerships@pravnya.com"
      />
    </>
  );
}

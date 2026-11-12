import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Lock, User } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, type Person } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
      {people.map((person) => (
        <div key={person.name} className="rounded-lg border border-border bg-surface p-6 shadow-s">
          <h3 className="text-xl font-semibold text-ink">
            {person.url ? <a href={person.url} rel="noopener noreferrer" target="_blank" className="hover:text-forest">{person.name}</a> : person.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-forest">{person.role}</p>
          {person.bio ? <p className="mt-3 leading-7 text-ink-secondary">{person.bio}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Pravnya"
        title="We built Pravnya because of a moment every parent knows."
        visualSrc="/assets/brand/illustration-parent-child-moment.svg"
        visualAlt="A parent and child sitting together as everyday moments become an organized Pravnya record"
        visualCaption="The company began with a simple question: where should all these moments go?"
      />
      <section className="pb-16 md:pb-20">
        <div className="container-standard">
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-8 text-ink-secondary">
            <p>Before an appointment or school meeting, parents are often asked a simple question: “What exactly has changed?”</p>
            <p>The knowledge is there, but it is scattered across memory, messages, photos and reports. A voice note after speech therapy, a worksheet from the occupational therapist, a goal from the IEP, something new your child did at dinner. Small moments are easy to lose.</p>
            <p>Pravnya was built to give that knowledge a useful shape: a calm, private companion that helps families keep what matters and speak with confidence when a school, therapist or doctor asks what has changed. We started with families in India and now support families in the UAE too.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-standard">
          <SectionHeading title="The beliefs that shape everything we build." />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5">
            {[
              "Every child deserves to be understood—not ranked.",
              "Parents deserve confidence in important conversations.",
              "AI must explain what it knows and what it does not.",
              "A family's trust is never a commercial asset.",
            ].map((belief) => <div key={belief} className="rounded-lg border-l-4 border-gold bg-gold-subtle p-6 font-display text-2xl">{belief}</div>)}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-ink-secondary">
            Pravnya follows your child&apos;s own story over time and keeps professional judgement where it belongs: with qualified people and informed families. It does not diagnose, and it never compares your child with other children.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-standard">
          <SectionHeading title="Trustworthy by design." body="Pravnya is built to support a parent's understanding, not replace it." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard icon={Eye} title="Suggestions show their basis" body="Each AI suggestion shows what it is based on and how confident it is, and nothing is saved until you approve it." />
            <FeatureCard icon={User} title="Parents stay in control" body="Uncheck what isn't right, decide who joins your child's care team, and remove anyone at any time." />
            <FeatureCard icon={Lock} title="Privacy is not an add-on" body="Your record is never sold or used to train AI models, and you can delete your account." />
          </div>
          <p className="mt-10 text-center">
            <Link href="/ask-pravnya-ai" className="font-semibold text-forest underline underline-offset-4">How Pravnya uses AI</Link>
            <span className="mx-3 text-ink-tertiary">·</span>
            <Link href="/privacy" className="font-semibold text-forest underline underline-offset-4">Our privacy promise</Link>
          </p>
        </div>
      </section>

      {company.team.length ? (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-standard">
            <SectionHeading title="Who we are." />
            <PeopleGrid people={company.team} />
          </div>
        </section>
      ) : null}

      {company.advisors.length ? (
        <section className="py-16 md:py-20">
          <div className="container-standard">
            <SectionHeading title="Our advisors." body="Professionals who advise us on how Pravnya supports families and care teams." />
            <PeopleGrid people={company.advisors} />
          </div>
        </section>
      ) : null}

      {company.legalName || company.address?.length ? (
        <section className="pb-16">
          <div className="container-standard max-w-3xl text-center text-ink-secondary">
            {company.legalName ? <p className="font-semibold text-ink">{company.legalName}</p> : null}
            {company.address?.map((line) => <p key={line}>{line}</p>)}
          </div>
        </section>
      ) : null}

      <CtaBanner title="Keep what matters in one place." cta="Start free" />
    </>
  );
}

import type { Metadata } from "next";
import { ChartLineUp, ChatCircleText, CheckCircle, FileArrowUp, HouseLine, NotePencil, Target, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Hero } from "@/components/sections/hero";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("features");

const features = [
  {
    icon: NotePencil,
    title: "Log a session your way",
    body: "Tap the camera button on Home and choose how to tell Pravnya what happened: write a note, take a photo of a handwritten or printed note or worksheet, or record a voice note.",
    src: "/assets/screenshots/screenshot-capture.webp",
    alt: "Pravnya Log screen on the Write tab with a parent's note about a speech therapy session typed in",
    caption: "Write it, photograph it or say it.",
  },
  {
    icon: CheckCircle,
    title: "Review with AI, then approve",
    body: "Pravnya's AI matches what happened to your child's existing goals and proposes entries — the goal, how it went, how much help was needed and how your child responded. Each suggestion shows what it is based on and how confident the AI is. Uncheck anything that isn't right, then add the rest. Nothing is saved until you approve it.",
    src: "/assets/screenshots/screenshot-ai-review.webp",
    alt: "Pravnya AI review screen showing Found 2 pieces of evidence, with two proposed goal entries and an Add 2 approved button",
    caption: "You approve every entry before it is saved.",
  },
  {
    icon: Target,
    title: "Your child's goals, in one place",
    body: "See every goal with its developmental area and skill, how many entries it has and where it came from — your IEP upload or your care team. Open a goal to see recent entries, or log something for it by hand.",
    src: "/assets/screenshots/screenshot-goals.webp",
    alt: "Pravnya Goals list showing a child's goals with their developmental area, skill and number of entries",
    caption: "Every goal, with the entries behind it.",
  },
  {
    icon: FileArrowUp,
    title: "Upload an IEP or therapy plan",
    body: "Upload a PDF or photo of your child's IEP or therapy plan, during setup or later from Goals. Pravnya finds new goals and progress updates on goals your child already has. You review them and add only what's right.",
    src: "/assets/screenshots/screenshot-iep-upload.webp",
    alt: "Pravnya IEP upload review showing new goals found and updates to existing goals, ready for the parent to approve",
    caption: "New goals and updates, ready for your review.",
  },
  {
    icon: ChartLineUp,
    title: "See growth in your child's own story",
    body: "Growth shows how each goal is going against your child's own history — never compared with other children. Simple wording like \"Getting stronger\" or \"Still building\", a coloured bar for the last five tries, and milestones like a first success or a skill showing up at home.",
    src: "/assets/screenshots/screenshot-growth.webp",
    alt: "Pravnya Growth screen showing a growth highlight, summary tiles and goals with trend wording and coloured bars",
    caption: "Progress measured against your own child, over time.",
  },
  {
    icon: HouseLine,
    title: "Try this at home",
    body: "Activities shows goals your child has shown at a centre or in therapy but hasn't tried much at home yet. Tap one to log how the home try went.",
    src: "/assets/screenshots/screenshot-activities.webp",
    alt: "Pravnya Activities screen with Try this at home suggestions comparing centre and home entries for each goal",
    caption: "Ideas drawn from what your child already does at the centre.",
  },
  {
    icon: ChatCircleText,
    title: "Ask Pravnya",
    body: "Ask a question, or tell Pravnya what happened, from the chat box on Home. It answers using your child's own goals. If you're describing something that happened, it takes you to logging with your words already filled in.",
    src: "/assets/screenshots/screenshot-ask-pravnya.webp",
    alt: "Pravnya Home chat showing a parent's question and Pravnya's answer",
    caption: "Answers grounded in your child's goals.",
  },
  {
    icon: UsersThree,
    title: "Care team and schedule",
    body: "Invite your child's therapist by email to join their care team — resend or cancel an invite, or remove anyone at any time. Add your child's weekly therapy slots so Pravnya can offer to help you log after a session.",
    src: "/assets/screenshots/screenshot-care-team.webp",
    alt: "Pravnya Profile showing the child's care team with a therapist and a pending invite, and a weekly therapy schedule",
    caption: "You decide who joins your child's care team.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Hero centered eyebrow="What you can do" title="Log it. See it grow. Try it at home." body="Pravnya helps you record what happened, keep your child's goals in one place and see how they are growing. The AI proposes; you decide." />
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
                <PhoneMockup src={feature.src} label={feature.title} alt={feature.alt} caption={feature.caption} className="max-w-[270px]" />
              </article>
            );
          })}
        </div>
      </section>
      <CtaBanner title="Start with one note." body="Pravnya becomes more useful as your child's entries build up." cta="Start free" />
    </>
  );
}

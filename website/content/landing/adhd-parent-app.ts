import type { LandingPage } from "./types";

export const page: LandingPage = {
  slug: "adhd-parent-app",
  seo: {
    title: "App for Parents of Children with ADHD",
    description:
      "Pravnya is an app for parents of children with ADHD. Keep behaviour and therapy goals in one place, log moments at home quickly, and see what's changing.",
  },
  eyebrow: "For families of children with ADHD",
  title: "An app for parents of children with ADHD",
  intro:
    "Days with a child with ADHD can move fast, and the details blur together. Pravnya is an app for parents of children with ADHD that helps you note what happens, link it to your child's therapy and behaviour goals, and look back calmly when you need to.",
  screenshot: {
    src: "/assets/screenshots/screenshot-voice-note.webp",
    alt: "Pravnya's Log screen while a parent records a voice note about something that happened with their child.",
    caption: "Record a quick voice note when there's no time to type.",
  },
  sections: [
    {
      heading: "Busy days are hard to remember",
      paragraphs: [
        "A calm morning routine, a tough homework session, a moment of real focus at a puzzle: all of it can happen before lunch. By the time you sit with a therapist or teacher, the details have often faded.",
        "Many families working with ADHD have goals around routines, attention, emotional regulation or social skills. These show up in daily life far more than in a weekly session, which makes parent notes especially useful.",
      ],
    },
    {
      heading: "Tracking goals without adding pressure",
      paragraphs: [
        "Keeping a record shouldn't feel like another chore, for you or your child. Short notes, taken when it's convenient, are enough. Looking back over a few weeks often shows changes that are hard to see day to day.",
        "It also helps to note the good moments, not only the hard ones. A record of what went well gives you and the care team something to build on.",
      ],
      bullets: [
        "What was happening before and during the moment",
        "How much help or reminding your child needed",
        "How they responded, and what seemed to help",
      ],
    },
    {
      heading: "Working with school and therapists",
      paragraphs: [
        "Children with ADHD may have support from a behavioural therapist, an occupational therapist, a counsellor or a school support plan. In the UAE, schools commonly write IEPs for students of determination; in India, some inclusive schools and therapy centres write plans too. Having all the goals in one place helps everyone talk about the same things.",
      ],
    },
  ],
  steps: [
    {
      title: "Log the moment, your way",
      body: "Use the camera button on Home to write a note, take a photo of a school note or worksheet, or record a voice note while it's fresh.",
    },
    {
      title: "Check what Pravnya suggests",
      body: "Pravnya's AI matches what you logged to your child's goals and proposes entries, including how much help was needed and how your child responded. It shows what each suggestion is based on and how confident it is. Untick anything wrong; nothing is saved until you approve.",
    },
    {
      title: "Keep plans and goals together",
      body: "Upload an IEP or therapy plan as a PDF or photo. Pravnya finds goals and updates for you to review. Every goal shows its area, skill and number of entries.",
    },
    {
      title: "Look back with Growth",
      body: "See each goal against your child's own history, with plain words like \"Getting stronger\" or \"Still building\" and a coloured bar for the last five tries.",
    },
  ],
  faq: [
    {
      question: "Does Pravnya diagnose or manage ADHD?",
      answer:
        "No. Pravnya isn't a medical or diagnostic tool and doesn't give treatment advice. It organises what you and the care team record. Talk to your child's doctor or therapist about clinical questions.",
    },
    {
      question: "Can I describe something that happened and log it from chat?",
      answer:
        "Yes. If you tell Ask Pravnya about something that happened, it takes you to logging with your words already filled in, so you can review the suggestions and save.",
    },
    {
      question: "Can I share this with my child's therapist?",
      answer:
        "Yes, if you choose to. Invite a therapist to the care team by email. You decide who's on the team and can remove anyone at any time.",
    },
    {
      question: "Is Pravnya free?",
      answer:
        "It's free to start, with no credit card needed. Use it in any web browser or on the Android app. Pravnya launched in India and is also used by families in the UAE.",
    },
  ],
  related: [
    { href: "/ask-pravnya-ai", label: "Ask Pravnya about your child's goals" },
    { href: "/iep-goal-tracker", label: "IEP goal tracker" },
    { href: "/therapy-session-notes", label: "Therapy session notes for parents" },
    { href: "/parents", label: "Pravnya for parents" },
  ],
};

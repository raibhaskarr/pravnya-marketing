import type { LandingPage } from "./types";

export const page: LandingPage = {
  slug: "speech-therapy-progress-tracker",
  seo: {
    title: "Speech Therapy Progress Tracker",
    description:
      "Wondering if speech therapy is working? Pravnya is a speech therapy progress tracker for parents. Log new words and sessions, and see what changes.",
  },
  eyebrow: "For speech therapy families",
  title: "A speech therapy progress tracker for parents",
  intro:
    "Speech often changes in small steps: a new sound, a two-word phrase, a request made without pointing. Pravnya is a speech therapy progress tracker that helps you notice those steps, keep them in one place, and share them with your child's speech therapist.",
  screenshot: {
    src: "/assets/screenshots/screenshot-capture.webp",
    alt: "Pravnya's Log screen on the Write tab, showing a parent's note describing what happened in their child's speech therapy session.",
    caption: "Write a few lines after a session. Pravnya matches it to your child's goals.",
  },
  sections: [
    {
      heading: "\"Is speech therapy working?\"",
      paragraphs: [
        "Almost every parent asks this at some point. Sessions are short, progress can be uneven, and a good week can be followed by a quiet one. When your child has a speech delay, it's natural to want to know whether things are moving.",
        "The honest answer usually comes from looking back over weeks and months, not days. That is hard to do from memory alone. A simple record of what you see at home and what the therapist shares makes the pattern easier to spot, and gives you something concrete to talk through together.",
      ],
    },
    {
      heading: "Small signs worth writing down",
      paragraphs: [
        "You don't need clinical terms. Plain notes are enough, and they help your child's speech therapist understand life outside the therapy room.",
      ],
      bullets: [
        "A new word, sound or phrase, and where it happened",
        "Whether your child needed a prompt or said it on their own",
        "How they responded: keen, frustrated, playful, tired",
        "Something practised in therapy that showed up at home",
      ],
    },
    {
      heading: "When therapy happens at a centre",
      paragraphs: [
        "Many children in India and the UAE attend speech therapy at a centre, sometimes alongside occupational therapy or a special educator. Each therapist may keep their own notes. Having your own record, organised by goal, helps you connect what happens in sessions with what you see at home.",
      ],
    },
  ],
  steps: [
    {
      title: "Log in the way that suits you",
      body: "After a session or a moment at home, write a note, take a photo of the therapist's handwritten note, or record a voice note. It takes a minute.",
    },
    {
      title: "Review what Pravnya suggests",
      body: "Pravnya's AI matches your note to your child's speech goals and proposes entries: how it went, how much help was needed and how your child responded. Each suggestion shows what it's based on and how confident it is. Untick anything wrong. Nothing is saved until you approve.",
    },
    {
      title: "See the trend for each goal",
      body: "Growth compares each goal only with your child's own history. Plain words like \"Getting stronger\" or \"Still building\", a coloured bar for the last five tries, and milestones such as a first success or a skill showing up at home.",
    },
    {
      title: "Bring the record to your therapist",
      body: "Invite your child's speech therapist to the care team by email, or simply open Pravnya at your next session. Questions about therapy itself are best answered by them.",
    },
  ],
  faq: [
    {
      question: "Can Pravnya tell me whether speech therapy is working?",
      answer:
        "Pravnya doesn't assess your child. It shows what you and the care team have recorded, organised by goal and over time. That record can help you have a clearer conversation with your child's speech therapist, who is best placed to answer.",
    },
    {
      question: "My child has a speech delay. Will Pravnya compare them with other children?",
      answer:
        "No. Growth only compares each goal with your own child's earlier entries. There are no charts against other children or age averages.",
    },
    {
      question: "Can I log a session using the therapist's handwritten notes?",
      answer:
        "Yes. Take a photo of a handwritten or printed note or worksheet. Pravnya reads it and proposes entries for you to check before anything is saved.",
    },
    {
      question: "Is Pravnya available outside India?",
      answer:
        "Pravnya launched in India and is also used by families in the UAE. It works in any web browser, and there's an Android app on Google Play. It's free to start.",
    },
  ],
  related: [
    { href: "/blog/signs-speech-therapy-is-working", label: "Signs speech therapy is working" },
    { href: "/therapy-session-notes", label: "Therapy session notes for parents" },
    { href: "/growth", label: "See how Growth works" },
    { href: "/how-it-works", label: "How Pravnya works" },
  ],
};

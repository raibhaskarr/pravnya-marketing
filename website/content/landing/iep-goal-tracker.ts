import type { LandingPage } from "./types";

export const page: LandingPage = {
  slug: "iep-goal-tracker",
  seo: {
    title: "IEP Goal Tracker for Parents",
    description:
      "Pravnya is an IEP goal tracker for parents. Upload your child's IEP, log progress at home in a few taps, and walk into the next review meeting prepared.",
  },
  eyebrow: "For parents with an IEP",
  title: "An IEP goal tracker that fits into family life",
  intro:
    "Your child's IEP sets out what everyone is working towards. Pravnya is an IEP goal tracker for parents: it keeps those goals in one private place, so you can track IEP goals at home and see how your child is doing between school reviews.",
  screenshot: {
    src: "/assets/screenshots/screenshot-iep-upload.webp",
    alt: "Pravnya's IEP upload review screen listing new goals found in an uploaded IEP and progress updates to goals the parent already has, each ready to review before adding.",
    caption: "Upload an IEP and review what Pravnya found before anything is added.",
  },
  sections: [
    {
      heading: "The IEP is written once, but the work happens every day",
      paragraphs: [
        "An IEP (individualised education plan) is usually reviewed a few times a year. In between, it can sit in a folder while daily life carries on. Teachers, special educators and therapists each see part of the picture, and parents see the rest at home.",
        "When the next meeting comes round, it can be hard to remember what changed. Was that new word in March or May? Did the handwriting goal move forward, or was it a good week? Without notes, the conversation leans on memory.",
      ],
    },
    {
      heading: "What parents can bring to an IEP review",
      paragraphs: [
        "Schools see your child in one setting. You see them at home, at the park and with family. Short notes on what you notice give the team a fuller view, and help you ask clearer questions.",
      ],
      bullets: [
        "Moments when a goal skill showed up at home",
        "How much help your child needed, and how they responded",
        "Goals that feel stuck, or ones that seem ready to move on",
      ],
    },
    {
      heading: "IEPs in India and the UAE",
      paragraphs: [
        "In India, some inclusive schools write IEPs, and many children also have plans from a therapy centre or special educator. In the UAE, schools commonly write IEPs for students of determination. Either way, families often end up with goals spread across several documents. Keeping them together makes it easier to follow what each goal is for and how it is going.",
      ],
    },
  ],
  steps: [
    {
      title: "Upload the IEP",
      body: "Add a PDF or a photo of your child's IEP or therapy plan, at setup or any time later. Pravnya finds the goals in it, and progress updates on goals you already have. You review the list and add only what's right.",
    },
    {
      title: "See every goal in one list",
      body: "The Goals screen shows each goal with its developmental area, skill, number of entries and where it came from, such as an IEP upload or your care team. Open a goal to see recent entries or log something by hand.",
    },
    {
      title: "Log what you notice at home",
      body: "Write a quick note, snap a photo of a worksheet, or record a voice note. Pravnya's AI matches it to the right IEP goals and proposes entries. Each suggestion shows what it's based on and how confident it is. Nothing is saved until you approve it.",
    },
    {
      title: "Follow progress over time",
      body: "Growth shows each goal against your child's own history, never against other children, in plain words like \"Getting stronger\" or \"Still building\". It's a calm way to prepare for the next review.",
    },
  ],
  faq: [
    {
      question: "Can I upload an IEP that's already a few months old?",
      answer:
        "Yes. You can upload an IEP or therapy plan when you set up, or later when a new one arrives. Pravnya shows new goals and updates to existing goals separately, so you choose what to add.",
    },
    {
      question: "Does Pravnya write or change my child's IEP?",
      answer:
        "No. The IEP belongs to your child's school and care team. Pravnya helps you keep track of the goals and what you observe at home, so you can bring clearer notes to the people who write it.",
    },
    {
      question: "Is Pravnya a diagnostic or medical tool?",
      answer:
        "No. Pravnya organises what you and your child's care team record. It does not assess or diagnose. For questions about your child's development, talk to their therapist, teacher or doctor.",
    },
    {
      question: "Can my child's therapist see the goals too?",
      answer:
        "Only if you invite them. You can invite a therapist to the care team by email and remove anyone at any time. Your data is never sold or used to train AI models.",
    },
    {
      question: "Where can I use Pravnya?",
      answer:
        "Pravnya works in any web browser and as an Android app on Google Play. It launched in India and is also used by families in the UAE. It's free to start, with no credit card needed.",
    },
  ],
  related: [
    { href: "/blog/track-iep-goals-at-home", label: "How to track IEP goals at home" },
    { href: "/blog/preparing-for-an-iep-meeting", label: "Preparing for an IEP meeting" },
    { href: "/growth", label: "See how Growth works" },
    { href: "/therapy-session-notes", label: "Therapy session notes for parents" },
  ],
};

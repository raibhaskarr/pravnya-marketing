import type { LandingPage } from "./types";

export const page: LandingPage = {
  slug: "autism-parent-app",
  seo: {
    title: "App for Parents of Autistic Children",
    description:
      "Pravnya is an app for parents of autistic children. Keep therapy goals, session notes and moments at home in one private place, and follow their growth.",
  },
  eyebrow: "For autistic children and their families",
  title: "A calm app for parents of autistic children",
  intro:
    "Raising an autistic child often means juggling several therapists, plans and appointments. Pravnya is an app for parents of autistic children that keeps goals, session notes and everyday moments together, so autism therapy progress tracking feels manageable rather than another job.",
  screenshot: {
    src: "/assets/screenshots/screenshot-growth.webp",
    alt: "Pravnya's Growth screen showing a highlight, summary tiles, and a list of goals each with a trend word and a coloured bar for recent tries.",
    caption: "Growth compares each goal with your child's own history, never with other children.",
  },
  sections: [
    {
      heading: "Many people, many plans",
      paragraphs: [
        "Autistic children may work with a speech therapist, an occupational therapist, a behavioural therapist and a special educator, sometimes all in the same week. Each brings their own goals and their own way of writing them down.",
        "Parents become the link between them. You remember what the speech therapist said, mention it to the special educator, and try to keep it all going at home. It's a lot to hold in your head.",
      ],
    },
    {
      heading: "Seeing your child on their own terms",
      paragraphs: [
        "Progress for every child has its own shape. Comparing with other children or age charts rarely helps and can add worry. What helps more is seeing how your own child is doing against their own earlier days: a skill that took a lot of support last month and needs less now, or something that appeared at home for the first time.",
      ],
    },
    {
      heading: "Small moments matter",
      paragraphs: [
        "Some of the most meaningful changes happen outside therapy: a request made at dinner, a new way of coping with a busy place, joining a game with a cousin. These moments are easy to forget and useful to share with the care team.",
      ],
      bullets: [
        "Note what happened and where",
        "Note how much help was needed",
        "Note how your child seemed to feel about it",
      ],
    },
  ],
  steps: [
    {
      title: "Bring every goal together",
      body: "Upload IEPs or therapy plans as a PDF or photo. Pravnya finds goals and progress updates, and you add only what's right. The Goals screen shows each one with its area, skill and where it came from.",
    },
    {
      title: "Log in seconds",
      body: "Write a note, photograph a therapist's note, or record a voice note. Pravnya's AI suggests which goals it relates to and how it went, showing what each suggestion is based on and how confident it is. Nothing is saved until you approve.",
    },
    {
      title: "Follow growth without comparison",
      body: "Growth shows each goal against your child's own history, with words like \"Getting stronger\" or \"Still building\" and milestones such as a first success or a skill showing up at home.",
    },
    {
      title: "Share with the care team you choose",
      body: "Invite therapists by email and remove anyone at any time. Add weekly therapy slots and Home offers to help you log after each session.",
    },
  ],
  faq: [
    {
      question: "Is Pravnya an autism assessment or treatment app?",
      answer:
        "No. Pravnya doesn't diagnose, assess or treat. It organises what you and your child's care team record. For clinical questions, speak to your child's therapist or doctor.",
    },
    {
      question: "Will Pravnya compare my child with other children?",
      answer:
        "No. Every goal is shown only against your own child's earlier entries. There are no rankings or comparisons with other children.",
    },
    {
      question: "Can I ask questions about my child's progress?",
      answer:
        "Yes. Ask Pravnya, the chat box on Home, answers using your child's own goals and entries. If it can't help with something, it says so plainly.",
    },
    {
      question: "Who can see my child's information?",
      answer:
        "Only you and the people you invite to the care team. Your data is never sold and never used to train AI models, and you can delete your account at any time.",
    },
    {
      question: "Where is Pravnya available?",
      answer:
        "Pravnya launched in India and is also used by families in the UAE. It works in any web browser and on Android, and it's free to start.",
    },
  ],
  related: [
    { href: "/growth", label: "See how Growth works" },
    { href: "/ask-pravnya-ai", label: "Ask Pravnya about your child's goals" },
    { href: "/blog/developmental-milestones-without-comparing", label: "Milestones without comparing" },
    { href: "/blog/one-record-for-many-therapists", label: "One record for many therapists" },
  ],
};

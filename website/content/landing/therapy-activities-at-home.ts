import type { LandingPage } from "./types";

export const page: LandingPage = {
  slug: "therapy-activities-at-home",
  seo: {
    title: "Therapy Activities at Home: Keep Track",
    description:
      "Practise therapy activities at home with a clear picture of what to try. Pravnya shows goals your child does at the centre but hasn't tried much at home.",
  },
  eyebrow: "Home practice",
  title: "Therapy activities at home, without the guesswork",
  intro:
    "Therapists often ask families to practise at home, but it's hard to know where to start. Pravnya helps you keep track of therapy activities at home by showing which of your child's goals have come up in therapy but haven't been tried much at home yet.",
  screenshot: {
    src: "/assets/screenshots/screenshot-activities.webp",
    alt: "Pravnya's Activities screen with Try this at home suggestions, each comparing how often a goal has been logged at the therapy centre with how often it has been tried at home.",
    caption: "Try this at home: goals seen in therapy that are worth trying at home.",
  },
  sections: [
    {
      heading: "Why home practice feels hard",
      paragraphs: [
        "A session might cover several goals in under an hour. By the time you're home, you may remember one or two of them, and the rest of the day has its own demands. Many parents feel they should be doing more but aren't sure what.",
        "Home practice doesn't need to look like a therapy session. Often it's the same skill in an everyday moment: buttoning a shirt, asking for a snack, taking turns in a game. The trick is knowing which skills to look out for.",
      ],
    },
    {
      heading: "Occupational therapy home activities and beyond",
      paragraphs: [
        "Occupational therapy home activities are a good example. Fine motor goals, self-care routines and sensory goals all fit naturally into daily life. The same is true for speech goals and behavioural goals. Your child's therapist is the best person to suggest how to practise; Pravnya helps you remember what to practise and keep note of how it went.",
      ],
      bullets: [
        "Notice which goals come up most at the centre",
        "Look for natural moments to try them at home",
        "Write down what happened, even if it didn't go to plan",
      ],
    },
    {
      heading: "Connecting the centre and home",
      paragraphs: [
        "In India and the UAE, many children attend therapy at a centre a few times a week. What happens there and what happens at home can feel like two separate worlds. A shared record of goals helps join them up, so you and the therapist can see where a skill is showing up and where it isn't yet.",
      ],
    },
  ],
  steps: [
    {
      title: "See what to try at home",
      body: "Activities shows \"Try this at home\" suggestions: goals your child has shown at a centre or in therapy but hasn't tried much at home yet. It doesn't invent exercises; it works from your child's own goals and entries.",
    },
    {
      title: "Log how the home try went",
      body: "Tap a suggestion to log how it went: how much help your child needed and how they responded. Or use the camera button on Home to write a note, take a photo or record a voice note.",
    },
    {
      title: "Approve before anything is saved",
      body: "When you log a note, Pravnya's AI matches it to your child's goals and proposes entries, showing what each is based on and how confident it is. Untick anything that isn't right.",
    },
    {
      title: "Notice skills showing up at home",
      body: "Growth marks milestones such as a skill showing up at home for the first time, and tracks each goal against your child's own history.",
    },
  ],
  faq: [
    {
      question: "Does Pravnya give me a list of therapy exercises?",
      answer:
        "No. Pravnya isn't an exercise library. It points to goals your child is already working on in therapy that haven't been tried much at home. For how to practise a goal, ask your child's therapist.",
    },
    {
      question: "How does Pravnya know what happens at the therapy centre?",
      answer:
        "From what you and your care team log. You can photograph a therapist's note or worksheet, and if your child's therapy centre uses Pravnya, its entries appear too.",
    },
    {
      question: "Is this suitable for occupational therapy goals?",
      answer:
        "Yes. Pravnya works with goals across developmental areas, including fine motor, self-care, communication and behaviour, as long as they're in your child's goal list.",
    },
    {
      question: "How much does it cost, and where does it work?",
      answer:
        "It's free to start, with no credit card. Pravnya works in any web browser and on Android. It launched in India and is used by families in the UAE too.",
    },
  ],
  related: [
    { href: "/blog/occupational-therapy-goals-at-home", label: "Occupational therapy goals at home" },
    { href: "/features", label: "All Pravnya features" },
    { href: "/speech-therapy-progress-tracker", label: "Speech therapy progress tracker" },
    { href: "/blog/one-record-for-many-therapists", label: "One record for many therapists" },
  ],
};

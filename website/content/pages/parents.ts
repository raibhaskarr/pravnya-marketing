import {
  Camera,
  CaretRight,
  ChartLineUp,
  ChatCircleText,
  ClipboardText,
  FileArrowUp,
  Heart,
  HouseLine,
  LockKey,
  Microphone,
  NotePencil,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { sharedDisclaimerFaq } from "../shared-disclaimer-faq";

const [diagnosticToolFaq, replacesProfessionalFaq, medicalAdviceFaq, urgentConcernFaq] = sharedDisclaimerFaq;

export const parentsToc = [
  { id: "why-pravnya-exists", label: "Why Pravnya exists" },
  { id: "what-is-pravnya", label: "What is Pravnya" },
  { id: "core-features", label: "Core features" },
  { id: "why-parents-love-pravnya", label: "Why parents love it" },
  { id: "responsible-ai", label: "Responsible AI" },
  { id: "privacy-first", label: "Privacy first" },
  { id: "who-is-it-for", label: "Who is it for" },
  { id: "beta-programme", label: "Beta programme" },
  { id: "how-you-can-help", label: "How you can help" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const parentsHero = {
  eyebrow: "For parents, families, and partners",
  title: "Every step forward matters.",
  body:
    "An AI-powered companion that helps parents log what happened, keep their child's goals in one place, and celebrate every step forward.",
};

export const pravnyaPieces = [
  "A quick way to log a therapy session or a moment at home — write it, photograph a note, or record a voice note.",
  "One place for your child's goals, including the ones in their IEP or therapy plan.",
  "A growth view that shows progress in your child's own story, not against other children.",
  "Ideas for what to try at home, based on what your child is already doing at the centre.",
  "An AI companion that answers your questions using your child's own goals.",
  "A care team you control: invite your child's therapist, and remove anyone at any time.",
];

export const parentFeatures = [
  {
    icon: HouseLine,
    title: "Home",
    body:
      "Your starting point. Home shows growth highlights, milestones like a first success or a skill showing up at home, and ideas to try at home. After a scheduled therapy session it offers to help you jot down how it went, and it gently prompts you to fill in missing details like your child's therapy days.",
    benefit: "A calm check-in that shows what's worth celebrating and what to try next.",
    screenshot: "App screenshot: Home",
    screenshotSrc: "/assets/screenshots/screenshot-home.webp",
    screenshotCaption: "Milestones, growth highlights and ideas to try at home.",
    cta: { label: "See how it works", href: "/how-it-works" },
  },
  {
    icon: NotePencil,
    title: "Log a session: Write",
    body: "Tap the camera button on Home and type what happened — a few lines after therapy or a moment at home is enough.",
    benefit: "Capture it while it's fresh, in your own words.",
    screenshot: "App screenshot: Log, Write tab",
    screenshotSrc: "/assets/screenshots/screenshot-capture.webp",
    screenshotCaption: "Type what happened in your own words.",
  },
  {
    icon: Camera,
    title: "Log a session: Photo",
    body: "Take a photo of a handwritten or printed note or worksheet from your child's therapist or school. Pravnya's AI reads it.",
    benefit: "No need to retype what's already on paper.",
    screenshot: "App screenshot: Log, Photo tab",
    screenshotSrc: "/assets/screenshots/screenshot-photo-capture.webp",
    screenshotCaption: "Photograph a therapist's note and let the AI read it.",
  },
  {
    icon: Microphone,
    title: "Log a session: Voice",
    body: "Record a voice note instead of typing. Pravnya's AI listens and works out what happened.",
    benefit: "The lowest-effort way to log something before it slips your mind.",
    screenshot: "App screenshot: Log, Voice tab",
    screenshotSrc: "/assets/screenshots/screenshot-voice-note.webp",
    screenshotCaption: "Record a voice note when typing is too slow.",
  },
  {
    icon: ClipboardText,
    title: "Review with AI",
    body:
      "Whichever way you log, Pravnya's AI matches what happened to your child's existing goals and proposes entries: the goal, how it went, how much help was needed and how your child responded. Each suggestion shows what it is based on and how confident the AI is. Uncheck anything that isn't right, optionally tag the centre or therapist, and add the rest. If nothing matches, Pravnya says so.",
    benefit: "Nothing is saved until you approve it.",
    screenshot: "App screenshot: AI review",
    screenshotSrc: "/assets/screenshots/screenshot-ai-review.webp",
    screenshotCaption: "Approve the entries that are right, uncheck the rest.",
  },
  {
    icon: Target,
    title: "Goals",
    body:
      "All of your child's goals, each tagged with its developmental area and skill, how many entries it has, and where it came from — your IEP upload or your care team. Open a goal to see recent entries, or log something for it by hand.",
    benefit: "Every goal, and the evidence behind it, in one place.",
    screenshot: "App screenshot: Goals",
    screenshotSrc: "/assets/screenshots/screenshot-goals.webp",
    screenshotCaption: "Your child's goals, with their area, skill and entries.",
  },
  {
    icon: FileArrowUp,
    title: "Upload IEP",
    body:
      "Upload a PDF or photo of your child's IEP or therapy plan, during setup or later from Goals. Pravnya's AI finds new goals and progress updates on existing ones. You review them and add only what's right.",
    benefit: "Your child's plan becomes goals you can follow, without retyping it.",
    screenshot: "App screenshot: IEP upload review",
    screenshotSrc: "/assets/screenshots/screenshot-iep-upload.webp",
    screenshotCaption: "New goals and updates to existing goals, ready for review.",
  },
  {
    icon: ChartLineUp,
    title: "Growth",
    body:
      "Shows progress against your child's own history — never compared with other children. See each goal with simple wording like \"Getting stronger\" or \"Still building\", a coloured bar for the last five tries, and milestones like a first success or a skill showing up at home.",
    benefit: "Progress you can see and feel proud of, measured against your own child, over time.",
    screenshot: "App screenshot: Growth view",
    screenshotSrc: "/assets/screenshots/screenshot-growth.webp",
    screenshotCaption: "See progress through your child's own story.",
    cta: { label: "Explore Growth", href: "/growth" },
  },
  {
    icon: ChatCircleText,
    title: "Ask Pravnya",
    body:
      "Ask a question, or tell Pravnya what happened, from the chat box on Home. It answers using your child's own goals and keeps the conversation. If you're describing something that happened, it takes you to logging with your words already filled in.",
    benefit: "A thoughtful answer grounded in your child's goals, without ever telling you what to do.",
    screenshot: "App screenshot: Ask Pravnya",
    screenshotSrc: "/assets/screenshots/screenshot-ask-pravnya.webp",
    screenshotCaption: "Ask a question and get an answer grounded in your child's goals.",
    cta: { label: "Read AI commitments", href: "/ask-pravnya-ai" },
  },
  {
    icon: HouseLine,
    title: "Activities",
    body:
      "Try this at home: goals your child has shown at a centre or in therapy but hasn't yet tried much at home. Tap one to log how the home try went.",
    benefit: "Simple ideas for home practice, based on what your child is already doing.",
    screenshot: "App screenshot: Activities",
    screenshotSrc: "/assets/screenshots/screenshot-activities.webp",
    screenshotCaption: "Try this at home, based on what your child already does at the centre.",
  },
  {
    icon: UsersThree,
    title: "Profile: care team and schedule",
    body:
      "Invite your child's therapist by email to join their care team. Resend or cancel an invite, and remove anyone at any time. Add your child's weekly therapy slots — what, which day, what time, and optionally the therapist.",
    benefit: "You decide who is on your child's care team.",
    screenshot: "App screenshot: Care team and schedule",
    screenshotSrc: "/assets/screenshots/screenshot-care-team.webp",
    screenshotCaption: "Your child's care team and weekly therapy schedule.",
  },
  {
    icon: LockKey,
    title: "Privacy & Security",
    body:
      "Your child's record is private by default. We do not sell it or use it to train AI models. You decide who joins your child's care team, and you can delete your account at any time.",
    benefit: "Peace of mind that comes from real control, not just a promise.",
    screenshot: "App screenshot: Care team",
    screenshotSrc: "/assets/screenshots/screenshot-care-team.webp",
    screenshotCaption: "The care team stays parent-led.",
    cta: { label: "Read privacy", href: "/privacy" },
  },
];

export const parentLoveReasons = [
  "Log what happened in whatever form fits the moment: a note, a photo of a note, a voice note.",
  "Celebrate progress over time — see how far your child has come, in their own story.",
  "Remember milestones like a first success without relying on memory alone.",
  "Keep your child's goals, including their IEP goals, in one place instead of scattered papers and messages.",
  "Know what to try at home, based on what your child is already doing at the centre.",
  "Approve every AI suggestion before it is saved.",
];

export const responsibleAiPoints = [
  "AI supports parents. It never replaces therapists, teachers, or healthcare professionals.",
  "Pravnya's answers are grounded in your child's own goals — never other families' data.",
  "When nothing matches, or it can't help, Pravnya says so.",
  "You remain in control. AI only proposes; nothing is saved until you approve it.",
];

export const privacyPoints = [
  "You own your data. It belongs to your family — not to us, and not for sale.",
  "You decide who joins your child's care team, and you can remove anyone at any time.",
  "Your data is encrypted, both in transit and at rest, and private by default.",
  "We will never sell your data, share it with advertisers, or use it beyond helping you and the people you choose to include.",
  "Your child's record is never used to train AI models.",
  "You can permanently delete your account whenever you choose.",
];

export const audienceGroups = ["Parents", "Grandparents", "Caregivers", "Teachers", "Therapists"];

export const familyFits = [
  "Typical development",
  "Developmental delays",
  "Autism",
  "Speech and language differences",
  "Early intervention",
  "General child development",
];

export const helpActions = [
  "Invite parents you know who are navigating their child's development.",
  "Share it with schools — teachers are often among the first to notice a pattern worth tracking.",
  "Introduce it to therapists you work with, so they can see the context a well-kept record makes possible.",
  "Share it in parent communities, in-person or online.",
  "Give us feedback — what worked, what didn't, what confused you.",
  "Report bugs — even small ones. They help us make the product sturdier.",
  "Tell us what would make Pravnya even better. We're listening, and we mean it.",
];

export const parentsFaq = [
  {
    question: "What is Pravnya, exactly?",
    answer:
      "Pravnya is an app that helps parents log what happened in therapy and at home, keep their child's goals in one place, and see how their child is growing. Its AI only proposes; you decide what is saved.",
  },
  {
    question: "Who is Pravnya for?",
    answer:
      "Any parent or caregiver who wants to keep a thoughtful record of their child's development — whether that's a typically developing child, a child with a developmental delay, autism, speech or language differences, or a child in early intervention.",
  },
  {
    question: "Does my child need a diagnosis to use Pravnya?",
    answer: "No. Pravnya is useful to any family paying attention to their child's development, with or without a diagnosis.",
  },
  diagnosticToolFaq,
  replacesProfessionalFaq,
  medicalAdviceFaq,
  urgentConcernFaq,
  {
    question: "What devices does Pravnya work on?",
    answer: "Pravnya works in your phone or computer browser, and there is an Android app.",
  },
  {
    question: "Can I track more than one child?",
    answer: "Yes. You can add more than one child and switch between them from the top of the app.",
  },
  {
    question: "Can my child's therapist be part of it?",
    answer:
      "Yes. From Profile, invite your child's therapist by email to join their care team. If they already use Pravnya, they are linked right away. You can remove anyone from the care team at any time.",
  },
  {
    question: "Is my family's data sold to anyone?",
    answer: "No, never. We do not sell family data, and we never will.",
  },
  {
    question: "Is my data used to train AI models?",
    answer: "No. Your child's record is never used to train AI — for your family or any other.",
  },
  {
    question: "Is my data encrypted?",
    answer: "Yes. Data is encrypted both in transit and at rest, and it's private by default.",
  },
  {
    question: "Can I delete my data?",
    answer: "Yes, at any time. See our delete-account page for how it works.",
  },
];

export const contactRows = [
  ["Website", "pravnya.com"],
  ["Get in touch", "pravnya.com/contact"],
  ["Support", "support@pravnya.com"],
  ["Partnerships", "partnerships@pravnya.com"],
  ["Press", "press@pravnya.com"],
];

export const parentsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Parents",
  url: "https://pravnya.com/parents",
  description:
    "A parent-friendly guide to Pravnya: what it is, how it helps families, responsible AI, privacy, beta access, and frequently asked questions.",
  audience: {
    "@type": "Audience",
    audienceType: "Parents, caregivers, schools, therapists, child development centres, NGOs, and parent communities",
  },
  mainEntity: parentsFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export { CaretRight, Heart, UsersThree };

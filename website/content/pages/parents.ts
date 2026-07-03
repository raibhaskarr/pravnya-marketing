import {
  BookOpen,
  Camera,
  CaretRight,
  ChartLineUp,
  ChatCircleText,
  ClipboardText,
  FileText,
  Heart,
  HouseLine,
  LockKey,
  Microphone,
  NotePencil,
  ShareNetwork,
  Sparkle,
  UserCircle,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";

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
    "A modern, AI-powered companion that helps parents capture, understand, and celebrate every step of their child's developmental journey.",
};

export const pravnyaPieces = [
  "A development journal for the notes, questions, and observations you want to remember.",
  "A growth tracker that shows progress in your child's own story, not against other children.",
  "A family memory book for the photos, videos, and voice notes worth keeping.",
  "An AI assistant that helps you notice patterns in what you've already recorded.",
  "Progress reports ready to bring to any appointment or meeting.",
  "Secure sharing so you decide exactly what a professional or family member sees.",
];

export const parentFeatures = [
  {
    icon: UserCircle,
    title: "Child Profile",
    body:
      "Every child has their own space: basic details, the developmental areas you're keeping an eye on, and the professionals involved in their care. You build it gradually — nothing has to be filled in on day one.",
    benefit: "Everything about your child's journey starts from one organised place.",
    screenshot: "App screenshot: Child Profile",
    screenshotSrc: "/assets/screenshots/screenshot-child-profile.webp",
    screenshotCaption: "A dedicated space for your child's profile, supports, and development areas.",
    cta: { label: "Learn more", href: "/features" },
  },
  {
    icon: HouseLine,
    title: "Today",
    body:
      "Your home screen. It shows what you've recently captured, any AI insight that's ready for you, and puts the capture button one tap away.",
    benefit: "A quick daily check-in — not another dashboard to study.",
    screenshot: "App screenshot: Today",
    screenshotSrc: "/assets/screenshots/screenshot-today.webp",
    screenshotCaption: "Recent insights, reminders, and capture actions in one calm daily view.",
    cta: { label: "See how it works", href: "/how-it-works" },
  },
  {
    icon: NotePencil,
    title: "Quick Capture",
    body: "The fastest way to add anything to your child's record — in whichever form fits the moment.",
    benefit: "A thirty-second voice note captured in the moment beats a perfectly written paragraph that never gets written.",
    screenshot: "App screenshot: Quick Capture",
    screenshotSrc: "/assets/screenshots/screenshot-capture.webp",
    screenshotCaption: "Choose the fastest way to save what just happened.",
  },
  {
    icon: Camera,
    title: "Photos",
    body: "Capture a moment visually, straight from your camera or photo library, with a short note explaining what it shows.",
    benefit: "Turns a photo into a searchable, meaningful part of your child's record — not just another file in your camera roll.",
    screenshot: "App screenshot: Photo capture",
    screenshotSrc: "/assets/screenshots/screenshot-photo-capture.webp",
    screenshotCaption: "Save a photo memory with context so it becomes part of the record.",
  },
  {
    icon: VideoCamera,
    title: "Videos",
    body:
      "Add a short video when something is better shown than described — a new movement, a first attempt at a word, a moment of play.",
    benefit: "Captures nuance that a written note can't.",
    screenshot: "App screenshot: Video capture",
    screenshotSrc: "/assets/screenshots/screenshot-video-upload.webp",
    screenshotCaption: "Upload a video and tell Pravnya what to focus on.",
  },
  {
    icon: Microphone,
    title: "Voice Notes",
    body:
      "Speak instead of type. Voice notes are automatically transcribed and become fully searchable, and they work even without an internet connection — transcription completes as soon as you're back online.",
    benefit: "The lowest-effort way to capture something before it slips your mind.",
    screenshot: "App screenshot: Voice note",
    screenshotSrc: "/assets/screenshots/screenshot-voice-note.webp",
    screenshotCaption: "Record or upload a voice note when typing is too slow.",
  },
  {
    icon: BookOpen,
    title: "Journey",
    body:
      "A timeline that shows your child's development as a story across time, not as a list of disconnected entries — organised by developmental domain, with milestones and professional visits marked along the way.",
    benefit:
      "Patterns and progress become visible when you look at weeks and months together. It may feel sparse at first; it becomes rich after a few months of steady capturing.",
    screenshot: "App screenshot: Journey timeline",
    screenshotSrc: "/assets/screenshots/screenshot-journey.webp",
    screenshotCaption: "Moments become a timeline your family can revisit.",
    cta: { label: "Explore Journey", href: "/journey" },
  },
  {
    icon: ChartLineUp,
    title: "Growth",
    body:
      "Shows movement in your child's own story — and only that. Pravnya never shows a score, a percentile, or a behind/on-track label. You choose the time period you want to look at.",
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
      "A conversational AI that helps you understand your own observations more deeply — by reading only your child's record, never the open internet or other families' data.",
    benefit: "A thoughtful second look at what you've already noticed, without ever telling you what to do.",
    screenshot: "App screenshot: Ask Pravnya",
    screenshotSrc: "/assets/screenshots/screenshot-ask-pravnya.webp",
    screenshotCaption: "Ask thoughtful questions grounded in your own record.",
    cta: { label: "Read AI commitments", href: "/ask-pravnya-ai" },
  },
  {
    icon: ClipboardText,
    title: "Activities",
    body: "Your complete record — every note, photo, voice memo, and document you've ever captured, newest first, and fully searchable.",
    benefit: "Go back, add a tag you forgot, or find the one entry from six months ago that suddenly matters again.",
    screenshot: "App screenshot: Activities",
    screenshotSrc: "/assets/screenshots/screenshot-activities.webp",
    screenshotCaption: "Simple home practice ideas linked to your child's current needs.",
  },
  {
    icon: FileText,
    title: "Reports",
    body:
      "Generates a structured summary of what your record shows — observations, what's changed, and questions worth raising — ready in minutes, before any appointment.",
    benefit: "Walk in prepared instead of trying to remember everything on the spot.",
    screenshot: "App screenshot: Appointment preparation report",
    screenshotSrc: "/assets/screenshots/screenshot-preparation-summary.webp",
    screenshotCaption: "Prepare for appointments with a structured summary.",
  },
  {
    icon: ShareNetwork,
    title: "Sharing",
    body:
      "For a single appointment, send a secure, time-limited link or exported PDF. For an ongoing relationship, add someone to Who Has Access with exactly the permissions you choose.",
    benefit: "Nothing is shared unless you choose to share it — and you're always in control of how much.",
    screenshot: "App screenshot: Sharing permissions",
    screenshotSrc: "/assets/screenshots/screenshot-sharing-permissions.webp",
    screenshotCaption: "Control exactly who can see what.",
  },
  {
    icon: Sparkle,
    title: "Help Centre",
    body: "A searchable library of plain-English guidance covering every part of Pravnya, plus contextual help right where you need it.",
    benefit: "You're never more than a tap away from a clear answer.",
    screenshot: "App screenshot: Help Centre",
    screenshotSrc: "/assets/screenshots/screenshot-ask-pravnya.webp",
    screenshotCaption: "Clear answers stay close to the moments you are working through.",
  },
  {
    icon: LockKey,
    title: "Privacy & Security",
    body:
      "Your child's record is encrypted, private by default, and visible only to you unless you choose to share it. You can export or permanently delete your data at any time.",
    benefit: "Peace of mind that comes from real control, not just a promise.",
    screenshot: "App screenshot: Privacy controls",
    screenshotSrc: "/assets/screenshots/screenshot-sharing-permissions.webp",
    screenshotCaption: "Privacy settings and sharing controls remain parent-led.",
    cta: { label: "Read privacy", href: "/privacy" },
  },
];

export const parentLoveReasons = [
  "Capture meaningful moments instantly — in whatever form fits the moment: a note, a photo, a voice memo.",
  "Celebrate progress over time — see how far your child has come, in their own story.",
  "Remember milestones without relying on memory alone.",
  "Stay organised with one timeline, instead of scattered photos, notes, and texts.",
  "Share updates with confidence, with exactly the people you choose, and nothing more.",
  "Receive thoughtful, honest insights grounded in what you've actually recorded.",
];

export const responsibleAiPoints = [
  "AI supports parents. It never replaces therapists, teachers, or healthcare professionals.",
  "Every answer is grounded in your child's own information and guidance we trust — never other families' data.",
  "When the evidence is limited, Pravnya says so.",
  "You remain in control. Every AI insight can be reviewed, corrected, or dismissed.",
];

export const privacyPoints = [
  "You own your data. It belongs to your family — not to us, and not for sale.",
  "Sharing is always your choice. Nothing leaves your account unless you actively share it.",
  "Your data is encrypted, both in transit and at rest, and private by default.",
  "We will never sell your data, share it with advertisers, or use it beyond helping you and the people you choose to include.",
  "Your child's record is never used to train AI models.",
  "You can export or permanently delete your data whenever you choose.",
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
      "Pravnya is an app that helps parents capture, organise, and understand their child's developmental journey — combining a journal, a growth tracker, a memory book, an AI assistant, and secure sharing in one place.",
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
  {
    question: "Does Pravnya diagnose or assess my child?",
    answer: "No. Pravnya does not assess, evaluate, or diagnose. It helps you understand your own observations — it doesn't interpret them clinically.",
  },
  {
    question: "Can Pravnya give medical advice?",
    answer:
      "No. Pravnya is not a medical app and doesn't offer medical advice. For anything medical, please speak with a qualified professional — Pravnya can help you prepare for that conversation, but it doesn't replace it.",
  },
  {
    question: "What devices does Pravnya work on?",
    answer: "Pravnya is available on iPhone, Android, and the web.",
  },
  {
    question: "Can I track more than one child?",
    answer: "Yes. Pravnya supports multiple children within a family.",
  },
  {
    question: "Does Pravnya work offline?",
    answer: "Text and voice notes can be captured offline; voice notes are transcribed automatically once you're back online.",
  },
  {
    question: "What languages does Pravnya support?",
    answer: "Pravnya currently supports English, with additional languages planned.",
  },
  {
    question: "Can my partner or co-parent see our child's record too?",
    answer:
      "Yes. From your child's profile, add them under Who Has Access with a Family relationship. They'll get their own login and exactly the access you choose.",
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
    question: "Can I export or delete my data?",
    answer: "Yes, at any time. You can request a full export of your data, or request permanent deletion.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Pravnya offers a free plan so every family can start capturing right away, with an optional Premium plan for deeper insights and reporting.",
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

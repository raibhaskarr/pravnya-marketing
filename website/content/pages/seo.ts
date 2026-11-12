export const seo = {
  home: {
    title: "Pravnya: Child Development Tracking and AI Companion for Parents",
    description: "Log therapy sessions and moments at home, keep your child's goals and IEP in one private place, and see how they are growing with Pravnya.",
    keywords: ["child development tracking app", "therapy goal tracking for parents", "IEP goal tracker", "AI companion for parents"],
    path: "/",
  },
  features: {
    title: "What You Can Do with Pravnya",
    description: "Log a session by note, photo or voice, review AI suggestions, track goals from your child's IEP, see growth and get ideas to try at home.",
    keywords: ["child development features", "therapy session log", "IEP goals", "home practice ideas"],
    path: "/features",
  },
  howItWorks: {
    title: "How Pravnya Works — Log, Review, Grow",
    description: "See how Pravnya turns a quick note, photo or voice note into goal entries you approve, and progress you can see.",
    keywords: ["how to organize child development records", "parent record app"],
    path: "/how-it-works",
  },
  whyPravnya: {
    title: "Why Pravnya — Philosophy",
    description: "Why we built Pravnya, what we believe, and why responsible AI matters",
    keywords: ["responsible AI child development", "parent confidence gap"],
    path: "/why-pravnya",
  },
  partners: {
    title: "Partner with Pravnya — For Therapy Centres & Practices",
    description: "Give your team one place to track the children you support, and help the families you see keep that same record at home. Partner with Pravnya.",
    keywords: ["therapy centre software", "Pravnya for centres", "parent therapist collaboration tool", "partner with Pravnya"],
    path: "/partners",
  },
  parents: {
    title: "Pravnya for Parents — Every step forward matters",
    description: "A parent-friendly guide to Pravnya: what it is, how it helps families, responsible AI, privacy, and frequently asked questions.",
    keywords: ["Pravnya for parents", "child development companion", "parent development record"],
    path: "/parents",
  },
  askPravnya: {
    title: "Ask Pravnya AI — Honest AI for development",
    description: "AI that works from your child's own goals, proposes entries for you to approve, and says when it can't help",
    keywords: ["AI child development", "honest AI", "development patterns"],
    path: "/ask-pravnya-ai",
  },
  growth: {
    title: "Child development progress with Pravnya",
    description: "See your child's progress within their own story — not measured against other children",
    keywords: ["child progress tracker", "longitudinal development", "child growth"],
    path: "/growth",
  },
  pricing: {
    title: "Pravnya Pricing — Free to start. Premium for the families who need more.",
    description: "Families should not face a financial barrier to starting their child's developmental record.",
    keywords: ["Pravnya pricing", "child development app pricing"],
    path: "/pricing",
  },
  about: {
    title: "About Pravnya",
    description: "Why we built it, what we believe, and who we are",
    keywords: ["about Pravnya", "child development company"],
    path: "/about",
  },
  privacy: {
    title: "Privacy — Your child's story is yours",
    description: "How Pravnya protects your data and why privacy is foundational to everything we build",
    keywords: ["child data privacy", "family data", "developmental record security"],
    path: "/privacy",
  },
  deleteAccount: {
    title: "Delete Your Account — Pravnya",
    description: "How to permanently delete your Pravnya account or a child's profile, and what happens to your data.",
    keywords: ["delete Pravnya account", "delete my data", "account deletion"],
    path: "/delete-account",
  },
  terms: {
    title: "Terms of Service — Pravnya",
    description: "The terms that govern your use of Pravnya, including account eligibility, your family's data, and our AI features.",
    keywords: ["Pravnya terms of service", "Pravnya terms and conditions"],
    path: "/terms",
  },
  faq: {
    title: "Pravnya FAQ — Questions parents ask",
    description: "Answers to common questions about Pravnya, the AI, data privacy, and your child's care team",
    keywords: ["Pravnya FAQ", "how does Pravnya work"],
    path: "/faq",
  },
  download: {
    title: "Download Pravnya",
    description: "Use Pravnya on the web, or get the Android app",
    keywords: ["download Pravnya", "child development app download"],
    path: "/download",
  },
  contact: {
    title: "Contact Pravnya",
    description: "Get in touch with the team",
    keywords: ["contact Pravnya", "Pravnya support"],
    path: "/contact",
  },
  blog: {
    title: "Pravnya Blog",
    description: "Long-form, careful writing for parents navigating child development.",
    keywords: ["Pravnya blog", "child development articles"],
    path: "/blog",
  },
  careers: {
    title: "Pravnya Careers",
    description: "Join the team building a trusted child development companion.",
    keywords: ["Pravnya careers", "responsible AI jobs"],
    path: "/careers",
  },
} as const;

export type SeoKey = keyof typeof seo;

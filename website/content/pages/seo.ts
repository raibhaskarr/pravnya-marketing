export const seo = {
  home: {
    title: "Pravnya — Child development records for parents who are paying attention",
    description: "Capture, organize, and understand your child's developmental story. One trusted record.",
    keywords: ["child development app", "developmental record", "parent observation app"],
    path: "/",
  },
  features: {
    title: "Pravnya Features — Capture, organize, understand",
    description: "Five features that together help parents build a complete longitudinal developmental record",
    keywords: ["child development features", "observation tool", "appointment preparation"],
    path: "/features",
  },
  howItWorks: {
    title: "How Pravnya Works — Five steps",
    description: "Learn how Pravnya helps parents capture, organize, review, prepare, and share",
    keywords: ["how to organize child development records", "parent record app"],
    path: "/how-it-works",
  },
  whyPravnya: {
    title: "Why Pravnya — Philosophy",
    description: "Why we built Pravnya, what we believe, and why responsible AI matters",
    keywords: ["responsible AI child development", "parent confidence gap"],
    path: "/why-pravnya",
  },
  parents: {
    title: "Pravnya for Parents — Every step forward matters",
    description: "A parent-friendly guide to Pravnya: what it is, how it helps families, responsible AI, privacy, beta access, and frequently asked questions.",
    keywords: ["Pravnya for parents", "child development companion", "parent development record"],
    path: "/parents",
  },
  askPravnya: {
    title: "Ask Pravnya AI — Honest AI for development",
    description: "Evidence-based AI that works from your record, not from population databases",
    keywords: ["AI child development", "honest AI", "development patterns"],
    path: "/ask-pravnya-ai",
  },
  growth: {
    title: "Child development progress with Pravnya",
    description: "See your child's progress within their own story — not measured against other children",
    keywords: ["child progress tracker", "longitudinal development", "child growth"],
    path: "/growth",
  },
  journey: {
    title: "The parent journey through child development",
    description: "Pravnya supports parents at every stage of navigating their child's developmental journey",
    keywords: ["parent journey", "developmental support", "child development stages"],
    path: "/journey",
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
    description: "Answers to common questions about Pravnya, the AI, data privacy, and professional use",
    keywords: ["Pravnya FAQ", "how does Pravnya work"],
    path: "/faq",
  },
  download: {
    title: "Download Pravnya",
    description: "Available for iOS and Android",
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

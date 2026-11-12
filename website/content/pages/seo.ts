// Titles: page titles get " | Pravnya" appended by the root layout (except the home page),
// so keep each under ~50 characters and lead with what parents search for.
// Descriptions: 120–155 characters, a full sentence. India is the first market, then the UAE.
export const seo = {
  home: {
    title: "Pravnya: Child Development & Therapy Tracker for Parents",
    description: "Log therapy sessions and moments at home by note, photo or voice. Track IEP goals and see your child's progress. Free for parents in India and the UAE.",
    path: "/",
    sources: ["content/pages/shared.ts"],
  },
  features: {
    title: "Therapy Notes, IEP Goals and Progress Tracking",
    description: "Log a therapy session by note, photo or voice, approve AI suggestions, track goals from your child's IEP, see growth and get ideas to try at home.",
    path: "/features",
  },
  howItWorks: {
    title: "How It Works: Log, Review and Track Progress",
    description: "See how Pravnya turns a quick note, photo or voice note into goal entries you approve, so your child's progress builds up over time.",
    path: "/how-it-works",
  },
  whyPravnya: {
    title: "Why We Built a Child Development App",
    description: "Why we built Pravnya, what we believe about children's development, and why AI that explains itself matters to families.",
    path: "/why-pravnya",
  },
  partners: {
    title: "Software for Therapy Centres and Their Families",
    description: "Give your therapy centre one place to track the children you support, and help families keep the same record at home. Partner with Pravnya.",
    path: "/partners",
  },
  parents: {
    title: "Child Development App for Parents",
    description: "A plain-language guide for parents: what Pravnya does, how it helps between therapy sessions, how it uses AI, and how your child's data is protected.",
    path: "/parents",
    sources: ["content/pages/parents.ts"],
  },
  askPravnya: {
    title: "AI Assistant for Your Child's Therapy Goals",
    description: "Ask Pravnya answers from your child's own goals, turns what happened into entries you approve, and tells you plainly when it can't help.",
    path: "/ask-pravnya-ai",
  },
  growth: {
    title: "Track Your Child's Developmental Progress",
    description: "See your child's progress against their own history and goals, never ranked against other children. Spot what's improving and what to try next.",
    path: "/growth",
  },
  pricing: {
    title: "Pricing: Free to Start",
    description: "Pravnya is free to start for families, with no credit card needed. See what the free plan includes and what Premium adds for families who need more.",
    path: "/pricing",
  },
  about: {
    title: "About Us",
    description: "Why we built Pravnya, the beliefs behind it, and how we help parents keep their child's development story in one private place.",
    path: "/about",
  },
  privacy: {
    title: "Privacy Promise: Your Child's Data Stays Yours",
    description: "How Pravnya protects your family's data: we never sell it or use it to train AI, you choose your child's care team, and you can delete everything.",
    path: "/privacy",
  },
  deleteAccount: {
    title: "Delete Your Account or a Child's Profile",
    description: "How to permanently delete your Pravnya account or a child's profile, step by step, and exactly what happens to your data afterwards.",
    path: "/delete-account",
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that govern your use of Pravnya, including account eligibility, your family's data, our AI features and how to contact us.",
    path: "/terms",
  },
  faq: {
    title: "FAQ: Questions Parents Ask",
    description: "Answers to common questions about Pravnya: who it's for, how the AI works, where it's available, data privacy and your child's care team.",
    path: "/faq",
    sources: ["content/faq.ts"],
  },
  download: {
    title: "Download the App for Android and Web",
    description: "Use Pravnya in any phone or computer browser, or get the Android app from Google Play. Free to start for parents in India, the UAE and beyond.",
    path: "/download",
  },
  contact: {
    title: "Contact Us",
    description: "Questions, feedback or support? Email the Pravnya team or send us a message. We reply to every message personally, usually within one working day.",
    path: "/contact",
  },
  blog: {
    title: "Blog",
    description: "Careful, practical writing for parents on child development, therapy, IEPs and keeping a useful record of your child's progress.",
    path: "/blog",
    // "Coming soon" page: kept out of search results until it has articles.
    noindex: true,
  },
  careers: {
    title: "Careers",
    description: "Join the small team building Pravnya, a private child development companion for families. We welcome people who care about responsible AI.",
    path: "/careers",
  },
} as const satisfies Record<string, SeoPage>;

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  /** Content files besides the page's own folder, used for the sitemap's last-modified date. */
  sources?: readonly string[];
  noindex?: boolean;
};

export type SeoKey = keyof typeof seo;

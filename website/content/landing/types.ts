/** A search-focused landing page, e.g. /iep-goal-tracker. Rendered by components/sections/landing-page.tsx. */
export type LandingPage = {
  /** URL path without the leading slash, e.g. "iep-goal-tracker". */
  slug: string;
  seo: {
    /** Under ~50 characters; " | Pravnya" is appended. */
    title: string;
    /** 120–155 characters, a full sentence. */
    description: string;
  };
  eyebrow: string;
  /** The page's only H1. Contains the main search phrase naturally. */
  title: string;
  intro: string;
  screenshot: { src: string; alt: string; caption: string };
  /** The problem and context, written for parents. Each becomes an H2 section. */
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  /** "How Pravnya helps": 3–5 concrete steps that match what the app really does. */
  steps: Array<{ title: string; body: string }>;
  faq: Array<{ question: string; answer: string }>;
  /** Internal links shown at the bottom, e.g. { href: "/growth", label: "See how Growth works" }. */
  related: Array<{ href: string; label: string }>;
};

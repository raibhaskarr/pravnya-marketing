import { siteConfig } from "@/content/site";

export const primaryNav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "What you can do", href: "/features" },
  { label: "Safety & privacy", href: "/privacy" },
  { label: "About", href: "/about" },
  { label: "For centres", href: "/partners" },
];

export const mobileNav = [
  { label: "Start free", href: siteConfig.signUpUrl },
  ...primaryNav,
  { label: "Download", href: "/download" },
  { label: "Sign in", href: siteConfig.signInUrl },
];

export const footerLinks = {
  Product: [
    { label: "How it works", href: "/how-it-works" },
    { label: "What you can do", href: "/features" },
    { label: "Ask Pravnya AI", href: "/ask-pravnya-ai" },
  ],
  "For parents": [
    { label: "IEP goal tracker", href: "/iep-goal-tracker" },
    { label: "Speech therapy progress", href: "/speech-therapy-progress-tracker" },
    { label: "Therapy activities at home", href: "/therapy-activities-at-home" },
    { label: "Therapy session notes", href: "/therapy-session-notes" },
    { label: "For parents of autistic children", href: "/autism-parent-app" },
    { label: "For parents of children with ADHD", href: "/adhd-parent-app" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "For centres", href: "/partners" },
    { label: "Contact", href: "/contact" },
    { label: "Download", href: "/download" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Delete your data", href: "/delete-account" },
  ],
};

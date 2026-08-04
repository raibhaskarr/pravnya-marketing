import { siteConfig } from "@/content/site";

export const primaryNav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "What you can do", href: "/features" },
  { label: "Safety & privacy", href: "/privacy" },
  { label: "About", href: "/about" },
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
  Company: [
    { label: "About", href: "/about" },
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

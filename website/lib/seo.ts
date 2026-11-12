import type { Metadata } from "next";
import type { LandingPage } from "@/content/landing/types";
import { company } from "@/content/company";
import { siteConfig } from "@/content/site";
import { seo, type SeoKey, type SeoPage } from "@/content/pages/seo";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Set for blog articles. */
  article?: { publishedTime: string; modifiedTime?: string; authors: string[] };
};

export function buildMetadata({ title, description, path, noindex, article }: MetaInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    // The home page title already carries the brand, so skip the layout's " | Pravnya" suffix.
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [siteConfig.ogImage],
      ...(article
        ? { type: "article", publishedTime: article.publishedTime, modifiedTime: article.modifiedTime, authors: article.authors }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function pageMetadata(key: SeoKey): Metadata {
  const data: SeoPage = seo[key];
  return buildMetadata(data);
}

export function landingMetadata(page: LandingPage): Metadata {
  return buildMetadata({ ...page.seo, path: `/${page.slug}` });
}

export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
  author: string;
  reviewedBy?: string;
}) {
  const url = new URL(post.path, siteConfig.url).toString();
  const isTeam = /pravnya team/i.test(post.author);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "en-IN",
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    author: isTeam
      ? { "@type": "Organization", name: "Pravnya", url: siteConfig.url }
      : { "@type": "Person", name: post.author },
    ...(post.reviewedBy ? { reviewedBy: { "@type": "Person", name: post.reviewedBy } } : {}),
    publisher: {
      "@type": "Organization",
      name: "Pravnya",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/assets/favicons/favicon-512.png` },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pravnya",
    url: siteConfig.url,
    // Google wants a raster logo of at least 112×112.
    logo: `${siteConfig.url}/assets/favicons/favicon-512.png`,
    email: "support@pravnya.com",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    sameAs: [siteConfig.googlePlayUrl, ...company.profiles],
    ...(company.legalName ? { legalName: company.legalName } : {}),
    ...(company.address?.length
      ? { address: { "@type": "PostalAddress", streetAddress: company.address.join(", "), addressCountry: company.addressCountry } }
      : {}),
    ...(company.team.length
      ? { founder: company.team.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role, ...(p.url ? { sameAs: p.url } : {}) })) }
      : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pravnya",
    url: siteConfig.url,
  };
}

export function softwareApplicationJsonLd() {
  const offers = { "@type": "Offer", price: "0", priceCurrency: "INR" };
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Pravnya",
      applicationCategory: "LifestyleApplication",
      browserRequirements: "Requires a modern web browser",
      operatingSystem: "Any",
      url: siteConfig.appUrl,
      description: siteConfig.description,
      offers,
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Pravnya",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android 10 or later",
      installUrl: siteConfig.googlePlayUrl,
      url: siteConfig.googlePlayUrl,
      description: siteConfig.description,
      offers,
    },
  ];
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

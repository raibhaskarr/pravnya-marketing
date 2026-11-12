import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { seo, type SeoKey, type SeoPage } from "@/content/pages/seo";

export function pageMetadata(key: SeoKey): Metadata {
  const data: SeoPage = seo[key];
  const url = new URL(data.path, siteConfig.url).toString();

  return {
    // The home page title already carries the brand, so skip the layout's " | Pravnya" suffix.
    title: data.path === "/" ? { absolute: data.title } : data.title,
    description: data.description,
    alternates: { canonical: url },
    ...(data.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      type: "website",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [siteConfig.ogImage],
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
    sameAs: [siteConfig.googlePlayUrl],
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

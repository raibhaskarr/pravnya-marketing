import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { seo, type SeoKey } from "@/content/pages/seo";

export function pageMetadata(key: SeoKey): Metadata {
  const data = seo[key];
  const url = new URL(data.path, siteConfig.url).toString();

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.keywords],
    alternates: { canonical: url },
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
    logo: `${siteConfig.url}/assets/brand/pravnya-logo-light.svg`,
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

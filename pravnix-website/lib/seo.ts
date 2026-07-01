import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { siteConfig } from "@/content/site";

type SeoKey = keyof typeof seo;

const paths: Record<SeoKey, string> = {
  home: "/",
  about: "/about",
  products: "/products",
  pravnya: "/pravnya",
  aiEngineering: "/ai-engineering",
  research: "/research",
  responsibleAi: "/responsible-ai",
  careers: "/careers",
  contact: "/contact",
  blog: "/blog",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
};

export function pageMetadata(key: SeoKey): Metadata {
  const item = seo[key];
  const path = paths[key];
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  // The opengraph-image / twitter-image file conventions only apply to the
  // exact route segment they're defined in (the root), so every page must
  // reference the shared brand image explicitly.
  const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name };
  return {
    title: item.title,
    description: item.description,
    keywords: [...item.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: item.title,
      description: item.description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: ["/twitter-image"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo`,
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pravnya",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android, Web",
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: siteConfig.pravnyaUrl,
  };
}

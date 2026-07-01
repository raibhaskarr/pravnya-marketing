import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { seo } from "@/content/pages/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seo).map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date("2026-07-01"),
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}


import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = [
  "",
  "/about",
  "/products",
  "/pravnya",
  "/ai-engineering",
  "/research",
  "/responsible-ai",
  "/careers",
  "/contact",
  "/blog",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

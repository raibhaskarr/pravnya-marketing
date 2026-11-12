import { execFileSync } from "node:child_process";
import path from "node:path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { seo, type SeoPage } from "@/content/pages/seo";

// Last-modified comes from git: the latest commit touching the page's folder or its content files.
// Falls back to the build time if git isn't available.
function lastModified(page: SeoPage): Date {
  const pageDir = page.path === "/" ? "app/page.tsx" : `app${page.path}`;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", pageDir, ...(page.sources ?? [])], {
      cwd: path.join(process.cwd()),
      encoding: "utf8",
    }).trim();
    if (out) return new Date(out);
  } catch {
    // not a git checkout
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seo as Record<string, SeoPage>)
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: page.path === "/" ? siteConfig.url : `${siteConfig.url}${page.path}`,
      lastModified: lastModified(page),
    }));
}

import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { seo, type SeoPage } from "@/content/pages/seo";
import { landingPages } from "@/content/landing";
import { getAllPosts } from "@/lib/blog";

// Last-modified comes from git: the latest commit touching the given files.
// Falls back to the build time if git isn't available.
function gitDate(files: string[]): Date {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
    if (out) return new Date(out);
  } catch {
    // not a git checkout
  }
  return new Date();
}

const url = (path: string) => (path === "/" ? siteConfig.url : `${siteConfig.url}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const pages = Object.values(seo as Record<string, SeoPage>)
    .filter((page) => !page.noindex && !(page.path === "/blog" && posts.length === 0))
    .map((page) => ({
      url: url(page.path),
      lastModified: gitDate([page.path === "/" ? "app/page.tsx" : `app${page.path}`, ...(page.sources ?? [])]),
    }));

  const landing = landingPages.map((page) => ({
    url: url(`/${page.slug}`),
    lastModified: gitDate([`content/landing/${page.slug}.ts`, "components/sections/landing-page.tsx"]),
  }));

  const articles = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [...pages, ...landing, ...articles];
}

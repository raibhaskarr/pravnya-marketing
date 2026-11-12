import fs from "node:fs";
import path from "node:path";

// Blog articles live in content/blog/<slug>.md. Format: content/blog/README.md.
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export const blogTopics = [
  "Understanding your child",
  "Navigating the system",
  "The record",
  "Privacy and data",
  "Ask Pravnya AI",
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  /** Shorter title for search results when `title` is long (" | Pravnya" is appended). */
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  topic: (typeof blogTopics)[number];
  author: string;
  reviewedBy?: string;
  body: string;
  readingMinutes: number;
};

function parse(slug: string, raw: string): BlogPost {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`content/blog/${slug}.md: missing front matter`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.*?)\s*(?:#.*)?$/);
    if (m) meta[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  for (const key of ["title", "description", "date", "topic", "author"]) {
    if (!meta[key]) throw new Error(`content/blog/${slug}.md: missing "${key}" in front matter`);
  }
  if (!blogTopics.includes(meta.topic as BlogPost["topic"])) {
    throw new Error(`content/blog/${slug}.md: unknown topic "${meta.topic}"`);
  }
  const body = match[2].trim();
  return {
    slug,
    title: meta.title,
    seoTitle: meta.seoTitle || undefined,
    description: meta.description,
    date: meta.date,
    updated: meta.updated || undefined,
    topic: meta.topic as BlogPost["topic"],
    author: meta.author,
    reviewedBy: meta.reviewedBy || undefined,
    body,
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(BLOG_DIR, f), "utf8")))
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

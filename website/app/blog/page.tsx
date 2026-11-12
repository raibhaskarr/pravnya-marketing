import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { blogTopics, formatDate, getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { seo } from "@/content/pages/seo";

export function generateMetadata(): Metadata {
  // Kept out of search results until there is at least one article.
  return buildMetadata({ ...seo.blog, noindex: getAllPosts().length === 0 });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const topics = blogTopics.filter((t) => posts.some((p) => p.topic === t));

  return (
    <>
      <Hero
        centered
        eyebrow="Blog"
        title="Careful writing for parents navigating development."
        body="Practical, plain-language guides on therapy, IEPs and keeping a useful record of your child's progress. Not promotional."
      />
      <section className="pb-20">
        <div className="container-standard max-w-5xl">
          {posts.length === 0 ? <p className="text-center text-ink-secondary">The first articles are on their way.</p> : null}
          {topics.map((topic) => (
            <div key={topic} className="mb-14 last:mb-0">
              <h2 className="font-display text-3xl text-ink">{topic}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {posts.filter((p) => p.topic === topic).map((post) => (
                  <article key={post.slug} className="rounded-lg border border-border bg-surface p-6 shadow-s">
                    <h3 className="text-xl font-semibold leading-snug text-ink">
                      <Link href={`/blog/${post.slug}`} className="hover:text-forest">{post.title}</Link>
                    </h3>
                    <p className="mt-3 leading-7 text-ink-secondary">{post.description}</p>
                    <p className="mt-4 text-sm text-ink-tertiary">
                      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner title="Build your child's record." />
    </>
  );
}

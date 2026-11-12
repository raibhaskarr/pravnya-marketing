import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Markdown } from "@/components/blog/markdown";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBanner } from "@/components/ui/cta-banner";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    article: { publishedTime: post.date, modifiedTime: post.updated, authors: [post.author] },
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const more = getAllPosts().filter((p) => p.slug !== post.slug && p.topic === post.topic).slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd({ ...post, path })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }, { name: post.title, path }])} />
      <article className="py-12 md:py-20">
        <div className="container-standard max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-dark">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
          </Link>
          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">{post.topic}</p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.12] text-ink md:text-[50px]">{post.title}</h1>
          <p className="mt-6 text-sm text-ink-tertiary">
            By {post.author}
            {post.reviewedBy ? <> · Reviewed by {post.reviewedBy}</> : null} ·{" "}
            <time dateTime={post.updated ?? post.date}>
              {post.updated ? `Updated ${formatDate(post.updated)}` : formatDate(post.date)}
            </time>{" "}
            · {post.readingMinutes} min read
          </p>
          <div className="mt-6 text-lg leading-8 text-ink-secondary">
            <Markdown source={post.body} />
          </div>
        </div>
      </article>
      {more.length ? (
        <section className="pb-16">
          <div className="container-standard max-w-3xl border-t border-border pt-10">
            <h2 className="font-display text-2xl text-ink">More on {post.topic.toLowerCase()}</h2>
            <ul className="mt-5 space-y-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="inline-flex items-center gap-2 font-semibold text-forest hover:text-forest-dark">
                    {p.title} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <CtaBanner title="Keep your child's progress in one place." body="Free to start. No credit card required." cta="Start free" />
    </>
  );
}

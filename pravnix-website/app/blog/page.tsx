import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { BlogCard } from "@/components/ui/blog-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogTypes } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("blog");

export default function BlogPage() {
  return (
    <>
      <Hero title="Research, thinking, and product notes." body="The Pravnix Labs blog will publish specific, technical, honest content on responsible AI, longitudinal intelligence, family technology, and the product decisions that shaped Pravnya." />
      <section className="py-24">
        <div className="container-standard">
          <SectionHeading title="Planned content types." body="Every post demonstrates specific knowledge. No trend pieces. No marketing content dressed as editorial content." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogTypes.map(([title, body]) => <BlogCard key={title} eyebrow="Planned" title={title} body={body} />)}
          </div>
        </div>
      </section>
      <section className="bg-bg-subtle py-24">
        <div className="container-narrow">
          <SectionHeading title="What the blog will never publish." body="AI-generated posts. Thought leadership content without specific substance. Marketing content dressed as editorial content. Trend pieces." />
        </div>
      </section>
    </>
  );
}

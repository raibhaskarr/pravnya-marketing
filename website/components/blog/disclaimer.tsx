import { Info } from "@phosphor-icons/react/dist/ssr";
import { formatDate, type BlogPost } from "@/lib/blog";

// A short note under the byline of articles that touch on health or official processes. Chosen by
// topic, so every article in those topics gets it without anyone remembering to add it.
const NOTES: Partial<Record<BlogPost["topic"], string>> = {
  "Understanding your child":
    "This article is general information for parents, not medical advice. Every child is different: talk to your child's doctor or therapist before making decisions about assessment or therapy.",
  "Navigating the system":
    "This article is general information, not legal advice. Schemes, rules and documents change and can differ by state, so check the official portal or your district office before you apply.",
};

export function hasDisclaimer(post: Pick<BlogPost, "topic">) {
  return Boolean(NOTES[post.topic]);
}

export function BlogDisclaimer({ post }: { post: Pick<BlogPost, "topic" | "date" | "updated" | "reviewedBy"> }) {
  const note = NOTES[post.topic];
  if (!note) return null;
  return (
    <aside aria-label="About this article" className="mt-6 flex gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-[15px] leading-6 text-ink-secondary">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden />
      <p>
        {note}{" "}
        <span className="text-ink-tertiary">
          {post.reviewedBy ? `Reviewed by ${post.reviewedBy}. ` : ""}
          Last checked {formatDate(post.updated ?? post.date)}.
        </span>
      </p>
    </aside>
  );
}

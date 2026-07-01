import { Tag } from "@/components/ui/tag";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export function BlogCard({ eyebrow, title, body }: Props) {
  return (
    <article className="rounded-md border border-border bg-bg-surface p-7 shadow-glowS">
      <Tag>{eyebrow}</Tag>
      <h3 className="mt-5 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-4 text-base leading-7 text-text-secondary">{body}</p>
    </article>
  );
}

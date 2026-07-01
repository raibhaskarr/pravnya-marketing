import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  tags?: string[];
  href?: string;
  cta?: string;
  externalHref?: string;
  externalCta?: string;
  muted?: boolean;
};

export function ProductCard({ eyebrow, title, body, tags = [], href, cta, externalHref, externalCta, muted = false }: Props) {
  return (
    <article className={cn("overflow-hidden rounded-md bg-bg-surface shadow-glowS transition hover:shadow-glowM", muted && "opacity-75")}>
      <div className={cn("h-1", muted ? "bg-border" : "bg-forest")} />
      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-forest-bright">{eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold text-text-primary">{title}</h3>
        <p className="mt-4 text-base leading-7 text-text-secondary">{body}</p>
        {tags.length ? <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div> : null}
        <div className="mt-7 flex flex-wrap gap-4">
          {externalHref && externalCta ? <Button href={externalHref} variant="ghost" external>{externalCta}</Button> : null}
          {href && cta ? <Button href={href} variant="secondary">{cta}</Button> : null}
        </div>
      </div>
    </article>
  );
}

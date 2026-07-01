import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type Props = {
  icon: Icon;
  title: string;
  body: string;
  className?: string;
};

export function FeatureCard({ icon: IconComponent, title, body, className }: Props) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-8 shadow-s transition duration-200 hover:-translate-y-0.5 hover:shadow-m",
        className,
      )}
    >
      <IconComponent aria-hidden className="mb-6 h-10 w-10 text-forest" weight="duotone" />
      <h3 className="mb-3 text-xl font-semibold leading-8 text-ink">{title}</h3>
      <p className="text-base leading-7 text-ink-secondary">{body}</p>
    </article>
  );
}


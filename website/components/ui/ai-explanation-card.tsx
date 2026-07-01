import type { Icon } from "@phosphor-icons/react";

type Props = {
  icon: Icon;
  title: string;
  body: string;
  evidence: string;
};

export function AiExplanationCard({ icon: IconComponent, title, body, evidence }: Props) {
  return (
    <article className="rounded-md border border-border bg-surface p-6 pl-7 shadow-s [border-left:4px_solid_#2C5F3E]">
      <IconComponent aria-hidden className="mb-4 h-6 w-6 text-forest" weight="duotone" />
      <h3 className="mb-3 text-xl font-semibold text-ink">{title}</h3>
      <p className="text-base leading-7 text-ink-secondary">{body}</p>
      <p className="mt-5 inline-flex rounded-xs bg-forest-subtle px-3 py-2 text-xs font-semibold text-forest-dark">
        {evidence}
      </p>
    </article>
  );
}


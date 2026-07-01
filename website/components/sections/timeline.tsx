import type { Icon } from "@phosphor-icons/react";

type Step = {
  icon?: Icon;
  title: string;
  body: string;
  label?: string;
};

export function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-border md:left-0 md:right-0 md:top-6 md:h-px md:w-auto" />
      <div className="grid gap-8 md:grid-cols-5">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <article key={step.title} className="relative rounded-lg border border-border bg-surface p-6 shadow-s">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white shadow-green">
                {IconComponent ? <IconComponent aria-hidden className="h-5 w-5" /> : index + 1}
              </div>
              {step.label ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-forest">{step.label}</p> : null}
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">{step.body}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}


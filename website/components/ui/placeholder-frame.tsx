import { cn } from "@/lib/utils";

type Props = {
  label: string;
  caption?: string;
  className?: string;
  tall?: boolean;
};

export function PlaceholderFrame({ label, caption, className, tall = false }: Props) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-surface p-4 shadow-l", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl border border-dashed border-border-strong bg-background text-center",
          tall ? "min-h-[440px]" : "min-h-[300px]",
        )}
      >
        <span className="max-w-[220px] text-sm font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
          {label}
        </span>
      </div>
      {caption ? <figcaption className="mt-4 text-center text-sm text-ink-secondary">{caption}</figcaption> : null}
    </figure>
  );
}


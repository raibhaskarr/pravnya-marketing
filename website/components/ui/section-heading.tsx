import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, body, align = "center", className }: Props) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-[32px] font-medium leading-[1.18] text-ink md:text-[44px]">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-ink-secondary">{body}</p> : null}
    </div>
  );
}


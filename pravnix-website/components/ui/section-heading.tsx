import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, body, align = "left", className }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-forest-bright">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-[30px] md:leading-10">{title}</h2>
      {body ? <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">{body}</p> : null}
    </div>
  );
}

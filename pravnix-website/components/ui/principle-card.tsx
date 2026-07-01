import { cn } from "@/lib/utils";

type Props = {
  number?: string;
  title?: string;
  body: string;
  className?: string;
};

export function PrincipleCard({ number, title, body, className }: Props) {
  return (
    <article className={cn("rounded-r-xs border-l-[3px] border-forest bg-bg-inset p-5 shadow-glowXs", className)}>
      {number ? <p className="font-mono text-[13px] text-forest-bright">{number}</p> : null}
      {title ? <h3 className="mt-2 text-[15px] font-semibold text-text-primary">{title}</h3> : null}
      <p className={cn("text-sm leading-6 text-text-secondary", title || number ? "mt-2" : "")}>{body}</p>
    </article>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external = false, className }: Props) {
  const isExternal = external || href.startsWith("http");
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.03em] transition",
    variant === "primary" && "bg-forest text-white hover:bg-forest-bright hover:shadow-glowForest active:bg-forest-dim",
    variant === "secondary" && "border border-forest/50 text-text-secondary hover:border-forest hover:text-text-primary",
    variant === "ghost" && "px-0 text-text-secondary hover:text-text-primary",
    className,
  );
  const icon = isExternal ? <ArrowUpRight aria-hidden className="h-4 w-4 text-forest-bright" /> : <ArrowRight aria-hidden className="h-4 w-4 text-forest-bright" />;

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

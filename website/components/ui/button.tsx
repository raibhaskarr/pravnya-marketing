import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  eventName?: string;
};

const variants = {
  primary: "bg-forest text-white shadow-s hover:bg-forest-light hover:shadow-green",
  secondary: "border border-forest text-forest hover:bg-forest-subtle",
  ghost: "text-ink-secondary hover:text-forest",
  light: "bg-white text-dark-surface hover:bg-gold-subtle",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[15px] font-semibold",
        "transition duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}

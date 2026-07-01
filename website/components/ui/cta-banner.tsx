import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body?: string;
  cta?: string;
  href?: string;
  variant?: "light" | "dark";
};

export function CtaBanner({ title, body, cta = "Start free", href = "/contact", variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <section className={cn("py-20 md:py-24", dark ? "bg-dark-surface" : "bg-forest-subtle")}>
      <div className="container-standard text-center">
        <h2 className={cn("mx-auto max-w-3xl font-display text-3xl leading-tight md:text-5xl", dark ? "text-background" : "text-forest-dark")}>
          {title}
        </h2>
        {body ? <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", dark ? "text-[#8FAF99]" : "text-ink-secondary")}>{body}</p> : null}
        <div className="mt-8">
          <Button href={href} variant={dark ? "light" : "primary"}>
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
}


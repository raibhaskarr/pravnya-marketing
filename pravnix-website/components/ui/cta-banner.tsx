import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body?: string;
  primary: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
  light?: boolean;
};

export function CtaBanner({ title, body, primary, primaryHref = "/contact", secondary, secondaryHref = "/responsible-ai", light = false }: Props) {
  return (
    <section className={cn("py-24", light ? "bg-light-bg text-light-text" : "border-t border-border-accent bg-bg-subtle")}>
      <div className="container-standard">
        <div className="max-w-3xl">
          <h2 className={cn("font-display text-4xl font-medium leading-tight", light ? "text-light-text" : "text-text-primary")}>{title}</h2>
          {body ? <p className={cn("mt-5 text-base leading-7", light ? "text-light-muted" : "text-text-secondary")}>{body}</p> : null}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={primaryHref}>{primary}</Button>
            {secondary ? <Button href={secondaryHref} variant={light ? "secondary" : "ghost"}>{secondary}</Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

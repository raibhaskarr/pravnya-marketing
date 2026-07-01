import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  centered?: boolean;
  display?: boolean;
  showScroll?: boolean;
};

export function Hero({
  eyebrow,
  title,
  body,
  primaryCta,
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref = "/responsible-ai",
  centered = false,
  display = false,
  showScroll = false,
}: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className={cn("container-full", centered && "text-center")}>
        <div className={cn("max-w-3xl", centered && "mx-auto")}>
          {eyebrow ? <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-forest-bright">{eyebrow}</p> : null}
          <h1
            className={cn(
              "text-balance font-bold leading-[1.08] tracking-[-0.02em] text-text-primary",
              display ? "font-display text-[44px] font-medium md:text-[68px] md:leading-[76px]" : "text-[38px] md:leading-[48px]",
            )}
          >
            {title}
          </h1>
          {body ? <p className={cn("mt-6 text-lg leading-8 text-text-secondary", centered && "mx-auto max-w-2xl")}>{body}</p> : null}
          {(primaryCta || secondaryCta) ? (
            <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row", centered && "justify-center")}>
              {primaryCta ? <Button href={primaryHref} className={showScroll ? "glow-pulse" : ""}>{primaryCta}</Button> : null}
              {secondaryCta ? <Button href={secondaryHref} variant="ghost">{secondaryCta}</Button> : null}
            </div>
          ) : null}
        </div>
        {showScroll ? <ArrowDown aria-hidden className="mx-auto mt-16 h-5 w-5 animate-pulse text-text-tertiary" /> : null}
      </div>
    </section>
  );
}

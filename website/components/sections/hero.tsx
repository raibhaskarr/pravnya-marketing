import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  placeholder?: string;
  centered?: boolean;
};

export function Hero({
  eyebrow,
  title,
  body,
  primaryCta = "Start free",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref = "/how-it-works",
  placeholder,
  centered = false,
}: Props) {
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className={cn("container-standard grid items-center gap-12", centered ? "text-center" : "lg:grid-cols-[1.08fr_0.92fr]")}>
        <div className={cn("min-w-0", centered ? "mx-auto max-w-4xl" : "max-w-3xl")}>
          {eyebrow ? (
            <p className="mb-5 inline-flex border-b border-forest pb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-full break-words font-display text-[40px] font-semibold leading-[1.08] text-ink md:text-[64px] lg:text-[72px]">
            {title}
          </h1>
          {body ? <p className={cn("mt-6 max-w-full break-words text-lg leading-8 text-ink-secondary md:text-xl md:leading-9", centered && "mx-auto max-w-3xl")}>{body}</p> : null}
          <div className={cn("mt-8 flex max-w-full flex-col gap-4 sm:flex-row", centered && "justify-center")}>
            <Button href={primaryHref}>{primaryCta}</Button>
            {secondaryCta ? (
              <Button href={secondaryHref} variant="ghost">
                {secondaryCta}
              </Button>
            ) : null}
          </div>
        </div>
        {!centered && placeholder ? (
          <PlaceholderFrame label={placeholder} caption="Placeholder visual; replace with final approved asset." tall />
        ) : null}
      </div>
    </section>
  );
}

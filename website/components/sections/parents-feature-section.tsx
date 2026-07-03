import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/screenshot-presentations";
import { cn } from "@/lib/utils";

type ParentFeature = {
  icon: Icon;
  title: string;
  body: string;
  benefit: string;
  screenshot: string;
  screenshotSrc?: string;
  screenshotCaption?: string;
  cta?: {
    label: string;
    href: string;
  };
};

type Props = {
  features: ParentFeature[];
};

export function ParentsFeatureSection({ features }: Props) {
  return (
    <div className="grid gap-10">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <article
            key={feature.title}
            className="grid items-center gap-8 rounded-2xl border border-border bg-surface p-5 shadow-s md:p-8 lg:grid-cols-[1fr_320px]"
          >
            <div className={cn("min-w-0", index % 2 ? "lg:order-2" : "")}>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-subtle text-forest">
                <IconComponent aria-hidden className="h-7 w-7" weight="duotone" />
              </div>
              <h3 className="font-display text-3xl leading-tight text-ink">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink-secondary">{feature.body}</p>
              <div className="mt-5 rounded-xl border border-gold bg-gold-subtle p-4 text-sm font-semibold leading-6 text-ink">
                Benefit: {feature.benefit}
              </div>
              {feature.cta ? (
                <div className="mt-6">
                  <Button href={feature.cta.href} variant="ghost">
                    {feature.cta.label}
                  </Button>
                </div>
              ) : null}
            </div>
            <PhoneMockup
              src={feature.screenshotSrc}
              label={feature.screenshot}
              alt={`${feature.title} screenshot`}
              caption={feature.screenshotCaption ?? `${feature.title} in Pravnya.`}
              priority="P1"
              className={cn(index % 2 ? "lg:order-1" : "")}
            />
          </article>
        );
      })}
    </div>
  );
}

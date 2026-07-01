import { cn } from "@/lib/utils";

type ScreenshotImage = {
  src?: string;
  alt: string;
  label: string;
};

type BaseProps = ScreenshotImage & {
  caption?: string;
  className?: string;
  priority?: "P0" | "P1" | "P2";
};

function ScreenshotSlot({ src, alt, label, className }: ScreenshotImage & { className?: string }) {
  if (src) {
    return <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />;
  }

  return (
    <div
      role="img"
      aria-label={`${label} screenshot placeholder`}
      className={cn(
        "flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#F8F5ED_0%,#EDF4EE_100%)] p-6 text-center",
        className,
      )}
    >
      <span className="max-w-[220px] text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
        {label}
      </span>
    </div>
  );
}

export function PhoneMockup({ src, alt, label, caption, className, priority = "P0" }: BaseProps) {
  return (
    <figure className={cn("mx-auto w-full max-w-[310px]", className)}>
      <div className="rounded-[2.25rem] border border-ink/10 bg-ink p-2 shadow-l">
        <div className="overflow-hidden rounded-[1.8rem] bg-background">
          <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-ink" aria-hidden />
          <div className="mt-2 aspect-[9/19.5] overflow-hidden rounded-t-2xl">
            <ScreenshotSlot src={src} alt={alt} label={label} />
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-secondary">
          {caption}
          <span className="sr-only"> Screenshot priority: {priority}.</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

export function TabletMockup({ src, alt, label, caption, className, priority = "P0" }: BaseProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="rounded-[2rem] border border-ink/10 bg-ink p-3 shadow-l">
        <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-background">
          <ScreenshotSlot src={src} alt={alt} label={label} />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-secondary">
          {caption}
          <span className="sr-only"> Screenshot priority: {priority}.</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

export function FloatingScreenshot({ src, alt, label, caption, className, priority = "P0" }: BaseProps) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-surface p-4 shadow-l", className)}>
      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background">
        <ScreenshotSlot src={src} alt={alt} label={label} />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-secondary">
          {caption}
          <span className="sr-only"> Screenshot priority: {priority}.</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

type TwoPhoneComparisonProps = {
  left: BaseProps;
  right: BaseProps;
  caption?: string;
  className?: string;
};

export function TwoPhoneComparison({ left, right, caption, className }: TwoPhoneComparisonProps) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-surface p-5 shadow-l", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <PhoneMockup {...left} className="max-w-[250px]" />
        <PhoneMockup {...right} className="max-w-[250px]" />
      </div>
      {caption ? <figcaption className="mt-4 text-center text-sm text-ink-secondary">{caption}</figcaption> : null}
    </figure>
  );
}

type AnnotatedScreenshotProps = BaseProps & {
  callouts?: string[];
};

export function AnnotatedScreenshot({ src, alt, label, caption, callouts = [], className, priority = "P0" }: AnnotatedScreenshotProps) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-surface p-4 shadow-l", className)}>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr]">
        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background">
          <ScreenshotSlot src={src} alt={alt} label={label} />
        </div>
        <div className="grid content-center gap-3">
          {callouts.map((callout) => (
            <div key={callout} className="rounded-lg border border-border bg-background p-4 text-sm leading-6 text-ink-secondary">
              {callout}
            </div>
          ))}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-secondary">
          {caption}
          <span className="sr-only"> Screenshot priority: {priority}.</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

type ZoomCalloutProps = BaseProps & {
  callout: string;
};

export function ZoomCallout({ src, alt, label, caption, callout, className, priority = "P0" }: ZoomCalloutProps) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-surface p-5 shadow-l", className)}>
      <div className="grid items-center gap-5 md:grid-cols-[1fr_0.7fr]">
        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background">
          <ScreenshotSlot src={src} alt={alt} label={label} />
        </div>
        <div className="rounded-full border border-gold bg-gold-subtle p-8 text-center text-sm font-semibold leading-6 text-ink shadow-s">
          {callout}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-secondary">
          {caption}
          <span className="sr-only"> Screenshot priority: {priority}.</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

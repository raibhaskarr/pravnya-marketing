export type AnalyticsEvent =
  | "join_beta"
  | "download_app"
  | "contact_submit"
  | "view_demo"
  | "faq_open";

type Plausible = (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;

/** Sends a custom event to Plausible when analytics is enabled (see components/seo/analytics.tsx). */
export function trackEvent(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, properties ?? {});
  }
  if (typeof window === "undefined") return;
  const plausible = (window as unknown as { plausible?: Plausible }).plausible;
  plausible?.(event, properties ? { props: properties } : undefined);
}

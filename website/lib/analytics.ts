export type AnalyticsEvent =
  | "join_beta"
  | "download_app"
  | "contact_submit"
  | "view_demo"
  | "faq_open";

export function trackEvent(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  // TODO: Wire to Plausible, Google Analytics, or another approved analytics provider.
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, properties ?? {});
  }
}


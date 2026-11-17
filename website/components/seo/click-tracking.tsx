"use client";

import { useEffect } from "react";
import { siteConfig } from "@/content/site";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

/** The links that matter for growth: which pages lead people to sign up or get the app. */
function eventFor(href: string): AnalyticsEvent | null {
  if (href.startsWith(siteConfig.signUpUrl)) return "start_free";
  if (href.startsWith(siteConfig.signInUrl)) return "sign_in";
  if (href.startsWith(siteConfig.googlePlayUrl)) return "download_app";
  return null;
}

/**
 * One listener for the whole site, so every "Start free", "Sign in" and Google Play link is
 * counted (with the page it was on) without wiring each button. Sends nothing unless
 * Plausible is switched on (see analytics.tsx).
 */
export function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const event = eventFor((link as HTMLAnchorElement).href);
      if (event) trackEvent(event, { page: window.location.pathname });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}

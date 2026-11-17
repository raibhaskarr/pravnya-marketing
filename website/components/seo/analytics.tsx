import Script from "next/script";
import { ClickTracking } from "./click-tracking";

/**
 * Cookieless Plausible analytics: counts visits and a few clicks (see click-tracking.tsx), sets no
 * cookies and doesn't identify anyone. Off unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set at build time.
 * The privacy page describes it. (Cloudflare Web Analytics is switched on in the Cloudflare
 * dashboard and injected by Cloudflare, so it needs no code here.)
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.tagged-events.js";
  return (
    <>
      <Script defer data-domain={domain} src={src} strategy="afterInteractive" />
      <Script id="plausible-queue" strategy="afterInteractive">
        {"window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };"}
      </Script>
      <ClickTracking />
    </>
  );
}

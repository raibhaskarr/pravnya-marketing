import Script from "next/script";

/**
 * Cookieless Plausible analytics. Off unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set at build time.
 * Before turning it on, update the privacy page: it currently promises no analytics.
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
    </>
  );
}

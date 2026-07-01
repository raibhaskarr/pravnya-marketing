# Pravnya.com Website Launch Checklist

Date: 2026-07-01
Owner: Pravnix Labs
Site: `pravnya-marketing/website`

## Pre-Launch Tasks

- [ ] Replace all placeholder frames with approved production assets.
- [ ] Re-run desktop, tablet, and mobile visual QA after assets are installed.
- [ ] Confirm every public claim against approved source documents.
- [ ] Confirm pricing page should be public or mark it noindex until approved.
- [ ] Confirm blog and careers placeholders should be public or mark noindex.
- [ ] Replace text wordmark with approved SVG if brand assets are ready.

## Legal Pages

- [ ] Approve Privacy page with legal/security review.
- [ ] Create or remove Terms of Service footer link.
- [ ] Create or remove Data Retention footer link.
- [ ] Create or remove Accessibility footer link.
- [ ] Confirm child data, AI, export, deletion, and training claims are legally accurate.

## Analytics

- [ ] Choose Plausible, Fathom, Google Analytics, or no analytics.
- [ ] Add analytics script without hardcoded IDs in source.
- [ ] Confirm privacy posture and cookie requirements.
- [ ] Implement events:
  - [ ] Join Beta
  - [ ] Download App
  - [ ] Contact Submit
  - [ ] View Demo
  - [ ] FAQ open

## Contact Form Backend

- [ ] Choose backend provider or internal API route.
- [ ] Add spam protection.
- [ ] Add abuse/rate limiting.
- [ ] Add email routing for support, press, and partnerships.
- [ ] Test success and failure states.
- [ ] Add privacy notice near form if required.

## App Store Links

- [ ] Replace `#` iOS link with production App Store URL.
- [ ] Replace `#` Android link with production Google Play URL.
- [ ] Add official App Store badge.
- [ ] Add official Google Play badge.
- [ ] Generate QR codes after production URLs exist.

## SEO Submission

- [ ] Add `public/images/og-pravnya.png`.
- [ ] Add favicon and touch icons.
- [ ] Confirm title/description for every page.
- [ ] Confirm canonical for `/ask-pravnya-ai`.
- [ ] Submit sitemap in Google Search Console.
- [ ] Submit sitemap in Bing Webmaster Tools.
- [ ] Validate FAQ structured data.
- [ ] Decide noindex policy for future pages.

## Domain And DNS

- [ ] Confirm production host.
- [ ] Point `pravnya.com` to production host.
- [ ] Configure `www.pravnya.com` redirect.
- [ ] Configure HTTPS and HSTS.
- [ ] Verify apex and www routes.
- [ ] Verify DNS propagation.

## Hosting

- [ ] Choose hosting target, such as Vercel.
- [ ] Configure production environment variables.
- [ ] Configure preview deployments.
- [ ] Configure branch protection and required checks.
- [ ] Confirm build command: `npm run build`.
- [ ] Confirm install command: `npm install`.
- [ ] Confirm output is Next.js App Router.

## Performance

- [ ] Run Lighthouse after final assets.
- [ ] Target Lighthouse Performance 90+.
- [ ] Use `next/image` for production images.
- [ ] Set explicit image dimensions to prevent layout shift.
- [ ] Keep hero image priority; lazy-load below-fold images.
- [ ] Compress WebP/AVIF assets.
- [ ] Verify Core Web Vitals after deployment.

## Accessibility

- [ ] Re-test keyboard navigation.
- [ ] Re-test mobile navigation.
- [ ] Test with VoiceOver on macOS/iOS.
- [ ] Validate heading hierarchy.
- [ ] Validate contrast after final assets.
- [ ] Validate image alt text after placeholders are replaced.
- [ ] Confirm FAQ accordion and contact form with screen reader.
- [ ] Confirm reduced-motion behavior.

## Monitoring

- [ ] Configure uptime monitoring.
- [ ] Configure error monitoring if approved.
- [ ] Configure form submission monitoring.
- [ ] Configure analytics dashboard.
- [ ] Configure security headers where hosted.

## Backup And Rollback

- [ ] Tag launch release.
- [ ] Keep previous successful deployment available.
- [ ] Document rollback owner.
- [ ] Document rollback steps.
- [ ] Export final launch assets to approved storage.

## Final Launch Gate

Launch only when:

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] No placeholder assets remain on launch pages.
- [ ] No `#` links remain in public CTAs except intentionally disabled future features.
- [ ] Legal/privacy review is complete.
- [ ] Contact form works in production.
- [ ] App Store / Google Play links are real or hidden.
- [ ] Sitemap and robots are live.
- [ ] Lighthouse and accessibility checks are complete.


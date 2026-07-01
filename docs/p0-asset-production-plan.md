# Pravnya.com P0 Asset Production Plan

Date: 2026-07-01
Owner: Pravnix Labs
Website: `pravnya-marketing/website`

## Purpose

This plan extracts only P0 and launch-blocking website assets from:

- `docs/website-asset-checklist.md`
- `docs/website-visual-qa.md`
- `docs/website-launch-checklist.md`

No placeholders should be replaced until approved assets exist. Do not use random stock images.

## Asset Folder Map

```text
website/public/assets/brand/
website/public/assets/screenshots/
website/public/assets/og/
website/public/assets/badges/
website/public/assets/favicons/
```

## P0 Launch Asset Summary

| Category | Count | Launch Risk |
| --- | ---: | --- |
| Brand and logo assets | 2 | Header, favicon, social identity incomplete |
| Favicon assets | 1 | Browser and SEO polish incomplete |
| OpenGraph assets | 1 | Social previews broken or generic |
| Hero/founder imagery | 3 | Home and About remain placeholder-led |
| Product screenshots | 4 | Product value cannot be evaluated visually |
| App/AI mockups | 2 | Home and Ask Pravnya AI remain abstract |
| Illustrations | 2 | Home problem visual and Growth page incomplete |
| Store badges | 2 | Download CTAs not launch-ready |
| Total | 17 | P0 assets required before launch |

## First Batch Status Update

Created on 2026-07-01:

- `pravnya-wordmark.svg` - created; needs final approval.
- `pravnya-logo-mark.svg` - created; needs final approval.
- `favicon.ico` - created from local logo mark; needs final approval.
- `og-pravnya.png` - created as branded placeholder composition; needs final approval.
- `illustration-scattered-to-pravnya.svg` - created; needs final approval.
- `illustration-growth-timeline.svg` - created; needs final approval.
- `badge-app-store.svg` - placeholder created; needs official badge and final approval.
- `badge-google-play.svg` - placeholder created; needs official badge and final approval.

No real app screenshots or real photography were created in this batch.

## P0 Asset Register

### Brand And Logo

| Field | Value |
| --- | --- |
| Filename | `pravnya-wordmark.svg` |
| Exact dimensions | Responsive SVG, exported artboard 512x128 |
| Required format | SVG |
| Source needed | Approved Pravnya wordmark from brand system |
| Where used | Header, optional footer, future PDF/OG composition |
| Fallback option | Current text wordmark in Fraunces-style display type |
| Owner | Brand / Design |
| Status | Created; needs final approval |

| Field | Value |
| --- | --- |
| Filename | `pravnya-logo-mark.svg` |
| Exact dimensions | Responsive SVG, exported artboard 512x512 |
| Required format | SVG |
| Source needed | Approved Pravnya logo mark from brand system |
| Where used | Favicon source, OpenGraph composition, future app/social icons |
| Fallback option | Text-only wordmark until logo mark is approved |
| Owner | Brand / Design |
| Status | Created; needs final approval |

### Favicons

| Field | Value |
| --- | --- |
| Filename | `favicon.ico` |
| Exact dimensions | Multi-size ICO containing 16x16, 32x32, 48x48 |
| Required format | ICO |
| Source needed | Approved `pravnya-logo-mark.svg` |
| Where used | Browser favicon, search result polish |
| Fallback option | Browser default favicon; not acceptable for launch |
| Owner | Brand / Frontend |
| Status | Created from local logo mark; needs final approval |

### OpenGraph

| Field | Value |
| --- | --- |
| Filename | `og-pravnya.png` |
| Exact dimensions | 1200x630 |
| Required format | PNG |
| Source needed | Approved hero image or warm brand composition plus Pravnya wordmark |
| Where used | Global OpenGraph and Twitter card image |
| Fallback option | Temporary branded color card with wordmark and tagline |
| Owner | Brand / Marketing |
| Status | Created as branded placeholder; needs final approval |

### Hero And Founder Imagery

| Field | Value |
| --- | --- |
| Filename | `hero-parent-child-moment.webp` |
| Exact dimensions | 1600x1200 |
| Required format | WebP |
| Source needed | Approved original photography or commissioned/generative brand image |
| Where used | Home hero |
| Fallback option | Approved brand illustration; do not use random stock photo |
| Owner | Marketing / Design |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `about-founder-moment.webp` |
| Exact dimensions | 1800x1200 |
| Required format | WebP |
| Source needed | Approved founder/company working photograph |
| Where used | About page hero or founding story section |
| Fallback option | Approved abstract founding-moment illustration |
| Owner | Founder / Marketing |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `founder-team-working.webp` |
| Exact dimensions | 1800x1200 |
| Required format | WebP |
| Source needed | Real founder/team image in warm working environment |
| Where used | About page team/founding section |
| Fallback option | Hide team image block until photography is approved |
| Owner | Founder / Marketing |
| Status | Needed |

### Product Screenshots

| Field | Value |
| --- | --- |
| Filename | `screenshot-capture-screen.webp` |
| Exact dimensions | 1179x2556 |
| Required format | WebP |
| Source needed | Approved iPhone 15 Pro capture screen from product or mockup |
| Where used | Home screenshot row, Features page capture section |
| Fallback option | Design-authored UI mockup with clearly fake data |
| Owner | Product Design / Frontend |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `screenshot-record-timeline.webp` |
| Exact dimensions | 1179x2556 |
| Required format | WebP |
| Source needed | Approved timeline screen with 8-10 placeholder entries |
| Where used | Home screenshot row, Features page organize section |
| Fallback option | Design-authored UI mockup with placeholder child name only |
| Owner | Product Design / Frontend |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `screenshot-ai-summary.webp` |
| Exact dimensions | 1179x2556 |
| Required format | WebP |
| Source needed | Approved AI summary screen with evidence note and limited-evidence example |
| Where used | Features understand section |
| Fallback option | Design-authored static mockup; must show uncertainty and evidence |
| Owner | Product Design / AI Product |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `screenshot-preparation-summary.webp` |
| Exact dimensions | 1179x2556 |
| Required format | WebP |
| Source needed | Approved appointment preparation screen with placeholder professional details |
| Where used | Home screenshot row, Features prepare section |
| Fallback option | Design-authored preparation document mockup |
| Owner | Product Design / Frontend |
| Status | Needed |

### App And AI Mockups

| Field | Value |
| --- | --- |
| Filename | `mockup-home-phone-capture.webp` |
| Exact dimensions | 900x1200 |
| Required format | WebP |
| Source needed | Approved phone mockup showing capture screen |
| Where used | Home hero mobile/product mockup |
| Fallback option | Use `screenshot-capture-screen.webp` inside approved device frame |
| Owner | Product Design |
| Status | Needed |

| Field | Value |
| --- | --- |
| Filename | `mockup-ai-evidence-card.webp` |
| Exact dimensions | 1400x1000 |
| Required format | WebP |
| Source needed | Approved AI evidence card mockup with source entries and confidence indicator |
| Where used | Ask Pravnya AI sample interaction section |
| Fallback option | Design-authored static card using approved AI copy and fake entries |
| Owner | AI Product / Product Design |
| Status | Needed |

### Illustrations

| Field | Value |
| --- | --- |
| Filename | `illustration-scattered-to-pravnya.svg` |
| Exact dimensions | Responsive SVG, artboard 1200x800 |
| Required format | SVG |
| Source needed | Approved custom illustration showing scattered notes, photos, messages into Pravnya |
| Where used | Home recognition moment section |
| Fallback option | Keep current icon cluster temporarily; not acceptable for final launch |
| Owner | Brand / Illustration |
| Status | Created; needs final approval |

| Field | Value |
| --- | --- |
| Filename | `illustration-growth-timeline.svg` |
| Exact dimensions | Responsive SVG, artboard 1400x900 |
| Required format | SVG |
| Source needed | Approved gentle longitudinal timeline illustration |
| Where used | Growth page |
| Fallback option | Design-authored simple SVG in brand palette |
| Owner | Brand / Illustration |
| Status | Created; needs final approval |

### Store Badges

| Field | Value |
| --- | --- |
| Filename | `badge-app-store.svg` |
| Exact dimensions | Official Apple badge dimensions, preserve source aspect ratio |
| Required format | SVG |
| Source needed | Official Apple App Store marketing badge |
| Where used | Home download CTA, Download page, Footer |
| Fallback option | Hide iOS download CTA until App Store URL and badge are approved |
| Owner | Marketing / App Release |
| Status | Placeholder created; needs official badge and final approval |

| Field | Value |
| --- | --- |
| Filename | `badge-google-play.svg` |
| Exact dimensions | Official Google Play badge dimensions, preserve source aspect ratio |
| Required format | SVG |
| Source needed | Official Google Play marketing badge |
| Where used | Home download CTA, Download page, Footer |
| Fallback option | Hide Android download CTA until Google Play URL and badge are approved |
| Owner | Marketing / App Release |
| Status | Placeholder created; needs official badge and final approval |

## Blocker Non-Asset Dependencies

These are not files in the asset checklist, but they remain launch blockers from QA:

| Dependency | Owner | Status | Notes |
| --- | --- | --- | --- |
| App Store production URL | App Release / Marketing | Needed | Required before enabling iOS download CTAs. |
| Google Play production URL | App Release / Marketing | Needed | Required before enabling Android download CTAs. |
| Contact form backend | Engineering | Needed | Current form is frontend-only. |
| Terms of Service page | Legal / Content | Needed | Footer link currently cannot point to approved page. |
| Data Retention page | Legal / Security | Needed | Footer link currently cannot point to approved page. |
| Accessibility page | Legal / Content | Needed | Footer link currently cannot point to approved page. |
| Privacy/security claim review | Legal / Security | Needed | Required before public launch. |

## Production Sequence

1. Approve brand/logo source assets.
2. Generate favicon and OpenGraph assets from approved brand system.
3. Produce product screenshot set using fake, non-identifying data.
4. Produce hero/About imagery from approved photography or generated brand imagery.
5. Produce Home and Growth illustrations in brand palette.
6. Add official store badges only when production store links are available.
7. Replace placeholders in code in a dedicated implementation pass.
8. Re-run visual QA, Lighthouse, `npm run lint`, and `npm run build`.

## Acceptance Criteria

- No P0 placeholder frames remain on launch pages.
- All P0 files exist in the correct public asset folders.
- Every production image has alt text or is marked decorative.
- OpenGraph preview resolves at `/assets/og/og-pravnya.png`.
- Favicon resolves from browser tab and source metadata.
- Store badges are official and link to production URLs.
- Product screenshots contain no real child, family, professional, or medical data.

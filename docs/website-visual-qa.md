# Pravnya.com Website Visual QA

Date: 2026-07-01
Reviewer: Frontend QA / Design Systems Review
Site: `pravnya-marketing/website`
Reference: `docs/website-design-handbook.md`

## Summary

The current Pravnya.com implementation is a solid first production scaffold. It follows the approved palette, tone,
page architecture, and core content direction from the Website Design & Content Handbook. The site builds statically,
uses a reusable component system, includes metadata, sitemap, robots, FAQ structured data, and has accessible form and
accordion foundations.

The site is not launch-ready yet because the visual experience still depends heavily on placeholders. The biggest
launch risk is not engineering structure; it is asset readiness and page fidelity. The homepage hero, screenshot
sections, About page, Growth illustration, Ask Pravnya AI example, store badges, QR codes, OpenGraph image, favicon,
and legal/footer links all need final production assets or approved pages before launch.

## Validation Performed

- Reviewed implementation against the Website Design & Content Handbook.
- Ran local site at `http://127.0.0.1:3000`.
- Captured desktop and mobile screenshots for primary launch pages through Contact.
- Reviewed source for navigation, footer, CTAs, forms, metadata, sitemap, robots, placeholders, and links.
- Ran `npm run lint`.
- Ran `npm run build`.

Screenshots captured under `/tmp/pravnya-qa/` during QA:

- `home-desktop.png`, `home-mobile.png`
- `features-desktop.png`, `features-mobile.png`
- `how-desktop.png`, `how-mobile.png`
- `why-desktop.png`, `why-mobile.png`
- `ai-desktop.png`, `ai-mobile.png`
- `growth-desktop.png`, `growth-mobile.png`
- `journey-desktop.png`, `journey-mobile.png`
- `pricing-desktop.png`, `pricing-mobile.png`
- `about-desktop.png`, `about-mobile.png`
- `privacy-desktop.png`, `privacy-mobile.png`
- `faq-desktop.png`, `faq-mobile.png`
- `download-desktop.png`, `download-mobile.png`
- `contact-desktop.png`, `contact-mobile.png`

## Severity Summary

| Severity | Count | Summary |
| --- | ---: | --- |
| Blocker | 5 | Final assets, legal/footer links, app store links, contact backend, mobile overflow regression |
| High | 7 | Placeholder-heavy pages, OG/favicon missing, utility-page CTA mismatch, screenshot fidelity gaps |
| Medium | 8 | Typography scale, page completeness, tracking placeholders, performance image gap, route alias cleanup |
| Low | 6 | ESLint plugin warning, copy review items, future placeholder pages, polish items |

## Fixes Applied

### Mobile overflow fix

Original mobile screenshots showed horizontal clipping on hero text and CTA rows. The mobile nav button was also pushed
off-screen in screenshots. Applied a contained responsive fix:

- Added `overflow-x: hidden` on `html` and `body`.
- Added `width: 100%` and `box-sizing: border-box` to `.container-standard`.
- Added `min-w-0`, `max-w-full`, and `break-words` behavior to the shared Hero component.
- Added `max-w-full` and text centering to shared buttons.

### Ask Pravnya AI canonical fix

The implemented page is `/ask-pravnya-ai`, but SEO metadata and footer links used `/ask-pravnya`.

Applied:

- Updated `content/pages/seo.ts` canonical path to `/ask-pravnya-ai`.
- Updated footer product link to `/ask-pravnya-ai`.
- Changed `/ask-pravnya` into a redirect alias to `/ask-pravnya-ai`.

## Page-by-Page Findings

### Home

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Hero uses a large placeholder frame instead of the approved parent-and-child moment image. | Replace with approved hero photography or generated brand image. |
| High | Product screenshot section uses three generic placeholder frames. | Replace with Capture, Timeline, and Preparation screenshots. |
| High | Representative testimonials are present conceptually but not implemented as full testimonial cards in the current page. | Add final testimonial card section after beta testimonials are approved. |
| Medium | Hero H1 is visually powerful but close to oversized on desktop and previously clipped on mobile. | Re-test after responsive fix; consider a max-width or slightly smaller mobile display token only if clipping remains. |
| Medium | Trust signal "4.9 rating from families" needs evidence before launch. | Replace with a non-numeric trust statement or approve rating source. |

Screenshots needed:

- Desktop full-page homepage.
- Mobile homepage after responsive fix.
- Tablet homepage at 768px or 834px.

### Features

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | All five feature sections use placeholder frames. | Replace with approved app screenshots or screenshot-style mockups. |
| High | Feature detail cards repeat the same details across feature sections. | Align each feature section with the specific detail list in the handbook. |
| Medium | Comparison table is implemented but should be reviewed on narrow mobile for horizontal scroll affordance. | Add visible scroll hint if needed. |
| Low | Page is structurally coherent and on-brand. | No design rewrite needed. |

### How It Works

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Handbook calls for alternating step sections with visuals; implementation uses cards plus text. | Add the five approved illustrations/mockups before launch. |
| Medium | FAQ subsection exists and is accessible, but needs final product timing validation. | Confirm "15-20 observations" and "50+" thresholds before publication. |
| Low | Timeline component works as a responsive system primitive. | Keep component. |

### Why Pravnya

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | AI principle cards are implemented but visually generic. | Add the final compact nine-card layout with consistent icon mapping. |
| Medium | "Start your record" CTA is correct, but page would benefit from a stronger bottom privacy/trust reassurance. | Add only if handbook revision approves it. |
| Low | Tone and copy are aligned with the handbook. | No copy changes needed. |

### Ask Pravnya AI

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Sample AI interaction is a placeholder frame. | Replace with final evidence-traced AI summary mockup. |
| High | Page needs confidence indicator and evidence expansion visual in production. | Build screenshot/mockup from approved product UI. |
| Medium | `/ask-pravnya` alias existed with duplicate metadata risk. | Fixed by redirecting alias to `/ask-pravnya-ai`. |

### Growth

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Family timeline illustration is a placeholder. | Replace with approved longitudinal timeline illustration. |
| Medium | The contrast statement block is useful but visually plain. | Style as a designed comparison module if time allows. |
| Low | Page tone strongly matches the handbook. | No copy changes needed. |

### Journey

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Journey page lacks the richer full-page vertical timeline treatment described in the handbook. | Upgrade timeline visuals after launch assets are ready. |
| Medium | "Pravnya helps..." text repeats across stages. | Replace with stage-specific help copy from handbook. |
| Low | Page remains readable and launch-usable once assets are added. | No urgent code change required. |

### Pricing

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Medium | Pricing is labeled as future in handbook but implemented as a public page. | Confirm whether `/pricing` should be indexed or held behind future release. |
| Medium | No actual price values or availability status. | Add approved pricing or mark as early-access pricing before launch. |

### About

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Founding team image is a placeholder. | Replace with approved founder/company photography. |
| High | Founder bio section from handbook is not implemented. | Add approved founder/team bios or remove team section until ready. |
| Medium | Hero uses standard split placeholder instead of full-bleed image treatment. | Replace with final About photography treatment. |

### Privacy

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Footer references legal Terms/Data Retention/Accessibility links that are not implemented. | Create approved legal pages or remove links before launch. |
| High | Privacy page includes placeholder technical details such as `[region]` and `[standard]` in handbook; implementation avoids placeholders but still needs legal review. | Legal/privacy review required before launch. |
| Medium | Privacy claims must be reviewed by engineering/legal before publication. | Validate "no training," export, deletion, encryption, and access claims. |

### FAQ

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Medium | FAQ contains specific availability and roadmap claims. | Verify India/global availability, Hindi support, and professional access timeline. |
| Low | FAQ accordion is keyboard accessible and tracks open events through placeholder analytics. | Keep implementation. |
| Low | FAQ structured data implemented. | Confirm final FAQ content before indexing. |

### Download

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | App Store and Google Play links are `#`. | Replace with production store URLs or hide download buttons until available. |
| High | Store badges are text buttons, not official badges. | Add official App Store and Google Play badges. |
| High | QR codes are placeholders. | Add production QR assets only when store URLs exist. |

### Contact

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Contact form is frontend-only. | Wire to approved backend with spam protection. |
| Medium | Generic Hero CTA appears above contact form even though handbook does not require it. | Remove CTA from utility pages if design review agrees. |
| Low | Form labels, required fields, and inline success state are accessible. | Keep implementation. |

### Blog

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Medium | Blog is a placeholder but is present as a public page. | Confirm whether to index or mark as noindex until content exists. |
| Low | Content pillars match handbook. | Keep as placeholder if intentionally public. |

### Careers

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Medium | Careers is a placeholder but is present as a public page. | Confirm whether to index or mark as noindex until hiring starts. |
| Low | Tone matches handbook. | Keep as placeholder if intentionally public. |

## Navigation And Footer

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Header "Sign in" points to `#`. | Replace with production app auth URL or remove before launch. |
| High | Footer legal links for Terms, Data Retention, and Accessibility point to `#`. | Add approved pages or remove links before launch. |
| Medium | Mobile menu requires a retest after overflow fix. | Re-capture mobile nav at 390px and 768px. |
| Low | Primary desktop navigation matches handbook: Features, How it works, Why Pravnya, About. | Keep. |

## SEO Concerns

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | OpenGraph image file `/images/og-pravnya.png` is referenced but not present. | Add `public/images/og-pravnya.png`. |
| High | Favicon and app icons are missing. | Add favicon and icon set. |
| Medium | `/pricing`, `/blog`, and `/careers` may be future pages but currently indexable. | Decide index/noindex policy. |
| Medium | Sitemap originally omitted canonical `/ask-pravnya-ai`. | Fixed. |
| Low | FAQ structured data is implemented. | Validate final FAQ content. |

## Accessibility Concerns

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Mobile overflow/clipping affected readability and mobile nav access in screenshots. | Responsive fix applied; retest in browser. |
| Medium | Placeholder frames are text-only and acceptable temporarily, but final images need descriptive alt text. | Add alt text when replacing placeholders. |
| Medium | Utility pages with generic CTAs may create confusing navigation for screen reader users. | Review CTA presence page by page. |
| Low | Skip link, focus styles, labels, FAQ `aria-expanded`, and form labels exist. | Keep. |

## Performance Concerns

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| High | Final imagery can significantly affect LCP and CLS if not dimensioned. | Use `next/image`, fixed dimensions, and priority only on hero image. |
| Medium | No Lighthouse run completed in this pass. | Run Lighthouse after final assets are installed. |
| Low | Current build is small and statically generated. | Keep static generation where possible. |

## Mobile Concerns

| Severity | Finding | Recommended Fix |
| --- | --- | --- |
| Blocker | Original mobile screenshots showed horizontal clipping. | Fix applied; recapture all mobile pages before launch. |
| High | Feature, Privacy, and Home mobile screenshots need visual retest after fix. | Re-run mobile screenshot QA. |
| Medium | Long hero headlines may still feel heavy on small screens. | Design review can decide whether mobile display token should be reduced. |

## Copy Concerns

No obvious typos found during this pass. Copy concerns are evidence and approval related:

- "4.9 rating from families" requires proof or removal.
- FAQ availability claims require product/legal validation.
- Privacy claims require legal/security validation.
- Pricing page requires business approval before indexing.

## Launch Blockers

1. Replace placeholder hero/product/About/AI/Growth assets.
2. Add production App Store and Google Play URLs or remove download CTAs.
3. Add approved OpenGraph image and favicon/icon set.
4. Implement or remove footer legal links.
5. Wire contact form to production backend with spam protection.
6. Re-run mobile visual QA after the responsive overflow fix.


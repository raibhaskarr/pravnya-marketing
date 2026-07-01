# Pravnya.com Screenshot Placement Map

Date: 2026-07-01
Owner: Product Design / Frontend
Status: Draft

## Purpose

This map defines where production screenshots will be used in the Pravnya.com website. Until approved screenshots are supplied, the website uses neutral screenshot-ready placeholder components. Do not fabricate app UI.

## Placement Map

| Image filename | Website page | Component | Caption | Alt text | Priority |
| --- | --- | --- | --- | --- | --- |
| `screenshot-today.webp` | `/` | `PhoneMockup` | Capture anything. Nothing gets lost. | Pravnya Today screen showing recent child development observations | P0 |
| `screenshot-journey.webp` | `/` | `PhoneMockup` | Your child's story, organized over time. | Pravnya Journey screen showing a child's organized development timeline | P0 |
| `screenshot-growth.webp` | `/` | `PhoneMockup` | Your record becomes your preparation. | Pravnya Growth screen showing progress patterns over time | P0 |
| `screenshot-today.webp` | `/features` | `PhoneMockup` | Final screenshot pending production capture. | Pravnya Today screen ready for a real production screenshot | P0 |
| `screenshot-journey.webp` | `/features` | `PhoneMockup` | Final screenshot pending production capture. | Pravnya Journey screen ready for a real production screenshot | P0 |
| `screenshot-growth.webp` | `/features` | `PhoneMockup` | Final screenshot pending production capture. | Pravnya Growth screen ready for a real production screenshot | P0 |
| `screenshot-preparation-summary.webp` | `/features` | `TabletMockup` | Final screenshot pending production capture. | Pravnya preparation summary ready for a real production screenshot | P0 |
| `screenshot-sharing-permissions.webp` | `/features` | `PhoneMockup` | Final screenshot pending production capture. | Pravnya sharing permissions screen ready for a real production screenshot | P1 |
| `screenshot-ask-pravnya.webp` | `/ask-pravnya-ai` | `AnnotatedScreenshot` | Evidence-traced AI summary with confidence indicator. | Ask Pravnya AI screen showing evidence, confidence, and a careful summary | P0 |
| `screenshot-activities.webp` | Future `/features` or `/how-it-works` section | `PhoneMockup` | Activities become part of the record when they matter. | Pravnya Activities screen showing an activity and capture option | P0 |
| `screenshot-capture.webp` | Future `/features` or `/how-it-works` section | `PhoneMockup` | Record in moments. Not in marathons. | Pravnya Capture screen showing text, voice, photo, and document options | P0 |
| `screenshot-child-profile.webp` | Future `/how-it-works` or onboarding section | `PhoneMockup` | Every record begins with your child. | Pravnya Child Profile screen showing approved demo profile context | P0 |
| `screenshot-ai-summary.webp` | Future `/features` AI section and `/ask-pravnya-ai` | `AnnotatedScreenshot` | Sources visible. Confidence stated. Uncertainty named. | Pravnya AI Summary screen showing evidence and confidence | P0 |

## Implementation Notes

- Final files should be placed in `pravnya-marketing/website/public/assets/screenshots/`.
- Components already accept optional `src` props. Add the final image path when each screenshot is approved.
- Recommended public path format: `/assets/screenshots/{filename}`.
- Keep screenshots out of the repository until Product, Legal, and Security approve demo data.

# Pravnya.com Production Screenshot Workflow

Date: 2026-07-01
Owner: Product Design / Frontend
Status: Draft

## Purpose

This workflow governs how production screenshots for Pravnya.com are prepared, reviewed, exported, approved, and wired into the website.

Do not create fake screenshots. Do not use real child data. Do not use real parent data. Every screenshot must come from the real Pravnya application using an approved demo account and approved synthetic demo data.

## 1. Demo Child Profile Rules

Use one stable demo child profile across the full screenshot set unless a screen requires a second profile for comparison.

Allowed:

- Synthetic first name only, such as `Aarav`, `Maya`, or `Sam`.
- Approximate age band, such as `4 years` or `6 years`.
- Non-identifying developmental focus areas.
- Generic caregiver role labels, such as `Parent` or `Caregiver`.
- Generic professional labels, such as `Speech Therapist` or `Class Teacher`.

Not allowed:

- Real child names.
- Real parent or caregiver names.
- Real birthdays.
- Real school names.
- Real clinic, therapist, doctor, or centre names.
- Real addresses, phone numbers, emails, IDs, appointment references, report IDs, or payment details.
- Actual medical, diagnostic, therapy, or assessment records.
- Photos or videos of real children or families.

Recommended demo profile:

| Field | Demo Value |
| --- | --- |
| Child name | `Maya` |
| Age display | `5 years` |
| Caregiver | `Parent` |
| Focus areas | Communication, routines, play, sleep |
| Professionals | Speech Therapist, Class Teacher |
| School / centre | Omit or use `Learning Centre` only if the product requires a value |

## 2. Demo Data Rules

Demo data should feel realistic enough to explain the product, but it must remain clearly synthetic and non-identifying.

Use:

- Short observations written in parent language.
- Neutral progress examples.
- Dates that are plausible but not tied to real appointments.
- Generic professional interactions.
- Placeholder document titles with no real report content.
- AI outputs that demonstrate evidence, uncertainty, and confidence without making diagnostic claims.

Avoid:

- Diagnoses.
- Clinical claims.
- Treatment recommendations.
- Severity scores.
- School performance claims.
- Real photos, videos, documents, or imported files.
- Anything that implies Pravnya replaces a professional.

Demo observation examples may follow this pattern:

- `Used a two-word phrase during breakfast.`
- `Asked for help before becoming upset.`
- `Stayed with the bedtime routine for four nights.`
- `Played alongside another child for ten minutes.`

## 3. Privacy / PII Checklist

Before capture, confirm:

- The account is an approved demo account.
- The child profile is synthetic.
- No real child, parent, caregiver, professional, school, centre, clinic, or doctor appears.
- No uploaded real files appear in the UI.
- No real contact details appear.
- No URL, token, debug panel, analytics ID, admin label, or environment banner appears.
- No production customer data is visible in adjacent UI.
- AI outputs do not diagnose, prescribe, or imply clinical certainty.
- Notifications, browser extensions, operating system banners, and personal device data are hidden.

Before approval, confirm:

- Product has approved the screen state.
- Legal has approved visible claims.
- Security has approved the absence of sensitive data.
- Marketing has approved visual quality and brand fit.

## 4. Screenshot Capture Steps

1. Open the approved demo account in the real Pravnya application.
2. Confirm the app build is the release candidate or approved production build.
3. Set the interface to light mode unless the capture guide says otherwise.
4. Set browser or simulator zoom to 100%.
5. Navigate to the required screen.
6. Prepare the exact screen state defined in `screenshot-capture-guide.md`.
7. Hide debug UI, local banners, test labels, and browser chrome.
8. Capture at the required device size.
9. Export the raw capture into a temporary review folder outside the website public directory.
10. Review the image against the PII checklist.
11. Export the final WebP file using the required filename.
12. Add the approved final file to `pravnya-marketing/website/public/assets/screenshots/`.
13. Wire the file into the relevant website component only after approval.

## 5. Required Device Sizes

| Use Case | Device Frame | Required Capture Size | Orientation |
| --- | --- | ---: | --- |
| Phone screenshots | iPhone 15 Pro-size viewport | 1179x2556 | Portrait |
| Tablet screenshots | iPad/tablet-size viewport | 1600x1200 | Landscape |
| AI wide screenshots | Desktop/tablet content capture | 1400x1000 | Landscape |

Use consistent status bar, safe-area, and scaling across the full phone screenshot set.

## 6. Required Filenames

Final screenshots must use lowercase kebab-case filenames.

| Screenshot | Required Filename | Priority |
| --- | --- | --- |
| Today | `screenshot-today.webp` | P0 |
| Journey | `screenshot-journey.webp` | P0 |
| Growth | `screenshot-growth.webp` | P0 |
| Ask Pravnya | `screenshot-ask-pravnya.webp` | P0 |
| Activities | `screenshot-activities.webp` | P0 |
| Capture | `screenshot-capture.webp` | P0 |
| Child Profile | `screenshot-child-profile.webp` | P0 |
| AI Summary | `screenshot-ai-summary.webp` | P0 |
| Preparation Summary | `screenshot-preparation-summary.webp` | P0 |
| Sharing Permissions | `screenshot-sharing-permissions.webp` | P1 |

## 7. Cropping / Export Specs

| Screenshot Type | Export Format | Quality | Cropping |
| --- | --- | ---: | --- |
| Phone | WebP | 82-90 | Full app viewport, no external device frame |
| Tablet | WebP | 82-90 | Full app viewport, no external device frame |
| AI wide | WebP | 82-90 | Include full evidence panel and confidence area |

Rules:

- Export the app screen only. Website components add the visual device frame.
- Do not include simulator chrome unless Product Design explicitly approves it.
- Keep UI text readable after the website scales the image.
- Avoid ultra-tight crops. Leave the natural app viewport intact.
- Do not add annotations inside the exported image. Use website callout components.
- Keep each final WebP below 500 KB when possible without damaging readability.

## 8. Approval Checklist

Each screenshot requires approval from:

| Approver | Review Scope | Required |
| --- | --- | --- |
| Product | Correct feature state and product accuracy | Yes |
| Product Design | Visual quality, crop, device consistency | Yes |
| Marketing | Brand fit and page usefulness | Yes |
| Legal | Claims, privacy language, non-diagnostic framing | Yes |
| Security / Privacy | No real data or sensitive metadata | Yes |
| Frontend | Correct filename, dimensions, file size, placement | Yes |

Approval record:

- Store approval notes in the launch ticket or PR.
- Include filenames, capture date, approvers, and any known limitations.
- Do not wire unapproved screenshots into public pages.

## 9. File Placement

Approved files go here:

```text
pravnya-marketing/website/public/assets/screenshots/
```

Example final paths:

```text
pravnya-marketing/website/public/assets/screenshots/screenshot-today.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-journey.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-growth.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-ask-pravnya.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-activities.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-capture.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-child-profile.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-ai-summary.webp
pravnya-marketing/website/public/assets/screenshots/screenshot-preparation-summary.webp
```

Public website paths use:

```text
/assets/screenshots/screenshot-today.webp
```

## 10. Final Wiring Checklist

Before wiring:

- The WebP file exists in `public/assets/screenshots/`.
- The filename matches `screenshot-placement-map.md`.
- The screenshot has Product, Legal, Security, Marketing, Design, and Frontend approval.
- The screenshot contains no real child, parent, caregiver, professional, school, centre, clinic, or medical data.

Wire the screenshot by adding `src` to the matching component:

```tsx
<PhoneMockup
  src="/assets/screenshots/screenshot-today.webp"
  label="App screenshot: Today"
  alt="Pravnya Today screen showing recent child development observations"
  caption="Capture anything. Nothing gets lost."
/>
```

After wiring:

- Run `npm run lint`.
- Run `npm run build`.
- Check Home, Features, Ask Pravnya AI, and any page using the new screenshot.
- Verify responsive rendering on mobile, tablet, and desktop.
- Confirm no screenshot text becomes unreadable.
- Confirm all images have meaningful alt text.
- Update `screenshot-placement-map.md` if the placement changes.

## Launch Gate

The screenshot set is launch-ready only when all P0 screenshots are approved, placed, wired, visually reviewed, and validated by a successful production build.

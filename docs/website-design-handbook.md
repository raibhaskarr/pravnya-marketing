---
title: Pravnya Website Design & Content Handbook
subtitle: The definitive design blueprint for the Pravnya public website
owner: Pravnix Labs
status: v1.0 — Approved
version: v1.0
audience: Design, Engineering, Content, Brand — Internal Reference
last_updated: 2026-07-01
next_review: 2027-01-01
---

# Pravnya Website Design & Content Handbook

### The Definitive Design Blueprint for the Pravnya Public Website

Pravnix Labs — Internal Reference

July 2026

---

## How to use this document

This handbook is the design source of truth for every page of the Pravnya public website.
It is not a wireframe tool, a code file, or a CMS configuration. It is the design intelligence
that precedes all of those: the reasoning, the language, the visual principles, and the
section-by-section content that every implementation decision should flow from.

When a designer asks "what should this section say?", this document answers.
When an engineer asks "what does this component do?", this document describes it.
When a copywriter asks "what tone should this headline strike?", this document defines it.

**Read Part 1 (Brand Foundation) and Part 2 (Design System) before reading any page design.**
Every page design assumes you understand the design system. Without it, individual decisions
will look arbitrary. With it, they will be coherent.

All terminology follows the canonical definitions in Appendix A of the Vision Handbook
(`pravnya-docs/docs/00-company/vision.md`). The Manifesto governs philosophical tone.
The Mission Handbook governs operational claims. The Investor Narrative governs market claims.

---

## Table of contents

**Part 1 — Brand Foundation**
1. Brand positioning
2. Brand personality
3. Voice and tone
4. Words we use and words we avoid

**Part 2 — Design System**
5. Color palette
6. Typography
7. Spacing system
8. Border radius and elevation
9. Component library
10. Icon system
11. Illustration style
12. Photography direction
13. Animation guidelines
14. Accessibility standards

**Part 3 — Site architecture**
15. Site map
16. Navigation design
17. Footer design

**Part 4 — Page designs**
18. Home
19. Features
20. How It Works
21. Why Pravnya
22. Ask Pravnya AI
23. Growth
24. Journey
25. Pricing (future)
26. About
27. Privacy
28. FAQ
29. Download
30. Contact
31. Blog (future)
32. Careers (future)

**Part 5 — Implementation references**
33. Screenshot capture guide
34. SEO and metadata master table
35. Implementation notes for Codex

---

# Part 1 — Brand Foundation

---

## 1. Brand positioning

### The one-sentence brief

Pravnya is the child development companion that helps parents hold everything they've been
noticing — and make it count when it matters most.

### The positioning territory

Pravnya occupies a territory that no product currently owns: the intersection of family memory,
developmental understanding, and responsible AI. It is not a healthcare product. It is not a
therapy tool. It is not a parenting advice app. It is a trusted record — personal, longitudinal,
and private — built for the parents who are paying close attention and deserve better
infrastructure for that attention.

The closest experiential references are:

| Reference | What we borrow |
| --- | --- |
| Apple | Premium restraint. Every element earns its place. |
| Notion | Calm clarity. Powerful beneath a simple surface. |
| Headspace | Warm authority. Confidence without clinical coldness. |
| Calm | Considered pacing. The product itself feels like a rest. |
| Airbnb | Trust through specificity. Real families, real moments. |

We do not borrow the visual language of healthcare software, therapy portals, autism trackers,
or clinical dashboards. If something looks like it belongs on a hospital intranet, it does not
belong on Pravnya.

### The emotional promise to parents

A parent who encounters Pravnya for the first time should feel, within thirty seconds:

> "Finally. Something that's actually for me."

Not "this looks promising." Not "I should try this." The feeling is recognition — the
recognition that what they have been experiencing (the fragmentation, the synthesis tax,
the confidence gap) has been named and understood by someone who built a product about it.

That recognition is the first conversion. Everything else flows from it.

### What Pravnya is not

Stating what we are not is as important as stating what we are, because the categories
that exist around us will pull our visual and verbal identity toward them if we are not
deliberate.

Pravnya is NOT:
- A milestone tracker (those tell parents what their child should be doing)
- A medical record (those serve professionals, not families)
- An autism or diagnosis-specific app (we serve all children navigating development)
- An AI chatbot (AI serves the record; the record is not a chatbot)
- A parenting advice platform (we organize what parents know; we don't tell them what to do)
- A school communication app (we serve the family's longitudinal understanding)

---

## 2. Brand personality

Five words that define Pravnya's character across every touchpoint:

### Calm

The product and the brand should always lower a parent's nervous system, not raise it.
Every visual choice, every word, every transition, every color should contribute to a sense
of "this is under control." We never startle. We never alarm. We never manufacture urgency.

In practice: slow transitions, unhurried copy, generous white space, muted tones.

### Intelligent

Pravnya should feel genuinely thoughtful — the kind of product that has considered
questions the user hasn't asked yet. This is intelligence in the sense of wisdom and
depth, not in the sense of technical complexity. The interface reveals depth gradually;
it does not show off.

In practice: precise word choices, considered structure, smart defaults, AI that explains
itself quietly rather than loudly.

### Warm

This is a product about children and families. It must never feel cold, clinical, or
corporate. Warmth is present in the imagery (real parents, real light), in the copy
(personal, conversational), and in the design (rounded forms, organic shapes, wood-warm
neutrals).

In practice: photography of real family moments, copy that acknowledges the emotional
context, a color palette rooted in nature rather than medicine.

### Trustworthy

Trust is built through consistency. Every claim we make is careful. Every AI output
carries its evidence. Every privacy statement is specific. The product does what it says
it does. The website tells the truth about what the product is.

In practice: no superlatives, no marketing vagueness, specific language over generic
language, honest AI description, full privacy page.

### Enduring

Pravnya is building a companion for years of a child's life. The brand should feel like
something that will still be right in five years. Not trendy. Not reactive. Not chasing
a visual moment. The design system is intentionally timeless: classic type, natural
palette, patterns that don't date.

In practice: avoid design trends, use enduring typographic conventions, choose imagery
that won't look dated, write copy that doesn't reference current events or timely references.

---

## 3. Voice and tone

### The voice (constant)

Pravnya's voice is the voice of a thoughtful, experienced friend who happens to understand
child development, technology, and privacy. This friend:

- Speaks to you as an adult capable of complexity
- Does not use jargon but does not talk down
- Acknowledges difficulty without dramatizing it
- Celebrates progress without inflating it
- Is honest about what the product can and cannot do

The voice is consistent across every page, every email, every in-app message, and every
AI output. It does not change when the topic gets technical. It does not become warmer
when selling and colder when disclosing.

### Tone modulation (context-specific)

While the voice stays constant, the tone adjusts to context:

| Context | Tone | Example |
| --- | --- | --- |
| Hero copy | Warm, confident, gently inviting | "Finally, a place for everything you've noticed." |
| Feature descriptions | Clear, specific, quietly proud | "Search your record by date, topic, or professional." |
| AI capability | Honest, precise, appropriately humble | "Pravnya AI summarizes patterns it finds in your record. It does not diagnose." |
| Privacy | Direct, specific, reassuring without defensiveness | "Your record belongs to you. We do not sell it, share it, or use it to train models." |
| Error messages | Calm, helpful, never alarming | "We couldn't load that. Try again, or we can help." |
| Onboarding | Encouraging, personal, never pressured | "No need to add everything at once. Start with whatever's on your mind." |

### Sentence and paragraph style

- Sentences are short to medium. Long sentences when the idea genuinely requires them.
- Paragraphs are 2-4 sentences. One idea per paragraph.
- Headlines use sentence case (not Title Case) unless the brand name is involved.
- We never use exclamation marks in serious copy. Warmth does not require punctuation excitement.
- We use em-dashes sparingly and correctly — for asides, not for decoration.
- We avoid Oxford Comma debates by rewriting sentences that need it.

---

## 4. Words we use and words we avoid

### Words and phrases we use

| Preferred | Why |
| --- | --- |
| Record | Specific, neutral, family-owned |
| Capture | Active but gentle; implies preserving something real |
| Understand | Our central claim; precise and human |
| Progress | Movement within a child's own story |
| Story | Conveys longitudinal arc and personhood |
| Companion | Long-term relationship, not transactional tool |
| Evidence | Elevates parent observation; accurate to our AI design |
| Prepare | Empowers without implying inadequacy |
| Share | Parent-initiated; consensual |
| Trust | Core concept; used specifically, not as a buzzword |

### Words and phrases we avoid

| Avoid | Why |
| --- | --- |
| Track / Tracker | Clinical, surveillance-adjacent |
| Monitor | Medical; implies the child is a patient |
| Diagnose / Diagnosis | We are not a diagnostic tool |
| Platform | Generic SaaS; no warmth |
| Solution | Corporate; vague |
| Powerful / Powerful AI | Marketing superlative |
| Cutting-edge | Trend-chasing |
| Revolutionary / Game-changing | Startup cliché |
| Smart / Intelligent (for the product) | Vague; "thoughtful" or "careful" are better |
| Milestone tracker | That is a category we are not |
| Users | These are parents and families, not users |
| Data | Feels cold; use "record," "observations," "information" |
| Leverage | Corporate jargon |
| Journey (as marketing word) | Overused; when we use "journey" we mean literally |

---

# Part 2 — Design System

---

## 5. Color palette

The palette is rooted in nature: forest, sage, gold, and stone. It reads as premium but warm,
calm but not clinical. There is no blue (too clinical), no purple (too tech), no red (alarming).
The greens anchor trust and nature. The gold provides premium warmth. The neutrals give rest.

### Primary colors

```
Forest Green           #2C5F3E
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The brand anchor. Used for primary buttons,
active states, key headings, and key icons.
Conveys: trust, nature, permanence, health.

Forest Green Light     #3D7A52
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hover state for primary buttons. Section
accent backgrounds. Link hover.

Forest Green Dark      #1A3D27
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pressed states. Dark mode navigation.
High-contrast text on light backgrounds.

Forest Green Subtle    #EBF3EE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tinted section backgrounds. Tag backgrounds.
Highlighted feature cards. Active nav items.
```

### Secondary colors

```
Sage Green             #7A9E8A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Supporting color for icons, dividers, and
secondary UI elements. Softer than Forest.

Sage Light             #9AB5A5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Borders on subtle cards. Decorative elements.

Sage Subtle            #F0F5F2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Alternative surface background. Testimonial
card background. Quiet section dividers.
```

### Accent color

```
Muted Gold             #B8935A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Premium accent. Used sparingly: key callouts,
pull quotes, milestone markers, star ratings,
highlight lines in testimonials.

Gold Light             #CBA876
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hover state for gold elements.

Gold Subtle            #FAF3E8
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background for pull quotes and highlighted
manifesto-style declarations.
```

### Background and surface

```
Background             #F7F4EF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Main page background. Warm off-white, never
pure white. Prevents clinical coldness.

Surface                #FFFFFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cards, modals, input backgrounds.
Elevated above the background.

Surface Raised         #F0EDE6
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Secondary cards. Grouped content areas.
Quote backgrounds. Slightly sunken feel.

Dark Surface           #1C2B22
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dark section backgrounds (footer, select
hero variants). Deep forest, not pure black.
```

### Text colors

```
Text Primary           #1C1C1A
Text Secondary         #5A5A56
Text Tertiary          #8A8A84
Text On Primary        #FFFFFF
Text On Dark           #F0EDE6
Text Link              #2C5F3E
Text Link Hover        #1A3D27
```

### Semantic colors

```
Success                #4CAF7D    (positive states, completion)
Success Subtle         #E6F7EE
Warning                #E8A04A    (caution, not alarm)
Warning Subtle         #FEF3E2
Error                  #D64F4F    (actual errors only; use sparingly)
Error Subtle           #FDEAEA
Info                   #5B9BD5    (neutral information)
Info Subtle            #EBF4FB
```

### Border colors

```
Border Default         #E4DDD0    (standard card borders, dividers)
Border Strong          #C8BFB0    (form inputs, emphasized dividers)
Border Focus           #2C5F3E    (keyboard focus rings; accessibility)
```

### Dark section palette (footer, hero variant)

When a section uses the Dark Surface (`#1C2B22`), all colors invert:
- Headings: `#F7F4EF`
- Body: `#C8D4CC`
- Subtext: `#8FAF99`
- Border: `rgba(255,255,255,0.10)`
- Button: Forest Green Light on dark, or white with forest text

---

## 6. Typography

### Font selection rationale

**Display / Hero: Fraunces** (Google Fonts, variable)
A contemporary serif with optical-size variation. At large sizes it is elegant and literary.
At small sizes it remains highly readable. Fraunces was chosen because it carries the
"humanist" quality that Pravnya needs — it feels like a person speaking, not a corporation.
Use for: hero headlines, page titles, section leaders, pull quotes.

**Body / Interface: Plus Jakarta Sans** (Google Fonts)
A geometric sans-serif that is modern without feeling cold. Its slightly rounded terminals
give it warmth. Excellent readability at all sizes. Use for: body text, UI labels, navigation,
buttons, captions, form inputs, secondary headings.

**Monospace: JetBrains Mono** (Google Fonts)
For any display of AI output, code references, or record excerpts. Its legibility signals
"this came from a system" without the sterility of a narrow monospace.

### Type scale

| Name | Size | Line Height | Letter Spacing | Font | Weight |
| --- | --- | --- | --- | --- | --- |
| Display XL | 72px | 80px | -2.5px | Fraunces | 600 |
| Display L | 56px | 64px | -2px | Fraunces | 600 |
| Display M | 44px | 52px | -1.5px | Fraunces | 600 |
| H1 | 40px | 50px | -1px | Fraunces | 600 |
| H2 | 32px | 42px | -0.5px | Fraunces | 500 |
| H3 | 26px | 36px | 0px | Fraunces | 500 |
| H4 | 20px | 30px | 0px | Plus Jakarta Sans | 600 |
| Body L | 18px | 30px | 0px | Plus Jakarta Sans | 400 |
| Body M | 16px | 26px | 0px | Plus Jakarta Sans | 400 |
| Body S | 14px | 22px | 0.1px | Plus Jakarta Sans | 400 |
| Caption | 12px | 18px | 0.2px | Plus Jakarta Sans | 400 |
| Label | 13px | 18px | 0.5px | Plus Jakarta Sans | 500 |
| Button | 15px | 22px | 0.2px | Plus Jakarta Sans | 600 |
| Mono | 14px | 24px | 0px | JetBrains Mono | 400 |

### Responsive type scaling

At mobile breakpoints (< 768px), all display sizes reduce:
- Display XL → 40px
- Display L → 34px
- Display M → 28px
- H1 → 26px
- H2 → 22px
- H3 → 20px

Body sizes stay constant. Line heights may tighten by 2–4px at mobile.

### Type hierarchy rules

1. One Display or H1 per page. Never two competing large headlines.
2. Section headlines are H2. Subsection headlines are H3 or H4.
3. Pull quotes use H3 in Fraunces, left-aligned, with gold left border.
4. Labels (category tags, section labels) use Label style, uppercase, Forest Green.
5. Captions under photos and screenshots use Caption style, Text Tertiary.

---

## 7. Spacing system

All spacing is based on a 4px base unit.

### Scale

| Token | Value | Common use |
| --- | --- | --- |
| space-1 | 4px | Icon padding, tight inline gaps |
| space-2 | 8px | Between label and input |
| space-3 | 12px | Between icon and text |
| space-4 | 16px | Standard paragraph margin |
| space-5 | 20px | Card internal padding (compact) |
| space-6 | 24px | Card internal padding (standard) |
| space-8 | 32px | Between card rows, list items |
| space-10 | 40px | Section internal spacing |
| space-12 | 48px | Between sections (mobile) |
| space-16 | 64px | Between sections (desktop) |
| space-20 | 80px | Major section breaks |
| space-24 | 96px | Hero-scale spacing |
| space-32 | 128px | Full-bleed section padding |

### Layout grid

Desktop: 12-column grid, 80px outer margins, 24px gutters, max content width 1280px.
Tablet: 8-column grid, 40px outer margins, 20px gutters.
Mobile: 4-column grid, 20px outer margins, 16px gutters.

Container sizes:
- Full: 1280px max-width
- Standard: 1080px max-width (most content)
- Narrow: 720px max-width (text-heavy pages, privacy, FAQ)
- Ultra-narrow: 560px max-width (login, forms, confirmation)

---

## 8. Border radius and elevation

### Border radius scale

| Token | Value | Use |
| --- | --- | --- |
| radius-xs | 4px | Inline tags, small chips |
| radius-sm | 8px | Input fields, small buttons |
| radius-md | 12px | Standard cards, tooltips |
| radius-lg | 16px | Feature cards, modals |
| radius-xl | 24px | Large section cards, hero panels |
| radius-2xl | 32px | Hero image containers, big panels |
| radius-full | 9999px | Pills, avatar circles, toggle |

### Shadow system

All shadows use the brand near-black `#1C1C1A` at varying opacities.

```
Shadow XS:    0 1px 2px rgba(28,28,26,0.06)
              (focus rings, subtle elevation)

Shadow S:     0 2px 6px rgba(28,28,26,0.08),
              0 1px 2px rgba(28,28,26,0.04)
              (card default state)

Shadow M:     0 4px 16px rgba(28,28,26,0.09),
              0 2px 4px rgba(28,28,26,0.05)
              (card hover, small modals)

Shadow L:     0 8px 28px rgba(28,28,26,0.11),
              0 4px 8px rgba(28,28,26,0.06)
              (elevated panels, dropdowns)

Shadow XL:    0 16px 48px rgba(28,28,26,0.13),
              0 8px 16px rgba(28,28,26,0.07)
              (modals, page-level overlays)

Shadow Green: 0 8px 24px rgba(44,95,62,0.22)
              (primary buttons, key CTA hover)

Shadow Gold:  0 6px 20px rgba(184,147,90,0.24)
              (premium accent elements)
```

---

## 9. Component library

### 9.1 Navigation

**Desktop navigation**

```
[Pravnya wordmark]  Features  How it works  Why Pravnya  About
                                               [Sign in]  [Start free →]
```

- Background: `#FFFFFF` at 95% opacity with backdrop blur (16px) on scroll.
  Transparent over hero section.
- Height: 64px
- Wordmark: Fraunces, 22px, Forest Green Dark
- Nav links: Plus Jakarta Sans, 15px, Text Secondary; hover Forest Green
- "Sign in": Text link style, Text Secondary
- "Start free →": Primary pill button (see Button component below)
- On scroll: adds Shadow S, thin border bottom `#E4DDD0`

**Mobile navigation**

- Hamburger icon (Phosphor `List`, 24px, Text Primary)
- Full-screen overlay menu: Dark Surface background, large stacked links in H2 Fraunces
- Bottom of overlay: "Start free" primary button, full width

**Primary button (Navigation CTA)**

```
Background: Forest Green #2C5F3E
Text: White, Button style (Plus Jakarta Sans 600, 15px)
Padding: 12px 24px
Border-radius: 9999px (pill)
Shadow: Shadow Green on hover
Transition: background 200ms, shadow 200ms
Hover: Forest Green Light #3D7A52
Active: Forest Green Dark #1A3D27
```

**Secondary button**

```
Background: transparent
Border: 1.5px solid Forest Green #2C5F3E
Text: Forest Green, Button style
Padding: 12px 24px
Border-radius: 9999px
Hover: Forest Green Subtle background
```

**Ghost button (on dark backgrounds)**

```
Background: rgba(255,255,255,0.12)
Border: 1px solid rgba(255,255,255,0.20)
Text: White
Hover: rgba(255,255,255,0.20)
```

### 9.2 Hero component

The hero is the most important component. It must do four things immediately:
1. Name the problem the parent is experiencing (recognition)
2. Show that Pravnya understands it
3. Signal the emotional register (calm, warm, intelligent)
4. Give one clear next action

**Standard hero layout**

```
┌─────────────────────────────────────────────────────┐
│  [Navigation]                                        │
│                                                      │
│  [Eyebrow label — uppercase Forest Green, 13px]     │
│                                                      │
│  [Hero headline — Display L or XL, Fraunces]        │
│                                                      │
│  [Sub-headline — Body L, Plus Jakarta Sans,         │
│   Text Secondary, max 2 lines]                      │
│                                                      │
│  [Primary CTA]    [Secondary CTA]                   │
│                                                      │
│  [Trust signal — 3 small icons + text]              │
│                                                      │
│  [Hero image or device mockup]                      │
└─────────────────────────────────────────────────────┘
```

Hero variants:
- A. Split layout: Text left (55%), image right (45%)
- B. Centered text with full-width image below
- C. Full-bleed image with text overlay (used on About page)

### 9.3 Feature card

```
Background: Surface #FFFFFF
Border: 1px solid Border Default #E4DDD0
Border-radius: radius-lg (16px)
Padding: 32px
Shadow: Shadow S (default), Shadow M (hover)
Transition: shadow 200ms, transform 200ms
Transform: translateY(-2px) on hover

Structure:
  [Icon — 40px, Forest Green]
  [Title — H4, Plus Jakarta Sans 600]
  [Body — Body M, Text Secondary]
  [Optional link — "Learn more →" Text Link]
```

Grid: 3 columns on desktop, 2 on tablet, 1 on mobile.

### 9.4 Journey timeline component

Used on the "How It Works" and "Journey" pages.

```
┌─────────────────────────────────────────────────────┐
│  ●─────────────────────────────────────────────●   │
│  Step 1          Step 2        Step 3      Step 4   │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │[Icon]    │  │[Icon]    │  │[Icon]    │          │
│  │[Title]   │  │[Title]   │  │[Title]   │          │
│  │[Body]    │  │[Body]    │  │[Body]    │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

- Progress dot: 12px circle, Forest Green; connector line: 2px, Border Default
- Active step: dot enlarges to 16px with green glow (Shadow Green, 8px)
- On mobile: vertical stack with left-aligned vertical line

### 9.5 Testimonial card

```
Background: Surface Raised #F0EDE6
Border-radius: radius-lg (16px)
Padding: 32px
No border (the background differentiates it)

Structure:
  [Gold left accent bar — 3px wide, 40px tall, #B8935A]
  [Quote — Body L, Fraunces italic, Text Primary]
  [Separator — 24px space]
  [Avatar — 40px circle photo]
  [Parent name — Label bold, Text Primary]
  [Context — Caption, Text Tertiary]
    e.g., "Mother of a 5-year-old, using Pravnya for 8 months"
```

Display: 3-column masonry on desktop. Horizontal scroll carousel on mobile.

No last names. No locations unless city-level. No photos of children.
Testimonial copy is warm, specific, and never hyperbolic.

### 9.6 FAQ accordion

```
Container: max-width 720px, centered
Item border-bottom: 1px solid Border Default
Question: H4, Text Primary, padding 20px 0
Answer: Body M, Text Secondary, padding 0 0 20px 0
Chevron icon: 20px, Text Tertiary, rotates 180° when open
Animation: height transition 250ms ease, opacity 150ms
```

### 9.7 CTA banner component

Full-width section used before footer and at page bottoms.

```
Variant A — Light:
  Background: Forest Green Subtle #EBF3EE
  Headline: H2, Fraunces, Forest Green Dark
  Sub: Body M, Text Secondary
  Button: Primary pill

Variant B — Dark:
  Background: Dark Surface #1C2B22
  Headline: H2, Fraunces, Text On Dark
  Sub: Body M, #8FAF99
  Button: White text, Forest Green border → or solid white button with dark text

Width: Full bleed, inner content max 720px centered
Padding: 96px 0
```

### 9.8 Statistics bar component

Used when showing impact metrics or trust signals.

```
Layout: 3–4 stats in a horizontal row
Each stat:
  [Number — Display M, Fraunces, Forest Green]
  [Label — Body S, Text Secondary]

Separator: 1px vertical line, Border Default
Background: Surface
Border-top / border-bottom: 1px solid Border Default
Padding: 48px 0
```

### 9.9 Comparison table

Used on Why Pravnya and Features pages.

```
Column headers: Label style, centered, uppercase
Pravnya column: Forest Green Subtle background, Forest Green header
Row striping: alternating Surface / Surface Raised
Check icon: Phosphor CheckCircle, Forest Green
Cross icon: Phosphor X, Text Tertiary
Text: Body S, Text Secondary
Border: 1px Border Default on all cells
Corner radius on table: radius-lg (16px) with overflow hidden
```

### 9.10 AI explanation card

Specific to Ask Pravnya AI page and any section explaining AI behavior.

```
Background: Surface #FFFFFF
Left accent bar: Forest Green #2C5F3E, 4px
Border: 1px Border Default
Border-radius: radius-md (12px)
Padding: 24px 24px 24px 28px

Internal structure:
  [Icon — Phosphor Sparkle or Brain, 20px, Forest Green]
  [Title — H4, Text Primary]
  [Body — Body M, Text Secondary]
  [Evidence note — Caption, Forest Green Subtle background, radius-xs, inline]
    e.g., "Based on 14 observations in your record"

IMPORTANT: These cards always include an evidence or confidence indicator.
Never show an AI card without showing what it's based on.
```

### 9.11 Download card

Used on the Download page.

```
Layout: Side-by-side iOS / Android cards
Each card:
  Background: Dark Surface #1C2B22 for contrast
  Platform logo: white SVG
  Store badge: Apple App Store / Google Play
  Short copy: "Available for iPhone and iPad" / "Available for Android"
  Button: White pill button with dark text
  QR code: shown on desktop only, below button
  Border-radius: radius-xl (24px)
  Padding: 40px
```

---

## 10. Icon system

### Primary recommendation: Phosphor Icons

Phosphor is the primary icon library for Pravnya. It has the warmth, weight variation, and
breadth that the product requires. Most icons should use the **Regular** weight. Icons in
navigation and cards may use **Duotone** where they benefit from visual richness.

**Why Phosphor over alternatives:**
- Phosphor has a more humanist, rounded quality than Heroicons (which skews more geometric)
- Lucide is excellent but thinner — use Lucide only for compact interface elements
- Phosphor Duotone works beautifully for the feature icon cards

**Weight guide:**
- Navigation: `Regular` (20px)
- Feature cards: `Duotone` (40px) with Forest Green for secondary color
- Body text: `Regular` (16-18px)
- Alerts and status: `Fill` for urgency signals (but we use urgency very rarely)
- AI and intelligence: `Duotone` for the sparkle/brain category icons

**Icon colors:**
- Standard: Text Secondary `#5A5A56`
- Active/highlighted: Forest Green `#2C5F3E`
- On dark background: `#8FAF99` (Sage, readable on Dark Surface)
- Never use raw black for icons. Always use the Text hierarchy colors.

### Secondary: Lucide (for compact UI elements)

Use Lucide for:
- Inline text icons (chevrons, close buttons, external link indicators)
- Table row icons
- Form field icons

Lucide size: 16px inline, 20px in UI elements, 24px in headers.

---

## 11. Illustration style

### Philosophy

Illustrations reinforce what photography cannot: abstract concepts like "the record growing
over time," "AI connecting observations to patterns," or "the confidence gap being bridged."

Illustrations must never look like:
- Medical diagrams
- Clip art
- Cartoony characters (this is not a children's product — it is a product for parents)
- Corporate icons with thin lines

They should look like:
- Organic, hand-drawn-adjacent shapes with clean digital execution
- The visual language of Notion, Linear, or Stripe's editorial illustrations
- Warm, rounded forms with purposeful use of negative space

### Style specification

**Shapes:** Rounded, organic. No sharp corners unless intentional (data charts).
**Lines:** Slightly variable weight (not perfectly uniform), creating warmth.
**Color:** Uses palette colors only. Forest Green for primary shapes, Sage for secondary,
Gold for accents. Background illustrations use very low opacity versions (10-15%).
**Characters:** Avoid human figures unless they are clearly illustrative (silhouette-level
abstraction). If humans appear, they are parent-scale, not child-scale, not clinical.
**Complexity:** Each illustration carries one idea. Never visually crowded.

### Illustration uses by page

| Page | Illustration purpose |
| --- | --- |
| How It Works | Step-by-step flow diagram showing the five workflows |
| Ask Pravnya AI | AI-as-illuminator metaphor: a light revealing patterns in a record |
| Growth | An upward arc — not a steep hockey stick, a gentle rising path |
| Privacy | A closed vault or protected envelope — not a lock icon, a whole scene |
| About | Abstract portrait of the founding moment |

---

## 12. Photography direction

### The rule above all rules

No stock photography. If an image looks like it was selected from a library by searching
"parent child happy," it does not belong on Pravnya. Every photograph should feel like it
was taken with permission inside a real home, in a real moment.

### Subject matter

- Parents (alone or with children) in domestic environments
- Natural light from windows — morning or late afternoon
- Warm, lived-in spaces: wooden furniture, soft textiles, imperfect rooms
- Moments of attention — a parent looking at something, reading, noting something down
- Children visible peripherally or from behind — we do not feature children's faces
  prominently (privacy: the product respects children's privacy even on its own website)
- Hands: capturing, writing, gesturing — hands are among the most powerful subjects
  (a parent's hand holding a phone, writing in a notebook, touching a child's shoulder)

### What we explicitly avoid

- Hospital environments or anything clinical
- Overhead "productivity flat lay" photography
- Forced smiles or posed interactions
- Children as primary foreground subjects with faces clearly visible
- Diverse-but-stock diversity (forced representation that reads as a checklist)
- Bright, oversaturated filters
- Getty / Shutterstock aesthetics

### Color treatment

All photos use a consistent warm treatment:
- Slightly reduced saturation (−10%)
- Slightly increased warmth in temperature (+200K)
- Shadows lifted slightly (no deep blacks)
- Result: images feel consistent with the warm off-white palette

This treatment is applied in post-production and embedded in any exported files.
The goal: photos feel like they belong in the same world as the brand.

### Art direction for shoots (or sourced photography)

**Hero image:** A parent, seated at a kitchen table or on a couch, holding a phone or
tablet. Natural light. They are looking at the screen with an expression that is
concentrated but calm — not stressed. The environment is real: a coffee cup nearby,
a child's toy visible at the edge.

**Feature images:** Close-up of hands on a phone, the screen visible but not the primary
subject. Or a parent writing something quickly in a moment of capture.

**About page:** The founding team in a real working environment — not a posed office photo.

---

## 13. Animation guidelines

### Philosophy

Animation is communication, not decoration. Every animation should serve the user's
understanding of what just happened, what is happening, or what will happen. Animation
that exists only to show technical capability should be removed.

The default mode is stillness. Elements animate only when the animation adds meaning.

### Animation vocabulary

**Fade in (page load, section reveal)**
- Duration: 400ms
- Easing: `ease-out` (fast start, slow finish — gentle arrival)
- Trigger: intersection observer at 15% element visibility
- Stagger: 80ms between sibling elements in a group
- No bounce, no spring. Calm arrivals.

**Fade up (content sections)**
- Combined: `opacity 0→1` + `translateY(16px → 0)`
- Duration: 500ms
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- This is the primary scroll animation for feature cards, testimonials, and section copy.

**Hover lift (cards)**
- `translateY(0 → -3px)` + shadow increase
- Duration: 180ms
- Easing: `ease-out`
- No scale transforms (scale on hover can feel unstable)

**Progress bar (statistics, journey timeline)**
- Width animates from 0% to final value over 800ms
- Easing: `ease-out`
- Trigger: enters viewport
- Numbers count up simultaneously: use vanilla JS counter animation

**Accordion (FAQ)**
- Height: `max-height 0 → content height` over 280ms
- Opacity: `0 → 1` over 180ms (with 60ms delay)
- Chevron rotation: 180deg over 250ms

**Navigation scroll behavior**
- Nav background: `opacity 0 → 1` as page scrolls past 80px
- Duration: 200ms
- No movement — the nav does not slide or animate position

### What we do not animate

- Page transitions (no full-page wipes or slides)
- Text (no typewriter effects, no character-by-character reveals)
- Parallax of foreground content (only background layers may parallax, subtly)
- Anything that repeats without user action (no looping animations unless they are
  a progress indicator the user expects)

---

## 14. Accessibility standards

Pravnya is used by parents who may be stressed, tired, or managing multiple demands.
Many are using screen readers or accessibility tools because their child uses them and
they have learned to. The site must exceed minimum requirements.

### Color contrast

- Body text on white background: minimum 7:1 (AAA)
- Body text on Forest Green Subtle: minimum 4.5:1 (AA)
- White text on Forest Green: minimum 4.5:1 — verify with each background
- Do not use Text Tertiary (`#8A8A84`) for anything more than captions or hints
- Error and Warning states: always paired with an icon, never conveyed by color alone

Target: WCAG 2.1 AA for all user-facing text. WCAG 2.1 AAA for body copy on white.

### Typography minimums

- Body copy minimum: 16px (already in system at Body M)
- Touch targets: minimum 44×44px (all buttons, all links, all form controls)
- Line height: minimum 1.5× font size for body text (already in system)

### Keyboard navigation

- All interactive elements reachable by Tab in logical order
- Focus rings: 2px `Border Focus` (#2C5F3E) with 2px offset — visible and on-brand
- Skip-to-content link: visible on focus, positioned at top of each page
- Accordion, modal, dropdown: full keyboard operation (Space/Enter to open, Escape to close)
- Navigation: arrow keys navigate within nav item groups

### Screen reader support

- All images have descriptive `alt` text. Decorative images use `alt=""`
- Section headings in correct hierarchy (H1 → H2 → H3, never skipping)
- Form labels explicitly associated with inputs
- Icon-only buttons have `aria-label`
- Dynamic content changes (AI outputs, accordion opens) announced via `aria-live`
- The AI output region is `aria-live="polite"` — not assertive, not aggressive

### Motion sensitivity

All animations respect `prefers-reduced-motion: reduce`. When enabled:
- Fade-up animations become instant fade (no Y translation)
- Hover lifts are removed
- Progress bars animate instantly to final value

---

# Part 3 — Site architecture

---

## 15. Site map

```
pravnya.com/
├── /                              Home
├── /features                      Features
├── /how-it-works                  How It Works
├── /why-pravnya                   Why Pravnya
├── /ask-pravnya                   Ask Pravnya AI
├── /growth                        Growth (progress over time)
├── /journey                       Journey (parent navigation experience)
├── /pricing                       Pricing (future)
├── /about                         About
├── /privacy                       Privacy
├── /faq                           FAQ
├── /download                      Download
├── /contact                       Contact
├── /blog                          Blog (future)
│   └── /blog/[slug]               Individual post
└── /careers                       Careers (future)
    └── /careers/[slug]            Individual role

Legal:
├── /legal/privacy-policy          Full legal privacy policy
├── /legal/terms                   Terms of service
└── /legal/data-retention          Data retention policy

Auth (not designed here — handled in product):
├── /signin
└── /signup
```

### Priority tiers

**Tier 1 (launch-ready, highest priority):**
Home, Features, How It Works, Why Pravnya, Privacy, FAQ, Download, Contact

**Tier 2 (launch or soon after):**
Ask Pravnya AI, Growth, Journey, About

**Tier 3 (future):**
Pricing, Blog, Careers

---

## 16. Navigation design

### Primary navigation items (desktop)

```
Features    How it works    Why Pravnya    About
                                          [Sign in]    [Start free →]
```

Navigation items link directly (no mega menus). This product is calm and does not
require a sprawling navigation structure. Sub-pages are reachable from within each section.

Ask Pravnya AI, Growth, and Journey are discoverable from the Features page and from
the homepage, not from primary navigation. This keeps the nav minimal.

### Mobile navigation priority order

```
1. Start free (primary CTA)
2. Features
3. How it works
4. Why Pravnya
5. About
6. Download
7. Sign in
```

---

## 17. Footer design

### Footer content structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Pravnya wordmark + tagline]                               │
│  "The child development companion families trust."          │
│                                                             │
│  Product          Company         Legal                     │
│  Features         About           Privacy policy            │
│  How it works     Contact         Terms of service          │
│  Why Pravnya      Download        Data retention            │
│  Ask Pravnya AI   FAQ             Accessibility             │
│  Growth                                                     │
│  Journey                                                    │
│                                                             │
│  [App Store badge]  [Google Play badge]                     │
│                                                             │
│  ─────────────────────────────────────────────             │
│  © 2026 Pravnix Labs. Built with care for families.        │
│  India  |  English  ▾                                      │
└─────────────────────────────────────────────────────────────┘
```

Footer background: Dark Surface `#1C2B22`
Text: On Dark colors
Wordmark: white
Link hover: `#8FAF99` (Sage on dark)

The tagline beneath the wordmark appears in no other brand material — this is the footer's
specific registration of the brand.

---

# Part 4 — Page designs

---

## 18. Home page

### Page brief

**Purpose:** Make the parent immediately feel seen — and immediately understand that Pravnya
holds the answer to something they have been experiencing but never had named.

**Primary audience:** Parents of children navigating developmental needs or complex care systems.

**Primary message:** You've been paying close attention. This is where it all goes.

**SEO title:** Pravnya — Child development records for parents who are paying attention

**SEO description:** Pravnya helps parents capture, organize, and understand their child's
developmental story. Keep everything in one trusted record. Prepare for every appointment.
Share with the people who need to know.

**Keywords:** child development app, developmental record, parent app, therapy appointment
preparation, child observation notes, developmental tracking, autism parent app, ADHD parent
app, child progress tracker

---

### Section 1: Navigation

See Navigation component above. On the home page, the nav is transparent over the hero.

---

### Section 2: Hero

**Layout:** Variant A — Text left (55%), image right (45%)

**Eyebrow label:**
`FOR PARENTS WHO PAY CLOSE ATTENTION`
Style: Label, uppercase, Forest Green, with a 1px Forest Green underline

**Headline (Display L, Fraunces):**
"You've been paying close attention. Finally, somewhere for all of it."

**Sub-headline (Body L, Plus Jakarta Sans, Text Secondary):**
"Pravnya helps parents capture moments, understand patterns, and walk into every appointment knowing exactly what they've seen."

**Primary CTA button:**
"Start your record — it's free"
(pill, Forest Green, right arrow →)

**Secondary CTA:**
"See how it works ↓"
(ghost link, no button styling, Text Secondary, smooth scroll to How it works section)

**Trust signals (below CTAs):**
Three items in a horizontal row, with Phosphor icons (Regular, 16px, Forest Green):
- `ShieldCheck` → "Private by design. Your record stays yours."
- `Star` (4px gap) → "4.9 rating from families"
- `Lock` → "No data sold. No ads."

**Hero image direction:**
A parent on a living-room couch, soft afternoon light, looking at their phone with
quiet concentration. The screen is partially visible — it shows a record entry, not
the Pravnya app UI in detail. A child's drawing is visible on the coffee table nearby.
Warm, domestic, unhurried.

**Device mockup placement:**
Below the hero photo, on mobile — a phone mockup showing the capture screen, floating
above the scroll fold. The mockup uses the brand illustration style: soft rounded corners,
Forest Green UI highlights, Plus Jakarta Sans typography visible on screen.

---

### Section 3: The recognition moment (problem acknowledgment)

This section exists to give the parent the feeling: "They understand exactly what I've
been going through."

**Section label:** `THE PROBLEM EVERY PARENT RECOGNIZES`
Style: Label, uppercase, Text Tertiary, centered

**Headline (H2, Fraunces, centered):**
"The notes are everywhere. The knowledge is in your head. The appointment is tomorrow."

**Body copy (Body M, Text Secondary, max-width 640px, centered):**
"You've noticed things. You've observed patterns. You've had thoughts at two in the morning that felt important and were gone by the time you could write them down. You have the knowledge — scattered across photos, messages, voice memos, notebooks, and memory. You just have nowhere to put it that helps it all make sense.

That's what Pravnya is for."

**Visual element:**
Six floating icons in a scattered (not neat) arrangement — representing the places
information currently lives:
- `Camera` — photos
- `Note` — notes app  
- `ChatCircle` — messages
- `FilePdf` — clinical reports
- `Microphone` — voice memos
- `Brain` — memory

Below these scattered icons: a Forest Green connecting circle labeled "Pravnya" with
radiating lines to all six icons. Illustration style (not photograph).

Animation: Icons fade in scattered, then the connecting circle animates in with
the radiating lines appearing sequentially over 600ms.

---

### Section 4: The three commitments (solution)

**Section label:** `WHAT PRAVNYA DOES`

**Headline (H2, Fraunces, centered):**
"Three things every family deserves."

**Layout:** Three columns (feature cards)

**Card 1:**
Icon: Phosphor `BookOpen` Duotone, 40px, Forest Green
Title: "Preserve the story"
Body: "Every observation, every milestone, every question you've been carrying — captured in one trusted place, organized automatically, searchable when you need it."

**Card 2:**
Icon: Phosphor `Sparkle` Duotone, 40px, Forest Green
Title: "Create understanding"
Body: "Pravnya AI finds patterns in what you've recorded and helps you see what's changed over time — clearly, without clinical jargon, with every insight traced to your actual observations."

**Card 3:**
Icon: Phosphor `Handshake` Duotone, 40px, Forest Green
Title: "Support better decisions"
Body: "Walk into every appointment, every school meeting, every conversation with a clear, organized account of what you've seen. Your knowledge, finally in a form that can be heard."

---

### Section 5: How it works (abbreviated)

**Section label:** `HOW IT WORKS`

**Headline (H2, Fraunces, centered):**
"Simple enough to use after a hard day."

**Layout:** Horizontal step flow on desktop; vertical stack on mobile

**Step 1:**
Icon: `PlusCircle`
Title: "Capture"
Body: "Voice note, photo, quick text. Under two minutes. Any device."

**Step 2:**
Icon: `FunnelSimple`
Title: "Organize"
Body: "Pravnya sorts and connects what you capture. No filing required."

**Step 3:**
Icon: `ChartLineUp`
Title: "Understand"
Body: "See patterns across time. Watch progress as a story, not a score."

**Step 4:**
Icon: `Notepad`
Title: "Prepare"
Body: "Generate an appointment brief in minutes, drawn from your actual record."

**Step 5:**
Icon: `Share`
Title: "Share"
Body: "Send organized context to the professionals who need it. You control what they see."

**CTA below steps:**
"See the full walkthrough →" (text link, Forest Green)

---

### Section 6: App screenshots

**Section label:** `THE RECORD, IN YOUR HANDS`

**Headline (H2, Fraunces, centered):**
"Built for real family life."

**Layout:** 3 device mockups in a horizontal row, slightly overlapping, angled at ±5° for depth

**Mockup 1 — Capture screen:**
Shows the capture interface: a simple text field with "What did you notice today?" as placeholder.
Below: four icon buttons for Voice / Photo / Document / Milestone.
Caption: "Capture anything. Nothing gets lost."

**Mockup 2 — Record timeline:**
Shows a scrollable feed of past entries, organized by date, with colored category tags
(green for developmental, gold for milestones, sage for professional visits).
Caption: "Your child's story, organized over time."

**Mockup 3 — Preparation summary:**
Shows a generated appointment brief: clear sections, readable font, parent's observations
quoted in plain language.
Caption: "Your record becomes your preparation."

Animation: Mockups fade up with 120ms stagger. On hover, each mockup lifts 4px.

---

### Section 7: AI philosophy (trust builder)

**Background:** Forest Green Subtle `#EBF3EE`

**Section label:** `OUR AI`

**Headline (H2, Fraunces, max-width 680px):**
"AI that tells you what it knows — and what it doesn't."

**Body copy (Body L, Text Secondary):**
"Most AI sounds confident. Pravnya AI is designed to be honest.

Every insight is traced to specific observations in your record. Every summary shows where it came from. When evidence is limited, the AI says so.

We believe trustworthy is more valuable than impressive — especially when the subject is your child."

**Three AI principle cards (stacked, left-aligned):**

Card 1:
Icon: `EyeSlash` → "AI explains. Every output shows its sources."

Card 2:
Icon: `Warning` → "AI admits uncertainty. Limited evidence is named, not hidden."

Card 3:
Icon: `User` → "You stay in control. Edit, correct, or dismiss any AI output."

**Link:** "Read our AI commitments →" (Forest Green link, leads to Why Pravnya / AI section)

---

### Section 8: Privacy declaration

**Background:** Dark Surface `#1C2B22`

**Section label:** `PRIVACY`
(Label style, `#8FAF99` Sage on dark)

**Headline (H2, Fraunces, Text On Dark):**
"Your child's story belongs to your family."

**Three declarations (centered, stacked):**

Each with a large Forest Green checkmark icon (Phosphor `CheckCircle` Fill, 24px):

"Your record is never sold."
"Your data is never used to train AI models."
"You can export or delete your record at any time."

**Sub-copy (Body M, #8FAF99):**
"Privacy is not a compliance checkbox. It is the foundation of everything we build."

**Link:** "Read our full privacy commitment →" (Sage link, underlined)

---

### Section 9: Testimonials

**Section label:** `WHAT PARENTS SAY`

**Headline (H2, Fraunces, centered):**
"From families who've been using Pravnya."

**Layout:** 3 testimonial cards, masonry grid on desktop, single column on mobile

**Testimonial 1:**
"I used to spend an hour before every appointment trying to remember what had changed. Now I spend five minutes generating a summary and walk in feeling like I actually know what I want to say."
— Priya M., mother of a 6-year-old, using Pravnya for 11 months

**Testimonial 2:**
"The therapist said it was the most organized history she'd ever received from a family. I cried a little, honestly. I'd been trying to explain this for three years."
— Rohit K., father of a 4-year-old, using Pravnya for 7 months

**Testimonial 3:**
"What I love most is that it's not comparing my son to other kids. It's just about him, and what's changed for him. That feels so different from everything else I've tried."
— Sunita R., mother of a 7-year-old, using Pravnya for 14 months

Note: Use real testimonials from beta families when available. These are representative
placeholders demonstrating the voice and content level required.

---

### Section 10: FAQ (abbreviated, 3 questions)

**Section label:** `COMMON QUESTIONS`

**Q: Is Pravnya for all children or only children with diagnosed conditions?**
A: Pravnya is for any family that wants to better understand and document their child's
development. Most of our families are navigating developmental differences — but the
product is built for any parent who pays close attention and wants a better record of what they've seen.

**Q: Does Pravnya give medical advice or diagnoses?**
A: No. Pravnya helps you organize and understand what you've observed. It does not assess,
diagnose, or make clinical recommendations. We believe that is the work of the professionals
you trust — we help you arrive at those conversations better prepared.

**Q: What happens to my data?**
A: Your record belongs to you. We do not sell it, share it with third parties, or use it
to train AI models. You can export your complete record at any time. You can delete your
account and all associated data at any time.

**Link:** "See all frequently asked questions →"

---

### Section 11: Download CTA

**Background:** Forest Green Subtle

**Headline (H2, Fraunces, centered):**
"Start your child's record today."

**Sub-copy (Body L, Text Secondary, centered):**
"Free to start. Takes two minutes. No credit card."

**Download buttons:**
[App Store badge]  [Google Play badge]

**Or:** "Start on web →" (text link below badges for web app access)

**Trust footnote (Caption, Text Tertiary):**
"Your first 90 days include full access to all features."

---

### Section 12: Footer

See Footer component design above.

---

## 19. Features page

**SEO title:** Pravnya Features — Capture, organize, and understand your child's development

**SEO description:** Discover how Pravnya's five core features help parents capture moments,
build an organized developmental record, understand patterns over time, prepare for appointments,
and share securely with professionals.

**Keywords:** child development app features, parent observation tool, developmental record app,
appointment preparation app, child progress app

---

### Hero

**Eyebrow:** `FIVE FEATURES. ONE PURPOSE.`

**Headline (Display M, Fraunces):**
"Built around what parents actually need."

**Sub-headline (Body L):**
"Not what developers assumed they'd need. What years of listening to families showed us."

**Layout:** Centered, no image. The headline does the work.

---

### Feature 1: Capture

**Layout:** Two-column — screenshot left, copy right (alternating on each feature)

**Label:** `FEATURE 01 — CAPTURE`

**Headline (H2, Fraunces):**
"Record in moments. Not in marathons."

**Body:**
"A child says something new. They navigate something that was hard last week. You notice a pattern you've never seen before. These moments are small and fast. The record should match them.

Pravnya capture takes under two minutes in any format — voice, text, photo, or document. You choose the format that fits the moment. The structure comes later, automatically.

You do not need to categorize what you capture. You do not need to decide where it belongs. You only need to capture it before it's gone."

**Feature detail list (Icon + Label pairs, Body S):**
- `Microphone` Voice notes — transcribed automatically
- `Image` Photo and video — linked to your record, not just stored
- `FilePdf` Documents — clinical reports, school assessments, letters
- `Flag` Milestone markers — celebrate what you want to remember
- `Question` Open questions — things you want to bring to the next appointment

**Screenshot:**
Capture screen. Phone mockup. The text input says "She held a spoon independently today — first time without prompting." A voice waveform icon shows in-progress recording. Category tags appear faintly below: "Fine motor · 14 Jul 2026."

---

### Feature 2: Organize

**Label:** `FEATURE 02 — ORGANIZE`

**Headline (H2, Fraunces):**
"The record organizes itself. You live your life."

**Body:**
"Every observation you capture is automatically structured: tagged by developmental domain, connected to the professional or setting it relates to, and placed in the timeline where it belongs.

You never sort. You never file. You never wonder where something went.

When you need to find the thing you noticed six months ago — the first time they did it, before you knew it was going to matter — it is there, searchable, in context."

**Feature detail list:**
- `Tag` Automatic tagging by domain and setting
- `MagnifyingGlass` Full text search across your entire record
- `Calendar` Timeline view — see any period at a glance
- `ArrowsClockwise` Connected to professional visits and reports

**Screenshot:**
Record timeline. Multiple entries visible across dates. Color-coded category tags. A search bar at top showing "sensory" with results highlighted. Phone mockup, Forest Green UI elements.

---

### Feature 3: Understand (Review)

**Label:** `FEATURE 03 — UNDERSTAND`

**Headline (H2, Fraunces):**
"See what's changed. Not just what happened."

**Body:**
"The most valuable thing about a longitudinal record is not any single entry. It is the pattern that emerges across dozens of entries over months. The signal that is invisible day-by-day and unmistakable across the year.

Pravnya AI reads your record and surfaces those patterns. What has improved. What is consistent. What questions your observations are pointing toward.

Every insight traces back to specific entries in your record. The AI shows its work. You can follow the reasoning, correct it, or dismiss it. The record is yours. The AI is a lens, not an authority."

**Feature detail list:**
- `ChartLineUp` Progress view — movement within your child's own story
- `Sparkle` Pattern recognition — AI finds what you might have missed
- `ArrowCircleUp` Monthly summaries — what changed in the last 30 days
- `SealCheck` Evidence-traced — every insight shows its source

**AI honesty callout:**
```
[Gold left border]
"Pravnya AI is designed to be honest about uncertainty.
When evidence is limited, it says so.
When a pattern needs professional interpretation, it says so."
```

**Screenshot:**
A summary view. "June 2026 Summary" heading. Below: three pattern observations in the AI card style — each with an evidence note showing "Based on 8 observations" or "Based on 3 observations (limited)." One card is visually muted with a note: "Insufficient evidence to identify a clear pattern — consider capturing more over the next few weeks."

---

### Feature 4: Prepare

**Label:** `FEATURE 04 — PREPARE`

**Headline (H2, Fraunces):**
"Walk into every appointment ready."

**Body:**
"The appointment preparation summary is the feature parents tell us changed everything.

Before every meeting — therapy, school review, pediatrician, specialist — Pravnya generates a clear, organized summary of what you've observed in the relevant period. What has changed. What has stayed the same. What questions your record is suggesting you ask.

It takes five minutes to generate from your existing record. It covers what used to take an hour to reconstruct from memory.

The professional across from you receives better context. The conversation goes further. The decisions are more informed."

**Feature detail list:**
- `ClipboardText` Auto-generated from your record — no manual writing
- `Sliders` Customizable — select the time period and domains to include
- `Export` Share as PDF or send directly to a professional
- `Translate` Plain language — no clinical jargon

**Pull quote (Gold accent, Fraunces italic):**
"'I walked in and the therapist said it was the most organized history she'd ever received.'"
— A Pravnya parent

**Screenshot:**
Appointment preparation screen. "Appointment with Dr. Sharma — 17 July 2026" heading.
Below: three sections visible — "What we've observed this period," "What has changed," "Questions to ask." Each section populated with specific, readable text drawn from the record. An "Export as PDF" button at the bottom.

---

### Feature 5: Share

**Label:** `FEATURE 05 — SHARE`

**Headline (H2, Fraunces):**
"You decide what goes where. And to whom."

**Body:**
"Sharing your child's developmental record is sometimes exactly the right thing to do. A new therapist who has your full context from the start. A specialist who can review the pattern before the appointment. A school that can understand what home looks like.

Pravnya makes sharing controlled, contextual, and consensual. You select what to include. You review what will be shared. You initiate the share. The professional receives organized context — not a data dump — and cannot access anything you have not explicitly selected.

You can revoke access at any time. Your record remains yours."

**Three sharing principles (icon cards, Forest Green Subtle background):**
- `UserCircle` Your record. Your permission.
- `Eye` You preview exactly what they'll see.
- `ArrowCounterClockwise` Revocable at any time.

**Screenshot:**
Sharing permissions screen. A professional's name visible ("Dr. Mehta — Occupational Therapist").
Below: period selector ("March 2026 – June 2026"), domain toggles (selected: Communication, Sensory; unselected: Sleep). A preview card below shows what the professional will receive. "Share" button at bottom.

---

### Feature comparison table

**Headline (H2, Fraunces, centered):**
"How Pravnya compares."

| | **Pravnya** | Notes app | Photo app | Milestone tracker | Clinic portal |
| --- | --- | --- | --- | --- | --- |
| Longitudinal record | ✓ | — | — | — | — |
| AI pattern recognition | ✓ | — | — | — | — |
| Appointment preparation | ✓ | — | — | — | — |
| Parent-controlled sharing | ✓ | — | — | — | Partial |
| Searchable by meaning | ✓ | Partial | — | — | — |
| Evidence-traced AI | ✓ | — | — | — | — |
| Privacy-first design | ✓ | Varies | Varies | Varies | Varies |
| Built for families (not clinics) | ✓ | — | — | — | — |

---

### CTA

**Headline (H2, Fraunces, centered):**
"Every feature. One record. Your family."

[Start free →] [See how it works →]

---

## 20. How It Works page

**SEO title:** How Pravnya Works — Five steps to a complete developmental record

**SEO description:** Learn how Pravnya helps parents capture, organize, review, prepare, and
share their child's developmental record in five simple steps.

---

### Hero

**Eyebrow:** `FROM SCATTERED TO ORGANIZED IN DAYS`

**Headline (Display M, Fraunces):**
"Simple enough to start now. Powerful enough to matter later."

**Sub:** "Pravnya is built around five workflows that fit real family life — and become more valuable every month you use them."

---

### Main content: Five-step journey

Each step occupies a full-width section alternating between text-left/image-right layouts.

**Step 1: Set up your record (10 minutes)**

"Every Pravnya record begins with your child. Add the basics — their name, age, the professionals they work with, the developmental areas you're most focused on. This takes about ten minutes and never needs to be done again.

From this foundation, everything you capture has context. Observations are automatically connected to the right people, domains, and time periods."

Visual: Illustration of a form being filled — warm, hand-drawn style. Child's name field, a professional being added (therapist name, specialty). Not a screenshot — an illustrated scene.

**Step 2: Capture as you go**

"There is no right time to capture. There is only before you forget.

Pravnya works best when you use it in the small moments — after a therapy session, when you notice something new, when your child says something you want to remember. Each capture takes under two minutes. Voice notes are transcribed. Photos are linked to your record. Documents are organized automatically.

The record doesn't require a filing session. It builds in the margins of your day."

Visual: Phone mockup showing the capture screen. An audio waveform visible — mid-recording.

**Step 3: Let the record grow**

"The value of a developmental record is not what it contains today. It is the pattern that emerges across weeks and months.

As your record grows, Pravnya connects observations across time. A pattern in sensory responses that appeared in February is still connected to the observation you made in May. The record holds what memory cannot: the specific detail, the exact date, the direct quote."

Visual: Timeline view growing from a few entries to many, with connecting threads between related observations. Illustrated, not a screenshot — warmer.

**Step 4: Prepare before appointments**

"The day before an appointment, open Pravnya and generate a preparation summary. Select the time period and the domains most relevant to the meeting. Review what the record shows.

In five to ten minutes, you have a clear, organized account of everything you've observed in the relevant period — what has changed, what patterns have appeared, what questions have been forming.

Hand it to the professional. Or simply use it to guide your own participation in the meeting."

Visual: The preparation summary document, displayed at an angle — readable but not detailed enough to be content. Professional, clean, clearly a real document.

**Step 5: Build a companion that lasts**

"A Pravnya record is not just useful today. A family that has maintained a record across three years of a child's development holds something irreplaceable — a specific, organized account of the child's journey that no professional visit, memory, or other system could reconstruct.

That record is portable. It travels with the child to a new city, a new school, a new specialist. It holds the story through transitions that would otherwise mean starting over."

Visual: A timeline that stretches across the full width of the page — entries from three years visible in small form, a clean illustration of longitudinal depth.

---

### FAQ subsection (3 questions)

**Q: Do I need to use it every day?**
A: No. Pravnya works around your schedule. Some families capture something every day. Others add to their record once or twice a week. The record grows in value regardless of frequency, because even occasional captures accumulate into meaningful longitudinal evidence.

**Q: How long before I see the AI features working?**
A: The AI features improve as your record grows. With 15–20 observations, you will start seeing patterns identified in your review summaries. With 50+, the preparation summaries become significantly more detailed and specific.

**Q: What if I have records from before Pravnya?**
A: You can import past observations, assessments, and documents. Many families start by uploading existing reports and then begin adding new observations forward from there. Your record does not have to start from zero.

---

### CTA

"Ready to start?"

[Begin your record — free →]

---

## 21. Why Pravnya page

**SEO title:** Why Pravnya — The philosophy behind the product

**SEO description:** Why we built Pravnya, what we believe about child development, and why responsible AI matters more than impressive AI.

---

### Hero

**Eyebrow:** `WHAT WE BELIEVE`

**Headline (Display M, Fraunces):**
"We built Pravnya because the tools that existed weren't good enough for the families who needed them most."

---

### Section 1: The belief behind the product

**Pull quote (Gold, Fraunces, large):**
"Every child deserves to be understood. Not tracked. Not compared. Understood."

**Body:**
"That belief shapes every feature, every AI decision, every privacy practice, and every word on this website.

It means progress in Pravnya is always measured within a child's own story — never against other children.

It means AI outputs are always traced to the specific observations you made — never to general population patterns.

It means the record belongs to the family — not to us, not to professionals, not to advertisers."

---

### Section 2: Why existing tools failed

**Headline (H2, Fraunces):**
"Not a single tool was built for the family's longitudinal understanding."

**Body:**
"Milestone trackers measure moments. Photo apps preserve memories. Clinical tools serve professional workflows. School apps manage communication.

Each of these products does something useful. None of them was built to answer the question: how do I hold the full, specific, longitudinal story of my child's development in a form that helps me understand it, communicate it, and act on it?

That gap is what Pravnya fills."

---

### Section 3: The confidence gap

**Headline (H2, Fraunces):**
"The parent who knows their child best should feel the most confident."

**Body:**
"In practice, that is often not what happens.

Parents who have spent months building detailed knowledge of their child's development often arrive at professional appointments feeling uncertain — because their knowledge is in informal form (memory, scattered notes) and professional systems were not designed to receive it.

Pravnya exists to change this. Not by making parents sound more clinical. By giving parent knowledge the structure it needs to be taken seriously in the conversations that matter."

---

### Section 4: Our AI commitment

**Headline (H2, Fraunces):**
"We chose trustworthy over impressive. Here's why."

**Body:**
"When we built the AI features in Pravnya, we faced a choice every AI product faces: optimize for impressive-sounding outputs, or optimize for honest, evidence-based outputs.

We chose honest.

Not because honest AI is technically harder to build. Because we believe that AI in a product that holds a child's developmental story has an obligation to be careful with what it says — especially at eleven o'clock at night when a worried parent is reading it.

Pravnya AI:
- Always shows what observations its insights come from
- Always acknowledges when evidence is limited
- Never uses diagnostic or clinical language
- Can be edited, corrected, or dismissed by you at any time

These are not guidelines. They are permanent commitments."

**Nine principle cards (compact version):**
Grid of 9 small cards, each with a Phosphor icon and a two-line principle.
Reference the nine permanent AI principles from the Vision Handbook.

---

### Section 5: The Pravnya Promise

**Background:** Gold Subtle `#FAF3E8`

**Headline (H2, Fraunces, centered):**
"Three things we will never do."

**Three declarations (centered, large, Fraunces):**

"We will never build a product that makes you feel like a worse parent."

"We will never reduce your child to a data profile."

"We will never treat your family's trust as a commercial asset."

**Attribution (Caption, Text Secondary):**
"From the Pravnya Promise — Vision Handbook, Chapter 2"

---

### CTA

"Does this feel like the product you've been looking for?"

[Start your record — it's free →]

---

## 22. Ask Pravnya AI page

**SEO title:** Ask Pravnya AI — Honest, evidence-based intelligence for your child's development

**SEO description:** Pravnya AI helps you understand patterns in your child's developmental record, prepare for appointments, and surface insights — always traced to your own observations.

---

### Hero

**Eyebrow:** `PRAVNYA AI`

**Headline (Display M, Fraunces):**
"AI that works from your record, not from the internet."

**Sub (Body L):**
"Pravnya AI doesn't give you generic advice about child development. It reads your specific record and helps you understand what you've been observing — honestly, carefully, with every insight traced to evidence."

---

### Section 1: What AI does in Pravnya

**Headline (H2, Fraunces):**
"What Pravnya AI actually does."

Four AI explanation cards (see component 9.10):

**Card 1 — Organizes**
Icon: `FunnelSimple`
"Tags and connects observations automatically, so you never have to file things manually."
Evidence note: "Applied to every entry as it's captured"

**Card 2 — Summarizes**
Icon: `TextAlignLeft`
"Generates clear summaries of your record over selected time periods — what changed, what stayed consistent, what your observations suggest."
Evidence note: "Always drawn from your actual entries, not generated from general knowledge"

**Card 3 — Surfaces patterns**
Icon: `Graph`
"Identifies patterns across multiple observations over time — things that might not be visible day by day but are clear across a longer view."
Evidence note: "Shown only when at least 5 related observations exist; marked as 'limited evidence' below that threshold"

**Card 4 — Prepares questions**
Icon: `ChatCircleQuestion`
"Based on what your record shows, suggests questions worth asking at the next appointment."
Evidence note: "Suggestions are based on patterns in your record — not on diagnostic criteria"

---

### Section 2: What AI does NOT do

**Background:** Forest Green Subtle

**Headline (H2, Fraunces):**
"We are equally clear about what Pravnya AI does not do."

**Three declarations with Warning icon (not alarming — just honest):**

"Pravnya AI does not diagnose. It never uses diagnostic language or suggests a specific condition."

"Pravnya AI does not replace professional expertise. It prepares you for professional conversations — it does not substitute for them."

"Pravnya AI does not make decisions. You remain in control. Every AI output can be edited, corrected, or dismissed."

**Quote (Fraunces italic):**
"We believe parents deserve AI that is honest about what it knows — and about what it doesn't."

---

### Section 3: A sample interaction

**Headline (H2, Fraunces):**
"What it looks like in practice."

**Screenshot or illustrated mockup:**
An example AI summary card showing:
- Header: "Pattern identified — Communication (April–June 2026)"
- Body text in a readable, non-clinical summary
- Evidence section expanded: "Based on 12 observations — [entry 1 title, date], [entry 2 title, date]..."
- A "How to use this" note: "Consider discussing this pattern with your speech therapist at the July appointment."
- Confidence indicator: A subtle "Moderate confidence" label with a brief tooltip explanation

---

### Section 4: Nine AI principles

**Headline (H2, Fraunces):**
"Nine commitments we hold permanently."

Three-column grid of compact principle cards. Each card:
- Phosphor icon (Regular, 20px, Forest Green)
- Principle name (H4)
- One-sentence explanation (Body S, Text Secondary)

These are the nine permanent AI principles from the Vision Handbook.

**Footer of this section:**
"These principles are documented in full in our Vision Handbook and are not subject to change as AI technology evolves."
Link: "Read the full AI philosophy →"

---

### CTA

**Headline (H2):**
"Ready to see what your record reveals?"

"Build your record for two weeks. Then let Pravnya AI show you what it finds."

[Start free →]

---

## 23. Growth page

**Purpose:** Show how Pravnya's value compounds over time — the longitudinal intelligence argument, made viscerally clear.

**SEO title:** Track child development progress with Pravnya — See your child's story unfold

**SEO description:** Pravnya helps parents see their child's progress within their own story — not measured against other children, but celebrated as what it is: movement forward.

---

### Hero

**Eyebrow:** `GROWTH`

**Headline (Display M, Fraunces):**
"Progress that belongs to your child alone."

**Sub (Body L):**
"Not a percentile. Not a rank. A story of how far this specific child has come — in their own time, on their own terms."

---

### Section 1: The longitudinal view

**Headline (H2, Fraunces):**
"The most important thing about a developmental record is what you can't see on day one."

**Body:**
"On the day you capture an observation, it is a single point. A child tries a new word. A routine becomes easier. A transition that was impossible last month passes without incident.

That point alone doesn't tell you much. But the same observation, placed among twenty similar observations across three months, becomes a pattern. A pattern is not a diagnosis. It is evidence that something real is happening — and it is the evidence that your next professional conversation should be built on."

**Illustration:**
A timeline growing from one dot to many, with connecting lines showing how isolated
observations become visible patterns. Animated on scroll: dots appear sequentially, then
connecting lines draw between related points. Clean, organic illustration style.

---

### Section 2: Progress within this child's story

**Headline (H2, Fraunces):**
"We measure progress one way: against where this child was."

**Body:**
"Pravnya does not rank your child against a population. It does not tell you where your child falls on a developmental chart. It shows you what has changed in your child's own record across the time you have been watching.

That is the only comparison that is genuinely useful for understanding this specific child's development. And it is the comparison that reduces anxiety rather than creating it."

**Three contrast statements:**

```
Instead of:                         Pravnya shows:
"Below average for age"        →    "3 new communication skills in 60 days"
"At the 32nd percentile"       →    "Sleep patterns consistent for 6 weeks"
"Delayed in fine motor"        →    "Independent spoon use achieved, 14 July"
```

---

### Section 3: What families tell us growth feels like

**Testimonial (full width, centered, large):**

"'I had been told so many times where my daughter ranked on various things. Pravnya was the first tool that showed me what she had actually done — what she had learned, what had changed, what she was working toward. I cried the first time I saw the three-month summary.'"
— A Pravnya parent, 18 months of use

---

### Section 4: The value compound

**Headline (H2, Fraunces):**
"The record becomes more valuable every month."

**Visual:** A gentle rising arc (illustration) with time milestones labeled at key points.

| Time | What becomes possible |
| --- | --- |
| Week 2 | First patterns identifiable by AI |
| Month 2 | Monthly summaries show meaningful change |
| Month 6 | Appointment preparation is dramatically more detailed |
| Year 1 | A complete developmental history for the past year |
| Year 2+ | Something irreplaceable — the longitudinal story of your child's development |

---

### CTA

"Start building the record now. The compound starts today."

[Begin for free →]

---

## 24. Journey page

**Purpose:** Map the parent's emotional and practical journey through developmental navigation — and show where Pravnya helps at each stage.

**SEO title:** The parent journey through child development — and how Pravnya helps

**SEO description:** From first concerns to long-term professional relationships, Pravnya is with you at every stage of navigating your child's developmental journey.

---

### Hero

**Eyebrow:** `THE PARENT JOURNEY`

**Headline (Display M, Fraunces):**
"You didn't choose this journey. But you're navigating it."

**Sub (Body L):**
"Pravnya is built for every stage of what families experience — from the first time something feels different, to years of coordinated support."

---

### Journey stages (vertical timeline, full-page)

**Stage 1: Something feels different**

"The first stage rarely arrives with clarity. It arrives as a feeling — that something is different, something is worth watching, something you can't quite name yet. You start noticing more. You start wondering if what you're noticing matters.

This is when the record should begin."

Pravnya helps: "Capture observations without needing to understand them yet. Build a record before you have answers — because that record will be the evidence that helps professionals understand what you've seen."

**Stage 2: Finding the right people**

"The search for professionals — pediatricians, therapists, specialists, educational consultants — involves appointments, referrals, waiting lists, and initial consultations. Each new professional needs to understand your child quickly.

The record you've been building becomes immediately useful here."

Pravnya helps: "Generate a clear history to share with each new professional. Reduce the time spent re-explaining your child's story from the beginning. Let the record speak for you."

**Stage 3: Building a support system**

"You have a team now — perhaps a therapist, a speech-language pathologist, a school SENCO, a pediatrician. Each professional sees your child in a specific context. None of them sees what you see at home.

You are the connective tissue of your child's support system."

Pravnya helps: "Keep a record that spans contexts — home, school, clinic, community. Use the preparation summary to connect your home observations to each professional's work. Share selected context with each professional, with your control over what they see."

**Stage 4: Navigating transitions**

"Transitions — new school year, new therapist, new city, new specialist — are among the most stressful moments in developmental navigation. Starting over means starting without context. Context matters."

Pravnya helps: "Your record travels with you. A new professional who receives your Pravnya preparation summary does not start from zero. They start from where you actually are."

**Stage 5: The long view**

"Years into this journey, the thing you will want most is a clear account of how far your child has come. Not a clinical summary — a real account. The thing you noticed in January 2025 that seemed small and turned out to be the beginning of something significant. The three months of hard work that led to a breakthrough. The question you asked for two years that finally got answered."

Pravnya helps: "The longitudinal record is there. Complete, searchable, yours."

---

### CTA

**Headline (H2, Fraunces, centered):**
"Whatever stage you're at — the record should start now."

[Start for free →]

---

## 25. Pricing page (future)

**Status:** Design placeholder only. Not live at launch.

**SEO title:** Pravnya Pricing — Free to start. Premium for the families who need more.

---

### Pricing philosophy

The Pravnya pricing page is designed around one principle: families should not face a
financial barrier to starting their child's developmental record.

The free tier provides genuine value — enough to experience the core product and begin
building the longitudinal record that makes the premium features useful.

**Recommended tier structure:**

**Free tier — "Record"**
- Unlimited capture (text, voice)
- Up to 30 photos / documents
- Record timeline and search
- Basic monthly review
- No AI summaries
- No preparation documents

**Premium tier — "Understand"**
- Everything in Free
- Unlimited media
- AI pattern recognition and summaries
- Appointment preparation documents
- Professional sharing
- Export full record as PDF
- Priority support

**Professional tier — coming later**
- For therapists, schools, and clinics
- Professional intake from family records
- Progress documentation tools
- Multiple family management

**Pricing UI notes:**
- Annual / monthly toggle at top
- Annual pricing shown by default (better value)
- "Most popular" label on Premium, not on Free
- No countdown timers, no "limited offer" language — we do not create urgency pressure
- Privacy callout: "Your payment information is never stored by Pravnya"

---

## 26. About page

**SEO title:** About Pravnya — Why we built it and who we are

**SEO description:** Pravnya was built because of a moment every parent knows — the night before an appointment, trying to remember everything. This is our story.

---

### Hero

**Layout:** Full-bleed image with text overlay (Variant C)

**Background:** A photograph of the founding team working — real environment, warm light.

**Headline (Display L, Fraunces, Text On Dark):**
"We built Pravnya because of a moment every parent knows."

---

### Section 1: The founding story (condensed Founder Narrative)

**Body:**
"There is a moment many parents know.

It happens in a waiting room, or the night before an appointment, or in the middle of a conversation where someone asks: 'So, what exactly has changed?' And the parent — who has lived every day of that change — cannot quite say.

The memory is real. The knowledge is there. But it has no shape.

That moment is the origin of Pravnya. Not a market opportunity. A gap in the world that we had experienced personally, and that we couldn't find anyone building a real answer to.

We did not build a product that would give parents more information about child development. The internet already provides that. We built the infrastructure for the information parents already have — the infrastructure that holds it, organizes it, and makes it usable at the moment it is most needed."

**Link:** "Read the full Founder Narrative →" (links to a public version or PDF)

---

### Section 2: What we believe

**Headline (H2, Fraunces):**
"The beliefs that shape everything we build."

Five belief cards (large, horizontal, gold accent bars):

1. "Every child deserves to be understood — not tracked, not compared, understood."
2. "Progress cannot be compared. It belongs to the child who is making it."
3. "Parents deserve confidence in the conversations that matter most."
4. "AI must remain honest and human-centred — especially here."
5. "Trust is earned slowly. We are building for the long term."

**Link:** "Read our full manifesto →" (links to a public Manifesto page or PDF)

---

### Section 3: The team

**Headline (H2, Fraunces):**
"Built by people who experienced this."

[Founder photos + name + one-paragraph bio each]

Each bio should be:
- Personal and honest
- Specific about what brought them here
- Free of startup superlatives
- No "passionate about X" language — show, don't claim

---

### Section 4: Our commitments

**Headline (H2, Fraunces):**
"These commitments govern every decision we make."

Reference the Vision Handbook's twelve principles and the Manifesto's declarations — in
accessible, non-handbook language for a public audience.

Displayed as: a numbered list, H4 headings, Body S explanation beneath each.

---

### CTA

**Headline (H2):** "Build the record your child's story deserves."

[Start free →]

---

## 27. Privacy page

**SEO title:** Pravnya Privacy — Your child's story belongs to your family

**SEO description:** How Pravnya handles your data, what we never do with it, and how you remain in control of your child's developmental record at all times.

**Important:** This is a full-content privacy page — not a legal policy page. The legal
Privacy Policy is at `/legal/privacy-policy`. This page communicates our privacy philosophy
in human language. It is the first page a cautious parent will check.

---

### Hero

**Eyebrow:** `PRIVACY`

**Headline (Display M, Fraunces):**
"Your child's story belongs to your family. Not to us."

**Sub (Body L):**
"Privacy is not a feature we added. It is the foundation we built on."

---

### Section 1: What we never do

**Background:** Forest Green Subtle

**Headline (H2, Fraunces):**
"Three things that will never happen."

Three large declaration cards, each with a large X in a circle icon (Forest Green):

**Declaration 1:**
"We will never sell your data."
"Your child's developmental record is not for sale, at any price, to any party, for any purpose."

**Declaration 2:**
"We will never use your record to train AI models."
"What you observe about your child stays in your record. It does not become training data."

**Declaration 3:**
"We will never share your data without your explicit permission."
"Your record is shared only when you initiate a share, to the specific professional you choose, with the content you select."

---

### Section 2: What we do

**Headline (H2, Fraunces):**
"What happens to your data — specifically."

**Format:** Q&A pairs, Body M, with icon for each item

**Q: Where is my data stored?**
A: Your record is stored on secure servers in [region]. All data is encrypted at rest and in transit. We follow [standard] for data security.

**Q: Who at Pravnya can see my record?**
A: A very limited set of authorized engineers, only for the purpose of diagnosing technical issues, only with your knowledge, and never routinely. We maintain access logs.

**Q: Does Pravnya AI use my record to improve itself?**
A: No. The AI models that generate summaries and pattern insights are trained on general datasets, not on individual family records. Your record is used only to generate outputs for you.

**Q: Can I export my record?**
A: Yes. At any time. In full. We provide a complete export of everything you have ever added to Pravnya in standard, readable formats.

**Q: Can I delete my account?**
A: Yes. Completely. When you delete your account, all records, observations, documents, and associated data are permanently deleted within 30 days. We provide confirmation.

---

### Section 3: How we protect your data

**Technical measures (compact, icon list):**
- `Lock` End-to-end encryption for all data in transit
- `ShieldCheck` AES-256 encryption at rest
- `Key` Access limited to authorized personnel only
- `ArrowsClockwise` Regular security audits
- `Warning` No third-party advertising trackers on the product

---

### Section 4: Your rights

**Headline (H2, Fraunces):**
"You have the right to everything."

- Right to access: see everything Pravnya holds about you at any time
- Right to correction: update or correct any information
- Right to deletion: delete your account and all data permanently
- Right to portability: export your complete record in a portable format
- Right to restriction: limit how your data is used while keeping your account

---

### Footer of privacy page

"This page explains our privacy philosophy in plain language. For the complete legal policy, see our [Privacy Policy →]."

---

## 28. FAQ page

**SEO title:** Pravnya FAQ — Questions parents ask

**SEO description:** Answers to common questions about what Pravnya does, how the AI works, who it's for, and how your data is protected.

---

### Hero

**Headline (H2, Fraunces, centered):**
"Questions parents ask."

**Sub (Body M, centered):** "If you don't find your answer here, contact us. We respond to every message."

---

### FAQ categories and questions

**About Pravnya**

Q: Is Pravnya only for children with special needs or developmental conditions?
A: Pravnya is for any family that wants a better way to understand and document their child's development. Most of our families are navigating developmental differences, learning needs, or complex care systems. But the product is built for any parent who pays close attention to their child's development and wants a better record of what they've seen.

Q: At what age is Pravnya most useful?
A: Most families begin using Pravnya between ages 1 and 8 — when developmental observation is most active and professional relationships are most complex. That said, the record is valuable at any age, and many families start later and backfill what they remember from earlier.

Q: Is Pravnya available in India only?
A: Pravnya launched in India and is available globally via the web app. Mobile apps are available for iOS and Android worldwide. We are actively working on language support beyond English and Hindi.

**The record**

Q: What can I add to my Pravnya record?
A: Anything relevant to your child's development: written observations, voice notes, photos, PDF reports, milestone markers, open questions, and professional visit notes.

Q: Is there a limit on how much I can add?
A: The free plan includes up to 30 media uploads. The premium plan has no limits.

Q: Can I import records I already have — clinical reports, previous notes?
A: Yes. You can upload PDFs, documents, and images directly to your record. Many families start by importing existing assessments and then adding new observations forward from there.

**The AI**

Q: Does Pravnya AI give medical advice?
A: No. Pravnya AI helps you understand what you've observed in your own record. It does not assess, diagnose, or give clinical recommendations. Every AI output is explicitly traced to observations in your record — it does not draw on general population databases to make claims about your child.

Q: How does the AI know what's in my record?
A: The AI reads only your record — the observations, notes, and documents you have added. It does not have access to external databases, general developmental benchmarks (for comparison purposes), or any other family's record.

Q: Can I correct what the AI says?
A: Yes. Always. Every AI output in Pravnya can be edited, dismissed, or flagged by you. You are in control. The AI is a lens, not an authority.

**Privacy and data**

Q: Does Pravnya sell my data?
A: No. Never. Your data is not a commercial asset for us.

Q: Does Pravnya use my record to train AI?
A: No. AI models in Pravnya are trained on general datasets, not on individual family records.

Q: Can I delete my account?
A: Yes. Your account and all associated data are permanently deleted within 30 days of your request.

**Professionals**

Q: Can my child's therapist or doctor use Pravnya?
A: The professional integration features are in active development. Currently, families can share preparation summaries with professionals via export. A dedicated professional access feature is coming in 2026.

Q: Can I share my record with my child's school?
A: Yes. You can export your preparation summaries as PDF and share them with any party you choose. School-specific integration is on the roadmap.

---

### CTA at bottom

"Still have a question?"

[Contact us →] — Email / chat link

---

## 29. Download page

**SEO title:** Download Pravnya — iOS and Android

**SEO description:** Download Pravnya for iPhone, iPad, and Android. Free to start. Available worldwide.

---

### Hero

**Headline (H2, Fraunces, centered):**
"Take your child's record everywhere."

**Sub (Body L, centered):**
"Available for iPhone, iPad, and Android. Free to start."

---

### Download cards

**Two-card layout, side by side:**

**iOS card (Dark Surface background):**
[Apple logo, white]
"For iPhone and iPad"
"iOS 15 or later · 47 MB"
[Download on the App Store badge]
[QR code — desktop only]

**Android card (Dark Surface background):**
[Google Play logo, white]
"For Android phones and tablets"
"Android 10 or later · 52 MB"
[Get it on Google Play badge]
[QR code — desktop only]

**Below cards:**
"Use Pravnya on the web: [Start on web →]"

---

### What's on the app (3 feature highlights)

Icon cards, horizontal, with caption:

`Device` "Full access — every feature, on any device."
`WifiSlash` "Offline capture — add observations even without connection."
`Notification` "Gentle reminders — optional prompts to capture if you'd like them."

---

### CTA

"Ready?"

"Your child's story deserves a record this good."

[Download for iOS] [Download for Android]

---

## 30. Contact page

**SEO title:** Contact Pravnya — We respond to every message

**SEO description:** Contact the Pravnya team with questions, feedback, or support requests. We respond personally to every message.

---

### Hero

**Headline (H2, Fraunces, centered):**
"We respond to every message personally."

**Sub (Body M, centered):**
"Questions, feedback, support requests — we read them all."

---

### Contact form

**Fields:**
- Your name (required)
- Email address (required)
- "I am a" — dropdown: Parent / Therapist or professional / School or centre / Investor / Journalist / Other
- Subject — short text
- Message — large text area
- [Send message →] primary button

**Form notes:**
- No phone number field (reduces friction; parents at sensitive moments don't want to give phone numbers)
- Subject field pre-fills based on referring page (e.g., from FAQ: "Question about...")
- After submission: inline confirmation, no redirect. "Thank you. We'll be in touch within one working day."

**Response time commitment:**
"We aim to respond within one working day. For urgent matters — particularly anything related to your data or account — we prioritize those first."

**Separate email addresses displayed (for non-form contact):**
- Support: support@pravnya.com
- Press: press@pravnya.com
- Partnerships: partnerships@pravnya.com

---

## 31. Blog page (future)

**Status:** Architecture design only. Not live at launch.

**Purpose:** Long-form, expert content that parents navigating development will find genuinely useful. Not promotional. Not keyword-stuffed. Written at the standard of the founding documents.

**Content pillars:**

1. **Understanding your child** — Development explained without comparison anxiety.
2. **Navigating the system** — How to get the most from therapy, school IEPs, specialist appointments.
3. **The record** — How to observe, what to notice, how longitudinal records change professional conversations.
4. **Privacy and data** — For parents who want to understand how family technology works.
5. **Ask Pravnya AI** — How AI features work and what they can and cannot do.

**Editorial standard:**
Every post is written or reviewed by someone who knows the subject. No AI-generated articles without expert review. No sensationalism. No comparison anxiety. Every piece makes the reader feel more capable, not more worried.

**Post page design:**
- Narrow width (720px) — optimal reading line length
- Fraunces for display and pull quotes
- Plus Jakarta Sans for body
- Author bio with photo at bottom
- No social share bars mid-article (placed only at article end)
- Related posts (3 cards) at bottom
- CTA: "Build your child's record" in Forest Green Subtle banner at bottom

---

## 32. Careers page (future)

**Status:** Architecture only.

**Headline (H2, Fraunces, centered):**
"We're building something that matters. Join us if that's what you're looking for."

**Body:**
"Pravnya is an early-stage company building a long-term product. We are not in a hurry to grow headcount. We are in a deliberate pursuit of people who are as careful as the product requires.

If you are interested in responsible AI, family technology, or products where trust is genuinely the foundation — we would like to hear from you."

**Open roles section:** (list with title, team, and brief description)

**Values to show (not just list) in this page:**
- Show the documentation suite — link to the Vision Handbook and Manifesto
- Show what "principled build" means in practice
- Show what the team expects from itself

---

# Part 5 — Implementation references

---

## 33. Screenshot capture guide

Screenshots shown in the product appear at consistent quality and represent the product honestly.
These are not aspirational screenshots of features not yet built. They are the actual product.

### Required screenshots (Tier 1 priority)

**Screenshot 1: Capture screen**
- Screen: Main capture interface
- Key elements visible: Text input with placeholder text, four capture mode icons (Voice / Photo / Document / Milestone), a recent entry visible below the input in partial view
- Device: iPhone 15 Pro (Natural Titanium)
- Status bar: Time set to 10:30, full battery, no carrier name
- Light mode
- Caption for site: "Capture anything. Nothing gets lost."

**Screenshot 2: Record timeline**
- Screen: Timeline view, 3 months of entries visible
- Key elements: 8-10 entries visible across different dates. Color-coded category tags. At least one milestone entry visible (gold tag). Search bar at top.
- Date range shown: March – May (non-current; avoid showing real "today" dates)
- No personally identifiable content. Child's name placeholder: "Arya" or similar warm name.
- Caption: "Your child's story, organized."

**Screenshot 3: AI summary / Understand screen**
- Screen: Monthly review summary
- Key elements: A 3-section summary. One AI insight card visible with evidence note showing "Based on 8 observations." A progress indicator in the header.
- Critical: The AI summary must show appropriate epistemic humility — it should include one item marked "Limited evidence (2 observations) — capture more to confirm" to demonstrate honest AI.
- Caption: "See what's changed. Honestly."

**Screenshot 4: Preparation summary**
- Screen: Appointment preparation document
- Key elements: Professional's name (placeholder), appointment date, three sections (What we observed / What changed / Questions to ask). Content is specific and readable.
- Caption: "Five minutes. Every detail ready."

**Screenshot 5: Sharing permissions**
- Screen: Share flow
- Key elements: A professional's name and specialty visible. Time period selected. Domain toggles visible with some selected and some not. "Preview" section showing what the professional will see.
- Caption: "You control what they see."

### Device frames and specifications

Use standard iOS and Android frames from the official Apple and Google design resources.
Frame color: match the screen's background (light frame for light screen, dark for dark).
Angle: straight-on (0°) for most. 10° tilt (perspective) for hero mockups only.
Retina: export at 3× for all production assets.

---

## 34. SEO and metadata master table

| Page | Title | Description | Primary keywords |
| --- | --- | --- | --- |
| Home | Pravnya — Child development records for parents who are paying attention | Capture, organize, and understand your child's developmental story. One trusted record. | child development app, developmental record, parent observation app |
| Features | Pravnya Features — Capture, organize, understand | Five features that together help parents build a complete longitudinal developmental record | child development features, observation tool, appointment preparation |
| How It Works | How Pravnya Works — Five steps | Learn how Pravnya helps parents capture, organize, review, prepare, and share | how to organize child development records, parent record app |
| Why Pravnya | Why Pravnya — Philosophy | Why we built Pravnya, what we believe, and why responsible AI matters | responsible AI child development, parent confidence gap |
| Ask Pravnya AI | Ask Pravnya AI — Honest AI for development | Evidence-based AI that works from your record, not from population databases | AI child development, honest AI, development patterns |
| Growth | Child development progress with Pravnya | See your child's progress within their own story — not measured against other children | child progress tracker, longitudinal development, child growth |
| Journey | The parent journey through child development | Pravnya supports parents at every stage of navigating their child's developmental journey | parent journey, developmental support, child development stages |
| About | About Pravnya | Why we built it, what we believe, and who we are | about Pravnya, child development company |
| Privacy | Privacy — Your child's story is yours | How Pravnya protects your data and why privacy is foundational to everything we build | child data privacy, family data, developmental record security |
| FAQ | Pravnya FAQ — Questions parents ask | Answers to common questions about Pravnya, the AI, data privacy, and professional use | Pravnya FAQ, how does Pravnya work |
| Download | Download Pravnya | Available for iOS and Android | download Pravnya, child development app download |
| Contact | Contact Pravnya | Get in touch with the team | contact Pravnya, Pravnya support |

**Structured data:**
- Home: Organization, WebSite, SiteNavigationElement
- App pages: MobileApplication with aggregateRating
- Blog posts: Article with author, datePublished
- FAQ page: FAQPage with MainEntity entries

**Open Graph:**
All pages carry OG tags with:
- og:title (matches page title)
- og:description (matches meta description)
- og:image (1200×630 brand image — warm photography with Pravnya wordmark overlay)
- og:type: website (or article for blog)

**Twitter Card:**
All pages use summary_large_image type.

---

## 35. Implementation notes for Codex

This section is addressed directly to Codex (the implementation agent). It translates the
design system into technical specifications and preferred implementation approaches.

### Tech stack preferences

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS with a custom theme extending the color and typography system above
**Fonts:** Google Fonts via `next/font` (Fraunces variable, Plus Jakarta Sans, JetBrains Mono)
**Icons:** `@phosphor-icons/react` (primary), `lucide-react` (secondary/compact)
**Animations:** Framer Motion for page-level and component animations; CSS transitions for hover states
**Images:** `next/image` with WebP format, explicit width/height, `priority` on hero images

### Design token implementation

The color palette above should be implemented as CSS custom properties and as a Tailwind theme extension:

```
// tailwind.config.ts (structure only — not production code)
theme: {
  extend: {
    colors: {
      forest: {
        DEFAULT: '#2C5F3E',
        light: '#3D7A52',
        dark: '#1A3D27',
        subtle: '#EBF3EE',
      },
      sage: {
        DEFAULT: '#7A9E8A',
        light: '#9AB5A5',
        subtle: '#F0F5F2',
      },
      gold: {
        DEFAULT: '#B8935A',
        light: '#CBA876',
        subtle: '#FAF3E8',
      },
      background: '#F7F4EF',
      surface: '#FFFFFF',
      'surface-raised': '#F0EDE6',
      'dark-surface': '#1C2B22',
    }
  }
}
```

### Component implementation priorities

**Phase 1 (launch):**
Navigation, Hero, Feature cards, CTA banner, FAQ accordion, Footer,
Testimonials, Download cards, Privacy declarations, Statistics bar

**Phase 2 (after launch):**
AI explanation cards, Journey timeline, Comparison table, Screenshot mockups,
Blog post template, FAQ search

**Phase 3 (with AI features):**
Ask Pravnya AI interactive demo, Growth visualization, Record timeline mockup

### Performance requirements

- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Images: lazy-loaded (except hero, which uses `priority`)
- Fonts: preloaded in document head; `display: swap`
- Third-party scripts: deferred; no blocking scripts
- Target Lighthouse score: 90+ Performance, 100 Accessibility, 90+ SEO

### Analytics implementation

- Plausible Analytics (privacy-respecting, no cookies required for basic analytics)
- No Google Analytics by default (aligns with privacy commitments)
- Event tracking for: CTA clicks, download badge clicks, FAQ accordion opens, contact form submissions
- No session recording by default (aligns with privacy values)

### Cookie policy

Pravnya should use zero tracking cookies on the marketing site.
Any analytics used should be cookieless (Plausible, Fathom, or equivalent).
The cookie banner, if required for the product app, should not appear on the marketing site.

### Accessibility implementation checklist

- [ ] Skip-to-content link, visible on focus, positioned top-left
- [ ] All images have alt text (decorative: `alt=""`)
- [ ] Heading hierarchy validated (no skipped levels)
- [ ] All buttons have accessible labels (icon-only buttons: aria-label)
- [ ] Focus rings on all interactive elements: `outline: 2px solid #2C5F3E; outline-offset: 2px`
- [ ] prefers-reduced-motion: all Framer Motion animations respect this
- [ ] prefers-color-scheme: the site is light-mode only for launch (dark mode pending)
- [ ] Tested with VoiceOver (Mac) and NVDA (Windows) before launch

### Content management

Marketing page content (headlines, body copy, CTAs) should be managed via a headless CMS
to allow non-technical team members to update copy. Recommended: Sanity or Contentlayer.

Structured content types required:
- Page (title, slug, sections array)
- Feature (icon, title, body, screenshot reference)
- Testimonial (quote, name, context, date of collection)
- FAQ (question, answer, category)
- Blog post (title, author, date, body, category, SEO metadata)

### Forms

Contact form: submit to a form backend (Formspree or equivalent) with spam protection.
No third-party form builder embeds that add external JS.
Confirmation: inline, not redirect.

---

## Appendix A: Component quick-reference

| Component | Background | Border | Radius | Shadow | Font |
| --- | --- | --- | --- | --- | --- |
| Feature card | `#FFFFFF` | `#E4DDD0` 1px | 16px | Shadow S → M | Plus Jakarta Sans |
| Testimonial card | `#F0EDE6` | None | 16px | None | Fraunces (quote) |
| AI explanation card | `#FFFFFF` | `#E4DDD0` 1px + Forest Green left | 12px | Shadow S | Plus Jakarta Sans |
| CTA banner (light) | `#EBF3EE` | None | 0px | None | Fraunces (headline) |
| CTA banner (dark) | `#1C2B22` | None | 0px | None | Fraunces (headline) |
| Download card | `#1C2B22` | None | 24px | Shadow L | Plus Jakarta Sans |
| FAQ item | None | `#E4DDD0` bottom | 0px | None | Plus Jakarta Sans |
| Statistics bar | `#FFFFFF` | `#E4DDD0` top/bottom | 0px | None | Fraunces (number) |
| Primary button | `#2C5F3E` | None | 9999px | Shadow Green hover | Plus Jakarta Sans 600 |
| Secondary button | Transparent | `#2C5F3E` 1.5px | 9999px | None | Plus Jakarta Sans 600 |

---

## Appendix B: Copy tone test

Before publishing any copy to the Pravnya website, apply this four-question test:

**1. Does it acknowledge the emotional reality of the parent's situation?**
If the copy describes what the product does without acknowledging why the parent needs it,
it lacks warmth. Add the recognition before the solution.

**2. Is every AI claim traceable to a specific product behavior?**
No AI claim should be vague or impressionistic. "AI that understands your child" fails.
"AI that surfaces patterns from your own observations" passes.

**3. Would a worried parent at midnight find this comforting or alarming?**
If a tired, concerned parent reads this at their most vulnerable moment, does it reduce
or increase anxiety? Any content that could increase anxiety without providing a clear
next step should be revised.

**4. Does it sound like a person or a product?**
Read the copy aloud. If it sounds like a marketing template, revise. If it sounds like
a thoughtful person explaining something they care about, publish.

---

## Appendix C: Brand elements summary

| Element | Specification |
| --- | --- |
| Primary wordmark | "Pravnya" in Fraunces 600, Forest Green Dark `#1A3D27` |
| Wordmark on dark | White |
| Tagline | "The child development companion families trust." |
| Brand colors | Forest Green `#2C5F3E`, Sage `#7A9E8A`, Gold `#B8935A` |
| Background | `#F7F4EF` |
| Body font | Plus Jakarta Sans |
| Display font | Fraunces |
| Icon library | Phosphor (primary), Lucide (secondary) |
| Photo style | Warm, domestic, natural light, no clinical imagery |
| Illustration style | Organic, rounded, brand palette, single-idea per illustration |
| Animation feel | Calm, purposeful, no looping, no bounce |
| Accessibility | WCAG 2.1 AA minimum, AAA for body text |

---

*Pravnix Labs — Internal Reference — July 2026*

*This document governs all Pravnya public website design and content decisions.*
*Questions or proposed changes should go through the founding team before implementation.*

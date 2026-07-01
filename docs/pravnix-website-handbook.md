---
title: Pravnix.ai Website Design & Content Handbook
subtitle: The definitive design blueprint for the Pravnix Labs public website
owner: Pravnix Labs
status: v1.0 — Approved
version: v1.0
audience: Design, Engineering, Content, Brand — Internal Reference
last_updated: 2026-07-01
next_review: 2027-01-01
---

# Pravnix.ai Website Design & Content Handbook

### The Definitive Design Blueprint for the Pravnix Labs Public Website

Pravnix Labs — Internal Reference

July 2026

---

## How to use this document

This handbook governs every design and content decision on `pravnix.ai`. It covers the
company website — not the Pravnya product site (`pravnya.com`), which has its own handbook
at `pravnya-marketing/docs/website-design-handbook.md`.

**The fundamental distinction between the two sites:**

| `pravnya.com` | `pravnix.ai` |
| --- | --- |
| Parent-facing | Company-facing |
| Warm, calm, emotional | Technical, precise, credible |
| Light background | Dark background |
| Fraunces as hero font | Plus Jakarta Sans as primary headline |
| Consumer product | Institutional presence |
| Conversion goal: app signup | Conversion goal: trust, contact, talent |

Every decision in this handbook serves that distinction. When a design choice feels too warm
or too consumer-facing, return to the table above and recalibrate.

All terminology follows Appendix A of the Vision Handbook. Philosophical claims trace to the
Manifesto and Mission Handbook. Market claims trace to the Investor Narrative.

---

## Table of contents

**Part 1 — Brand foundation**
1. Positioning and territory
2. Brand personality
3. Voice and tone
4. Differentiation map

**Part 2 — Design system**
5. Color palette
6. Typography
7. Spacing and layout
8. Border radius and elevation
9. Component library
10. Icon system
11. Imagery and photography
12. Animation guidelines
13. Accessibility standards

**Part 3 — Site architecture**
14. Site map
15. Navigation
16. Footer

**Part 4 — Page designs**
17. Home
18. About
19. Products
20. Pravnya (product page)
21. AI Engineering
22. Research & Innovation
23. Responsible AI
24. Careers
25. Contact
26. Blog (placeholder)

**Part 5 — Implementation**
27. Implementation notes for Codex
28. SEO master table
29. Component quick reference

---

# Part 1 — Brand Foundation

---

## 1. Positioning and territory

### The one-sentence brief

Pravnix Labs builds responsible AI products for meaningful human problems.

### What this means — and what it does not mean

"Responsible AI" is claimed by many companies. On `pravnix.ai`, this claim must be grounded,
specific, and demonstrable — not rhetorical. The difference between Pravnix and a company that
puts "responsible AI" on its website as a badge:

- Pravnix has published specific, binding AI principles (nine permanent commitments in the
  Vision Handbook) that govern every product
- Pravnix has demonstrated those principles through product decisions with real commercial cost
  (choosing trustworthy AI outputs over impressive ones)
- Pravnix has built the governance infrastructure — not just the language — that makes the
  commitment operational

"Meaningful human problems" is also specific. Pravnix does not build AI for advertising, content
generation, or productivity trivia. It builds for domains where the stakes of getting AI wrong are
high — child development, family wellbeing, longitudinal records of personal lives.

### The positioning territory

Pravnix.ai occupies a distinct space: a technical AI product company with an unusually serious
commitment to what AI should and should not do. The closest reference points:

| Reference | What we share |
| --- | --- |
| Anthropic | Serious about AI safety and philosophy; research-grade credibility |
| Stripe | Technical precision, exceptional documentation, product-led growth |
| Linear | Dark mode premium, crisp technical communication, founder-led voice |
| Notion | Thoughtful product philosophy made public; the company IS the product philosophy |
| Vercel | Developer-facing premium; technical without being inaccessible |

We share none of these companies' specific markets. We share their register: serious, technical,
precise, founder-led, with a visible philosophy that shapes the product.

We do not look like:
- McKinsey Digital (consultancy)
- TCS iON (outsourcing)
- Any company whose homepage leads with "AI-powered solutions for enterprise"
- Any company whose homepage includes the word "leverage" more than zero times

### Who visits pravnix.ai

**Primary:**
- Technical evaluators — engineers, CTOs, product leads considering partnership or integration
- Investors — evaluating the company behind Pravnya
- Press and researchers — understanding Pravnix's AI philosophy and approach
- Future employees — deciding whether this is a company worth joining

**Secondary:**
- Partner organizations — clinics, schools, institutional partners evaluating Pravnya
- Grant committees — public health, education, AI ethics funders
- Domain experts — child development professionals, AI researchers

**Tertiary:**
- Families who clicked "About the company" from Pravnya.com — should feel reassured,
  not confused by a different brand register

---

## 2. Brand personality

Five words define Pravnix Labs' character:

### Precise

Every claim on this site is specific and defensible. We do not use vague language where
specific language is possible. "We take AI seriously" fails. "We have published nine permanent
AI principles that govern every output in every product, permanently" is precise.

In practice: fewer words, more specific words. Numbered principles. Documented commitments.
Technical language used accurately (not as decoration).

### Credible

Credibility is built through consistency between what is said and what is done.
Pravnix.ai never claims something the product does not demonstrate. If a principle is
stated on the Responsible AI page, there is a product feature that makes it operational.

In practice: links between claims and evidence. Case study from Pravnya. Transparency
about what is still being figured out.

### Serious

Not severe. Not unfriendly. But serious in the sense that we are building something that
handles sensitive human information and we are not casual about it.

In practice: no playful microcopy on serious topics. No gamification language. No "magical"
or "game-changing." The language treats the reader as an intelligent adult.

### Transparent

Pravnix publishes what it believes. Not just the product decisions, but the reasoning behind
them. The Vision Handbook, Founder Narrative, Mission Handbook, and Manifesto are referenced
publicly. The company's thinking is not proprietary.

In practice: the Responsible AI page is genuinely informative (not marketing). The About page
acknowledges uncertainty. The AI Engineering page explains limitations alongside capabilities.

### Enduring

This company is building for decades. The website should look like it will still be right in
five years — not like it caught a design trend.

In practice: dark mode done well ages better than light mode done trendy. Classic typography
choices. No animated gradients, no glassmorphism, no neon highlights.

---

## 3. Voice and tone

### The voice (constant)

Pravnix Labs speaks like a technical founder who has thought carefully about a hard problem
and arrived at specific conclusions. This voice:

- Is comfortable with complexity but does not hide behind it
- Makes claims and defends them with evidence
- Does not use buzzwords — not because it's fashionable to avoid them, but because
  precise language is more honest
- Acknowledges the difficulty of the domain
- Does not oversell, but does not undersell either

### Tone by page

| Page | Tone | Example |
| --- | --- | --- |
| Home | Authoritative, restrained | "Responsible AI for meaningful human problems." |
| About | Personal, specific | "We built Pravnix because we experienced the problem ourselves." |
| Products | Technical, confident | "Pravnya uses longitudinal intelligence — AI that improves as the record grows." |
| Pravnya (on .ai) | Credible, precise | "Built on nine permanent AI principles. Not guidelines." |
| AI Engineering | Technical, expert | "We separate model capability from model appropriateness." |
| Responsible AI | Philosophical, grounded | "We chose trustworthy over impressive before it was expected." |
| Careers | Direct, honest | "We are small and careful. We are looking for the same." |
| Contact | Efficient, warm | "We respond personally to every message." |

### Writing rules

- Sentences: short. One idea. The next sentence builds on it, not away from it.
- Paragraphs: 2–3 sentences on this site. This is not the Vision Handbook.
- Headings: sentence case. Never ALL CAPS except in label/eyebrow contexts.
- Numbers: prefer concrete numbers over vague quantities.
  "Nine permanent principles" beats "a set of principles."
- Jargon: only when the audience expects it and it adds precision.
  "Longitudinal intelligence" is defined and specific. "Next-gen AI" is neither.
- Superlatives: none. No "leading," "cutting-edge," "world-class," "best-in-class."

---

## 4. Differentiation map

How Pravnix.ai differs from the companies it might be confused with:

| Comparison | The difference |
| --- | --- |
| Generic AI company | We build specific products for specific problems. Not platforms. Not generic APIs. |
| AI consultancy | We do not do client work. We build our own products. |
| Research lab | We ship products used by real families. Research informs product; it is not the product. |
| Enterprise AI vendor | We are not selling a platform or an SDK. We are building a companion for families. |
| EdTech company | We are not in education technology. We serve child development broadly. |
| Healthtech startup | We are explicitly not a clinical or healthcare tool. |

---

# Part 2 — Design System

---

## 5. Color palette

### Design intent

Pravnix.ai is dark-mode primary. The palette is rooted in the same brand DNA as
Pravnya.com — deep forest greens, gold — but shifted into a technical register: deep
backgrounds, precise contrast, deliberate use of color as signal rather than warmth.

The design reads like: a well-configured terminal with good taste. Not a consumer app.
Not a generic SaaS dark theme. A company that has thought about this.

### Brand connection

The Pravnya brand token `brand: #2E7D5B` is the parent brand green. Pravnix.ai uses
this as the primary accent — connecting the two sites visually while the dark backgrounds
and typography diverge them in register.

---

### Background and surface

```
Background            #0E1410
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Near-black with a green undertone. Never pure black.
The undertone creates a subtle brand connection to
the forest green palette. Main page background.

Surface               #141D17
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slightly lighter dark. Used for cards, panels,
navigation backgrounds, and section blocks.

Surface Raised        #1C2820
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Elevated surface. Hover states for cards, focused
elements, inner panels within a surface.

Surface Inset         #0B1009
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slightly darker inset. Code blocks, input fields
on dark backgrounds, sunken content areas.
```

### Primary green (brand connection)

```
Forest               #2E7D5B    (matches brand token: brand)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary accent. CTAs, active states, key highlights,
progress indicators, link hover, borders on focus.

Forest Bright        #3D9E73
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hover state for primary buttons and links.
Brighter than Forest — makes hover feel responsive.

Forest Dim           #1C5A3D    (matches brand token: brandDark)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pressed / active state. Section backgrounds with
a tinted dark green feel.

Forest Subtle        #162417
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Very dark tinted background. Used for highlighted
sections, active nav states, subtle differentiators.

Forest Glow          rgba(46, 125, 91, 0.18)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Glow for primary CTA buttons on hover. Box shadow.
```

### Secondary — sage

```
Sage                 #7A9E8A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Supporting color for secondary UI elements,
decorative borders, subtle section dividers.

Sage Dim             #4A6A58
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lower-contrast sage. Used for less-prominent labels
and tertiary navigation items.
```

### Accent — muted gold

```
Gold                 #C49A5A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Premium accent. Used very sparingly: milestone markers,
pull-quote borders, key principle callouts, the Pravnix
wordmark when on a very dark surface.

Gold Dim             #8A6A35
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Darker gold. Subtle decorative elements, subtext
below a gold-accented heading.
```

### Text

```
Text Primary         #F0EDE6    (warm off-white; never pure #FFFFFF)
Text Secondary       #9AB5A5    (muted sage-green; body text on dark)
Text Tertiary        #5A7A6A    (low-emphasis labels, metadata)
Text Code            #B8D4C4    (monospace text on dark surface)
Text Link            #2E7D5B    (Forest green)
Text Link Hover      #3D9E73    (Forest Bright)
Text On Forest       #FFFFFF    (white text on Forest green buttons)
Text Placeholder     #3A5245    (input placeholder text)
```

### Border

```
Border Default       rgba(255, 255, 255, 0.07)   (subtle card/section dividers)
Border Strong        rgba(255, 255, 255, 0.14)   (input fields, emphasized cards)
Border Accent        rgba(46, 125, 91, 0.35)     (Forest-tinted highlighted borders)
Border Focus         #2E7D5B                     (keyboard focus ring)
```

### Semantic

```
Success              #2E7D5B    (reuses Forest — positive is on-brand)
Success Subtle       rgba(46, 125, 91, 0.12)
Warning              #C49A5A    (reuses Gold)
Warning Subtle       rgba(196, 154, 90, 0.12)
Error                #C0504A
Error Subtle         rgba(192, 80, 74, 0.12)
Info                 #5B8FD5
Info Subtle          rgba(91, 143, 213, 0.12)
```

### Light section variant

Some sections (e.g., major product callouts, Responsible AI philosophy) may use a light
variant for emphasis and contrast within the dark page. Use sparingly — maximum one per page.

```
Light Section Background    #F0EDE6    (same as Pravnya.com background)
Light Section Text          #1A3328    (brand text dark)
Light Section Border        #C8BFB0
```

This light section variant is the visual connection to Pravnya.com. It reminds the reader
that Pravnix and Pravnya share DNA, even as the sites have different registers.

---

## 6. Typography

### Font selection

**Primary display: Fraunces** (Google Fonts, variable)
Used more sparingly than on Pravnya.com. On Pravnix.ai, Fraunces is reserved for: page
hero headlines, key philosophical declarations, pull quotes from the Manifesto. It signals
the company's humanist soul beneath the technical surface.

**Primary UI / headlines: Plus Jakarta Sans** (Google Fonts)
The primary headline font on Pravnix.ai (reversed from Pravnya.com). At 600–700 weight,
Plus Jakarta Sans reads as technical and precise — like a company that built something
rather than wrote about something.

**Monospace: JetBrains Mono** (Google Fonts)
More prominent on Pravnix.ai than on Pravnya.com. Used for: code samples, principle
declarations in the Responsible AI page, AI output examples, technical specs.

### Type scale

| Name | Size | Line Height | Letter Spacing | Font | Weight |
| --- | --- | --- | --- | --- | --- |
| Display XL | 68px | 76px | -2px | Fraunces | 500 |
| Display L | 52px | 60px | -1.5px | Fraunces | 500 |
| Display M | 40px | 50px | -1px | Fraunces | 500 |
| H1 | 38px | 48px | -0.5px | Plus Jakarta Sans | 700 |
| H2 | 30px | 40px | -0.3px | Plus Jakarta Sans | 700 |
| H3 | 24px | 34px | 0px | Plus Jakarta Sans | 600 |
| H4 | 18px | 28px | 0px | Plus Jakarta Sans | 600 |
| Body L | 18px | 30px | 0px | Plus Jakarta Sans | 400 |
| Body M | 16px | 26px | 0px | Plus Jakarta Sans | 400 |
| Body S | 14px | 22px | 0.1px | Plus Jakarta Sans | 400 |
| Caption | 12px | 18px | 0.2px | Plus Jakarta Sans | 400 |
| Label | 12px | 16px | 0.8px | Plus Jakarta Sans | 600 |
| Mono L | 16px | 26px | 0px | JetBrains Mono | 400 |
| Mono M | 14px | 24px | 0px | JetBrains Mono | 400 |
| Button | 14px | 20px | 0.3px | Plus Jakarta Sans | 600 |

### On-brand typographic moments

**Principle declarations** (Responsible AI page, About beliefs section):
Use JetBrains Mono at 14px, Text Secondary color. Principle number in Forest green.
Creates a "documented commitment" aesthetic — like reading a changelog or a spec.

```
01  AI explains its reasoning.
02  AI shows its evidence.
03  AI admits uncertainty.
```

**Pull quotes from the Manifesto:**
Use Fraunces at Display M, Text Primary, with a 3px Forest green left border.
Maximum one per page. This is the warmth that lives inside the technical site.

**Hero headline pairing:**
First line in H1 or Display (Plus Jakarta Sans 700 or Fraunces 500), followed by
a second line in Body L (Plus Jakarta Sans 400, Text Secondary). This creates the
"statement + grounding" structure that is the primary voice of the site.

---

## 7. Spacing and layout

### Base unit: 4px

Same base as Pravnya.com. Brand consistency beneath different visual registers.

### Scale

Identical to Pravnya.com handbook for consistency across the brand system.
Key values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px.

### Layout grid

Desktop: 12-column, 80px outer margins, 24px gutters, 1280px max.
Tablet: 8-column, 40px outer margins, 20px gutters.
Mobile: 4-column, 20px outer margins, 16px gutters.

### Container widths

| Container | Width | Use |
| --- | --- | --- |
| Full | 1280px | Hero sections, full-bleed dark backgrounds |
| Standard | 1040px | Most page content |
| Narrow | 680px | Body text, principle lists, philosophy sections |
| Ultra-narrow | 520px | Contact forms, confirmation pages |

### Section rhythm (desktop)

A standard page section: 96px top padding, 96px bottom padding.
Hero sections: 128px top, 80px bottom (to the first section).
Footer: 64px top padding.

---

## 8. Border radius and elevation

### Border radius scale

Identical tokens to Pravnya.com. On dark backgrounds, the visual effect of radius feels
slightly less prominent — err toward radius-md (12px) over radius-lg (16px) to maintain
the crisp technical feel.

| Token | Value | Primary use on Pravnix.ai |
| --- | --- | --- |
| radius-xs | 4px | Tags, code inline |
| radius-sm | 6px | Small buttons |
| radius-md | 10px | Cards (preferred on dark) |
| radius-lg | 14px | Feature panels |
| radius-xl | 20px | Large content cards |
| radius-full | 9999px | Pill buttons, avatars |

### Shadow system (dark mode adapted)

On dark backgrounds, traditional box shadows are invisible. Use glow effects instead.

```
Glow XS:    0 0 0 1px rgba(255, 255, 255, 0.04)
            (subtle card border replacement)

Glow S:     0 0 0 1px rgba(255, 255, 255, 0.06),
            0 2px 8px rgba(0, 0, 0, 0.40)
            (card default — lifts from background)

Glow M:     0 0 0 1px rgba(255, 255, 255, 0.08),
            0 4px 20px rgba(0, 0, 0, 0.50)
            (card hover, focused elements)

Glow Forest: 0 0 0 1px rgba(46, 125, 91, 0.40),
             0 0 20px rgba(46, 125, 91, 0.15)
             (primary CTA hover glow, focus ring on green elements)

Glow Gold:  0 0 0 1px rgba(196, 154, 90, 0.35),
            0 0 12px rgba(196, 154, 90, 0.12)
            (gold-accented elements on hover)
```

---

## 9. Component library

### 9.1 Navigation

**Desktop navigation**

```
[Pravnix Labs wordmark]   Products   About   Responsible AI   Careers
                                                    [Contact →]
```

- Background: `#141D17` (Surface) with `border-bottom: 1px solid Border Default`
- Transparent over hero, transitions to Surface after 60px scroll
- Height: 60px
- Wordmark: "Pravnix Labs" — Plus Jakarta Sans 600, 18px, Text Primary. The wordmark
  is the company name, not a logomark. Simple and precise.
- Eyebrow sub-text under wordmark (optional): `PRAVNIX LABS` in Label style, Sage Dim,
  letter-spacing 0.8px — if a wordmark image is not ready
- Nav links: Plus Jakarta Sans 500, 14px, Text Secondary; hover Text Primary
- "Contact →": Forest green pill button (see primary button spec)

**Mobile navigation (hamburger)**
- Full-screen menu: Background `#0E1410` (main background)
- Large stacked links: H2, Plus Jakarta Sans 700, Text Primary
- Forest green hairline separator between items
- "Contact" as a full-width primary button at bottom

### 9.2 Primary button

```
Background:  Forest #2E7D5B
Text:        #FFFFFF, Button style (Plus Jakarta Sans 600, 14px, 0.3px spacing)
Padding:     10px 22px
Radius:      radius-full (pill)
Transition:  background 180ms, box-shadow 180ms
Hover:       Forest Bright #3D9E73 + Glow Forest box-shadow
Active:      Forest Dim #1C5A3D
Disabled:    opacity 40%, no hover effects
```

### 9.3 Secondary button

```
Background:  transparent
Border:      1px solid rgba(46, 125, 91, 0.50)
Text:        Text Secondary, Button style
Padding:     10px 22px
Radius:      radius-full
Hover:       Border becomes Forest, text becomes Text Primary
```

### 9.4 Ghost button (text link style)

```
No background, no border
Text:        Text Secondary, 14px, underline on hover
Arrow icon:  Phosphor ArrowRight 14px, Forest green, appears on hover
Transition:  color 150ms, opacity 150ms
```

### 9.5 Feature / product card

```
Background:  Surface #141D17
Border:      Glow S (1px + shadow)
Radius:      radius-md (10px)
Padding:     28px
Transition:  box-shadow 200ms (Glow M on hover), border-color 200ms

Structure:
  [Eyebrow — Label, Forest, uppercase]
  [Title — H3, Plus Jakarta Sans 600]
  [Body — Body M, Text Secondary]
  [Footer — link or tag, Text Tertiary]
```

### 9.6 Principle card (Responsible AI, About)

```
Background:  Surface Inset #0B1009
Border-left: 3px solid Forest #2E7D5B
Radius:      0px left, radius-xs right (asymmetric)
Padding:     20px 24px

Structure:
  [Number — JetBrains Mono 13px, Forest]
  [Principle name — Plus Jakarta Sans 600, 15px, Text Primary]
  [Explanation — Body S, Text Secondary, margin-top 8px]
```

This component has a "documented spec" feel — like a RFC or a changelog entry.

### 9.7 Testimonial / quote block

```
Background:  Forest Subtle #162417
Border:      none (the background differentiates)
Border-left: 3px solid Gold #C49A5A
Radius:      radius-md
Padding:     28px 28px 28px 32px

Structure:
  [Quote — Body L, Fraunces 400 italic, Text Primary]
  [Separator — 20px space]
  [Attribution — Label, Text Secondary]
```

### 9.8 Code / mono block

```
Background:  Surface Inset #0B1009
Border:      Border Default
Radius:      radius-md
Padding:     20px 24px
Font:        JetBrains Mono 14px, Text Code #B8D4C4
Line numbers: Text Tertiary (optional)
```

Used on AI Engineering page to show technical specs, on Responsible AI to display
principle declarations in a specification format.

### 9.9 Stat / metric block

```
Layout: horizontal row of 3–4 stats, full-width
Background: transparent (on dark page background)
Separator: 1px vertical, Border Default

Each stat:
  [Number — Display M, Fraunces 500, Forest #2E7D5B]
  [Label — Body S, Text Secondary]
  [Optional sub — Caption, Text Tertiary]

Border-top / border-bottom: Border Default, 1px
Padding: 48px 0
```

### 9.10 CTA banner (section)

**Dark variant (primary):**
```
Background:  Forest Subtle #162417
Border-top:  1px Border Accent (Forest-tinted)
Headline:    Display M, Fraunces 500, Text Primary, max 600px
Sub:         Body M, Text Secondary
Buttons:     Primary + secondary side by side
Padding:     96px 0
```

**Light variant (for contrast within dark page):**
```
Background:  #F0EDE6 (Pravnya.com background)
Headline:    H2, Plus Jakarta Sans 700, #1A3328
Sub:         Body M, #5A7068 (brand textMuted)
Button:      Forest green primary
```

### 9.11 Tag / badge

```
Background:  Forest Subtle or rgba(46, 125, 91, 0.12)
Border:      Border Accent
Text:        Caption, Forest Bright, letter-spacing 0.5px
Padding:     4px 10px
Radius:      radius-xs
```

Used for: product labels, technology tags, principle category labels.

---

## 10. Icon system

### Primary: Phosphor Icons (Duotone on dark)

Phosphor Duotone is particularly effective on dark backgrounds — the dual-tone effect
creates depth without requiring colored fills. The primary tone inherits Text Secondary;
the secondary tone uses Forest Subtle or rgba values.

**Weight guide:**
- Navigation: Regular (20px, Text Secondary)
- Feature cards: Duotone (32px, primary Text Secondary, secondary Forest)
- Principle icons: Regular (16px, Forest) in the principle number position
- Technical indicators: Light (16px) for metadata and timestamps
- CTA arrows: Regular (14px, Forest, inline with button text)

**Key icons by section:**

| Section | Icons | Notes |
| --- | --- | --- |
| Home — Products | `Package`, `Cube`, `Shapes` | Products and components |
| Home — Philosophy | `Brain`, `ShieldCheck`, `Scales` | Intelligence, safety, ethics |
| AI Engineering | `Cpu`, `Graph`, `Code`, `GitBranch` | Technical infrastructure |
| Research | `Microscope`, `BookOpen`, `Lightbulb` | Discovery and rigor |
| Responsible AI | `ShieldCheck`, `Warning`, `Eye`, `Lock` | Safety and transparency |
| Careers | `Users`, `Handshake`, `Compass` | People and purpose |

### Secondary: Lucide (compact UI)

Lucide for: navigation chevrons, close icons, external links, form field icons.
Size: 14–16px. Color: Text Tertiary.

---

## 11. Imagery and photography

### The rule above all rules

`Pravnix.ai` does not use people-centric photography. This is a company website, not a
product website. The imagery should be abstract, architectural, or environmental — not
stock photos of "diverse team working in modern office."

### Primary imagery directions

**Technical abstraction:**
Close-up photographs of materials with texture and depth — circuit boards without being
cliché, architectural concrete, dark wood grain, paper with handwriting. The subject matter
is secondary; the visual texture and dark/light contrast are primary.

**Environment:**
The physical spaces where careful thinking happens. A desk with a notebook and no
distractions. A window with reflected light. A table with a single document on it.
Nothing posed. Nothing stock.

**Data as visual:**
Abstract representations of longitudinal data — not charts or dashboards, but artistic
interpretations of connected points across time. These are illustrations, not screenshots.

**What we do not use:**
- Stock AI imagery (glowing neural networks, purple holograms, robots)
- Team photos in posed office settings
- Diverse-people-around-a-whiteboard photography
- Any imagery that could appear in a McKinsey consulting slide

### Color treatment

All photography: desaturated 20–30%, cold-to-neutral white balance. The images should
feel like they belong in the same universe as the dark backgrounds — not imported from
a brighter world.

---

## 12. Animation guidelines

### Philosophy (same as Pravnya.com but applied to darker context)

Animation communicates state change. It is never decorative. On a dark-background site,
the temptation to use glowing animations and particle effects is strong. We resist it.

### Animation vocabulary

**Fade in (section reveal):**
`opacity 0 → 1`, 400ms, `ease-out`. No translateY on Pravnix.ai — the vertical
movement reads as too consumer-friendly. Elements arrive in place.

**Glow pulse (primary CTA only):**
A very subtle `box-shadow` pulse on the primary CTA button on the hero section only.
Duration: 3000ms, infinite, very low amplitude. Draws attention without demanding it.
`box-shadow: 0 0 0 0 rgba(46,125,91,0.4) → 0 0 0 8px rgba(46,125,91,0)`.

**Hover lift (cards):**
`border-color` shift from Border Default to Border Accent over 180ms.
No translateY — keep it crisp.

**Number count-up (stat blocks):**
Numbers animate from 0 to final value over 600ms on viewport entry. `ease-out`.
This is the one "dynamic" moment the site allows.

**Line draw (principle list):**
The 3px Forest green left border on principle cards draws down (height 0 → full)
on viewport entry, 400ms, staggered 60ms between items.

**Navigation state:**
Background transitions from transparent to Surface with Border Default over 200ms
as page scrolls past 80px. No movement.

### What we do not animate
- Text (no typewriter)
- Gradient backgrounds (no shifting gradients)
- Particle or constellation effects
- Full-page transitions
- Anything that loops without interaction

---

## 13. Accessibility standards

Same standards as `pravnya.com` handbook. Key dark-mode considerations:

- White text (#F0EDE6) on #0E1410: contrast ratio ~12:1 — exceeds AAA
- Text Secondary (#9AB5A5) on #0E1410: contrast ratio ~5.2:1 — meets AA for body text
- Forest (#2E7D5B) on #0E1410: contrast ratio ~4.6:1 — meets AA for text; do not use
  for body copy below 18px
- All focus rings: `outline: 2px solid #2E7D5B; outline-offset: 3px` (visible on dark)
- `prefers-color-scheme`: the site is dark-mode only at launch (light mode future roadmap)
- `prefers-reduced-motion`: all animations disabled, replaced by instant state changes

---

# Part 3 — Site Architecture

---

## 14. Site map

```
pravnix.ai/
├── /                    Home
├── /about               About
├── /products            Products
│   └── /products/pravnya         Pravnya product page
├── /ai-engineering      AI Engineering
├── /research            Research & Innovation
├── /responsible-ai      Responsible AI
├── /careers             Careers
│   └── /careers/[slug]  Individual role
├── /contact             Contact
└── /blog                Blog (placeholder)
    └── /blog/[slug]     Individual post

Legal:
├── /legal/privacy       Privacy policy
└── /legal/terms         Terms of service
```

### Navigation priority

Tier 1 (primary nav): Products, About, Responsible AI, Careers, Contact
Tier 2 (footer): AI Engineering, Research, Blog, Legal

---

## 15. Navigation

### Desktop

```
[Pravnix Labs]    Products    About    Responsible AI    Careers    [Contact →]
```

Height: 60px. Background transitions from transparent to `#141D17` on scroll.
Border-bottom appears on scroll: `1px solid rgba(255,255,255,0.07)`.

Wordmark size: 18px Plus Jakarta Sans 600, `#F0EDE6`.
Optionally: small `{a}` or geometric logomark to the left if brand mark exists.

"Contact →": Primary pill button, compact: padding 8px 18px.

Products dropdown (on hover/focus):
```
┌─────────────────────────────┐
│ Pravnya                     │
│ Child development companion │
│                             │
│ More products in development│
└─────────────────────────────┘
```
Background: `#141D17`, border: Border Default, radius-md, Shadow deep.

### Mobile

Hamburger (Phosphor `List`, 24px, Text Secondary).
Full-screen overlay on `#0E1410` background.
Links stacked: H2, Plus Jakarta Sans 700, Text Primary.
Contact button: full-width, primary.

---

## 16. Footer

```
┌────────────────────────────────────────────────────────────┐
│  Pravnix Labs                                              │
│  Responsible AI for meaningful human problems.             │
│                                                            │
│  Products         Company          Legal                   │
│  Pravnya          About            Privacy                 │
│  [In development] AI Engineering   Terms                   │
│                   Research         Accessibility           │
│                   Responsible AI                           │
│                   Careers                                  │
│                   Contact                                  │
│                   Blog                                     │
│                                                            │
│ ─────────────────────────────────────────────────         │
│  © 2026 Pravnix Labs Pvt. Ltd.   India                    │
│  Built to last. Built with care.                          │
└────────────────────────────────────────────────────────────┘
```

Background: `#0B1009` (Surface Inset — slightly darker than main background)
Top border: `1px solid rgba(255,255,255,0.06)`
Text: Text Secondary for links, Text Tertiary for legal
Wordmark: Text Primary, 16px, Plus Jakarta Sans 600
Tagline: Text Tertiary, Body S, italic Fraunces

---

# Part 4 — Page Designs

---

## 17. Home

**SEO title:** Pravnix Labs — Responsible AI for meaningful human problems

**SEO description:** Pravnix Labs builds AI products designed around trust, privacy, and the
long-term wellbeing of the families who use them. Makers of Pravnya.

**Keywords:** responsible AI company India, AI product company, child development AI, Pravnix Labs,
Pravnya parent app, ethical AI startup

**Purpose:** Establish who Pravnix Labs is — technically credible, philosophically serious,
product-focused — in the first scroll. Convert investors, future employees, press, and
technical partners into people who want to know more.

**Primary audience:** Investors, technical evaluators, future employees, press.

**Primary message:** We build AI that holds itself to a standard, for problems that deserve it.

---

### Section 1: Navigation (transparent over hero)

See navigation spec above.

---

### Section 2: Hero

**Layout:** Full-width, dark background `#0E1410`. Text centered. No image — the restraint
is the statement.

**Eyebrow label:**
`PRAVNIX LABS` — Label style, Forest green, letter-spacing 1px

**Headline (Display L, Fraunces 500, Text Primary, max 700px centered):**
"Responsible AI for meaningful human problems."

**Sub-headline (Body L, Plus Jakarta Sans 400, Text Secondary, max 560px centered):**
"We build AI products that hold themselves to a higher standard — because the families who use them deserve it."

**CTA row:**
[See our products →]  [Read our AI principles]
Primary pill button + ghost link

**Scroll indicator:**
Phosphor `ArrowDown`, 20px, Text Tertiary, subtle fade-in after 1.5s. Pure aesthetic;
no semantic function. Signals there is more below without insisting.

**Imagery direction:**
No photo in the hero. Pure type on dark. This is the intentional statement: the words
carry the weight. One subtle texture is acceptable — a very low-opacity noise texture
on the background to prevent flatness, rendered as an SVG or CSS grain filter.

**Animation:**
Hero headline fades in over 600ms on load. Sub fades in after 200ms delay. CTAs after
400ms delay. Subtle glow pulse on primary CTA (see animation spec).

---

### Section 3: Products

**Section label:** `WHAT WE BUILD`

**Headline (H2, Plus Jakarta Sans 700, Text Primary):**
"Products built from principles, not from market trends."

**Sub (Body M, Text Secondary, max 560px):**
"Every Pravnix product begins with a specific human problem and a specific commitment to the people experiencing it."

**Product cards (grid: 1 featured + 1 placeholder on desktop)**

**Featured card — Pravnya:**
```
Background: Surface #141D17, Glow S border
Top accent bar: 3px Forest green, full width
Eyebrow: [CHILD DEVELOPMENT] — Label, Forest, uppercase
Headline: Pravnya
Sub: The AI-powered companion that helps parents capture, organize, and understand their child's developmental story.
Tags: [iOS] [Android] [Web] [AI]
CTA: Visit Pravnya.com →  (external link, Forest text, ArrowUpRight icon)
   + Learn more  (internal /products/pravnya link)
```

**Placeholder card:**
```
Background: Surface #141D17, Border Default (no glow — dimmer)
Eyebrow: [IN DEVELOPMENT] — Label, Text Tertiary, uppercase
Headline: Next product
Sub: We build carefully. The next Pravnix product is in early development. Announcements when it's ready.
CTA: Follow our research → (links to /research)
```

---

### Section 4: The Pravnix difference

**Background:** Forest Subtle `#162417` (full-bleed dark-green section)

**Section label:** `WHY WE ARE DIFFERENT`

**Headline (H2, Plus Jakarta Sans 700, Text Primary):**
"We separated what AI can do from what AI should do. And we chose should."

**Body (Body M, Text Secondary, max 600px):**
"Most AI companies build for capability first and ask about responsibility later. We built the
responsibility framework before we wrote the first line of model code.

That choice has a cost. It means slower features, more constrained outputs, and AI that tells
you it doesn't know — when it doesn't know. It also means families trust it."

**Three differentiator cards (horizontal):**

Card 1:
Icon: `ShieldCheck` Duotone, Forest
Title: "Nine permanent principles"
Body: "Every AI output in every Pravnix product is governed by nine published commitments. Not guidelines. Permanent."
Link: "Read the principles →" → /responsible-ai

Card 2:
Icon: `Scales` Duotone, Forest
Title: "Trustworthy over impressive"
Body: "When forced to choose between an output that sounds confident and one that is honest, we choose honest. Every time."

Card 3:
Icon: `Eye` Duotone, Forest
Title: "Evidence, not inference"
Body: "AI insights trace to specific observations in the user's record. The AI shows its work — or it doesn't show the output."

---

### Section 5: Stat block

Four statistics in a horizontal bar, centered, on the main dark background:

```
9               100%              5+               1
Permanent       Privacy by        Years of          Product launched
AI principles   design            development       2025
```

Number color: Forest `#2E7D5B`, Fraunces 500, Display M.
Label: Body S, Text Secondary.
Sub-label: Caption, Text Tertiary.

---

### Section 6: Research signal

**Section label:** `RESEARCH & INNOVATION`

**Headline (H2, Plus Jakarta Sans 700):**
"We publish what we learn."

**Body (Body M, Text Secondary):**
"Pravnix Labs shares its research on responsible AI, longitudinal intelligence, and family technology. Not because sharing is expected of AI companies — because we believe the field benefits from specificity rather than secrecy."

**CTA:** [Explore our research →] → /research

---

### Section 7: Quote from founding philosophy

**Background:** Light section variant `#F0EDE6`

**Visual treatment:** This section is the one moment the dark site opens into warmth.
It is a connection back to Pravnya.com and to the human problem at the center of the work.

**Quote (Display M, Fraunces 500, #1A3328):**
"Every child deserves to be understood. That belief shapes every product decision, every AI choice, every privacy practice."

**Attribution (Body S, Sage Dim #4A6A58):**
— Pravnix Labs, Vision Handbook

**CTA below quote:**
[Read the Vision Handbook →] (Forest green link, subtle — not a button)

---

### Section 8: Hiring signal

**Section label:** `CAREERS`

**Headline (H2, Plus Jakarta Sans 700, Text Primary):**
"We are building carefully. We are hiring the same way."

**Body (Body M, Text Secondary):**
"Small team. Specific problem. High standards for the quality of thinking we bring to it."

**CTA:** [See open roles →] → /careers

---

### Section 9: CTA banner

**Background:** Forest Subtle with Border Accent top

**Headline (Display M, Fraunces 500, Text Primary):**
"Interested in what we're building?"

**Two CTAs:**
[Contact us →]   [Read our Responsible AI commitment]
Primary + ghost

---

### Section 10: Footer

See footer spec above.

---

## 18. About

**SEO title:** About Pravnix Labs — Why we exist and what we believe

**SEO description:** Pravnix Labs was founded to build AI products that families can trust with their most sensitive records. This is our story, our principles, and our commitment.

**Keywords:** Pravnix Labs about, responsible AI company founders, AI ethics startup India

**Purpose:** Tell the founding story with specificity and honesty. Establish founder credibility. Show that the company's beliefs are published and held under pressure, not just stated.

**Primary audience:** Investors, press, future employees.

---

### Section 1: Hero

**Layout:** Full-width dark. Text left-aligned, max 680px. No image in hero.

**Eyebrow:** `ABOUT PRAVNIX LABS`

**Headline (H1, Plus Jakarta Sans 700, 38px):**
"We built this because we experienced the gap ourselves."

**Body (Body L, Text Secondary):**
"Pravnix Labs began with a specific observation: the tools available to families navigating complex child development were inadequate in a way that had a specific structure and a specific solution.

We built the solution before we had a company name. The company name came later."

---

### Section 2: The founding story

**Headline (H2):** "The problem that started everything"

**Body (Body M, Text Secondary, max 680px):**
"There is a moment many parents know. The night before an appointment with a specialist. Trying to reconstruct, from memory, the specific evidence that would make the next thirty minutes useful.

The knowledge is real. The record is not.

We experienced this. We looked for an existing product that solved it and found products that solved parts of it — milestone trackers that measured moments, photo apps that preserved memories, clinical tools that served professionals. None of them was built around the family's longitudinal understanding of their specific child.

We built Pravnya to fill that gap. Pravnix Labs is the company that builds Pravnya — and future products in the same register."

**Link:** "Read the full Founder Narrative →" (links to a public version)

---

### Section 3: The company in numbers

Stat block (same component as Home, but fewer stats):

```
2025             9                 1
Year founded     AI principles     Product in market
                 governing every
                 output
```

---

### Section 4: What we believe

**Headline (H2):** "The beliefs that govern every decision."

**Sub (Body M, Text Secondary):**
"These are not aspirations. They are active commitments whose value is demonstrated by the decisions that honor them under pressure."

**Six belief cards (two columns):**

Belief 1: "Every child deserves to be understood — not tracked, not compared, understood as an individual."

Belief 2: "Trust is earned slowly. Every product decision is a deposit into or withdrawal from the family's confidence in us."

Belief 3: "AI must remain honest. Trustworthy AI is more valuable than impressive AI in any domain where the stakes matter."

Belief 4: "Privacy is structural, not optional. It is built into the architecture — not added later as a compliance layer."

Belief 5: "Long-term thinking is the only credible ambition for a company that holds developmental records across years."

Belief 6: "Publishing what you believe creates accountability. Our Vision Handbook, Manifesto, and Mission Handbook are public because that is what accountability requires."

Each card: Surface card style, Forest left border, Fraunces italic for the belief text.

---

### Section 5: The team

**Headline (H2):** "The people building it."

[Founder photos + name + role + 2-sentence bio each]

Bio standard: specific about what they built before, why they are here, what they are responsible for. No "passionate about X." No "believes in the power of Y."

**Below bios:**
"Pravnix Labs is a small team. We are hiring at the rate the product quality requires."
[See open roles →]

---

### Section 6: The documents we publish

**Headline (H2):** "We publish what we believe."

**Body (Body M, Text Secondary):**
"The Vision Handbook defines our purpose, principles, and AI philosophy. The Manifesto explains what we believe. The Mission Handbook governs how we work. These documents exist in writing because writing them down is how we hold ourselves accountable."

**Three document cards (horizontal):**

Card 1: Vision Handbook — "The constitutional document. Defines our purpose, mission, 12 principles, 9 permanent AI commitments, and what Pravnix will never become."

Card 2: Manifesto — "38 declarations of what Pravnix believes. Written for families, employees, investors, and anyone who wants to know what kind of company this is."

Card 3: Mission Handbook — "How we execute the mission every day. Operational, specific, and honest about the decisions that are genuinely hard."

Each card: a document-icon (Phosphor `FileText` Duotone) + title + body + "Read →" link.

---

### CTA

[Contact the team →] [Read our Responsible AI commitment →]

---

## 19. Products

**SEO title:** Pravnix Labs Products — AI built with principles

**SEO description:** Pravnix Labs builds responsible AI products. Pravnya is the flagship — a child development companion for families. More in development.

**Keywords:** Pravnix Labs products, Pravnya app, responsible AI products India

**Purpose:** Show both the current product and the product philosophy. Signal that Pravnya is not a one-off but the first of a deliberate series.

---

### Section 1: Hero

**Headline (H1, Plus Jakarta Sans 700):**
"We build products, not platforms."

**Body (Body L, Text Secondary):**
"Pravnix Labs does not sell an AI engine. We do not license a model. We build specific products for specific human problems, with a specific commitment to the people who will use them."

---

### Section 2: Current product

**Section label:** `IN MARKET`

**Headline (H2):** "Pravnya"

**Body (Body M, Text Secondary, max 640px):**
"An AI-powered child development companion. Helps parents capture moments, understand patterns, celebrate progress, and build a trusted developmental record over time.

Launched 2025. Used by families navigating developmental differences across India."

**Technical callouts (three small cards):**
- "Longitudinal intelligence — AI that improves as the record grows"
- "Nine permanent AI principles — trustworthy by design"
- "Privacy-first — no data sold, no models trained on family records"

**Two CTAs:**
[Visit Pravnya.com →] (external, primary)
[Technical overview →] (internal → /products/pravnya)

---

### Section 3: Product philosophy

**Headline (H2):** "What makes a Pravnix product."

**Four criteria (principle card style):**

```
01  Built for a specific human problem, not for a market trend.

02  Privacy-first by architecture — not by policy update.

03  AI that is honest about what it knows and does not know.

04  Designed to be trusted across years, not to maximize engagement.
```

---

### Section 4: In development

**Section label:** `IN DEVELOPMENT`

**Headline (H2):** "The next problem."

**Body (Body M, Text Secondary):**
"Pravnix Labs is working on its second product. It is in early development and we will announce it when it is ready to be announced — not when announcing creates momentum.

If you are interested in early access or partnership, contact us."

[Contact →]

---

## 20. Pravnya (product page on .ai)

**Purpose:** Technical overview of Pravnya for a company/professional audience — investors,
clinical partners, technical evaluators. Distinct from `pravnya.com` which is for families.

**SEO title:** Pravnya — The Pravnix Labs flagship product | Technical overview

**SEO description:** Pravnya is Pravnix Labs' AI-powered child development companion. Technical overview: AI architecture, longitudinal intelligence, responsible AI commitments, and product philosophy.

---

### Section 1: Hero

**Headline (H1):** "Pravnya: the living developmental record."

**Sub (Body L, Text Secondary):**
"Built for families. Governed by published AI principles. Designed to be trusted across years."

**CTAs:** [Visit Pravnya.com →]  [Read the AI architecture →]

---

### Section 2: What Pravnya does (technical register)

**Headline (H2):** "The product in precise terms."

**Body (Body M):**
"Pravnya is a longitudinal record management system with a parent-facing interface and an AI layer that operates under published constraints.

It does three things:

1. **Captures** developmental observations from parents in multiple formats (voice, text, photo, document, milestone).
2. **Organizes** that information into a structured, searchable, longitudinal record — automatically, with no manual filing.
3. **Analyzes** the record using AI to surface patterns, generate summaries, and assist with appointment preparation — always tracing outputs to specific source observations."

---

### Section 3: The AI architecture

**Headline (H2):** "How the AI works — and what it does not do."

**Three-column technical layout:**

**Column 1 — Input layer:**
"Parent observations via text, voice (transcribed), photos (tagged), clinical documents (indexed). Each entry is tagged with: domain, setting, date, associated professional."

**Column 2 — Intelligence layer:**
"Longitudinal pattern detection across entries. Summary generation from selected time windows. Appointment preparation document generation. Question surfacing based on record patterns.

Every output is traced to source entries. Confidence levels are explicit. Uncertainty is expressed, not hidden."

**Column 3 — Constraint layer:**
"Nine permanent AI principles govern every output:
No diagnostic language. No population comparison. No overclaiming. Parent editability on all outputs. Evidence visibility required."

**Mono block below — the nine principles in specification format:**
```
01  AI Explains             outputs cite source observations
02  AI Shows Evidence       reasoning is visible
03  AI Admits Uncertainty   limited evidence is flagged
04  Parent Control          all outputs editable or dismissible
05  Expert Primacy          AI does not substitute for professionals
06  Explainability          parents understand why any output was made
07  Longitudinal Preference patterns over isolated conclusions
08  Trust > Automation      we do not automate what requires judgment
09  Privacy > Personalization  data is not traded for capability
```

---

### Section 4: Privacy architecture

**Headline (H2):** "Privacy by design, not by policy."

**Three technical points:**

"The record belongs to the family. Pravnix does not own, license, or commercialize family data."

"AI models are trained on general datasets. Family records are never used as training data."

"Families export their complete record at any time, in full, in standard formats."

---

### Section 5: Who Pravnya serves

**Headline (H2):** "The families behind the record."

**Body (Body M):**
"Pravnya is used primarily by parents of children with neurodevelopmental differences, developmental delays, learning differences, and complex multi-professional support needs. It is designed for parents who are paying close attention and need better infrastructure for that attention.

It is not a diagnostic tool. It is not a clinical tool. It is a family tool that improves the quality of clinical conversations."

---

### CTA

[Visit Pravnya.com →]  [Contact us about partnership →]

---

## 21. AI Engineering

**SEO title:** AI Engineering at Pravnix Labs — How we build responsible AI

**SEO description:** How Pravnix Labs builds AI: the principles, the architecture decisions, the tradeoffs we make deliberately, and the technical approach to longitudinal intelligence.

**Keywords:** responsible AI engineering, longitudinal AI, AI product development, AI safety engineering

**Purpose:** Establish Pravnix's technical credibility. Show how the principles translate into
engineering decisions. Appeal to technical evaluators and future engineers.

---

### Section 1: Hero

**Headline (H1, Plus Jakarta Sans 700):**
"We separate what AI can do from what AI should do."

**Sub (Body L, Text Secondary):**
"Then we build for should. That decision shows up in the engineering — in how outputs are structured, what sources are surfaced, and what the model is never allowed to say."

---

### Section 2: Our engineering philosophy

**Headline (H2):** "The principles that shape how we build."

**Four principle cards:**

```
01  Capability is not permission.
    A model can generate a diagnosis. That does not mean the product
    should allow one. We constrain the model to what it should say,
    not what it can say.

02  Evidence must be visible.
    Every AI output in a Pravnix product includes traceable source
    material. If we cannot show the evidence, we do not show the output.

03  Uncertainty is information.
    A model that expresses uncertainty is more useful than one that
    hides it. We design for honest outputs — including "I don't know."

04  Human judgment is the final layer.
    Every AI output is editable, correctable, and dismissible by
    the user. The AI is never the last word.
```

---

### Section 3: Longitudinal intelligence

**Headline (H2):** "Why longitudinal matters."

**Body (Body M, Text Secondary):**
"Most AI operates on a point-in-time basis: you provide input, the model provides output. The model has no memory of prior interactions and no preference for pattern over isolated signal.

Longitudinal intelligence is different. The record accumulates over months. The model reads the accumulated record — not just the most recent input — and surfaces patterns that are only visible across time.

This architectural choice has significant implications:"

**Three implication cards:**

Card 1: "The product becomes more valuable the longer it is used — not because features accumulate, but because the record accumulates and becomes the primary intelligence input."

Card 2: "Isolated observations that might mislead a point-in-time system are contextualized by the surrounding record. A single anomaly is flagged as an anomaly, not concluded as a pattern."

Card 3: "The switching cost is not the subscription fee. It is the loss of the record — months or years of specific, organized developmental history that cannot be reconstructed elsewhere."

---

### Section 4: Technical choices we made deliberately

**Headline (H2):** "The tradeoffs we made — and why."

**Format:** Three-column table of "what we chose / what we gave up / why"

| We chose | We gave up | Because |
| --- | --- | --- |
| Honest uncertainty expression | More confident-sounding outputs | A wrong confident output causes harm; an uncertain output prompts the right action |
| Evidence traceability for every output | Faster output generation | Families deserve to know where conclusions come from |
| Parent editability on all AI outputs | Cleaner UX (less UI complexity) | AI authority over a family's child's record is unacceptable |
| No population comparison | A feature many users expect | Comparison produces anxiety, not understanding |
| No diagnostic language | A large set of seemingly useful outputs | We are not a clinical tool and will not be mistaken for one |

---

### Section 5: Technology we use

**Headline (H2):** "The stack (at a high level)."

**Body (Body M, Text Secondary):**
"We use frontier language models via API, with output validation layers that enforce the nine permanent AI principles before any output is surfaced to the user. We do not fine-tune on family data. We do not store model context between unrelated sessions."

**Tags (technology categories, pill style):**
[Large language models] [Output validation] [Longitudinal retrieval] [Privacy-preserving design] [Mobile-first architecture]

---

### Section 6: Working here (recruiting signal)

**Headline (H2):** "If this is how you think about AI, we should talk."

**Body (Body M):**
"The engineering challenges at Pravnix require the same combination that the product requires: technical rigor and principled constraint. If you find it more interesting to decide what the model should not do than to maximize what it can do, we are interested in you."

[See engineering roles →]

---

## 22. Research & Innovation

**SEO title:** Research & Innovation — Pravnix Labs

**SEO description:** Pravnix Labs shares its research on responsible AI, longitudinal intelligence, and family technology. Papers, findings, and open questions.

**Keywords:** responsible AI research, longitudinal intelligence research, family AI research, child development AI research

**Purpose:** Signal research credibility. Publish findings. Attract researchers and serious partners.

---

### Section 1: Hero

**Headline (H1):**
"We publish what we learn because the field benefits from specificity."

**Sub (Body L, Text Secondary):**
"Pravnix Labs shares its research on responsible AI in sensitive domains, longitudinal intelligence, and the specific challenges of building AI products for families."

---

### Section 2: Research areas

**Headline (H2):** "What we are working on."

**Four research area cards:**

**Area 1: Responsible AI in sensitive domains**
"How should AI behave when the subject is a child? What constraints are necessary, and how do they change the product architecture? We are publishing findings from Pravnya's AI governance approach."

**Area 2: Longitudinal intelligence**
"How does AI performance change when the context is months of accumulated specific observations rather than a single prompt? What retrieval approaches serve longitudinal understanding best?"

**Area 3: Parent-AI interaction patterns**
"How do parents interact with AI outputs about their children? What makes an output trustworthy rather than impressive? What language patterns reduce anxiety rather than create it?"

**Area 4: Privacy-preserving personalization**
"How do you build personalized AI outputs without training on personal data? What architectural patterns make this possible at scale?"

---

### Section 3: Publications and findings (placeholder)

**Headline (H2):** "Published work."

**State:** Early — first publications in preparation.

**Placeholder card (full width, dimmer):**
```
Background: Surface, Border Default (no glow — indicates placeholder)
Eyebrow: COMING 2026
Title: "Trustworthy over impressive: AI output design in sensitive domains"
Body: Forthcoming paper on the design principles behind Pravnya's AI output layer.
```

---

### Section 4: Open questions we are investigating

**Headline (H2):** "Questions we don't yet have answers to."

**Format:** JetBrains Mono, question-mark prefix, Text Secondary, stacked list:

```
?  How should longitudinal AI express diminishing confidence as records age?
?  What is the optimal frequency of AI-surfaced summaries for parent engagement versus
   parent anxiety?
?  How do cultural contexts in India shape what "trustworthy" means in an AI output?
?  What privacy-preserving architectures allow AI personalization without user-level training?
```

This section is intentionally humble. It signals intellectual honesty — we are not a company
that claims to have solved everything.

---

### Section 5: Research partnerships

**Headline (H2):** "We are interested in research partners."

**Body (Body M):**
"Pravnix Labs is interested in research collaborations with academic institutions, public health organizations, and AI ethics groups working on responsible AI in sensitive human domains."

[Contact us about research →]

---

## 23. Responsible AI

**SEO title:** Responsible AI at Pravnix Labs — Nine permanent commitments

**SEO description:** Pravnix Labs' nine permanent AI principles govern every output in every product. Not guidelines — permanent commitments. Published, specific, binding.

**Keywords:** responsible AI principles, AI ethics, AI transparency, child AI safety, Pravnix AI

**Purpose:** Make the responsible AI commitment specific and demonstrable. This is not a
values page — it is a specification page. It should be the most technically serious page
on the site.

---

### Section 1: Hero

**Headline (H1, Plus Jakarta Sans 700):**
"These are not guidelines. They are permanent commitments."

**Sub (Body L, Text Secondary):**
"Every AI output in every Pravnix product is governed by nine published principles. They do not change as models improve. They do not have exceptions for better user experience. They are permanent."

---

### Section 2: Why we made them permanent

**Headline (H2):** "The reasoning behind the permanence."

**Body (Body M, Text Secondary, max 680px):**
"Most AI product principles are guidelines — aspirations that can be overridden by a product decision, a commercial incentive, or a new model capability.

We chose a different architecture for our principles. They are permanent because:

The families who trust us with their child's developmental story deserve commitments that hold under commercial pressure. A principle that can be changed when it becomes inconvenient is not a principle — it is a preference.

The domain we work in — child development, family wellbeing, longitudinal records of private lives — is one where the cost of AI overreach is unusually high. A confident-sounding AI output that is not traceable to evidence can shape a parent's decision about their child at a vulnerable moment. That is not an acceptable risk."

---

### Section 3: The nine principles

**Section label:** `THE NINE PERMANENT PRINCIPLES`

**Each principle displayed in principle card component (mono format):**

```
01  AI Explains
    Every AI output in a Pravnix product includes an explanation of the
    reasoning behind it. Black-box conclusions are not permitted.

02  AI Shows Evidence
    Outputs trace to specific source observations in the user's record.
    If there is no traceable evidence, there is no output.

03  AI Admits Uncertainty
    When evidence is limited or inconclusive, the AI says so — explicitly,
    in the output, before any conclusion. It does not paper over uncertainty
    with confident language.

04  Parents Remain In Control
    Every AI output in Pravnya can be edited, corrected, or dismissed by
    the parent. The AI has no authority over the record — the parent does.

05  Experts Remain Essential
    Pravnix AI does not substitute for professional expertise. Outputs
    prepare parents for professional conversations — they do not replace them.

06  Recommendations Are Explainable
    Any AI suggestion includes a clear explanation of why it was made.
    Parents understand the reasoning — they do not simply receive the output.

07  Longitudinal Understanding Is Preferred
    AI draws on patterns across time rather than isolated signals. A
    single data point is flagged as a single data point, not treated as
    evidence of a pattern.

08  Trust Is More Valuable Than Automation
    When forced to choose between a more automated experience and a more
    trustworthy one, we choose trustworthy. Every time.

09  Privacy Is More Valuable Than Personalization
    We do not trade user data for model personalization. Family records
    are not used to train models. Privacy is the architectural constraint —
    personalization works within it.
```

---

### Section 4: How the principles operate in the product

**Headline (H2):** "From principle to product."

**Three concrete examples (card format):**

**Example 1 — Principle 02 and 03 in practice:**
"When Pravnya AI generates a pattern observation, it shows: (a) the specific entries the pattern was drawn from, (b) the number of observations supporting the pattern, and (c) if fewer than five observations exist, a 'limited evidence' label that the parent sees before reading the pattern conclusion."

**Example 2 — Principle 04 in practice:**
"Every AI-generated appointment preparation summary includes inline edit controls on each section. A parent who disagrees with an AI description of what happened in a given period can rewrite it before the summary is exported. The AI cannot lock any part of the output."

**Example 3 — Principle 05 and 06 in practice:**
"When the AI surfaces a question it suggests a parent ask at an appointment, it shows: (a) the pattern in the record that prompted the question, and (b) why a professional would be better positioned to interpret that pattern than the AI."

---

### Section 5: What these principles cost us

**Headline (H2):** "These commitments have a cost. We accept it."

**Body (Body M, Text Secondary):**
"Applying these principles means we have declined features that would have been popular. We have built AI outputs that are less impressive than what the underlying models could produce. We have chosen honest uncertainty over confident-sounding outputs that parents might have preferred in the moment.

This is not a marketing statement. It is an engineering and product reality. Every Pravnix AI feature has been reviewed against all nine principles before release. Some features were delayed. Some were changed substantially. Some were not built at all.

That is the cost of the commitment. We believe it is worth it."

---

### Section 6: Public accountability

**Headline (H2):** "These principles are public so you can hold us to them."

**Body (Body M):**
"The Vision Handbook (which contains the full documentation of these principles) is available publicly. We have published them before we had commercial scale, before we had leverage to protect. We publish them now so that any family, any researcher, any partner, and any future employee can hold us to them."

[Read the Vision Handbook →]  [Contact us with questions →]

---

## 24. Careers

**SEO title:** Careers at Pravnix Labs — Join us if this is the work you're looking for

**SEO description:** Pravnix Labs is a small team building AI products with published principles and long-term commitment. We hire carefully, for people who think the same way.

**Keywords:** AI startup jobs India, responsible AI careers, Pravnix Labs hiring, AI product engineer

**Purpose:** Attract the specific kind of person who wants to build something careful, long-term,
and principled. Repel people who want high-growth shortcuts.

---

### Section 1: Hero

**Headline (H1, Plus Jakarta Sans 700):**
"We are small and careful. We are looking for the same."

**Sub (Body L, Text Secondary):**
"Pravnix Labs is an early-stage company building a product that families will use across years of their child's life. We hire at the rate the product quality requires — not at the rate investors expect."

---

### Section 2: What it's actually like

**Headline (H2):** "What working here means."

**Five honest statements (principle card style, but without numbers):**

"You will work on problems that have no obvious answer and require principled judgment, not just technical skill."

"You will read the Vision Handbook, the Manifesto, and the Mission Handbook before you build anything. They are not optional background reading."

"You will be asked to make cases for decisions in writing — not just in meetings. Clear thinking precedes clear code."

"You will encounter commercial pressure and be expected to hold the principles anyway. That is not a culture value statement. It is a performance expectation."

"You will be part of a small team that has high standards for the quality of care in what it builds. That is a constraint and a privilege."

---

### Section 3: Who we're looking for

**Headline (H2):** "The kind of people we want to work with."

**Body (Body M, Text Secondary):**
"We are not looking for people who are excited about AI. We are looking for people who are careful about AI — who find the constraint more interesting than the capability, who want to build something that is trusted rather than something that is impressive.

If you have built software that held sensitive human information and thought carefully about what that required — we want to talk.

If you have done original thinking about responsible AI, AI in healthcare or family technology, or longitudinal system design — we want to talk.

If you want to build something used by real families and held to a published standard — we want to talk."

---

### Section 4: Open roles

**Headline (H2):** "Current openings."

[Role cards — one per open role]

**Role card structure:**
```
Background: Surface, Glow S
Title: Role title (H3, Plus Jakarta Sans 600)
Tags: [Team] [Location] [Type]
Body: 2-sentence description of the specific role
CTA: [Apply →] (external link to application)
```

**Placeholder when no roles:**
"We do not always have open roles. We share all openings here and on [LinkedIn/relevant platform]."
[Get notified of new roles →] (email capture)

---

### Section 5: The hiring process

**Headline (H2):** "How we hire."

**Steps (numbered, clean list):**

"1. Application — We review every application personally. No automated filtering."

"2. Reading — We ask candidates to read a section of our public documentation before the first conversation. We want to know if our thinking resonates."

"3. Conversation — One conversation with the founder. Not a screening — a genuine conversation about the problem, the product, and the way we think."

"4. Work sample — We pay for work samples. We believe this is the right standard."

"5. Decision — Made with full information, communicated within one week."

---

### CTA

[See current roles →]  [Contact us directly →]

---

## 25. Contact

**SEO title:** Contact Pravnix Labs

**SEO description:** Contact Pravnix Labs for partnerships, press inquiries, investor relations, or general questions about our products and AI approach.

**Purpose:** Enable four distinct contact flows: partnerships, press, investors, careers.
Clean, fast, personal.

---

### Section 1: Hero

**Headline (H1):** "Get in touch."

**Sub (Body L, Text Secondary):**
"We respond personally to every message. Response time: one business day."

---

### Section 2: Contact form

**Layout:** Two columns. Left: form. Right: contact reasons + email addresses.

**Form fields:**
- Your name (required)
- Email (required)
- "I am reaching out about" — dropdown:
  - Partnership or integration inquiry
  - Press or research
  - Investor relations
  - Career inquiry
  - Pravnya product question (→ redirects to pravnya.com/contact)
  - Other
- Message (text area, required)
- [Send →] primary button

**Right column — direct contacts:**
- Partnerships: `partnerships@pravnix.ai`
- Press: `press@pravnix.ai`
- Investors: `investors@pravnix.ai`
- General: `hello@pravnix.ai`

**Note below form:**
"Pravnya product support is handled at [pravnya.com/contact →]. This form is for company-level inquiries."

---

## 26. Blog (placeholder)

**SEO title:** Pravnix Labs Blog — Research, thinking, and product notes

**Status:** Design placeholder. Not live at launch.

**Purpose:** Publish specific, technical, honest content on responsible AI, longitudinal intelligence, family technology, and the product decisions that shaped Pravnya.

**Content standard:**
Every post demonstrates specific knowledge. No "5 ways AI will change healthcare." No content that could have been generated by an AI assistant in three minutes.

**Planned content types:**

1. **Principle in practice** — How one of the nine AI principles shaped a specific product decision. Specific, honest, technical.

2. **Research note** — A finding from Pravnix's research on longitudinal AI, parent-AI interaction, or responsible output design.

3. **Engineering decision** — Why a specific technical choice was made. What was given up. Why it was the right tradeoff.

4. **Honest reflection** — Things we got wrong, changed our minds about, or are still figuring out.

**What the blog will never publish:**
- AI-generated posts
- Thought leadership content without specific substance
- Marketing content dressed as editorial content
- Trend pieces

**Post page structure:**
- Dark background consistent with rest of site
- Narrow content width (640px)
- Author + date + estimated read time (top)
- No social share bars until post end
- Related posts: maximum 2, manually curated
- CTA at end: "What we're building at Pravnix" with link to Products

---

# Part 5 — Implementation

---

## 27. Implementation notes for Codex

### Framework recommendation

**Next.js 14+ (App Router)** — same as Pravnya.com. Shared component primitives are possible.
Styling: **Tailwind CSS** with a custom `pravnix` theme distinct from the Pravnya theme.

The two themes share:
- Spacing scale (same tokens)
- Border radius scale (same tokens)
- Typography fonts (same families)
- Icon library (same Phosphor)

The two themes differ:
- Color palette (dark vs light)
- Default background
- Typography weight distribution (Plus Jakarta Sans 700 is primary on .ai; Fraunces leads on .com)
- Shadow system (glow-based vs elevation-based)

### Tailwind theme sketch

```js
// pravnix theme additions to tailwind.config.ts
pravnix: {
  bg: {
    DEFAULT: '#0E1410',
    surface: '#141D17',
    raised: '#1C2820',
    inset: '#0B1009',
    subtle: '#162417',
  },
  forest: {
    DEFAULT: '#2E7D5B',
    bright: '#3D9E73',
    dim: '#1C5A3D',
  },
  sage: {
    DEFAULT: '#7A9E8A',
    dim: '#4A6A58',
  },
  gold: {
    DEFAULT: '#C49A5A',
    dim: '#8A6A35',
  },
  text: {
    primary: '#F0EDE6',
    secondary: '#9AB5A5',
    tertiary: '#5A7A6A',
    code: '#B8D4C4',
  },
}
```

### Component implementation priorities

**Phase 1 (launch):**
Navigation (transparent → solid on scroll), Hero section, Feature/product cards,
Principle cards (mono format), Stat block, CTA banner (dark + light variants),
Footer, Contact form.

**Phase 2 (post-launch):**
Blog post template, Careers role cards, Research area cards, Product technical breakdown.

### Performance

Same targets as Pravnya.com: LCP < 2.5s, FID < 100ms, CLS < 0.1.
Dark backgrounds with no images in the hero mean the hero renders immediately —
the primary performance consideration is font loading (three fonts).

Font loading strategy:
```
Fraunces: preload, display: swap, subset to Latin + variable
Plus Jakarta Sans: preload, display: swap, weights 400/600/700
JetBrains Mono: lazy load, display: swap, used only on specific pages
```

### Analytics

Same as Pravnya.com recommendation: Plausible Analytics (cookieless).

Track:
- CTA clicks (primary: "Contact →", "Visit Pravnya.com →")
- Responsible AI page scroll depth (key signal for investor/researcher engagement)
- Careers page — role card clicks

### Shared infrastructure

If Pravnya.com and Pravnix.ai are in the same Next.js monorepo (recommended):
- Shared font configuration
- Shared Phosphor icon imports
- Separate Tailwind themes
- Separate `app/` directories (or separate Next.js apps in a Turborepo)
- Shared UI primitives (Button, Input, Badge) with theme-prop overrides

### Accessibility

Same WCAG 2.1 AA standard. Dark-mode specific reminders:
- Verify Text Secondary (#9AB5A5) on Background (#0E1410): should be ~5.2:1 — verify
- Verify Forest (#2E7D5B) on Surface (#141D17): should be ~4.3:1 — borderline; do not
  use Forest as body text at < 18px
- All SVG icons: `aria-hidden="true"` when decorative, `aria-label` when semantic

---

## 28. SEO master table

| Page | Title | Description | Keywords |
| --- | --- | --- | --- |
| Home | Pravnix Labs — Responsible AI for meaningful human problems | Pravnix Labs builds AI products that families can trust with their most sensitive records. | responsible AI company India, AI product company, Pravnix Labs |
| About | About Pravnix Labs — Why we exist and what we believe | Founded to build AI products that families can trust. Our story, principles, and commitments. | Pravnix Labs about, AI ethics startup founders |
| Products | Pravnix Labs Products — AI built with principles | Pravnix Labs builds specific products for specific human problems. Flagship: Pravnya. | Pravnix Labs products, responsible AI products |
| Pravnya (.ai) | Pravnya — Technical overview | AI-powered child development companion. Technical architecture, AI principles, privacy design. | Pravnya app technical, child development AI |
| AI Engineering | AI Engineering at Pravnix Labs | How we build AI: principles, architecture, deliberate tradeoffs. | responsible AI engineering, longitudinal AI |
| Research | Research & Innovation — Pravnix Labs | Findings on responsible AI, longitudinal intelligence, and family technology. | responsible AI research, longitudinal intelligence |
| Responsible AI | Responsible AI at Pravnix Labs — Nine permanent commitments | Nine published AI principles governing every output. Not guidelines. Permanent. | AI principles, responsible AI, AI transparency |
| Careers | Careers at Pravnix Labs | Small team. High standards. Long-term commitment. We are hiring. | AI startup careers India, responsible AI jobs |
| Contact | Contact Pravnix Labs | Partnerships, press, investors, careers. We respond personally. | contact Pravnix Labs |
| Blog | Pravnix Labs Blog | Research, thinking, and product notes on responsible AI. | AI research blog, responsible AI |

**Structured data:**
- Home: Organization with founder, url, sameAs (LinkedIn, GitHub)
- Products: SoftwareApplication for Pravnya
- Blog: Article on each post
- Careers: JobPosting for each role
- Responsible AI: Consider FAQPage schema for the nine principles

---

## 29. Component quick reference

| Component | Background | Border | Radius | Effect | Font |
| --- | --- | --- | --- | --- | --- |
| Feature card | Surface `#141D17` | Glow S | 10px | Glow M on hover | Plus Jakarta Sans |
| Principle card | Surface Inset `#0B1009` | Forest left 3px | 4px right | Line draw on load | JetBrains Mono (number), Plus Jakarta Sans (text) |
| Quote block | Forest Subtle `#162417` | Gold left 3px | 10px | None | Fraunces italic |
| Mono block | Surface Inset `#0B1009` | Border Default | 10px | None | JetBrains Mono |
| CTA banner (dark) | Forest Subtle `#162417` | Border Accent top | 0 | None | Fraunces (headline) |
| CTA banner (light) | `#F0EDE6` | None | 0 | None | Plus Jakarta Sans 700 |
| Tag / badge | rgba(46,125,91,0.12) | Border Accent | 4px | None | Plus Jakarta Sans 600 |
| Primary button | Forest `#2E7D5B` | None | 9999px | Glow Forest hover | Plus Jakarta Sans 600 |
| Secondary button | Transparent | Forest 50% opacity | 9999px | Border → Forest hover | Plus Jakarta Sans 600 |
| Stat number | Transparent | None | 0 | Count-up on viewport | Fraunces 500, Forest |

---

## Appendix A: Brand differentiation at a glance

```
                pravnya.com          pravnix.ai
────────────────────────────────────────────────────
Register        Consumer, warm       Technical, precise
Background      #F7F4EF (light)      #0E1410 (dark)
Primary font    Fraunces             Plus Jakarta Sans 700
Body font       Plus Jakarta Sans    Plus Jakarta Sans
Mode            Light                Dark
Icon weight     Duotone, warm        Duotone, cool-green
Shadow          Box shadow           Glow effect
CTA feel        Inviting             Authoritative
Voice           A thoughtful friend  A principled founder
Photography     Real families        Textures / abstractions
Testimonials    Parent quotes        Principle cards
AI mentions     Reassuring           Technically specific
```

---

## Appendix B: Copy quality test (Pravnix.ai edition)

Before publishing any copy to Pravnix.ai, apply these four tests:

**1. Can the claim be challenged?**
If a claim is true but vague, it fails. "We take privacy seriously" fails. "We do not use
family records to train models" passes. Every claim should be specific enough to be falsifiable.

**2. Would a technical evaluator find this substantive?**
Read the copy as if you are a CTO or AI researcher evaluating Pravnix as a partner. Does the
copy demonstrate genuine thinking, or does it use technical words without technical substance?

**3. Is it differentiated from a generic AI company?**
Run a test: remove the Pravnix name and read the copy. If it could describe any AI company,
it fails. If it could only describe Pravnix, it passes.

**4. Would a future employee be proud to have written it?**
The careers page says we value clear thinking expressed in writing. The rest of the website
should model that standard.

---

## Appendix C: Pravnix.ai at a glance

| Element | Specification |
| --- | --- |
| Primary wordmark | "Pravnix Labs" — Plus Jakarta Sans 600, #F0EDE6 |
| Tagline | "Responsible AI for meaningful human problems." |
| Domain | pravnix.ai |
| Background | #0E1410 (near-black, green undertone) |
| Primary accent | Forest #2E7D5B (brand token match) |
| Secondary accent | Sage #7A9E8A |
| Gold accent | #C49A5A (used sparingly) |
| Primary headline font | Plus Jakarta Sans 700 |
| Display / editorial font | Fraunces 500 |
| Monospace | JetBrains Mono |
| Icon library | Phosphor Duotone (primary) |
| Photography | Abstract textures, environments — no people |
| Animation | Calm, purposeful, no glowing loops |
| Mode | Dark only at launch |
| Accessibility | WCAG 2.1 AA minimum |

---

*Pravnix Labs — Internal Reference — July 2026*

*This document governs all Pravnix.ai public website design and content decisions.*
*Questions or proposed changes should go through the founding team before implementation.*

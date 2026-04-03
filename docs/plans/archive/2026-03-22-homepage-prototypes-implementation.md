# Homepage Design Prototypes — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 3 standalone HTML homepage prototypes (Design A, B1, B2) applying different visual systems to the same approved content and layout structure.

**Architecture:** Design token extraction approach. One shared HTML structure (12 sections + persistent elements) with 3 different CSS layers. Each prototype is a single self-contained HTML file with inline CSS and Google Fonts. Hero section structure differs per design; all other sections share the same layout with different visual tokens.

**Tech Stack:** HTML5, inline CSS, Google Fonts (DM Serif Display, Poppins, Bebas Neue, Cormorant Garamond), vanilla JS (accordion, tabs, scroll reveal, mobile menu)

---

## Reference Files

Before starting ANY task, read these files:

| File | Purpose |
|------|---------|
| `docs/plans/2026-03-22-homepage-design-prototypes.md` | Design spec with token sets and layout structure |
| `docs/plans/2026-03-21-website-design.md` | Parent design doc — Sections 4, 5, and 11 are critical |
| `prototypes/homepage-content-draft.html` | Approved v2 content (use ALL real content from this file) |

Reference prototypes for CSS patterns (read-only, extract patterns):

| Prototype | What to extract |
|-----------|----------------|
| `prototypes/homepage-07-terracotta-earth.html` | Wavy SVG dividers, grain texture, blob shapes, CTA button shine effect |
| `prototypes/homepage-14-sunset-orange.html` | Hero typography, 3-step numbered circles with connector line, rise-in animations |
| `prototypes/homepage-66-community-first.html` | Trust bar, worry-buster cards, timetable cards, instructor split layout, final CTA dark section, WhatsApp float, button styles |
| `prototypes/homepage-68-anxiety-killer.html` | Level cards with pill badges, dark coaching banner, FAQ accordion, card lift hover |
| `prototypes/homepage-27-warm-copper.html` | Stats strip, pop-out pricing card |
| `prototypes/homepage-29-dark-burgundy.html` | Icon cards (Why Bachata), editorial typography, ornamental dividers |
| `prototypes/homepage-48-cream-navy-classic.html` | Pricing card elevation pattern |
| `prototypes/homepage-43-high-fashion.html` | Instagram grid |
| `prototypes/homepage-69-bold-nightout.html` | B1: full design system — hero split, gold shimmer, ticker, card glow, film grain, nav, buttons |
| `prototypes/homepage-10-monochrome-bw.html` | B2: full design system — hero split with video, brutalist cards, solid dividers, section numbers, ticker |
| `prototypes/homepage-64-broadway-dance.html` | WhatsApp float button |
| `prototypes/homepage-53-muevete-inspired.html` | Final CTA section pattern |

---

## Shared JS Requirements (all 3 prototypes)

Every prototype needs these interactive behaviours in a `<script>` at the end of `<body>`:

1. **FAQ accordion** — click toggles `.faq-answer` visibility and rotates `.faq-chevron` 180deg. Only one open at a time.
2. **Location tabs** — click `.loc-tab` shows corresponding `.loc-panel`, hides others. Active tab gets accent styling.
3. **Mobile menu** — hamburger toggles `#mobile-menu` visibility. Animated bars (middle fades, top/bottom rotate ±45deg).
4. **Scroll reveal** — IntersectionObserver adds `.visible` class to `.fade-up` elements. Threshold 0.1, rootMargin `0px 0px -60px 0px`.
5. **Sticky nav shadow** — on scroll, add `.scrolled` class to nav for background opacity + shadow.

---

## Task 1: Build Design A (Warm Earthy)

**Files:**
- Create: `prototypes/homepage-design-a.html`

**Content source:** `prototypes/homepage-content-draft.html` — use ALL real content (headlines, copy, reviews, FAQ answers, schedule times, pricing). Strip the `<div class="change">` notes and `<div class="section-label">` labels — those were for the content review phase.

**Token set:** Design A from `docs/plans/2026-03-22-homepage-design-prototypes.md` Section 3.1

**Step 1: Read all reference files**

Read the design spec, parent design doc (Sections 4, 5, 11), and content draft. Then read these prototypes for CSS patterns:
- `homepage-07-terracotta-earth.html` — grain texture SVG, wavy SVG divider paths, CTA button with shine pseudo-element
- `homepage-14-sunset-orange.html` — hero headline clamp sizes, step-num circles (48px, border, centered number), connector line (1px vertical gradient)
- `homepage-66-community-first.html` — worry-card CSS, schedule-row grid (3-col: 90px/1fr/auto), timetable dark header, day badge pill, instructor split layout, team card with avatar + skill pills, pull quote card, final CTA dark section with radial gradient + status pill + trust signals, WhatsApp float (56px circle, #25D366), btn-terracotta (pill, 100px radius), btn-outline-cream, btn-outline-dark, ticker-wrap if needed for reference
- `homepage-68-anxiety-killer.html` — level card grid (md:2 lg:4), pill badge (.pill class), beginner card highlighted in accent, pricing box inside cards, dark coaching banner (charcoal bg, flex row), FAQ accordion (.faq-item bg, .faq-trigger button, .faq-chevron rotation, .faq-answer toggle)
- `homepage-27-warm-copper.html` — stats strip (flex row, stat-divider vertical lines), pop-out pricing card (elevated with -mt-4, dark gradient bg, "Most Popular" badge absolute positioned)
- `homepage-29-dark-burgundy.html` — icon card layout (4-col grid, centered text, decorative icon above), editorial heading style
- `homepage-43-high-fashion.html` — Instagram grid (6-col, aspect-ratio:1, 2px gap, gradient placeholders)

**Step 2: Build the complete HTML file**

Structure:
```
<!DOCTYPE html>
<html lang="en">
<head>
  - Meta charset, viewport
  - Title: "Latin Addiction — Bachata Classes in Reading & Leicester"
  - Google Fonts: DM Serif Display (400,700) + Poppins (300,400,500,600)
  - <style> with ALL CSS
</head>
<body>
  - Nav (sticky)
  - Section 1: Hero (centered, Design A)
  - Section 2: Worry-busters (3 cards)
  - Wavy SVG divider
  - Section 3: Why Bachata (4 icon cards)
  - Section 4: Social Proof (reviews + Instagram grid)
  - Section 5: Getting Started (3 steps)
  - Wavy SVG divider
  - Section 6: Schedule (tabbed)
  - Section 7: Class Levels (4 cards)
  - Section 8: Pricing (newcomer + drop-in)
  - Wavy SVG divider
  - Section 9: Private Coaching (dark banner)
  - Section 10: Instructors (split layout)
  - Section 11: FAQ (accordion)
  - Wavy SVG divider
  - Section 12: Final CTA (dark)
  - Footer
  - WhatsApp float button
  - Sticky mobile CTA bar
  - <script> for interactivity
</body>
</html>
```

CSS must include:
- Reset (*box-sizing, margin, padding)
- Body: Poppins, #FFF8F0 bg, #3D1F0D text, antialiased, overflow-x hidden
- .font-display: DM Serif Display
- .grain::after pseudo-element (SVG fractal noise, 0.05 opacity)
- .fade-up animation (opacity 0→1, translateY 24px→0, 0.55s)
- .wave-divider SVGs (from #7 — bezier paths, 60px height, fill matches adjacent section bg)
- Nav: sticky, backdrop-filter blur, border-bottom, .scrolled state
- .nav-link::after animated underline (terracotta)
- .btn-terracotta (pill shape, #C2785C, hover #A0522D, shine pseudo-element)
- .btn-outline (pill, terracotta border, hover fill)
- .worry-card (white bg, 16px radius, 1.5px border, icon box 52px, tick line)
- .icon-card (4-col, centered, decorative icon, DM Serif Display title)
- .review-card (white bg, 3px terracotta top border, italic quote, stars)
- .insta-tile (aspect-ratio:1, warm gradient placeholder, hover scale)
- .step-num (48px circle, parchment bg, terracotta border, DM Serif Display number)
- .connector-line (1px vertical, terracotta 15% opacity)
- .loc-tab, .loc-panel (tab switching)
- .schedule-card (dark header #3D1F0D, day badge pill, schedule rows)
- .level-card (white bg, pill badge, beginner highlighted in terracotta)
- .pricing-highlight (deep brown gradient, elevated -mt-4, newcomer badge)
- .coaching-banner (deep brown bg, grain, flex layout)
- .instructor-split (grid 2-col, team card, avatar, skill pills, pull quote, steps card)
- .faq-item (parchment bg, border, chevron, answer toggle)
- .cta-section (deep brown bg, radial terracotta glow, status pill, trust checks)
- Footer (deep brown, 4-col grid)
- .wa-float (fixed, 56px circle, #25D366, hover scale 1.1)
- .sticky-mobile-bar (fixed bottom, terracotta bg, sm:hidden on desktop)
- Responsive: mobile (<768px), tablet (768-1024px), desktop (>1024px)

All real content from the content draft. Working WhatsApp links: `https://wa.me/447424063798?text=Hi!%20I'd%20like%20to%20try%20a%20free%20Bachata%20class`

**Step 3: Verify in browser**

Open `prototypes/homepage-design-a.html` in Playwright. Take full-page screenshots at:
- Mobile (375px width)
- Desktop (1440px width)

Check: all 12 sections render, responsive layout works, scroll animations trigger, FAQ accordion opens/closes, location tabs switch, WhatsApp links correct.

**Step 4: Commit**

```bash
git add prototypes/homepage-design-a.html
git commit -m "design: homepage Design A (Warm Earthy) prototype"
```

---

## Task 2: Build Design B1 (Dark Bold #69)

**Files:**
- Create: `prototypes/homepage-design-b1.html`

**Content source:** Same v2 content as Task 1.

**Token set:** Design B1 from spec Section 3.2

**Step 1: Read reference files**

Read the design spec + `homepage-69-bold-nightout.html` thoroughly for:
- Complete CSS: gold shimmer animation, film grain (fixed, z-9999), ticker animation, card-glow hover, btn-burgundy, btn-outline-gold, nav-link underline, reveal animation, section-num pattern, rule-gold divider
- Hero split layout: left 7/12 (eyebrow + massive Bebas Neue headline + gold shimmer on "Bachata" + sub-copy + CTAs + scroll indicator), right 5/12 (dark panel + rotated "BA CHA TA" + light rays + bottom info strip)
- Structural patterns unique to #69

Also read `homepage-design-a.html` (from Task 1) for the shared HTML structure of sections 2-12.

**Step 2: Build the complete HTML file**

Same structural HTML as Design A for sections 2-12, but:
- Replace hero with B1 split hero (7/12 + 5/12)
- Add scrolling ticker before hero
- Replace all CSS token values with B1 tokens
- All sections dark (alternating #1A1A1A / #0D0D0D / #150808)
- Gold gradient dividers instead of wavy SVGs
- Film grain overlay (fixed, z-9999, 0.035 opacity)
- Gold shimmer animation on "Bachata" in hero
- Bebas Neue for all display text, Cormorant Garamond italic for accents
- Sharp card corners (0-4px radius), burgundy borders, glow hover
- Rectangular buttons with gold borders
- Section numbers ("01", "02") with gold rule dividers
- WhatsApp float: burgundy square + gold icon + wa-pulse animation
- Sticky mobile bar in burgundy/gold

Google Fonts: Bebas Neue (400) + Cormorant Garamond (300,400,400i,500) + Poppins (300,400,500,600)

**Step 3: Verify in browser**

Playwright screenshots at 375px and 1440px. Check: all dark sections, gold accents, shimmer animation, ticker scrolls, film grain visible, hero split layout correct on desktop, stacks on mobile.

**Step 4: Commit**

```bash
git add prototypes/homepage-design-b1.html
git commit -m "design: homepage Design B1 (Dark Bold #69) prototype"
```

---

## Task 3: Build Design B2 (Monochrome #10)

**Files:**
- Create: `prototypes/homepage-design-b2.html`

**Content source:** Same v2 content as Task 1.

**Token set:** Design B2 from spec Section 3.3

**Step 1: Read reference files**

Read the design spec + `homepage-10-monochrome-bw.html` thoroughly for:
- Complete CSS: monochrome palette (bw-black through bw-white), red accent #EF4444, brutalist card hover (4px solid shadow + translate), solid rule dividers (40px × 2px), section-num "01 — Label" pattern, ticker, grain with mix-blend-mode overlay, Bebas Neue sizing, square WhatsApp button, fa de-up animation
- Hero split layout with video panel: left 7/12 (red rule + Bebas Neue headline with gray shade hierarchy + "FREE" in red + CTAs + scroll bounce), right 5/12 (vertical video placeholder — adapt #10's dark panel to show 9:16 placeholder with play icon and label)
- Big background typography pattern (large faded text as depth layer)
- Inverted card pattern (one dark card among light cards)

Also read `homepage-design-a.html` (from Task 1) for shared HTML structure.

**Step 2: Build the complete HTML file**

Same structural HTML as Design A for sections 2-12, but:
- Replace hero with B2 split hero + vertical video placeholder in right panel
- Add scrolling ticker before hero (black bg, gray text)
- Replace all CSS token values with B2 monochrome tokens
- Alternating black/white/gray sections
- Solid line dividers (40px × 2px in black, white, or red depending on section bg)
- Grain overlay with mix-blend-mode: overlay
- Bebas Neue for all display text, Poppins 300 for body
- Square brutalist cards (0px radius), solid shadow hover
- Square uppercase buttons with letter-spacing 0.1em
- Section numbers ("01 — Worry-Busters") with solid rule
- One inverted dark review card in Social Proof section
- Large "FREE" background text in Final CTA section
- WhatsApp float: red square (no border-radius), wa-pulse animation
- Sticky mobile bar in red/black
- Vertical video placeholder in hero right panel: dark bg (#111), 9:16 aspect ratio, centered play triangle icon (white, 60px), label "Watch: Your first class" below icon, grain overlay on panel

Google Fonts: Bebas Neue (400) + Poppins (300,400,500,600)

**Step 3: Verify in browser**

Playwright screenshots at 375px and 1440px. Check: monochrome palette (no colour leaks except red), brutalist card shadows, video placeholder visible in hero, alternating section backgrounds, square buttons and WhatsApp float, big background text in final CTA.

**Step 4: Commit**

```bash
git add prototypes/homepage-design-b2.html
git commit -m "design: homepage Design B2 (Monochrome #10) prototype"
```

---

## Task 4: Side-by-Side Verification

**Step 1: Take comparison screenshots**

Use Playwright to open all 3 files and take full-page screenshots at both 375px and 1440px. Save to a temporary comparison.

**Step 2: Verify consistency**

Check across all 3 prototypes:
- Same content in every section (no missing text, no wrong copy)
- Same section order (Hero → Worry-busters → Why Bachata → Social Proof → Getting Started → Schedule → Class Levels → Pricing → Private Coaching → Instructors → FAQ → Final CTA)
- Same layout structure for sections 2-12 (only hero differs)
- Responsive breakpoints consistent
- All WhatsApp links point to same URL with same pre-filled message
- FAQ has same 7 questions
- Schedule has correct times for both cities
- Pricing shows correct amounts

**Step 3: Final commit**

```bash
git add -A
git commit -m "design: all 3 homepage prototypes complete (A, B1, B2)"
```

---

## Execution Notes

- **Tasks 1, 2, 3 can run in parallel** once the spec is understood. Each task produces an independent file. Task 2 and 3 reference Task 1's structure, so either build A first then fork, or build all 3 independently from the spec.
- **Each prototype is ~800-1200 lines.** These are large files. Build them complete in one pass, don't iterate section by section.
- **Extract CSS patterns from reference prototypes, don't copy-paste blindly.** The reference prototypes use different palettes — adapt patterns to the correct token set.
- **All content must be real.** No "Lorem ipsum" or "[content here]" placeholders. The only placeholders are images (founder photo, team photos) and videos (9:16 dark panels with play icons).

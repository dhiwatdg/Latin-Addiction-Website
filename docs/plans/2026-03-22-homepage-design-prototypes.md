# Homepage Design Prototypes — Build Specification

> **Date:** 2026-03-22
> **Status:** APPROVED — ready for implementation planning
> **Parent doc:** `docs/plans/2026-03-21-website-design.md` (single source of truth)
> **Content source:** `prototypes/homepage-content-draft.html` (v2, approved)

---

## 1. SCOPE

Build 3 standalone HTML homepage prototypes applying different visual systems to the same approved content and layout structure.

| Prototype | File | Design direction | Source |
|-----------|------|-----------------|--------|
| Design A | `prototypes/homepage-design-a.html` | Warm Earthy | Section 5.1 + Section 11 |
| Design B1 | `prototypes/homepage-design-b1.html` | Dark Bold (#69) | Section 5.2 Option 1 |
| Design B2 | `prototypes/homepage-design-b2.html` | Monochrome (#10) | Section 5.2 Option 2 |

**What's shared:** HTML structure, layout patterns, content, section order, responsive breakpoints.
**What differs:** Colour palette, typography, textures/effects, card styles, dividers, button shapes, animations, section rhythm (light/dark alternation).
**One exception:** The hero section may differ structurally between designs (Section 11 lists #69 as secondary hero reference).

---

## 2. APPROACH

**Design token extraction.** Extract core visual tokens from each direction, build one shared HTML structure matching Section 11 layouts + v2 content, apply each token set as a different CSS layer.

Benefits:
- Clean apples-to-apples comparison (same structure, different skin)
- Layout decisions from Section 11 are content-driven, not palette-driven — they stay the same
- Sets up naturally for Astro + Tailwind theming later

---

## 3. TOKEN SETS

### 3.1 Design A — Warm Earthy

| Token | Value |
|-------|-------|
| Light bg | `#FFF8F0` cream |
| Dark bg | `#3D1F0D` deep brown |
| Mid bg | `#F5E6D3` parchment |
| Primary accent | `#C2785C` terracotta |
| Secondary accent | `#C9913A` ochre, `#DEB887` sand |
| Text on light | `#3D1F0D` |
| Text on dark | `#FFF8F0` |
| Muted text | `#8B6C5C` |
| Display font | DM Serif Display |
| Body font | Poppins (400 weight) |
| Border radius | 16-20px |
| Card border | `rgba(194,120,92,0.2)` |
| Card shadow | `0 12px 40px rgba(194,120,92,0.12)` |
| Card hover | translateY(-3px) + enhanced shadow |
| Button shape | Pill (100px radius) |
| Button primary | `#C2785C` solid, hover `#A0522D` |
| Dividers | Wavy SVG bezier curves (from #7) |
| Grain | 0.04-0.06 opacity fractal noise |
| Scroll anim | fade-up 0.55s, 24px translateY |
| Eyebrow | Uppercase, 0.75rem, terracotta |
| Section rhythm | Light/dark alternating |
| WhatsApp float | Green circle `#25D366` |
| Ticker | No |
| Special effects | Wavy movement dividers |

### 3.2 Design B1 — Dark Bold (#69)

| Token | Value |
|-------|-------|
| Light bg | `#1A1A1A` (all sections dark) |
| Dark bg | `#0D0D0D` near-black |
| Mid bg | `#150808` burgundy-tint |
| Primary accent | `#D4AF37` gold |
| Secondary accent | `#7F1D1D` burgundy |
| Text on light | `#F0E6D3` (all dark bg) |
| Text on dark | `#F0E6D3` |
| Muted text | `rgba(240,230,211,0.6)` |
| Display font | Bebas Neue (all-caps) |
| Serif accent | Cormorant Garamond (italic) |
| Body font | Poppins (300 weight) |
| Border radius | 0-4px (sharp) |
| Card border | `rgba(127,29,29,0.4)` burgundy |
| Card shadow | Glow `0 0 30px rgba(212,175,55,0.08)` |
| Card hover | border→gold + glow + translateY(-3px) |
| Button shape | Rectangular, gold border |
| Button primary | Gradient `#7F1D1D → #4A0E0E`, gold border |
| Dividers | Gold gradient lines |
| Grain | Film grain 0.035, fixed position, z-9999 |
| Scroll anim | reveal 0.7s, 28px translateY |
| Eyebrow | Section number + gold rule |
| Section rhythm | All dark (shade variation) |
| WhatsApp float | Burgundy square + gold icon |
| Ticker | Yes, gold text, 22s loop |
| Special effects | Gold shimmer on "Bachata", vertical light rays |

### 3.3 Design B2 — Monochrome (#10)

| Token | Value |
|-------|-------|
| Light bg | `#FAFAFA` off-white |
| Dark bg | `#0A0A0A` near-black |
| Mid bg | `#F7F7F7` light gray |
| Primary accent | `#EF4444` red (single accent) |
| Secondary accent | None |
| Text on light | `#0A0A0A` |
| Text on dark | `#FAFAFA` |
| Muted text | `#6B6B6B` |
| Display font | Bebas Neue (all-caps) |
| Serif accent | None |
| Body font | Poppins (300 weight) |
| Border radius | 0px (square/brutalist) |
| Card border | `#D9D9D9` (light), `#1C1C1C` (dark) |
| Card shadow | Brutalist `4px 4px 0 0` solid |
| Card hover | translate(-2px,-2px) + solid shadow appears |
| Button shape | Square, uppercase, letter-spacing 0.1em |
| Button primary | `#EF4444` red, hover `#DC2626` |
| Dividers | Solid lines 40px × 2px |
| Grain | 0.04 opacity, mix-blend-mode overlay |
| Scroll anim | fade-up 0.7s, 20px translateY |
| Eyebrow | "01 — Label" with solid rule |
| Section rhythm | Black/white/gray alternating |
| WhatsApp float | Red square, pulse animation |
| Ticker | Yes, black bg, gray text, 22s loop |
| Special effects | Big background typography, vertical video placeholders |

---

## 4. SHARED LAYOUT STRUCTURE

All sections use the same layout patterns from Section 11 of the parent design doc.

| # | Section | Layout | Source prototype |
|---|---------|--------|-----------------|
| — | Nav | Sticky header, 6 items, mobile hamburger, backdrop blur | Common |
| — | Ticker | Horizontal scroll, 22s loop, pause on hover | B1 and B2 only |
| 1 | Hero | **DIFFERS** (see Section 5) | #14/#66 (A), #69 (B1), #10 (B2) |
| 2 | Worry-busters | 3-card row, icon box + title + tick line | #66 |
| 3 | Why Bachata | 4 icon cards, center-aligned, CTA below | #29 |
| 4 | Social Proof | 4 review cards + Instagram 6-cell grid + CTA | #27/#43 |
| 5 | Getting Started | 3 numbered circles, connector line, 3-col grid | #14 |
| 6 | Schedule | Tabs (Reading/Leicester), dark-header card, schedule rows, day badge | #66 |
| 7 | Class Levels | 4-col cards, pill badges, beginner highlighted | #68 |
| 8 | Pricing | Elevated newcomer card, drop-in table | #27/#48 |
| 9 | Private Coaching | Full-width dark banner, flex layout | #68 |
| 10 | Instructors | Split: left (about + card + quote), right (4 steps) | #66 |
| 11 | FAQ | Accordion, 7 questions, chevron toggle | #68 |
| 12 | Final CTA | Dark section, large headline, dual CTAs, trust checklist | #66 |
| — | Footer | 4-col grid, nav links, socials, addresses | Common |
| — | WhatsApp float | Fixed bottom-right | #66/#64 |
| — | Sticky mobile bar | Fixed bottom, mobile only | Common |

---

## 5. HERO SECTION (STRUCTURAL DIFFERENCES)

### 5.1 Design A — Centered Text Hero

- Centered layout, full-width, cream or dark bg
- DM Serif Display headline, clamp(2.8rem, 7.5vw, 5.5rem)
- Sub-copy, two CTAs (primary pill + secondary outline)
- "Already dance?" dual-track link
- Trust bar: static flex row (4 stats)
- Mobile: vertical Reel placeholder
- Desktop: text-only, bold typography
- Wavy SVG divider at bottom
- Source: #14 typography + #66 trust bar

### 5.2 Design B1 — Split Hero (7/12 + 5/12)

- Left column: gold rule eyebrow, Bebas Neue headline (massive), "Reading & Leicester" in gold shimmer, sub-copy, CTAs, scroll indicator
- Right column: dark panel, large rotated "BA CHA TA" text, vertical light rays, bottom info strip (times)
- Mobile: right panel hidden, stacks to single column
- Scrolling ticker above hero
- Source: #69

### 5.3 Design B2 — Split Hero (7/12 + 5/12) with Video

- Left column: red rule eyebrow, Bebas Neue headline (massive), gray shade text hierarchy, "FREE" in red, CTAs, scroll bounce indicator
- Right column: **vertical video placeholder** (9:16 aspect, dark panel, play icon, label text), grain overlay
- Mobile: video placeholder as hero background, text overlaid
- Ticker above hero
- Source: #10, adapted for vertical video per user instruction

---

## 6. SECTION-BY-SECTION TOKEN APPLICATION

### Dark/Light Section Rhythm

| Section | Design A | Design B1 | Design B2 |
|---------|----------|-----------|-----------|
| Hero | Dark (deep brown) | Dark (#0D0D0D) | Dark (#0A0A0A) |
| Worry-busters | Light (cream) | Dark (#1A1A1A) | Light (off-white) |
| Why Bachata | Light (parchment) | Dark (#0D0D0D) | Dark (black) |
| Social Proof | Light (cream) | Dark (#1A1A1A) | Light (gray #F7F7F7) |
| Getting Started | Light (cream) | Dark (#0D0D0D) | Light (off-white) |
| Schedule | Light (parchment) | Dark (#1A1A1A) | Dark (black) |
| Class Levels | Light (cream) | Dark (#0D0D0D) | Light (off-white) |
| Pricing | Light (cream) | Dark (#1A1A1A) | Light (gray) |
| Private Coaching | Dark (deep brown) | Dark (#0D0D0D) | Dark (black) |
| Instructors | Light (parchment) | Dark (#1A1A1A) | Light (off-white) |
| FAQ | Light (cream) | Dark (#0D0D0D) | Light (off-white) |
| Final CTA | Dark (deep brown) | Dark (#0D0D0D) | Dark (black) |

Design A: 3 dark sections (hero, coaching, final CTA) — per Section 5.1 energy spec.
Design B1: all dark, alternating shades for rhythm.
Design B2: alternating black/white/gray.

### Notable Per-Section Differences

**Section 4 (Social Proof):** B2 uses mixed white + dark review cards (one inverted for rhythm, per #10 pattern). A and B1 use uniform card style.

**Section 8 (Pricing):** Newcomer card elevated with -mt-4. A: deep brown gradient card. B1: near-black with gold glow. B2: black with red accent.

**Section 12 (Final CTA):** B1 adds gold shimmer on key word. B2 adds large "FREE" background typography as depth layer.

---

## 7. VIDEO STRATEGY (ALL 3 DESIGNS)

Per Section 5.4 of parent design doc + user instruction:

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero | Vertical Reel placeholder (9:16) | Text-only, bold typography |
| Social proof | Vertical Reels in 6-cell grid | Same |
| Video content | Newcomer-focused placeholder | N/A for v1 |

- All video slots use placeholder elements (dark bg, play icon, label)
- No landscape video available — all placeholders are vertical
- Design B2 hero uses vertical video placeholder as the right-panel content

---

## 8. RESPONSIVE STRATEGY (ALL 3 DESIGNS)

Per Section 5.3 of parent design doc:

- Mobile-first (<768px): single column, stacked sections
- Tablet (768-1024px): 2-column grids where applicable
- Desktop (>1024px): full layouts (3-4 col grids, split sections)
- Hero split panels (B1/B2): right panel hidden on mobile
- Schedule tabs: horizontal tabs on desktop, stacked on mobile

---

## 9. DESIGN CALLS MADE

Decisions not explicitly in the parent doc, made during this design phase:

1. **Design A trust bar: static flex row** (not scrolling ticker). Ticker is B1/B2's pattern. Design A's "friendly friend" personality suits a static, readable bar.

2. **Design A hero: centered layout** (not split). #14's hero is centered. Split is #69/#10 territory.

3. **B2 hero video: vertical placeholder in right panel.** Dark panel with play icon + "Watch: Your first class" label, 9:16 aspect. On mobile becomes hero background with text overlay. User-instructed adaptation since #10 originally had no video.

4. **B1/B2 missing section treatments.** #10 and #69 don't have all 12 sections. Missing sections use Design A's layout structure with B1/B2 visual tokens applied. No structural changes.

5. **B2 section rhythm.** Mapped #10's black/white/gray alternation to the 12-section order.

6. **B2 inverted review card.** One dark card among light cards in social proof section, per #10's pattern.

---

## 10. ACCEPTANCE CRITERIA

Each prototype file must:
- Contain all 12 sections + persistent elements with approved v2 content
- Be a single self-contained HTML file (inline CSS, no external dependencies except Google Fonts)
- Be responsive (mobile-first, 3 breakpoints)
- Include working WhatsApp deep links
- Include scroll-reveal animations
- Include grain texture overlay
- Include section dividers appropriate to the design direction
- Include vertical video placeholders where specified
- Pass basic accessibility: semantic HTML, sufficient colour contrast, keyboard-navigable accordion

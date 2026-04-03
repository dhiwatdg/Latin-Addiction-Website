# Purple/Gold Prototypes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create 4 new homepage prototypes using the brand's purple/gold logo palette — 2 based on B's warm layout, 2 based on F's cinematic dark layout.

**Architecture:** Copy each base prototype, systematically replace all palette colors. No video integration. Standard homepage prototypes matching the existing A-H set.

---

## Palette Definitions

### Gold/Purple (gold dominant)

| Role | Hex | Usage |
|------|-----|-------|
| Body bg (light) | `#FFFBF0` | Main page background |
| Warm bg (alt light) | `#FFF8E7` | Alternate section bg |
| Hero / dark sections | `#2D1557` | Hero, social proof, final CTA |
| Secondary dark | `#3D1A6E` | Schedule headers, price cards |
| Gold primary | `#D4AF37` | CTAs, stars, accents, logo mark |
| Gold dark | `#9A7B1A` | CTA hover |
| Gold muted | `#A08930` | Eyebrow text, subtle accents |
| Purple accent | `#6B3FA0` | Links, highlights |
| Purple light | `rgba(107,63,160,.1)` | Card hover, borders |
| Text on light | `#2D1557` | Body text on light bg |
| Muted text | `#6B5B8A` | Secondary text on light bg |
| Text on dark | `#FFFBF0` | Body text on dark bg |
| Muted on dark | `rgba(255,251,240,.6)` | Secondary text on dark bg |
| Selection | `#D4AF37` bg / `#2D1557` text | Text selection |
| Scrollbar | `#D4AF37` | Scrollbar thumb |
| Nav bg | `rgba(255,251,240,.95)` | Sticky nav |
| Nav border | `rgba(107,63,160,.1)` | Nav bottom border |
| Logo | `logo-mark-golden-tight.png` | Nav (with no filter) |
| Footer logo | `logo-mark-golden-tight.png` | Footer |

### Purple/Gold (purple dominant)

| Role | Hex | Usage |
|------|-----|-------|
| Body bg (light) | `#F8F0FF` | Light sections |
| Alt light | `#F0E8F8` | Alternate light bg |
| Hero / dark sections | `#3D1A6E` | Hero, social proof, final CTA |
| Darker bg | `#2D1257` | Deeper dark sections |
| Gold primary | `#D4AF37` | CTAs, stars, accents |
| Gold dark | `#9A7B1A` | CTA hover |
| Gold bright | `#E8C547` | Highlights |
| Purple accent | `#8B5FBF` | Eyebrow, subtle UI |
| Purple muted | `#7B6B9A` | Muted text on light |
| Text on light | `#2D1257` | Body text on light bg |
| Muted text | `#7B6B9A` | Secondary text |
| Text on dark | `#FFFFFF` | Text on purple bg |
| Muted on dark | `rgba(255,255,255,.6)` | Secondary on purple |
| Selection | `#6B3FA0` bg / `#FFFFFF` text | Text selection |
| Scrollbar | `#8B5FBF` | Scrollbar thumb |
| Nav bg | `rgba(248,240,255,.95)` | Sticky nav |
| Nav border | `rgba(107,63,160,.12)` | Nav bottom border |
| Logo | `logo-mark-golden-tight.png` | Nav (golden works on lavender) |
| Footer logo | `logo-mark-golden-tight.png` | Footer |

---

## Files

| Label | Base | Palette | Output |
|-------|------|---------|--------|
| I | B (01v2) | Gold/Purple (gold dominant) | `prototypes/new/homepage-design-I.html` |
| J | B (01v2) | Purple/Gold (purple dominant) | `prototypes/new/homepage-design-J.html` |
| K | F (02v3) | Gold/Purple (gold dominant) | `prototypes/new/homepage-design-K.html` |
| L | F (02v3) | Purple/Gold (purple dominant) | `prototypes/new/homepage-design-L.html` |

**Note:** These go in `prototypes/new/` alongside the existing A-H prototypes (not in `prototypes/video/`).

---

## Task 1: Agent 1 — Designs I + J (B-base)

Base: `prototypes/new/homepage-design-01v2.html`

### Design I (B + Gold/Purple)

Systematic replacements in B's CSS and inline styles:

| Original B value | Replace with | Notes |
|-----------------|-------------|-------|
| `#FFF8F0` | `#FFFBF0` | Body/light bg (almost same, slightly warmer) |
| `#FFFBEB` | `#FFF8E7` | Alt warm bg |
| `#0F172A` | `#2D1557` | Hero/dark bg |
| `#1E293B` | `#3D1A6E` | Secondary dark |
| `#B8860B` | `#D4AF37` | Gold accent (brighter) |
| `#9A6F09` | `#9A7B1A` | Gold hover |
| `#D4A843` | `#D4AF37` | Bright gold (converge) |
| `#7A5C0B` | `#A08930` | Muted gold |
| `#3D1F0D` | `#2D1557` | Dark text on gold CTAs |
| `#4F6A88` | `#6B5B8A` | Muted body text |
| `rgba(184,134,11,` | `rgba(107,63,160,` | All gold border/shadow → purple |
| `rgba(30,41,59,` | `rgba(45,21,87,` | Dark rgba variants |

Title: `Design I — Gold & Purple (Warm)`
Comment at top: `DESIGN I — GOLD & PURPLE (WARM)` / `Champagne #FFFBF0 / Purple #2D1557 / Gold #D4AF37`

### Design J (B + Purple/Gold)

| Original B value | Replace with | Notes |
|-----------------|-------------|-------|
| `#FFF8F0` | `#F8F0FF` | Body bg → soft lavender |
| `#FFFBEB` | `#F0E8F8` | Alt bg → deeper lavender |
| `#0F172A` | `#3D1A6E` | Hero/dark → deep purple |
| `#1E293B` | `#2D1257` | Secondary dark |
| `#B8860B` | `#D4AF37` | Gold primary |
| `#9A6F09` | `#9A7B1A` | Gold hover |
| `#D4A843` | `#E8C547` | Bright gold |
| `#7A5C0B` | `#8B5FBF` | Muted accent → purple |
| `#3D1F0D` | `#2D1257` | Dark text on gold |
| `#4F6A88` | `#7B6B9A` | Muted text → purple-grey |
| `rgba(184,134,11,` | `rgba(212,175,55,` | Borders → gold rgba |
| `rgba(30,41,59,` | `rgba(45,21,87,` | Dark rgba |

Title: `Design J — Purple & Gold (Warm)`
Comment: `DESIGN J — PURPLE & GOLD (WARM)` / `Lavender #F8F0FF / Purple #3D1A6E / Gold #D4AF37`

---

## Task 2: Agent 2 — Designs K + L (F-base)

Base: `prototypes/new/homepage-design-02v3.html`

### Design K (F + Gold/Purple)

F uses rose/amber accent. Replace with purple/gold:

| Original F value | Replace with | Notes |
|-----------------|-------------|-------|
| `#FFFFFF` body bg | `#FFFBF0` | Warm champagne |
| `#F7F7F7` | `#FFF8E7` | Alt bg |
| `#111` / `#111111` | `#2D1557` | Hero/dark bg |
| `#E11D48` | `#D4AF37` | Rose → gold (primary accent) |
| `#BE123C` | `#9A7B1A` | Rose dark → gold dark |
| `#fecdd3` | `#F5E6C8` | Rose light → gold light |
| `#f59e0b` | `#D4AF37` | Amber → gold |
| `#B45309` | `#A08930` | Amber dark → gold muted |
| `rgba(225,29,72,` | `rgba(107,63,160,` | Rose rgba → purple rgba |
| `#555` | `#6B5B8A` | Muted text → purple-grey |
| `.bg-d` sections | background: `#2D1557` | Dark sections → purple |

Title: `Design K — Gold & Purple (Dark)`
Comment: `DESIGN K — GOLD & PURPLE (DARK)` / `Champagne #FFFBF0 / Purple #2D1557 / Gold #D4AF37`

### Design L (F + Purple/Gold)

| Original F value | Replace with | Notes |
|-----------------|-------------|-------|
| `#FFFFFF` body bg | `#F8F0FF` | Soft lavender |
| `#F7F7F7` | `#F0E8F8` | Alt bg |
| `#111` / `#111111` | `#3D1A6E` | Hero/dark → deep purple |
| `#E11D48` | `#D4AF37` | Rose → gold |
| `#BE123C` | `#9A7B1A` | Rose dark → gold dark |
| `#fecdd3` | `#F5E6C8` | Rose light → gold light |
| `#f59e0b` | `#D4AF37` | Amber → gold |
| `#B45309` | `#A08930` | Amber dark |
| `rgba(225,29,72,` | `rgba(212,175,55,` | Rose rgba → gold rgba |
| `#555` | `#7B6B9A` | Muted → purple-grey |
| `.bg-d` sections | background: `#3D1A6E` | Dark → purple |

Title: `Design L — Purple & Gold (Dark)`
Comment: `DESIGN L — PURPLE & GOLD (DARK)` / `Lavender #F8F0FF / Purple #3D1A6E / Gold #D4AF37`

---

## Logo Treatment (All 4 Files)

- Nav: Use `logo-mark-golden-tight.png` (the golden monogram works on both light champagne/lavender and dark purple)
- Remove any `filter:brightness(0)` on the nav logo — the golden mark should show its natural gold color
- Footer: Use `logo-mark-golden-tight.png` (same as existing dark bg treatment)
- Nav text "Latin Addiction": color matches the design's text-on-bg color

---

## Execution

2 parallel Opus agents:
- Agent 1: Creates I + J (reads B base once, creates 2 variants)
- Agent 2: Creates K + L (reads F base once, creates 2 variants)

## Verification

Spot-check with Playwright after completion.

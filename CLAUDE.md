# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

New website for **Latin Addiction UK**, a Bachata and Salsa dance school with locations in Milton Keynes, Leicester, and Reading.

- **Tech stack:** Astro + Tailwind CSS
- **Hosting:** Cloudflare Workers & Pages (free, auto-deploy from GitHub)
- **Payments:** SumUp Card Widget + Cloudflare Worker for on-site checkout (SumUp store links as temporary stopgap until Worker is built)
- **Domain:** latinaddiction.co.uk (registered at Hostinger, DNS on Cloudflare)
- **Repo:** `dhiwatdg/Latin-Addiction-Website` → Cloudflare auto-builds on push to `main`

## Current Status (2026-04-03)

- **Infrastructure:** DONE — Cloudflare account, DNS, Pages/Workers connected, custom domain wired
- **Content:** DONE — design doc + content draft v2.1 both updated with MK
- **Design choice:** DONE — Design D (Broadway Rose) chosen. Prototype D-v2 complete and reviewed.
- **Astro project:** NOT STARTED — scaffold now, build, push = live site

## Build Phases

### Phase 1 — Go Live (current)
1. **Scaffold Astro project** — `npm create astro@latest`, add Tailwind, configure `astro.config.mjs` for static output. Set Design D palette in `tailwind.config.mjs`: dark #111, rose #E11D48, pink #fecdd3, gray #f5f5f5. Fonts: Poppins (800 hero, 600 titles) + DM Sans (body).
2. **Build shared shell** — BaseLayout, Header (responsive nav + ARIA), Footer, WhatsApp button, mobile sticky bar, SEO component
3. **Build pages:**
   - Homepage (8-section layout from D-v2 prototype — NOT the 12-section content draft)
   - `/milton-keynes` — location page (Salsa & Bachata, Mondays)
   - `/leicester` — location page (Bachata, Tuesdays)
   - `/reading` — location page (Bachata, Wednesdays)
   - `/404` — friendly error page
4. **Accessibility** (not in prototype, must be in Astro build):
   - `<main>` landmark + skip-to-content link
   - Keyboard-accessible nav dropdowns with ARIA
   - `<h2>` headings for Worry-Busters and Social Proof sections
   - `loading="lazy"` + width/height on below-fold images
   - `aria-expanded` on hamburger
   - `100dvh` for mobile menu on iOS
5. **"Book Now" links** → SumUp store (`latinaddictionuk.sumupstore.com`) as temporary stopgap
6. **Push to main** → Cloudflare auto-builds → live at `latinaddiction.co.uk`

### Phase 2 — On-Site Checkout
- `/pricing` page with full pricing tables
- Cloudflare Worker for SumUp Card Widget (on-site checkout, ~25 lines)
- Replace all SumUp store links with on-site checkout
- SumUp API key as Cloudflare Worker secret

### Phase 3 — Full Site
- `/services/private-coaching`, `/services/corporate`, `/services/hire-us`
- `/about`, `/faq`, `/reviews`, `/classes`, `/contact`, `/privacy`
- `/learn` — 3-5 SEO articles (Bachata vs Salsa, What to Wear, etc.)
- All schema markup (DanceStudio, FAQPage, Course, Organization)
- OG share images per page

### Quality Gate
After each major build step, use Codex plugin for code review (scaffold, layout/nav, homepage, location pages, final pre-push). See memory `feedback_codex_usage_strategy.md`.

## Key Files

- **Homepage prototype (BUILD REFERENCE):** `prototypes/homepage-design-D-v2.html` — the 8-section restructured homepage. This is what the Astro build should reproduce. See memory `project_homepage_prototype_final.md` for full section breakdown.
- **Homepage content draft:** `prototypes/homepage-content-draft.html` — v2.1 source content. The prototype restructures this (12→8 sections), so use the prototype as the primary reference.
- **Design doc:** `docs/plans/2026-03-21-website-design.md` — single source of truth for business data, but the 12-section layout is superseded by the 8-section prototype.
- **Video strategy:** `docs/plans/2026-03-23-video-strategy-design.md` — R2 hosting, poster-first hero. Post-launch feature.
- **Archived plans:** `docs/plans/archive/` — completed implementation plans
- **Archived prototypes:** `prototypes/archive/` — A-O designs + video prototypes (25 files)
- **Logo assets:** `Logos/` — nav: `logo-mark-bold.png` with `filter:brightness(0)`. Footer: `logo-mark-golden-tight.png`.
- **Instructor photos:** `images/instructors/` — Dhiwa & Gloria (founders), Gloria (solo), Chido, Daniella, Irina, Meg, Imogen
- **Event images:** `images/` — per-location event graphics (social media assets, NOT for web use). Real class photography needed post-launch.

## Key Design Decisions

- **City order:** MK → Leicester → Reading everywhere (Mon, Tue, Wed)
- **MK pricing:** £10 flat for the night (Reading/Leicester: £10/£15)
- **Newcomer pass:** £20 at ALL locations including MK
- **8 sections:** Hero, Worry-Busters, Instructors, Social Proof, Getting Started, Schedule+Price, FAQ (4 Qs), Final CTA
- **Removed from homepage:** Why Bachata → /classes, Class Levels → /classes, Pricing → embedded in schedule, Private Coaching → /services/private-coaching
- **Hero:** Text-only (no photo), dark bg. Founders photo is in instructor section instead.
- **Event flyer images:** Not suitable for web — social media assets with text overlays. Use real class photography when available.

## Sibling Project Access Rules

**CRITICAL — READ CAREFULLY:**

- **Working directory:** `/Users/dhiwatdg/Projects/Latin Addiction Website/` — all edits happen here
- **Read-only access (NEVER write, edit, or delete):**
  - `/Users/dhiwatdg/Projects/Latin Addiction/` — business docs, marketing, financials
  - `/Users/dhiwatdg/Projects/latin-addiction/` — existing WordPress site (LocalWP)
- **All other directories outside the working directory are OFF LIMITS** — do not read, write, or access any other sibling folders or parent directories

These two sibling folders contain business context and the existing site structure. Reference them for content, pricing, class info, and site architecture — but never modify them.

## Business Context

For full business details, read (do not edit) these files:
- `../Latin Addiction/KNOWLEDGE-BASE.md` — single source of truth for operations, pricing, financials, strategy
- `../latin-addiction/CLAUDE.md` — existing WordPress site structure, pages, shop products, build progress

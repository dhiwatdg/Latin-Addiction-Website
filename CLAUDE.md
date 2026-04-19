# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

New website for **Latin Addiction UK**, a Bachata and Salsa dance school with locations in Milton Keynes, Leicester, and Reading.

- **Tech stack:** Astro 6.1 + Tailwind CSS 4.2 (via `@tailwindcss/vite`) + TypeScript
- **Node:** v22+ required (`.nvmrc` set)
- **Hosting:** Cloudflare Pages (free, auto-deploy from GitHub on push to `main`)
- **Payments:** SumUp Card Widget via Cloudflare Worker (on-site checkout)
- **Domain:** latinaddiction.co.uk (registered at Hostinger, DNS on Cloudflare)
- **Repo:** `dhiwatdg/Latin-Addiction-Website` → Cloudflare auto-builds on push to `main`

## Commands

```bash
source ~/.nvm/nvm.sh && nvm use 22  # Required before any npm command
npm run dev      # Dev server at localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Current Status (2026-04-19)

- **Phase 1:** DONE — Homepage + 3 location pages + 404 deployed to latinaddiction.co.uk
- **Phase 2:** PAUSED — /pricing page live but **SumUp on-site checkout disabled**; `.btn-checkout` clicks now redirect to `latinaddictionuk.sumupstore.com` (per-product deep-links where possible). Cloudflare Worker still deployed but orphaned. See memory `project_sumup_checkout_disabled.md`.
- **Phase 3:** MOSTLY DONE — 8 new pages built. Location pages redesigned with blurred hero backgrounds. Services + About hidden from nav (need design polish). Private coaching pricing WRONG (shows headcount columns, should be duration). /learn deferred.
- **Phase 3.5 (2026-04-19):** DONE — `/links` page live (tour-poster link-in-bio) at latinaddiction.co.uk/links/. Reading/Leicester location pages' "Buy newcomer pass" now deep-link directly to SumUp products.

## Build Phases

### Phase 1 — Go Live (DONE ✓)
Deployed 2026-04-03. Homepage (8 sections), /milton-keynes, /leicester, /reading, /404. Full accessibility (ARIA tabs, keyboard nav, skip-to-content, reduced-motion). Sitemap. Scroll reveal animations. All CTAs → WhatsApp or SumUp store (temporary).

### Phase 2 — On-Site Checkout (DONE ✓)
Deployed 2026-04-03. `/pricing` page with full pricing tables. Cloudflare Worker for SumUp Card Widget (on-site checkout). Worker at `latin-addiction-checkout.latin-addiction-uk.workers.dev`.

### Phase 3 — Full Site (MOSTLY DONE)
Built 2026-04-04. Location pages redesigned with blurred event image hero backgrounds, timeline schedules, level cards, featured reviews. New pages: /about, /faq, /reviews, /classes, /privacy, /services/private-coaching, /services/corporate, /services/hire-us. Schema markup on faq, reviews, classes, about, location pages.

**Still needed:**
- Fix private coaching pricing (duration columns, not headcount)
- Design polish on /about, /services/* before unhiding from nav
- /learn articles deferred to Phase 4
- OG share images per page

### Phase 3.5 — /links + SumUp simplification (DONE ✓)
Deployed 2026-04-19 (commit `7686499`). Added `/links` page (tour-poster link-in-bio) at latinaddiction.co.uk/links/. Stripped on-site SumUp Card Widget; `.btn-checkout` clicks now open sumupstore.com with per-product deep-links where a 1:1 match exists. `BaseLayout` now supports a `minimal={true}` prop that hides Header/Footer/WhatsAppButton/MobileStickyBar for bio-style pages.

### Quality Gate
After each major build step, use Codex plugin for code review. See memory `feedback_codex_usage_strategy.md`.

## Key Files

- **Design doc:** `docs/plans/2026-03-21-website-design.md` — single source of truth for business data and full site architecture
- **Phase 1 plan:** `docs/plans/2026-04-03-phase1-go-live.md` — 18-task implementation plan (completed)
- **Homepage prototype:** `prototypes/homepage-design-D-v2.html` — visual reference the Astro build reproduces
- **Location prototypes:** `prototypes/reading-v3.html`, `prototypes/leicester-v1.html`, `prototypes/mk-v1.html` — redesigned location page references
- **Phase 3 plan:** `docs/plans/2026-04-03-phase3-pages.md` — 8-page implementation plan (mostly completed)
- **Data files:** `src/data/locations.ts`, `pricing.ts`, `reviews.ts`, `faqs.ts`, `navigation.ts`
- **Video strategy:** `docs/plans/2026-03-23-video-strategy-design.md` — R2 hosting, poster-first hero. Post-launch.

## Project Structure

```
src/
  pages/           index, milton-keynes, leicester, reading, pricing, classes, about, faq, reviews, privacy, links, 404
  pages/services/  private-coaching, corporate, hire-us
  layouts/         BaseLayout.astro (HTML shell; supports `minimal` prop for bio-style pages)
  components/      Header, Footer, CheckoutModal (redirect shim), WhatsAppButton, MobileStickyBar, ScheduleCard, SEO
  data/            locations.ts, navigation.ts, reviews.ts, faqs.ts, pricing.ts
  styles/          global.css (Tailwind v4 @theme tokens, button styles, reveal animations, `.links-page` styles)
public/images/     instructors/ (7 photos), logos/ (2 logos), locations/ (3 bg images)
```

**Tailwind v4:** No `tailwind.config.mjs`. Design tokens in CSS `@theme` block in `global.css`. Uses `@tailwindcss/vite` plugin.

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

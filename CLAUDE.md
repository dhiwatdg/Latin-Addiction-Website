# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

New website for **Latin Addiction UK**, a Bachata and Salsa dance school with locations in Milton Keynes, Leicester, and Reading.

- **Tech stack:** Astro 6.1 + Tailwind CSS 4.2 (via `@tailwindcss/vite`) + TypeScript
- **Node:** v22+ required (`.nvmrc` set)
- **Hosting:** Cloudflare Pages (free, auto-deploy from GitHub on push to `main`)
- **Payments:** SumUp store links (temporary) → Phase 2: SumUp Card Widget + Cloudflare Worker for on-site checkout
- **Domain:** latinaddiction.co.uk (registered at Hostinger, DNS on Cloudflare)
- **Repo:** `dhiwatdg/Latin-Addiction-Website` → Cloudflare auto-builds on push to `main`

## Commands

```bash
source ~/.nvm/nvm.sh && nvm use 22  # Required before any npm command
npm run dev      # Dev server at localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Current Status (2026-04-03)

- **Phase 1:** LIVE — Homepage + 3 location pages + 404 deployed to latinaddiction.co.uk
- **Phase 2:** NOT STARTED — /pricing page + on-site SumUp checkout
- **Phase 3:** NOT STARTED — remaining pages (/services, /about, /faq, /reviews, /learn, etc.)

## Build Phases

### Phase 1 — Go Live (DONE ✓)
Deployed 2026-04-03. Homepage (8 sections), /milton-keynes, /leicester, /reading, /404. Full accessibility (ARIA tabs, keyboard nav, skip-to-content, reduced-motion). Sitemap. Scroll reveal animations. All CTAs → WhatsApp or SumUp store (temporary).

### Phase 2 — On-Site Checkout (next)
- `/pricing` page with full pricing tables (Leicester 3-class £18 tier, memberships, private coaching headline)
- Cloudflare Worker for SumUp Card Widget (on-site checkout, ~25 lines)
- Replace all SumUp store links with on-site checkout
- SumUp API key as Cloudflare Worker secret
- Set `NODE_VERSION=22` in Cloudflare Pages environment if build fails

### Phase 3 — Full Site
- `/services/private-coaching`, `/services/corporate`, `/services/hire-us`
- `/about`, `/faq`, `/reviews`, `/classes`, `/contact`, `/privacy`
- `/learn` — 3-5 SEO articles (Bachata vs Salsa, What to Wear, etc.)
- All schema markup (DanceStudio, FAQPage, Course, Organization)
- OG share images per page

### Quality Gate
After each major build step, use Codex plugin for code review (scaffold, layout/nav, homepage, location pages, final pre-push). See memory `feedback_codex_usage_strategy.md`.

## Key Files

- **Design doc:** `docs/plans/2026-03-21-website-design.md` — single source of truth for business data and full site architecture
- **Phase 1 plan:** `docs/plans/2026-04-03-phase1-go-live.md` — 18-task implementation plan (completed)
- **Homepage prototype:** `prototypes/homepage-design-D-v2.html` — visual reference the Astro build reproduces
- **Data files:** `src/data/locations.ts` — all venue/schedule/pricing/WhatsApp data
- **Video strategy:** `docs/plans/2026-03-23-video-strategy-design.md` — R2 hosting, poster-first hero. Post-launch.

## Project Structure

```
src/
  pages/           index.astro, milton-keynes.astro, leicester.astro, reading.astro, 404.astro
  layouts/         BaseLayout.astro (HTML shell, fonts, SEO, header/footer)
  components/      Header, Footer, WhatsAppButton, MobileStickyBar, ScheduleCard, SEO
  data/            locations.ts, navigation.ts, reviews.ts, faqs.ts
  styles/          global.css (Tailwind v4 @theme tokens, button styles, reveal animations)
public/images/     instructors/ (7 photos), logos/ (2 logos)
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

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

New website for **Latin Addiction UK**, a Bachata and Salsa dance school with locations in Leicester, Reading, and Milton Keynes.

- **Tech stack:** Astro + Tailwind CSS
- **Hosting:** Cloudflare Workers & Pages (free, auto-deploy from GitHub)
- **Payments:** SumUp (link to SumUp store for MVP; Card Widget + Cloudflare Worker planned for on-site checkout)
- **Domain:** latinaddiction.co.uk (registered at Hostinger, DNS on Cloudflare)
- **Repo:** `dhiwatdg/Latin-Addiction-Website` → Cloudflare auto-builds on push to `main`

## Current Status (2026-04-03)

- **Infrastructure:** DONE — Cloudflare account, DNS, Pages/Workers connected, custom domain wired
- **Content:** DONE — design doc + content draft v2.1 both updated with MK
- **Design choice:** PENDING — D choosing between prototypes M (warm), N (bold), O (dark)
- **Astro project:** NOT STARTED — scaffold when vibe is chosen, then build + push = live site

## Key Files

- **Design doc (SINGLE SOURCE OF TRUTH):** `docs/plans/2026-03-21-website-design.md` — all design decisions, content specs, technical requirements (updated 2026-04-03 with MK)
- **BUILD-PLAN.md** — partially stale (hosting/payments/nav superseded by design doc), but Astro project structure + verification checklists still valid
- **Archived plans:** `docs/plans/archive/` — superseded brainstorming docs
- **Prototypes (active):** `prototypes/new/` — 15 homepage design prototypes (A-O). A-H are the original 8 (3 design families). I-L are purple/gold brand palette variants. M-O are voting-informed final candidates (D's structure + E's typography + purple/gold at 3 intensity levels). See memory for intentional spec deviations.
- **Video prototypes:** `prototypes/video/` — 9 files showing video integration in designs B, F, G (3 variants each: poster, play button, autoplay simulation).
- **Video strategy:** `docs/plans/2026-03-23-video-strategy-design.md` — R2 hosting, poster-first hero, encoding pipeline, Astro components.
- **Contrast fixes plan:** `docs/plans/2026-03-22-palette-contrast-fixes.md` — audit results + exact CSS fixes applied per file
- **Prototypes (old):** `prototypes/old/` — 13 earlier prototypes from brainstorming phase, kept for CSS pattern reference
- **Homepage content draft (APPROVED v2.1):** `prototypes/new/homepage-content-draft.html` — v2.1 with MK. Fully reviewed/fact-checked/challenged. Ready for Astro build.
- **Logo assets:** `Logos/` — original PNGs + processed web variants. Use `logo-mark-bold.png` on light bg, `logo-mark-golden-tight.png` on dark bg.

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

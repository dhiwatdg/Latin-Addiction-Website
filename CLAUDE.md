# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

New website for **Latin Addiction UK**, a Bachata dance school with locations in Leicester and Reading.

- **Tech stack:** Astro + Tailwind CSS
- **Hosting:** Cloudflare Pages (free, auto-deploy from GitHub)
- **Payments:** SumUp Card Widget + Cloudflare Worker (on-site checkout)
- **Domain:** latinaddiction.co.uk (Hostinger, DNS pointed to Cloudflare)

## Key Files

- **Design doc (SINGLE SOURCE OF TRUTH):** `docs/plans/2026-03-21-website-design.md` — all design decisions, content specs, technical requirements
- **BUILD-PLAN.md** — partially stale (hosting/payments/nav superseded by design doc), but Astro project structure + verification checklists still valid
- **Archived plans:** `docs/plans/archive/` — superseded brainstorming docs
- **Prototypes (active):** `prototypes/new/` — 8 homepage design prototypes (3 designs × 3 variants, minus content draft). `homepage-design-01v1.html` is the reference file (Design A — Warm Earthy). All 8 prototypes are fully synced (content/structure/UX), WCAG AA contrast-fixed, and have palette-matched nav logos. Prototype phase complete — ready for design selection. See memory for intentional spec deviations.
- **Contrast fixes plan:** `docs/plans/2026-03-22-palette-contrast-fixes.md` — audit results + exact CSS fixes applied per file
- **Prototypes (old):** `prototypes/old/` — 13 earlier prototypes from brainstorming phase, kept for CSS pattern reference
- **Homepage content draft (APPROVED):** `prototypes/new/homepage-content-draft.html` — v2, fully reviewed/fact-checked/challenged. Ready for design phase.
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

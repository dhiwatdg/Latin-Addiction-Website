# MK → Bachata-only, Leicester format

**Date:** 2026-05-31
**Effective:** Monday 1 June 2026
**Status:** Approved, implementing

## Decision

Milton Keynes drops Salsa and becomes Bachata-only. Its class timing and
format now mirror Leicester exactly. Because MK was the school's *only* Salsa
location, the whole site becomes Bachata-only.

Confirmed with founder:
- **MK timing:** exact Leicester clock times (doors 7:00pm; Beginners 7:15;
  Improver/Intermediate 8:15; Intermediate/Advanced 9:15; social 10:15).
- **MK pricing:** stays **£10 flat for the night** (unchanged; not Leicester's
  £10/£15 split).
- **Rebrand scope:** Bachata-only brand, **keep true heritage mentions**
  (instructor bios, social-party music, corporate/DJ *services*, the
  educational "what's the difference" FAQ).

## New MK schedule

| Time | Class |
|---|---|
| 7:00pm | Doors open |
| 7:15pm | Beginners (1 hr) |
| 8:15pm | Improver / Intermediate (1 hr) |
| 9:15pm | Intermediate / Advanced (1 hr) |
| 10:15pm | FREE Social Party |

JSON-LD `openingHours` → `Mo 19:00-23:15` (matches Leicester's pattern).

## Edits

**Data**
- `locations.ts` (MK): rewrite `schedule`; `doorsOpen` 7:45pm→7:00pm;
  `danceStyles` →`['Bachata']`; `whatsappMessage` drop "Salsa &"; remove `note`.
- `pricing.ts:27`: checkout desc `(Bachata + Salsa)` → `(all classes + social)`.
- `faqs.ts` (both copies): "we teach both Salsa and Bachata in MK…" →
  "We teach Bachata at all our locations." Keep the educational comparison.

**MK page** `milton-keynes.astro`: title/desc, hero eyebrow + H1, "Two dances"
subhead, hardcoded timeline → new times, drop "both Bachata and Salsa" from
level cards, drop-in line, JSON-LD desc + openingHours.

**Brand sweep**
- `index.astro`: title/desc/eyebrow/subhead drop "& Salsa"; remove Salsa skill-pill.
- `classes.astro`: title/desc; delete "MK Salsa note" section; MK card → "Bachata · Every Monday".
- `about.astro`: desc/tagline/schema drop "& Salsa"; remove Salsa skill-pill; KEEP bio history.
- `links.astro`: MK `styles`→"Bachata"; eyebrow "Bachata · Salsa · UK"→"Bachata · UK";
  MK `fbEvent`→ `.../events/1002069732782044`.
- `pricing.astro`: desc; "Includes Bachata and Salsa (2 classes…)" → "all three classes + free social party"; data-description.
- `Footer.astro:22`: MK "from 7:45pm" → "from 7:00pm".

**Kept deliberately:** `corporate.astro` & `hire-us.astro` Salsa (services);
FAQ educational comparison; instructor bio "discovered Salsa and Bachata in 2019".

**Docs:** CLAUDE.md (remove "MK is our only Salsa location" + moot naming to-do);
`2026-03-21-website-design.md` note.

## Out of repo (founder handles)
- SumUp store category — **done** by founder.
- Facebook event — **done**, new MK event link folded into `links.astro`.

## Verification
`npm run build`; residual `grep -i salsa` shows only intended heritage mentions;
verification subagent re-sweep; Playwright visual check of MK page + homepage MK tab.

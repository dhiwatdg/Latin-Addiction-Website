# Prototype Gallery — Design Doc

**Date:** 2026-03-23
**Purpose:** Host the 8 homepage prototypes for team review and voting.

## Overview

A single interactive gallery page hosted on GitHub Pages. Team members visit one URL, browse all 8 prototypes in a tabbed interface, then vote via Google Form.

## Architecture

### File structure (gh-pages branch)

```
/ (branch root)
  index.html                        ← gallery page
  designs/
    homepage-design-01v1.html
    homepage-design-01v2.html
    homepage-design-01v3.html
    homepage-design-02v1.html
    homepage-design-02v2.html
    homepage-design-02v3.html
    homepage-design-03v1.html
    homepage-design-03v2.html
  logos/
    logo-mark-bold.png
    logo-mark-golden-tight.png
```

### Gallery page (index.html)

**Header:** "Latin Addiction — Homepage Design Review" with brief instructions for reviewers.

**Tabbed navigation:**
- Grouped by design family:
  - Design A — Warm Earthy (v1, v2, v3)
  - Design B (v1, v2, v3)
  - Design C (v1, v2)
- Active tab highlighted, others dimmed

**Preview area:**
- Single full-width iframe showing the selected prototype
- Iframe height: viewport height minus header/tabs (~80vh)
- Scrollable within the iframe so reviewers see the full page
- **Lazy-loaded:** only the active prototype loads. On tab switch, the previous iframe src is cleared and the new one is set. Prevents loading all 8 at once.

**Vote CTA:**
- Sticky bottom bar or prominent button: "Cast your vote →"
- Opens Google Form in new tab
- Google Form fields (created manually by D):
  - "Your name" (short text)
  - "Pick your top 1-2 designs" (checkboxes: 01v1, 01v2, 01v3, 02v1, 02v2, 02v3, 03v1, 03v2)
  - "Any comments?" (long text, optional)

**Mobile:**
- Tabs collapse to a dropdown selector
- Iframe scales to full width
- Vote button stays visible

### Design decisions

| Decision | Rationale |
|---|---|
| Single iframe, not side-by-side | Prototypes are full-width designs — cramped at 50% |
| Lazy-load iframes | 8 × 60KB + 8 font loads = bad performance |
| Google Form link, not embed | Form iframes are finicky with responsive sizing |
| gh-pages branch, not /docs | Keeps gallery artifacts off the main branch entirely |
| Copy logos into deploy | Avoids relative path issues; originals untouched |

## Hosting

- **Platform:** GitHub Pages (free, public repo)
- **Branch:** `gh-pages` (orphan branch — no history from main)
- **URL:** `https://dhiwatdg.github.io/Latin-Addiction-Website/`
- **Deploy:** Push to gh-pages → auto-deploys
- **Cleanup:** Delete gh-pages branch when done → site disappears

## Prototype file changes for deploy

The prototype HTML files reference logos via `../../Logos/logo-mark-bold.png`. In the deploy structure, logos are at `../logos/`. The copied prototype files in `designs/` will have their paths updated:
- `../../Logos/logo-mark-bold.png` → `../logos/logo-mark-bold.png`
- `../../Logos/logo-mark-golden-tight.png` → `../logos/logo-mark-golden-tight.png`

Original files on `main` branch are never modified.

## What D needs to do manually

1. Create a Google Form with the 3 fields above
2. Share the form URL so it can be linked from the gallery
3. Share the GitHub Pages URL with the team
4. When voting is complete, delete the gh-pages branch

## Tech stack

- Gallery page: plain HTML + CSS + vanilla JS (no build step, no dependencies)
- Matches the prototype approach — self-contained, inline everything

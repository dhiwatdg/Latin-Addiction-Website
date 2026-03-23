# Homepage Prototype Sync — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Sync all 8 homepage prototype files so they share identical content, structure, navigation, and universal UX/accessibility fixes. `homepage-design-01v1.html` is the reference — all other files must match it.

**Architecture:** 3 parallel agents (grouped by file similarity) + 1 verification agent. Each agent reads 01v1 as reference, then applies changes to its assigned files. The verification agent runs after all 3 complete and checks every file against 01v1.

**Tech Stack:** HTML/CSS edits on single-file prototypes. Each file is a self-contained HTML page with inline CSS and vanilla JS.

---

## Reference File

**`prototypes/new/homepage-design-01v1.html`** — the source of truth for content, structure, navigation, and UX fixes. Read this file COMPLETELY before touching any target file.

## Key Context (READ BEFORE STARTING)

- **Memory file:** `/Users/dhiwatdg/.claude/projects/-Users-dhiwatdg-Projects-Latin-Addiction-Website/memory/feedback_prototype_vs_spec.md` — lists intentional deviations from the design doc. Do NOT "fix" these back to spec.
- **Memory file:** `/Users/dhiwatdg/.claude/projects/-Users-dhiwatdg-Projects-Latin-Addiction-Website/memory/project_prototype_refinement.md` — full changelog of 01v1 refinements.
- All files share the same content but have DIFFERENT visual palettes (colors, fonts, textures). **Preserve each file's unique CSS styling** — only sync content, HTML structure, and universal UX fixes.
- The files are dense (single lines, 20K+ tokens each). Be careful with string replacements — verify each edit landed correctly.
- **03v2 uses different CSS class names** throughout. Full mapping:

| 01v1 class/ID | 03v2 equivalent |
|--------------|----------------|
| `#nav` | `#site-nav` |
| `.hamburger` | `#hamburger-btn` |
| `#mob-menu` | `#mobile-menu` |
| `.faq-btn` | `.faq-trigger-b` |
| `.faq-ans` | `.faq-answer-b` |
| `.faq-chev` | `.faq-chevron-b` |
| `.tab` | `.loc-tab` |
| `.panel` / `#p-reading` | `.loc-panel` / `#panel-reading` |
| `.waf` | `.wa-float-b` |
| `.mob-bar` | `.sticky-mobile-b` |
| `.reveal` | `.reveal` (same) |

- **Nav height:** 01v1 uses 72px nav height. All other files use 64px. When transplanting nav HTML, **keep each file's existing height** (64px). Adjust `scroll-margin-top`, mobile menu `top` offset, and `min-height:calc(100vh - Xpx)` accordingly.
- **Scroll reveal class:** Most files use `.reveal` but some use `.rv` (check per file). When adding new elements (eyebrows), use the file's existing reveal class.
- **Tickers:** 03v1 and 03v2 have scrolling tickers above the hero containing "100+ students weekly". Update ticker text to use city-specific stats to match trust bar change.

---

## What Needs Syncing (Reference: 01v1)

### A. Navigation Structure (ALL 7 files)
01v1 has dropdown nav; all others have flat links. Must transplant:

**Desktop nav:** `<ul class="nav-links">` with 6 `<li>` items. Items 5 and 6 have `class="has-dd"` with nested `<ul class="dd">`:
- Services ▼: Private Coaching, Corporate, Hire Us
- About ▼: Our Story, FAQ, Reviews, Learn

**Mobile nav:** `<div id="mob-menu">` (or `#mobile-menu` in 03v2) with:
- 4 direct links (Home, Reading, Leicester, Pricing)
- 2 `<div class="mob-group">` sections with `<span class="mob-label">` and `<a class="mob-sub">` items
- WhatsApp CTA at bottom

**Nav CSS required** (add to each file's `<style>`, adapted to palette):
- `.has-dd{position:relative}` + `.dd{display:none;position:absolute;...}` + `.has-dd:hover .dd{display:block}`
- `.dd` styling: background matches file's nav bg, border-radius, shadow, padding
- `.dd-arrow` (notch): CSS triangle pointing up
- `.has-dd::after` (hover bridge): invisible bridge between link and dropdown to prevent disappearing
- `#mob-menu .mob-group` + `.mob-label` + `.mob-sub`: grouped mobile sections with accent-colored labels and pill-style sub-items

**Color adaptation per file (VERIFIED from actual CSS):**
| File | Body bg | Nav bg (solid for dropdown) | Primary accent | Muted/secondary | Text color | Nav height |
|------|---------|---------------------------|----------------|----------------|------------|-----------|
| 01v2 | `#FFF8F0` cream | `#FFF8F0` | `#B8860B` gold | `#4F6A88` slate-blue | `#3D1F0D` | 64px |
| 01v3 | `#f8fafc` cool gray | `#f8fafc` | `#06d6a0` mint/teal | `#64748b` slate | white on dark, `#1e293b` on light | 64px |
| 02v1 | `#0a0a0a` black | `#0a0a0a` | `#D4A843` gold | `#F5C563` light gold | `#e8e0d4` cream | 64px |
| 02v2 | `#0C0A09` dark brown | `#0C0A09` | `#EA580C` orange | `#FDBA74` peach | `#D6D3D1` taupe | 64px |
| 02v3 | `#FFFFFF` white | `#FFFFFF` | `#E11D48` rose | `#555` gray | `#111111` | 64px |
| 03v1 | `#FAFAFA` off-white | `#FAFAFA` | `#EF4444` red | `#6B6B6B` gray | `#0A0A0A` | 64px |
| 03v2 | `#1A1A1A` charcoal | `#1A1A1A` | `#D4AF37` gold | `#F0E6D3` cream | `#F0E6D3` cream | 64px |

### B. Content Changes (ALL 7 files unless noted)

| # | Change | Where in HTML | Files |
|---|--------|--------------|-------|
| 1 | **Trust bar**: Replace `100+ students weekly` with two items: `~300 in Reading` + `~100 in Leicester` | Hero trust bar (inside `.trust-bar` or equivalent) | 01v2, 01v3, 02v1, 02v2, 02v3, 03v1, 03v2 |
| 2 | **"WHY BACHATA" eyebrow**: Add eyebrow before the Why Bachata `<h2>`. For 01v2-02v3 use 01v1's pattern: `<div class="eye eye-c reveal"><span>Why Bachata</span></div>`. For 03v1 use its section-number pattern (e.g., `"02"` + `"Why Bachata"` like its other sections). | Why Bachata section | 01v2, 01v3, 02v1, 02v2, 02v3, 03v1 (03v2 already has it — just remove the question mark) |
| 3 | **Instructors CTA**: `Meet the Team in Class` → `Claim your free class` | Instructors section, last CTA link | 01v2, 01v3, 02v1, 02v2, 02v3, 03v1 |
| 4 | **"Coming regularly?" line**: Add `Coming regularly? Passes from £8/class.` after the "Cash and card" paragraph in pricing | Pricing section, after drop-in table | 01v2, 01v3, 02v1, 02v2, 02v3, 03v1, 03v2 |
| 5 | **03v1: "Music You'll Connect With"** → `Music you'll actually connect with` (missing word "actually") | Why Bachata card 2 title | 03v1 only |
| 6 | **03v1: Reading parking** → `FREE on premises — register at the kiosk to avoid a fine.` (add "the" before kiosk) | Schedule Reading section | 03v1 only |
| 7 | **03v1: Missing "Classes running now"** eyebrow → add it above final CTA heading | Final CTA section | 03v1 only |

### C. 03v2-Specific Content Sync (EXTENSIVE)

03v2 has the original content draft text in many places. It needs to be synced to 01v1's versions:

| # | Section | 03v2 currently has | Should match 01v1 |
|---|---------|-------------------|------------------|
| 1 | Instructor body | Founder story (Dhiwa & Gloria names, personal narrative) | Generic team copy ("The Latin Addiction team have been dancing...") |
| 2 | Instructor attribution | "— Dhiwa & Gloria" | "— The Latin Addiction team" |
| 3 | Team card subtitle | "Reading & Leicester" only | "Reading & Leicester · Bachata & Sensual" |
| 4 | Reviews | Extended full-length quotes | Shortened versions (match 01v1 exactly) |
| 5 | Social Proof heading | "Reviews" | "What our students say" |
| 6 | Why Bachata card descriptions | 3 of 4 have extra sentences | Match 01v1's shorter versions |
| 7 | Class level descriptions | All 4 have extra sentences | Match 01v1's shorter versions |
| 8 | Typical class steps | All 4 shortened | Match 01v1's longer versions |
| 9 | Typical class numbering | 1,2,3,4 | 01,02,03,04 |
| 10 | Reading parking text | "FREE on the premises — register your car at the kiosk..." | "FREE on premises — register at the kiosk to avoid a fine." |
| 11 | FAQ parking answer | Extra "when you arrive" | Match 01v1 |
| 12 | Why Bachata CTA | "Claim your free class" | "Try it free" |
| 13 | Getting Started CTA | "Claim your free class" | "Start here" |
| 14 | Trust bar | Missing "4+ years running", has "100+ students weekly" and "No partner needed" instead of city stats | Replace with 01v1's 4 items: ★ 5.0 on Google, ~300 in Reading, ~100 in Leicester, 4+ years running |
| 15 | "8+ trained instructors" line | Present | Remove |
| 16 | Private Coaching section | Present (12 sections) | Remove (01v1 has 11 sections) |
| 17 | Instagram grid + "Follow us on Instagram" | Present | Remove |
| 18 | "Bring a friend or come alone" line | Present | Remove |
| 19 | Social Proof CTA | "Claim your free class" | "Try a free class" (matches all other files) |
| 20 | "Why Bachata?" eyebrow | Has question mark | Remove question mark → "Why Bachata" |

### D. 03v2-Specific CSS Fixes

| # | Fix | Detail |
|---|-----|--------|
| 1 | Hamburger touch target | Add `min-width:44px;min-height:44px` to `.hamburger` |
| 2 | Tab touch target | Add `min-height:44px` to `.loc-tab` |
| 3 | focus-visible incomplete | Add missing selectors: `.btn`, `.loc-tab`, `.faq-trigger-b` |
| 4 | prefers-reduced-motion | Fix syntax error (`}{}`), add missing element selectors |
| 5 | Nav scroll shadow | Add JS: `window.addEventListener('scroll',()=>{document.getElementById('site-nav').classList.toggle('scrolled',window.scrollY>10)})` (NOTE: 03v2 uses `#site-nav` not `#nav`) + add `#site-nav.scrolled` CSS class with box-shadow |

### E. Worry-Buster Icons Note

01v1 uses SVG icons in worry-buster cards. Other files use emoji text (👫, 🌟, 🎁). **This is a design choice per file — leave as-is.** Do not sync icons/emojis between files.

### F. Nav Logo Note

01v1 has a logo image (`<img src="../../Logos/logo-mark-bold.png">`) + "Latin Addiction" text in the nav. Other files have plain text or ALL CAPS text-only logos. **When transplanting the nav, include the logo image.** The relative path `../../Logos/logo-mark-bold.png` works for all files since they're all in `prototypes/new/`. 03v1/03v2 use "LATIN ADDICTION" (ALL CAPS) — when transplanting the nav, keep the image but use uppercase text to match their design aesthetic.

### G. Title Case Note (03v1 and 03v2)

03v1 and 03v2 use Title Case for all headings (e.g., "Simple, Fair Prices" vs "Simple, fair prices"). **This is a design choice for their brutalist/Bebas Neue aesthetic — leave Title Case as-is.** Only fix content accuracy issues (missing words, wrong text), not casing.

---

## Task 1: Sync 01v2, 01v3, 02v2, 02v3 (4 identical files)

**Files:** `prototypes/new/homepage-design-01v2.html`, `homepage-design-01v3.html`, `homepage-design-02v2.html`, `homepage-design-02v3.html`

**Reference:** `prototypes/new/homepage-design-01v1.html`

**Step 1: Read 01v1 completely.** Extract:
- Full nav HTML (the `<nav>` tag through `</nav>`)
- Nav-related CSS (everything for `.nav-links`, `.has-dd`, `.dd`, `.dd-arrow`, `#mob-menu`, `.mob-group`, `.mob-label`, `.mob-sub`)
- Trust bar HTML
- "WHY BACHATA" eyebrow HTML
- Instructors CTA HTML
- "Coming regularly?" line HTML

**Step 2: For each of the 4 target files:**
1. Read the file completely
2. Identify the file's accent color, nav bg, text color from its CSS
3. Replace the `<nav>...</nav>` with 01v1's nav structure, adapting colors:
   - Dropdown bg → file's nav bg color (solid, not rgba)
   - Hover/accent color → file's primary accent
   - `.mob-label` color → file's primary accent
   - `.mob-sub` border color → file's card border color
   - Mobile menu CTA color → file's primary accent
4. Add dropdown CSS to the file's `<style>` block (before `</style>`), using the file's palette colors
5. Replace trust bar items: remove `100+ students weekly`, add `~300 in Reading` + `~100 in Leicester`
6. Add "WHY BACHATA" eyebrow before the Why Bachata `<h2>` (use file's existing eyebrow class pattern)
7. Replace instructors CTA text: `Meet the Team in Class` → `Claim your free class`
8. Add "Coming regularly? Passes from £8/class." line after "Cash and card" paragraph in pricing

**Step 3: Verify each file** — open in Playwright at 375px, check:
- Nav has 6 items with Services/About dropdowns on desktop
- Mobile hamburger opens with grouped sub-items
- Trust bar shows city-specific stats
- "WHY BACHATA" eyebrow visible
- Instructors CTA says "Claim your free class"

**Step 4: Commit**
```bash
git add prototypes/new/homepage-design-01v2.html prototypes/new/homepage-design-01v3.html prototypes/new/homepage-design-02v2.html prototypes/new/homepage-design-02v3.html
git commit -m "design: sync 01v2, 01v3, 02v2, 02v3 to 01v1 (nav dropdowns, content, trust bar)"
```

---

## Task 2: Sync 02v1 + 03v1

**Files:** `prototypes/new/homepage-design-02v1.html`, `homepage-design-03v1.html`

**Reference:** `prototypes/new/homepage-design-01v1.html`

**Same as Task 1 steps 1-4, PLUS these additional fixes:**

**02v1 specific:**
- The Why Bachata heading wraps "Bachata" in a `<span>` for styling. Keep the span but ensure content matches.

**03v1 specific (do NOT change Title Case — it's a design choice):**
- Fix Why Bachata card 2: add "actually" → "Music You'll Actually Connect With"
- Fix Reading parking: add "the" → "register at the kiosk"
- Add "Classes running now" eyebrow above final CTA heading (match 03v1's existing eyebrow pattern with section number)
- 03v1 has a scrolling ticker — leave it as-is
- 03v1 has section number labels — leave them as-is
- 03v1 has video placeholder in hero — leave it as-is

**Step 5: Commit**
```bash
git add prototypes/new/homepage-design-02v1.html prototypes/new/homepage-design-03v1.html
git commit -m "design: sync 02v1, 03v1 to 01v1 (nav dropdowns, content, 03v1 fixes)"
```

---

## Task 3: Sync 03v2 (The Big One)

**Files:** `prototypes/new/homepage-design-03v2.html`

**Reference:** `prototypes/new/homepage-design-01v1.html`

**CRITICAL:** 03v2 uses different CSS class names throughout. Do NOT blindly copy CSS from 01v1. Adapt to 03v2's naming:
- `.faq-trigger-b` not `.faq-btn`
- `.loc-tab` not `.tab`
- `.wa-float-b` not `.waf`
- `#mobile-menu` not `#mob-menu`
- `.sticky-mobile-b` not `.mob-bar`

**Step 1: Read 01v1 and 03v2 completely.**

**Step 2: Nav structure**
- Replace 03v2's nav with dropdown version, adapted to its dark/gold palette (#1A1A1A bg, #D4AF37 gold accent, #F0E6D3 text)
- 03v2 uses `#mobile-menu` — keep this ID but add the grouped sub-items structure

**Step 3: Content sync** (see Section C above — 20 items)
Apply ALL 20 content changes listed in Section C. The key ones:
- Rewrite instructor section from founder story → generic team copy
- Shorten all 4 review quotes to match 01v1
- Remove Private Coaching section entirely
- Remove Instagram grid
- Remove "Bring a friend" and "8+ instructors" lines
- Fix all CTA text to match 01v1
- Add missing trust bar item
- Fix parking text and FAQ answer

**Step 4: CSS fixes** (see Section D above — 5 items)
- Hamburger and tab touch targets
- Fix focus-visible selectors
- Fix prefers-reduced-motion (remove `}{}` syntax error, add missing selectors)
- Add nav scroll shadow JS + CSS

**Step 5: Verify in Playwright** at 375px:
- All 11 sections (not 12 — Private Coaching removed)
- Nav dropdowns work
- Content matches 01v1 (spot-check: trust bar, reviews, instructors, pricing)
- WhatsApp float hidden on mobile
- FAQ accordion works
- Tabs switch correctly

**Step 6: Commit**
```bash
git add prototypes/new/homepage-design-03v2.html
git commit -m "design: sync 03v2 to 01v1 (nav, content rewrite, CSS fixes)"
```

---

## Task 4: Full Cross-File Verification

**After Tasks 1-3 complete.** Do NOT run this in parallel — it must verify the completed work.

**Files:** All 8 prototype files

**Step 1: Content verification script**
For each of the following, verify the value is identical across all 8 files (extract via grep/sed):
- Hero headline text
- Hero trust bar items (should be: 5.0 Google, ~300 Reading, ~100 Leicester, 4+ years running — 4 items)
- "Already dance?" href (should be `#pricing`)
- Social Proof CTA text (should be "Try a free class")
- Why Bachata CTA text (should be "Try it free")
- Getting Started CTA text (should be "Start here")
- Instructors CTA text (should be "Claim your free class")
- "Coming regularly? Passes from £8/class." line present in pricing
- "Why Bachata" eyebrow present in each file (adapted to design pattern)
- FAQ question count (should be 7)
- Final CTA heading text
- "Classes running now" eyebrow present above final CTA
- Section count (should be 11, not 12 — no Private Coaching)
- WhatsApp number (447424063798) count per file
- All social media URLs
- Ticker content (03v1/03v2): should NOT contain "100+ students weekly"

**Step 2: Nav structure verification**
For each file, verify:
- Services dropdown contains 3 items (Private Coaching, Corporate, Hire Us)
- About dropdown contains 4 items (Our Story, FAQ, Reviews, Learn)
- Mobile menu has grouped sub-items

**Step 3: Universal CSS fix verification**
For each file, verify presence of:
- `focus-visible` CSS rule
- `prefers-reduced-motion` media query
- WhatsApp float hidden on mobile
- Hamburger min-height/min-width 44px
- Tab min-height 44px
- Mobile menu solid bg + full-height

**Step 4: Playwright spot-checks**
Open 3 files in Playwright at 375px mobile:
- One from each group (e.g., 01v2, 02v1, 03v2)
- Test: hamburger menu opens with dropdowns, FAQ accordion works, tabs switch, page renders without errors

**Step 5: Report**
List any remaining discrepancies. If clean, confirm all files are synced.

**Step 6: Final commit (if any fixes needed)**
```bash
git add prototypes/new/
git commit -m "design: all 8 prototypes synced — verified"
```

---

## Execution Notes

- **Tasks 1, 2, 3 can run in parallel.** Task 4 must run after all three complete.
- **Each file is ~20K tokens.** Agents should read files in chunks if needed.
- **The nav dropdown HTML+CSS is the biggest change.** Extract it from 01v1 once, then adapt the palette for each target file.
- **03v2 is the hardest** — budget extra time/attention for it. It has 20 content changes + 5 CSS fixes + nav rebuild.
- **Title Case in 03v1/03v2 is intentional** — do not change heading casing. Only fix content accuracy (missing words, wrong text).
- **Test HTTP server:** `python3 -c "import http.server,socketserver,os;os.chdir('/Users/dhiwatdg/Projects/Latin Addiction Website');handler=http.server.SimpleHTTPRequestHandler;httpd=socketserver.TCPServer(('',8788),handler);print('Server on 8788');httpd.serve_forever()" &`

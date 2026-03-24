# Video Prototype Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create 9 video-integrated prototype HTML files showing how video would look in designs B, F, and G.

**Architecture:** Copy each base prototype, modify hero section (poster placeholder + Ken Burns / play button / autoplay simulation), and add vertical video clip grid to social proof section. Each file is self-contained HTML. No actual video files — simulated with CSS gradients, animations, and placeholder UI.

**Tech Stack:** HTML, CSS, vanilla JS (minimal). No build tools. No external dependencies.

**Execution:** 3 parallel Opus agents, one per design. Each agent creates 3 variant files. All agents must use the shared CSS patterns defined in this document for consistency.

---

## Pre-Task: Create Folder

```bash
mkdir -p "/Users/dhiwatdg/Projects/Latin Addiction Website/prototypes/video"
```

---

## Shared CSS Patterns

Every agent MUST use these exact CSS patterns (adapted to each design's palette). This ensures visual consistency across all 9 files.

### Ken Burns Animation

```css
/* Ken Burns — poster slow zoom/pan, 15s loop */
@keyframes ken-burns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.08) translate(VAR_X, VAR_Y); }
}
.hero-poster {
  position: absolute;
  inset: 0;
  background: VAR_GRADIENT;
  animation: ken-burns 15s ease-in-out infinite alternate;
  z-index: 0;
}
/* Label on poster */
.poster-label {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: .65rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(255,255,255,.3);
  white-space: nowrap;
  z-index: 1;
}
```

Per-design VAR values:

| Design | VAR_GRADIENT | VAR_X | VAR_Y |
|--------|-------------|-------|-------|
| B | `radial-gradient(ellipse at 40% 60%, #2C1810 0%, #1A0F0A 50%, #0F172A 100%)` | `1%` | `0` |
| F | `radial-gradient(ellipse at 35% 55%, #2A1015 0%, #1A0A0A 50%, #0D0505 100%)` | `0` | `1%` |
| G | `radial-gradient(ellipse at 55% 45%, #1A1111 0%, #111111 50%, #0A0A0A 100%)` | `-0.5%` | `-0.5%` |

### Play Button (v1-play only)

```css
.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform .3s;
}
.play-btn:hover { transform: translate(-50%, -50%) scale(1.08); }
.play-ring {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid VAR_RING_COLOR;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.3);
  backdrop-filter: blur(8px);
}
.play-ring svg { margin-left: 4px; }
.play-label {
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.6);
}
```

Per-design VAR_RING_COLOR: B = `#D4A843`, F = `rgba(225,29,72,.6)`, G = `rgba(255,255,255,.5)`
Per-design play triangle fill: B = `#FFF8F0`, F = `#fecdd3`, G = `#FAFAFA`

### Video Modal (v1-play only)

```css
.video-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,.85);
  backdrop-filter: blur(4px);
  align-items: center;
  justify-content: center;
}
.video-modal.active { display: flex; }
.video-modal-inner {
  width: 90%;
  max-width: 720px;
  aspect-ratio: 16/9;
  background: #111;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
}
.video-modal-inner p {
  font-size: .85rem;
  color: #999;
}
.video-modal-inner .modal-sub {
  font-size: .72rem;
  color: #666;
}
.modal-close {
  position: absolute;
  top: -2.5rem;
  right: 0;
  background: none;
  border: none;
  color: #999;
  font-size: .82rem;
  cursor: pointer;
}
.modal-close:hover { color: #fff; }
```

```html
<!-- Modal HTML (add before </body>) -->
<div class="video-modal" id="video-modal" onclick="if(event.target===this)this.classList.remove('active')">
  <div class="video-modal-inner">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="#444"><polygon points="8,5 19,12 8,19"/></svg>
    <p>Video would load from Cloudflare R2 here</p>
    <p class="modal-sub">Beginners.mov — newcomer-focused clip, 5-8 seconds</p>
    <button class="modal-close" onclick="document.getElementById('video-modal').classList.remove('active')">✕ Close</button>
  </div>
</div>
```

### Autoplay Simulation (v1.5-autoplay only)

```css
/* Animated shimmer over poster to simulate video playback */
@keyframes autoplay-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.hero-poster.simulated-autoplay {
  /* Keep ken-burns, add shimmer overlay via ::after */
}
.hero-poster.simulated-autoplay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    VAR_SHIMMER_COLOR 45%,
    transparent 55%
  );
  background-size: 200% 100%;
  animation: autoplay-shimmer 6s ease-in-out infinite;
  mix-blend-mode: soft-light;
  opacity: .4;
  pointer-events: none;
}
/* Badge */
.autoplay-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: .6rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: .3rem .8rem;
  background: rgba(0,0,0,.5);
  border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.5);
  z-index: 6;
  display: flex;
  align-items: center;
  gap: .4rem;
}
.autoplay-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: VAR_DOT_COLOR;
  animation: pulse 2s infinite;
}
/* Toggle */
.autoplay-toggle {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .65rem;
  color: rgba(255,255,255,.4);
  cursor: pointer;
}
.autoplay-toggle input { cursor: pointer; }
```

Per-design: VAR_SHIMMER_COLOR: B = `rgba(184,134,11,.3)`, F = `rgba(225,29,72,.25)`, G = `rgba(220,38,38,.2)`
Per-design: VAR_DOT_COLOR: B = `#D4A843`, F = `#E11D48`, G = `#DC2626`

Desktop-only: Wrap the shimmer `::after` and autoplay badge in `@media(min-width:768px)`. On mobile, the poster shows Ken Burns only (no shimmer), simulating the fallback.

```css
@media(max-width:767px) {
  .hero-poster.simulated-autoplay::after { display: none; }
  .autoplay-badge { display: none; }
}
```

### Autoplay Toggle JS (v1.5-autoplay only)

```html
<script>
function toggleAutoplay(enabled) {
  const poster = document.querySelector('.hero-poster');
  const badge = document.querySelector('.autoplay-badge');
  const label = document.querySelector('.toggle-label');
  if (enabled) {
    poster.classList.add('simulated-autoplay');
    if (badge) badge.style.display = 'flex';
    if (label) label.textContent = 'Autoplay enabled';
  } else {
    poster.classList.remove('simulated-autoplay');
    if (badge) badge.style.display = 'none';
    if (label) label.textContent = 'Autoplay blocked (Low Power Mode)';
  }
}
</script>
```

### Vertical Video Clips Grid (ALL 9 files)

Add this section ABOVE the existing review quotes inside the social proof section.

```css
/* Vertical video clip cards */
.clip-grid {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
@media(min-width:768px) {
  .clip-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: visible;
  }
}
.clip-card {
  flex: 0 0 200px;
  scroll-snap-align: start;
  transition: transform .3s, border-color .3s;
}
@media(min-width:768px) {
  .clip-card { flex: none; }
}
.clip-card:hover { transform: translateY(-3px); }
.clip-poster {
  aspect-ratio: 9/16;
  background: VAR_CLIP_BG;
  border: 1px solid VAR_CLIP_BORDER;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  position: relative;
  overflow: hidden;
  margin-bottom: .5rem;
  VAR_CLIP_BORDER_RADIUS
}
.clip-card:hover .clip-poster { border-color: VAR_CLIP_HOVER_BORDER; }
.clip-play {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,.4);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.3);
}
.clip-play svg { margin-left: 2px; }
.clip-dur {
  font-size: .6rem;
  color: rgba(255,255,255,.35);
  letter-spacing: .05em;
}
.clip-label {
  font-size: .75rem;
  color: VAR_CLIP_LABEL_COLOR;
  font-weight: 500;
}
.clip-sub {
  font-size: .65rem;
  color: VAR_CLIP_SUB_COLOR;
}
```

Per-design values:

| VAR | B | F | G |
|-----|---|---|---|
| VAR_CLIP_BG | `rgba(15,23,42,.8)` | `rgba(17,17,17,.8)` | `#1C1C1C` |
| VAR_CLIP_BORDER | `rgba(184,134,11,.12)` | `rgba(225,29,72,.1)` | `#2E2E2E` |
| VAR_CLIP_HOVER_BORDER | `rgba(184,134,11,.35)` | `rgba(225,29,72,.3)` | `#444` |
| VAR_CLIP_BORDER_RADIUS | `border-radius:10px;` | `border-radius:10px;` | (none — square, brutalist) |
| VAR_CLIP_LABEL_COLOR | `#FFF8F0` | `#fff` | `#FAFAFA` |
| VAR_CLIP_SUB_COLOR | `rgba(255,248,240,.4)` | `rgba(255,255,255,.4)` | `#999` |

```html
<!-- Clip grid HTML (same content for all 9 files, palette adapted) -->
<div class="clip-grid">
  <div class="clip-card"><div class="clip-poster"><div class="clip-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.7)"><polygon points="8,5 19,12 8,19"/></svg></div><span class="clip-dur">0:08</span></div><p class="clip-label">Beginner class</p><p class="clip-sub">What your first night looks like</p></div>
  <div class="clip-card"><div class="clip-poster"><div class="clip-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.7)"><polygon points="8,5 19,12 8,19"/></svg></div><span class="clip-dur">0:12</span></div><p class="clip-label">Social party</p><p class="clip-sub">The FREE party after every class</p></div>
  <div class="clip-card"><div class="clip-poster"><div class="clip-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.7)"><polygon points="8,5 19,12 8,19"/></svg></div><span class="clip-dur">0:06</span></div><p class="clip-label">Community vibes</p><p class="clip-sub">Why people keep coming back</p></div>
  <div class="clip-card"><div class="clip-poster"><div class="clip-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.7)"><polygon points="8,5 19,12 8,19"/></svg></div><span class="clip-dur">0:10</span></div><p class="clip-label">Partner work</p><p class="clip-sub">Connection over choreography</p></div>
</div>
```

---

## Task 1: Design B — 3 Variants (Agent 1)

**Base file:** `prototypes/new/homepage-design-01v2.html`
**Output files:**
- `prototypes/video/B-v1-poster.html`
- `prototypes/video/B-v1-play.html`
- `prototypes/video/B-v1.5-autoplay.html`

**Design palette:** Cream #FFF8F0 / Navy #0F172A / Gold #B8860B
**Fonts:** Source Serif 4 + Poppins
**CSS classes:** `.rv` for reveal, `.d1`-`.d4` for delays, `.fd` for serif

### Step 1: Copy base file to B-v1-poster.html

Copy `prototypes/new/homepage-design-01v2.html` to `prototypes/video/B-v1-poster.html`.

### Step 2: Add poster CSS to B-v1-poster.html

In the `<style>` block, after the hero CSS comment `/* ━━ HERO ━━ */`, add:
- The Ken Burns `@keyframes` with B's translate values (`1%, 0`)
- `.hero-poster` with B's gradient and `z-index:0`
- `.poster-label` styles
- `prefers-reduced-motion` media query that disables the ken-burns animation

### Step 3: Modify hero HTML in B-v1-poster.html

The hero section starts at `<!-- HERO -->`. The hero is `<section class="hero sec dots">`. Inside it, the `.wrap.hero-content` has `position:relative;z-index:2`.

Add BEFORE the `.wrap.hero-content` div (but inside the `<section>`):
```html
<div class="hero-poster" aria-hidden="true">
  <span class="poster-label">Poster: beginner class footage</span>
</div>
```

The existing `::before` radial gradient on `.hero` provides additional depth. Keep it.

### Step 4: Add video clips grid to social proof section

The social proof section is `<section class="bg-n proof sec">`. Inside the `.wrap`, add the clip grid HTML BEFORE the eyebrow div (`<div class="eye rv"...>`). Wait — actually add it AFTER the main hero-quote and BEFORE the mini review cards grid. Specifically, insert it after the closing `</div>` of `.hero-quote` and before the opening of `.g3`.

Use B's palette values for all clip card VAR_ variables.

### Step 5: Update title to indicate this is a video variant

Change `<title>` to include `— Video: Poster` suffix.

### Step 6: Verify B-v1-poster.html

Open in browser. Check:
- Hero has visible poster gradient with Ken Burns zoom/pan animation
- Dots pattern overlays the poster correctly
- Hero text is fully readable
- Social proof section has 4 vertical clip cards (horizontal scroll on mobile, grid on desktop)
- Review quotes still present below the clip grid
- Rest of page unchanged

### Step 7: Create B-v1-play.html from B-v1-poster.html

Copy B-v1-poster.html to B-v1-play.html.

### Step 8: Add play button to B-v1-play.html

Add play button CSS (with B's ring color `#D4A843`, fill `#FFF8F0`).
Add play button HTML inside the hero section, after the `.hero-poster` div.
Add modal CSS and modal HTML before `</body>`.
Add onclick to play button: `onclick="document.getElementById('video-modal').classList.add('active')"`.
Update `<title>` suffix to `— Video: Play Button`.

### Step 9: Verify B-v1-play.html

Open in browser. Check:
- Play button visible and centred over poster area
- Hover effect works (scale)
- Clicking play button opens modal
- Clicking outside modal or ✕ closes it
- Everything else identical to poster variant

### Step 10: Create B-v1.5-autoplay.html from B-v1-poster.html

Copy B-v1-poster.html to B-v1.5-autoplay.html.

### Step 11: Add autoplay simulation to B-v1.5-autoplay.html

Add autoplay shimmer CSS with B's shimmer color `rgba(184,134,11,.3)`.
Add `.simulated-autoplay` class to `.hero-poster` div.
Add autoplay badge HTML inside hero section (after poster div).
Add autoplay toggle HTML inside hero section.
Add mobile media query to hide shimmer + badge on mobile viewports.
Add toggle JS before `</body>`.
Update `<title>` suffix to `— Video: Autoplay`.

### Step 12: Verify B-v1.5-autoplay.html

Open in browser. Check:
- Desktop: shimmer animation visible over poster, badge shows "Simulated autoplay"
- Mobile (resize to <768px): shimmer and badge hidden, only Ken Burns visible
- Toggle unchecked: shimmer stops, badge hides, label says "Autoplay blocked"
- Toggle checked: shimmer resumes

### Step 13: Commit

```bash
git add prototypes/video/B-v1-poster.html prototypes/video/B-v1-play.html prototypes/video/B-v1.5-autoplay.html
git commit -m "feat: add Design B video prototype variants (poster, play, autoplay)"
```

---

## Task 2: Design F — 3 Variants (Agent 2)

**Base file:** `prototypes/new/homepage-design-02v3.html`
**Output files:**
- `prototypes/video/F-v1-poster.html`
- `prototypes/video/F-v1-play.html`
- `prototypes/video/F-v1.5-autoplay.html`

**Design palette:** White #FFFFFF / Dark #111 / Rose #E11D48 / Amber #f59e0b
**Fonts:** Source Serif 4 + Poppins
**CSS classes:** `.reveal` for reveal (NOT `.rv`), `.rd1`-`.rd4` for delays
**Social proof classes:** `.quote-author`, `.quote-avatar`, `.mini-review`, `.mini-author`, `.mini-avatar` (NOT `.q-author`, `.mini-rv`, etc.)
**Hero bg class:** `.bg-d` (dark, defined but may be inline)

**IMPORTANT:** F's hero is full-width dark (#111) with text directly inside. The poster goes BEHIND the text with a dark overlay for readability. Layer order:
1. `.hero-poster` (z-index:0) — gradient + Ken Burns
2. `.hero-overlay` (z-index:1) — `rgba(17,17,17,.65)` dark overlay
3. Existing `::before` radial gradient (z-index already set or inherited)
4. `.hero-content` (z-index:2) — text, buttons, trust bar

### Steps 1-6: Same pattern as Task 1, using F's palette values

- Copy base to F-v1-poster.html
- Add Ken Burns CSS with F's gradient and translate values (`0, 1%`)
- Add `.hero-overlay` div between poster and content
- Add clip grid to social proof section (`.bg-d.proof.sec`)
- Clip grid goes after the `.hero-quote` block and before `.g3` mini reviews
- Use F's palette for clip card styling
- Verify: poster visible, dark overlay preserves text readability, clips grid works

### Steps 7-9: Create F-v1-play.html

Same as Task 1 but with F's play ring color `rgba(225,29,72,.6)` and fill `#fecdd3`.

### Steps 10-12: Create F-v1.5-autoplay.html

Same as Task 1 but with F's shimmer color `rgba(225,29,72,.25)` and dot color `#E11D48`.

### Step 13: Commit

```bash
git add prototypes/video/F-v1-poster.html prototypes/video/F-v1-play.html prototypes/video/F-v1.5-autoplay.html
git commit -m "feat: add Design F video prototype variants (poster, play, autoplay)"
```

---

## Task 3: Design G — 3 Variants (Agent 3)

**Base file:** `prototypes/new/homepage-design-03v1.html`
**Output files:**
- `prototypes/video/G-v1-poster.html`
- `prototypes/video/G-v1-play.html`
- `prototypes/video/G-v1.5-autoplay.html`

**Design palette:** White #FAFAFA / Black #0A0A0A / Red #DC2626
**Fonts:** Bebas Neue + Poppins 300
**CSS classes:** `.rv` for reveal, `.d1`-`.d4` for delays, `.fd` for Bebas Neue
**Hero layout:** SPLIT — `.hero-l` (flex:7, text) + `.hero-r` (flex:5, video placeholder)

**CRITICAL — G has unique responsive behavior:**

**Desktop (>=768px):** Split layout. Poster fills `.hero-r` panel. Replace existing `.video-ph` placeholder with poster treatment.

**Mobile (<768px):** Currently `hero-r` is `display:none`. We change this:
- `.hero-r` becomes `position:absolute; inset:0; display:block` (fills entire hero as background)
- Add dark overlay between `.hero-r` poster and `.hero-l` text
- `.hero-l` gets `position:relative; z-index:3`
- Result: on mobile, G looks like F (text over poster background)

```css
/* G mobile: collapse split, poster becomes background */
@media(max-width:767px) {
  .hero { flex-direction: column; position: relative; }
  .hero-r {
    display: block !important;
    position: absolute;
    inset: 0;
    flex: none;
  }
  .hero-r::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(10,10,10,.75);
    z-index: 1;
  }
  .hero-l {
    position: relative;
    z-index: 3;
    min-height: 85vh;
  }
  .poster-label { display: none; }
}
```

### Step 1: Copy base to G-v1-poster.html

### Step 2: Add poster CSS

Add Ken Burns with G's gradient and translate values (`-0.5%, -0.5%`).
Add the mobile responsive override CSS above.
Square corners on poster (no border-radius — brutalist design).

### Step 3: Modify hero HTML

Replace the existing `.hero-r` content:

**Current:**
```html
<div class="hero-r"><div class="video-ph"><div class="play-ic">...</div><span class="vid-label">Watch: Your first class</span></div></div>
```

**Replace with:**
```html
<div class="hero-r">
  <div class="hero-poster" aria-hidden="true">
    <span class="poster-label">Poster: beginner class footage</span>
  </div>
</div>
```

The poster fills the `.hero-r` panel on desktop. On mobile, the responsive CSS makes `.hero-r` fill the entire hero background.

### Step 4: Add clip grid to social proof

G's social proof is `<section class="bg-b proof sec">`. Add clip grid after the hero-quote block. Use G's palette (square corners, brutalist borders).

### Steps 5-13: Same pattern as Tasks 1 and 2

Create v1-play (play button in poster area) and v1.5-autoplay (shimmer simulation).

For v1-play: the play button is positioned inside `.hero-r`, centered over the poster. On mobile, it's centered in the full hero background.

For v1.5-autoplay: shimmer appears on the poster in `.hero-r` on desktop. On mobile, shimmer appears behind the text (subtle, under the dark overlay).

### Step 13: Commit

```bash
git add prototypes/video/G-v1-poster.html prototypes/video/G-v1-play.html prototypes/video/G-v1.5-autoplay.html
git commit -m "feat: add Design G video prototype variants (poster, play, autoplay)"
```

---

## Post-Tasks

### Visual QA Checklist (after all agents complete)

For each of the 9 files, verify:

- [ ] Hero poster gradient visible, Ken Burns animation running
- [ ] Hero text fully readable (contrast OK)
- [ ] Dots/grain/texture overlays preserved (design identity intact)
- [ ] Trust bar visible and not obscured
- [ ] Social proof has 4 vertical clip cards
- [ ] Clip cards: horizontal scroll on mobile, 4-column grid on desktop
- [ ] Review quotes still present below clip grid
- [ ] Nav, footer, all other sections unchanged
- [ ] Responsive: test at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] `prefers-reduced-motion` disables Ken Burns animation

v1-play variants additionally:
- [ ] Play button visible and centred
- [ ] Click opens modal
- [ ] Click outside modal / ✕ closes it

v1.5-autoplay variants additionally:
- [ ] Desktop: shimmer animation visible
- [ ] Mobile: shimmer hidden (Ken Burns only)
- [ ] Toggle works: unchecked hides shimmer + badge
- [ ] Badge visible with pulsing dot

### Final Commit

```bash
git add -A prototypes/video/
git commit -m "feat: complete 9 video prototype variants (B/F/G × poster/play/autoplay)

Video integration prototypes for post-vote evaluation.
Each design gets 3 variants showing different video approaches:
- v1-poster: Ken Burns animated poster (launch baseline)
- v1-play: Poster + 'Watch a class' play button with modal
- v1.5-autoplay: Desktop shimmer simulation with toggle

See docs/plans/2026-03-23-video-strategy-design.md for full strategy."
```

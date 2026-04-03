# Prototype Gallery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive gallery page and deploy the 8 homepage prototypes to GitHub Pages so the team can browse, compare, and vote.

**Architecture:** An orphan `gh-pages` branch containing copied prototype HTML files (with fixed logo paths), logo assets, and a single gallery `index.html`. The gallery uses tabbed navigation with lazy-loaded iframes. No build step — all plain HTML/CSS/JS.

**Tech Stack:** HTML, CSS, vanilla JS. GitHub Pages for hosting. Google Form for voting (manual setup by D).

---

### Task 1: Create orphan gh-pages branch and directory structure

**Files:**
- Create: `designs/` directory
- Create: `logos/` directory

**Step 1: Create orphan branch**

```bash
cd "/Users/dhiwatdg/Projects/Latin Addiction Website"
git checkout --orphan gh-pages
git rm -rf .
```

This creates a branch with no history and clears the working tree.

**Step 2: Create directory structure**

```bash
mkdir -p designs logos
```

**Step 3: Verify clean state**

Run: `git status`
Expected: Empty working tree with untracked `designs/` and `logos/` directories.

---

### Task 2: Copy logos into deploy structure

**Files:**
- Copy: `Logos/logo-mark-bold.png` → `logos/logo-mark-bold.png`
- Copy: `Logos/logo-mark-golden-tight.png` → `logos/logo-mark-golden-tight.png`

**Step 1: Copy logos from main branch**

```bash
git show main:Logos/logo-mark-bold.png > logos/logo-mark-bold.png
git show main:Logos/logo-mark-golden-tight.png > logos/logo-mark-golden-tight.png
```

**Step 2: Verify files exist**

Run: `ls -la logos/`
Expected: Both PNG files present with non-zero size.

---

### Task 3: Copy prototype HTML files with fixed logo paths

**Files:**
- Create: `designs/homepage-design-01v1.html` (and all 8 variants)

**Step 1: Copy all 8 prototypes from main branch and fix paths**

For each of the 8 files, extract from `main` and fix the logo `src` attributes:

```bash
for f in homepage-design-01v1.html homepage-design-01v2.html homepage-design-01v3.html \
         homepage-design-02v1.html homepage-design-02v2.html homepage-design-02v3.html \
         homepage-design-03v1.html homepage-design-03v2.html; do
  git show "main:prototypes/new/$f" | \
    sed 's|../../Logos/logo-mark-bold.png|../logos/logo-mark-bold.png|g' | \
    sed 's|../../Logos/logo-mark-golden-tight.png|../logos/logo-mark-golden-tight.png|g' \
    > "designs/$f"
done
```

**Step 2: Verify all 8 files were created and paths are fixed**

Run: `ls designs/ | wc -l`
Expected: `8`

Run: `grep -r '../../Logos' designs/`
Expected: No output (all old paths replaced).

Run: `grep -c '../logos/logo-mark' designs/homepage-design-01v1.html`
Expected: `2` (both logo references updated).

---

### Task 4: Build the gallery index.html

**Files:**
- Create: `index.html`

**Step 1: Write the gallery page**

Create `index.html` with:

1. **Header** — title "Latin Addiction — Homepage Design Review" + instructions paragraph
2. **Tabbed navigation** — 3 design groups with sub-tabs for variants:
   - **Group 1 — Warm & Light:** Warm Earthy (01v1), Cream Navy (01v2), Teal Coral (01v3)
   - **Group 2 — Dark & Bold:** Dark Gold (02v1), Sunset Fire (02v2), Broadway Rose (02v3)
   - **Group 3 — Experimental:** Monochrome Brutalist (03v1), Dark Elegant (03v2)
3. **Iframe preview** — full-width, ~85vh height, loads only the active prototype
4. **Vote CTA** — sticky bottom bar with "Cast your vote" button (placeholder URL `#vote`, D replaces with Google Form link later)
5. **Mobile** — tabs become a `<select>` dropdown below 768px
6. **Styling** — clean, neutral (not using any prototype's palette to avoid bias). System font stack, light grey background, subtle shadows.

The full HTML for this file is specified below. It must be a single self-contained file with inline `<style>` and `<script>` — no external dependencies except Google Fonts for Poppins (body text only).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latin Addiction — Homepage Design Review</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Poppins', system-ui, sans-serif;
      background: #f5f5f5;
      color: #1a1a1a;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Header */
    .header {
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
      padding: 1.5rem 1.5rem 1rem;
      text-align: center;
    }
    .header h1 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }
    .header p {
      font-size: 0.88rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
    }

    /* Tab navigation */
    .tabs {
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
      padding: 0 1rem;
      display: flex;
      align-items: stretch;
      gap: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .tab-group {
      display: flex;
      align-items: stretch;
      position: relative;
    }
    .tab-group + .tab-group::before {
      content: '';
      width: 1px;
      background: #e0e0e0;
      margin: 0.6rem 0;
    }
    .tab-group-label {
      display: flex;
      align-items: center;
      padding: 0 0.75rem;
      font-size: 0.68rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #999;
      white-space: nowrap;
    }
    .tab {
      display: flex;
      align-items: center;
      padding: 0.85rem 1rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: #666;
      cursor: pointer;
      border: none;
      background: none;
      border-bottom: 3px solid transparent;
      transition: all 0.2s;
      white-space: nowrap;
      font-family: inherit;
    }
    .tab:hover { color: #1a1a1a; background: #fafafa; }
    .tab.active {
      color: #1a1a1a;
      font-weight: 600;
      border-bottom-color: #1a1a1a;
    }

    /* Mobile dropdown (hidden on desktop) */
    .mobile-select-wrap {
      display: none;
      padding: 0.75rem 1rem;
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
    }
    .mobile-select {
      width: 100%;
      padding: 0.7rem 1rem;
      font-size: 0.9rem;
      font-family: inherit;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fafafa;
      color: #1a1a1a;
      cursor: pointer;
      appearance: auto;
    }

    /* Preview iframe */
    .preview {
      flex: 1;
      position: relative;
      background: #e8e8e8;
    }
    .preview iframe {
      width: 100%;
      height: 100%;
      border: none;
      position: absolute;
      inset: 0;
    }
    .preview-loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 0.9rem;
    }

    /* Vote CTA bar */
    .vote-bar {
      background: #1a1a1a;
      padding: 0.85rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-shrink: 0;
    }
    .vote-bar p {
      color: rgba(255,255,255,0.7);
      font-size: 0.82rem;
    }
    .vote-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #fff;
      color: #1a1a1a;
      font-family: inherit;
      font-size: 0.88rem;
      font-weight: 600;
      padding: 0.65rem 1.5rem;
      border-radius: 100px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .vote-btn:hover {
      background: #f0f0f0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .tabs { display: none; }
      .mobile-select-wrap { display: block; }
      .header h1 { font-size: 1.15rem; }
      .header p { font-size: 0.82rem; }
      .vote-bar { flex-direction: column; text-align: center; padding: 0.75rem 1rem; }
      .vote-bar p { font-size: 0.78rem; }
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>Latin Addiction — Homepage Design Review</h1>
    <p>Browse each design below, then cast your vote. Click the tabs to switch between designs — take your time scrolling through each one!</p>
  </div>

  <!-- Desktop tabs -->
  <div class="tabs" role="tablist">
    <div class="tab-group">
      <span class="tab-group-label">Warm & Light</span>
      <button class="tab active" role="tab" data-design="homepage-design-01v1.html">Warm Earthy</button>
      <button class="tab" role="tab" data-design="homepage-design-01v2.html">Cream Navy</button>
      <button class="tab" role="tab" data-design="homepage-design-01v3.html">Teal Coral</button>
    </div>
    <div class="tab-group">
      <span class="tab-group-label">Dark & Bold</span>
      <button class="tab" role="tab" data-design="homepage-design-02v1.html">Dark Gold</button>
      <button class="tab" role="tab" data-design="homepage-design-02v2.html">Sunset Fire</button>
      <button class="tab" role="tab" data-design="homepage-design-02v3.html">Broadway Rose</button>
    </div>
    <div class="tab-group">
      <span class="tab-group-label">Experimental</span>
      <button class="tab" role="tab" data-design="homepage-design-03v1.html">Mono Brutalist</button>
      <button class="tab" role="tab" data-design="homepage-design-03v2.html">Dark Elegant</button>
    </div>
  </div>

  <!-- Mobile select -->
  <div class="mobile-select-wrap">
    <select class="mobile-select" aria-label="Choose a design">
      <optgroup label="Warm & Light">
        <option value="homepage-design-01v1.html" selected>Warm Earthy</option>
        <option value="homepage-design-01v2.html">Cream Navy</option>
        <option value="homepage-design-01v3.html">Teal Coral</option>
      </optgroup>
      <optgroup label="Dark & Bold">
        <option value="homepage-design-02v1.html">Dark Gold</option>
        <option value="homepage-design-02v2.html">Sunset Fire</option>
        <option value="homepage-design-02v3.html">Broadway Rose</option>
      </optgroup>
      <optgroup label="Experimental">
        <option value="homepage-design-03v1.html">Mono Brutalist</option>
        <option value="homepage-design-03v2.html">Dark Elegant</option>
      </optgroup>
    </select>
  </div>

  <!-- Preview -->
  <div class="preview">
    <div class="preview-loading" id="loading">Loading design...</div>
    <iframe id="preview-frame" title="Design preview"></iframe>
  </div>

  <!-- Vote bar -->
  <div class="vote-bar">
    <p>Seen enough? Pick your favourite(s) and leave any feedback.</p>
    <a href="#vote" target="_blank" rel="noopener" class="vote-btn" id="vote-link">
      Cast your vote →
    </a>
  </div>

  <script>
    const frame = document.getElementById('preview-frame');
    const loading = document.getElementById('loading');
    const tabs = document.querySelectorAll('.tab');
    const select = document.querySelector('.mobile-select');

    function loadDesign(file) {
      loading.style.display = 'flex';
      frame.style.opacity = '0';
      frame.src = 'designs/' + file;
    }

    frame.addEventListener('load', () => {
      loading.style.display = 'none';
      frame.style.opacity = '1';
    });

    // Desktop tabs
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        select.value = tab.dataset.design;
        loadDesign(tab.dataset.design);
      });
    });

    // Mobile select
    select.addEventListener('change', () => {
      const file = select.value;
      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.design === file);
      });
      loadDesign(file);
    });

    // Load first design on page load
    loadDesign('homepage-design-01v1.html');
  </script>
</body>
</html>
```

**Step 2: Verify the file was created**

Run: `cat index.html | head -5`
Expected: `<!DOCTYPE html>` as first line.

---

### Task 5: Commit and push gh-pages branch

**Step 1: Stage all files**

```bash
git add index.html designs/ logos/
```

**Step 2: Verify staged files**

Run: `git status`
Expected: 11 new files staged (1 index.html + 8 designs + 2 logos).

**Step 3: Commit**

```bash
git commit -m "deploy: prototype gallery for team design review"
```

**Step 4: Push to remote**

```bash
git push origin gh-pages
```

**Step 5: Switch back to main**

```bash
git checkout main
```

---

### Task 6: Enable GitHub Pages and verify deployment

**Step 1: Install gh CLI if needed, then configure Pages**

```bash
gh pages enable --branch gh-pages --path / 2>/dev/null || true
```

If `gh` is not available, D must enable manually:
1. Go to repo Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages`, folder: `/ (root)`
4. Save

**Step 2: Verify deployment**

Wait ~1 minute, then visit: `https://dhiwatdg.github.io/Latin-Addiction-Website/`

Expected: Gallery page loads, tabs work, first design (Warm Earthy) shows in iframe.

**Step 3: Test all 8 designs load**

Click each tab and confirm the iframe loads without errors. Check browser console for issues.

---

### Task 7: D creates Google Form and updates vote link

**Manual steps for D:**

1. Go to Google Forms → create new form
2. Add fields:
   - "Your name" (short answer, required)
   - "Pick your top 1-2 designs" (checkboxes):
     - Warm Earthy (01v1)
     - Cream Navy (01v2)
     - Teal Coral (01v3)
     - Dark Gold (02v1)
     - Sunset Fire (02v2)
     - Broadway Rose (02v3)
     - Mono Brutalist (03v1)
     - Dark Elegant (03v2)
   - "Any comments or feedback?" (long answer, optional)
3. Copy the form URL
4. Update the vote link in the gallery:

```bash
git checkout gh-pages
# Edit index.html — replace href="#vote" with the actual Google Form URL
git add index.html
git commit -m "update: add Google Form voting link"
git push origin gh-pages
git checkout main
```

---

### Task 8: Share with team

**D sends this to the team:**

> Hey team! We've got 8 homepage design options ready for review.
>
> Browse them all here: https://dhiwatdg.github.io/Latin-Addiction-Website/
>
> Use the tabs to flip between designs. When you've seen them all, hit "Cast your vote" to pick your favourites.
>
> Take your time — scroll through each one fully!

---

### Cleanup (after voting complete)

```bash
git push origin --delete gh-pages
```

This removes the branch and takes down the GitHub Pages site immediately.

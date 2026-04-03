# Phase 1: Go Live — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use document-skills:frontend-design when building components — the prototype HTML is the visual reference, Tailwind CSS is the implementation tool.

**Goal:** Ship the Latin Addiction website with homepage + 3 location pages to Cloudflare Pages. Reproduce the D-v2 prototype in Astro + Tailwind. Push to `main` = live at `latinaddiction.co.uk`.

**Architecture:** Astro static site with Tailwind CSS. No SSR, no server-side logic. All CTAs go to WhatsApp or SumUp store (temporary stopgap — on-site SumUp checkout is Phase 2). Images served from `public/`. Cloudflare Pages auto-deploys from GitHub `main` branch.

**Tech Stack:** Astro 5.x, Tailwind CSS 3.x (`@astrojs/tailwind`), TypeScript, Google Fonts (Poppins + DM Sans)

**Visual Reference:** `prototypes/homepage-design-D-v2.html` — the 8-section homepage prototype. Every section, colour, spacing, and interaction in the Astro build should match this file.

**Design Palette:**
- Dark: `#111111`
- Rose: `#E11D48` (primary accent)
- Rose dark: `#BE123C` (hover states)
- Pink light: `#fecdd3` (badges, soft accents)
- Gray bg: `#f5f5f5` (alternating sections)
- White: `#FFFFFF`
- Text muted: `#555555`
- Gold star: `#F59E0B`
- Social party: `#B45309`
- WhatsApp green: `#25D366`

**Fonts:**
- Poppins: 800 (hero h1), 700 (card titles, nav logo), 600 (section h2s), 500 (nav links)
- DM Sans: 300 (hero subtitle), 400 (body), 500 (labels), 600 (buttons), 700 (eyebrow)

---

## Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/pages/index.astro`, `.gitignore` (Astro additions)

**Step 1: Create Astro project**

```bash
cd "/Users/dhiwatdg/Projects/Latin Addiction Website"
npm create astro@latest . -- --template minimal --no-install --typescript strict
```

Accept overwriting if prompted — existing files (CLAUDE.md, docs/, etc.) won't be touched by the minimal template.

**Step 2: Install dependencies**

```bash
npm install
npx astro add tailwind --yes
```

**Step 3: Configure `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://latinaddiction.co.uk',
  integrations: [tailwind()],
});
```

**Step 4: Configure `tailwind.config.mjs`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        rose: {
          DEFAULT: '#E11D48',
          dark: '#BE123C',
          light: '#fecdd3',
          '9f': '#9F1239',
        },
        muted: '#555555',
        gold: '#F59E0B',
        party: '#B45309',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

**Step 5: Write `src/styles/global.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }
  ::selection {
    background: #E11D48;
    color: #fff;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
    border-radius: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Step 6: Create placeholder `src/pages/index.astro`**

```astro
---
// Placeholder — replaced in Task 7
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Latin Addiction — Bachata & Salsa Classes</title>
  </head>
  <body class="font-body text-dark">
    <h1 class="text-4xl font-display font-extrabold text-center mt-20">Coming soon</h1>
  </body>
</html>
```

**Step 7: Verify build**

```bash
npm run build
```

Expected: Build succeeds, outputs to `dist/`. Check `dist/index.html` exists.

**Step 8: Verify dev server**

```bash
npm run dev
```

Expected: Dev server starts at `localhost:4321`. Page renders with "Coming soon" in Poppins font.

**Step 9: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tailwind.config.mjs tsconfig.json src/ .gitignore
git commit -m "feat: scaffold Astro project with Tailwind CSS"
```

---

## Task 2: Copy Static Assets to `public/`

**Files:**
- Create: `public/images/instructors/` (7 files), `public/images/logos/` (2 files), `public/favicon.ico`, `public/robots.txt`

**Step 1: Copy instructor photos**

```bash
mkdir -p public/images/instructors public/images/logos
cp "images/instructors/Dhiwa & Gloria.jpeg" public/images/instructors/
cp images/instructors/Gloria.jpg public/images/instructors/
cp images/instructors/Chido.jpg public/images/instructors/
cp images/instructors/Daniella.jpeg public/images/instructors/
cp images/instructors/Irina.jpg public/images/instructors/
cp images/instructors/Meg.jpg public/images/instructors/
cp images/instructors/Imogen.jpg public/images/instructors/
```

**Step 2: Copy logo files**

```bash
cp Logos/logo-mark-bold.png public/images/logos/
cp Logos/logo-mark-golden-tight.png public/images/logos/
```

Nav logo: `logo-mark-bold.png` with `filter: brightness(0)` (makes it black).
Footer logo: `logo-mark-golden-tight.png` with `filter: brightness(1.15)`.

**Step 3: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://latinaddiction.co.uk/sitemap-index.xml
```

**Step 4: Create placeholder favicon**

For now, copy the logo as favicon. A proper `.ico` can be generated later.

```bash
cp Logos/logo-mark-bold.png public/favicon.png
```

**Step 5: Commit**

```bash
git add public/
git commit -m "feat: add static assets (instructor photos, logos, robots.txt)"
```

---

## Task 3: Shared Data Files

**Files:**
- Create: `src/data/locations.ts`, `src/data/navigation.ts`, `src/data/reviews.ts`, `src/data/faqs.ts`

These data files are used by both the homepage and location pages. Extract once, use everywhere.

**Step 1: Create `src/data/locations.ts`**

```ts
export interface ScheduleRow {
  time: string;
  description: string;
  isSocial?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  shortName: string;
  day: string;
  dayShort: string;
  badgeText: string;
  venue: string;
  address: string;
  postcode: string;
  doorsOpen: string;
  schedule: ScheduleRow[];
  parking: string;
  mapsQuery: string;
  priceNote: string;
  whatsappMessage: string;
  note?: string;
  danceStyles: string[];
}

export const locations: Location[] = [
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    shortName: 'MK',
    day: 'Monday',
    dayShort: 'Mon',
    badgeText: 'Every Mon',
    venue: 'Midsummer Tap',
    address: 'Theatre District, Milton Keynes',
    postcode: 'MK9 3PU',
    doorsOpen: '7:45pm',
    schedule: [
      { time: '7:45pm', description: 'Doors open' },
      { time: '8:00pm', description: 'Bachata: Beginners / Improvers / Intermediate-Advanced' },
      { time: '9:00pm', description: 'Salsa: Beginners / Improvers / Intermediate-Advanced' },
      { time: '10:00pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE from 6pm.',
    mapsQuery: 'Midsummer+Tap+Theatre+District+Milton+Keynes+MK9+3PU',
    priceNote: '£10 for the night · First class FREE · Newcomer 4-week pass: £20',
    whatsappMessage: "Hi! I'd like to try a free class in Milton Keynes",
    note: 'Milton Keynes is our only location offering both Salsa and Bachata.',
    danceStyles: ['Bachata', 'Salsa'],
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    shortName: 'Leicester',
    day: 'Tuesday',
    dayShort: 'Tue',
    badgeText: 'Every Tue',
    venue: 'Braunstone Frith Recreation Centre',
    address: '29A Sharmon Cres, Leicester',
    postcode: 'LE3 6NW',
    doorsOpen: '7:00pm',
    schedule: [
      { time: '7:00pm', description: 'Doors open' },
      { time: '7:15pm', description: 'Beginners (1 hr)' },
      { time: '8:15pm', description: 'Improver / Intermediate (1 hr)' },
      { time: '9:15pm', description: 'Intermediate / Advanced (1 hr)' },
      { time: '10:15pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE street parking.',
    mapsQuery: 'Braunstone+Frith+Recreation+Centre+29A+Sharmon+Cres+Leicester+LE3+6NW',
    priceNote: '£10/night (1 class) · £15 (2 classes) · First class FREE',
    whatsappMessage: "Hi! I'd like to try a free Bachata class in Leicester",
    danceStyles: ['Bachata'],
  },
  {
    slug: 'reading',
    name: 'Reading',
    shortName: 'Reading',
    day: 'Wednesday',
    dayShort: 'Wed',
    badgeText: 'Every Wed',
    venue: 'Wesley Methodist Church',
    address: "84 Queen's Rd, Reading",
    postcode: 'RG1 4BW',
    doorsOpen: '7:45pm',
    schedule: [
      { time: '7:45pm', description: 'Doors open' },
      { time: '8:00pm', description: 'Beginners & Intermediate (separate groups, same room)' },
      { time: '9:00pm', description: 'Improvers & Advanced (separate groups, same room)' },
      { time: '10:00pm', description: 'FREE Social Party', isSocial: true },
    ],
    parking: 'FREE on premises — register at the kiosk to avoid a fine.',
    mapsQuery: 'Wesley+Methodist+Church+84+Queens+Rd+Reading+RG1+4BW',
    priceNote: '£10/night (1 class) · £15 (2 classes) · First class FREE',
    whatsappMessage: "Hi! I'd like to try a free Bachata class in Reading",
    danceStyles: ['Bachata'],
  },
];

export const WHATSAPP_NUMBER = '447424063798';
export const WHATSAPP_DEFAULT_MESSAGE = "Hi! I'd like to try a free class";
export const PHONE_DISPLAY = '07424 063798';
export const PHONE_TEL = '07424063798';
export const EMAIL = 'info@latinaddiction.co.uk';

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl(query: string): string {
  return `https://maps.google.com/?q=${query}`;
}
```

**Step 2: Create `src/data/navigation.ts`**

```ts
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Milton Keynes', href: '/milton-keynes' },
  { label: 'Leicester', href: '/leicester' },
  { label: 'Reading', href: '/reading' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Private Coaching', href: '/services/private-coaching' },
      { label: 'Corporate', href: '/services/corporate' },
      { label: 'Hire Us', href: '/services/hire-us' },
    ],
  },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Learn', href: '/learn' },
    ],
  },
];
```

Note: Pages that don't exist yet (/pricing, /services/*, /about, /faq, /reviews, /learn) will 404. This is fine — they'll be built in Phase 2-3. The nav structure is correct per the design doc.

**Step 3: Create `src/data/reviews.ts`**

```ts
export interface Review {
  text: string;
  author: string;
  initial: string;
  source: string;
  stars: number;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    text: "As a complete beginner, I wasn't sure what to expect, but this dance school is amazing! The instructors were so encouraging, and the class atmosphere was really friendly. I loved how they broke everything down step by step.",
    author: 'G V James',
    initial: 'G',
    source: 'Google Review',
    stars: 5,
    featured: true,
  },
  {
    text: "It really feels like you're finding a new dance family. Would 1000% recommend, especially for beginners.",
    author: 'Amy',
    initial: 'A',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: "They don't just teach steps — they explain the technique in a way that makes it all click.",
    author: 'Jonathan',
    initial: 'J',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: "The teachers are really good. The social at the end is a great way to put learning into practice.",
    author: 'Siva',
    initial: 'S',
    source: 'Google Review',
    stars: 5,
  },
];
```

**Step 4: Create `src/data/faqs.ts`**

```ts
export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQ[] = [
  {
    question: 'What should I wear?',
    answer: "Comfortable clothes you can move in — jeans are fine. Wear clean, smooth-soled shoes if you have them (trainers work too, just avoid anything that grips the floor). No special dance shoes needed.",
  },
  {
    question: 'Will it be awkward?',
    answer: "Honestly? The first five minutes might feel a bit new. But the class is structured so you're moving and laughing within minutes. Everyone remembers being a beginner — the room is on your side.",
  },
  {
    question: "What's the difference between Bachata and Salsa?",
    answer: "Both are Latin partner dances, but they feel very different. Salsa is faster and more energetic with complex footwork. Bachata is slower, more intimate, built on a simple side-to-side rhythm. It's widely considered one of the most beginner-friendly Latin dances — you can be dancing socially after one class. We teach both Salsa and Bachata in Milton Keynes, and Bachata in Leicester and Reading.",
  },
  {
    question: 'Do I need to book in advance?',
    answer: "You can turn up on the night, but we'd love a heads-up. Send us a WhatsApp message and we'll be expecting you — it also means we can answer any questions before you arrive.",
  },
];
```

**Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add shared data files (locations, nav, reviews, FAQs)"
```

---

## Task 4: BaseLayout + SEO Component

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/components/SEO.astro`

**Step 1: Create `src/components/SEO.astro`**

```astro
---
interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const {
  title,
  description,
  canonical = Astro.url.href,
  ogImage = '/images/logos/logo-mark-bold.png',
} = Astro.props;

const siteName = 'Latin Addiction UK';
const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
---

<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical} />
<meta property="og:site_name" content={siteName} />
<meta property="og:image" content={ogImage} />

<!-- Twitter -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
```

**Step 2: Create `src/layouts/BaseLayout.astro`**

```astro
---
import SEO from '../components/SEO.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import WhatsAppButton from '../components/WhatsAppButton.astro';
import MobileStickyBar from '../components/MobileStickyBar.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const { title, description, canonical, ogImage } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <SEO title={title} description={description} canonical={canonical} ogImage={ogImage} />
  </head>
  <body class="font-body text-dark leading-relaxed">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:bg-rose focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold">
      Skip to content
    </a>
    <Header />
    <main id="main-content">
      <slot />
    </main>
    <Footer />
    <WhatsAppButton />
    <MobileStickyBar />
  </body>
</html>
```

This handles the accessibility fixes from the prototype review:
- `<main>` landmark with `id="main-content"`
- Skip-to-content link (screen-reader accessible, visible on focus)

**Step 3: Verify** — can't build yet (Header, Footer, WhatsApp, MobileStickyBar don't exist). Create stubs if needed, or proceed to Task 5.

**Step 4: Commit**

```bash
git add src/layouts/ src/components/SEO.astro
git commit -m "feat: add BaseLayout with SEO, skip-to-content, font loading"
```

---

## Task 5: Header Component

**Files:**
- Create: `src/components/Header.astro`

Build the responsive nav from the prototype: sticky, glass-effect, desktop links with dropdown menus, mobile hamburger with full-screen menu. ARIA attributes for accessibility.

**Reference:** Prototype lines 88-89 (nav HTML), lines 20-21 + 83 (nav CSS).

**Key behaviours:**
- Sticky with blur backdrop
- Shadow appears on scroll (JS: `nav.classList.toggle('scrolled', window.scrollY > 10)`)
- Desktop: horizontal links, dropdowns on hover for Services/About
- Mobile (<768px): hamburger toggle, full-height menu with grouped sub-links
- Logo: `logo-mark-bold.png` with `brightness(0)` filter + "Latin Addiction" text
- CTA button in nav: "Free class" with WhatsApp icon (desktop only)
- `aria-expanded` on hamburger button
- `aria-label="Menu"` on hamburger
- Keyboard-accessible dropdown menus

**Data source:** Import `navigation` from `src/data/navigation.ts` and `whatsappUrl` from `src/data/locations.ts`.

**Step 1: Build the component** matching the prototype's nav structure exactly. Use Tailwind classes to reproduce the CSS from lines 20-21 and 83.

**Step 2: Add client-side JS** for hamburger toggle and scroll shadow (inline `<script>` at end of component).

**Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add responsive Header with dropdowns and mobile menu"
```

---

## Task 6: Footer + WhatsApp + Mobile Sticky Bar

**Files:**
- Create: `src/components/Footer.astro`, `src/components/WhatsAppButton.astro`, `src/components/MobileStickyBar.astro`

**Footer reference:** Prototype lines 187-188. 4-column grid:
1. Logo + business name + 3 venue addresses + contact info (WhatsApp, phone, email)
2. Pages: Home, MK, Leicester, Reading, Pricing, Classes
3. Services: Private Coaching, Corporate, Hire Us
4. Connect: Instagram, Facebook, TikTok, YouTube, Our Story, FAQ, Reviews

Bottom bar: "Student & NHS discount available — ask us on WhatsApp." + "Privacy Policy · © 2026 Latin Addiction UK Ltd"

Footer logo: `logo-mark-golden-tight.png` with `brightness(1.15)`.

**WhatsApp button reference:** Prototype line 191. Fixed bottom-right, green circle (#25D366), WhatsApp SVG icon. Hidden on mobile (<768px) since mobile sticky bar takes over.

**Mobile sticky bar reference:** Prototype lines 193-194. Fixed bottom, full-width rose background, "Claim your free class" with WhatsApp icon. Visible only on mobile (<768px). Needs `padding-bottom: env(safe-area-inset-bottom)` for iOS.

**Step 1: Build all three components** matching the prototype.

**Step 2: Commit**

```bash
git add src/components/Footer.astro src/components/WhatsAppButton.astro src/components/MobileStickyBar.astro
git commit -m "feat: add Footer, WhatsApp float button, mobile sticky bar"
```

---

## Task 7: Homepage — Hero + Worry-Busters

**Files:**
- Modify: `src/pages/index.astro`

Replace the placeholder with the real homepage using BaseLayout. Build sections 1-2.

**Hero reference:** Prototype lines 91-92, CSS lines 44-46.
- Dark bg (#111), min-height ~92vh
- Radial gradient glows (rose, blurred, decorative)
- Eyebrow: "Bachata & Salsa dance classes · UK"
- H1: "No partner needed. No experience needed. Your first class is free." (last line in rose)
- Subtitle: "Bachata & Salsa classes in Milton Keynes, Leicester & Reading — the Latin partner dances everyone's falling for."
- CTAs: "Claim your free class" (rose button + WhatsApp SVG) + "See schedule ↓" (outline)
- "We typically reply within a few hours."
- "Already dance? → Schedule & Pricing" link
- Trust bar: ★ 5.0 on Google | 3 cities | 100+ students weekly | 4+ years running | Free social after every class
- Mobile: centred text, centred CTAs

**Worry-Busters reference:** Prototype lines 94-95, CSS lines 48-50.
- White bg, 3-column grid
- 3 cards: emoji icon, h3 title, paragraph, rose tick confirmation line
- Cards: "No partner needed" (👫), "No experience needed" (🌟), "Your first class is free" (🎁)
- Hover: rose border, shadow lift

**Accessibility:** Add `<h2>` as visually-hidden heading for Worry-Busters section (prototype lacks this).

**Step 1: Build hero section** with all content and styling.

**Step 2: Build worry-busters section** with all 3 cards.

**Step 3: Verify** — `npm run dev`, check hero renders correctly, responsive on mobile.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage Hero and Worry-Busters sections"
```

---

## Task 8: Homepage — Instructors Section

**Files:**
- Modify: `src/pages/index.astro`

**Reference:** Prototype lines 97-143, CSS lines 61-62.

Section 3: Light gray bg. This is a complex section with multiple parts:

1. **Eyebrow:** "Your Instructors"
2. **Title:** "People who actually care if you have fun"
3. **Founders feature:** 2-column grid
   - Left: Large photo (`Dhiwa & Gloria.jpeg`, max-width 400px, rounded 24px, shadow). Rose pill badge "Dhiwa & Gloria · Founders" positioned at bottom-centre of photo.
   - Right: Story text. Gloria's solo photo (56px circle) inline with her story paragraph. Pull quote in gray box with rose left border. "We're not just here to teach you steps..."
4. **Team strip:** Centred row of 5 circular photos (52px each): Chido, Daniella, Irina, Meg, Imogen. "Supported by a team of 10+ instructors across all three cities."
5. **Skill pills:** Bachata, Salsa, Sensual, Beginner-Friendly (coloured backgrounds)
6. **"What a typical class looks like"** box (gray bg, rounded): 4 numbered steps with rose number badges
7. **CTA:** "Claim your free class" button

**Image paths:** `/images/instructors/Dhiwa & Gloria.jpeg`, `/images/instructors/Gloria.jpg`, etc.

**Step 1: Build the full section** matching the prototype layout.

**Step 2: Verify** — check founders photo renders, team strip aligns, pull quote styled.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage Instructors section (Dhiwa & Gloria)"
```

---

## Task 9: Homepage — Social Proof + Getting Started

**Files:**
- Modify: `src/pages/index.astro`

**Social Proof reference:** Prototype lines 145-146, CSS lines 52-53.

Section 4: Dark bg with radial gradient glows.
- Eyebrow: "What our students say"
- Featured review: G V James full quote, large text (Poppins 700), rose left border. Avatar circle with initial.
- 3 mini review cards (Amy, Jonathan, Siva): italic quote, avatar initial, name, stars
- Google pill: "★ 5.0 on Google Reviews"
- CTA: "Try a free class"

**Accessibility:** Add `<h2>` as visually-hidden heading (prototype lacks this).

**Getting Started reference:** Prototype lines 148-149, CSS line 56.

Section 5: White bg, centred.
- Eyebrow: "The process"
- Title: "Getting started is ridiculously easy" ("ridiculously easy" in rose)
- 3 step cards with numbered circles (rose bg, hover transforms): Send us a message → Turn up → Dance
- "Everyone starts at Level 1..."
- CTA: "Start here"

**Step 1: Build Social Proof section.**

**Step 2: Build Getting Started section.**

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage Social Proof and Getting Started sections"
```

---

## Task 10: Homepage — Schedule + Price (Tabbed)

**Files:**
- Modify: `src/pages/index.astro`

**Reference:** Prototype lines 151-169, CSS lines 58-59.

Section 6: Light gray bg. The most data-heavy section.
- Eyebrow: "Classes"
- Title: "When & where we dance"
- 3 tab buttons: Milton Keynes (active) | Leicester | Reading
- Each tab panel contains a schedule card:
  - Dark header with city name + "Every Mon/Tue/Wed" badge
  - Schedule rows: time (Poppins 700) + description. Alternating gray/white bg. Social party row in gold.
  - Footer: venue address, parking info, Google Maps link, price note
- Tab-specific WhatsApp CTA below schedule
- MK panel includes italic note about Salsa + Bachata
- Price summary box below all tabs: "First class: FREE · Newcomer 4-week pass: £20 · Drop-in from £10/night" + "See all pricing →"

**Data source:** Import `locations` from `src/data/locations.ts`.

**Client-side JS:** Tab switching — hide/show panels, toggle active tab class.

**Step 1: Build the tabbed schedule section** using data from `locations.ts`.

**Step 2: Add tab switching JS** (inline `<script>`).

**Step 3: Verify** — click through all 3 tabs, check data matches prototype exactly.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage Schedule + Price tabbed section"
```

---

## Task 11: Homepage — FAQ + Final CTA

**Files:**
- Modify: `src/pages/index.astro`

**FAQ reference:** Prototype lines 171-182, CSS lines 64-65.

Section 7: White bg, max-width 760px centred.
- Eyebrow: "FAQ"
- Title: "The questions everyone asks first"
- 4 accordion items (from `src/data/faqs.ts`): sand-coloured bg, chevron SVG rotates on open
- "See all FAQs →" link to `/faq`
- JS: click toggles `.open` class on answer, rotates chevron. Only one open at a time.
- ARIA: `aria-expanded` on buttons, `aria-controls` linking to answer divs

**Final CTA reference:** Prototype lines 184-185, CSS lines 67-68.

Section 8: Dark bg with radial gradient glow.
- Status pill: pulsing green dot + "Classes running now"
- Headline: "Your next Monday, Tuesday or Wednesday could change everything."
- Copy: "One free class. No pressure. Just show up, and let's see what happens."
- CTAs: "Claim your free class" (rose) + "Call 07424 063798" (white outline)
- Trust checklist: 4 items with rose checkmark SVGs (First class free, No partner needed, Complete beginners welcome, No commitment required)

**Step 1: Build FAQ accordion section** with ARIA attributes.

**Step 2: Build Final CTA section.**

**Step 3: Add FAQ accordion JS** (inline `<script>`).

**Step 4: Verify** — full homepage scroll, all 8 sections render, accordion works, tabs work.

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage FAQ accordion and Final CTA sections"
```

---

## Task 12: Scroll Reveal Animations

**Files:**
- Create: `src/scripts/reveal.ts` (or inline in BaseLayout)

**Reference:** Prototype lines 203-205.

Add IntersectionObserver-based scroll reveal:
- Elements with `data-reveal` attribute start with `opacity: 0; transform: translateY(28px)`
- When intersecting (threshold 0.08, rootMargin `0px 0px -40px 0px`), add `visible` class
- Stagger delays: `data-reveal-delay="1"` → 80ms, `"2"` → 160ms, etc.
- Respect `prefers-reduced-motion` (already handled in global.css)

Add Tailwind utility classes in `global.css` for the reveal animation:

```css
@layer utilities {
  [data-reveal] {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  [data-reveal].visible {
    opacity: 1;
    transform: translateY(0);
  }
  [data-reveal-delay="1"] { transition-delay: 80ms; }
  [data-reveal-delay="2"] { transition-delay: 160ms; }
  [data-reveal-delay="3"] { transition-delay: 240ms; }
  [data-reveal-delay="4"] { transition-delay: 320ms; }
}
```

**Step 1: Add reveal CSS to global.css.**

**Step 2: Add reveal JS** (IntersectionObserver in BaseLayout or dedicated script).

**Step 3: Go back through all homepage sections** and add `data-reveal` / `data-reveal-delay` attributes to match the prototype's `.reveal .rd1 .rd2` etc.

**Step 4: Verify** — scroll through homepage, elements fade in progressively.

**Step 5: Commit**

```bash
git add src/styles/global.css src/pages/index.astro src/layouts/BaseLayout.astro
git commit -m "feat: add scroll reveal animations with IntersectionObserver"
```

---

## Task 13: Location Pages

**Files:**
- Create: `src/pages/milton-keynes.astro`, `src/pages/leicester.astro`, `src/pages/reading.astro`

These are dedicated pages for each city. They expand on the homepage schedule tab with more detail. Use the same data from `locations.ts`.

**Content per location page:**
1. **Hero:** Smaller than homepage. Dark bg. City name as h1, day + venue below. "Bachata & Salsa classes every [Day]" (MK) or "Bachata classes every [Day]" (Leicester/Reading). CTA: "Claim your free class" + "See schedule ↓".
2. **Schedule:** Full timetable (reuse the schedule card component from homepage).
3. **Venue info:** Address, parking, Google Maps link. Embedded Google Maps iframe (or link for now).
4. **Pricing summary:** Same as homepage price note. "First class FREE" highlighted. "See all pricing →" to /pricing.
5. **Getting Started:** Reuse the 3-step pattern from homepage.
6. **CTA:** "Join the [City] class" WhatsApp button.

**Architecture decision:** Extract reusable components from the homepage into `src/components/` where they're shared with location pages:
- `ScheduleCard.astro` — the timetable card (used in homepage tabs + location pages)
- `GettingStarted.astro` — the 3-step section

**Step 1: Extract `ScheduleCard.astro`** from the homepage schedule section.

**Step 2: Extract `GettingStarted.astro`** from the homepage.

**Step 3: Build the 3 location pages** using the extracted components + location data.

**Step 4: Update homepage** to use the extracted components instead of inline code.

**Step 5: Verify** — navigate to `/milton-keynes`, `/leicester`, `/reading`. Check all data matches. Check links between homepage tabs and location pages work.

**Step 6: Commit**

```bash
git add src/pages/milton-keynes.astro src/pages/leicester.astro src/pages/reading.astro src/components/ScheduleCard.astro src/components/GettingStarted.astro src/pages/index.astro
git commit -m "feat: add location pages (MK, Leicester, Reading) with shared components"
```

---

## Task 14: 404 Page

**Files:**
- Create: `src/pages/404.astro`

Simple, friendly 404 page using BaseLayout. Dark bg to match the hero/CTA sections.

**Content:**
- "Page not found" heading
- "The page you're looking for doesn't exist. But your first dance class is still free."
- CTAs: "Go to homepage" + "Claim your free class" (WhatsApp)

**Step 1: Build `404.astro`.**

**Step 2: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat: add custom 404 page"
```

---

## Task 15: Quality Gate — Review Homepage

After completing the homepage (Tasks 7-12), run quality checks before building location pages.

**Step 1: Run `/review-deliverable`** on the homepage — catches contradictions, inaccuracies, and generic filler. Compare built output against the D-v2 prototype.

**Step 2: Run `/fact-check`** on homepage content — verify all claims (5.0 Google Reviews, 4+ years running, 100+ students weekly, 3 cities, pricing figures, venue addresses, review quotes).

**Step 3: Fix any issues found.**

**Step 4: Commit fixes**

```bash
git add -A
git commit -m "fix: homepage quality gate fixes"
```

---

## Task 16: Build Verification + Polish

**Files:**
- Modify: various (fixes found during verification)

**Step 1: Production build**

```bash
npm run build
```

Expected: Clean build, no errors, no warnings. Check `dist/` contains all pages.

**Step 2: Preview locally**

```bash
npm run preview
```

Walk through every page:
- Homepage: all 8 sections render, tabs work, FAQ accordion works, scroll reveals fire
- /milton-keynes, /leicester, /reading: all data correct, CTAs work
- /404: renders correctly
- Mobile responsive: check at 375px, 768px, 1024px widths
- Nav: desktop links + dropdowns work, mobile hamburger works
- Footer: all links present, addresses correct
- WhatsApp button visible on desktop, hidden on mobile
- Mobile sticky bar visible on mobile, hidden on desktop

**Step 3: Check image loading**

- All instructor photos load
- Both logo variants load (nav + footer)
- `loading="lazy"` on below-fold images
- `width` and `height` attributes on all images

**Step 4: Check accessibility**

- Skip-to-content link works (Tab from page load)
- `<main>` landmark present
- All images have `alt` text
- `aria-expanded` on hamburger and FAQ buttons
- Heading hierarchy: one `<h1>` per page, `<h2>` for each section

**Step 5: Fix any issues found.**

**Step 6: Commit fixes**

```bash
git add -A
git commit -m "fix: polish and accessibility fixes from build verification"
```

---

## Task 17: Pre-Deploy Gate

**Step 1: Run `/pre-deploy`** — pre-deploy checklist before pushing to main. Push = auto-deploy to Cloudflare, so this is the only gate.

**Step 2: Fix any blocking issues.**

**Step 3: Commit fixes**

```bash
git add -A
git commit -m "fix: pre-deploy checklist fixes"
```

---

## Task 18: Push to Main → Live Site

**Step 1: Final build check**

```bash
npm run build
```

**Step 2: Review what we're pushing**

```bash
git log --oneline main..HEAD
git diff --stat main
```

**Step 3: Push**

```bash
git push origin main
```

Cloudflare Pages auto-builds on push. The site will be live at `latinaddiction.co.uk` within ~30 seconds.

**Step 4: Verify live site**

Open `https://latinaddiction.co.uk` in a browser. Check:
- Site loads with correct design
- HTTPS works
- All pages accessible
- Images load
- WhatsApp links work

---

## Dependency Graph

```
Task 1 (Scaffold)
  ├─→ Task 2 (Assets)
  ├─→ Task 3 (Data files)
  └─→ Task 4 (BaseLayout + SEO)
       ├─→ Task 5 (Header)
       └─→ Task 6 (Footer + WhatsApp)
            └─→ Task 7 (Hero + Worry)
                 └─→ Task 8 (Instructors)
                      └─→ Task 9 (Proof + Steps)
                           └─→ Task 10 (Schedule tabs)
                                └─→ Task 11 (FAQ + CTA)
                                     └─→ Task 12 (Scroll reveal)
                                          └─→ Task 15 (/review-deliverable + /fact-check)
                                               ├─→ Task 13 (Location pages)
                                               └─→ Task 14 (404)
                                                    └─→ Task 16 (Build verify + polish)
                                                         └─→ Task 17 (/pre-deploy)
                                                              └─→ Task 18 (Push → live)
```

**Parallel opportunities:**
- Tasks 2, 3, 4 can run in parallel after Task 1
- Tasks 5 and 6 can run in parallel after Task 4
- Tasks 7-12 are sequential (building homepage top to bottom)
- Task 15 is a quality gate checkpoint
- Tasks 13 and 14 can run in parallel after Task 15
- Task 17 is the final quality gate before deploy

---

## Notes for Implementing Agent

- **Visual reference:** `prototypes/homepage-design-D-v2.html` — open this in a browser alongside your work. Every pixel should match.
- **Use `document-skills:frontend-design`** skill when building components — it guides high-quality frontend implementation.
- **Content is exact:** All text, reviews, FAQ answers, schedule times come from the prototype and data files. Do not paraphrase or improvise content.
- **Tailwind over custom CSS:** Convert the prototype's custom CSS classes to Tailwind utilities wherever possible. Use `@apply` sparingly (only for truly complex selectors like the radial gradients).
- **Mobile-first:** Build mobile layout first, then add `md:` and `lg:` breakpoints.
- **Temporary SumUp links:** Any "Buy" or "Book" button for passes/memberships links to `https://latinaddictionuk.sumupstore.com` for now. Phase 2 replaces these with on-site SumUp Card Widget checkout.
- **Nav links to unbuilt pages:** Keep real hrefs (e.g., `/pricing`, `/about`). They'll 404 for now — that's expected. The nav structure must match the design doc.

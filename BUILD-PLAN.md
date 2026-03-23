# Latin Addiction Website — Complete Build Plan

## Context

Latin Addiction UK is a Bachata-only dance school running weekly classes in Reading (Wednesdays), Leicester (Tuesdays), and now Milton Keynes (Mondays, starting 16 Mar 2026). The business has been running 4+ years, nets ~£30k/year, and is growing — but has no published website. The domain `latinaddiction.co.uk` is parked on Hostinger with an unpublished WordPress install. The current online presence is a basic SumUp store at `latinaddictionuk.sumupstore.com`.

This plan covers building a new, non-WordPress website from scratch in `/Users/dhiwatdg/Projects/Latin Addiction Website/`.

---

## Part 1: Research Findings

### 1.1 Sibling Projects

Two sibling folders provide all the business context and existing site reference:

**`../Latin Addiction/`** — Business operations & strategy (READ-ONLY)
- `KNOWLEDGE-BASE.md` — Single source of truth: operations, pricing, financials, strategy
- `finance/` — Income sheets 2023-2026 (CSVs), revenue summaries
- `marketing/` — Content strategy (1,900 lines), 7 research reports, campaign playbooks, promo videos
- `classes/` — Location info, private coaching details
- `workshops/` — Monthly online workshop series (2 completed, 3rd on 22 Mar)
- `docs/` — MK expansion deal, negotiation guides, GBP appeal
- `analytics/` — Social media analytics with comprehensive report

**`../latin-addiction/`** — Unpublished WordPress site (READ-ONLY, potentially outdated)
- WordPress on LocalWP with Danza theme (Themeholy) + Elementor + WooCommerce
- 22 WooCommerce products created (drop-ins, memberships, private lessons)
- Custom child theme with shop location filter (Reading/Leicester)
- Design: Red (#EB0029) primary, Poppins + Norican fonts, Bootstrap 5
- Research docs concluded Gutenberg > Elementor for AI/programmatic work
- Phases 1-4 completed, never published. SumUp gateway never configured.

**Access rule**: Both sibling folders are strictly read-only. All code/edits happen only in this project directory.

### 1.2 Business Overview

| Detail | Value |
|--------|-------|
| Business name | Latin Addiction UK (Ltd, Co. #14773454) |
| Dance style | Bachata only (Dominican, Moderna, Sensual, Bachazouk) |
| Founder | D — software engineer (10+ years) who also teaches |
| Contact | 07424 063798 |
| Email | info@latinaddiction.co.uk |
| Social | @latinaddictionuk (IG, FB, TikTok, YouTube) |

### 1.3 Locations & Schedules

**Leicester — Tuesdays**
- Venue: Braunstone Frith Recreation Centre, 29A Sharmon Cres, LE3 6NW
- 7:15pm Beginners (first class FREE) → 8:15pm Improver/Intermediate → 9:15pm Intermediate/Advanced → 10:00pm FREE Party
- Format: 3 sequential classes (one room), students attend 1, 2, or all 3
- Team: Founder + 2 intermittent assistants
- Attendance: 20-30 unique/night, growing
- Parking: FREE street parking
- Margins: 85% net (ultra-lean, minimal team cost)

**Reading — Wednesdays**
- Venue: Wesley Methodist Church, 84 Queen's Rd, RG1 4BW
- 8:00pm Beginners & Level 3 → 9:00pm Level 2 & Level 4 → 10:00pm FREE Party
- Format: 4 levels running as 2 simultaneous classes per slot, max 2 classes/night
- Team: 8 teachers including founder (Gloria, Chido, Imogen, Megan + others)
- Attendance: 40-50 unique/night, mature
- Parking: FREE on-site (register at kiosk)
- Margins: 53% net (higher venue + team payroll costs)

**Milton Keynes — Mondays (NEW, starting 16 Mar 2026)**
- Venue: 8Dance MK (FREE, permanently at no cost)
- 2 hours: Bachata + Salsa, 3 levels per hour
- Deal: 70/30 profit split with 8Dance, D has full control
- Attendance: 65-70 people/night (existing 8Dance crowd)
- Currently in 8-week transition period (absorbing existing passes)

### 1.4 Complete Pricing Structure

**Newcomer Offer (both cities):**
- First class: FREE
- 4-Week Newcomer Pass (beginners only): £20

**Drop-In (per night):**
| Classes | Price |
|---------|-------|
| 1 class | £10 |
| 2 classes | £15 |
| 3 classes | £18 (Leicester only) |

**4-Week Memberships:**
| Type | 1 class/wk | 2 classes/wk | 3 classes/wk |
|------|-----------|-------------|-------------|
| Fixed (4 consecutive weeks) | £36 | £52 | £62 |
| Flexi (valid 8 weeks) | £38 | £58 | £70 |

**8-Week Memberships:**
| Type | 1 class/wk | 2 classes/wk | 3 classes/wk |
|------|-----------|-------------|-------------|
| Fixed (8 consecutive weeks) | £64 | £92 | £110 |
| Flexi (valid 12 weeks) | £72 | £104 | £124 |

**Private Coaching:**
| Session | Off-Peak | Standard/Peak |
|---------|----------|---------------|
| 60 min | £40 | £50 |
| 90 min (recommended) | £60 | £75 |
| 120 min | £80 | £100 |
| Pre-class (Tue 6-7pm / Wed 6-7:30pm) | £40/hr | — |

Packs: 4-session and 8-session at ~£40/hr equivalent.

**Student/NUS discount:** £2 off any purchase.

**Online Workshops:** Free for pass holders, £5 non-members, £3 replay.

### 1.5 Financial Summary

| Year | Gross | Net | Expense Ratio | Avg Net/Session |
|------|-------|-----|---------------|-----------------|
| 2023 | £52,131 | £30,245 | 42% | £188 |
| 2024 | £44,224 | £27,139 | 39% | £214 |
| 2025 | £41,674 | £30,094 | 28% | £186 |
| 2026 YTD (Feb 15) | £3,500 | £2,875 | 18% | £240 |

Key insights:
- Business is getting **leaner**, not smaller — net profit held at ~£30k while expense ratio halved
- Leicester generates MORE net profit than Reading despite 35% lower gross (85% vs 53% margin)
- Private lessons are 100% margin but underutilised (only 14 sessions in 2025)
- Card payments trending up: 69% → 71% → 78% → 74%
- Weekly classes are ~70% of gross revenue
- Projected 2026 bottom-up: £55,918 gross / £40,373 net (+34% over 2025) if marketing initiatives are implemented

### 1.6 Digital Presence

| Platform | Status |
|----------|--------|
| Website | latinaddiction.co.uk — domain parked, unpublished |
| SumUp Store | latinaddictionuk.sumupstore.com — functional, basic |
| Instagram | @latinaddictionuk — ~1,356 followers |
| Facebook | /LatinAddictionUK — ~1,300 followers |
| TikTok | @latin.addiction.uk |
| YouTube | @LatinAddictionUK |
| WhatsApp | Reading ~300 members, Leicester ~100 members |
| Email list | 1,000+ contacts — unused, not in any platform |
| GBP Reading | Live, 5.0 stars, 14 reviews, 507 interactions |
| GBP Leicester | SUSPENDED (flagged for venue ownership) |
| IG Broadcast | 3 members (early stage) |

### 1.7 Marketing Strategy Highlights

From the 7 deep research reports and 1,900-line content strategy:

- **No competitor is running Meta Ads** in Reading or Leicester — first-mover advantage
- LA captures only **1-3% of addressable market** (5,000-11,000 potential students)
- Content pillars: Social Proof 30%, Education 25%, Vibe 25%, Logistics 15%, Community 5%
- Meta Ads budget: £75/mo (£45 Leicester, £30 Reading), click-to-WhatsApp format
- Referral program ("Bring Your Mate"): £5 effective CPA
- The website is critical for SEO — without it, LA cannot rank in organic search
- Projected marketing uplift: £9,300-17,600/year additional revenue

### 1.8 Competitive Landscape

- **No direct bachata-only competitor** in either Reading or Leicester
- Reading: SBSC teaches salsa AND bachata (same Wed night), £12 drop-in, ~6k IG followers
- Leicester: Havana Salsa (franchise, ~22k IG), Salsa en Leicester (same Tue night, different style)
- LA's advantages: bachata-only focus, best newcomer offer (free class + £20 pass), dual-city brand, WhatsApp-first pipeline, no competitor running Meta Ads, ready promo videos
- LA's vulnerabilities: **no website** (limits SEO/discoverability), low social following, founder dependency

---

## Part 2: Infrastructure Analysis

### 2.1 Hostinger Setup

| Resource | Value |
|----------|-------|
| Plan | **Single Web Hosting** (no Node.js) |
| Domain | latinaddiction.co.uk — Active, expires 2026-12-28 |
| Hosting expires | 2026-12-26 |
| Nameservers | ns1.dns-parking.com / ns2.dns-parking.com (**parked**) |
| Server | server442, Europe (United Kingdom) |
| IP | 82.29.186.151 |
| Disk | 50 GB (2.17 GB used, 4%) |
| RAM | 768 MB |
| CPU | 1 core |
| PHP Workers | 25 |
| Bandwidth | 100 GB |
| Inodes | 200,000 (25,315 used, 13%) |
| Email | Free business email @latinaddiction.co.uk (1 mailbox) |
| Backups | Weekly, stored in Germany |
| WordPress | Installed (created 2025-08-04), never published |
| SSL | Active (https://latinaddiction.co.uk) |
| FTP | u557698470, path: public_html |

**Critical constraint:** Single plan does **not** support Node.js. This means:
- No server-side rendering (SSR)
- No API routes running on the server
- No Express, Fastify, or any Node runtime
- **Static files (HTML/CSS/JS) work perfectly** — Apache/LiteSpeed serves them natively
- PHP works natively (WordPress is proof)

**Financial cost:**
- Hosting: ~£33/year — renewal Dec 2026
- Domain: ~£10/year — renewal Dec 2028
- Total: ~£43/year for hosting + domain

### 2.2 Nameserver Parking

The nameservers are `dns-parking.com`, not Hostinger's own. This confirms the domain was never pointed to the hosting — the site has never been live. When ready to publish, nameservers need to be updated to Hostinger's nameservers (done via Hostinger dashboard in one click).

---

## Part 3: Tech Stack Decision

### 3.1 Framework: Astro

**Decision: Astro** (not Next.js, not plain HTML)

**Why Astro over Next.js:**

| Factor | Astro | Next.js (Static Export) |
|--------|-------|------------------------|
| JS shipped to client | **Zero by default** (only interactive islands) | React runtime (~80-100KB) on every page |
| Page load speed | Sub-second on mobile | Heavier, slower first paint |
| Build output | Pure static HTML/CSS/JS | Static HTML but with React hydration bundle |
| Complexity | Content-site focused, simple | Full app framework, overkill for this use case |
| SEO | 95-100 Lighthouse scores typical | Good but heavier JS hurts Core Web Vitals |
| Static hosting | Perfect fit | Works but API routes disabled |
| Learning curve | Low (HTML-like components) | Medium (React ecosystem) |

**Why Astro over plain HTML:**
- Component reuse (header, footer, cards) without copy-paste
- Content collections for products/events/instructors as structured data
- Built-in image optimization, sitemap generation, SEO tools
- Tailwind CSS integration
- Hot reload during development
- Still outputs pure static HTML — same deployment simplicity

**Why Astro is perfect for THIS business:**
1. **SEO is the #1 gap** — research found "LA is invisible on Google." Astro's zero-JS, clean HTML output directly improves Google rankings. A sub-second mobile load time means better Core Web Vitals, which Google uses for local search ranking.
2. **Content-first architecture** — the site is class info, pricing tables, location details, event listings. This is Astro's sweet spot.
3. **Islands architecture** — the few interactive parts (checkout buttons, contact form, mobile menu) hydrate independently. The rest is pure HTML.
4. **File-based routing** — maps directly to the menu structure with zero configuration.
5. **Content collections** — products, events, and instructors defined as data files. Easy to update without touching component code.

### 3.2 Styling: Tailwind CSS

**Decision: Tailwind CSS**

- Rapid development without writing custom CSS files
- Responsive design built into every utility class (mobile-first)
- Consistent spacing, typography, and colour system via config
- Tree-shaking removes unused styles — tiny CSS output
- First-class Astro integration (`@astrojs/tailwind`)

### 3.3 Payments: Stripe (online) + SumUp (in-person)

**Decision: Stripe for online payments, keep SumUp for in-person card readers**

**Why Stripe over SumUp for online:**

| Factor | Stripe | SumUp Online |
|--------|--------|--------------|
| UK card rate | **1.4% + 20p** | 2.5% |
| On £30k online sales | ~£4,400 in fees | ~£7,500 in fees |
| **Annual savings** | **~£3,100 cheaper** | — |
| Apple Pay / Google Pay | Built-in | Limited |
| Static site support | Checkout redirect (no server needed) | Redirect checkout available |
| Dashboard | Industry-leading | Basic |
| Refunds | Easy, via dashboard | Manual |
| API quality | Excellent, well-documented | Limited |

**Why keep SumUp for in-person:**
- Already set up and working at classes (card readers)
- 1.69% in-person rate is competitive
- Students and staff are familiar with it
- No reason to switch what works

**How Stripe works on a static site (no server needed):**

Stripe Checkout in **redirect mode** works entirely client-side.

1. Create all products and prices in the Stripe Dashboard (one-time setup)
2. Each product gets a `price_xxx` ID
3. On the shop page, each "Buy" button calls `stripe.redirectToCheckout({ lineItems: [{ price: 'price_xxx', quantity: 1 }] })`
4. Customer completes payment on Stripe's hosted checkout page (customisable with LA branding)
5. After payment, Stripe redirects back to a success page on the site
6. Stripe sends email receipt automatically

**No server, no API routes, no backend.** The Stripe publishable key is safe to embed client-side.

**Product structure in Stripe:**
A student typically buys ONE product at a time (a membership OR a drop-in OR a private lesson). No shopping cart needed — single-product checkout is the right pattern.

All ~22 products created in Stripe Dashboard:
- 3 drop-in options
- 1 newcomer pass
- 12 membership tiers (4-week and 8-week, fixed and flexi, 1/2/3 classes)
- 6 private lesson options

Each product has location metadata (Reading/Leicester/Both) for filtering on the shop page.

### 3.4 Contact Form: WhatsApp CTA + Web3Forms

**Decision: WhatsApp as primary CTA, Web3Forms as form fallback**

The entire sales funnel is WhatsApp-first:
- Meta Ads → click-to-WhatsApp
- GBP listing → WhatsApp link
- Website → WhatsApp button

The contact page leads with a prominent **click-to-WhatsApp button** (`wa.me/447424063798?text=Hi! I'd like to try a free Bachata class`).

For visitors who prefer a form, **Web3Forms** (free tier: 250 submissions/month):
- No server needed — form submits directly to their API
- Email delivery to info@latinaddiction.co.uk
- Spam protection via honeypot + hCaptcha

### 3.5 Deployment Strategy

**Decision: Build locally, deploy via SFTP to Hostinger's `public_html`**

```
Developer workflow:
1. Edit code locally
2. Run `npm run dev` for local development (localhost:4321)
3. Run `npm run build` to generate static files in dist/
4. Upload dist/ contents to Hostinger public_html via SFTP
```

**Deployment options (in order of simplicity):**

1. **Manual SFTP** — Upload via FileZilla or Hostinger File Manager. Simple, works today.
2. **Deploy script** — `npm run deploy` script using `lftp` or `rsync` over SSH. One command.
3. **GitHub Actions** (future) — Push to `main` triggers build + SFTP deploy automatically.

**First publish checklist:**
1. Build the site and verify locally
2. Back up or delete the existing WordPress files in `public_html` on Hostinger
3. Upload `dist/` contents to `public_html`
4. Update nameservers from `dns-parking.com` to Hostinger's nameservers (via Hostinger Dashboard → Domain → DNS)
5. Verify SSL is active
6. Test all pages and checkout flow
7. Update GBP, social media bios, and SumUp store with the live URL

---

## Part 4: Site Architecture

### 4.1 Page Structure (matches existing menu)

```
HOME                    → /                     (index.astro)
READING                 → /reading              (reading.astro)
LEICESTER               → /leicester            (leicester.astro)
EVENTS ▼                → /events               (events/index.astro)
  ├── Calendar          → /events/calendar      (events/calendar.astro)
  ├── SBK Parties       → /events/sbk-parties   (events/sbk-parties.astro)
  └── Workshops         → /events/workshops     (events/workshops.astro)
PRICING                 → /pricing              (pricing.astro)
SHOP                    → /shop                 (shop.astro)
ABOUT ▼                 → /about                (about/index.astro)
  ├── Instructors       → /about/instructors    (about/instructors.astro)
  ├── FAQ               → /about/faq            (about/faq.astro)
  └── Reviews           → /about/reviews        (about/reviews.astro)
CONTACT US              → /contact              (contact.astro)
```

Plus: `/shop/success` (post-payment), `/shop/cancelled` (payment cancelled), `/404` (custom 404)

### 4.2 Project Structure

```
Latin Addiction Website/
├── src/
│   ├── pages/                      # File-based routing (1 file = 1 URL)
│   │   ├── index.astro             # Homepage
│   │   ├── reading.astro           # Reading classes page
│   │   ├── leicester.astro         # Leicester classes page
│   │   ├── pricing.astro           # Pricing tables (all tiers)
│   │   ├── contact.astro           # WhatsApp CTA + contact form
│   │   ├── shop/
│   │   │   ├── index.astro         # Product grid with city filter + Stripe buttons
│   │   │   ├── success.astro       # Post-payment success page
│   │   │   └── cancelled.astro     # Payment cancelled page
│   │   ├── events/
│   │   │   ├── index.astro         # Events overview
│   │   │   ├── calendar.astro      # Upcoming events
│   │   │   ├── sbk-parties.astro   # Monthly SBK party nights
│   │   │   └── workshops.astro     # Online workshop series
│   │   ├── about/
│   │   │   ├── index.astro         # About LA
│   │   │   ├── instructors.astro   # Team bios
│   │   │   ├── faq.astro           # Common questions
│   │   │   └── reviews.astro       # Testimonials / Google reviews
│   │   └── 404.astro               # Custom 404
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro        # HTML shell + Header + Footer wrapper
│   │
│   ├── components/
│   │   ├── Header.astro            # Navigation with mobile hamburger
│   │   ├── Footer.astro            # Contact info, social links, copyright
│   │   ├── WhatsAppButton.astro    # Floating WhatsApp CTA
│   │   ├── ClassSchedule.astro     # Reusable class timetable display
│   │   ├── PricingTable.astro      # Membership/drop-in pricing table
│   │   ├── ProductCard.astro       # Shop product card with Stripe button
│   │   ├── LocationCard.astro      # Venue info with map embed
│   │   ├── TestimonialCard.astro   # Review/testimonial display
│   │   ├── FAQItem.astro           # Expandable FAQ accordion item
│   │   ├── EventCard.astro         # Event listing card
│   │   ├── InstructorCard.astro    # Team member bio card
│   │   ├── Hero.astro              # Page hero sections
│   │   ├── SEO.astro               # Meta tags, Open Graph, structured data
│   │   └── ContactForm.astro       # Web3Forms contact form
│   │
│   ├── content/                    # Content collections (data-driven)
│   │   ├── config.ts               # Collection schemas (Zod validation)
│   │   ├── products/               # Shop products as JSON/MD files
│   │   │   ├── drop-in-1-class.json
│   │   │   ├── drop-in-2-classes.json
│   │   │   ├── ...
│   │   │   └── private-couple-2hr.json
│   │   ├── events/                 # Upcoming events
│   │   │   └── 2026-03-22-workshop-3.json
│   │   ├── instructors/            # Team bios
│   │   │   ├── d.json
│   │   │   ├── gloria.json
│   │   │   └── ...
│   │   ├── faqs/                   # FAQ entries
│   │   │   ├── no-partner.json
│   │   │   ├── what-to-wear.json
│   │   │   └── ...
│   │   └── reviews/                # Testimonials
│   │       └── ...
│   │
│   ├── data/                       # Static data (not content collections)
│   │   ├── locations.ts            # Leicester/Reading/MK venue details
│   │   ├── pricing.ts              # All pricing tiers
│   │   ├── navigation.ts           # Menu structure
│   │   └── social.ts               # Social media links
│   │
│   └── styles/
│       └── global.css              # Tailwind base + custom styles
│
├── public/                         # Static assets (copied as-is to output)
│   ├── favicon.ico
│   ├── images/
│   │   ├── logo.svg                # LA logo (when created)
│   │   ├── hero/                   # Hero images
│   │   ├── venues/                 # Venue photos
│   │   └── team/                   # Instructor photos
│   └── robots.txt
│
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind theme (colours, fonts, spacing)
├── tsconfig.json                   # TypeScript config
├── package.json
├── .gitignore
├── CLAUDE.md                       # Claude Code instructions
└── BUILD-PLAN.md                   # This file
```

### 4.3 Content Collection Schemas

Products, events, instructors, FAQs, and reviews are defined as data files with validated schemas:
- Content is separated from presentation
- Easy to add/edit products without touching components
- Type-safe — Astro validates data at build time

Example product file:
```json
// src/content/products/4-week-fixed-2-classes.json
{
  "name": "4-Week Fixed — 2 Classes/Week",
  "slug": "4-week-fixed-2-classes",
  "price": 52,
  "stripePriceId": "price_xxxxxxxxxxxxxxxx",
  "category": "membership",
  "duration": "4-week",
  "type": "fixed",
  "classesPerWeek": 2,
  "locations": ["reading", "leicester"],
  "description": "4 consecutive weeks, 2 classes per week.",
  "featured": false
}
```

### 4.4 SEO Strategy (Built into the site)

Every page includes:
- **Title tag** and **meta description** optimised for local search
- **Open Graph** tags for social sharing (image, title, description)
- **Structured data** (JSON-LD): `LocalBusiness` schema for each location, `Product` schema for shop items, `FAQPage` schema for FAQ, `Event` schema for events
- **Sitemap** auto-generated by `@astrojs/sitemap`
- **robots.txt** allowing all crawlers
- **Canonical URLs** to prevent duplicate content
- **Alt text** on all images
- Target keywords: "bachata classes Reading", "bachata classes Leicester", "dance classes near me", "learn bachata UK"

### 4.5 Key Page Content

**Homepage** — Hero with CTA ("Try Your First Class FREE"), 3 location cards (Reading/Leicester/MK), social proof (review count, student count, years running), content pillars preview, WhatsApp CTA.

**Reading / Leicester pages** — Schedule table, venue info with embedded Google Map, parking info, what to expect, newcomer offer, "Book via WhatsApp" + shop link. Structured data for each location.

**Pricing** — Full pricing tables (drop-ins, 4-week, 8-week, private coaching). Comparison view. Newcomer offer highlighted. Student discount noted. CTAs to shop.

**Shop** — Product grid filtered by location (All/Reading/Leicester). Each product card has name, price, description, and "Buy Now" button triggering Stripe Checkout. City filter mirrors the WordPress site's custom implementation.

**Events** — Upcoming events list. Calendar view. Workshop series info with next workshop highlighted. SBK party info.

**Contact** — WhatsApp button (primary CTA), contact form (Web3Forms), both venue addresses with maps, phone, email, social links.

**FAQ** — Accordion-style. Pre-populated from GBP Q&A: no partner needed, no experience needed, cost breakdown, what to wear, parking, age range, how to book, what is Bachata.

**Reviews** — Google review embed or manual testimonials. Link to leave a review.

**Instructors** — Team bios with photos (to be collected from D).

---

## Part 5: Implementation Plan

### Phase 1: Project Scaffold
- Initialise Astro project with Tailwind CSS
- Set up project structure (pages, layouts, components, content)
- Configure `astro.config.mjs` (site URL, sitemap, integrations)
- Configure `tailwind.config.mjs` (brand colours, fonts, spacing)
- Set up Git repository
- Update `CLAUDE.md` with build/dev commands and architecture

### Phase 2: Layout & Navigation
- Build `BaseLayout.astro` (HTML shell, meta tags, font loading)
- Build `Header.astro` (responsive nav with mobile hamburger menu, dropdowns for Events/About)
- Build `Footer.astro` (contact info, social links, quick links, copyright)
- Build `SEO.astro` component (reusable meta/OG/structured data)
- Build floating `WhatsAppButton.astro` (persistent on all pages)
- Create `navigation.ts` data file

### Phase 3: Content Pages
- Homepage with hero, location cards, social proof, CTAs
- Reading page with schedule, venue, map, newcomer offer
- Leicester page with schedule, venue, map, newcomer offer
- Pricing page with all tables
- Contact page with WhatsApp CTA + Web3Forms form
- About page
- FAQ page with accordion
- Reviews page
- Instructors page (placeholder until bios collected)

### Phase 4: Events System
- Events content collection with schema
- Events index page
- Calendar page
- Workshops page (with next workshop highlighted)
- SBK Parties page

### Phase 5: Shop & Stripe Integration
- Set up Stripe account and create all products/prices
- Products content collection with Stripe price IDs
- Shop page with city filter and product grid
- ProductCard component with Stripe Checkout redirect
- Success page (post-payment confirmation)
- Cancelled page (payment abandoned)
- Test full checkout flow with Stripe test mode

### Phase 6: Polish & SEO
- Structured data on all pages (LocalBusiness, Product, FAQPage, Event)
- Sitemap generation
- robots.txt
- Open Graph images
- Favicon
- 404 page
- Performance audit (Lighthouse)
- Mobile responsiveness testing
- Cross-browser testing

### Phase 7: Deploy
- Build production site (`npm run build`)
- Back up/remove existing WordPress files from Hostinger `public_html`
- Upload `dist/` to `public_html` via SFTP
- Update Hostinger nameservers (from dns-parking to Hostinger NS)
- Verify SSL, all pages, checkout flow
- Set up deploy script for future updates
- Update GBP, social bios, SumUp store links

---

## Part 6: Verification

### Development Testing
- `npm run dev` — local dev server at localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

### Functional Testing
- All pages render correctly
- Navigation works (desktop + mobile)
- All links are valid (no 404s)
- Shop filter works (All/Reading/Leicester)
- Stripe Checkout redirects correctly (test mode)
- Payment completes and returns to success page
- Contact form submits and delivers email
- WhatsApp links open correctly
- Google Maps embeds load
- Images load and have alt text

### Performance Testing
- Lighthouse score ≥ 95 on all pages (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint < 1 second
- Total page weight < 500KB (excluding images)
- No layout shifts (CLS = 0)

### SEO Testing
- Structured data validates (Google Rich Results Test)
- Sitemap accessible at /sitemap.xml
- Meta titles and descriptions on all pages
- Open Graph tags render correctly (Facebook Sharing Debugger)
- robots.txt accessible

### Production Testing (post-deploy)
- Site loads at https://latinaddiction.co.uk
- SSL certificate valid
- All pages accessible
- Stripe Checkout works in live mode
- Contact form delivers to info@latinaddiction.co.uk
- Page speed test on real URL (Google PageSpeed Insights)

---

## Part 7: Key Reference Files

**Read-only reference files (sibling projects):**

| File | What to extract |
|------|----------------|
| `../Latin Addiction/KNOWLEDGE-BASE.md` | All business data, pricing, operations |
| `../Latin Addiction/classes/leicester-info.txt` | Leicester event copy |
| `../Latin Addiction/classes/reading-info.txt` | Reading event copy |
| `../Latin Addiction/classes/private-coaching.md` | Private coaching details |
| `../Latin Addiction/marketing/content/content-strategy.md` | Tone, brand voice, CTAs |
| `../Latin Addiction/marketing/research/master-insights-report.md` | SEO keywords, competitor gaps |
| `../latin-addiction/CLAUDE.md` | Existing page structure, WooCommerce products |
| `../latin-addiction/app/public/wp-content/themes/danza/assets/sass/base/_variable.scss` | Design reference (colours, fonts) |

---

## Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | **Astro** | Zero-JS, fastest loads, best SEO, content-first, works on shared hosting |
| Styling | **Tailwind CSS** | Rapid development, responsive, consistent design system |
| Online Payments | **Stripe Checkout** | 1.4%+20p (vs SumUp 2.5%), works client-side, industry standard |
| In-Person Payments | **Keep SumUp** | Already working, staff familiar, competitive 1.69% rate |
| Contact Form | **Web3Forms** | Free, no server needed, delivers to email |
| Primary CTA | **WhatsApp** | Aligns with existing funnel, 98% open rate |
| Hosting | **Hostinger Single** (current) | Static files work perfectly, no upgrade needed, ~£43/year |
| Deployment | **SFTP to public_html** | Simple, reliable, can automate later |
| Domain | **latinaddiction.co.uk** | Already owned, just needs nameserver update |

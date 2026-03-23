# Latin Addiction Website — Page & Content Design

**Date:** 2026-03-20
**Status:** Approved by D

---

## Infrastructure Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | **Astro + Tailwind CSS** | Zero-JS static output, best SEO, content-first, works on any host |
| Hosting | **Cloudflare Pages** (free) | Auto-deploy from GitHub, preview URLs, rollback, global CDN |
| Domain | **Hostinger** (keep) | latinaddiction.co.uk — point DNS to Cloudflare |
| Email | **Hostinger** (keep) | Free business email @latinaddiction.co.uk |
| Payments | **SumUp embed via Cloudflare Worker** | One account for everything. Worker creates checkout sessions server-side, widget embeds on-site. |
| In-person payments | **SumUp card readers** (keep) | Already working, staff familiar |
| Contact form | **Web3Forms** (free) | 5 min setup, 250 submissions/month, emails to info@ |
| Primary CTA | **WhatsApp** | Aligns with existing funnel |

### Hosting Details
- Cloudflare Pages: free, auto-deploys on `git push`, preview URLs per branch, instant rollback
- Hostinger keeps: domain registration (~£10/year) + email (free tier)
- Hostinger hosting (~£33/year): can cancel at next renewal (Dec 2026) since static site lives on Cloudflare
- DNS: point latinaddiction.co.uk nameservers to Cloudflare (one-time, ~5 min)
- Cloudflare acquired Astro in Jan 2026 — first-class integration

### Payments Details (Verified 2026-03-20)
- **SumUp Card Widget** embedded on site (customer never leaves)
- **Cloudflare Worker** (~25 lines) creates checkout sessions server-side with SumUp API key
- Flow: User clicks Buy → Worker calls SumUp API → returns checkoutId → Widget mounts with card form
- SumUp API key stored as Cloudflare Worker secret (never exposed client-side)
- Rate: 2.5% flat, no per-transaction fee, no monthly fee
- Worker is free (Cloudflare Workers free tier: 100K requests/day)
- One account (SumUp) for both online and in-person payments
- SumUp card readers stay for in-person at classes (1.69%)
- **Why not Stripe?** D prefers one payment account. SumUp is already set up for in-person. The ~30p/sale premium over Stripe on a £50 sale is acceptable to avoid managing two providers.
- **Why not SumUp Payment Links?** Redirects user off-site. D wants on-site checkout.
- No new payment provider needed — existing SumUp account
- 2.5% flat rate (no per-transaction fee — cheaper than Stripe for sub-£20 items)
- SumUp card readers stay for in-person at classes (1.69%)
- If Stripe ever needed: Cloudflare Workers can handle server-side Stripe sessions

---

## Key Decisions from Brainstorming

### Target Audience
- **Primary:** Cold newcomer from Google (never heard of LA, searching "dance classes near me")
- **Secondary:** Warm referral (friend told them, saw a Meta Ad)
- **Not for:** Existing students (they use WhatsApp)

### Conversion Action
- TBD — revisiting after pages are designed
- Likely: WhatsApp as primary CTA, online purchase as secondary
- Site's job: convince someone bachata is fun/safe → make it easy to take next step

### Available Assets
- Teacher/team photos: YES
- Class photos: Coming (plans to start taking them)
- Logo: YES (ready)
- Brand colours: Flexible (not locked to WordPress red)

### Brand Vibe
- **Warm and welcoming** as foundation, with bursts of energy
- Modern, mobile-first (existing dance school sites don't feel modern enough)
- Not corporate, not trying too hard to be funny
- "Friendly friend who runs an amazing dance school"
- Page flow: "You belong here" → "Look how fun this is" → "Here's what to expect" → "Try your first class free"

### Milton Keynes
- Deal NOT finalised yet — do NOT include in MVP
- When ready: full page with joint 8Dance branding ("Latin Addiction MK in partnership with 8Dance")
- Same template as Reading/Leicester — just add a file

### Events & Workshops
- Weekly classes (Tue Leicester, Wed Reading) are the core "events"
- Sunday online workshops: worth a page (topics covered + upcoming) — Phase 2
- SBK parties: on hold, could return — Phase 2
- Workshops/SBK are just content pages, not dynamic apps

### Services (NEW — not on WordPress)
- Private coaching, corporate workshops, weddings — HIGH value, LOW effort
- Privates: 100% margin, underutilised (14 sessions in 2025)
- Corporate: £200-1,275 per gig
- Listed in shop for SEO, booking stays WhatsApp-based

### Content Platform
- Recorded workshops / online content behind membership access = SEPARATE PROJECT
- Not part of MVP, not part of this website
- Fundamentally different architecture (auth, video hosting, access control)

### D's Personal Teaching/DJing
- Not on the LA business site
- Brief mention on About page at most
- Separate personal brand

### Second Business (Consultancy)
- May add a "Perks / Partners" section later (e.g., yoga studio discounts)
- Just a content page when it happens — no architecture impact

### Maintenance
- D edits code directly (software engineer)
- Claude helps

### Class Naming
- Use both: "Level 1 (Beginners)" style
- Reading: Level 1 & 3 at 8pm, Level 2 & 4 at 9pm (names TBC against KNOWLEDGE-BASE.md)
- Leicester: Beginners, Improver/Intermediate, Intermediate/Advanced

### Student/NUS Discount
- Exists informally (£2 off, mainly for passes, handled at door)
- Mention on pricing page, don't build into online checkout

### SumUp Store
- Works fine currently
- Want to replace with on-site checkout eventually (no redirect)
- MVP: pricing page links to SumUp store as interim
- Phase 2: on-site checkout (SumUp API or alternative TBD)

### Private Coaching Booking
- Listed in shop/services for SEO and discoverability
- Actual booking stays personal: WhatsApp → arrange time → pay (bank transfer, cash, or SumUp)

### Google Reviews
- Display on site (5.0 stars, 14 reviews on Reading GBP)

### Instagram Feed
- Embed on homepage (shows site is alive + shows the vibe)

### Blog / Resources
- No traditional blog (looks stale if not updated regularly)
- "Resources" or "Learn" section with evergreen pages — Phase 3
- Topics: practice at home (Workshop 2 material), musicality (Workshop 1), "What is Bachata?"
- Each resource page targets specific Google searches
- Add one at a time post-launch

### WordPress Site Reuse
- **Reuse:** Page structure, 22 product definitions, class schedule content, contact info, shop location filter concept
- **Don't reuse:** Theme/design, Elementor templates, WooCommerce/SumUp gateway setup

---

## MVP Navigation (6 pages)

```
HOME | READING | LEICESTER | PRICING | SERVICES | CONTACT
```

Flat navigation, no dropdowns. Clean and simple.

## Phase 2 Additions

```
SHOP | FAQ | ABOUT | WORKSHOPS
```

## Phase 3 Additions

```
REVIEWS | RESOURCES | EVENTS | PERKS/PARTNERS | MILTON KEYNES (when deal finalised)
```

---

## Page Content Design

### Every Page Includes
- **Header:** Logo, nav, phone number, WhatsApp icon
- **Footer:** Contact info, social links (IG, FB, TikTok, YouTube), venue addresses, copyright
- **Floating WhatsApp button** (bottom-right, persistent)
- **Google reviews badge** (e.g., "5.0 stars — 14 reviews")

---

### HOME

The homepage has ONE job: convince a stranger that bachata looks fun, safe, and easy to try.

**Sections:**

1. **Hero** — Full-width, warm image/video background
   - Headline: "Learn Bachata in Reading & Leicester"
   - Subline: "No experience needed. No partner needed. Your first class is FREE."
   - CTA button: "Try Your First Class" (links to WhatsApp or anchor to locations)

2. **"New to Bachata?"** — Myth-busting section
   - 3 cards: "No partner needed" / "No experience needed" / "First class FREE"
   - Short reassuring copy under each

3. **Locations** — 2 cards side by side (add MK card when ready)
   - Reading: Wednesdays from 8pm, Wesley Methodist Church
   - Leicester: Tuesdays from 7:15pm, Braunstone Frith Rec Centre
   - Each card: day, time, venue, "Learn more →" link

4. **Social proof strip**
   - Google reviews (5.0 stars, 14 reviews)
   - "4+ years running"
   - "2 cities" (update to 3 when MK ready)
   - Student count or similar metric

5. **Instagram feed** — Embedded grid (shows the site is alive + shows the vibe)

6. **Final CTA** — "Ready to try? Your first class is free."
   - WhatsApp button + location links

---

### READING

1. **Hero** — "Reading — Bachata Wednesdays" (warm photo from that venue)

2. **Schedule table**
   - 8:00pm — Level 1 (Beginners) & Level 3 (Intermediate)
   - 9:00pm — Level 2 (Improvers) & Level 4 (Advanced)
   - 10:00pm — FREE Party (social dancing)

3. **Newcomer offer** — "First class FREE. Newcomer 4-Week Pass: £20"

4. **Venue info** — Address (Wesley Methodist Church, 84 Queen's Rd, RG1 4BW), Google Maps embed

5. **Parking** — "FREE parking on premises — register your car at the kiosk to avoid fines"

6. **"What to expect"** — Brief walkthrough of a typical night

7. **CTA** — "Message us on WhatsApp" + "View Pricing"

---

### LEICESTER

Same template as Reading with Leicester content:

1. **Hero** — "Leicester — Bachata Tuesdays"

2. **Schedule table**
   - 7:15pm — Beginners (first class FREE for newcomers)
   - 8:15pm — Improver / Intermediate
   - 9:15pm — Intermediate / Advanced
   - 10:00pm — FREE Party

3. **Newcomer offer**

4. **Venue info** — Braunstone Frith Recreation Centre, 29A Sharmon Cres, LE3 6NW

5. **Parking** — "FREE street parking"

6. **"What to expect"**

7. **CTA**

---

### PRICING

1. **Newcomer offer** (highlighted, top of page)
   - First class FREE
   - 4-Week Newcomer Pass: £20

2. **Drop-in prices** — 1 class £10, 2 classes £15, 3 classes £18 (Leicester only)

3. **4-Week Memberships** — Table: Fixed vs Flexi for 1/2/3 classes per week

4. **8-Week Memberships** — Same format

5. **Private coaching** — Pricing grid (off-peak, standard, pre-class slots)

6. **Student discount** — "£2 off with valid student ID — ask at the door"

7. **CTA** — "Buy Now" links (SumUp store for MVP → on-site shop Phase 2) + WhatsApp

---

### SERVICES (NEW)

This page makes 100% margin services visible to Google.

1. **Private Coaching**
   - What it includes, who it's for, pricing summary
   - Solo & couple options
   - "Book via WhatsApp" CTA

2. **Corporate Workshops**
   - "Bring Latin energy to your team event"
   - From £200 for 1 hour
   - Past clients mentioned where appropriate
   - Contact form or WhatsApp

3. **Wedding First Dance**
   - "Learn a choreographed bachata for your first dance"
   - Pricing, what's included, how to book
   - WhatsApp CTA

4. **Guest Teaching / DJ**
   - Brief mention that D is available for events across the UK
   - Contact for enquiries

---

### CONTACT

1. **WhatsApp button** (primary, large, prominent)
   - Pre-filled: "Hi! I'd like to try a free Bachata class"

2. **Contact form** (for people who prefer forms)

3. **Venue cards** — Reading address + map, Leicester address + map

4. **Phone / Email / Social links**

---

## Market Research References

### Inspirational Sites (Best Design)
1. Salsa Tropical London — https://salsa-tropical.com (dark/gold, premium)
2. Floridita Dance Manchester — https://www.floriditadance.com (bold colours, free taster)
3. Muevete Oxford — https://muevete-oxford.co.uk (teal/yellow/coral, spacious)
4. Bachata Fix Kent — https://www.bachatafix.co.uk (gold/purple, bachata-specific)
5. Pineapple Dance Studios — https://www.pineapple.uk.com (iconic branding)
6. Incognito Dance London — https://www.incognitodance.com (vibrant, bundle pricing)

### Non-Dance Patterns to Adopt
- CrossFit Aldgate — myth-busting copy ("judgement free zone") → "no partner needed"
- CorePower Yoga — dedicated "First-Timers" section
- Hot 8 Yoga — aggressive intro offer as hero CTA
- Pilates studios — "New to [Activity]?" homepage section

### Competitor Weaknesses (LA's Opportunity)
- 80% of competitors have NO online booking
- No competitor positions as bachata-specialist
- SBSC Reading: 5/10 site quality, text-heavy, SumUp separate
- Espiritu Latino Leicester: 2/10, 2011-era WordPress theme
- Only Havana Salsa (national franchise) has a modern site (9/10)

### Key Differentiation for LA
1. Bachata-specialist positioning (no competitor does this)
2. Modern, mobile-first design (open goal vs all competitors)
3. On-site checkout (80% of competitors have none)
4. Multi-city unified brand
5. Transparent pricing (most competitors hide it)
6. "New to Bachata?" myth-busting (no competitor does this well)

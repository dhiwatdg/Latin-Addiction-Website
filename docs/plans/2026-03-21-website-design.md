# Latin Addiction UK — Website Design Document

> **Date:** 2026-03-21
> **Status:** FINAL — reviewed, cross-checked against KB, ready for implementation planning
> **Source of truth for pricing/schedules:** `../Latin Addiction/KNOWLEDGE-BASE.md` (SumUp store data as of 2026-02-15)

---

## 1. PROJECT OVERVIEW

### 1.1 What We're Building

A new website for Latin Addiction UK, a Bachata dance school operating in Reading (Wednesdays) and Leicester (Tuesdays). The site replaces a SumUp store page that currently serves as the only web presence.

### 1.2 Goals

1. **Convert nervous first-timers** into WhatsApp messages requesting a free class
2. **Rank in local search** for Bachata, Latin dance, and related terms in both cities
3. **Appear in AI search results** (Google AI Overviews, ChatGPT, Perplexity, Gemini)
4. **Provide transparent information** about classes, pricing, schedule, and locations
5. **Generate enquiries** for private coaching and corporate bookings
6. **Establish credibility** as a professional, established dance school

### 1.3 Success Metrics

- Increase in WhatsApp messages from new enquiries
- Higher Google Business Profile interactions
- Organic search rankings for target keywords
- Private coaching and corporate enquiries via website

---

## 2. TARGET AUDIENCE & CONVERSION STRATEGY

### 2.1 Primary Audience: Person A (Never Danced)

The homepage scroll journey is designed for someone who has never danced before and is nervous about trying. They may have searched for "salsa classes reading" or "Latin dance leicester" and don't know what Bachata is. They need:

- Immediate clarity: what this is, where, when, how much
- Emotional reassurance: they belong here, no judgment
- Zero barrier: first class is free, just message on WhatsApp
- Social proof: real people enjoy this

### 2.2 Secondary Audiences (served via navigation)

- **Person B** (danced other styles): Uses nav to jump to classes, schedule, pricing
- **Person C** (experienced Bachata dancer): Uses nav for schedule and pricing
- **HR / Event planners**: Navigate to /corporate for team-building enquiries
- **Event organizers**: Navigate to /services/hire-us for guest teaching/DJ bookings

### 2.3 Dual-Track Hero

The homepage hero includes:
- **Primary path** (Person A): headline + "Claim your free class" CTA
- **Secondary path** (Person B/C): "Already dance? → Schedule & Pricing" link

### 2.4 Conversion Funnel

```
Website → "Claim your free class" → WhatsApp message → Show up →
Love it → Buy 4-week newcomer pass (£20) at the door
```

The website's job is to drive ONE action: a WhatsApp message. The £20 upsell happens in person.

### 2.5 CTA Strategy

| Context | CTA text | Destination |
|---------|----------|-------------|
| Free class (everywhere) | "Claim your free class" + WhatsApp icon | WhatsApp with pre-filled message |
| Passes / memberships | "Buy [pass name]" | On-site SumUp checkout (via Cloudflare Worker) |
| Private coaching | "Enquire via WhatsApp" | WhatsApp with coaching-specific message |
| Corporate | "Enquire about team events" | WhatsApp or contact form |
| Hire Us | "Book us for your event" | WhatsApp |

**Button labels describe the action, not the tool.** "Claim your free class" not "Message us on WhatsApp." The WhatsApp icon is sufficient to signal the channel.

### 2.6 WhatsApp Deep Links

Each page uses a city-specific pre-filled message:
- Homepage: "Hi! I'd like to try a free Bachata class"
- /reading: "Hi! I'd like to try a free Bachata class in Reading"
- /leicester: "Hi! I'd like to try a free Bachata class in Leicester"
- /services/private-coaching: "Hi! I'm interested in private Bachata coaching"
- /services/corporate: "Hi! I'd like to enquire about a corporate dance workshop"
- /services/hire-us: "Hi! I'd like to enquire about guest teaching or DJ services for an event"

---

## 3. SITE STRUCTURE & NAVIGATION

### 3.1 Navigation (6 top-level items)

```
HOME | READING | LEICESTER | PRICING | SERVICES ▼ | ABOUT ▼
                                        ├── Private Coaching   ├── Our Story
                                        ├── Corporate          ├── FAQ
                                        └── Hire Us            ├── Reviews
                                                               └── Learn
```

### 3.2 All Pages

| Page | URL | In nav? | Purpose |
|------|-----|---------|---------|
| Homepage | `/` | Yes (HOME) | Single-page conversion funnel for Person A |
| Reading | `/reading` | Yes | Reading-specific: venue, schedule, parking, classes |
| Leicester | `/leicester` | Yes | Leicester-specific: venue, schedule, parking, classes |
| Pricing | `/pricing` | Yes | Full pricing: drop-in, passes, memberships, newcomer offer |
| Private Coaching | `/services/private-coaching` | Yes (Services ▼) | Detailed coaching info with headline pricing + SumUp links |
| Corporate | `/services/corporate` | Yes (Services ▼) | Team-building workshops for companies |
| Hire Us | `/services/hire-us` | Yes (Services ▼) | Guest teaching + DJ bookings for events |
| Our Story | `/about` | Yes (About ▼) | Founder story, team, philosophy, teaching approach |
| FAQ | `/faq` | Yes (About ▼) | All first-timer questions + "Bachata vs Salsa" |
| Reviews | `/reviews` | Yes (About ▼) | Google review quotes, star ratings, future video testimonials |
| Classes | `/classes` | No (linked contextually) | Class level detail + progression path |
| Learn | `/learn` | Yes (About ▼) | Evergreen educational content: "Bachata vs Salsa", "What to Wear", etc. |
| Contact | `/contact` | No (in footer) | Contact details, both locations, WhatsApp |
| Privacy Policy | `/privacy` | No (footer link) | Basic privacy policy (UK Ltd requirement) |
| 404 | — | No | Friendly error page with CTA |

### 3.3 Launch Learn Articles

3-5 articles ready at launch (written during build, not deferred):

1. "Bachata vs Salsa: What's the Difference?" — captures 69% salsa search traffic (source: Google Business Profile data, Reading, Oct 2025 – Mar 2026)
2. "What to Wear to Your First Bachata Class" — long-tail beginner query
3. "Is Bachata Hard to Learn? An Honest Answer" — captures anxious Googlers
4. "What is Bachata? A Beginner's Guide" — for the 69% who searched for salsa
5. "5 Things to Know Before Your First Bachata Class" — pre-class reassurance

---

## 4. HOMEPAGE — CONTENT & SECTION ORDER

### 4.1 Revised Section Order (12 sections)

Based on adversarial critique from Gemini, Codex/GPT, and Perplexity.
**Updated 2026-03-22:** Reordered after second adversarial challenge (Gemini + Codex/GPT + Perplexity evidence). Key changes: "Why Bachata" moved from 6→3, "Social Proof" moved from 10→4, pricing simplified, FAQs cut from 12→7, final CTA heading decided. See `prototypes/homepage-content-draft.html` (v2) for the content-approved version.

**New order:** Hero → Worry-busters → **Why Bachata** → **Social Proof** → Getting Started → Schedule → Class Levels → **Pricing (simplified)** → Private Coaching → Instructors → **FAQ (7 questions)** → Final CTA

#### Section 1: HERO

**Content:**
- Headline: "Learn Bachata in Reading & Leicester" (or similar — bold, clear)
- One-line Bachata context: "The Latin partner dance everyone's falling for" (for salsa searchers)
- Sub-copy: "No experience needed. No partner needed. Your first class is FREE."
- Primary CTA: "Claim your free class" (WhatsApp)
- Secondary CTA: "See schedule" (scroll to section 4)
- Dual-track link: "Already dance? → Schedule & Pricing"
- Trust bar: 5.0 Google stars | 4+ years | 100+ students weekly | Free social party after every class
- Video: vertical Reel on mobile (newcomer-focused), text-only on desktop for v1

**Design reference:** #14's hero typography (bold serif headline) + #66's trust bar

#### Section 2: WORRY-BUSTERS (compact — 3 only)

**Content (reduced from 6 to 3 based on challenge feedback):**
1. "No partner needed" — We rotate partners. Most people come alone.
2. "No experience needed" — We start from absolute zero every session.
3. "Your first class is free" — No card details, no commitment. Just come.

Each with an accent-coloured tick confirmation line (#66 style).

**Remaining worry-busters moved to FAQ:** "What should I wear?", "Will it be awkward?", "Am I too old/unfit?"

**Design reference:** #66's worry-buster cards with tick marks, but 3 cards in a row (not 3x2 grid)

#### Section 5: GETTING STARTED (was 3)

**Content:**
- Heading: "Getting started is ridiculously easy"
- 3 numbered steps:
  1. **Send us a message** — Just say hi on WhatsApp. We'll confirm the next class and answer any questions.
  2. **Turn up** — Wear something comfortable. No special shoes needed. We'll be expecting you.
  3. **Dance** — Your first class is free. Stay for the social party.
- CTA: "Claim your free class" (WhatsApp)

**Design reference:** #14's 3-step process with numbered circles and connector line

#### Section 6: SCHEDULE + LOCATIONS (was 4, tabbed by city)

**Content (tabs: Reading | Leicester):**

**Reading tab:**
- Venue: Wesley Methodist Church, 84 Queen's Rd, Reading RG1 4BW
- Doors: 7:45pm
- 8:00pm — Beginners & Intermediate (two levels running simultaneously)
- 9:00pm — Improvers & Advanced (two levels running simultaneously)
- 10:00pm — FREE Social Party
- Parking: FREE on premises — register at the kiosk to avoid fines
- "Get directions →" (Google Maps link)
- CTA: "Join the Reading class" (WhatsApp deep link)

**Leicester tab:**
- Venue: Braunstone Frith Recreation Centre, 29A Sharmon Cres, Leicester LE3 6NW
- Doors: 7:00pm
- 7:15pm — Beginners (1 hr)
- 8:15pm — Improver / Intermediate (1 hr)
- 9:15pm — Intermediate / Advanced (1 hr)
- 10:15pm — FREE Social Party
- Parking: FREE street parking
- "Get directions →" (Google Maps link)
- CTA: "Join the Leicester class" (WhatsApp deep link)

**Design reference:** #66's timetable cards with dark headers + day badges. Tabs within one section.

#### Section 7: CLASS LEVELS (was 5)

**Content:**
- Heading: "Which level sounds like you?"
- 4 cards (Beginner, Improver, Intermediate, Advanced)
- Each card: pill badge, level name, description in plain English (no jargon), pricing teaser
- Beginner card highlighted (coral/accent) with "First class FREE" and "Claim free class →"
- Other cards: "From £10/night" with "See pricing →"
- Curriculum details woven into descriptions:
  - Beginner: rhythm, basic footwork, first partner moves
  - Improver: turn patterns, connection, developing personal style
  - Intermediate: body movement, complex combinations, social dancing confidence
  - Advanced: deep musicality, layered styling, advanced partner work

**Design reference:** #68's 4-column level cards with pill badges

#### Section 3: WHY BACHATA? (moved from 6→3 after second challenge)

**Content:**
- Heading: "Why people fall in love with Bachata" ← **DECIDED** (2026-03-22: "The Gift of Bachata" assumes familiarity with Bachata; "Why people fall in love with Bachata" explains what the section does and uses social proof framing — better for Person A who doesn't know what Bachata is)
- 4 Bachata-specific benefits (grounded in what makes Bachata unique, not generic dance claims):
  1. A simple 4-count rhythm — side-to-side steps that let you focus on your partner, not your feet. No complex timing to learn.
  2. Slower tempo, music you'll connect with — guitar-driven, melodic, and emotional. You'll feel the rhythm before you even step. *(2026-03-22: "often remixed from songs you already know" removed — fact-check contradicted this claim)*
  3. Dance socially from night one — the simplicity of Bachata's foundation means you'll actually dance at the social party the same night you learn your first steps.
  4. Connection over choreography — Bachata is about how it feels between partners, not flashy footwork. It's built for feeling, not performing.
- Emotional but factual. Describes what Bachata IS, not what other dances aren't.
- Mention lead & follow: "We teach both lead and follow — you choose which role suits you."

**Design reference:** #29's "Gift of Bachata" section with icon cards

#### Section 8: PRICING (was 7, simplified for homepage)

**Content:**
- Heading: "Simple, fair prices"
- Sub-copy: "No hidden fees, no commitments. Pay as you go or save with a pass."

**Newcomer offer (highlighted card):**
- First class: FREE
- 4-Week Newcomer Pass: £20 (beginners only, 4 consecutive weeks)
- CTA: "Claim your free class" + "Buy newcomer pass" (SumUp link)

**Drop-in pricing (homepage shows 1 and 2 class options only):**
- 1 class/night: £10
- 2 classes/night: £15
- On-site SumUp checkout for each
- (3 classes/night £18 — Leicester only — shown on /pricing page, not homepage)

**Homepage pricing simplified (2026-03-22):** Membership table removed from homepage after adversarial challenge — all three models flagged 8-row table as "analysis paralysis" for Person A. Homepage shows newcomer offer + drop-in only. Link: "See all pricing options →" to /pricing for membership passes.

**Notes:**
- Cash and card accepted at the door
- "Student & NHS discount available — ask us on WhatsApp"
- Full membership table (Fixed/Flexi, 4/8 week, 1/2/3 classes) lives on /pricing page only

**Design reference:** #27/#48 pop-out centre card for newcomer offer + #66's membership table

#### Section 9: PRIVATE COACHING (was 8, banner)

**Content:**
- Dark banner section
- Heading: "Want to accelerate faster?"
- Copy: Private Bachata coaching tailored to your goals — technique, musicality, turns, styling.
- Pricing: "From £40 / 60-min session. Packs of 4 or 8 available."
- CTA: "Enquire via WhatsApp →" + "See full details →" (link to /services/private-coaching)

**Design reference:** #68's 1-to-1 coaching dark banner

#### Section 10: INSTRUCTORS (was 9)

**Content:**
- Eyebrow: "Your Instructors"
- Heading: "People who actually care if you have fun"
- Left column: About copy — founded by Dhiwa & Gloria, who built a teaching method around technique, safety, and genuine fun. Gloria discovered Bachata in 2019 — she was once exactly where you are. They teach and DJ at festivals across the UK.
- Pull quote: "We're not just here to teach you steps. We're here to make sure you leave every class feeling better than when you arrived."
- Founder card: Photo + "Latin Addiction Team" + "Reading & Leicester" + skill pills (Bachata, Sensual, Beginner-Friendly)
- Team line: "Supported by a team of 8+ trained instructors across both cities."
- Right column: "What a typical class looks like" — 4-step numbered list:
  1. Warm welcome — introductions, no awkward standing around
  2. Foundation technique — broken down until it clicks
  3. Rotating partners — dance with everyone, make new mates
  4. Social freestyle — the music stays on, this is where the magic happens

**Design reference:** #66's instructor split layout with team card + pull quote + typical class steps

#### Section 4: SOCIAL PROOF (moved from 10→4 after second challenge)

**Content:**
- 3-4 Google review quotes with first names and star ratings
- Stats bar: 5.0 Google Reviews | 4+ Years Running | 2 Cities | 100+ Students Weekly
- Instagram grid: 6-cell grid of recent Reels, linking to @latinaddictionuk
- "Follow us on Instagram →"
- "Bring a friend or come alone — most of our regulars arrived solo."

**Design reference:** #27's stats strip + #43's Instagram grid adapted to warm palette

#### Section 11: FAQ (was 11, reduced from 12→7 questions)

**Content — accordion format, 7 questions on homepage (rest on /faq):**
- "Every question first-timers ask."
- Do I really not need a partner?
- What should I wear?
- Will it be awkward?
- What's the difference between Bachata and Salsa? ← SEO-critical
- Do I need to book in advance?
- How quickly will I be able to dance socially?
- Is there parking at the venues?
- Link: "See all FAQs →" to /faq

**Moved to /faq only:** Am I too old / too unfit? | What is Bachata, exactly? | What's the age range like? | Do you offer private lessons? | Do you teach both lead and follow?

**Design reference:** #68's FAQ accordion with sand-coloured rows

#### Section 12: FINAL CTA

**Content:**
- Heading: "Your next Tuesday or Wednesday could change everything." ← **DECIDED** (2026-03-22: both Gemini and Codex agreed "No excuses left" is shaming tone for nervous first-timers; "Tuesday or Wednesday" is concrete, aspirational, references both cities)
- Copy: "One free class. No pressure. Just show up, and let's see what happens." (adapted from #66 — trust checklist below handles the "no commitment/no partner" reassurance, so body copy does the emotional close instead of repeating negatives)
- CTAs: "Claim your free class" (primary, WhatsApp) + "Call 07424 063798" (secondary)
- Trust checklist below: First class free | No partner needed | Complete beginners welcome | No commitment required

**Design reference:** #53's "No excuses left" copy + #66's "Your next Wednesday" dark section layout

#### Persistent Elements

- **Sticky WhatsApp bar (mobile only):** fixed at bottom of screen, always one tap away
- **Floating WhatsApp button (all devices):** green circle, bottom-right, always visible
- **Footer:** Nav links (all pages) | Social media (Instagram, Facebook, TikTok, YouTube) | Contact (email, phone, WhatsApp) | Both location addresses | Privacy policy link | "Student & NHS discount available"

---

## 5. DESIGN DIRECTION

### 5.0 Brand Voice & Tone

- **Foundation:** Warm and welcoming, with bursts of energy
- **Not:** Corporate, try-hard funny, generic fitness marketing
- **Personality:** "Friendly friend who runs an amazing dance school"
- **Page flow emotion:** "You belong here" → "Look how fun this is" → "Here's what to expect" → "Try your first class free"
- **Copy rules:** Direct, casual, reassuring. No jargon. No buzzwords. Written like a person, not a brand.

### 5.1 Design A — Warm Earthy (Primary Build)

**Palette:**
- Background: cream (#FFF8F0) / parchment (#F5E6D3)
- Primary accent: terracotta (#C2785C)
- Dark sections: deep brown (#3D1F0D)
- Text: dark brown (#3D1F0D) on light, cream on dark
- Secondary accent: ochre (#C9913A) / sand (#DEB887)

**Typography:**
- Display: DM Serif Display (headings — warm, readable serif)
- Body: Poppins (clean, modern, highly readable at all sizes)
- NOT Cormorant Garamond at small sizes (readability issue flagged)

**Textures & Effects:**
- Subtle grain overlay on sections
- Organic wavy SVG dividers between light and dark sections (#7 reference)
- Soft card shadows, rounded corners (16-20px)
- Fade-up scroll reveal animations

**Energy level (per challenge feedback):**
- NOT a quiet wellness spa — needs contrast and visual rhythm
- Bold typography in headings, generous scale
- Darker accent sections (instructor, coaching, final CTA) provide punch
- Wavy dividers add movement metaphor
- Strong colour contrast between light and dark sections

**Design references:** #66 (layout/cards), #68 (sections), #7 (dividers), #29 (editorial quality)

### 5.2 Design B — Dark Bold (Secondary Build)

**Option 1: #69 direction (recommended for Design B)**
- Dark base (#1A1A1A) + burgundy (#7F1D1D) + gold (#D4AF37)
- Bebas Neue (impact) + Cormorant Garamond (elegant accents) + Poppins (body)
- Film grain overlay, gold shimmer animation, scrolling ticker
- Works without professional video (typography and texture carry the design)

**Option 2: #10 direction (future, when horizontal video is available)**
- Pure monochrome B&W + single red accent (#EF4444)
- Bebas Neue + Poppins
- Needs strong landscape video to work — park until available

**Decision:** Design B uses #69 direction for v1. #10 reserved for potential future redesign when professional video is available.

### 5.3 Responsive Strategy

- **Mobile-first design** (75% of traffic is mobile)
- **Desktop-respectful** — not neglected, especially for timetable readability and trust-building
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

### 5.4 Video Strategy

| | v1 (launch) | v1.5 (1-2 weeks post-launch) |
|---|---|---|
| Mobile hero | Vertical Reel, plays naturally | Same |
| Desktop hero | Text-only, bold typography | Horizontal video background or loop |
| Social proof section | Vertical Reels in grid | Same + horizontal cuts |
| Video content | Newcomer-focused in hero area | Mix of newcomer + social party + community |

---

## 6. SUBPAGE CONTENT SPECIFICATIONS

### 6.1 /reading

- Hero: "Bachata Classes in Reading — Every Wednesday"
- Full schedule (same as homepage tab but expanded)
- Venue details: address, parking kiosk warning, directions link
- Classes available at this location (Level 1-4 explained)
- "What a typical Wednesday looks like" (timeline)
- CTA: "Claim your free class in Reading" (WhatsApp deep link)
- Google reviews specific to Reading if available
- SEO: targets "bachata classes reading", "latin dance classes reading", "dance classes reading berkshire"

### 6.2 /leicester

- Same structure as /reading, adapted for Leicester
- 3 sequential classes (not parallel like Reading)
- No kiosk parking warning (free street parking)
- SEO: targets "bachata classes leicester", "latin dance leicester"

### 6.3 /pricing

- Full pricing table from KNOWLEDGE-BASE.md (all tiers)
- Newcomer offer highlighted
- Drop-in, 4-week, 8-week memberships
- Fixed vs Flexi explanation
- Private coaching headline pricing with link to full page
- "Student & NHS discount — ask us on WhatsApp"
- SumUp buy links for every purchasable product
- Cash and card accepted at the door

### 6.4 /services/private-coaching

- Detailed coaching info: what it covers, who it's for
- Pricing: singles (off-peak/peak/pre-class) and packs (4/8 sessions)
- Recommended duration: 90 minutes
- Booking process: purchase via SumUp → confirm via WhatsApp
- SumUp buy links
- CTA: "Enquire via WhatsApp" for questions

### 6.5 /services/corporate

- Audience: HR managers, event planners, team leads
- Professional tone (different from consumer pages)
- What's offered: team-building dance workshops, wellbeing sessions
- Format options: 1-hour, 90-min, half-day
- Benefits: bonding, stress relief, something different
- Enquiry CTA (WhatsApp or contact form)
- Lead with offering, not client list (only 1 corporate dance gig to date — mention in conversation if asked, not on the page)

### 6.6 /services/hire-us

- Audience: event organizers, festival promoters
- What's offered: guest teaching, DJ sets, workshops, festival appearances
- Experience: 4+ years teaching, regular appearances at UK festivals and events
- Enquiry CTA
- Links to social media for portfolio/content

### 6.7 /about (Our Story)

- Founder story: Dhiwa & Gloria, how Latin Addiction started
- Gloria's journey into Bachata (she was once Person A — no Bachata experience, nervous beginner)
- Teaching philosophy: technique, safety, genuine fun
- Values: inclusive, passionate, community
- Founder photo
- Team mention with photos if available
- "Supported by 8+ trained instructors across both cities"

### 6.8 /faq

- Full FAQ with all questions (expanded from homepage accordion)
- Each answer written as direct, factual statements (for AI search)
- Includes "What's the difference between Bachata and Salsa?" (SEO-critical)
- Schema: FAQPage structured data

### 6.9 /reviews

- Google review quotes with names and star ratings
- Aggregate rating display
- Future: video testimonials
- "Leave us a review on Google →" link

### 6.10 /classes

- Detailed class level descriptions
- Progression path: Beginner → Improver → Intermediate → Advanced
- What you learn at each level (plain English)
- How to know when you're ready for the next level
- Available at which location
- Links to /reading and /leicester for schedules

### 6.11 /learn

- Evergreen educational content hub (not a "blog" — no staleness pressure)
- 3-5 articles ready at launch
- Each article ends with CTA: "Ready to try? Your first class is free."
- New articles added regularly via Claude (write → commit → auto-deploy)
- Content updated by Claude as part of ongoing site maintenance

### 6.12 /contact

- WhatsApp (primary contact — prominent click-to-WhatsApp button)
- Contact form fallback: Web3Forms (free, 250 submissions/month, delivers to info@latinaddiction.co.uk)
- Phone: 07424 063798
- Email: info@latinaddiction.co.uk
- Both location addresses with directions links
- Social media links

### 6.13 /privacy

- Basic privacy policy (UK Ltd legal requirement)
- Must cover:
  - Contact form (Web3Forms): collects name, email, message — processed by Web3Forms, delivered to info@latinaddiction.co.uk
  - Payment processing (SumUp Card Widget): payment card data handled by SumUp as payment processor — LA does not store card details
  - WhatsApp links: direct users to Meta's WhatsApp service
  - No cookies set (unless analytics added later)
- If analytics added later: update with cookie policy and data retention details

### 6.14 404 Page

- Friendly message: "This page doesn't exist, but your first Bachata class is waiting."
- Links to homepage, schedule, contact
- WhatsApp CTA

---

## 7. TECHNICAL REQUIREMENTS

### 7.1 Performance

- Target: <3 second load on 4G mobile
- Lazy-load all images and video below the fold
- No embedded Google Maps iframes (use "Get directions →" links)
- Optimize images (WebP format, compressed)
- Minimal JavaScript (Astro ships zero JS by default)
- **Framework: Astro + Tailwind CSS** (decided — see BUILD-PLAN.md for full rationale)

### 7.2 SEO

- Proper heading hierarchy per page (single H1, structured H2/H3)
- Meta titles and descriptions for every page
- Canonical URLs
- XML sitemap
- robots.txt
- Submit to both Google Search Console AND Bing Webmaster Tools
- Image alt text on all images
- Internal linking between related pages

### 7.3 Schema Markup (JSON-LD)

- **DanceStudio** (subtype of LocalBusiness) — for both Reading and Leicester locations
  - Name, address, geo-coordinates, opening hours, telephone, priceRange
- **Course** — for each class level
  - Name, description, provider, offers (price)
- **FAQPage** — on /faq page
  - Question/answer pairs (enables rich snippets in search)
- **AggregateRating** — 5.0 stars from Google
- **Organization** with `sameAs` linking to:
  - Instagram: https://www.instagram.com/latinaddictionuk
  - Facebook: https://www.facebook.com/LatinAddictionUK
  - TikTok: https://www.tiktok.com/@latin.addiction.uk
  - YouTube: https://www.youtube.com/@LatinAddictionUK

### 7.4 Open Graph Tags

Every page needs:
- `og:title` — page-specific title
- `og:description` — page-specific description
- `og:image` — branded share image (1200x630px) per page
- `og:url` — canonical URL
- `twitter:card` — summary_large_image

Critical because WhatsApp is the primary sharing channel — link previews must look professional.

### 7.5 Accessibility

- Semantic HTML (headings, nav, main, sections, footer)
- WCAG AA colour contrast (4.5:1 minimum for normal text)
- Keyboard navigable (all interactive elements)
- Alt text on all images and videos
- ARIA labels on icon buttons and accordions
- Don't disable mobile zoom (no maximum-scale=1)
- Skip-to-content link
- Timetable readable by screen readers (not visual-only grid)

### 7.6 Analytics & Tracking

- TBD: Google Analytics 4 vs privacy-friendly alternative (Plausible, Fathom)
- If GA4: requires cookie consent banner (GDPR/UK PECR)
- Track: page views, WhatsApp CTA clicks, SumUp link clicks, scroll depth
- Meta Pixel for future ad tracking (click-to-WhatsApp ads planned)

### 7.7 Domain, Hosting & Payments

- **Domain:** latinaddiction.co.uk (Hostinger, keep — ~£10/year)
- **Hosting:** Cloudflare Pages (free — auto-deploy from GitHub, global CDN, preview URLs)
- **Email:** Hostinger (keep — free business email @latinaddiction.co.uk)
- **Hostinger hosting plan:** cancel at Dec 2026 renewal (save £33/year — not needed with Cloudflare)
- **SSL:** included with Cloudflare Pages
- **Online payments:** SumUp Card Widget embedded on-site via Cloudflare Worker (~25 lines). Customer never leaves the site. API key stored as Cloudflare Worker secret. 2.5% flat rate, no per-transaction fee.
  - Flow: User clicks Buy → Worker calls SumUp API → returns checkoutId → Widget mounts with card form on-page
  - Why not Stripe? D prefers one payment provider. SumUp already set up for in-person. The ~30p/sale premium over Stripe on a £50 sale is acceptable to avoid managing two providers.
  - Why not SumUp Payment Links? Redirects user off-site. D wants on-site checkout.
  - If Stripe ever needed: Cloudflare Workers can handle server-side Stripe sessions too
- **In-person payments:** SumUp card readers (keep — 1.69%, already set up)
- **Deployment:** git push to GitHub → Cloudflare auto-deploys in ~30 seconds
- **Student & NHS discount:** £2 off any purchase. Handled informally at the door. Show on pricing page but do NOT build into online checkout.

---

## 8. MEDIA & ASSETS AVAILABLE

| Asset | Status | Usage |
|-------|--------|-------|
| Vertical IG Reels (newcomer-focused) | Available now | Hero (mobile), social proof section |
| Vertical IG Reels (regular dancers) | Available now | Social proof section, lower on page |
| Founder duo photo (Dhiwa & Gloria) | Available now | Instructor section, About page |
| Teacher team photos | Available now | About page, instructor section |
| Horizontal video content | Coming in 1-2 weeks | Desktop hero (v1.5), social proof |
| Professional photography | Not available | Use video stills, designed graphics |
| Logo / brand mark | Available (ready) | Header, favicon, OG images |
| OG share images (1200x630px) | To be created | One per page for WhatsApp/social sharing |

---

## 9. SEO & AI SEARCH STRATEGY

### 9.1 Target Keywords

| Page | Primary keywords | Secondary keywords |
|------|-----------------|-------------------|
| Homepage | "bachata UK", "latin addiction uk" | "latin dance classes", "bachata dance school" |
| /reading | "bachata classes reading", "dance classes reading" | "latin dance reading", "partner dance reading berkshire" |
| /leicester | "bachata classes leicester", "dance classes leicester" | "latin dance leicester" |
| /classes | "bachata beginner classes", "bachata levels" | "learn bachata UK" |
| /pricing | "bachata class prices", "dance class costs" | "dance school membership UK" |
| /private-coaching | "private bachata lessons", "1-to-1 dance coaching" | "bachata private teacher reading" |
| /corporate | "corporate dance workshop", "team building dance class" | "staff wellbeing activity reading" |
| /faq | Long-tail: "do I need a partner for bachata" | "what to wear bachata class" |
| Blog: Bachata vs Salsa | "bachata vs salsa", "difference bachata salsa" | "what is bachata" |

### 9.2 Salsa Searcher Strategy

69% of Google traffic searches for "salsa" not "bachata." Strategy:
- Do NOT claim to teach salsa (misleading)
- USE broader terms: "Latin dance classes", "Latin partner dance"
- ADD FAQ question: "What's the difference between Bachata and Salsa?"
- ADD hero context line: "the Latin partner dance everyone's falling for"
- WRITE blog post: "Bachata vs Salsa: What's the Difference?"
- META descriptions include "Latin dance" where natural

### 9.3 AI Search Optimization

- DanceStudio schema with complete structured data
- FAQ answers written as direct factual statements (not marketing fluff)
- `sameAs` linking all social profiles to website entity
- Submit to Bing Webmaster Tools (feeds ChatGPT/SearchGPT)
- Consistent NAP across all directory listings
- Set up 7 discovery platforms from knowledge base (Eventbrite, AreYouDancing, etc.)

---

## 10. OPEN DECISIONS

| Decision | Options | Notes |
|----------|---------|-------|
| Analytics | GA4 (powerful but needs cookie consent) vs Plausible/Fathom (privacy-first, no cookie banner) | Affects UX (cookie banner) and tracking capability |
| Design B direction | #69 (burgundy/gold — recommended) vs #10 (monochrome — when pro video available) | Secondary design, lower priority than Design A |

**Previously open, now decided:**
- Final CTA heading: **"Your next Tuesday or Wednesday could change everything."** (2026-03-22 — Gemini + Codex both argued "No excuses left" is shaming/confrontational for nervous first-timers; "Tuesday or Wednesday" is aspirational, concrete, references both cities)

**Previously open, now decided:**
- Tech stack: **Astro + Tailwind CSS** (see BUILD-PLAN.md)
- Hosting: **Cloudflare Pages** (free)
- Payments: **SumUp Card Widget + Cloudflare Worker** (on-site checkout)
- Logo: **Available** (ready to use)

---

## 11. PROTOTYPE REFERENCES

Sections sourced from specific prototypes:

| # | Section | Primary reference | Secondary |
|---|---------|------------------|-----------|
| 1 | Hero | #14 (typography), #66 (trust bar) | #69 (Design B) |
| 2 | Worry-busters | #66 (tick confirmations) | — |
| 3 | Why Bachata | #29 ("Gift of Bachata") | — |
| 4 | Social proof | #27 (stats strip) + Instagram grid | — |
| 5 | Getting started | #14 ("ridiculously easy") | — |
| 6 | Schedule + Locations | #66 (timetable cards) | — |
| 7 | Class levels | #68 ("Which level sounds like you?") | — |
| 8 | Pricing | #27/#48 (pop-out centre card for newcomer offer) | — |
| 9 | Private coaching | #68 (dark banner) | — |
| 10 | Instructors | #66 (split layout + team card + pull quote) | — |
| 11 | FAQ | #68 (accordion) | — |
| 12 | Final CTA | #66 ("Your next Tue/Wed" dark section layout) | — |
| — | Section dividers | #7 (organic wavy SVG) | — |
| — | Floating WhatsApp | #66 / #64 | — |

---

## 12. DESIGN REFERENCES & COMPETITIVE CONTEXT

### 12.1 Inspirational Dance School Sites

1. Salsa Tropical London — dark/gold, premium feel
2. Floridita Dance Manchester — bold colours, free taster CTA
3. Muevete Oxford — teal/yellow/coral, spacious layout
4. Bachata Fix Kent — gold/purple, bachata-specific
5. Pineapple Dance Studios — iconic branding
6. Incognito Dance London — vibrant, bundle pricing

### 12.2 Non-Dance UX Patterns to Adopt

- CrossFit Aldgate — myth-busting copy ("judgement free zone") → our "no partner needed"
- CorePower Yoga — dedicated "First-Timers" section
- Hot 8 Yoga — aggressive intro offer as hero CTA
- Pilates studios — "New to [Activity]?" homepage section

### 12.3 Competitor Weaknesses (LA's Opportunity)

- 80% of competitors have NO online booking
- No competitor positions as bachata-specialist
- SBSC Reading: 5/10 site quality, text-heavy, SumUp separate
- Espiritu Latino Leicester: 2/10, 2011-era WordPress theme
- Only Havana Salsa (national franchise) has a modern site (9/10)

### 12.4 Key Differentiation for LA

1. Bachata-specialist positioning (no competitor does this)
2. Modern, mobile-first design (open goal vs all competitors)
3. On-site checkout (80% of competitors have none)
4. Multi-city unified brand
5. Transparent pricing (most competitors hide it)
6. "New to Bachata?" myth-busting (no competitor does this well)

---

## 13. SCOPE GUARDS

These are explicitly OUT OF SCOPE for this website:

- **Content platform / online classes:** Recorded workshops behind membership = separate project, fundamentally different architecture (auth, video hosting, access control)
- **D's personal teaching/DJing brand:** Not on the LA business site. Brief About page mention at most. Separate personal brand.
- **Milton Keynes:** Guest teaching at 8Dance (70/30 split), not an LA-operated venue. Excluded from v1. When deal is fully finalised, add as a city page using same template.
- **Events section:** No events/workshops/parties pages for v1 — D has no current events to populate them. Add when content exists.
- **Sunday online workshops:** Retention/upsell tool for existing students, would dilute newcomer conversion. Not on homepage.
- **"Perks / Partners" section:** May add later as a content page — no architecture impact.

### Implementation Notes

- **Class naming convention:** Use both number and name: "Level 1 (Beginners)" style. Reading: Level 1 & 3 at 8pm, Level 2 & 4 at 9pm.
- **WordPress product definitions:** 22 WooCommerce products from `../latin-addiction/` can be referenced for SumUp product structure (names, descriptions, categories, variants).
- **Private coaching booking:** Listed on site for SEO and discoverability. Actual booking stays personal: WhatsApp → arrange time → pay via SumUp.

---

## 14. BUILD & LAUNCH

### Main Build (everything ships together)

All pages built in one phase — component reuse means subpages are fast once homepage is done:

- Homepage (single-page conversion funnel, 12 sections)
- /reading and /leicester (location landing pages)
- /pricing (full pricing with on-site SumUp checkout)
- /services/private-coaching (detailed coaching info + checkout)
- /services/corporate (team-building workshops)
- /services/hire-us (guest teaching + DJ bookings)
- /about (founder story)
- /faq (full FAQ with schema markup)
- /reviews (Google review quotes)
- /classes (detailed level progression)
- /learn (3-5 articles ready at launch)
- /contact
- /privacy
- 404 page
- Design A (warm earthy)
- All schema markup (DanceStudio, FAQPage, Course, Organization)
- OG tags + share images per page
- Google Search Console + Bing Webmaster Tools
- Cloudflare Worker for SumUp checkout
- Mobile-first, vertical video in hero

### Post-Launch (depends on content that doesn't exist yet)

- Desktop hero video (when horizontal content is shot, ~1-2 weeks)
- Design B prototype (#69 direction)
- Directory listings (7 platforms from knowledge base)
- Additional /learn articles (ongoing, via Claude)
- Gallery page (when enough visual content accumulated)
- Video testimonials (when students agree to be filmed)
- Design B full build (future)
- Potential #10 monochrome direction (when professional video available)

### Pre-Launch Dependencies

- Leicester Google Business Profile suspension must be fixed (in progress)
- WhatsApp Business auto-welcome message should be set up
- SumUp products created in dashboard (all ~22 products from existing SumUp store)
- OG share images designed (1200x630px per page)

---

## 15. ADDITIONAL NOTES

### WhatsApp Nurture Sequence
The website's conversion job ends at driving a WhatsApp message. Post-message nurture (day-of reassurance, 2-hour reminder, post-class follow-up) is handled via WhatsApp Business, not the website. See KNOWLEDGE-BASE.md section 6.6 for the full message sequence.

### "Free" Language Variation
"First class is free" appears in Hero, Pricing, and Final CTA (3 prominent placements). Other sections use varied language ("come try it", "no cost to start", "see for yourself") to avoid the word "free" appearing 8+ times and feeling desperate.

### Ongoing Maintenance via Claude
The site is maintained by the founder (a software engineer) with Claude's assistance. Regular updates include:
- New /learn articles (Claude writes content, commits, auto-deploys)
- Schedule or pricing changes (edit data files, push)
- New reviews added to /reviews
- Event announcements
- Seasonal banners (Christmas closure, etc.)

### /classes Page Linking
The /classes page is not in the main nav but is linked from:
- Homepage Section 5 (Class Levels): "See full level details →"
- /reading page: link in class descriptions
- /leicester page: link in class descriptions

### H1 Clarification: Site Replaces SumUp
The website replaces the SumUp store page as the public-facing web presence AND handles checkout on-site via the SumUp Card Widget + Cloudflare Worker. Customers never leave the site to pay. SumUp remains the payment processor behind the scenes.

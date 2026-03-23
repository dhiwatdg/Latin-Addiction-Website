# Website Design Decisions — Full Summary for Review

> All decisions made during the brainstorming session on 2026-03-21.
> To be challenged by external models before committing.

---

## BUSINESS CONTEXT

- Bachata-only dance school, 2 UK cities (Reading Wed, Leicester Tue)
- ~4 years running, 5.0 Google reviews
- 40-50 students/night in Reading, 20-30 in Leicester
- Currently no website — traffic goes to a SumUp store page
- Google Business Profile data (Reading, Oct 2025 - Mar 2026):
  - 3,141 profile views, 559 interactions, ~93/month
  - 75% mobile (62% Google Search mobile + 13% Google Maps mobile)
  - 69% of search terms are for "salsa" not "bachata" (searchers don't know the difference)
- Primary conversion: WhatsApp message → free first class → upsell 4-week newcomer pass (£20) at the door
- Media available: vertical IG Reels (phone-shot), 1 founder photo, teacher team photos. No professional landscape video.
- Revenue: ~£30k net/year, growing

---

## DECISIONS MADE

### A. AUDIENCE & CONVERSION STRATEGY

**A1. Primary audience: Person A (never danced before)**
- Design the full scroll journey for someone who's never danced anything
- Person B (danced other styles) and Person C (experienced Bachata dancer) use the nav to jump to specific sections
- Rationale: Person A needs the most hand-holding; B/C self-serve via navigation

**A2. Single CTA everywhere: WhatsApp message for free class**
- Every CTA button on the site goes to WhatsApp with pre-filled "Hi! I'd like to try a free class"
- No online checkout for classes on the website
- Pricing is shown transparently but for information only
- Rationale: WhatsApp is already the conversion channel, no need to add complexity

**A3. Free first class remains the primary hook (not pre-paid newcomer pass)**
- The 4-week newcomer pass (£20) is shown on the site as "what most beginners do after their free class"
- But the CTA is always "claim your free class" not "buy the newcomer pass"
- Upsell to the pass happens in person at the door after the first class
- Rationale: zero barrier to entry converts better than £20 upfront for someone who's never danced

**A4. "Message us" CTA framing (not "just turn up" or "book now")**
- Getting Started section: 1) Send us a message, 2) Turn up, 3) Dance
- Framed as casual ("just say hi") not formal booking
- Rationale: Person A is anxious — knowing someone expects them at the door is more reassuring than "just show up"

**A5. Transparent pricing displayed on site**
- Drop-in prices, membership passes, private coaching rates all visible
- No buy buttons — just information
- Student & NHS discount mentioned as "ask us on WhatsApp"
- Rationale: Transparency removes "what's the catch?" anxiety and actually supports the free class conversion

### B. DESIGN & TECHNICAL DIRECTION

**B1. Mobile-first design**
- 75% of traffic is mobile (confirmed by Google data)
- Design for mobile first, adapt for desktop second
- Sticky WhatsApp button at bottom of screen on mobile
- Rationale: 3 out of 4 visitors are on their phone

**B2. Single-page homepage for v1**
- All content on one scrolling page, no subpages
- Nav links smooth-scroll to sections
- Rationale: ~93 interactions/month doesn't justify multi-page complexity; scrolling is natural on mobile; keeps conversion funnel tight

**B3. Two design directions**
- Design A (primary): Warm earthy palette — cream/terracotta/brown, DM Serif Display + Poppins, grain textures, inspired by prototypes #66/#68
- Design B (secondary): Dark bold — either #69 (burgundy/gold/grain, Bebas Neue) or #10 (pure monochrome B&W with single red accent)
- Same content/sections, different visual treatment
- Rationale: Design A is warmer/more approachable for Person A; Design B is the founder's personal aesthetic preference and could be A/B tested

**B4. Vertical video in hero section**
- Use a newcomer-focused IG Reel in the hero
- Mobile: plays naturally (vertical = native format)
- Desktop: video sits in a phone mockup frame alongside the headline
- Fallback (no video): info cards on the right (city finder, "what tonight looks like")
- Rationale: vertical video is the format they have; phone mockup makes it intentional on desktop; video shows real beginners having fun, which text can't do

**B5. Organic wavy section dividers (from prototype #7)**
- Curved SVG transitions between light and dark sections
- Adds visual rhythm and flow
- Rationale: more interesting than flat colour changes; metaphor for dance/movement

**B6. Fast loading is non-negotiable**
- Lazy-load video below the fold
- No embedded Google Maps (use "Get directions →" link instead)
- Minimal JavaScript
- Consider static site (not heavy framework)
- Rationale: 75% mobile, likely cellular connections

### C. CONTENT & INFORMATION ARCHITECTURE

**C1. Section order (11 sections + sticky CTA):**
1. Hero — "Learn Bachata in Reading & Leicester" + free class CTA + video
2. What is Bachata? — brief emotional section (adapted from #29's "Gift of Bachata")
3. Worry-busters — "You're exactly who we built this for" 3x2 grid (#66 version with tick confirmations)
4. Getting started — 3 steps: Message, Turn up, Dance (#14's "ridiculously easy")
5. Schedule + Locations — combined into one section (merged from #66's two sections)
6. Class levels — "Which level sounds like you?" progression cards (#68)
7. Pricing — transparent, drop-in + passes + private coaching (#66 table or #27/#48 pop-out)
8. Instructors — founders with photo + team mention (#66 layout)
9. Social proof — Google review quotes + stats + Instagram grid
10. FAQ — "Every question first-timers ask" accordion (#68)
11. Final CTA — "Your first class is free. No excuses left." (#53 copy)
+ Sticky WhatsApp button on mobile
+ Floating WhatsApp button (bottom-right)
+ Basic footer with social links, contact, privacy policy

**C2. "What is Bachata?" section placed at position 2**
- 69% of organic traffic searches for "salsa" — they don't know what Bachata is
- This section bridges the gap before the rest of the page
- Adapted from #29's "Gift of Bachata" (True Connection, Body Confidence, Social Circle, Joyful Exercise)
- Rationale: most visitors need this answered before they can engage with the rest

**C3. Combined locations + timetable**
- #66 had separate "Find a Class Near You" (map cards) and "Find your night" (schedule cards)
- Merging into one section since they answer the same question
- Need to accurately show Reading's parallel structure (Level 1&3 at 8pm, Level 2&4 at 9pm) vs Leicester's sequential structure (3 classes, one at a time)
- Rationale: reduces scroll length on mobile; no need for two sections about when/where

**C4. Founders only on homepage**
- Dhiwa & Gloria featured with real founder photo
- One line: "Supported by a team of 8+ trained instructors across both cities"
- Full team/instructors page deferred to v2
- Rationale: personal connection for Person A without building individual bios for every teacher

**C5. "What is Bachata?" described in plain English**
- No jargon: Dominican, Moderna, Sensual, Bachazouk are all internal terms
- Website says: footwork & rhythm, turn patterns, body movement, styling
- Subtle mention of styles in instructor section or FAQ for Person B/C
- Rationale: 69% of visitors don't even know what Bachata is, let alone substyles

**C6. Private coaching as visible section with headline pricing**
- "From £40 / 60-min session, packs of 4 or 8 available"
- Full pricing matrix stays for WhatsApp conversation
- "Enquire via WhatsApp" CTA
- Rationale: shows it exists, transparent on cost, drives WhatsApp enquiry

**C7. SEO strategy for salsa searchers**
- Don't mention salsa (don't teach it)
- Use broader terms: "Latin dance classes", "partner dance"
- The "What is Bachata?" section captures the intent
- Rationale: captures the 69% salsa traffic without being deceptive

**C8. Sunday online workshops excluded from homepage**
- These are a retention/upsell tool for existing students
- Would dilute the conversion funnel for Person A
- Rationale: homepage converts newcomers; workshops retain members

**C9. Social party prominence**
- Mentioned in hero trust bar: "Free social party after every class"
- Featured as Step 4 in "What a typical class looks like"
- Shows in timetable as final item each night
- Rationale: transforms "a class" into "a night out" — stronger draw

---

### D. MISSING FROM INITIAL LIST (added after review)

**D1. Lead & follow — both roles taught regardless of gender**
- A single line in worry-busters or FAQ: "We teach both lead and follow — you choose which role suits you"
- Rationale: progressive differentiator in the Bachata world, welcoming to LGBTQ+ dancers

**D2. "Bring a friend or come alone" line**
- Normalises both options somewhere on the page
- Rationale: implied by "no partner needed" but stating it directly removes another doubt

**D3. #14's curriculum grid — absorbed, not separate**
- "What you'll pick up from day one" (Rhythm, Partner Work, Footwork, Body Movement, Styling, Social Dancing) is NOT a separate section
- Instead, these details are woven into the class level card descriptions
- Rationale: a separate curriculum section would repeat what the class cards already say

**D4. Privacy policy page**
- Basic privacy policy linked from footer
- Minimal for v1 (no forms, no data collection — just WhatsApp links)
- Rationale: legal requirement for a Ltd company website in the UK

**D5. Cookie consent & analytics**
- NOT DECIDED: whether to add Google Analytics and the required cookie consent banner
- Trade-off: tracking vs page weight and UX friction (cookie banners are annoying)
- Needs decision

**D6. Tech stack**
- NOT DECIDED: how to build the site (static HTML, Next.js, Astro, etc.)
- Constraint: must be fast-loading on mobile, easy to maintain
- Needs decision

**D7. Design B direction — #69 vs #10**
- NOT DECIDED: the dark/bold design uses either #69 (burgundy/gold/grain, Bebas Neue — warm dark) or #10 (pure monochrome B&W with single red — cool dark)
- #69 works without professional video; #10 needs it
- Needs decision (but lower priority — Design A is the primary build)

**D8. #68's "Start your Bachata journey" newcomer CTA card**
- The coral-bordered card with "First class free, 4-Week Newcomer Pass £20, Cash or card on the door"
- Decision: absorbed into the pricing section rather than a standalone section
- Rationale: keeps section count lean; pricing section already covers this

**D9. Reading parking kiosk registration**
- "Free parking on premises — register at the kiosk to avoid fines"
- Must be in the locations section, not just "free parking"
- Rationale: someone getting a parking ticket on their first visit = terrible experience

**D10. Floating WhatsApp button**
- Green circle, bottom-right, always visible on all screen sizes
- Separate from the sticky CTA bar (which is mobile-only, bottom of screen)
- Rationale: low-friction always-available contact for anyone on the page

---

## KEY ASSUMPTIONS UNDERLYING THESE DECISIONS

1. Person A (never danced) is the highest-value conversion target for the website
2. WhatsApp is a lower-friction CTA than online booking for nervous beginners
3. Mobile-first is correct given the 75% mobile split
4. Single-page converts better than multi-page at this traffic volume
5. Warm/earthy palette converts better than dark/bold for beginner-focused dance schools
6. Transparent pricing supports (not undermines) the free class conversion
7. 69% salsa searchers need a "What is Bachata?" bridge section
8. Vertical video in hero is effective for mobile-first audiences
9. Worry-buster sections reduce conversion anxiety
10. "Message us first" converts better than "just turn up" for anxious beginners

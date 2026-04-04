# Phase 3 — Remaining Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build all 8 remaining Phase 3 pages plus schema markup, completing the full site minus /learn articles (deferred).

**Architecture:** Each page follows the established Astro + Tailwind v4 pattern from `milton-keynes.astro` and `pricing.astro`. Data-driven where possible. Schema markup (JSON-LD) woven into each relevant page. Checkout modal extracted to a shared component before building private coaching.

**Tech Stack:** Astro 6, Tailwind v4 (`@tailwindcss/vite`), TypeScript. No new dependencies.

**Execution approach:** Wave 1 done directly. Waves 2 and 3 run agents in parallel within each wave. Wave 4 is sequential.

---

## Reference files (agents should read these, not reproduce them inline)

- Patterns: `src/pages/milton-keynes.astro`, `src/pages/pricing.astro`
- Layout: `src/layouts/BaseLayout.astro`
- Styles/tokens: `src/styles/global.css` (CSS `@theme` block + button classes)
- Data: `src/data/locations.ts`, `src/data/pricing.ts`, `src/data/faqs.ts`, `src/data/reviews.ts`
- Navigation: `src/data/navigation.ts`
- Design doc: `docs/plans/2026-03-21-website-design.md` (sections 6.x, 7.3)
- Business data: `../Latin Addiction/KNOWLEDGE-BASE.md`

---

## Wave 1 — Prereqs (do directly, no agents)

### Task 1: Update reviews.ts

Replace `src/data/reviews.ts` with all 14 Google reviews. Full names, full text. Keep the `Review` interface, add `featured?: boolean` to the 4 homepage ones.

Reviews to add (in addition to existing 4):
- **Kat Sokolova** — "Great dancing school with a very welcoming, friendly, and supportive community. The teachers are experienced dancers who provide their students with interesting routines and useful techniques and explain every step which makes dancing as a very joyful experience boosting confidence of their students."
- **Iresh Wijesooriya** — "I've tried a few dance schools, but this one stands out! The teachers are incredibly patient and skilled, and I've improved so much in such a short time. The community is friendly, and the lessons are structured to suit everyone, from beginners to advanced dancers. If you're in Reading and want to dance Bachata, this is the place!"
- **Siva Rasa** — "Joined the Bachata lesson few months ago. The teachers are really good and teach things properly. That helped me to learn the basic Bachata moves better to apply in social. The set-up of the session with the social at the end of each lesson is good combination to put the learning into practice straightaway. Also, the monthly social is a great way to meet more people. Overall, I am very happy with Latin Addiction UK and would recommend for others to join. :)" (update existing Siva entry with full name + expanded text)
- **Vyara Yordanova** — "Latin Addiction is an amazing dance school! Their teaching style, approachability and going through all the details to explain each move is brilliant!! They really care about their students and their dance journey and progress! The teachers are very knowledgeable, skilled and passionate, and provide well-structured quality bachata classes, coupled up with great vibes and personal approach, ensuring you have a great time! I'd highly recommend Latin Addiction if you'd like to learn bachata and progress in your bachata dance journey!"
- **Ashwin Kumar** — "A hidden gem for Bachata lovers! I've been attending for a few months now, and the improvements in my dancing have been incredible. The attention to detail by the teachers is something i've never experienced in other places. Highly recommend for dancers of all levels!"
- **Moha Taher** — "I had the pleasure of attending Latin Addiction Bachata Dance classes and their SBK monthly parties in Reading, and I can't recommend them highly enough! The teachers, including Dhiwa and Gloria, are exceptional. Their passion for dance and dedication to teaching truly shine through in every class. They create a welcoming and supportive environment where dancers of all levels can thrive. The dance community at Latin Addiction is fantastic. Making friendships that extend beyond the dance floor. The monthly SBK parties are a highlight, bringing together a vibrant group of dancers to celebrate and enjoy the music. If you're looking to improve your bachata skills or simply want to immerse yourself in a lively dance community, Latin Addiction is the place to be!"
- **Amy Robbins** — (update existing Amy entry with full surname + expanded text) "Love going to Latin Addiction classes and parties! Dhiwa, Gloria and the other teachers are so friendly and talented, that it really feels like you're finding a new dance family. Would 1000% recommend, especially for beginners - everything is explained really clearly and you can make progress fast!"
- **Keerthi R** — "Super fun Bachata school! Friendly and experienced teachers. Dhiwa, Gloria are just brilliant and even great teachers, they put their heart out to get ppl to next level, Great socials too. Highly recommend to anyone in Reading!"
- **G V James** — (update existing entry with expanded text) "As a complete beginner, I wasn't sure what to expect, but this dance school is amazing! The instructors were so encouraging, and the class atmosphere was really friendly. I loved how they broke everything down step by step. Free parking made it stress-free, and I'm already excited for the next class!"
- **Rahul Chansouriya** — "The best place for Bachata in Reading. Great lessons and fun socials every week!"
- **Nikola Nagy** — "Absolutely amazing atmosphere and great bachata teachers. I can't recommend enough"
- **Karina Karisha** — "Love it so much! The Best dance school the best teachers) love atmosphere!"
- **Vaibhav Rana** — "Great bachata dance school in Reading! Fantastic teachers and amazing parties!"

Also update `Jonathan Marodona` with full surname (existing entry has just "Jonathan").
Mark featured: G V James, Amy Robbins, Jonathan Marodona, Moha Taher (the strongest 4 for homepage).

### Task 2: Extract checkout modal to component

- Create `src/components/CheckoutModal.astro`
  - Props: `waUrl: string`
  - Move the `<dialog id="checkout-modal">`, `<style>`, and `<script>` from `pricing.astro` into this component
  - The `<a href={waUrl}>` in the success state uses the prop
  - WORKER_URL and SUMUP_PUBLIC_KEY stay hardcoded in the script (they're constants, not page-specific)
- Update `src/pages/pricing.astro`: import `CheckoutModal`, pass `waUrl`, remove the inlined modal/style/script

### Task 3: Write /privacy

- Create `src/pages/privacy.astro`
- Uses BaseLayout, title "Privacy Policy"
- Short, plain-English UK privacy policy covering:
  - Contact form (Web3Forms — collects name/email/message, delivered to info@latinaddiction.co.uk)
  - Payment processing (SumUp Card Widget — LA does not store card data)
  - WhatsApp links (directs to Meta's service)
  - No cookies currently set
  - Data controller: Latin Addiction UK Ltd
  - Contact for data requests: info@latinaddiction.co.uk
- Simple white-bg page, no hero needed, max-w-[800px] centered prose layout

---

## Wave 2 — Standard pages (Sonnet agents, run in parallel)

### Task 4: /faq + expand faqs.ts (Sonnet agent)

**Files:**
- Modify: `src/data/faqs.ts`
- Create: `src/pages/faq.astro`

**faqs.ts:** Add a `pageFaqs` export with the full expanded FAQ list. Keep `homepageFaqs` unchanged (homepage uses it). Full FAQ should include:
- What should I wear?
- Will it be awkward?
- What's the difference between Bachata and Salsa?
- Do I need to book in advance?
- Do I need a partner?
- What level am I?
- How quickly will I progress?
- Is Bachata hard to learn?
- What happens after the class?
- Can I come to multiple locations?
- Do you offer private coaching?
- Is there a student/NHS discount?
- What if I miss a week on my membership pass?

Write each answer as a direct, factual statement (good for AI search / featured snippets). Pull from design doc section 6.8.

**faq.astro:**
- Short dark hero ("Your questions, answered")
- FAQPage JSON-LD schema in `<head>` (use `<Fragment slot="head">` or add to BaseLayout slot if supported — check BaseLayout first; if no head slot, add script inline before `</body>`)
- FAQ accordion (reuse the pattern from `src/pages/index.astro` — grep for `faq` in index.astro to find the component/pattern)
- Final CTA → WhatsApp

**FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

### Task 5: /reviews (Sonnet agent)

**Files:**
- Create: `src/pages/reviews.astro`

Uses all 14 reviews from `src/data/reviews.ts`. Layout:
- Short dark hero ("What our students say")
- Aggregate rating badge: "14 reviews · 5.0 ★ on Google"
- Grid of review cards (all 14) — name, initial avatar, star rating, quote
- AggregateRating JSON-LD:
```json
{
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "14",
  "bestRating": "5"
}
```
- CTA: "Leave us a review →" linking to Google Maps review URL (use: `https://g.page/r/PLACEHOLDER/review` — leave as a `<!-- TODO: add Google review URL -->` comment; D to fill in)
- Final dark CTA: "Ready to join them? First class is free."

### Task 6: /classes (Sonnet agent)

**Files:**
- Create: `src/pages/classes.astro`

Content from design doc 6.10:
- Progression path: Beginner → Improver → Intermediate → Advanced
- Each level: name, plain-English description, what you'll learn, how to know when you're ready to progress, available locations
- Link to each location page for schedules
- Course JSON-LD for each level:
```json
{
  "@type": "Course",
  "name": "Bachata Beginners",
  "description": "...",
  "provider": { "@type": "Organization", "name": "Latin Addiction UK" },
  "offers": { "@type": "Offer", "price": "10", "priceCurrency": "GBP" }
}
```
- Final CTA: "Not sure where you fit? Message us on WhatsApp."

### Task 7: /services/corporate + /services/hire-us (Sonnet agent, batch both)

**Files:**
- Create: `src/pages/services/corporate.astro`
- Create: `src/pages/services/hire-us.astro`

Note: Astro pages in subdirectories work automatically. `src/pages/services/corporate.astro` → `/services/corporate`.

**corporate.astro** (from design doc 6.5):
- Audience: HR managers, event planners, team leads — professional tone (different from consumer pages)
- What's offered: team-building dance workshops, wellbeing sessions
- Format options: 1-hour, 90-min, half-day
- Benefits: bonding, stress relief, something different, everyone leaves smiling
- Do NOT mention "only 1 corporate gig to date" — position as an established offering
- CTA: "Get in touch" → WhatsApp with prefilled text: "Hi! I'm interested in a corporate dance workshop for my team"

**hire-us.astro** (from design doc 6.6):
- Audience: event organizers, festival promoters
- What's offered: guest teaching, DJ sets, workshops, festival appearances
- Experience: 4+ years, regular UK festival appearances
- Links to Instagram/TikTok for portfolio
- CTA: WhatsApp with prefilled text: "Hi! I'd like to enquire about booking Latin Addiction for an event"

---

## Wave 3 — Complex pages (Opus agents, can run in parallel)

### Task 8: /services/private-coaching (Opus agent)

**Files:**
- Create: `src/pages/services/private-coaching.astro`
- Add coaching products to: `src/data/pricing.ts`

**First:** Add `coachingProducts` to `src/data/pricing.ts`:

Singles:
- Off-peak (Mon-Fri 9am-5pm): 1 person £40, 2 people £60, 3 people £80
- Standard/peak (evenings & weekends): 1 person £50, 2 people £75, 3 people £100
- Pre-class slots (MK Mon 7-8pm, Leicester Tue 6-7pm, Reading Wed 6-7:30pm): £40 (1 person only)

Packs (all pricings are for 1 person; note packs are also available for 2/3):
- 4-session: £165, £250, £330
- 8-session: £330, £495, £660

Recommended duration: 90 minutes.

**private-coaching.astro:**
- Import `CheckoutModal` from `src/components/CheckoutModal.astro` (pass a coaching-specific waUrl)
- Use `btn-checkout` buttons with `data-product-id`, `data-amount`, `data-description`
- Sections: Hero → What's covered → Who it's for → Pricing (singles + packs table) → Pre-class slots → How to book → FAQ (2-3 short Qs) → CTA
- Booking flow note: "Purchase below to secure your slot, then confirm the date and time via WhatsApp"
- CTA for questions: "Not sure which option is right for you? Ask us on WhatsApp"
- Pricing from KB section 2.5 (pre-class, off-peak, standard/peak, 4/8-session packs)
- Private coaching descriptions from `../Latin Addiction/classes/private-coaching.md` — read this file

### Task 9: /about (Opus agent)

**Files:**
- Create: `src/pages/about.astro`

**Founder bios to use:**

*Dhiwa:* Founder of Latin Addiction, established in Reading in 2021. Passionate about Bachata. Has built a vibrant community of dancers across Reading, Leicester, and now Milton Keynes. Organises SBK (Salsa, Bachata, Kizomba) parties. Has developed a detailed teaching method with Gloria emphasising technique, dance mechanics, and dancer safety. Teaches and DJs at events and festivals across the UK.

*Gloria:* 10-year ballet background before discovering Salsa and Bachata in 2019. Her experience as a follower shaped her teaching approach — she prioritises follower technique, body mechanics, and dancer safety. Teaches and DJs at UK events and festivals alongside Dhiwa. Runs Bachata Sensual Technique workshops across the UK.

**Sections:**
- Hero (short dark bg): "The story behind Latin Addiction"
- Founder section: Dhiwa + Gloria side by side (use photos from `public/images/instructors/` — there's a founders photo, check what's available)
- Teaching philosophy: technique-first, safety, genuine fun, community
- Values: inclusive, passionate, community-led
- Team mention: "Supported by 10+ instructors across Reading, Leicester, and Milton Keynes"
- Organization JSON-LD:
```json
{
  "@type": "Organization",
  "name": "Latin Addiction UK",
  "url": "https://latinaddiction.co.uk",
  "logo": "https://latinaddiction.co.uk/images/logos/logo-mark-golden-tight.png",
  "sameAs": [
    "https://www.instagram.com/latinaddictionuk",
    "https://www.facebook.com/LatinAddictionUK",
    "https://www.tiktok.com/@latin.addiction.uk",
    "https://www.youtube.com/@LatinAddictionUK"
  ]
}
```
- Final CTA: "Come and meet us" → WhatsApp

---

## Wave 4 — Schema on location pages + BaseLayout (Sonnet agent)

### Task 10: DanceStudio JSON-LD on location pages

**Files:**
- Modify: `src/pages/reading.astro`, `src/pages/leicester.astro`, `src/pages/milton-keynes.astro`

Add `LocalBusiness` / `DanceStudio` JSON-LD inline `<script type="application/ld+json">` in each location page (just before `</BaseLayout>`):

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "name": "Latin Addiction UK — {city}",
  "description": "Bachata classes in {city}...",
  "url": "https://latinaddiction.co.uk/{slug}",
  "telephone": "+447424063798",
  "email": "info@latinaddiction.co.uk",
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "...", "postalCode": "...", "addressCountry": "GB" },
  "openingHours": "{day} 20:00-23:00",
  "priceRange": "£10-£20",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "14" }
}
```

Use location data from `src/data/locations.ts` — don't hardcode, derive from the location object.

---

## Wave 5 — Quality gate + deploy

### Task 11: Pre-deploy + push

1. `npm run build` — must pass clean
2. Run `/pre-deploy` skill
3. Fix any issues found
4. Commit all pages as one commit: `feat: Phase 3 — all pages (about, faq, reviews, classes, services, privacy, schema)`
5. Push → Cloudflare auto-deploys

---

## Verification

After deploy, spot-check:
- `/about` — founder photos load, bios correct
- `/faq` — accordion works, FAQPage schema visible in view-source
- `/reviews` — all 14 reviews show
- `/classes` — progression path clear, Course schema present
- `/services/private-coaching` — checkout modal opens and widget mounts
- `/services/corporate` + `/services/hire-us` — WhatsApp CTAs work
- `/privacy` — accessible from footer link
- Location pages — DanceStudio schema in source

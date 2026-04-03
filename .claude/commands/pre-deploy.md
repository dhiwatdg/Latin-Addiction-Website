---
description: Pre-deploy checklist before pushing to main. Push = auto-deploy to Cloudflare, so this is the only gate.
allowed-tools: Read, Glob, Grep, Bash
---

# Pre-Deploy Checklist

Run this before pushing to main. There is no staging environment — push to main auto-deploys to latinaddiction.co.uk via Cloudflare Pages.

## Process

1. **Build check**
   - Run `npm run build` from the Astro project root
   - If it fails, stop and fix. Do not proceed with a broken build.

2. **Content accuracy** (cross-reference against `../Latin Addiction/KNOWLEDGE-BASE.md`)

   Check every instance of:
   - **Prices:** Free first class, £20 newcomer pass, £10/£15 drop-in, £40 private coaching
   - **Schedule:** Reading Wed 7:45pm, Leicester Tue 7:00pm, Milton Keynes Mon 7:45pm
   - **Venues:** Wesley Methodist Church (Reading RG1 4BW), Braunstone Frith (Leicester LE3 6NW), Midsummer Tap (Milton Keynes MK9 3PU)
   - **Parking:** Reading = free on premises (register at kiosk), Leicester = free street, MK = free from 6pm
   - **Contact:** WhatsApp/Phone 07424 063798, Email info@latinaddiction.co.uk
   - **Legal:** © 2026 Latin Addiction UK Ltd

3. **WhatsApp links**
   - Grep for all `wa.me` links
   - Every link must use `https://wa.me/447424063798` (not `07424...`)
   - City-specific CTAs must have correct prefilled text per location
   - No broken or malformed WhatsApp URLs

4. **Images**
   - All `<img>` tags have meaningful `alt` attributes (not empty, not "image")
   - No images over 500KB without explicit justification (compress first)
   - Logo paths resolve correctly (`/Logos/logo-mark-bold.png`, etc.)

5. **Links**
   - Grep for all `href="#"` placeholder links — flag any that should have real destinations
   - All internal links point to pages that exist in the build output
   - External links (Instagram, Facebook, TikTok, YouTube) use correct URLs

6. **Mobile / Accessibility**
   - Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   - All interactive elements have min 44x44px touch targets
   - `prefers-reduced-motion` media query present
   - Focus-visible styles present
   - No horizontal scroll on mobile (check for fixed-width elements)

7. **SEO basics**
   - Every page has a unique `<title>` tag
   - Every page has a `<meta name="description">` tag
   - `<html lang="en">` is set
   - Heading hierarchy is correct (one h1 per page, h2s follow, etc.)

8. **Footer consistency**
   - All three cities listed with correct venues and days
   - Social links present and correct
   - Student & NHS discount line present
   - Privacy Policy link present (even if placeholder)

## Report format

```
PRE-DEPLOY CHECKLIST
====================
✅ Build succeeds
✅ Prices correct (X instances checked)
❌ WhatsApp link malformed in footer — uses 07424 instead of +447424
⚠️  3 placeholder href="#" links remain (nav: Private Coaching, Corporate, Hire Us)
...

VERDICT: [READY / NOT READY — N issues to fix]
```

## Rules

- Do NOT fix issues automatically. Report them and let the user decide.
- Be thorough. This is the last gate before the public sees it.
- If everything passes, say so briefly. Don't pad the report.
- Placeholder links (href="#") for future pages are acceptable if noted. Flag them but don't block on them.

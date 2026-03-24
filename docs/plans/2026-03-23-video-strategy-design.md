# Video Strategy — Design Doc

> **Date:** 2026-03-23
> **Status:** Draft — awaiting approval
> **Relationship to main design doc:** Expands and refines section 5.4 of `2026-03-21-website-design.md`. Where this document differs from the original section 5.4, this document takes precedence once approved.

---

## 1. CONTEXT

### 1.1 What We Have

| Asset | Details |
|-------|---------|
| Class footage (.mov) | 5 files, 19-36MB each. Two are beginner/newcomer-focused. |
| IG Reels (vertical, 9:16) | Extensive library — newcomer clips, regular class clips, social party clips |
| YouTube content | Available for longer-form embeds |
| Professional photography | Not available — use video stills or designed graphics |

### 1.2 What the Original Design Doc Said

Section 5.4 planned:
- **v1 mobile hero**: Vertical Reel, plays naturally
- **v1 desktop hero**: Text-only, bold typography
- **v1.5 desktop hero**: Horizontal video background or loop
- **Social proof section**: Vertical Reels in grid

### 1.3 Why This Addendum

The original plan left implementation details open. This document answers: where to host video, how to encode it, what to do when autoplay fails, and whether the phased approach is right. Informed by adversarial critique from Gemini, GPT, and Perplexity, plus deep technical research.

---

## 2. KEY RESEARCH FINDINGS

### 2.1 Cloudflare Pages Should Not Host Video

Cloudflare's CDN-wide policy (not Pages-specific, but Pages traffic goes through the CDN) restricts serving video without paid video services:

> *"Cloudflare reserves the right to disable or limit your access... if you use the CDN without such Paid Services to serve video or a disproportionate percentage of pictures, audio files, or other large files."*

No size threshold is stated. Enforcement appears pattern-based — a single 500KB background loop on a low-traffic site is unlikely to trigger it, but it is a policy risk. More practically, Cloudflare's CDN caching interferes with HTTP 206 Partial Content responses that Safari requires for video playback — causing videos to fail silently on iOS.

**Decision: Host all video assets on Cloudflare R2, not Pages.**

### 2.2 Cloudflare R2 — The Right Fit

| Feature | Free Tier |
|---------|-----------|
| Storage | 10 GB/month |
| Reads | 10 million/month |
| Egress (bandwidth) | Free — always |
| Estimated cost for LA | $0 |

R2 avoids the TOS restriction, avoids the Safari 206 issue (serves files directly, not through CDN cache), and has zero egress fees. Set up a custom subdomain (e.g., `assets.latinaddiction.co.uk`) pointing to an R2 bucket.

For comparison: Cloudflare Stream ($5/month for 1,000 minutes) is overkill for a handful of 5-8 second loops. R2 is the right tool.

### 2.3 Autoplay Is Not Guaranteed on All Devices

| Scenario | Autoplay Works? |
|----------|----------------|
| iOS Safari, normal mode, `muted playsinline autoplay` | Yes |
| iOS Low Power Mode | **No** — blocked with no workaround and no detection API |
| iOS user disabled autoplay in Settings > Accessibility | **No** |
| Android Chrome, muted | Yes |
| Desktop browsers, muted | Yes |
| `prefers-reduced-motion: reduce` | Should be respected (disable autoplay) |

Apple deliberately prevents detection of Low Power Mode to avoid fingerprinting. There is no programmatic way to know if autoplay will work before attempting it.

**Implication: Every video placement must look complete and intentional with just the poster image showing. The video is an enhancement, never a dependency.**

### 2.4 `navigator.connection` API — Not Viable as Core Strategy

| Browser | Support |
|---------|---------|
| Chrome 61+, Edge 79+, Opera 48+, Samsung Internet 4+ | Yes |
| Safari (all), iOS Safari | **No** |
| Firefox | **No** |

This excludes ~30-40% of users. The `Save-Data` header is only set by ~4% of sessions globally. These signals can inform progressive enhancement but cannot gate core functionality.

### 2.5 Performance: Poster Image Is the LCP Strategy

Real benchmarks (DebugBear):
- Video hero without poster: **1.55s LCP**
- Video hero with poster + `fetchpriority="high"`: **1.2s LCP**

The poster image becomes the LCP element. The video loads behind it. This means performance is "poster image + video download" not "video instead of image" — the extra 300-500KB is real but manageable if the poster is optimised.

Chrome does NOT support `<link rel="preload" as="video">`. Only poster image preloading improves LCP.

### 2.6 VP9 Has No Safari Support

| Codec | Chrome | Firefox | Safari | Edge |
|-------|--------|---------|--------|------|
| H.264 (.mp4) | Yes | Yes | Yes | Yes |
| VP9 (.webm) | Yes | Yes | **No** | Yes |
| AV1 | Yes | Yes | Partial (M3+/iPhone 15 Pro+ only) | Yes (Chromium) |

H.264 is the universal format. VP9 is a nice-to-have for Chrome/Firefox (20-30% smaller). AV1 not viable as primary format due to limited Safari hardware support and slow encode times.

### 2.7 No Evidence Hero Video Converts Better for Local Dance Schools

- Five UK dance/fitness sites checked (Danceworks London, Salsateca, Mundo Latino UK, Salsa Bachata UK, F45) — none use hero video. All lead with copy, schedule, CTAs, still imagery.
- Cross-industry averages suggest video sites convert at 4.8% vs 2.9% without — but no dance-school-specific data exists.
- Beginner intimidation risk: class footage showing complex patterns can trigger "I can't do that" — the #1 barrier for newcomers.

### 2.8 Instagram Embeds — No Good Facade Exists

Unlike YouTube (which has `lite-youtube-embed`), there is no equivalent lightweight facade for Instagram Reels. Standard IG embeds load Meta tracking scripts and are heavy, brittle, and problematic for GDPR/cookie consent. The options are:

1. Download your own IG content and serve via native `<video>` from R2 (best performance, full control)
2. Use static thumbnails linking to your IG profile (lightest)
3. Embed directly (heavy, privacy issues, not recommended)

---

## 3. REVISED VIDEO STRATEGY

### 3.1 Phased Approach (Validated)

The original design doc's phased approach was correct. All four external critiques validated "still-first, video as enhancement." The revision below adds specifics.

| | v1 (launch) | v1.5 (post-launch, test-driven) |
|---|---|---|
| **Mobile hero** | Poster image + CSS Ken Burns motion. Optional "Watch a class" play button. | If testing shows video lifts conversion: add muted autoplay attempt with poster fallback. |
| **Desktop hero** | Text-only, bold typography (as originally planned) | Test desktop-only autoplay muted loop (720p, ~500KB, from R2) |
| **Social proof** | Vertical clips from IG content, served from R2. Poster + click-to-play. | Same + additional community/social party clips |
| **YouTube content** | `@astro-community/astro-embed-youtube` (3.26KB, lite-youtube under the hood) | Same |
| **IG content** | Downloaded and self-hosted on R2 as native `<video>`, or thumbnail linking to IG | Same |

### 3.2 Change from Original Section 5.4

| Original | Revised | Reason |
|----------|---------|--------|
| "Vertical Reel, plays naturally" on mobile hero | Poster + optional play button for v1; autoplay attempt for v1.5 if testing supports it | iOS Low Power Mode, no autoplay guarantee, beginner intimidation risk |
| Hosted on Cloudflare Pages (implied) | Hosted on Cloudflare R2 | Pages TOS prohibits video; Safari 206 issue |
| No encoding specs | H.264 CRF 23, faststart, 720p, 5-8 seconds, no audio | Needed for implementation |

### 3.3 Design-Specific Integration

**Design G (split hero — 03v1):**
- The split layout has a right panel (`hero-r`) with an existing video placeholder
- v1: Replace placeholder with poster image + play button overlay. Tap loads video from R2
- v1.5: Attempt desktop autoplay in right panel. Poster fallback on failure
- This design is the most natural fit for video — similar to CLI Studios and Street Dance Studios patterns

**Design F (cinematic dark — 02v3):**
- Full-width dark hero, bold typography, film-noir aesthetic
- v1: Typography and texture carry the hero (the design doc already noted "#69 works without professional video")
- v1.5: Test dimmed background video loop on desktop with 60-70% dark overlay. Must not reduce text readability
- Video earns its place in the social proof section below the hero

**Design B (warm earthy — 01v2):**
- Warm tones, dot pattern texture, centred layout
- v1: Poster still image with CSS Ken Burns zoom/pan. Preserves the warm palette
- v1.5: Background video would need warm-tinted overlay to avoid palette clash. Test carefully
- Vertical community clips work well in the social proof section

---

## 4. TECHNICAL SPECIFICATION

### 4.1 Video Hosting Architecture

```
Site (Cloudflare Pages)          Video Assets (Cloudflare R2)
latinaddiction.co.uk             assets.latinaddiction.co.uk
├── HTML, CSS, JS, images        ├── hero-desktop-720p.mp4
└── poster images (WebP)         ├── hero-desktop-720p.webm (optional)
                                 ├── social-clip-01.mp4
                                 ├── social-clip-02.mp4
                                 └── ...
```

Poster images ship with the site (they are the LCP element and must be fast). Video files are fetched from R2 on demand.

### 4.2 Encoding Pipeline

**H.264 (.mp4) — Universal, required:**
```bash
# Two-pass encode, CRF 23, 720p, no audio, faststart
ffmpeg -y -i input.mov -c:v libx264 -preset medium -crf 23 \
  -b:v 2000k -maxrate 3000k -bufsize 4000k \
  -vf scale=1280:720 -an -pass 1 -f null /dev/null && \
ffmpeg -y -i input.mov -c:v libx264 -preset medium -crf 23 \
  -b:v 2000k -maxrate 3000k -bufsize 4000k \
  -vf scale=1280:720 -an -pass 2 \
  -movflags +faststart output.mp4
```

**VP9 (.webm) — Optional, Chrome/Firefox bonus (20-30% smaller):**
```bash
ffmpeg -y -i input.mov -c:v libvpx-vp9 -pass 1 \
  -b:v 1500k -maxrate 2500k -bufsize 3000k \
  -threads 8 -speed 4 -tile-columns 2 -auto-alt-ref 1 \
  -lag-in-frames 25 -g 240 -vf scale=1280:720 \
  -an -f webm /dev/null && \
ffmpeg -y -i input.mov -c:v libvpx-vp9 -pass 2 \
  -b:v 1500k -maxrate 2500k -bufsize 3000k \
  -threads 8 -speed 1 -tile-columns 2 -auto-alt-ref 1 \
  -lag-in-frames 25 -g 240 -vf scale=1280:720 \
  -an output.webm
```

**Poster frame extraction:**
```bash
# Extract frame at 2 seconds, WebP format, quality 85
ffmpeg -i input.mov -ss 00:00:02 -frames:v 1 -c:v libwebp -quality 85 poster.webp
```

**Expected file sizes (5-8 second 720p loop, no audio):**

| Codec | Size |
|-------|------|
| H.264 CRF 23 | 300-700 KB (dance footage = higher end due to motion) |
| VP9 CRF 31 | 200-450 KB |

Notes:
- `-an` strips audio (not needed for muted background loops)
- `-movflags +faststart` moves the moov atom to file start — essential for progressive playback and Safari compatibility
- CRF 23 is the H.264 "visually lossless" sweet spot. Raise to 26-28 if files are too large
- Dance footage has high motion complexity — expect sizes toward the upper end

### 4.3 Astro Video Component

```astro
---
// VideoHero.astro
interface Props {
  src: string;           // R2 URL for mp4
  webmSrc?: string;      // R2 URL for webm (optional)
  poster: string;        // Local poster image path
  alt: string;           // Accessible description
  autoplay?: boolean;    // Whether to attempt autoplay (default: false)
}

const { src, webmSrc, poster, alt, autoplay = false } = Astro.props;
---

<div class="video-container" role="img" aria-label={alt}
  data-autoplay={autoplay ? "true" : undefined}>
  <video
    poster={poster}
    muted
    loop
    playsinline
    preload={autoplay ? "metadata" : "none"}
    width="1280"
    height="720"
    style="width:100%; height:100%; object-fit:cover;">
    {webmSrc && <source src={webmSrc} type="video/webm" />}
    <source src={src} type="video/mp4" />
  </video>
</div>

<script>
  // Astro hoists <script> tags — they always run regardless of template
  // conditionals. Use data-autoplay attribute to gate behaviour instead.
  document.querySelectorAll('.video-container[data-autoplay]').forEach(container => {
    const video = container.querySelector('video');
    if (!video) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Connection-aware hint (progressive enhancement, not a gate)
    if (navigator.connection) {
      const ect = (navigator.connection as any).effectiveType;
      if (ect === '2g' || ect === 'slow-2g' || (navigator.connection as any).saveData) return;
    }

    video.play().catch(() => {
      // Autoplay blocked (Low Power Mode, user setting, etc.)
      // Poster remains visible — design must work without video
    });
  });
</script>
```

**Lazy-loaded video for below-fold sections:**
```astro
---
// LazyVideo.astro
interface Props {
  src: string;
  poster: string;
  alt: string;
}

const { src, poster, alt } = Astro.props;
---

<div class="lazy-video-container" role="img" aria-label={alt}>
  <video
    data-lazy
    poster={poster}
    muted
    loop
    playsinline
    preload="none"
    width="720"
    height="1280"
    style="width:100%; height:100%; object-fit:cover;">
    <source data-src={src} type="video/mp4" />
  </video>
</div>

<script>
  document.querySelectorAll('video[data-lazy]').forEach(video => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const source = el.querySelector('source[data-src]');
          if (source) {
            source.setAttribute('src', source.getAttribute('data-src'));
            source.removeAttribute('data-src');
            (el as HTMLVideoElement).load();
          }
          observer.unobserve(el);
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(video);
  });
</script>
```

### 4.4 YouTube Embeds

Use `@astro-community/astro-embed-youtube` (3.26KB). Comparison:

| | Standard YouTube iframe | astro-embed-youtube |
|---|---|---|
| Weight | 1,149 KB (971KB JS, 61KB poster, 48KB CSS, 41KB HTML, 28KB fonts) | 31 KB |
| Render speed | Baseline | 224x faster |
| Multiple embeds | Resources NOT shared (2 = 2.3MB) | Resources shared |
| Privacy | Sets cookies immediately | Uses `youtube-nocookie.com` by default |

Loads poster + play button only. Full iframe loads on click.

### 4.5 Instagram Content

Do NOT embed Instagram Reels directly. No lightweight facade exists, and standard IG embeds load Meta tracking scripts, require cookie consent, and are heavy/brittle.

Instead:
1. Download your own IG Reel content (you own it)
2. Encode to H.264 using the pipeline above (vertical 720x1280 for social proof clips)
3. Host on R2
4. Serve via native `<video>` with poster + click-to-play

This gives full control, no third-party dependencies, no GDPR issues, and the best performance.

---

## 5. CONTENT CURATION

### 5.1 What to Use Where

| Placement | Content Type | Mood | Source |
|-----------|-------------|------|--------|
| Hero (poster/video) | Newcomer-focused | Welcoming, fun, not intimidating | Beginners.mov or Beginners (1).mov — pick the best 5-8 second segment |
| Social proof section | Community / social party | Energy, connection, real people | IG Reels — social party clips, group shots |
| Class preview (click-to-play) | Beginner class in action | "I could do that" | Beginners.mov — longer cut, ~15-30 seconds |
| Reviews page (future) | Student testimonials | Authentic, personal | When students agree to be filmed |

### 5.2 Content Selection Criteria

For hero poster/video, prioritise clips that show:
- Smiling faces (not concentrated/serious expressions)
- Mixed-level visible (not advanced patterns that intimidate)
- Bright or well-lit moments (class footage can be dim)
- Both lead and follow dancers visible
- The social/fun aspect, not the technical instruction

Avoid clips where:
- The room looks empty or too crowded
- Lighting is poor or uneven
- Only advanced patterns are visible
- It looks like "serious training" rather than "fun night out"

### 5.3 Aspect Ratios

| Placement | Aspect Ratio | Reasoning |
|-----------|-------------|-----------|
| Hero (desktop) | 16:9 landscape | Standard hero format, works on all desktop layouts |
| Hero (mobile) | 16:9 with `object-fit: cover` or poster still | Avoid serving different assets per viewport for v1 |
| Social proof clips | 9:16 vertical | Native to mobile, feels like Reels/TikTok, shows full body/footwork |

The `<source media="">` attribute supports serving different video files per viewport (Chrome 120+, Firefox 120+, Safari), but source selection happens once at page load — no live switching on rotation. Consider this for v1.5 if needed, not v1.

---

## 6. ACCESSIBILITY

- All `<video>` elements wrapped in a container with `role="img"` and `aria-label` describing the content
- `prefers-reduced-motion: reduce` disables autoplay — poster remains
- Alt text on all poster images
- Video is decorative (not informational) — all information exists in text nearby
- Explicit `width` and `height` attributes prevent CLS
- No video autoplays with sound — ever

---

## 7. PERFORMANCE BUDGET

Target from main design doc: <3 second load on 4G mobile.

| Asset | Budget |
|-------|--------|
| HTML + CSS + fonts | ~200KB |
| Hero poster image (WebP) | ~40-80KB |
| Other images (lazy-loaded) | ~200KB above fold |
| Hero video (if autoplay enabled, v1.5) | ~400-600KB (loads after poster, does not block LCP) |
| **Total above-fold** | **~450-900KB** |

The hero video does not compete with LCP when a poster is preloaded with `fetchpriority="high"`. It downloads in parallel and replaces the poster visually once ready.

Below-fold videos (social proof clips) load via Intersection Observer with `preload="none"` — zero impact on initial load.

---

## 8. IMPLEMENTATION PHASES

### Phase 1 — v1 Launch

- Set up R2 bucket with custom subdomain (`assets.latinaddiction.co.uk`)
- Encode 1-2 hero poster images from Beginners.mov (best frames, WebP)
- Build `VideoHero.astro` component (poster-only mode, no autoplay)
- Optional: "Watch a class" play button that loads video on tap
- Social proof section: poster + click-to-play vertical clips from IG content
- YouTube embeds via `@astro-community/astro-embed-youtube`
- Ship with poster-first hero, no autoplay

### Phase 2 — v1.5 Post-Launch

- Encode hero loop clips: H.264, 720p, 5-8 seconds, faststart
- Enable desktop-only autoplay with `video.play().catch()` fallback
- Measure: does desktop autoplay improve conversion vs poster-only?
- If yes, consider mobile autoplay attempt (with poster fallback always)
- Add more social proof clips as content is created
- Consider horizontal video content when it becomes available

### Phase 3 — Future

- Video testimonials (when students agree to be filmed)
- Design B #10 direction (when professional video is available)
- Potential A/B testing infrastructure for video vs still

---

## 9. DECISIONS LOG

| Decision | Chosen | Rejected | Reason |
|----------|--------|----------|--------|
| Video hosting | Cloudflare R2 (free, zero egress) | Cloudflare Pages (CDN video policy risk, Safari 206 issue), Cloudflare Stream ($5/mo, overkill) | R2 avoids both the policy risk and Safari issue at $0 |
| v1 hero | Poster image + CSS motion + optional play button | Autoplay muted loop on all devices | Autoplay not guaranteed (iOS Low Power Mode, user settings). Poster-first ensures 100% reliability |
| Video format | H.264 (.mp4) primary, VP9 (.webm) optional | AV1 | VP9 has no Safari support; AV1 has limited Safari hardware support + slow encode. H.264 is universal |
| IG content | Download + self-host on R2 | Direct IG embeds | No lightweight IG facade exists. Embeds are heavy, load Meta tracking, require cookie consent |
| YouTube embeds | `@astro-community/astro-embed-youtube` | Raw iframe | 31KB vs 1,149KB per embed. Uses youtube-nocookie.com for GDPR |
| Connection-aware loading | Progressive enhancement only | Core gating strategy | API not available on Safari or Firefox (~30-40% of users) |
| Autoplay failure handling | Poster fallback (design must work without video) | Play button overlay, retry logic | Simplest, most reliable. Every design already has a poster that works |

---

## 10. SOURCES

Research informing this document:

- **Gemini** (Google): Adversarial critique — raised iOS Low Power Mode, beginner intimidation psychology, "double payload" problem
- **GPT/Codex** (OpenAI): Adversarial critique — checked 5 UK dance/fitness sites (none use hero video), flagged asset governance complexity, WebKit autoplay fragility. Sources: web.dev LCP, MDN Network Information API, WebKit blog
- **Perplexity**: Evidence-based search — confirmed Cloudflare Pages unlimited bandwidth, Safari muted autoplay policy, GDPR implications of YouTube embeds. Flagged absence of dance-school-specific conversion data
- **Opus deep research agent**: Technical specifics — Cloudflare Pages TOS video prohibition, R2 pricing/free tier, Safari 206 issue, FFmpeg encoding commands, DebugBear LCP benchmarks (1.55s → 1.2s with poster), browser codec support matrix, `@astro-community/astro-embed-youtube` specs, Astro component patterns, `<source media="">` browser support, responsive video limitations

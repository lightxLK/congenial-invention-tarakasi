# Changelog

Notable changes to katakatarakasi.com, grouped by day. All entries are backfilled from git
history; entries from here on are added as work ships.

## 2026-09-17

- Perf: converted 264MB of uncompressed content-photo PNGs to WebP (sharp, q82) — 19.7MB total,
  a 93% reduction. Restored original PNGs to `misc/original-images/` (gitignored, not deleted).
- Perf: lazy-loaded the one remaining eager image (Odissi), prioritized the hero image as the
  page's LCP element (`fetchpriority="high"` + `<link rel="preload">`).
- Odissi section: swapped in a transparent-background dancer photo, set the container background
  to `#F3F0E9`, added a soft ground shadow under the (now cut-out) figure, and gave the ornament
  markers an independent, randomly-timed blink instead of a synchronized pulse.
- Sitewide: reworked inline source citations (`SourceNote`) from bordered chip boxes to plain
  superscript initials that link out to the source.
- Content: added 5 more Chandi Medha committees to the backdrop weight list (10 of ~36 total, no
  complete official roster exists online), reworked "Recurring subjects" into a bento grid
  gallery, fixed the Odissi wire-animation stall/jump bug in the Making section.

## 2026-09-16

- Delivered real photography for all major sections (hero, opening, making steps 1-11, wire
  motifs, objects catalogue, Odissi ornament set, Chandi Medha, Cuttack market lane, workshop,
  closing carousel) — 33/34 image slots filled.
- SEO: added `robots.txt`, `sitemap.xml`, canonical tag, OG/Twitter cards, a purpose-built OG
  image, `Article` + `FAQPage` JSON-LD, and wrote `PRODUCTION-GO-LIVE-GUIDE.md`.
- Security: stopped shipping public source maps to production (`GENERATE_SOURCEMAP=false`).
- Wired in the real logo and favicon, replacing placeholders.
- UX: turned the closing banner into a 3-image crossfade + Ken Burns carousel; added a shared
  optical loupe component reused across the wire-pattern overlay.

## 2026-09-15

- Initial site build: single-page React (CRA) exhibition site for Cuttack Rupa Tarakasi silver
  filigree, Tailwind + framer-motion.
- Set up GitHub Actions CI/CD — build on push to `main`, FTP-deploy straight to production.
- Copy pass: removed em/en dashes from site copy, settled on Instrument Sans body / Montserrat
  micro-text.

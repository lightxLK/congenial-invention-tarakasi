# Image Requirements — Tarakasi Site

Every image slot below is currently a labelled placeholder (`<Ph>` component / `data-testid="image-placeholder"`) in the live code — the site runs and reads correctly without any of these, but ships with no photography yet. This is the exact shot list to close that gap, derived from `cuttack_tarakasi_website_design.json` → `media_and_asset_manifest` and cross-checked against what each component actually renders.

## Non-negotiable rules (from the design spec — do not violate)

1. **Real Tarakasi/Cuttack subject matter only — AI generation now permitted (client approved) as a production method, not a shortcut.** No generic stock "Indian jewellery" stand-ins, AI or otherwise. Every image must depict this craft's actual visual vocabulary: real Cuttack filigree technique, real wire patterns, real workshop tools. If using AI: reference real Tarakasi photos/close-ups as image prompts or img2img input so the wirework, tool shapes, and silver tone are accurate — do not generate from a text prompt alone ("silver filigree jewellery") and hope it matches. A generated image that gets the wire technique wrong (wrong lattice logic, fused-looking joins that should be wire-on-wire, wrong gauge) reads as fake to anyone who knows the craft — reject and regenerate rather than ship it. Three earlier placeholder files (`hero.jpg`, `closing.jpg`, `silver-texture.jpg` — a carabiner/rigging photo, a moonstone pendant, and plain linen fabric, none of them Tarakasi) were found shipped in `frontend/public/images/` during this audit and have been removed; do not repeat that mistake — off-subject or wrong-craft images, AI or real, are still wrong.
2. **Macro-first, single directional light source**, true-to-material silver tone (not warmed/goldened in post). Shallow depth of field. Reserve flat, even lighting only for the object-catalogue shots (Objects, Odissi).
3. **No posed artisan portraits / no artisan faces, AI or real.** Hands-at-work, tools, and workshop interiors only. AI-generated hands are a known failure point (extra/fused fingers, wrong tool grip) — check closely, regenerate or retouch bad hands before delivery.
4. **Format:** deliver as AVIF or WebP with a JPEG fallback. Responsive crop variants per breakpoint (mobile / tablet / desktop) for every hero-weight image.
5. **File naming:** `<section-id>-<asset-slug>.<ext>`, matching the `asset_id` scheme below, so they can be dropped straight into `frontend/public/images/` and wired up by filename.

## Shot list

Each entry: **asset_id** — where it's used — what must be in frame — spec.

### 1. `hero-macro` — Hero (`components/Hero.jsx`)
Extreme macro of a finished filigree piece catching directional light, shallow depth of field, dark quiet background.
- Aspect: portrait, tall (site renders ~3:4 to 9:16 depending on viewport)
- Min. resolution: 2400×3600px
- Note: the site's single most important image — everything else can be modest, this one can't.

### 2. `opening-loupe-wire-macro` — Opening → optical loupe (`sections/Opening.jsx`)
True macro of real wire-on-wire detail — close enough to read individual coils — used as the interactive "move to inspect" loupe image.
- Aspect: 4:5
- Min. resolution: 1600×2000px
- Note: must actually contain fine detail; the loupe zooms 2.4× into it, so a soft or low-detail image will look worse magnified, not better.

### 3. `opening-city-street` — Opening → "What Is Tarakasi?" (`sections/Opening.jsx`)
Documentary wide shot of a Cuttack silver-market street, natural light.
- Aspect: 3:2
- Min. resolution: 2400×1600px
- Note: must read as an actual Cuttack silver-market street (specific signage/architecture cues), not a staged or generic-Indian-market look.

### 4–14. `making-step-01` … `making-step-11` — Making (`sections/Making.jsx`)
One image per process step, in order:
1. **Melt** — clay pot in hot coals, bellows
2. **Cast** — molten silver poured into rod mould
3. **Draw** — wire-drawing machine pulling flat wire
4. **Refine gauge** — wire drawn to hair-fine gauge
5. **Twist & curl** — kerosene flame + blow-tube, needle twisting
6. **Frame — farma** — outer frame bent from thick wire
7. **Fill** — thin wire packed into interior detail
8. **Assemble** — wire elements + flat silver being composed
9. **Fuse** — borax/solder powder, heat applied to joins
10. **Clean** — piece in dilute acid bath
11. **Polish** — brass-tipped tools, hand polishing to shine

- Aspect: 16:9 each
- Min. resolution: 1600×900px each
- Note: workshop macro, one continuous production or 11 separate shots — either works as long as the sequence is legible step-by-step.

### 15. `making-workshop-aside` — Making → workshop aside (`sections/Making.jsx`)
Small aside image reinforcing "team of 4–5 artisans, small cramped workshop, winter working season."
- Aspect: flexible
- Min. resolution: 1200×800px
- Note: hands/tools/interior — no posed faces.

### 16–21. `wire-motif-{spiral,curl,creeper,jaali,circle,dot}` — Wire Language grid (`sections/WireLanguage.jsx`)
Six macro tiles, one per named wire-design type, each isolating that single pattern: **Spiral, Curl, Creeper, Jaali lattice, Circle, Dot**.
- Aspect: 1:1
- Min. resolution: 1200×1200px
- Note: these also reuse at larger size (16:9) in the tap-to-expand overlay — supply at least 1600px on the long edge so the expand doesn't upscale visibly.

### 22–27. `objects-{jewellery,ornaments,souvenirs,idols,architectural,festival}` — Objects catalogue (`sections/Objects.jsx`)
One catalogue-style object shot per category, even museum lighting (flat, not directional): **Jewellery, Ornaments & vermilion boxes, Souvenirs & miniatures, Idols & showpieces, Architectural replicas, Festival work**.
- Aspect: mixed — 3:4, 4:3, 1:1, 16:10, 4:5 (see code, order fixed)
- Min. resolution: 1600px on long edge
- Note: design spec calls for 2+ images per category (12+ total) for a fuller masonry gallery; current code renders exactly one slot per category. Flag to the developer if the extra density is wanted — otherwise these 6 are sufficient to ship.

### 28. `odissi-ornament-set` — Odissi (`sections/Odissi.jsx`)
Full-height image of a complete Odissi dance ornament set, head to waist, on a neutral backdrop.
- Aspect: tall, portrait
- Min. resolution: 1800×2800px
- Note: eight numbered markers (Sinthi, Kapa, Choker, Padaka-tilaka, Bahichudi/Tayila, Kankana, Mekhala, Anklets & bells) are positioned over this image by percentage coordinates already in `content.js` (`ODISSI_FORMS`) — the ornament pieces must actually appear roughly at those body zones (head→feet) for the labels to land correctly; coordinates may need re-tuning once the final image is in.

### 29. `festival-chandi-medha-panorama` — Festival (`sections/Festival.jsx`)
Wide panorama of a Chandi Medha silver backdrop framing the Durga idol, festival lighting.
- Aspect: 21:10
- Min. resolution: 3000×1400px
- Note: drag-zoom interaction is built for this image — supply it large.

### 30. `festival-chandi-medha-detail` — Festival (`sections/Festival.jsx`)
Macro detail of wirework from the *same* backdrop as #29 — this is the site's scale-contrast device (hairline wire vs. hundreds of kilos of silver).
- Aspect: 1:1
- Min. resolution: 1600×1600px
- Note: must visibly be a close-up of the same object as the panorama, not a generic macro.

### 31. `cuttack-market-lane` — Cuttack (`sections/Festival.jsx`, id="cuttack")
Cuttack market lane, silver shops, early morning, directional light.
- Aspect: 4:3
- Min. resolution: 2000×1500px

### 32. `challenge-workshop-tools` — The Craft Must Continue (`sections/Closing.jsx`)
Tools at rest, window light, dark/charcoal-toned section.
- Aspect: 4:5
- Min. resolution: 1600×2000px
- Note: no posed portraits.

### 33. `challenge-workshop-interior` — The Craft Must Continue (`sections/Closing.jsx`)
Interior of a small workshop behind a showroom.
- Aspect: 4:3
- Min. resolution: 1800×1350px

### 34. `closing-finished-piece` — Closing (`sections/Closing.jsx`)
One slowly moving macro shot of a finished piece catching natural light — can echo/loop back visually to the hero shot.
- Aspect: fills viewport, treat as 16:9 minimum crop
- Min. resolution: 2400×1350px
- Note: this is a dark, full-bleed section (55% black overlay applied in CSS) — image should hold up under that overlay, not go muddy.

**Total: 34 image slots** (11 of which are the Making sequence).

**Delivered so far (6/34):** hero-macro, opening-city-street, making-step-01…04 (Melt, Cast, Draw, Refine gauge). Remaining 28 slots still show placeholders.

## Priority order if photography has to be supplied in batches

1. Hero macro (#1) and Closing finished piece (#34) — these two frame the whole site.
2. Making sequence (#4–14) — the site's signature interactive section.
3. Wire Language grid (#16–21) and Chandi Medha pair (#29–30).
4. Everything else.

## AI generation workflow (client-approved)

- **Ground every generation in real reference.** Feed real Tarakasi photos (own sourced shots, museum/archive images, Cuttack GI documentation) into img2img, IP-Adapter, or as explicit style/subject reference — never a bare text prompt for a GI-protected craft this specific.
- **Check against the shot list's Exact description column** for what must be in-frame (e.g. Making step 05 must show kerosene flame + blow-tube + needle twisting, not generic "wire craft" ambiguity).
- **Reject and regenerate, don't retouch past the point of no return:** wrong wire-lattice logic, joins that look melted/fused instead of wire-on-wire, wrong wire gauge, hallucinated tools, or hand/finger errors are all instant re-rolls, not Photoshop fixes.
- **Silver tone check applies to AI output too** (rule 2) — AI models often warm/golden metals by default; correct in generation (negative prompt "gold, warm tone, brass") or in post grading.
- **Upscale/detail-pass macro shots** (Hero, loupe wire macro, wire-motif tiles, Chandi Medha detail) — these are inspected up close or zoomed (2.4× for the loupe), so base-resolution AI output will show artifacting under magnification. Run through an upscaler and inspect at 100% before delivery.
- **One real anchor photo strongly recommended** for the two AI-detail-pairs — Odissi ornament set (label coordinates depend on real body-proportioned placement) and Festival Chandi Medha panorama+detail pair (detail must visibly be the same object as the panorama) — since these need cross-image or coordinate consistency that's easiest to get right starting from one real photo.

## What NOT to do

- Do not substitute generic stock photography or generic "Indian jewellery" AI output "just to fill the space" — the placeholder boxes are explicitly designed to read as *intentional, honest gaps* (hairline corner brackets + "photograph to be supplied" label), which is a legitimate look for a pre-launch site. A wrong image is worse than a labelled empty box.
- Do not generate any image from a bare text prompt with no real Tarakasi reference — ungrounded AI filigree will not match a real GI-protected craft's actual visual vocabulary, and it shows.

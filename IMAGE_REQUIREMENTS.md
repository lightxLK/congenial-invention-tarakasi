# Image Requirements — Tarakasi Site

Every image slot below is currently a labelled placeholder (`<Ph>` component / `data-testid="image-placeholder"`) in the live code — the site runs and reads correctly without any of these, but ships with no photography yet. This is the exact shot list to close that gap, derived from `cuttack_tarakasi_website_design.json` → `media_and_asset_manifest` and cross-checked against what each component actually renders.

## Non-negotiable rules (from the design spec — do not violate)

1. **Real, licensed photography only.** No AI-generated images, no stock photography of anything other than actual Tarakasi filigree/Cuttack subjects, no generic "Indian jewellery" stand-ins. Three earlier placeholder files (`hero.jpg`, `closing.jpg`, `silver-texture.jpg` — a carabiner/rigging photo, a moonstone pendant, and plain linen fabric, none of them Tarakasi) were found shipped in `frontend/public/images/` during this audit and have been removed; do not repeat that mistake with the final set.
2. **Macro-first, single directional light source**, true-to-material silver tone (not warmed/goldened in post). Shallow depth of field. Reserve flat, even lighting only for the object-catalogue shots (Objects, Odissi).
3. **No posed artisan portraits / no AI or stock "artisan" faces.** Hands-at-work, tools, and workshop interiors are preferred over any face.
4. **Format:** deliver as AVIF or WebP with a JPEG fallback. Responsive crop variants per breakpoint (mobile / tablet / desktop) for every hero-weight image.
5. **File naming:** `<section-id>-<asset-slug>.<ext>`, matching the `asset_id` scheme below, so they can be dropped straight into `frontend/public/images/` and wired up by filename.

## Shot list

| # | asset_id | Section (component) | Exact description | Aspect ratio | Min. resolution | Notes |
|---|---|---|---|---|---|---|
| 1 | `hero-macro` | Hero (`components/Hero.jsx`) | Extreme macro of a finished filigree piece catching directional light, shallow depth of field, dark quiet background | Portrait, tall (site renders ~3:4 to 9:16 depending on viewport) | 2400×3600px | The site's single most important image — everything else can be modest, this one can't. |
| 2 | `opening-loupe-wire-macro` | Opening → optical loupe (`sections/Opening.jsx`) | True macro of real wire-on-wire detail — close enough to read individual coils — used as the interactive "move to inspect" loupe image | 4:5 | 1600×2000px | Must actually contain fine detail; the loupe zooms 2.4× into it, so a soft or low-detail shot will look worse magnified, not better. |
| 3 | `opening-city-street` | Opening → "What Is Tarakasi?" (`sections/Opening.jsx`) | Documentary wide shot of a Cuttack silver-market street, natural light | 3:2 | 2400×1600px | Real street, not a staged storefront. |
| 4–14 | `making-step-01` … `making-step-11` | Making (`sections/Making.jsx`) | One photograph per process step, in order: **01 Melt** (clay pot in hot coals, bellows), **02 Cast** (molten silver poured into rod mould), **03 Draw** (wire-drawing machine pulling flat wire), **04 Refine gauge** (wire being drawn to hair-fine gauge), **05 Twist & curl** (kerosene flame + blow-tube, needle twisting), **06 Frame — farma** (outer frame being bent from thick wire), **07 Fill** (thin wire packed into interior detail), **08 Assemble** (wire elements + flat silver being composed), **09 Fuse** (borax/solder powder, heat applied to joins), **10 Clean** (piece in dilute acid bath), **11 Polish** (brass-tipped tools, hand polishing to shine) | 16:9 | 1600×900px each | Workshop macro, one continuous production or 11 separate shots — either works as long as the sequence is legible step-by-step. |
| 15 | `making-workshop-aside` | Making → workshop aside (`sections/Making.jsx`) | Small aside image reinforcing "team of 4–5 artisans, small cramped workshop, winter working season" | flexible | 1200×800px | Hands/tools/interior — no posed faces. |
| 16–21 | `wire-motif-{spiral,curl,creeper,jaali,circle,dot}` | Wire Language grid (`sections/WireLanguage.jsx`) | Six macro tiles, one per named wire-design type: **Spiral**, **Curl**, **Creeper**, **Jaali lattice**, **Circle**, **Dot** — each isolating that single pattern | 1:1 | 1200×1200px | These also reuse at larger size (16:9) in the tap-to-expand overlay — supply at least 1600px on the long edge so the expand doesn't upscale visibly. |
| 22–27 | `objects-{jewellery,ornaments,souvenirs,idols,architectural,festival}` | Objects catalogue (`sections/Objects.jsx`) | One catalogue-style object shot per category, even museum lighting (flat, not directional): **Jewellery**, **Ornaments & vermilion boxes**, **Souvenirs & miniatures**, **Idols & showpieces**, **Architectural replicas**, **Festival work** | Mixed — 3:4, 4:3, 1:1, 16:10, 4:5 (see code, order fixed) | 1600px on long edge | Design spec calls for 2+ photos per category (12+ total) for a fuller masonry gallery; current code renders exactly one slot per category. Flag to the developer if the extra density is wanted — otherwise these 6 are sufficient to ship. |
| 28 | `odissi-ornament-set` | Odissi (`sections/Odissi.jsx`) | Full-height photograph of a complete Odissi dance ornament set, head to waist, on a neutral backdrop | Tall, portrait | 1800×2800px | Eight numbered markers (Sinthi, Kapa, Choker, Padaka-tilaka, Bahichudi/Tayila, Kankana, Mekhala, Anklets & bells) are positioned over this image by percentage coordinates already in `content.js` (`ODISSI_FORMS`) — the ornament pieces must actually appear roughly at those body zones (head→feet) for the labels to land correctly; coordinates may need re-tuning once the real photo is in. |
| 29 | `festival-chandi-medha-panorama` | Festival (`sections/Festival.jsx`) | Wide panorama of a Chandi Medha silver backdrop framing the Durga idol, festival lighting | 21:10 | 3000×1400px | Drag-zoom interaction is built for this image — supply it large. |
| 30 | `festival-chandi-medha-detail` | Festival (`sections/Festival.jsx`) | Macro detail of wirework from the *same* backdrop as #29 — this is the site's scale-contrast device (hairline wire vs. hundreds of kilos of silver) | 1:1 | 1600×1600px | Must visibly be a close-up of the same object as the panorama, not a generic macro. |
| 31 | `cuttack-market-lane` | Cuttack (`sections/Festival.jsx`, id="cuttack") | Cuttack market lane, silver shops, early morning, directional light | 4:3 | 2000×1500px | |
| 32 | `challenge-workshop-tools` | The Craft Must Continue (`sections/Closing.jsx`) | Tools at rest, window light, dark/charcoal-toned section | 4:5 | 1600×2000px | No posed portraits. |
| 33 | `challenge-workshop-interior` | The Craft Must Continue (`sections/Closing.jsx`) | Interior of a small workshop behind a showroom | 4:3 | 1800×1350px | |
| 34 | `closing-finished-piece` | Closing (`sections/Closing.jsx`) | One slowly moving macro shot of a finished piece catching natural light — can echo/loop back visually to the hero shot | Fills viewport, treat as 16:9 minimum crop | 2400×1350px | This is a dark, full-bleed section (55% black overlay applied in CSS) — image should hold up under that overlay, not go muddy. |

**Total: 34 image slots** (11 of which are the Making sequence).

## Priority order if photography has to be supplied in batches

1. Hero macro (#1) and Closing finished piece (#34) — these two frame the whole site.
2. Making sequence (#4–14) — the site's signature interactive section.
3. Wire Language grid (#16–21) and Chandi Medha pair (#29–30).
4. Everything else.

## What NOT to do

- Do not substitute stock photography "just to fill the space" — the placeholder boxes are explicitly designed to read as *intentional, honest gaps* (hairline corner brackets + "photograph to be supplied" label), which is a legitimate look for a pre-launch site. A wrong photo is worse than a labelled empty box.
- Do not AI-generate any of these, including "just for the wire-pattern tiles" — the design spec bans this outright, and generated filigree patterns will not match a real GI-protected craft's actual visual vocabulary.

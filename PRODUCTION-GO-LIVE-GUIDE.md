# Production Go-Live Guide — katakatarakasi.com

Site profile: **static single-page React site** (CRA build, FTP-deployed via GitHub Actions to
shared hosting), no backend, no database, no Docker/VPS. Many standard production-checklist
rows are N/A for this profile — marked below, never silently skipped.

Everything marked ✅ is done and live. Everything marked ⬜ needs an account/decision only you
have — I've written the exact step for each so it's a paste-and-go list, not homework.

---

## 1. Go-Live Checklist

### Infrastructure
- ✅ DNS + SSL live (`https://katakatarakasi.com` returns 200 over HTTPS)
- N/A Backups / restore test — no database; git history is the durable backup, `git revert` is the restore path
- N/A Health endpoint, Docker healthchecks — no server process to health-check
- ✅ CI pipeline (`.github/workflows/deploy.yml`) green on every push, with a post-deploy HTTP check built in

### Observability
- ⬜ **Analytics** — GA4 / GTM / Meta Pixel. None wired. For each you want:
  1. Create the account (GA4: analytics.google.com, free; GTM: tagmanager.google.com; Meta Pixel: business.facebook.com/events_manager)
  2. Send me the ID (`G-XXXXXXX`, `GTM-XXXXXXX`, or Pixel ID) — I'll drop the snippet into `frontend/public/index.html`
- ⬜ **Sentry** (client-side JS error tracking) — recommended for a live client site so a broken build doesn't go unnoticed. Free tier is enough. Send me the DSN and I'll wire it into `src/index.js` with source maps uploaded at build time (not publicly served — see the fix below).
- ✅ **Rollback** — `git revert <commit> && git push`, CI redeploys automatically. Tested implicitly every session.

### Security
- ✅ **Fixed this pass:** production was serving full unminified source maps publicly (`/static/js/main.*.js.map`) — anyone could reconstruct readable source. `GENERATE_SOURCEMAP=false` now set in CI.
- ✅ No secrets in repo; FTP credentials live in GitHub Actions secrets only
- ✅ No stray `console.log`/`debugger` in source
- N/A Load testing — static FTP host serving a single page; not a meaningful test for this profile
- ⬜ **Lighthouse** — I don't have a way to run a full Lighthouse audit from here (needs a live Chrome session, which isn't connected this session). Run it yourself: Chrome DevTools → Lighthouse tab → Analyze page load, on the live URL, both mobile and desktop. Send me the JSON/screenshot if anything scores red and I'll fix it.

### Data hygiene
- N/A No backend, no admin user, no seed data

### Repo hygiene (light SOP non-negotiables, not yet in this repo)
- ⬜ `CHANGELOG.md` — not present. Want me to backfill one from git log, or start fresh from here?
- ⬜ `PROJECT-CHECKLIST.md` — not present. Say the word and I'll add the live state artifact.
- ⬜ `ALT+SHIFT+L+K` developer easter egg — the light SOP's signature feature, not present. This is an internal-SOP convention, not a client requirement — your call whether it belongs on a client-facing craft-heritage site. I won't add it without you saying yes.

**Sign-off note:** per the SOP, this checklist should be independently verified by someone other than whoever built the feature before calling it final — worth a second pair of eyes on the ⬜ items above once they're closed out.

---

## 2. SEO / pSEO / AEO / GEO

### Traditional SEO — ✅ done
- Title, meta description (154 chars, fits Google's ~155–160 truncation point)
- `robots.txt` (was 404 in prod — fixed), `sitemap.xml` (single URL, correct for a one-page site)
- Canonical tag, semantic heading hierarchy already in place (`SectionHead` components use numbered `h2`s)
- Every factual claim on the page carries an inline source citation (`SourceNote`) — this is unusually strong E-E-A-T signal already, don't lose it in future edits

### pSEO (programmatic SEO) — **N/A, documented reason**
pSEO applies to large, templated content surfaces (product catalogs, location pages) where you
generate many unique-but-similar pages. This is a single-page exhibition site with one URL and
no content surface to template. Nothing to do here — if the site ever grows a multi-page
structure (e.g. individual pages per object category or per Odissi ornament), pSEO becomes
relevant and this section should be revisited.

### AEO (Answer Engine Optimization) — ✅ done this session
- Added `FAQPage` JSON-LD (`frontend/public/index.html`) built from the GI recognition Q&A
  content that's already live on the page (`content.js` → `GI_ROWS`, rendered in
  `sections/GI.jsx`) — six question/answer pairs phrased for direct-answer extraction (GI date,
  what a GI means, the regulator, protection term, Odissi role, Durga Puja role)
- These are the site's most "askable" facts (dates, definitions, regulatory scope) — exactly
  what AEO surfaces (Google's featured snippets, voice assistants) pull from
- If you add more Q&A-shaped content later (e.g. an actual visible FAQ section), extend this
  JSON-LD block to match — don't let it drift out of sync with on-page content, since JSON-LD
  contradicting visible content is a Google Search Console red flag

### GEO (Generative Engine Optimization) — largely ✅ already, by construction
- LLM-based answer engines cite content that has clear factual density, explicit attribution,
  and low fluff. This site's existing structure already fits that: every claim is source-tagged
  (`SourceNote keys={[...]}`), the `Article` JSON-LD gives a clean machine-readable summary, and
  the copy avoids marketing fluff in favor of dated, attributed facts (the `TIMELINE`, `MEDHA`,
  `GI_ROWS` arrays in `content.js`)
- One gap: the `Article` JSON-LD's `author`/`publisher` fields aren't set (schema.org allows
  omitting them, but citing engines weight sourced authorship). If Katakia Tarakasi Centre wants
  to be named as the authoring organization, tell me the exact name/URL and I'll add an
  `Organization` entity to the JSON-LD.
- No further action needed unless you want the author/publisher entity added.

### Verification steps (needs your access, not mine)
- ⬜ Submit `sitemap.xml` in Google Search Console (after you verify domain ownership — DNS TXT
  record or HTML meta tag, your call which)
- ⬜ Submit to Bing Webmaster Tools (can import directly from a verified GSC property, one click)
- ⬜ Confirm the FAQPage/Article rich results validate: paste `https://katakatarakasi.com/` into
  Google's [Rich Results Test](https://search.google.com/test/rich-results) once live
- ⬜ Re-check the OG card in a real crawler after this deploy: LinkedIn's
  [Post Inspector](https://www.linkedin.com/post-inspector/) or X's card validator — meta
  crawlers cache aggressively, so a re-share may still show the old 1600×679 image until they
  recrawl

---

## 3. What's genuinely finished vs. what's blocked on you

**Finished, no action needed:** technical SEO fundamentals, OG/Twitter cards, JSON-LD (Article +
FAQPage), source map leak fix, real logo/favicon, image requirements (33/34, one low-priority
aside image outstanding).

**Blocked on your accounts/decisions:** analytics IDs, Sentry DSN, GSC/Bing verification,
Lighthouse run, CHANGELOG/PROJECT-CHECKLIST/easter-egg decisions, author/publisher entity name.

Send me any of the IDs/decisions above whenever you have them and I'll wire each one in — no
need to batch them.

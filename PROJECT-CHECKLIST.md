# Go-live checklist: ssjewellerskataka.com (and katakatarakasi.com)

Audited 2026-10-03 with `light-audit.sh`, `light-ci.sh lint` and `npx ax@0.7 audit`.

## Passed
- TLS valid, http to https 301, HSTS / nosniff / X-Frame-Options / Referrer-Policy live
- Canonical, og:image, robots.txt, sitemap.xml, llms.txt (domain-rewritten per site), JSON-LD
- Raw-HTML content for non-JS crawlers; real 404; no source maps; no exposed paths
- No third-party requests (fonts self-hosted); static About and Privacy pages
- Deploy verifies HTTP 200 on both domains; job timeout set; docs-only commits skip deploy
- Ora score: 16 to 29 (D) on ssjewellerskataka.com

## N/A (with reason)
- `/health`: static site, no backend. (`light-audit.sh` still reports this one FAIL.)
- Sentry, central logs, backups, restore test, seed/admin data: no server, DB or data; code is in git
- Rollback: redeploy previous commit
- Analytics: none by design (see privacy.html)
- Email DNS (SPF/DKIM/DMARC): domain sends no mail
- Load test: static files behind the host CDN
- Ora API / OAuth / MCP / SDK / pricing / developer-portal checks: no API or product
- CI gate on deploy: deploy-on-push is a deliberate choice for this static site

## Skipped for now (add when required)
- Contact page or form: not needed yet
- JSON-LD `sameAs` and social profiles: the brand has none
- Google Search Console: submit `https://ssjewellerskataka.com/sitemap.xml` once domain is verified
- Per-domain differentiated title/description wording for SS Jewellers

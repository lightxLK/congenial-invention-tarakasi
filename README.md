# Cuttack Rupa Tarakasi

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-0055FF?style=flat&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-Proprietary-lightgrey?style=flat)

## Overview

A single-page exhibition site for Cuttack Rupa Tarakasi, the GI-tagged silver filigree craft of
Cuttack, Odisha — history, the making process, motifs, cultural use (Odissi ornament, Durga Puja
Chandi Medha backdrops), and the March 2024 Geographical Indication recognition. Live at
[katakatarakasi.com](https://katakatarakasi.com).

## Motivation

Static, content-only exhibition site with no backend and no database — the entire page is one
long-scroll narrative built from a single content file (`frontend/src/content.js`). The
production host only accepts FTP uploads, which is why deployment builds a static export and
pushes the `build/` folder directly, rather than running a Node server.

## Build and Deployment Status

Build and deploy on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Code Style

Standard `react-scripts` (Create React App, via `craco`) ESLint config — no separate linter
config file. No pre-commit hooks configured.

## Screenshots

_None captured yet — see the live site at [katakatarakasi.com](https://katakatarakasi.com)._

## Tech Stack

**Framework / rendering**
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![CRA](https://img.shields.io/badge/Create%20React%20App-craco-09D3AC?style=flat)

**Styling / UI**
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-primitives-161618?style=flat)

**Animation / interaction**
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-0055FF?style=flat&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-smooth%20scroll-000000?style=flat)

**Deployment**
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=flat&logo=githubactions&logoColor=white)

## Features

- Single-page long-scroll narrative: craft history, the making process, wire motifs, objects &
  forms, Odissi ornament set (interactive markers), Durga Puja Chandi Medha backdrops, Cuttack
  place context, GI recognition, and sources.
- All content sourced and citation-linked (`SOURCES` in `frontend/src/content.js`), rendered as
  superscript inline citations.
- WebP-optimized imagery throughout, lazy-loaded below the fold, with the hero image preloaded
  and prioritized as the page's LCP element.
- SEO: `robots.txt`, `sitemap.xml`, canonical tag, OG/Twitter cards, `Article` + `FAQPage`
  JSON-LD.

## Project Structure

```
.
├── frontend/                # The React app (everything ships from here)
│   ├── public/
│   │   ├── images/          # WebP content photography
│   │   └── index.html
│   └── src/
│       ├── components/      # Shared UI (Nav, shadcn/ui primitives)
│       ├── sections/         # One file per page section (Opening, Making, GI, ...)
│       ├── content.js        # All copy, sources, and per-section data
│       └── App.js
├── .github/workflows/
│   └── deploy.yml            # Build + FTP deploy on push to main
├── CHANGELOG.md
└── misc/                     # Source assets / scratch (gitignored, not shipped)
```

## Getting Started

Prerequisites: Node 20, Yarn.

```bash
git clone <repo-url>
cd katakatarakasi.com/frontend
yarn install
yarn start
```

The dev server runs at `http://localhost:3000`.

## Available Scripts

Run from `frontend/`:

| Script | Description |
|---|---|
| `yarn start` | Runs the app in development mode (`craco start`) |
| `yarn build` | Builds the static production bundle to `frontend/build/` (`craco build`) |
| `yarn test` | Runs the test runner in watch mode (`craco test`) |

## Environment Variables

None required for local development or build. `GENERATE_SOURCEMAP=false` is set in CI only, to
avoid shipping public source maps to production.

## Testing

`yarn test` (from `frontend/`) runs the Create React App / Jest test runner. No test suites are
currently checked in.

## Deployment

Handled entirely by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): on every push
to `main`, GitHub Actions installs dependencies (`yarn install --frozen-lockfile`), builds the
static bundle, and FTP-deploys `frontend/build/` straight to the production host. A final step
polls `https://katakatarakasi.com/` for an HTTP 200 to confirm the deploy took effect.

## Contributing

- Branch from `main`, open a PR back into `main`.
- `yarn build` must succeed before merging.
- Commit messages: plain, descriptive, present-tense. No AI/tool attribution trailers
  (`Co-Authored-By`, "Generated with…", etc.) in commits or PR descriptions.
- Update `CHANGELOG.md` for any user-facing change.

## Credits

Built and maintained by TSA Media Pvt. Ltd. for the Katakia Tarakasi Centre.

## License

Proprietary. All rights reserved.

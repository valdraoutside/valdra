# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server on http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — run Jest/RTL in watch mode (`npm test -- --watchAll=false` for CI mode, `npm test -- FileName` to target one file)
- `npm run deploy` — builds then pushes `build/` to the `gh-pages` branch via `gh-pages` CLI

There are currently no test files in the repo, and no lint script beyond the default CRA ESLint config (`react-app`, `react-app/jest`).

## Architecture

This is a Create React App (CRA, `react-scripts` 5) single-page marketing site for VALDRA Outside. It is not a Next.js/Vite project — treat it as CRA.

- Entry: `src/index.js` → `src/App.js`. Routing is `react-router-dom` v6 `BrowserRouter` with routes for `/`, `/about`, `/shop`, `/faq`, `/contact`. `Header` and `Footer` wrap every page.
- Pages live in `src/pages/*`, each paired with its own CSS file. Reusable layout pieces live in `src/components/*` (`Header`, `Footer`, `HeroCarousel`), also each with a CSS file. No CSS modules, no CSS-in-JS — plain global CSS with className conventions.
- Static assets are served from `public/` (not imported). Code references them with absolute paths like `/assets/hero1.jpeg` and `/logo.png`. Do NOT prefix these with `/valdra` — an earlier commit (`22df736`) removed that prefix specifically for the custom-domain setup. Adding it back will break images in production.
- `public/CNAME` pins the site to `valdraoutside.com` and `package.json`'s `homepage` matches. The app serves from the root of that domain, so `BrowserRouter` is used with no `basename`.

## Deployment

Deploy with `npm run deploy` — this builds and pushes `build/` to the `gh-pages` branch via the `gh-pages` npm package. GitHub Pages is configured (legacy source mode) to serve from that branch.

A prior Actions workflow exists at `.github/_archive/deploy.yml` but is intentionally not wired to Actions (moved out of `workflows/`). Pages does not read from Actions on this repo — don't re-enable the Actions-based deploy without also flipping the Pages source setting via the GitHub UI or API.

The site is served at the apex domain `valdraoutside.com` (see `public/CNAME`), not at `/valdra`.

## Conventions worth knowing

- Image paths are absolute from `public/` — e.g. `src="/assets/hero3.jpeg"`. Keep this pattern when adding new images.
- Each page/component file has a matching `.css` file imported at the top; follow that pairing when adding new ones.
- The project has no TypeScript, no state management library, and no API layer — it is a static marketing site.

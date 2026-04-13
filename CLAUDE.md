# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sunrise is a Vue 3 + Vite personal dashboard app (恐龍天地) for a Taiwanese team. It includes travel planning, restaurant selection, team management, shopping lists, and transit tools. It is a purely frontend app with no backend — all data lives in TypeScript files and images. UI and content are primarily in Traditional Chinese.

Deployed to GitHub Pages at base path `/tokyo/` using hash-based routing.

## Commands

- **Dev server:** `npm run dev` (port 5173)
- **Build:** `npm run build` (type-check + Vite build → `dist/`)
- **Preview build:** `npm run preview` (port 4173)
- **Type-check only:** `npm run type-check`
- **Lint:** `npm run lint` (runs both ESLint and oxlint)
- **Format:** `npm run format` (Prettier on `src/`)
- **Unit tests:** `npm run test:unit` (Vitest with jsdom)
- **E2E tests:** `npm run test:e2e` (Playwright — Chromium, Firefox, WebKit)
- **Run a single unit test:** `npx vitest run src/components/__tests__/HelloWorld.spec.ts`

## Architecture

- **Entry:** `index.html` → `src/main.ts` (creates Vue app, registers Pinia + Router, mounts to `#app`)
- **Root component:** `src/App.vue` — navigation bar + `<RouterView>`
- **Routing:** `src/router/index.ts` — 17 routes, hash history (`createWebHashHistory()`) for GitHub Pages compatibility
- **State:** `src/stores/` — Pinia with Composition API style (currently minimal)
- **Views** (`src/views/`) — page-level components mapped to routes
- **Components** (`src/components/`) — reusable UI components (LunchPicker, MrtPicker, StarterPicker, etc.)
- **Data** (`src/data/`) — static TypeScript datasets (train stations, MRT stations)
- **Static assets** (`public/`) — images organized by feature (2025Tokyo/, 2026Osaka/, happy/, design/, daigou/, vietnam/)
- **Styling:** CSS custom properties in `src/assets/base.css` — dark theme with cyan accents, Space Grotesk + Noto Sans TC fonts

## Key Conventions

- Vite base path is `/tokyo/` (configured in `vite.config.ts`)
- Path alias: `@/` maps to `src/`
- TypeScript config is split: `tsconfig.app.json` (app code), `tsconfig.node.json` (build tools), `tsconfig.vitest.json` (tests)
- ESLint uses flat config format (ESLint 9+) with vue, typescript, vitest, playwright, and oxlint plugins
- Unit tests live in `src/components/__tests__/`; E2E tests live in `e2e/`
- Markdown rendering uses the `marked` library (used in TravelView)

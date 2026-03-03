# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: Docs-First Requirement

**Before generating any code**, you MUST first read and refer to the relevant file(s) in the `/docs` directory. This is a hard requirement — do not write or suggest code without first consulting the applicable documentation.

Current docs files:
- `docs/ui.md` — UI patterns, component conventions, and design guidelines

If no relevant doc exists for the task, proceed with the project conventions documented in this file.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **TypeScript** (strict mode, target ES2017)
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `globals.css`, configured with `@tailwindcss/postcss`
- **ESLint** — flat config (`eslint.config.mjs`) using `eslint-config-next` core-web-vitals + typescript rules

## Architecture

This is a **fresh scaffold** from `create-next-app` — the actual Lifting Diary app has not been built yet. The only source files are:

- `src/app/layout.tsx` — root layout with Geist font (sans + mono), dark mode support via CSS custom properties
- `src/app/page.tsx` — placeholder home page
- `src/app/globals.css` — Tailwind import + CSS custom properties for `--background`/`--foreground` colors

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## CSS / Theming

Tailwind v4 uses `@theme inline` blocks in CSS rather than a separate `tailwind.config` file. Dark mode is handled via `prefers-color-scheme` media query with CSS custom properties, not Tailwind's `dark:` class strategy.

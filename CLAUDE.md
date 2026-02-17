# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- **Package manager:** pnpm
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Build then start production server
- `pnpm lint` / `pnpm lint:fix` — ESLint
- `pnpm format` — Prettier
- `pnpm build:registry` — Rebuild component registry (run after modifying files in `src/registry/`)
- `pnpm postinstall` — Runs `fumadocs-mdx` (needed after adding/removing MDX content files)

No test framework is configured.

## Architecture

**Next.js 15 App Router** portfolio/documentation site deployed on Vercel. Uses React 19, TypeScript 5, and Tailwind CSS 4.

### Content System

MDX documentation powered by **Fumadocs** (fumadocs-core + fumadocs-mdx). Content lives in `src/content/docs/` organized by category (components, hooks, tools). Configuration in `source.config.ts` includes CodeHike for code blocks and git-based last-modified tracking. The Fumadocs source loader is at `src/lib/source.ts`.

### Component Registry

Shadcn-style component registry system for showcasing reusable components:
- Registry definitions: `src/registry/registry-ui.ts`, `registry-hooks.ts`, `registry-examples.ts`
- Registry implementations: `src/registry/default/`
- Built via `src/scripts/build-registry.mts` → outputs to `__registry__/`
- Documentation pages under `src/app/registry/`

### Key Directories

- `src/app/` — App Router pages. Route group `(with-footer)` adds footer layout.
- `src/components/ui/` — Shadcn/ui base components (new-york style)
- `src/components/` — Feature components organized by domain (about, docs, layout, mdx, pdf, tools)
- `src/lib/constants/` — Site config (`site.ts`), resume data (`resume.ts`), colors, easings
- `src/lib/utils/` — Utility functions (classnames, clipboard, colors, dates, urls)
- `src/actions/` — Server actions (email sending)
- `src/providers/` — Root context providers (themes, fumadocs)

### Import Alias

`@/*` maps to `./src/*`

## Conventions

- **Default to Server Components.** Add `"use client"` only when needed.
- **Shadcn/ui config** in `components.json`: new-york style, CSS variables, neutral base color.
- **Prettier** uses single quotes, trailing commas, and tailwindcss plugin for class sorting.
- **Pre-commit hook** (Husky + lint-staged): runs eslint --fix and prettier on staged TS/TSX/MDX files.
- **Environment variables:** `.env` contains `NODEMAILER_USER` and `NODEMAILER_APP_PASSWORD` for contact form email.

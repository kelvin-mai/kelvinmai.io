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
- `pnpm sync:blob` — Sync images in `public/assets/` to/from Vercel Blob (uses `blob-manifest.json`)

No test framework is configured.

## Architecture

**Next.js 16 App Router** portfolio/documentation site deployed on Vercel. Uses React 19, TypeScript 5, and Tailwind CSS 4.

### Content System

Custom fs-based MDX loader at `src/lib/source/` (no fumadocs). Content lives in `content/` at the project root:

- `content/blogs/` — Blog posts rendered at `/blog/[slug]`
- `content/docs/` — Registry documentation rendered at `/registry/[[...slug]]`
- `content/pages/` — Standalone MDX pages rendered at `/[slug]`

The source module exports three objects (`blogs`, `docs`, `pages`) via `src/lib/source/index.ts`. Each reads MDX files with `gray-matter`, extracts TOC via remark, and provides `generateParams`, `getPage/getPost`, and listing methods.

**Blog filename convention:** files are numbered (`0150-my-slug.mdx`). The numeric prefix is stripped for the URL slug. Use `pnpm reorder:blogs` to renumber files.

MDX is rendered with `next-mdx-remote/rsc` + CodeHike. **Critical:** pass `blockJS: false` in MDXRemote options — the default `blockJS: true` strips CodeHike's JSX attribute expressions and causes `highlight(undefined, theme)` errors at prerender time.

### MDX Components

All components used in MDX must be registered in `getMDXComponents()` at `src/components/mdx/index.tsx` since `next-mdx-remote` strips imports. Currently registered: CodeHike's `Code`/`InlineCode`, `NpmCommand`, `ComponentPreview`, `ComponentSource`, `Steps`/`Step`, `ReferenceLinks`, `ColorGenerator`, `TailwindColorSwatches`, `Easings`, `GradientGenerator`.

### Component Registry

Shadcn-style component registry for showcasing reusable components:

- Registry definitions: `src/registry/registry-ui.ts`, `registry-hooks.ts`, `registry-examples.ts`
- Implementations: `src/registry/default/`
- Built via `src/scripts/build-registry.mts` → outputs to `src/__registry__/`
- Only `registry:example` entries get a `source` field and lazy `component` import in the generated index
- Documentation pages under `src/app/registry/`

### Image Assets

Static images live in `public/assets/` (gitignored) and are synced to Vercel Blob storage. `blob-manifest.json` (committed) tracks URLs and hashes. Run `pnpm sync:blob` to upload new local files or download missing ones. Use `--force` to overwrite changed files; `--prune` to delete orphaned blobs.

### Key Directories

- `src/app/` — App Router pages. Route group `(with-footer)` adds footer layout.
- `src/components/ui/` — Shadcn/ui base components (new-york style)
- `src/components/` — Feature components organized by domain (about, docs, layout, mdx, pdf, tools)
- `src/lib/constants/` — Site config (`site.ts`), resume data (`resume.ts`), colors, easings, videos
- `src/lib/utils/` — Utility functions (classnames, clipboard, colors, dates, urls)
- `src/actions/` — Server actions (email sending)
- `src/providers/` — Root context providers (themes)

### Import Alias

`@/*` maps to `./src/*`

## Conventions

- **Default to Server Components.** Add `"use client"` only when needed.
- **Shadcn/ui config** in `components.json`: new-york style, CSS variables, neutral base color.
- **Prettier** uses single quotes, trailing commas, and tailwindcss plugin for class sorting.
- **Pre-commit hook** (Husky + lint-staged): runs eslint --fix and prettier on staged TS/TSX/MDX files.
- **Environment variables:** `.env` contains `NODEMAILER_USER`, `NODEMAILER_APP_PASSWORD` (contact form), and `BLOB_READ_WRITE_TOKEN` (Vercel Blob sync).

## Code Standards

### Component Authoring

**Shadcn/ui components** (`src/components/ui/`) use named function declarations, not arrow functions or `React.FC`. They receive a `data-slot` attribute and accept `className` merged through `cn()`:

```tsx
function MyComponent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='my-component' className={cn('...defaults', className)} {...props} />;
}
export { MyComponent };
```

**Registry components** (`src/registry/default/ui/`) use `React.FC` with an explicit `Props` type and a `.displayName`:

```tsx
export type MyProps = React.ComponentProps<'div'> & { custom?: boolean };
export const MyComponent: React.FC<MyProps> = ({ className, custom, ...props }) => {
  return <div className={cn('...', className)} {...props} />;
};
MyComponent.displayName = 'MyComponent';
```

**Registry example components** use `export default function` (required by the registry build):

```tsx
export default function MyComponentDemo() { ... }
```

### Imports

- Radix primitives: import from `radix-ui` (the consolidated package), **not** individual `@radix-ui/*` packages — e.g. `import { Accordion } from 'radix-ui'`.
- Use `@/*` alias for all internal imports.
- `cn()` is exported from `@/lib/utils` (re-exports from `@/lib/utils/classnames`).

### Extending Shadcn Components

Add custom props inline to the component's type intersection rather than a separate interface:

```tsx
function AccordionTrigger({
  hideTrigger,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & { hideTrigger?: boolean }) { ... }
```

### TypeScript

- Prefer `React.ComponentProps<'element'>` over manually typing HTML props.
- Named exports for all components; no default exports except registry examples.
- Use `as` type assertions (not `!`) when consuming `gray-matter` frontmatter data.

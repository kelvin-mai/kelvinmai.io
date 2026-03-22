# kelvinmai.io

Personal portfolio, blog, and component registry. Built with Next.js 16 App Router, React 19, TypeScript 5, and Tailwind CSS 4. Deployed on Vercel.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint:fix` | ESLint with auto-fix |
| `pnpm format` | Prettier |
| `pnpm build:registry` | Rebuild component registry |
| `pnpm sync:blob` | Sync images to/from Vercel Blob |
| `pnpm reorder:blogs` | Renumber blog files |

## Stack

- **Framework:** Next.js 16 App Router
- **Styling:** Tailwind CSS 4 + shadcn/ui (new-york)
- **MDX:** next-mdx-remote + CodeHike
- **PDF:** @react-pdf/renderer
- **Images:** Vercel Blob (`blob-manifest.json`)
- **Email:** Nodemailer

## Content

MDX files live in `content/` at the project root:

- `content/blogs/` — Blog posts at `/blog/[slug]`
- `content/docs/` — Registry docs at `/registry/[...slug]`
- `content/pages/` — Standalone pages at `/[slug]`

Blog files are numbered (`0150-my-slug.mdx`); the prefix is stripped for the URL slug.

## Environment Variables

```
NODEMAILER_USER=
NODEMAILER_APP_PASSWORD=
BLOB_READ_WRITE_TOKEN=
```

# Mayur Dayal — Portfolio (Next.js)

Personal portfolio built with Next.js, React, TypeScript and Tailwind CSS.

## Quick Links

- Project entry: [src/app/page.tsx](src/app/page.tsx)
- Layout & metadata: [src/app/layout.tsx](src/app/layout.tsx)
- Components:
  - [`Hero`](src/components/hero.tsx) — [src/components/hero.tsx](src/components/hero.tsx)
  - [`About`](src/components/about.tsx) — [src/components/about.tsx](src/components/about.tsx)
  - [`Skills`](src/components/skills.tsx) — [src/components/skills.tsx](src/components/skills.tsx)
  - [`Projects`](src/components/projects.tsx) — [src/components/projects.tsx](src/components/projects.tsx)
  - [`Contact`](src/components/contact.tsx) — [src/components/contact.tsx](src/components/contact.tsx)
- Package manifest: [package.json](package.json)
- Lockfile: [pnpm-lock.yaml](pnpm-lock.yaml)
- Workspace config: [pnpm-workspace.yaml](pnpm-workspace.yaml)
- shadcn config / aliases: [components.json](components.json)
- Robots & sitemap: [src/app/robots.ts](src/app/robots.ts), [src/app/sitemap.ts](src/app/sitemap.ts)

## Prerequisites

- Node.js (recommended >= 18.17.0 due to native deps like sharp)
- pnpm (preferred package manager)

## Setup

1. Install dependencies

   ```sh
   pnpm install
   ```

2. Run dev server

   ```sh
   pnpm dev
   ```

   (see [`scripts.dev`](package.json) in [package.json](package.json))

3. Build for production
   ```sh
   pnpm build
   pnpm start
   ```
   (see [`scripts.build`](package.json) and `start` in [package.json](package.json))

## Linting & Formatting

- Lint (biome): `pnpm lint`
- Auto-fix lint issues: `pnpm lint:fix`
- Format: `pnpm format`
  See the scripts in [package.json](package.json).

## Environment

Public env vars used:

- `NEXT_PUBLIC_CV_URL` — fallback: `/cv.pdf` (see [src/components/hero.tsx](src/components/hero.tsx))
- `NEXT_PUBLIC_CV_FILENAME` — fallback filename

Add other env vars as needed in `.env` (not committed).

## Editing content

- Main page composition lives in [src/app/page.tsx](src/app/page.tsx).
- Edit visible sections by updating the components listed above.
- Metadata / site-wide SEO is in [src/app/layout.tsx](src/app/layout.tsx).

## Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any platform supporting Next.js.
Ensure Node version matches native dependency requirements (see [pnpm-lock.yaml](pnpm-lock.yaml) for engine constraints).

## Troubleshooting

- Native module errors (e.g., sharp): confirm Node version and reinstall with `pnpm install`.
- Type errors: run TypeScript typecheck or open the files referenced in the error.

## License

MIT

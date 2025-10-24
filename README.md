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

## Project Structure

```
portfolio-next-app/
├── public/                    # Static assets (favicons, images, manifest)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── _preload-images.tsx # Image preloading for performance
│   │   ├── globals.css        # Global styles (Tailwind, custom)
│   │   ├── layout.tsx         # Root layout with metadata & providers
│   │   ├── not-found.tsx      # 404 page
│   │   ├── page.tsx           # Home page composition
│   │   ├── robots.ts          # Robots.txt generation
│   │   └── sitemap.ts         # Sitemap generation
│   ├── assets/                # Additional assets (if any)
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── theme/             # Theme provider & toggler
│   │   └── *.tsx              # Page sections (hero, about, etc.)
│   └── lib/                   # Utilities (utils.ts)
├── .gitignore
├── biome.json                 # Linting & formatting config
├── components.json            # shadcn/ui config
├── next.config.ts             # Next.js config
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS config for Tailwind
├── README.md                  # This file
├── tsconfig.json              # TypeScript config
└── pnpm-lock.yaml             # Lockfile
```

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Automatic system theme detection with manual toggle.
- **Smooth Animations**: Powered by Motion for engaging interactions.
- **SEO Optimized**: Comprehensive metadata, Open Graph, Twitter Cards, sitemap, and robots.txt.
- **Performance Focused**: Image preloading, optimized fonts, and efficient bundling.
- **Contact Form**: Functional form with validation using React Hook Form and Zod.
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support.
- **TypeScript**: Full type safety for better development experience.
- **Modern Stack**: Next.js 15, React 19, Tailwind CSS, shadcn/ui.

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

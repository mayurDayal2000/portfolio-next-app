# Mayur Dayal — Portfolio

A modern, performant portfolio website showcasing my work as a Full-Stack Software Engineer with expertise in React, Next.js, Python, and AI/ML technologies.

🔗 **Live Site**: https://mayurbuilds.vercel.app/

---

## 🎯 Overview

This portfolio is built with cutting-edge web technologies to deliver a fast, accessible, and visually engaging experience. It features a responsive design, smooth animations, dark/light mode theming, and a functional contact form with Discord integration.

## ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations powered by Motion
- **📱 Fully Responsive**: Optimized layouts for mobile, tablet, and desktop devices
- **⚡ Performance Optimized**: Image preloading, efficient bundling, and optimized fonts
- **♿ Accessible**: Semantic HTML, keyboard navigation, and screen reader support
- **🔍 SEO Ready**: Comprehensive metadata, Open Graph tags, Twitter Cards, sitemap, and robots.txt
- **📬 Contact Form**: Validated form with real-time Discord webhook notifications
- **🔒 Security Headers**: HSTS, CSP, and other security best practices implemented
- **📊 Analytics**: Integrated Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
portfolio-next-app/
├── public/                    # Static assets (favicons, images, fonts)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/               # API routes (contact, resume)
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── robots.ts          # Robots.txt generation
│   │   └── sitemap.ts         # Sitemap generation
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components (shadcn/ui)
│   │   ├── theme/             # Theme provider & toggler
│   │   ├── hero/              # Hero section
│   │   ├── projects/          # Projects section components
│   │   ├── about.tsx          # About section
│   │   ├── skills.tsx         # Skills section
│   │   ├── contact.tsx        # Contact form
│   │   └── footer.tsx         # Footer
│   ├── config/                # Site configuration
│   ├── data/                  # Static data (projects, skills)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── biome.json                 # Biome configuration
├── components.json            # shadcn/ui configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.17.0
- **pnpm** (recommended package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mayurDayal2000/portfolio-next-app.git
   cd portfolio-next-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_CV_FILENAME=Mayur_Dayal_Resume.pdf

   # Discord Integration (for contact form notifications)
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/{id}/{token}
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🧹 Code Quality

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
# Check for issues
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Fix all issues (lint + format)
pnpm lint:fixAll

# Format code
pnpm format
```

## 📄 License

This project is for personal portfolio use. All rights reserved.

---

**Built with ❤️ by Mayur Dayal**

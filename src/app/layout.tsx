import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollProgress from "@/components/scroll-progress";
import SectionIndicator from "@/components/section-indicator";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://mayurbuilds.vercel.app/";
const siteTitle = "Mayur Dayal | Full-Stack Software Engineer | AI & ML Enthusiast";
const siteDescription =
  "Passionate Full-Stack Engineer (3+ yrs) specializing in React, Next.js, Python, & AI integration. Explore my portfolio of innovative projects. Actively seeking full-time opportunities.";

export const metadata: Metadata = {
  // Author & URL
  authors: [{ name: "Mayur Dayal", url: siteUrl }],
  creator: "Mayur Dayal",
  description: siteDescription,

  // Icons
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },

  // Keywords
  keywords: [
    "Mayur Dayal",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "AI",
    "Machine Learning",
    "ML",
    "DevOps",
    "Job Seeker",
    "Kolkata",
  ],

  // PWA / Manifest
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteUrl),

  openGraph: {
    description: siteDescription,
    images: [
      {
        alt: "Mayur Dayal - Full-Stack Engineer & AI Enthusiast",
        height: 630,
        url: "/og-preview.png",
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Mayur Dayal's Portfolio",
    title: siteTitle,
    type: "website",
    url: siteUrl,
  },

  // Crawling directives
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },

  // Base Metadata
  title: {
    default: siteTitle,
    template: "%s | Mayur Dayal", // For dynamic titles on other pages
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    creator: "@_mayur_dayal",
    description: siteDescription,
    images: ["/og-preview.png"],
    title: siteTitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme enableSystem>
          <ScrollProgress />
          <SectionIndicator />
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  async headers() {
    return [
      {
        headers: [
          //  Force HTTPS + hide server fingerprint
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // Click-jacking defence
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          //  MIME-sniff off
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // Referrer leakage
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // Permissions-Policy (feature policy)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },

          // Do NOT set CSP here to avoid multiple CSP headers; CSP is set in middleware.ts
        ],
        source: "/(.*)",
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;

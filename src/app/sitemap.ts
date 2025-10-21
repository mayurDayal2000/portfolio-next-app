import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mayurbuilds.vercel.app";

  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: siteUrl,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: `${siteUrl}/#about`,
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.9,
      url: `${siteUrl}/#projects`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${siteUrl}/#experience`,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.6,
      url: `${siteUrl}/#contact`,
    },
  ];
}

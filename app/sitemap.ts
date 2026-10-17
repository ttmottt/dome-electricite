import type { MetadataRoute } from "next";

import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { getArticles } from "@/lib/wordpress/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles(100);

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/zones-intervention"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/a-propos"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/realisations"), changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/mentions-legales"), changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...staticPages,
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cities.map((c) => ({
      url: absoluteUrl(`/electricien/${c.slug}`),
      changeFrequency: "monthly" as const,
      priority: c.distanceKm === 0 ? 0.9 : 0.8,
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/realisations/${a.slug}`),
      lastModified: a.modified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

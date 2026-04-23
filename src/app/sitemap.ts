import type { MetadataRoute } from "next";
import { locations } from "../data/locationsData";
import { insightArticles, compareArticles, servicePages } from "../data/contentHubData";

const BASE = "https://majlistudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages ────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Location pages ──────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── Insight articles ────────────────────────────────────
  const insightPages: MetadataRoute.Sitemap = insightArticles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // ── Compare articles ────────────────────────────────────
  const comparePages: MetadataRoute.Sitemap = compareArticles.map((a) => ({
    url: `${BASE}/compare/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // ── Service detail pages ────────────────────────────────
  const serviceDetailPages: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── All EN pages ────────────────────────────────────────
  const allEnPages = [
    ...staticPages,
    ...locationPages,
    ...insightPages,
    ...comparePages,
    ...serviceDetailPages,
  ];

  // ── Arabic mirrors (/ar/*) ──────────────────────────────
  const arPages: MetadataRoute.Sitemap = allEnPages.map((page) => ({
    ...page,
    url: page.url.replace(BASE, `${BASE}/ar`),
    priority: (page.priority ?? 0.5) * 0.9,
  }));

  return [...allEnPages, ...arPages];
}

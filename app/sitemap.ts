import { MetadataRoute } from "next";

const RESTAURANT_TYPES = ["fine-dining", "fast-casual", "food-truck", "bakery", "pizza", "cafe"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aimenupricer.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/menu-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/food-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/menu-pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...RESTAURANT_TYPES.map((t) => ({
      url: `${base}/menu-pricing/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

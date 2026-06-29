import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aimenupricer.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/food-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

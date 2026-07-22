import { MetadataRoute } from "next";

const RESTAURANT_TYPES = [
  "fine-dining", "fast-casual", "food-truck", "bakery", "pizza", "cafe",
  "burger", "sushi", "mexican", "italian", "chinese", "thai", "indian",
  "bbq", "seafood", "steakhouse", "sandwich", "salad", "vegan", "breakfast",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aimenupricer.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Calculators — highest SEO priority
    { url: `${base}/food-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/recipe-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/menu-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/restaurant-markup-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/restaurant-profit-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bakery-pricing-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/catering-pricing-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/coffee-shop-pricing-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/food-truck-pricing-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/delivery-platform-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // About & Compare
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/menupricer-vs-spreadsheet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/menupricer-vs-square`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/menupricer-vs-toast`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Blog
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-to-price-a-restaurant-menu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/food-cost-formula`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/restaurant-profit-margin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/delivery-platform-commission`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/recipe-yield`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/how-to-cost-a-dish`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/how-to-raise-menu-prices`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/food-cost-percentage-by-restaurant-type`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Industry pages
    { url: `${base}/menu-pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...RESTAURANT_TYPES.map((t) => ({
      url: `${base}/menu-pricing/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

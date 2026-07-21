import type { Metadata } from "next";
import MenuCostCalculatorClient from "./MenuCostCalculatorClient";

export const metadata: Metadata = {
  title: "Menu Cost Calculator — Free Menu Pricing Calculator for Restaurants | MenuPricer",
  description:
    "Free menu cost calculator for restaurant owners. Enter your ingredient costs, set your target margin, and instantly get the right menu price. Calculate menu item cost, profit margin, and food cost percentage.",
  keywords: [
    "menu cost calculator",
    "menu pricing calculator",
    "menu price calculator",
    "restaurant menu pricing calculator",
    "menu costing calculator",
    "free menu pricing calculator",
    "menu item cost calculator",
    "menu profit calculator",
    "food menu calculator",
    "how to calculate menu price",
    "calculate menu cost",
    "restaurant menu cost calculator",
  ],
  alternates: {
    canonical: "https://www.aimenupricer.com/menu-cost-calculator",
  },
  openGraph: {
    title: "Menu Cost Calculator — Free Menu Pricing Tool for Restaurants",
    description:
      "Calculate the perfect menu price in seconds. Enter ingredient cost, set your margin target, and get your ideal price — free for restaurant owners.",
    url: "https://www.aimenupricer.com/menu-cost-calculator",
  },
};

export default function MenuCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Menu Cost Calculator",
            url: "https://www.aimenupricer.com/menu-cost-calculator",
            description:
              "Free menu cost calculator for restaurant owners. Calculate menu item cost, set profit margins, and find the ideal menu price based on your ingredient costs.",
            applicationCategory: "BusinessApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I calculate the cost of a menu item?",
                acceptedAnswer: { "@type": "Answer", text: "Add up the cost of every ingredient in one serving. For each ingredient: (package cost ÷ package size) × quantity used. Sum all ingredient costs to get your menu item cost. Then divide by your target food cost percentage to get the selling price." },
              },
              {
                "@type": "Question",
                name: "What markup should a restaurant use on food?",
                acceptedAnswer: { "@type": "Answer", text: "Most restaurants use a 3–4x markup on food cost, targeting a 28–35% food cost percentage (65–72% gross margin). Fine dining targets 25–30% food cost; fast casual 28–33%. Beverages and alcohol can sustain 15–22% food cost (78–85% gross margin)." },
              },
              {
                "@type": "Question",
                name: "What is menu engineering?",
                acceptedAnswer: { "@type": "Answer", text: "Menu engineering is the process of analyzing each dish by popularity and profitability, then redesigning your menu to promote high-margin, high-popularity items (Stars), improve low-popularity high-margin items (Puzzles), reprice low-margin popular items (Plowhorses), and remove or rework unpopular low-margin items (Dogs)." },
              },
              {
                "@type": "Question",
                name: "How much should a restaurant charge for food?",
                acceptedAnswer: { "@type": "Answer", text: "Charge enough to cover food cost, labor, overhead, and generate profit. A simple formula: Menu Price = Food Cost ÷ 0.30 (for 30% food cost target). Also check competitor pricing and local market rates — your prices need to be justified by quality and experience, not just cost." },
              },
            ],
          }),
        }}
      />
      <MenuCostCalculatorClient />
    </>
  );
}

import type { Metadata } from "next";
import MenuCostCalculatorClient from "./MenuCostCalculatorClient";

export const metadata: Metadata = {
  title: "Menu Cost Calculator — Price Any Dish",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
              { "@type": "ListItem", position: 2, name: "Menu Cost Calculator", item: "https://www.aimenupricer.com/menu-cost-calculator" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Set a Menu Price from Ingredient Cost",
            description:
              "Turn a known ingredient cost into a profitable menu price by choosing a target food cost percentage, dividing, and then sanity-checking the result against your market.",
            totalTime: "PT3M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Menu Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Start with a verified plate cost",
                text: "Enter the total ingredient cost for one portion, already adjusted for yield. Pricing off an unverified cost simply produces a confident wrong answer.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Choose a target food cost percentage",
                text: "Pick the target that matches your concept: roughly 25 to 30 percent for fine dining, 28 to 33 percent for fast casual, and 15 to 22 percent for beverage-led concepts.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Divide cost by the target percentage",
                text: "Menu price equals plate cost divided by target food cost as a decimal. A $5 plate cost at a 30 percent target gives $5 divided by 0.30, or $16.67.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Check the price against your market",
                text: "The formula gives a floor, not a ceiling. If comparable restaurants nearby charge $19 for the same dish, the formula price is leaving money on the table. If they charge $13, you need a cost problem solved, not a price raised.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Round deliberately",
                text: "Round to a psychologically sensible number such as $16.95 or $17. Do not round down below your calculated floor, because that silently raises your food cost percentage on every cover.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <MenuCostCalculatorClient />
    </>
  );
}

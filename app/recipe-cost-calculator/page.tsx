import type { Metadata } from "next";
import RecipeCostCalculatorClient from "./RecipeCostCalculatorClient";

export const metadata: Metadata = {
  title: "Recipe Cost Calculator — Calculate Exact Cost Per Serving",
  description:
    "Free recipe cost calculator for restaurants. Add all ingredients, quantities, and prices — get total recipe cost, cost per serving, and ideal menu price instantly. No sign-up required.",
  keywords: [
    "recipe cost calculator",
    "recipe costing",
    "how to calculate recipe cost",
    "ingredient cost calculator",
    "cost per serving calculator",
    "menu item cost calculator",
    "restaurant recipe costing",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/recipe-cost-calculator" },
  openGraph: {
    title: "Recipe Cost Calculator — Calculate Exact Cost Per Serving",
    description:
      "Add ingredients and quantities to calculate your exact recipe cost, cost per serving, and the ideal menu price for your target margin.",
    url: "https://www.aimenupricer.com/recipe-cost-calculator",
  },
};

export default function RecipeCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Recipe Cost Calculator",
            url: "https://www.aimenupricer.com/recipe-cost-calculator",
            description:
              "Free recipe cost calculator. Add ingredients and quantities to find total cost, cost per serving, and ideal menu price.",
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
                name: "How do you calculate recipe cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add up the cost of every ingredient used in one batch of the recipe. For each ingredient: (Amount used ÷ Package size) × Package price. Sum all ingredients to get total recipe cost. Divide by number of servings to get cost per serving.",
                },
              },
              {
                "@type": "Question",
                name: "What should I charge for a recipe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide your ingredient cost per serving by your target food cost percentage. Example: $3.50 cost ÷ 0.30 (30% food cost) = $11.67 suggested menu price. Most restaurants target 28–35% food cost.",
                },
              },
              {
                "@type": "Question",
                name: "Does recipe cost include labor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recipe cost typically refers only to ingredient costs. Labor and overhead are accounted for through your food cost target percentage. A 28–32% food cost target leaves room for labor (25–30%) and overhead while maintaining profitability.",
                },
              },
            ],
          }),
        }}
      />
      <RecipeCostCalculatorClient />
    </>
  );
}

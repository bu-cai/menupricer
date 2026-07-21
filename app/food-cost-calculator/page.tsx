import type { Metadata } from "next";
import Link from "next/link";
import FoodCostCalculatorClient from "./FoodCostCalculatorClient";

export const metadata: Metadata = {
  title: "Free Food Cost Calculator for Restaurants — Calculate Food Cost Percentage",
  description:
    "Calculate your restaurant's food cost percentage instantly. Enter ingredient costs and get your food cost %, suggested menu price, and profit margin. Free tool for restaurant owners.",
  keywords: [
    "food cost calculator",
    "food cost percentage calculator",
    "restaurant food cost calculator",
    "recipe cost calculator",
    "how to calculate food cost",
    "food cost formula",
    "menu price calculator",
    "restaurant profit margin calculator",
  ],
  alternates: {
    canonical: "https://www.aimenupricer.com/food-cost-calculator",
  },
  openGraph: {
    title: "Free Food Cost Calculator for Restaurants",
    description:
      "Calculate food cost percentage instantly. Get your ideal menu price and profit margin in seconds.",
    url: "https://www.aimenupricer.com/food-cost-calculator",
  },
};

export default function FoodCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Food Cost Calculator",
            url: "https://www.aimenupricer.com/food-cost-calculator",
            description:
              "Free food cost percentage calculator for restaurant owners. Calculate the ideal menu price based on ingredient costs and target profit margin.",
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
                name: "How do you calculate food cost percentage?",
                acceptedAnswer: { "@type": "Answer", text: "Food cost percentage = (Ingredient cost ÷ Menu price) × 100. For example, if a dish costs $4 in ingredients and you sell it for $14, the food cost percentage is (4 ÷ 14) × 100 = 28.6%. Most restaurants target 28–35%." },
              },
              {
                "@type": "Question",
                name: "What is a good food cost percentage for a restaurant?",
                acceptedAnswer: { "@type": "Answer", text: "A good food cost percentage depends on restaurant type: fine dining targets 25–30%, fast casual 28–33%, coffee shops 15–22%, and steakhouses/seafood 30–38% due to expensive proteins. As a general rule, keep food cost below 35% to maintain profitability." },
              },
              {
                "@type": "Question",
                name: "How do I use food cost percentage to set menu prices?",
                acceptedAnswer: { "@type": "Answer", text: "Divide your ingredient cost by your target food cost percentage. If a dish costs $5 to make and you want 30% food cost: $5 ÷ 0.30 = $16.67. Round to $16.99 or $17. This ensures every dish contributes to your profit target." },
              },
              {
                "@type": "Question",
                name: "What is the difference between food cost and food cost percentage?",
                acceptedAnswer: { "@type": "Answer", text: "Food cost is the dollar amount spent on ingredients for one dish (e.g., $4.50). Food cost percentage expresses that cost as a percentage of the selling price (e.g., $4.50 ÷ $15 = 30%). Percentage is more useful because it scales regardless of price point." },
              },
            ],
          }),
        }}
      />
      <FoodCostCalculatorClient />
      <div className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/food-cost-formula" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Food Cost</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Food Cost Formula: Calculate Food Cost % the Right Way →</p>
            </Link>
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Menu Pricing</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu: Complete Guide →</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
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
      <FoodCostCalculatorClient />
    </>
  );
}

import type { Metadata } from "next";
import FoodTruckCalculatorClient from "./FoodTruckCalculatorClient";

export const metadata: Metadata = {
  title: "Food Truck Pricing Calculator — Price Street Food Profitably",
  description:
    "Free food truck pricing calculator. Calculate the right menu price for your food truck based on ingredient cost, prep time, truck overhead, and event fees. Built for food truck owners and operators.",
  keywords: [
    "food truck pricing calculator",
    "food truck menu pricing",
    "food truck cost calculator",
    "how to price food truck menu",
    "food truck profit calculator",
    "street food pricing calculator",
    "food truck overhead calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/food-truck-pricing-calculator" },
  openGraph: {
    title: "Food Truck Pricing Calculator — Price Street Food Profitably",
    description:
      "Calculate the right menu price for food trucks. Includes ingredients, labor, truck overhead, and event fees.",
    url: "https://www.aimenupricer.com/food-truck-pricing-calculator",
  },
};

export default function FoodTruckCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Food Truck Pricing Calculator",
            url: "https://www.aimenupricer.com/food-truck-pricing-calculator",
            description:
              "Calculate food truck menu prices based on ingredient cost, labor, truck overhead, and event fees.",
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
                name: "How do you price food truck menu items?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with ingredient cost per serving, add labor cost (prep + service time), add overhead per serving (truck payment, fuel, permits, commissary fees ÷ expected daily sales). Target 25–35% food cost. A taco costing $1.50 in ingredients should sell for $5–$6.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average profit margin for a food truck?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Food trucks typically net 6–9% profit margin. Food cost averages 28–35% of revenue. Labor 25–30%. Overhead (truck, permits, commissary, events) 15–25%. Prime cost target: below 65% of revenue.",
                },
              },
              {
                "@type": "Question",
                name: "How much overhead should a food truck charge per item?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Calculate daily fixed costs (truck payment, insurance, fuel, permits, commissary) and divide by expected daily sales. If overhead is $300/day and you sell 150 items, overhead per item is $2. This must be covered by your menu pricing.",
                },
              },
            ],
          }),
        }}
      />
      <FoodTruckCalculatorClient />
    </>
  );
}

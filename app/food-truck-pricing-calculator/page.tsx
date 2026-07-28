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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
              { "@type": "ListItem", position: 2, name: "Food Truck Pricing Calculator", item: "https://www.aimenupricer.com/food-truck-pricing-calculator" },
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
            name: "How to Price Food Truck Menu Items",
            description:
              "Price food truck items by combining plate cost with the per-event costs that vary by location: pitch fees, fuel, propane, and expected covers.",
            totalTime: "PT5M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Food Truck Pricing Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Cost the plate",
                text: "Total ingredient cost per serving, including packaging, since nearly every food truck order is served in disposable containers.",
                url: "https://www.aimenupricer.com/food-truck-pricing-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Add per-event operating costs",
                text: "Pitch or festival fees, fuel to and from the site, propane, and generator costs. These vary enormously by location, which is why a single fixed menu price serves food trucks poorly.",
                url: "https://www.aimenupricer.com/food-truck-pricing-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Estimate covers for that event",
                text: "Divide total per-event costs by realistic expected covers to get the event overhead each order must carry. A $300 festival fee across 150 covers adds $2.00 per order; across 400 covers it adds $0.75.",
                url: "https://www.aimenupricer.com/food-truck-pricing-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Set a price that works at your worst realistic turnout",
                text: "Price against a conservative cover count, not your best day. A price that only works at peak volume produces a loss every time weather or foot traffic disappoints.",
                url: "https://www.aimenupricer.com/food-truck-pricing-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Use event-tiered pricing",
                text: "High-fee festivals justify higher prices than a regular street pitch or an office park lunch service. Guests accept event pricing; running festival costs on street prices is what erodes the season's margin.",
                url: "https://www.aimenupricer.com/food-truck-pricing-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <FoodTruckCalculatorClient />
    </>
  );
}

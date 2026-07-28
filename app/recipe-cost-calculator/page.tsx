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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
              { "@type": "ListItem", position: 2, name: "Recipe Cost Calculator", item: "https://www.aimenupricer.com/recipe-cost-calculator" },
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
            name: "How to Cost a Recipe",
            description:
              "Cost a restaurant recipe from scratch by breaking it into ingredients, converting purchase units to recipe units, adjusting for yield, and dividing by the number of portions.",
            totalTime: "PT5M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Recipe Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Write down the full recipe at batch size",
                text: "Record every ingredient and quantity for one full batch, not one plate. Batch-level costing is more accurate because it matches how you actually buy and prep.",
                url: "https://www.aimenupricer.com/recipe-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Convert purchase units to recipe units",
                text: "You buy flour by the 50 lb bag but use it by the cup. Divide the case or bag price by the number of recipe units it contains to get a true cost per unit. Unit conversion errors are the single most common source of wrong recipe costs.",
                url: "https://www.aimenupricer.com/recipe-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Apply yield percentages",
                text: "Divide the as-purchased cost by the yield percentage to get edible-portion cost. Onions yield about 90 percent after peeling; whole fish can yield under 50 percent after filleting.",
                url: "https://www.aimenupricer.com/recipe-cost-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Total the batch and divide by portions",
                text: "Add every adjusted ingredient cost to get the batch cost, then divide by the number of portions the batch actually yields to get cost per portion.",
                url: "https://www.aimenupricer.com/recipe-cost-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Recheck when supplier prices change",
                text: "A recipe cost is only valid on the day you calculated it. Re-run the recipe whenever a key ingredient price moves more than about 10 percent, or on a fixed monthly schedule.",
                url: "https://www.aimenupricer.com/recipe-cost-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <RecipeCostCalculatorClient />
    </>
  );
}

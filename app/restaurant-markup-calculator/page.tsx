import type { Metadata } from "next";
import MarkupCalculatorClient from "./MarkupCalculatorClient";

export const metadata: Metadata = {
  title: "Restaurant Markup Calculator — Food Cost to Menu Price",
  description:
    "Free restaurant markup calculator. Enter your ingredient cost and markup percentage to instantly calculate your menu price, gross margin, and profit per dish. Ideal for restaurant owners and caterers.",
  keywords: [
    "restaurant markup calculator",
    "food markup calculator",
    "menu price markup",
    "how much markup on restaurant food",
    "food cost to menu price calculator",
    "restaurant gross margin calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/restaurant-markup-calculator" },
  openGraph: {
    title: "Restaurant Markup Calculator — Food Cost to Menu Price",
    description:
      "Calculate your menu price from food cost and markup %. See gross margin and profit per dish instantly.",
    url: "https://www.aimenupricer.com/restaurant-markup-calculator",
  },
};

export default function MarkupCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Restaurant Markup Calculator",
            url: "https://www.aimenupricer.com/restaurant-markup-calculator",
            description:
              "Calculate menu price from food cost and markup percentage. Get gross margin and profit per dish.",
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
                name: "What is a typical restaurant markup on food?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most restaurants mark up food 200–400%. A dish costing $3 is typically priced at $9–$12. This equates to a food cost percentage of 25–33%. Fine dining often has lower markups (higher food cost %) because of premium ingredients and experience.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between markup and margin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Markup is calculated on cost: (Price - Cost) ÷ Cost × 100. Margin is calculated on price: (Price - Cost) ÷ Price × 100. A 300% markup equals a 75% gross margin. Restaurants typically think in food cost percentage (inverse of gross margin).",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate menu price from food cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Menu Price = Ingredient Cost ÷ Target Food Cost %. Example: $4.00 cost ÷ 0.32 (32% target) = $12.50 menu price. This equals a 213% markup and 68% gross margin.",
                },
              },
            ],
          }),
        }}
      />
      <MarkupCalculatorClient />
    </>
  );
}

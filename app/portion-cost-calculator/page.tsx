import type { Metadata } from "next";
import PortionCostCalculatorClient from "./PortionCostCalculatorClient";

export const metadata: Metadata = {
  title: "Portion Cost Calculator",
  description:
    "Free portion cost calculator for restaurants. Enter batch cost and portions produced to instantly get cost per serving and your suggested menu price.",
  keywords: [
    "portion cost calculator",
    "cost per serving calculator",
    "batch recipe cost calculator",
    "portion control cost restaurant",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/portion-cost-calculator" },
  openGraph: {
    title: "Portion Cost Calculator — Batch Cost to Cost Per Serving",
    description:
      "Calculate cost per portion from batch cost and portions produced, with a suggested menu price at your target food cost.",
    url: "https://www.aimenupricer.com/portion-cost-calculator",
  },
};

export default function PortionCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Portion Cost Calculator",
            url: "https://www.aimenupricer.com/portion-cost-calculator",
            description: "Calculate cost per portion from batch cost and portions produced.",
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
                name: "What is portion cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portion cost is the ingredient cost of a single serving. It's the building block you sum across every component to get a dish's full plate cost.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate cost per portion from a batch recipe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide the total cost of the batch by the number of portions it yields. Count real portions the batch actually produced, not a theoretical number.",
                },
              },
              {
                "@type": "Question",
                name: "Why does portion cost drift over time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portion drift happens when serving sizes creep above spec without anyone deciding to change it. It's one of the most common invisible sources of rising food cost.",
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
              { "@type": "ListItem", position: 2, name: "Portion Cost Calculator", item: "https://www.aimenupricer.com/portion-cost-calculator" },
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
            name: "How to Calculate Portion Cost",
            description: "Calculate cost per portion from batch cost and portions produced.",
            totalTime: "PT1M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Portion Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Total the batch cost",
                text: "Add the cost of every ingredient in the full batch as actually made.",
                url: "https://www.aimenupricer.com/portion-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Count real portions produced",
                text: "Count the portions the batch actually yielded, not a theoretical recipe count.",
                url: "https://www.aimenupricer.com/portion-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Divide to get cost per portion",
                text: "Cost per portion equals total batch cost divided by portions produced.",
                url: "https://www.aimenupricer.com/portion-cost-calculator#step-3",
              },
            ],
          }),
        }}
      />
      <PortionCostCalculatorClient />
    </>
  );
}

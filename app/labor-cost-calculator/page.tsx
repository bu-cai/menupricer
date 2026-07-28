import type { Metadata } from "next";
import LaborCostCalculatorClient from "./LaborCostCalculatorClient";

export const metadata: Metadata = {
  title: "Labor Cost Calculator",
  description:
    "Free labor cost percentage calculator for restaurants. Enter wages, payroll tax, benefits, and revenue to instantly see your labor cost percentage and industry benchmarks.",
  keywords: [
    "labor cost calculator",
    "labor cost percentage restaurant",
    "restaurant labor cost formula",
    "labor cost percentage calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/labor-cost-calculator" },
  openGraph: {
    title: "Labor Cost Calculator — Percentage of Revenue",
    description:
      "Calculate your restaurant's labor cost percentage from wages, payroll tax, benefits, and revenue.",
    url: "https://www.aimenupricer.com/labor-cost-calculator",
  },
};

export default function LaborCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Labor Cost Calculator",
            url: "https://www.aimenupricer.com/labor-cost-calculator",
            description: "Calculate restaurant labor cost percentage from wages, payroll tax, benefits, and revenue.",
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
                name: "What is labor cost percentage in a restaurant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Labor cost percentage is total labor cost — wages, payroll tax, and benefits — divided by revenue, expressed as a percentage. It's one half of prime cost, alongside food cost percentage.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good labor cost percentage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most restaurants target 28-35% of revenue, with quick service running leaner (25-30%) and fine dining running higher (35-40%) due to specialized roles and full table service.",
                },
              },
              {
                "@type": "Question",
                name: "Should I include payroll tax and benefits in labor cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Labor cost percentage should include everything it actually costs to employ someone — base wages, payroll tax, and benefits — not just the hourly rate.",
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
              { "@type": "ListItem", position: 2, name: "Labor Cost Calculator", item: "https://www.aimenupricer.com/labor-cost-calculator" },
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
            name: "How to Calculate Labor Cost Percentage",
            description: "Calculate labor cost percentage from wages, payroll tax, benefits, and revenue.",
            totalTime: "PT2M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Labor Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Total your labor spend",
                text: "Add wages, payroll tax, and benefits for one period — everything it actually costs to employ your team, not just hourly rates.",
                url: "https://www.aimenupricer.com/labor-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Divide by revenue for the same period",
                text: "Labor cost percentage equals total labor cost divided by total revenue, times 100.",
                url: "https://www.aimenupricer.com/labor-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Compare against your service style",
                text: "Quick service typically targets 25-30%; full-service and fine dining run higher due to staffing intensity.",
                url: "https://www.aimenupricer.com/labor-cost-calculator#step-3",
              },
            ],
          }),
        }}
      />
      <LaborCostCalculatorClient />
    </>
  );
}

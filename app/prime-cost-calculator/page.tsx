import type { Metadata } from "next";
import PrimeCostCalculatorClient from "./PrimeCostCalculatorClient";

export const metadata: Metadata = {
  title: "Prime Cost Calculator",
  description:
    "Free prime cost calculator for restaurants. Enter revenue, food cost, and labor cost to instantly see your prime cost percentage and how it compares to industry benchmarks.",
  keywords: [
    "prime cost calculator",
    "restaurant prime cost",
    "prime cost formula",
    "food cost plus labor cost calculator",
    "restaurant profitability calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/prime-cost-calculator" },
  openGraph: {
    title: "Prime Cost Calculator — Food + Labor Cost in One Number",
    description:
      "Calculate your restaurant's prime cost percentage from revenue, food cost, and labor cost. See how it compares to industry benchmarks.",
    url: "https://www.aimenupricer.com/prime-cost-calculator",
  },
};

export default function PrimeCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Prime Cost Calculator",
            url: "https://www.aimenupricer.com/prime-cost-calculator",
            description:
              "Calculate restaurant prime cost percentage from revenue, food cost, and labor cost, with benchmarks by restaurant type.",
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
                name: "What is prime cost in a restaurant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prime cost is food cost plus labor cost, combined as one percentage of revenue. It's the fastest single diagnostic for restaurant health because it captures your two largest and most controllable expenses in one number.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good prime cost percentage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most healthy restaurants run prime cost between 55% and 65% of revenue. Below 55% is excellent. Above 70% usually means the business is unprofitable once rent and other overhead are covered.",
                },
              },
              {
                "@type": "Question",
                name: "How do I lower my prime cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reprice dishes running above target food cost, tighten portion control, schedule labor against forecasted covers instead of habit, and renegotiate supplier pricing on your top ingredients by spend.",
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
              { "@type": "ListItem", position: 2, name: "Prime Cost Calculator", item: "https://www.aimenupricer.com/prime-cost-calculator" },
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
            name: "How to Calculate Restaurant Prime Cost",
            description: "Calculate prime cost percentage from revenue, food cost, and labor cost.",
            totalTime: "PT2M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Prime Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Gather one period of numbers",
                text: "Pull total revenue, total food and beverage cost, and total labor cost (wages, payroll tax, benefits) for the same period — typically one month.",
                url: "https://www.aimenupricer.com/prime-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Calculate food cost percentage",
                text: "Divide food and beverage cost by revenue.",
                url: "https://www.aimenupricer.com/prime-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Calculate labor cost percentage",
                text: "Divide total labor cost by revenue.",
                url: "https://www.aimenupricer.com/prime-cost-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Add the two percentages",
                text: "Prime cost percentage is food cost percentage plus labor cost percentage. Compare the result against the 55-65% healthy range.",
                url: "https://www.aimenupricer.com/prime-cost-calculator#step-4",
              },
            ],
          }),
        }}
      />
      <PrimeCostCalculatorClient />
    </>
  );
}

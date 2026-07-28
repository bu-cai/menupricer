import type { Metadata } from "next";
import BreakEvenCalculatorClient from "./BreakEvenCalculatorClient";

export const metadata: Metadata = {
  title: "Restaurant Break-Even Calculator",
  description:
    "Free restaurant break-even calculator. Enter fixed costs, average check size, and variable cost percentage to see the revenue and covers you need to break even.",
  keywords: [
    "restaurant break even calculator",
    "break even point restaurant",
    "how many covers to break even",
    "restaurant break even analysis",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/break-even-calculator" },
  openGraph: {
    title: "Restaurant Break-Even Calculator — How Many Covers Do You Need?",
    description:
      "Calculate the revenue and covers your restaurant needs to break even, from fixed costs, average check, and variable cost percentage.",
    url: "https://www.aimenupricer.com/break-even-calculator",
  },
};

export default function BreakEvenCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Restaurant Break-Even Calculator",
            url: "https://www.aimenupricer.com/break-even-calculator",
            description: "Calculate restaurant break-even revenue and covers from fixed costs, average check, and variable cost percentage.",
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
                name: "What is the break-even point for a restaurant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The break-even point is the revenue level at which total costs equal total revenue — profit is exactly zero. Below it you lose money; above it, additional revenue drops mostly to profit.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate break-even covers per day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide monthly break-even revenue by average check size to get break-even covers for the month, then divide by days open to get a daily target.",
                },
              },
              {
                "@type": "Question",
                name: "What counts as a fixed cost vs. a variable cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fixed costs don't change with sales volume — rent, insurance, salaried management. Variable costs scale with each sale — ingredients, hourly labor tied to volume, card processing fees.",
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
              { "@type": "ListItem", position: 2, name: "Break-Even Calculator", item: "https://www.aimenupricer.com/break-even-calculator" },
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
            name: "How to Calculate Restaurant Break-Even Point",
            description: "Calculate break-even revenue and covers from fixed costs, average check, and variable cost percentage.",
            totalTime: "PT3M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Break-Even Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Separate fixed costs from variable costs",
                text: "Fixed costs don't change with volume: rent, insurance, salaried management. Variable costs scale with sales: ingredients, hourly labor, card fees.",
                url: "https://www.aimenupricer.com/break-even-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Calculate your contribution margin",
                text: "Contribution margin percentage is 100% minus your variable cost percentage of revenue.",
                url: "https://www.aimenupricer.com/break-even-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Divide fixed costs by contribution margin",
                text: "Break-even revenue equals fixed costs divided by contribution margin percentage.",
                url: "https://www.aimenupricer.com/break-even-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Convert to covers",
                text: "Divide break-even revenue by average check size to get the number of covers needed to break even.",
                url: "https://www.aimenupricer.com/break-even-calculator#step-4",
              },
            ],
          }),
        }}
      />
      <BreakEvenCalculatorClient />
    </>
  );
}

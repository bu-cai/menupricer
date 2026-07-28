import type { Metadata } from "next";
import ProfitCalculatorClient from "./ProfitCalculatorClient";

export const metadata: Metadata = {
  title: "Restaurant Profit Margin Calculator",
  description:
    "Free restaurant profit calculator. Enter your revenue, food cost, labor cost, and overhead to see net profit, profit margin, and how to improve profitability. Built for restaurant owners.",
  keywords: [
    "restaurant profit calculator",
    "restaurant net profit calculator",
    "restaurant profit margin calculator",
    "restaurant profitability calculator",
    "how to calculate restaurant profit",
    "restaurant income calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/restaurant-profit-calculator" },
  openGraph: {
    title: "Restaurant Profit Calculator — Net Profit & Margin Estimator",
    description:
      "Enter revenue, food cost, labor, and overhead to calculate your restaurant net profit and margin.",
    url: "https://www.aimenupricer.com/restaurant-profit-calculator",
  },
};

export default function ProfitCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Restaurant Profit Calculator",
            url: "https://www.aimenupricer.com/restaurant-profit-calculator",
            description:
              "Calculate restaurant net profit and margin from revenue, food cost, labor, and overhead.",
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
                name: "What is the average profit margin for a restaurant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The average net profit margin for a restaurant is 3–9%. Full-service restaurants average 3–5%, fast casual averages 6–9%, and bars and nightclubs can reach 10–15%. Many restaurants fail because they don't track all costs accurately.",
                },
              },
              {
                "@type": "Question",
                name: "What are the main costs in a restaurant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The prime cost (food + labor) typically accounts for 55–65% of revenue. Food cost: 28–35%. Labor cost: 25–35%. Overhead (rent, utilities, insurance): 5–15%. Net profit is what remains after all costs.",
                },
              },
              {
                "@type": "Question",
                name: "How can I improve my restaurant profit margin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Key levers: (1) Reduce food cost % by repricing dishes or renegotiating with suppliers. (2) Reduce labor cost % through scheduling optimization. (3) Increase check average through menu engineering. Even a 2% improvement in food cost goes directly to profit.",
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
              { "@type": "ListItem", position: 2, name: "Restaurant Profit Calculator", item: "https://www.aimenupricer.com/restaurant-profit-calculator" },
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
            name: "How to Calculate Restaurant Profit Margin",
            description:
              "Work out a restaurant's net profit margin by subtracting cost of goods sold, labor, and operating expenses from revenue, then compare against industry benchmarks.",
            totalTime: "PT4M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Restaurant Profit Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Enter total revenue for the period",
                text: "Use net sales for a full period, typically one month. Exclude sales tax, and net out comps and discounts so the figure reflects money you actually kept.",
                url: "https://www.aimenupricer.com/restaurant-profit-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Subtract cost of goods sold",
                text: "COGS equals beginning inventory plus purchases minus ending inventory. Using purchases alone instead of true COGS is the most common reason a P&L looks better than the bank account.",
                url: "https://www.aimenupricer.com/restaurant-profit-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Subtract total labor",
                text: "Include hourly wages, salaried management, payroll taxes, and benefits. Labor excluding payroll burden understates real cost by roughly 10 to 15 percent.",
                url: "https://www.aimenupricer.com/restaurant-profit-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Subtract operating expenses",
                text: "Rent, utilities, insurance, marketing, card processing, software, repairs, and supplies. Card processing in particular is frequently forgotten and runs about 2 to 3 percent of revenue.",
                url: "https://www.aimenupricer.com/restaurant-profit-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Divide net profit by revenue",
                text: "Net profit margin equals net profit divided by revenue, times 100. Full-service restaurants typically run 3 to 6 percent; anything above 10 percent is exceptional and anything negative needs immediate attention.",
                url: "https://www.aimenupricer.com/restaurant-profit-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <ProfitCalculatorClient />
    </>
  );
}

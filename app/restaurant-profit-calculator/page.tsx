import type { Metadata } from "next";
import ProfitCalculatorClient from "./ProfitCalculatorClient";

export const metadata: Metadata = {
  title: "Restaurant Profit Calculator — Net Profit & Margin Estimator",
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
      <ProfitCalculatorClient />
    </>
  );
}

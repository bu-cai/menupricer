import type { Metadata } from "next";
import DeliveryCalculatorClient from "./DeliveryCalculatorClient";

export const metadata: Metadata = {
  title: "DoorDash & Uber Eats Commission Calculator — Delivery Profit Tool",
  description:
    "Free delivery platform commission calculator. See exactly how much DoorDash, Uber Eats, and Grubhub take from each order — and calculate the menu price you need to maintain your profit margin on delivery.",
  keywords: [
    "doordash commission calculator",
    "uber eats commission calculator",
    "delivery platform fee calculator",
    "restaurant delivery profit calculator",
    "doordash restaurant fees",
    "how much does doordash charge restaurants",
    "grubhub commission calculator",
    "third party delivery markup calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/delivery-platform-calculator" },
  openGraph: {
    title: "DoorDash & Uber Eats Commission Calculator for Restaurants",
    description:
      "See how much delivery platforms take per order and calculate the price needed to keep your margin on DoorDash and Uber Eats.",
    url: "https://www.aimenupricer.com/delivery-platform-calculator",
  },
};

export default function DeliveryCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Delivery Platform Commission Calculator",
            url: "https://www.aimenupricer.com/delivery-platform-calculator",
            description:
              "Calculate how much DoorDash, Uber Eats, and Grubhub take per order, and find the right delivery menu price to protect your margin.",
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
                name: "What percentage does DoorDash take from restaurants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DoorDash charges restaurants 15–30% commission per order depending on the partnership plan: Basic plan (25–30%), Plus plan (20–25%), and Premier plan (15%). Additional fees may include payment processing (2.5–3%) and marketing promotions.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Uber Eats charge restaurants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Uber Eats charges restaurants 15–30% commission. Their Lite plan is 15% (lower delivery area), Standard plan 25%, and Plus plan 30% (with more marketing features). Payment processing adds approximately 3%.",
                },
              },
              {
                "@type": "Question",
                name: "Should restaurants charge more on delivery platforms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most restaurants add a 15–25% markup to delivery platform prices to offset commission costs and maintain the same profit margin as dine-in orders. A dish priced at $12 in-house should be $14–$15 on DoorDash to achieve the same net revenue.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate my delivery profit margin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Delivery Net Revenue = Menu Price × (1 - Commission Rate). Then: Profit = Delivery Net Revenue - Food Cost - Labor. Example: $14 price × 0.75 (25% commission) = $10.50 net. Minus $4 food cost = $6.50 gross profit vs. $8 dine-in. This is why delivery markup is essential.",
                },
              },
            ],
          }),
        }}
      />
      <DeliveryCalculatorClient />
    </>
  );
}

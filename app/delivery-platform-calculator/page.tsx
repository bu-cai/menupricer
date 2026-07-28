import type { Metadata } from "next";
import Link from "next/link";
import DeliveryCalculatorClient from "./DeliveryCalculatorClient";

export const metadata: Metadata = {
  title: "DoorDash & Uber Eats Commission Calculator",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
              { "@type": "ListItem", position: 2, name: "Delivery Platform Calculator", item: "https://www.aimenupricer.com/delivery-platform-calculator" },
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
            name: "How to Price Menu Items for Delivery Platforms",
            description:
              "Set a delivery menu price that survives platform commission by working backwards from the net payout you need rather than marking up the dine-in price.",
            totalTime: "PT4M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Delivery Platform Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Start with your dine-in price and plate cost",
                text: "Enter the price the dish sells for in-house and its ingredient cost. This establishes the margin you are trying to protect on the delivery channel.",
                url: "https://www.aimenupricer.com/delivery-platform-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Enter the platform commission rate",
                text: "Commission varies by platform and plan tier, commonly in the 15 to 30 percent range. Use your actual contracted rate, not the headline marketing rate.",
                url: "https://www.aimenupricer.com/delivery-platform-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Add packaging and payment processing",
                text: "Delivery containers, bags, and utensils are real per-order costs that dine-in service does not carry, plus roughly 3 percent payment processing.",
                url: "https://www.aimenupricer.com/delivery-platform-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Work backwards from required net payout",
                text: "Divide the net revenue you need by one minus the commission rate. To net $14 after a 30 percent commission, the listed price must be $14 divided by 0.70, or $20. Marking the dine-in price up by 30 percent does not work, because the commission applies to the marked-up price too.",
                url: "https://www.aimenupricer.com/delivery-platform-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Check the price against guest tolerance",
                text: "If the delivery-adjusted price is far above what guests will pay, the item may not belong on the delivery menu at all. Some dishes are more profitable removed from delivery than sold at a loss.",
                url: "https://www.aimenupricer.com/delivery-platform-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <DeliveryCalculatorClient />
      <div className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/delivery-platform-commission" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Delivery</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">DoorDash vs Uber Eats Commission: How Much Do They Take? →</p>
            </Link>
            <Link href="/blog/restaurant-profit-margin" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Profitability</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">What Is a Good Restaurant Profit Margin? →</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

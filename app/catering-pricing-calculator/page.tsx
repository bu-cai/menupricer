import type { Metadata } from "next";
import CateringCalculatorClient from "./CateringCalculatorClient";

export const metadata: Metadata = {
  title: "Catering Pricing Calculator — Cost Per Person & Event Pricing",
  description:
    "Free catering pricing calculator. Calculate cost per person for any event — weddings, corporate lunches, parties. Enter headcount, menu type, and labor to get accurate catering quotes instantly.",
  keywords: [
    "catering pricing calculator",
    "catering cost per person calculator",
    "catering price calculator",
    "how to price catering",
    "catering cost estimator",
    "event catering calculator",
    "wedding catering cost calculator",
    "catering quote calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/catering-pricing-calculator" },
  openGraph: {
    title: "Catering Pricing Calculator — Cost Per Person & Event Pricing",
    description:
      "Calculate catering cost per person for weddings, corporate events, and parties. Get accurate quotes based on headcount, menu, and service style.",
    url: "https://www.aimenupricer.com/catering-pricing-calculator",
  },
};

export default function CateringCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Catering Pricing Calculator",
            url: "https://www.aimenupricer.com/catering-pricing-calculator",
            description:
              "Calculate catering cost per person for any event type. Enter headcount, food cost, labor, and service style for accurate pricing.",
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
                name: "How do you calculate catering cost per person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add food cost + labor cost + overhead and supplies, then divide by number of guests. A typical formula: (Total Food Cost + Labor + Overhead) ÷ Guest Count = Cost Per Person. Apply your markup (usually 30–40%) to get the price per person you charge clients.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average catering cost per person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Catering cost per person varies widely: corporate lunch buffets average $25–$45/person, wedding receptions $85–$150+/person, cocktail parties $35–$65/person, and BBQ events $20–$40/person. These prices include food, basic service, and disposables.",
                },
              },
              {
                "@type": "Question",
                name: "How much profit should a caterer make?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Caterers typically aim for 25–35% net profit margin. Food cost should be 28–35% of the client price, labor 25–30%, overhead and supplies 10–15%. The remaining 20–35% is gross profit before business expenses.",
                },
              },
              {
                "@type": "Question",
                name: "How do you price a catering menu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Calculate food cost per person first. Then add labor (number of staff × hours × rate ÷ guest count), overhead (10–15% of food cost), and apply a 30–40% markup. Always include a gratuity option (18–22%) on the final quote.",
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
              { "@type": "ListItem", position: 2, name: "Catering Pricing Calculator", item: "https://www.aimenupricer.com/catering-pricing-calculator" },
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
            name: "How to Price a Catering Job Per Person",
            description:
              "Build a catering quote from per-guest food cost, event staffing, rentals and travel, then apply a margin that survives the extra risk catering carries.",
            totalTime: "PT8M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Catering Pricing Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Cost the menu per guest",
                text: "Total the food cost for one guest's full portion across every course. Build in an overage factor, commonly 5 to 10 percent, because catering always runs slightly over headcount.",
                url: "https://www.aimenupricer.com/catering-pricing-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Add event labor",
                text: "Count prep hours, on-site service hours, travel time, and breakdown. Staff-to-guest ratios differ sharply by service style: plated service needs roughly one server per 12 to 15 guests, buffet service far fewer.",
                url: "https://www.aimenupricer.com/catering-pricing-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Add rentals, transport, and equipment",
                text: "Linens, chafers, china, glassware, vehicle costs, and fuel. These are pass-through costs that must be recovered explicitly, not absorbed into the food price.",
                url: "https://www.aimenupricer.com/catering-pricing-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Apply a catering margin",
                text: "Catering typically targets a lower food cost percentage than restaurant service, often 25 to 30 percent, because the operation carries higher risk: weather, headcount changes, and cancellations.",
                url: "https://www.aimenupricer.com/catering-pricing-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Present the quote per person plus itemized extras",
                text: "Clients compare on the per-person number, so lead with it and itemize staffing, rentals, and service charge separately. Bundling everything into one per-head figure makes your quote look expensive against competitors who itemize.",
                url: "https://www.aimenupricer.com/catering-pricing-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <CateringCalculatorClient />
    </>
  );
}

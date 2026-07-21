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
      <CateringCalculatorClient />
    </>
  );
}

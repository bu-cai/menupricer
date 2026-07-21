import type { Metadata } from "next";
import BakeryCalculatorClient from "./BakeryCalculatorClient";

export const metadata: Metadata = {
  title: "Bakery Pricing Calculator — How to Price Baked Goods",
  description:
    "Free bakery pricing calculator. Calculate the right selling price for cakes, bread, cookies, and pastries based on ingredient cost, labor, and overhead. Used by home bakers and professional bakeries.",
  keywords: [
    "bakery pricing calculator",
    "how to price baked goods",
    "bakery cost calculator",
    "cake pricing calculator",
    "cookie pricing calculator",
    "bread pricing calculator",
    "how much to charge for baked goods",
    "baked goods cost calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/bakery-pricing-calculator" },
  openGraph: {
    title: "Bakery Pricing Calculator — Price Your Baked Goods Correctly",
    description:
      "Calculate selling price for any baked good based on ingredients, labor time, and overhead. Free tool for bakeries and home bakers.",
    url: "https://www.aimenupricer.com/bakery-pricing-calculator",
  },
};

export default function BakeryCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Bakery Pricing Calculator",
            url: "https://www.aimenupricer.com/bakery-pricing-calculator",
            description:
              "Calculate selling price for baked goods based on ingredient cost, labor, and overhead. For professional bakeries and home bakers.",
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
                name: "How do you price baked goods for sale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add ingredient cost + labor cost (your hourly rate × time spent) + overhead allocation. Then apply your target margin. Most bakeries target 25–35% food cost on ingredients alone, with labor and overhead adding 30–40% more. A cupcake costing $0.80 in ingredients might sell for $3.50–$4.50.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good profit margin for a bakery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bakery net profit margins typically range from 4–9%. Food cost percentage (ingredients only) should be 28–35%. With labor and overhead, total costs usually run 70–80% of revenue, leaving 20–30% gross margin and 4–9% net margin.",
                },
              },
              {
                "@type": "Question",
                name: "Should I include labor in my bakery pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Always include your time at a fair hourly rate. Home bakers often underprice by ignoring labor. If you spend 2 hours making 24 cookies and value your time at $20/hour, that's $0.83 in labor per cookie — before ingredients.",
                },
              },
            ],
          }),
        }}
      />
      <BakeryCalculatorClient />
    </>
  );
}

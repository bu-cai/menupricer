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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
              { "@type": "ListItem", position: 2, name: "Bakery Pricing Calculator", item: "https://www.aimenupricer.com/bakery-pricing-calculator" },
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
            name: "How to Price Bakery Products",
            description:
              "Price baked goods profitably by costing ingredients per batch, adding the labor hours that bakery pricing usually omits, allocating overhead, and dividing by yield.",
            totalTime: "PT6M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Bakery Pricing Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Cost the recipe at batch level",
                text: "Bakery recipes are batch recipes. Cost flour, butter, sugar, eggs, and leavening for the full batch, then divide by the number of finished units the batch produces.",
                url: "https://www.aimenupricer.com/bakery-pricing-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Add your labor time — this is the step most bakeries skip",
                text: "Count mixing, proofing attendance, shaping, baking, cooling, and decorating. Multiply total hands-on hours by your hourly labor rate and divide across the batch. Labor is often a larger share of a bakery item's true cost than ingredients, which is why ingredient-only pricing quietly loses money.",
                url: "https://www.aimenupricer.com/bakery-pricing-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Allocate packaging and overhead",
                text: "Add boxes, liners, labels, ribbon, and a share of oven energy and rent. Custom and decorated items should also absorb consultation and design time.",
                url: "https://www.aimenupricer.com/bakery-pricing-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Apply a margin appropriate to the channel",
                text: "Retail counter sales support a higher multiple than wholesale accounts. Wholesale typically needs a lower per-unit margin offset by volume and predictable ordering.",
                url: "https://www.aimenupricer.com/bakery-pricing-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Reprice when butter, flour, or eggs move",
                text: "Bakery margins are unusually sensitive to a handful of commodity inputs. A butter or egg price spike can erase the margin on an entire product line within one purchasing cycle.",
                url: "https://www.aimenupricer.com/bakery-pricing-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <BakeryCalculatorClient />
    </>
  );
}

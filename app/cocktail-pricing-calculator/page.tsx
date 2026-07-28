import type { Metadata } from "next";
import CocktailPricingCalculatorClient from "./CocktailPricingCalculatorClient";

export const metadata: Metadata = {
  title: "Cocktail Pricing Calculator",
  description:
    "Free cocktail pricing calculator. Enter spirit, mixer, and garnish cost to instantly get your suggested cocktail price at your target pour cost percentage.",
  keywords: [
    "cocktail pricing calculator",
    "pour cost calculator",
    "how to price cocktails",
    "bar pricing calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/cocktail-pricing-calculator" },
  openGraph: {
    title: "Cocktail Pricing Calculator — Pour Cost to Menu Price",
    description:
      "Calculate the right cocktail price from spirit, mixer, and garnish cost at your target pour cost percentage.",
    url: "https://www.aimenupricer.com/cocktail-pricing-calculator",
  },
};

export default function CocktailPricingCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Cocktail Pricing Calculator",
            url: "https://www.aimenupricer.com/cocktail-pricing-calculator",
            description: "Calculate cocktail menu price from spirit, mixer, and garnish cost at a target pour cost percentage.",
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
                name: "What is pour cost for a cocktail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour cost is the cost of the alcohol and other ingredients in a drink, as a percentage of the menu price — the beverage equivalent of food cost percentage. Most bars target 18-24% for spirit-forward cocktails.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate the cost of a cocktail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add the cost of every liquid ingredient by the amount used, plus a garnish allowance. Cost per ounce comes from bottle price divided by ounces per bottle.",
                },
              },
              {
                "@type": "Question",
                name: "Why is pour cost usually lower than food cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Alcohol carries less labor and spoilage risk than food. A 20% pour cost on cocktails is roughly equivalent in profit contribution to a 30-32% food cost on a dish.",
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
              { "@type": "ListItem", position: 2, name: "Cocktail Pricing Calculator", item: "https://www.aimenupricer.com/cocktail-pricing-calculator" },
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
            name: "How to Price a Cocktail",
            description: "Calculate cocktail menu price from ingredient cost and target pour cost percentage.",
            totalTime: "PT2M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Cocktail Pricing Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Cost the spirit",
                text: "Divide bottle price by ounces per bottle (about 25.4 oz for a 750ml bottle) to get cost per ounce, then multiply by ounces poured.",
                url: "https://www.aimenupricer.com/cocktail-pricing-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Add mixers and garnish",
                text: "Include juice, syrup, and a garnish allowance to get total ingredient cost.",
                url: "https://www.aimenupricer.com/cocktail-pricing-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Divide by target pour cost",
                text: "Menu price equals total ingredient cost divided by target pour cost percentage.",
                url: "https://www.aimenupricer.com/cocktail-pricing-calculator#step-3",
              },
            ],
          }),
        }}
      />
      <CocktailPricingCalculatorClient />
    </>
  );
}

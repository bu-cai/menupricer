import type { Metadata } from "next";
import CoffeeShopCalculatorClient from "./CoffeeShopCalculatorClient";

export const metadata: Metadata = {
  title: "Coffee Shop Pricing Calculator",
  description:
    "Free coffee shop pricing calculator. Calculate the right price for espresso, lattes, cold brew, and specialty drinks based on ingredient cost, labor, and overhead. Built for café and coffee shop owners.",
  keywords: [
    "coffee shop pricing calculator",
    "coffee drink pricing calculator",
    "espresso pricing calculator",
    "cafe pricing calculator",
    "how to price coffee drinks",
    "latte cost calculator",
    "coffee shop profit margin",
    "beverage cost calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/coffee-shop-pricing-calculator" },
  openGraph: {
    title: "Coffee Shop Pricing Calculator — Price Every Drink Correctly",
    description:
      "Calculate the right selling price for any coffee drink. Enter coffee, milk, syrup costs and see your margin instantly.",
    url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator",
  },
};

export default function CoffeeShopCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Coffee Shop Pricing Calculator",
            url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator",
            description:
              "Calculate selling price for espresso drinks, cold brew, and specialty coffee. Includes ingredient cost, labor, and overhead.",
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
                name: "What is a good profit margin for a coffee shop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Coffee shops typically achieve 25–35% gross margin on beverages. Espresso-based drinks have ingredient costs of $0.50–$1.50 but sell for $4–$7, resulting in 75–85% gross margin on the drink itself. Net profit after all expenses is usually 6–15%.",
                },
              },
              {
                "@type": "Question",
                name: "How do you calculate the cost of a coffee drink?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add the cost of: espresso (coffee beans per shot), milk or milk alternative, syrups and sweeteners, cup and lid. A standard latte typically costs $0.80–$1.50 to make. Divide by your target food cost % to get the selling price.",
                },
              },
              {
                "@type": "Question",
                name: "What percentage of coffee shop revenue is food cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Coffee beverages typically have a 15–25% food cost percentage (very low). Food items sold in cafés run 28–35%. Blended overall coffee shop food cost is usually 25–30%. This is lower than restaurants because beverages have very high margins.",
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
              { "@type": "ListItem", position: 2, name: "Coffee Shop Pricing Calculator", item: "https://www.aimenupricer.com/coffee-shop-pricing-calculator" },
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
            name: "How to Price Coffee Shop Drinks",
            description:
              "Price espresso drinks and specialty beverages by costing the shot, the milk, and the cup separately, then applying a beverage-appropriate margin.",
            totalTime: "PT4M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Coffee Shop Pricing Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Calculate cost per espresso shot",
                text: "Divide the price per pound of beans by the number of shots it yields. A pound at 18 grams per double shot yields roughly 25 doubles, so a $16 pound costs about $0.64 per double shot.",
                url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Add milk and syrup by volume",
                text: "Cost milk per ounce and multiply by the drink size. Milk, not coffee, is usually the largest ingredient cost in a large latte, and alternative milks can double that line.",
                url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Do not forget the cup",
                text: "Cup, lid, sleeve, and straw frequently total $0.20 to $0.40 per drink. On a beverage with a very low ingredient cost, packaging can exceed the coffee itself, and it is the most commonly omitted cost in coffee shop pricing.",
                url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Apply a beverage margin target",
                text: "Coffee programs typically target 15 to 22 percent beverage cost, materially lower than food, because labor per transaction and rent per square foot are high relative to ticket size.",
                url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Price add-ons deliberately",
                text: "Extra shots, alternative milks, and syrups should each carry a price that covers cost plus margin. Free or underpriced modifiers are a common silent margin leak in high-volume cafes.",
                url: "https://www.aimenupricer.com/coffee-shop-pricing-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <CoffeeShopCalculatorClient />
    </>
  );
}

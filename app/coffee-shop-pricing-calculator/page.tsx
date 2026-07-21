import type { Metadata } from "next";
import CoffeeShopCalculatorClient from "./CoffeeShopCalculatorClient";

export const metadata: Metadata = {
  title: "Coffee Shop Pricing Calculator — Price Espresso, Lattes & More",
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
      <CoffeeShopCalculatorClient />
    </>
  );
}

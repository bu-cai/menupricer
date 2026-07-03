import type { Metadata } from "next";
import MenuCostCalculatorClient from "./MenuCostCalculatorClient";

export const metadata: Metadata = {
  title: "Menu Cost Calculator — Free Menu Pricing Calculator for Restaurants | MenuPricer",
  description:
    "Free menu cost calculator for restaurant owners. Enter your ingredient costs, set your target margin, and instantly get the right menu price. Calculate menu item cost, profit margin, and food cost percentage.",
  keywords: [
    "menu cost calculator",
    "menu pricing calculator",
    "menu price calculator",
    "restaurant menu pricing calculator",
    "menu costing calculator",
    "free menu pricing calculator",
    "menu item cost calculator",
    "menu profit calculator",
    "food menu calculator",
    "how to calculate menu price",
    "calculate menu cost",
    "restaurant menu cost calculator",
  ],
  alternates: {
    canonical: "https://www.aimenupricer.com/menu-cost-calculator",
  },
  openGraph: {
    title: "Menu Cost Calculator — Free Menu Pricing Tool for Restaurants",
    description:
      "Calculate the perfect menu price in seconds. Enter ingredient cost, set your margin target, and get your ideal price — free for restaurant owners.",
    url: "https://www.aimenupricer.com/menu-cost-calculator",
  },
};

export default function MenuCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Menu Cost Calculator",
            url: "https://www.aimenupricer.com/menu-cost-calculator",
            description:
              "Free menu cost calculator for restaurant owners. Calculate menu item cost, set profit margins, and find the ideal menu price based on your ingredient costs.",
            applicationCategory: "BusinessApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <MenuCostCalculatorClient />
    </>
  );
}

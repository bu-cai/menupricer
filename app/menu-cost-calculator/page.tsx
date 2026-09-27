import type { Metadata } from "next";
import Link from "next/link";
import MenuCostCalculatorClient from "./MenuCostCalculatorClient";

export const metadata: Metadata = {
  title: "Menu Cost Calculator [Free] — Price Any Dish in 30 Seconds",
  description:
    "Free menu cost calculator for restaurant owners. Enter ingredient cost + target margin → get the right menu price instantly. No signup required. Works for any dish, any restaurant type.",
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
    title: "Menu Cost Calculator [Free] — Price Any Dish in 30 Seconds",
    description:
      "Enter ingredient cost + target margin → get the right menu price instantly. Free for restaurant owners. No signup. Works for any dish or restaurant type.",
    url: "https://www.aimenupricer.com/menu-cost-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I calculate the cost of a menu item?",
                acceptedAnswer: { "@type": "Answer", text: "Add up the cost of every ingredient in one serving. For each ingredient: (package cost ÷ package size) × quantity used. Sum all ingredient costs to get your menu item cost. Then divide by your target food cost percentage to get the selling price." },
              },
              {
                "@type": "Question",
                name: "What markup should a restaurant use on food?",
                acceptedAnswer: { "@type": "Answer", text: "Most restaurants use a 3–4x markup on food cost, targeting a 28–35% food cost percentage (65–72% gross margin). Fine dining targets 25–30% food cost; fast casual 28–33%. Beverages and alcohol can sustain 15–22% food cost (78–85% gross margin)." },
              },
              {
                "@type": "Question",
                name: "What is menu engineering?",
                acceptedAnswer: { "@type": "Answer", text: "Menu engineering is the process of analyzing each dish by popularity and profitability, then redesigning your menu to promote high-margin, high-popularity items (Stars), improve low-popularity high-margin items (Puzzles), reprice low-margin popular items (Plowhorses), and remove or rework unpopular low-margin items (Dogs)." },
              },
              {
                "@type": "Question",
                name: "How much should a restaurant charge for food?",
                acceptedAnswer: { "@type": "Answer", text: "Charge enough to cover food cost, labor, overhead, and generate profit. A simple formula: Menu Price = Food Cost ÷ 0.30 (for 30% food cost target). Also check competitor pricing and local market rates — your prices need to be justified by quality and experience, not just cost." },
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
              { "@type": "ListItem", position: 2, name: "Menu Cost Calculator", item: "https://www.aimenupricer.com/menu-cost-calculator" },
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
            name: "How to Set a Menu Price from Ingredient Cost",
            description:
              "Turn a known ingredient cost into a profitable menu price by choosing a target food cost percentage, dividing, and then sanity-checking the result against your market.",
            totalTime: "PT3M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "MenuPricer Menu Cost Calculator" }],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Start with a verified plate cost",
                text: "Enter the total ingredient cost for one portion, already adjusted for yield. Pricing off an unverified cost simply produces a confident wrong answer.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-1",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Choose a target food cost percentage",
                text: "Pick the target that matches your concept: roughly 25 to 30 percent for fine dining, 28 to 33 percent for fast casual, and 15 to 22 percent for beverage-led concepts.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-2",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Divide cost by the target percentage",
                text: "Menu price equals plate cost divided by target food cost as a decimal. A $5 plate cost at a 30 percent target gives $5 divided by 0.30, or $16.67.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-3",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Check the price against your market",
                text: "The formula gives a floor, not a ceiling. If comparable restaurants nearby charge $19 for the same dish, the formula price is leaving money on the table. If they charge $13, you need a cost problem solved, not a price raised.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-4",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Round deliberately",
                text: "Round to a psychologically sensible number such as $16.95 or $17. Do not round down below your calculated floor, because that silently raises your food cost percentage on every cover.",
                url: "https://www.aimenupricer.com/menu-cost-calculator#step-5",
              },
            ],
          }),
        }}
      />
      <MenuCostCalculatorClient />
      <div className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/menu-costing-guide" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Food Cost</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Menu Costing 101: Cost a Menu from Scratch →</p>
            </Link>
            <Link href="/blog/menu-pricing-formula" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Menu Pricing</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Menu Pricing Formula: Turn Food Cost Into a Price →</p>
            </Link>
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Menu Pricing</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu: Complete Guide →</p>
            </Link>
            <Link href="/food-cost-calculator" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Free Tool</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Free Food Cost Calculator →</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import IngredientCostCalculatorClient from "./IngredientCostCalculatorClient";

export const metadata: Metadata = {
  title: "Free Ingredient Cost Calculator for Restaurants (2026)",
  description:
    "Calculate the total ingredient cost for any recipe. Enter each ingredient, quantity, and price — get total cost per portion, suggested menu price, and gross margin instantly.",
  keywords: [
    "ingredient cost calculator",
    "ingredient pricing calculator",
    "costing ingredients calculator",
    "recipe ingredient cost",
    "ingredient price calculator",
  ],
  alternates: { canonical: "https://www.aimenupricer.com/ingredient-cost-calculator" },
  openGraph: {
    title: "Free Ingredient Cost Calculator for Restaurants",
    description:
      "Enter your recipe ingredients and get total cost per portion, suggested menu price, and gross margin in seconds.",
    url: "https://www.aimenupricer.com/ingredient-cost-calculator",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Ingredient Cost Calculator",
  url: "https://www.aimenupricer.com/ingredient-cost-calculator",
  description: "Free calculator to find the total ingredient cost for any recipe. Enter ingredients, quantities, and prices to get per-portion cost and suggested menu price.",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Ingredient Cost Calculator", item: "https://www.aimenupricer.com/ingredient-cost-calculator" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate ingredient cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ingredient cost per dish = sum of (quantity used × price per unit) for every ingredient in one portion. For example, if a dish uses 200 g of chicken at $0.020/g, that ingredient costs $4.00. Add all ingredients together to get the total food cost per portion.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find the price per unit for an ingredient?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Price per unit = Pack price ÷ Pack quantity. For example, a 1 kg bag of flour for $1.80 = $0.0018 per gram. Use your wholesale invoice prices, not retail grocery prices.",
      },
    },
    {
      "@type": "Question",
      name: "What food cost percentage should I target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most restaurants target 28–35% food cost. Fast casual aims for 25–30%. Fine dining allows up to 38%. Set your target based on your restaurant type and then divide your ingredient cost by that percentage to find the minimum selling price.",
      },
    },
    {
      "@type": "Question",
      name: "Does this calculator include labor and overhead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — this calculator covers ingredient cost only. Labor (typically 25–35% of revenue) and overhead are managed separately. The suggested menu price is based purely on hitting your ingredient food cost percentage target.",
      },
    },
  ],
};

export default function IngredientCostCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Ingredient Cost Calculator</span>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>Free Tool · MenuPricer</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Ingredient Cost Calculator
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Enter each ingredient, quantity, and price per unit. Instantly see total food cost per portion, suggested menu price, and gross margin.
            </p>
          </header>

          {/* How to use */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">How to use:</strong> Add every ingredient used in one portion. Set your target food cost %. The calculator shows your minimum selling price to hit that target.
            </p>
          </div>

          {/* Interactive calculator */}
          <IngredientCostCalculatorClient />

          {/* Explanation */}
          <div className="mt-12 space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Calculate Ingredient Cost</h2>
              <p>
                Ingredient cost (also called <em>food cost per dish</em>) is the sum of every component that goes into one portion of a menu item.
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`For each ingredient:
  Row cost = Quantity used × Price per unit

Total ingredient cost = Σ (all row costs)

Suggested menu price = Total cost ÷ Target food cost %`}</pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Finding Price Per Unit from Supplier Invoices</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Pack</th>
                      <th className="text-right py-3 pr-6 text-gray-400 font-semibold">Pack Price</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Price per unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Chicken breast, 5 kg bag", "$24.00", "$0.0048/g"],
                      ["All-purpose flour, 25 kg", "$18.00", "$0.00072/g"],
                      ["Olive oil, 4 L bottle", "$28.00", "$0.007/ml"],
                      ["Eggs, 30-count flat", "$9.00", "$0.30/pc"],
                      ["Cherry tomatoes, 1 kg punnet", "$5.50", "$0.0055/g"],
                    ].map(([pack, price, unit]) => (
                      <tr key={pack}>
                        <td className="py-3 pr-6 text-white text-sm">{pack}</td>
                        <td className="py-3 pr-6 text-right text-gray-400 font-mono text-sm">{price}</td>
                        <td className="py-3 text-right text-orange-300 font-mono text-sm">{unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Food Cost % Should You Target?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Restaurant type</th>
                      <th className="text-right py-3 pr-6 text-gray-400 font-semibold">Target range</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Typical target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Fast food / QSR", "25–30%", "28%"],
                      ["Fast casual", "28–32%", "30%"],
                      ["Casual dining", "28–35%", "32%"],
                      ["Fine dining", "30–38%", "33%"],
                      ["Bakery / café", "28–35%", "32%"],
                      ["Catering / events", "25–35%", "30%"],
                    ].map(([type, range, typical]) => (
                      <tr key={type}>
                        <td className="py-3 pr-6 text-white">{type}</td>
                        <td className="py-3 pr-6 text-right text-orange-300 font-mono">{range}</td>
                        <td className="py-3 text-right text-green-400 font-mono font-semibold">{typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do you calculate ingredient cost?",
                    a: "For each ingredient: multiply quantity used (in your portion) by the price per unit. Sum all ingredients to get total food cost per dish.",
                  },
                  {
                    q: "How do you find price per unit for an ingredient?",
                    a: "Price per unit = Pack price ÷ Pack quantity. Use your wholesale invoice, not retail grocery prices.",
                  },
                  {
                    q: "What food cost percentage should I target?",
                    a: "Most restaurants target 28–35%. Fast casual 25–30%. Fine dining up to 38%. Divide your ingredient cost by that percentage to find the minimum menu price.",
                  },
                  {
                    q: "Does this calculator include labor?",
                    a: "No — ingredient cost only. Labor (25–35%) and overhead are tracked separately as percentages of total revenue.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Tools & Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/food-cost-calculator", "Food Cost % Calculator"],
                  ["/recipe-cost-calculator", "Recipe Cost Calculator"],
                  ["/blog/how-to-cost-a-meal", "How to Cost a Meal (5-Step Guide)"],
                  ["/blog/what-is-food-cost", "What Is Food Cost?"],
                  ["/recipe-costing-template", "Free Recipe Costing Template"],
                  ["/portion-cost-calculator", "Portion Cost Calculator"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3"
                  >
                    <span className="text-gray-600">→</span>
                    {label}
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

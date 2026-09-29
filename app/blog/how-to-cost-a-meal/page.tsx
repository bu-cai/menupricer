import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "How to Cost a Meal: 5-Step Process for Restaurants & Caterers (2026)",
  description:
    "Learn how to cost a meal step by step â€?from listing ingredients to calculating food cost percentage and setting the right selling price. Includes a worked example.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-cost-a-meal" },
  openGraph: {
    title: "How to Cost a Meal: 5-Step Process for Restaurants & Caterers",
    description:
      "Step-by-step guide to costing meals for restaurants and caterers, with a full worked example and free calculator.",
    url: "https://www.aimenupricer.com/blog/how-to-cost-a-meal",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer â€?AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Cost a Meal: 5-Step Process for Restaurants & Caterers",
  description:
    "A complete guide to meal costing for restaurants â€?how to list ingredients, calculate costs, account for waste, and set profitable menu prices.",
  url: "https://www.aimenupricer.com/blog/how-to-cost-a-meal",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_PUBLISHED,
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Cost a Meal", item: "https://www.aimenupricer.com/blog/how-to-cost-a-meal" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you cost a meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To cost a meal: 1) List every ingredient in one portion. 2) Find the unit price for each ingredient. 3) Calculate the cost per ingredient (quantity Ã— unit price). 4) Add all ingredient costs to get total food cost per dish. 5) Divide by your target food cost percentage to find the selling price. For example, a dish with $4.50 ingredient cost at a 30% target = $15 menu price.",
      },
    },
    {
      "@type": "Question",
      name: "What is costing a meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meal costing (also called dish costing or recipe costing) is the process of calculating the exact dollar cost of every ingredient in a single serving of a menu item. It lets restaurants set menu prices that cover costs and deliver the target profit margin.",
      },
    },
    {
      "@type": "Question",
      name: "How much should food cost be per meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ingredient cost per meal should equal 28â€?5% of the selling price for most restaurants. Fast casual targets 25â€?0%. If your dish costs $4.50 to make and you target 30% food cost, the menu price should be $15.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for costing a meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menu Price = Total Ingredient Cost per Portion Ã· Target Food Cost %. Also: Food Cost % = Total Ingredient Cost Ã· Menu Price Ã— 100.",
      },
    },
    {
      "@type": "Question",
      name: "Do you include labor when costing a meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food costing typically covers only ingredient (raw material) cost. Labor and overhead are tracked separately as part of prime cost analysis. However, for catering or home food businesses that price per meal, including a labor factor of 15â€?5% of ingredient cost is common practice.",
      },
    },
  ],
};

const STEPS = [
  {
    n: 1,
    title: "List every ingredient in one portion",
    body: "Write down every ingredient used to make one serving â€?including garnishes, sauces, and condiments. Be precise: a tablespoon of olive oil and a pinch of salt both have a cost.",
    action: "Use your standardized recipe. If you don't have one, make a new batch and weigh/measure everything.",
  },
  {
    n: 2,
    title: "Find the unit price for each ingredient",
    body: "Pull the invoice or receipt for each item. Convert bulk pack prices to the smallest usable unit (per gram, per ml, per piece).",
    action: "Unit price = Pack price Ã· Pack quantity. E.g. $8.40 for 1 kg chicken = $0.0084 per gram.",
  },
  {
    n: 3,
    title: "Calculate cost per ingredient",
    body: "Multiply the quantity used in one portion by the unit price for each ingredient.",
    action: "Ingredient cost = Portion quantity Ã— Unit price. Repeat for every item on your list.",
  },
  {
    n: 4,
    title: "Add a yield/waste factor",
    body: "Raw ingredients lose weight when trimmed, cooked, or prepped. A 1 kg chicken breast yields about 750 g after trimming â€?a 75% yield.",
    action: "Adjusted cost = Ingredient cost Ã· Yield %. For 75% yield: $1.20 raw cost Ã· 0.75 = $1.60 costed cost.",
  },
  {
    n: 5,
    title: "Set the menu price from your target food cost %",
    body: "Divide the total ingredient cost by your target food cost percentage to get the minimum viable selling price.",
    action: "Menu Price = Total Ingredient Cost Ã· Target Food Cost %. Round up to a psychologically appealing number.",
  },
];

export default function HowToCostAMealPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">How to Cost a Meal</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide Â· {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              How to Cost a Meal: 5-Step Process for Restaurants &amp; Caterers
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Meal costing tells you exactly what each dish costs to produce so you can price it profitably. This guide walks through every step, with a full worked example.
            </p>
          </header>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-1">The core formula</p>
            <p className="text-white font-mono">Menu Price = Total Ingredient Cost Ã· Target Food Cost %</p>
            <p className="text-gray-400 text-sm mt-1">If a dish costs $4.50 to make and you target 30% food cost â†?sell it for $15.00</p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* Steps */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">The 5-Step Meal Costing Process</h2>
              <div className="space-y-5">
                {STEPS.map((s) => (
                  <div key={s.n} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {s.n}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{s.body}</p>
                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2">
                          <p className="text-orange-300 text-sm"><strong>Action:</strong> {s.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Worked example */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Worked Example: Grilled Salmon</h2>
              <p className="mb-4">
                Let&apos;s cost a single portion of Grilled Salmon with roasted vegetables and lemon butter sauce.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Ingredient</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Qty</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Unit Price</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Yield %</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Costed Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Salmon fillet", "200 g", "$0.024/g", "90%", "$5.33"],
                      ["Zucchini", "80 g", "$0.003/g", "95%", "$0.25"],
                      ["Cherry tomatoes", "60 g", "$0.006/g", "100%", "$0.36"],
                      ["Butter", "20 g", "$0.012/g", "100%", "$0.24"],
                      ["Lemon", "Â½ pc", "$0.40/pc", "100%", "$0.20"],
                      ["Olive oil", "15 ml", "$0.008/ml", "100%", "$0.12"],
                      ["Herbs & seasoning", "â€?, "â€?, "â€?, "$0.10"],
                    ].map(([ing, qty, up, yld, cost]) => (
                      <tr key={ing}>
                        <td className="py-3 pr-4 text-white">{ing}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono text-xs">{qty}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono text-xs">{up}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono text-xs">{yld}</td>
                        <td className="py-3 text-right text-orange-300 font-mono text-xs">{cost}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-orange-500/30">
                      <td colSpan={4} className="py-3 pr-4 text-white font-bold">Total ingredient cost</td>
                      <td className="py-3 text-right text-orange-400 font-bold font-mono">$6.60</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  ["Target food cost", "30%", "industry standard"],
                  ["Minimum menu price", "$22.00", "$6.60 Ã· 0.30"],
                  ["Suggested price", "$23.95", "rounded up"],
                ].map(([label, val, note]) => (
                  <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="text-orange-400 font-bold text-2xl">{val}</p>
                    <p className="text-gray-500 text-xs mt-1">{note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Yield explained */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Yield Percentage Matters</h2>
              <p>
                Yield percentage accounts for weight lost during prep â€?trimming fat, removing bones, cooking shrinkage. Ignoring yield leads to underpricing.
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Yield % = Usable Weight Ã· Raw Weight Ã— 100

Costed Ingredient Cost = Raw Cost Ã· Yield %

Example:
  Raw salmon: 220 g at $0.024/g = $5.28
  After trimming: 200 g â†?yield 91%
  Costed cost: $5.28 Ã· 0.91 = $5.80`}</pre>
              </div>
            </section>

            {/* Overhead & labor note */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Should You Include Labor in Meal Costing?</h2>
              <p>
                Traditional restaurant costing tracks only ingredient cost per dish. Labor is tracked separately as a total percentage of revenue. However, for <strong className="text-white">catering, home bakers, and food entrepreneurs</strong> pricing per-unit, including a labor factor is essential.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Cost Type</th>
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Restaurant</th>
                      <th className="text-left py-3 text-gray-400 font-semibold">Catering / Home Baker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-3 pr-6 text-white">Ingredient cost</td>
                      <td className="py-3 pr-6 text-green-400">âœ?Per dish</td>
                      <td className="py-3 text-green-400">âœ?Per unit</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white">Labor cost</td>
                      <td className="py-3 pr-6 text-gray-400">% of total revenue</td>
                      <td className="py-3 text-green-400">âœ?Per unit (hourly rate Ã— time)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white">Overhead</td>
                      <td className="py-3 pr-6 text-gray-400">Managed as fixed cost</td>
                      <td className="py-3 text-green-400">âœ?Allocated per unit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Common mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5 Common Meal Costing Mistakes</h2>
              <div className="space-y-3">
                {[
                  ["Forgetting small ingredients", "Salt, oil, garnishes, and spice blends add up. Budget a $0.10â€?.25 'mise en place' line per dish."],
                  ["Using retail prices", "Always cost from your wholesale invoices, not grocery store prices."],
                  ["Skipping yield adjustment", "Never cost raw weight as usable weight â€?you will always underprice."],
                  ["Costing once and forgetting", "Supplier prices change. Recheck every 3â€? months or after any major cost increase."],
                  ["Ignoring portion creep", "A recipe says 150 g but kitchen staff plates 180 g. That 20% over-portion erases margin silently."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-red-400 font-bold text-sm mt-0.5 flex-shrink-0">âœ?/span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-gray-400 text-sm mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do you cost a meal?",
                    a: "List every ingredient, find the unit price for each, multiply quantity Ã— unit price, add a yield factor for waste, total the costs, then divide by your target food cost % to get the selling price.",
                  },
                  {
                    q: "What is costing meals?",
                    a: "Meal costing is the process of calculating the exact ingredient cost for one serving of a menu item. It is the foundation of restaurant menu pricing.",
                  },
                  {
                    q: "How much should food cost be per meal?",
                    a: "Ingredient cost should be 28â€?5% of the selling price for most restaurants. If a dish costs $4.50, price it at $13â€?6 depending on your segment.",
                  },
                  {
                    q: "Do you include labor when costing a meal?",
                    a: "For restaurants, no â€?labor is tracked as a total % of revenue. For catering or home food businesses, yes â€?include hourly rate Ã— prep time per unit.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Cost Your Dishes in Under a Minute</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Skip the spreadsheet. Enter your ingredients and MenuPricer calculates food cost, margin, and the ideal menu price instantly â€?with AI-powered pricing analysis.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Try MenuPricer Free
              </Link>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/food-cost-formula", "Food Cost Formula Explained"],
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/recipe-costing-template", "Free Recipe Costing Template"],
                  ["/blog/menu-costing-guide", "Menu Costing Guide (7 Steps)"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                  ["/blog/how-to-price-baked-goods", "How to Price Baked Goods"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3"
                  >
                    <span className="text-gray-600">â†?/span>
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

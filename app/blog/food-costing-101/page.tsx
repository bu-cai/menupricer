import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Food Costing 101: A Beginner's Guide for Restaurants (2026)",
  description:
    "Learn food costing from scratch — what it is, why it matters, and how to calculate food cost for every dish on your menu. The complete beginner's guide.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-costing-101" },
  openGraph: {
    title: "Food Costing 101: A Beginner's Guide for Restaurants",
    description:
      "The complete beginner's guide to restaurant food costing — formulas, examples, target percentages, and common mistakes to avoid.",
    url: "https://www.aimenupricer.com/blog/food-costing-101",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Food Costing 101: A Beginner's Guide for Restaurants",
  description:
    "A complete introduction to restaurant food costing — what it means, why it matters, how to calculate food cost per dish, and how to set profitable menu prices.",
  url: "https://www.aimenupricer.com/blog/food-costing-101",
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
    { "@type": "ListItem", position: 3, name: "Food Costing 101", item: "https://www.aimenupricer.com/blog/food-costing-101" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is food costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food costing is the process of calculating how much it costs a restaurant to produce one serving of a dish, then using that number to set a profitable menu price. It involves listing every ingredient, multiplying quantity by unit cost, totaling the ingredient costs, and dividing by a target food cost percentage to find the minimum selling price.",
      },
    },
    {
      "@type": "Question",
      name: "What is the food costing formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are two key formulas: (1) Food Cost per Dish = Sum of (each ingredient quantity × unit cost); (2) Menu Price = Food Cost per Dish ÷ Target Food Cost %. For example, if a dish costs $4.20 to make and you target 30% food cost, the menu price should be at least $4.20 ÷ 0.30 = $14.00.",
      },
    },
    {
      "@type": "Question",
      name: "What food cost percentage should a restaurant target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most restaurants target 28–35% food cost. Fast casual typically aims for 28–32%. Fine dining can run up to 38% because of higher check averages. The key benchmark is prime cost (food + labor) staying under 60% of total revenue.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate food cost for a recipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "List every ingredient in the recipe with the quantity used per portion. Find the unit cost for each ingredient from your most recent supplier invoice. Multiply quantity by unit cost for each ingredient. Sum all ingredient costs — this is your food cost per dish. Divide by your target food cost percentage to get the minimum menu price.",
      },
    },
  ],
};

const STEPS = [
  {
    n: 1,
    title: "List every ingredient and quantity",
    desc: "Write down every ingredient that goes into one serving of the dish — including cooking oil, garnishes, sauces, and sides. Many beginners forget small-cost items like salt, pepper, and herbs. These add up.",
    example: `Grilled Chicken (1 portion):
  Chicken breast:    180g
  Olive oil:          10ml
  Garlic:              5g
  Lemon:             0.25 each
  Mixed herbs:         2g
  Salt & pepper:       3g`,
  },
  {
    n: 2,
    title: "Find the unit cost from your invoices",
    desc: "Use your most recent supplier invoice — not the supermarket retail price. Convert pack prices to unit costs. For example: a 5kg bag of chicken costs $22 → $4.40 per kg → $0.792 per 100g.",
    example: `Chicken breast:  $4.40/kg  → $0.0044/g
Olive oil:       $12/1L    → $0.012/ml
Garlic:          $3.20/kg  → $0.0032/g
Lemon:           $0.35 each
Mixed herbs:     $18/100g  → $0.18/g
Salt & pepper:   ~$0.05 (estimated)`,
  },
  {
    n: 3,
    title: "Multiply quantity × unit cost for each ingredient",
    desc: "Apply the unit cost to the recipe quantity for each ingredient. This gives you the cost of that ingredient for one portion.",
    example: `Chicken (180g × $0.0044):   $0.79
Olive oil (10ml × $0.012):  $0.12
Garlic (5g × $0.0032):      $0.02
Lemon (0.25 × $0.35):       $0.09
Herbs (2g × $0.18):         $0.36
Salt & pepper (est.):        $0.05
                             ─────
Total food cost:             $1.43`,
  },
  {
    n: 4,
    title: "Adjust for yield and waste",
    desc: "Raw ingredients lose weight during preparation — trimming, cooking, evaporation. The usable portion is called yield. Divide by yield % to get the true cost.",
    example: `Chicken breast yield after trimming: 92%
True cost = $0.79 ÷ 0.92 = $0.86

If including a side salad that costs $0.80:
Total corrected food cost = $1.43 + ($0.80 ÷ 0.95) = $2.27`,
  },
  {
    n: 5,
    title: "Divide by target food cost % to get menu price",
    desc: "This is the pricing formula. The result is the minimum price you can charge and still hit your target food cost percentage.",
    example: `Food cost per dish: $2.27
Target food cost %: 30%

Menu price = $2.27 ÷ 0.30 = $7.57 minimum
Round up to: $8.95 or $9.50`,
  },
];

export default function FoodCosting101Page() {
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
            <span className="text-gray-300">Food Costing 101</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Food Costing 101: A Beginner&apos;s Guide for Restaurants
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Food costing is the foundation of restaurant profitability. If you do not know what each dish costs to make, you cannot price it correctly. Here is how to do it, step by step.
            </p>
          </header>

          {/* What is food costing */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-2">What is food costing?</p>
            <p className="text-white">
              Food costing is the process of calculating the ingredient cost for one serving of a dish, then using that number to set a menu price that covers your costs and generates profit.
            </p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Two Core Formulas</h2>
              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Formula 1 — Food cost per dish</p>
                  <pre className="text-green-400 font-mono text-sm">{`Food Cost = Σ (ingredient quantity × unit cost)`}</pre>
                  <p className="text-gray-400 text-xs mt-2">Sum of every ingredient&apos;s cost for one portion</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Formula 2 — Menu price from food cost</p>
                  <pre className="text-green-400 font-mono text-sm">{`Menu Price = Food Cost ÷ Target Food Cost %`}</pre>
                  <p className="text-gray-400 text-xs mt-2">The minimum selling price to hit your target margin</p>
                </div>
              </div>
            </section>

            {/* 5 steps */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">How to Cost a Dish: 5 Steps</h2>
              <div className="space-y-6">
                {STEPS.map((s) => (
                  <div key={s.n} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {s.n}
                      </div>
                      <h3 className="text-white font-bold text-lg">{s.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{s.desc}</p>
                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                      <pre className="text-green-400 font-mono text-xs leading-relaxed whitespace-pre-wrap">{s.example}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key Terms Every Restaurant Owner Should Know</h2>
              <div className="space-y-3">
                {[
                  ["Food cost per dish", "The total ingredient cost to produce one serving. This is your starting number for everything else."],
                  ["Food cost percentage (FC%)", "Food cost expressed as a share of the selling price. FC% = (Food Cost ÷ Selling Price) × 100."],
                  ["Yield percentage", "The proportion of a raw ingredient that is usable after trimming, peeling, or cooking. A chicken breast with 92% yield means 100g raw → 92g usable."],
                  ["Prime cost", "Food cost + labor cost. Should stay under 60% of revenue for most restaurant types."],
                  ["Theoretical food cost", "What your food cost should be based on recipes and sales mix — before actual waste, theft, or over-portioning."],
                  ["Actual food cost", "What you actually spent: (Beginning Inventory + Purchases − Ending Inventory) ÷ Revenue."],
                  ["Variance", "Actual FC% − Theoretical FC%. More than 2–3% signals a problem worth investigating."],
                ].map(([term, def]) => (
                  <div key={term} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-orange-400 font-semibold text-sm flex-shrink-0 w-40">{term}</span>
                    <p className="text-gray-300 text-sm">{def}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Target % */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Food Cost % Should You Target?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Restaurant type</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Target FC%</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Price multiplier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Fast food / QSR", "25–28%", "3.6–4.0×"],
                      ["Fast casual", "28–32%", "3.1–3.6×"],
                      ["Casual dining", "28–35%", "2.9–3.6×"],
                      ["Fine dining", "30–38%", "2.6–3.3×"],
                      ["Bakery / café", "28–35%", "2.9–3.6×"],
                      ["Bar / gastropub", "22–28%", "3.6–4.5×"],
                    ].map(([type, pct, mult]) => (
                      <tr key={type}>
                        <td className="py-3 pr-4 text-white">{type}</td>
                        <td className="py-3 pr-4 text-right text-orange-400 font-mono">{pct}</td>
                        <td className="py-3 text-right text-gray-400 font-mono text-xs">{mult}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Common mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5 Beginner Mistakes in Food Costing</h2>
              <div className="space-y-3">
                {[
                  ["Using retail prices", "Always use your actual wholesale invoice price. Retail prices are 30–60% higher and will cause you to underprice."],
                  ["Skipping small ingredients", "Salt, pepper, oil, herbs, and garnishes add up to $0.20–0.50 per dish. Over 200 covers a day that is $40–100 in untracked cost."],
                  ["Forgetting yield loss", "Raw weight ≠ plated weight. Proteins lose 15–25% to cooking. Vegetables lose 10–30% to trimming. Always apply yield %."],
                  ["Costing once and forgetting", "Supplier prices change. Recost your top 20% highest-selling dishes every 3–6 months, or whenever a major ingredient cost shifts."],
                  ["Using the same FC% for every dish", "Proteins run 35–45% food cost. Beverages and desserts run 15–25%. Price each category at its own target to optimize total margin."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-red-400 font-bold text-sm mt-0.5 flex-shrink-0">✗</span>
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
                  { q: "What is food costing?", a: "The process of calculating the ingredient cost to produce one serving of a dish, then using that number to set a profitable menu price." },
                  { q: "What is the food costing formula?", a: "Two formulas: (1) Food Cost per Dish = Σ(quantity × unit cost); (2) Menu Price = Food Cost ÷ Target FC%. Example: $4.20 cost ÷ 0.30 = $14 minimum price." },
                  { q: "What food cost percentage should a restaurant target?", a: "28–35% for most restaurants. Fast casual targets 28–32%. Fine dining can run up to 38%. The key benchmark is prime cost (food + labor) under 60% of revenue." },
                  { q: "How do you calculate food cost for a recipe?", a: "List every ingredient with its quantity per portion. Find the unit cost from your supplier invoice. Multiply quantity × unit cost for each ingredient. Sum the totals. Adjust for yield. Divide by your target FC% to get the minimum menu price." },
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
              <h2 className="text-2xl font-bold text-white mb-3">Skip the Spreadsheet</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                MenuPricer does all five steps for you. Enter your ingredients, get your food cost, your minimum price, and an AI-suggested optimal price — in seconds.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Cost Your First Dish Free
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Next Steps</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/how-to-cost-a-meal", "How to Cost a Meal (5-Step Process)"],
                  ["/blog/menu-pricing-formula", "The Menu Pricing Formula"],
                  ["/blog/recipe-yield", "Recipe Yield Explained"],
                  ["/blog/ideal-food-cost-percentage", "Ideal Food Cost Percentage by Type"],
                  ["/blog/food-cost-control", "Food Cost Control Strategies"],
                  ["/ingredient-cost-calculator", "Ingredient Cost Calculator"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
                    <span className="text-gray-600">→</span>{label}
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

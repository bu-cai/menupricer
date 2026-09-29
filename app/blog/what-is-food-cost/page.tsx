import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "What Is Food Cost? Definition, Formula & How Restaurants Track It (2026)",
  description:
    "Food cost is the total dollar amount a restaurant spends on ingredients to produce its menu. Learn the definition, how to calculate it, and how it differs from food cost percentage.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/what-is-food-cost" },
  openGraph: {
    title: "What Is Food Cost? Definition, Formula & How Restaurants Track It",
    description:
      "Clear definition of food cost â€?the actual dollar spend on ingredients â€?plus formulas, benchmarks, and how to lower it.",
    url: "https://www.aimenupricer.com/blog/what-is-food-cost",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer â€?AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is Food Cost? Definition, Formula & How Restaurants Track It",
  description:
    "Food cost is the total dollar amount a restaurant spends on ingredients. This guide covers the definition, formula, the difference from food cost percentage, and how to reduce it.",
  url: "https://www.aimenupricer.com/blog/what-is-food-cost",
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
    { "@type": "ListItem", position: 3, name: "What Is Food Cost?", item: "https://www.aimenupricer.com/blog/what-is-food-cost" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost is the total dollar amount a restaurant spends on raw ingredients to produce its menu items over a given period. It is calculated as: Beginning Inventory + Purchases âˆ?Ending Inventory = Food Cost. A higher food cost means less money available for labor, overhead, and profit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between food cost and food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost is a dollar amount â€?the actual money spent on ingredients. Food cost percentage is a ratio â€?food cost divided by revenue, expressed as a percent. For example, if you spend $8,000 on food and earn $30,000 in sales, your food cost is $8,000 and your food cost percentage is 26.7%. Most restaurant benchmarking uses the percentage because it normalizes for volume.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In dollar terms, food cost should equal 28â€?5% of food revenue for most full-service restaurants. Fast casual typically targets 25â€?0%. Fine dining allows up to 38% because higher ticket prices offset the ratio. The key benchmark is the prime cost (food + labor): keep it under 60% of revenue.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost = Beginning Inventory + Food Purchases âˆ?Ending Inventory. To find food cost per dish: add up the cost of each ingredient in one portion. To find food cost percentage: divide food cost by revenue and multiply by 100.",
      },
    },
    {
      "@type": "Question",
      name: "What causes high food cost in restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main causes of high food cost are: over-portioning, food waste and spoilage, theft, incorrect purchasing quantities, supplier price increases, and inaccurate recipe costing. Tracking actual vs. theoretical food cost reveals which of these is the culprit.",
      },
    },
  ],
};

export default function WhatIsFoodCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">What Is Food Cost?</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide Â· {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              What Is Food Cost? Definition, Formula & How Restaurants Track It
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Food cost is the total dollar amount a restaurant spends on raw ingredients to produce its menu. Here is what it means, how to calculate it, and how it differs from food cost <em>percentage</em>.
            </p>
          </header>

          {/* Quick answer box */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-1">One-sentence definition</p>
            <p className="text-white text-lg font-medium">
              Food cost is the dollar amount spent on ingredients â€?calculated as Beginning Inventory + Purchases âˆ?Ending Inventory.
            </p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost: The Full Definition</h2>
              <p>
                In restaurant accounting, <strong className="text-white">food cost</strong> refers to the raw dollar amount you spend on food ingredients during a period. It is one component of your Cost of Goods Sold (COGS) and appears on your Profit & Loss statement before labor and overhead.
              </p>
              <p className="mt-3">
                Food cost answers the question: <em>"How much did we spend on food this week/month?"</em> It is a direct measure of purchasing efficiency, portioning discipline, and waste control.
              </p>
              <div className="mt-5 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <p className="text-orange-400 text-sm font-semibold mb-3">The food cost formula</p>
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Food Cost =
  Beginning Inventory
+ Food Purchases During Period
âˆ?Ending Inventory`}</pre>
                <p className="text-gray-500 text-sm mt-3">
                  Example: $5,200 beginning + $12,000 purchases âˆ?$4,800 ending = <strong className="text-white">$12,400 food cost</strong>
                </p>
              </div>
            </section>

            {/* Section 2: food cost vs food cost % */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost vs. Food Cost Percentage</h2>
              <p>
                These two terms are related but measure different things. Most restaurant operators use both.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Metric</th>
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">What it measures</th>
                      <th className="text-left py-3 text-gray-400 font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-3 pr-6 text-white font-medium">Food Cost ($)</td>
                      <td className="py-3 pr-6">Actual dollars spent on ingredients</td>
                      <td className="py-3 text-orange-300">$12,400 this month</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white font-medium">Food Cost %</td>
                      <td className="py-3 pr-6">Ingredient spend as share of revenue</td>
                      <td className="py-3 text-orange-300">31% of $40,000 revenue</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white font-medium">Ideal Food Cost %</td>
                      <td className="py-3 pr-6">Theoretical % if recipes are followed perfectly</td>
                      <td className="py-3 text-orange-300">28% (target)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white font-medium">Variance</td>
                      <td className="py-3 pr-6">Actual minus ideal â€?reveals waste/theft</td>
                      <td className="py-3 text-orange-300">3% gap = $1,200 lost</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Benchmarking uses the percentage because it normalizes for volume. A restaurant doing $200,000/month and one doing $50,000/month can both target 30% food cost even though the dollar amounts are very different.
              </p>
            </section>

            {/* Section 3: per-dish food cost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost Per Dish</h2>
              <p>
                Beyond the period-level formula, operators track food cost at the <strong className="text-white">dish level</strong> to price menus correctly. For a single menu item:
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm">{`Dish Food Cost = Î£ (Ingredient Quantity Ã— Ingredient Unit Price)`}</pre>
                <p className="text-gray-500 text-sm mt-3">
                  Example â€?Margherita Pizza: flour $0.35 + tomatoes $0.60 + mozzarella $1.40 + olive oil $0.25 = <strong className="text-white">$2.60 food cost per dish</strong>
                </p>
              </div>
              <p className="mt-4">
                From there, apply your target food cost percentage to find the right selling price:
              </p>
              <div className="mt-3 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm">{`Menu Price = Dish Food Cost Ã· Target Food Cost %
Pizza example: $2.60 Ã· 0.30 = $8.67 â†?round to $8.99`}</pre>
              </div>
            </section>

            {/* Section 4: target ranges */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost Benchmarks by Restaurant Type</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Restaurant Type</th>
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Target Food Cost %</th>
                      <th className="text-left py-3 text-gray-400 font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Fast food / QSR", "25â€?0%", "High volume, standardized recipes"],
                      ["Fast casual", "28â€?2%", "Better ingredients, moderate tickets"],
                      ["Casual dining", "28â€?5%", "Full service, mixed menu"],
                      ["Fine dining", "30â€?8%", "Premium ingredients, high ticket price"],
                      ["Pizza / Italian", "25â€?0%", "High-margin dough base"],
                      ["Bakery / cafÃ©", "28â€?5%", "Labor-intensive, specialty products"],
                      ["Catering", "25â€?5%", "Volume purchasing offsets cost"],
                    ].map(([type, target, why]) => (
                      <tr key={type}>
                        <td className="py-3 pr-6 text-white">{type}</td>
                        <td className="py-3 pr-6 text-orange-300 font-mono">{target}</td>
                        <td className="py-3 text-gray-400 text-xs">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: causes of high food cost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Causes High Food Cost?</h2>
              <p>When actual food cost exceeds your theoretical (ideal) food cost, the gap is caused by one or more of these:</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  ["Over-portioning", "Staff serving larger portions than the recipe specifies"],
                  ["Food waste & spoilage", "Ordering too much, poor FIFO rotation"],
                  ["Theft", "Employee theft is estimated to cause 4â€?% of restaurant losses"],
                  ["Incorrect purchasing", "Buying at retail instead of wholesale prices"],
                  ["Supplier price increases", "Not repricing menu after cost increases"],
                  ["Untested recipes", "Costing guesses instead of measured ingredients"],
                ].map(([cause, desc]) => (
                  <div key={cause} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <p className="text-white font-semibold text-sm mb-1">{cause}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: prime cost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost and Prime Cost</h2>
              <p>
                Food cost alone does not tell the full story. Restaurant profitability is better measured by <strong className="text-white">prime cost</strong> â€?the sum of food cost and labor cost.
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm">{`Prime Cost = Food Cost + Labor Cost
Target: Prime Cost < 60% of revenue

Example:
  Food cost %:  30%
  Labor cost %: 28%
  Prime cost %: 58% âœ?(healthy)`}</pre>
              </div>
              <p className="mt-4">
                A restaurant with a 28% food cost but 38% labor cost has a 66% prime cost â€?unsustainable. Both numbers must be managed together.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the difference between food cost and food cost percentage?",
                    a: "Food cost is a dollar amount (money spent on ingredients). Food cost percentage is that dollar amount divided by revenue â€?a ratio used for benchmarking across different-sized restaurants.",
                  },
                  {
                    q: "What is a good food cost for a restaurant?",
                    a: "Most full-service restaurants target 28â€?5% food cost percentage. Fast casual targets 25â€?0%. The key benchmark is prime cost (food + labor) staying below 60% of revenue.",
                  },
                  {
                    q: "How do you calculate food cost?",
                    a: "Period food cost = Beginning Inventory + Purchases âˆ?Ending Inventory. Per-dish food cost = sum of (ingredient quantity Ã— unit price) for all components in one serving.",
                  },
                  {
                    q: "What causes high food cost in restaurants?",
                    a: "Over-portioning, food waste, theft, incorrect purchasing quantities, and failing to reprice menus after supplier cost increases are the most common causes.",
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
              <h2 className="text-2xl font-bold text-white mb-3">Calculate Your Food Cost in Seconds</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Enter your ingredients and let MenuPricer calculate your dish cost, ideal selling price, and target food cost percentage automatically.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Try the Free Calculator
              </Link>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/blog/food-cost-formula", "Food Cost Formula Explained"],
                  ["/blog/food-cost-management", "Food Cost Management Strategies"],
                  ["/blog/what-should-food-cost-be", "What Should Food Cost Be?"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                  ["/blog/menu-costing-guide", "Menu Costing Guide"],
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

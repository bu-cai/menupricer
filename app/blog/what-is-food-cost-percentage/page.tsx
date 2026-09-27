import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-27";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "What Is Food Cost Percentage? Definition, Formula, and Targets (2026)",
  description:
    "Food cost percentage is the share of a menu price that goes to ingredients. Learn the formula, what good looks like for different restaurant types, and how to lower it.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/what-is-food-cost-percentage" },
  openGraph: {
    title: "What Is Food Cost Percentage? Definition, Formula, and Targets",
    description:
      "The complete guide to food cost percentage — what it means, how to calculate it, and what target to aim for.",
    url: "https://www.aimenupricer.com/blog/what-is-food-cost-percentage",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is Food Cost Percentage? Definition, Formula, and Targets",
  description:
    "Food cost percentage is the share of a menu price that goes to ingredients. This guide covers the formula, industry benchmarks, and how to lower yours.",
  url: "https://www.aimenupricer.com/blog/what-is-food-cost-percentage",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is Food Cost Percentage?",
      item: "https://www.aimenupricer.com/blog/what-is-food-cost-percentage",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost percentage is the proportion of a menu item's selling price that is consumed by its ingredient cost. If a dish costs $4 to make and sells for $14, the food cost percentage is 28.6%. It is one of the most important numbers in restaurant finance because it directly controls gross profit: a lower food cost percentage means more money available for labor, overhead, and profit.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost percentage for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most full-service restaurants, a food cost percentage between 28% and 35% is considered healthy. Fast-casual and counter service restaurants often run 25–30% because portion sizes and waste are more controlled. Fine dining typically runs 25–35% but compensates with higher average check sizes. Bakeries and cafes often target 25–30% because baked goods have predictable ingredient lists. The right target for any business depends on its labor percentage and overhead; food cost cannot be evaluated in isolation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost percentage = (ingredient cost per portion ÷ selling price) × 100. For example, if a burger uses $3.50 in ingredients and sells for $13, the food cost percentage is (3.50 ÷ 13) × 100 = 26.9%. The inverse — the amount left after ingredients — is the gross margin: 73.1% in this case.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between food cost percentage and actual food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theoretical food cost percentage is calculated from your recipes — it assumes perfect portioning, no waste, and no spoilage. Actual food cost percentage is calculated from what you actually spent on food against what you sold, usually measured by taking inventory at the start and end of a period. The gap between theoretical and actual — commonly 2–5 percentage points in a well-run kitchen — represents waste, over-portioning, theft, and comps.",
      },
    },
    {
      "@type": "Question",
      name: "How do you lower food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five most effective levers are: (1) reprice underpriced dishes so the selling price reflects current ingredient costs; (2) reduce portion sizes slightly on high-cost items without changing the perceived value; (3) engineer the menu so you sell more of your high-margin items; (4) reduce waste through better prep scheduling and portion control; (5) negotiate supplier contracts or change suppliers for your highest-volume ingredients. Repricing is usually the fastest lever — it requires no operational change and takes effect immediately.",
      },
    },
  ],
};

export default function WhatIsFoodCostPercentagePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Food Cost</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime={DATE_PUBLISHED} className="text-xs text-gray-400">Updated {DATE_DISPLAY}</time>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">Reviewed by the MenuPricer Team</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          What Is Food Cost Percentage?
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Food cost percentage is the share of a menu item&apos;s selling price that goes to ingredients. It is one number that tells you whether your prices are working — and every restaurant operator should know how to calculate it.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Food cost percentage: the definition</h2>
            <p>
              Food cost percentage measures how much of your menu price is consumed by ingredients.
              If you sell a burger for $14 and the ingredients cost $4, you kept $10 — a food cost
              percentage of 28.6%.
            </p>
            <p className="mt-3">
              It is expressed as a percentage rather than a dollar amount because that makes it
              comparable across dishes of different prices, across different-sized restaurants, and
              across time periods as your menu evolves.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 my-4 text-center">
              <p className="font-mono text-lg text-green-400 font-bold">Food Cost % = (Ingredient Cost ÷ Menu Price) × 100</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p className="mb-1">Ingredient cost: $4.00</p>
              <p className="mb-1">Menu price: $14.00</p>
              <p>($4 ÷ $14) × 100 = <strong className="text-2xl text-orange-600">28.6%</strong> food cost</p>
              <p className="text-orange-500 text-xs mt-1">Gross margin: 71.4%</p>
            </div>
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
              Food cost percentage and gross margin always sum to 100%. A 28% food cost = 72% gross
              margin. Both describe the same dish — one from the cost side, one from the revenue side.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What counts as &ldquo;ingredient cost&rdquo;</h2>
            <p>
              Ingredient cost is every consumable that goes into the dish as it leaves your kitchen:
              the protein, the vegetables, sauces, oils, garnishes, and the container or paper if it
              is a takeaway item. It does not include labor, utilities, or overhead — those are
              accounted for separately in prime cost and contribution margin analysis.
            </p>
            <p className="mt-3">
              Ingredient cost should reflect the portion size you actually serve, not the package
              size you buy. A chicken breast may cost $6 per pound on invoice, but if your portion
              is 6 oz after trimming (a yield loss), the cost per portion is:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
              <p className="font-mono text-sm text-gray-700">
                $6/lb ÷ 16 oz × 6 oz served = $2.25 per portion
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Always cost to the portion served, not the raw purchase unit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Target food cost percentages by restaurant type</h2>
            <p>There is no universal target — the right number depends on your concept, average check size, and how your labor cost balances against it.</p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Restaurant Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical Target Range</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Full-service restaurant", "28–35%", "Higher check size supports more ingredient cost per dish"],
                    ["Fast-casual / counter service", "25–30%", "Lower labor cost allows tighter food cost targets"],
                    ["Fine dining", "25–35%", "Premium ingredients offset by high average check"],
                    ["Bakery / café", "25–30%", "Predictable batch costs and strong markup on beverages"],
                    ["Food truck", "28–35%", "Simplified menu limits waste; lower overhead than a brick-and-mortar"],
                    ["Catering", "25–35%", "Varies with event size and fixed-price packaging"],
                    ["Bar / pub (food)", "25–30%", "Beverage margin subsidizes tighter food cost targets"],
                  ].map(([type, range, why], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{type}</td>
                      <td className="px-4 py-3 text-orange-600 font-bold border-b border-gray-100">{range}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
              These are benchmarks, not rules. A bakery running at 35% is not automatically in
              trouble if its labor cost is 20%. Evaluate food cost in the context of your full
              cost structure, not as a standalone number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Theoretical vs. actual food cost percentage</h2>
            <p>
              There are two versions of food cost percentage, and the gap between them is one of the
              most useful numbers in restaurant management.
            </p>
            <div className="space-y-3 my-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">Theoretical food cost %</p>
                <p className="text-sm text-gray-600">
                  Calculated from your recipes. Assumes every dish is made exactly to spec — correct
                  portion sizes, no waste, no spoilage. This is the best you could possibly do.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">Actual food cost %</p>
                <p className="text-sm text-gray-600">
                  Calculated from your purchases and inventory. Uses: (Opening inventory + Purchases − Closing inventory) ÷ Sales. This reflects reality — including waste, spoilage, over-portioning, comps, and theft.
                </p>
              </div>
            </div>
            <p>
              A gap of 1–3 percentage points between theoretical and actual is normal in a well-run
              kitchen. Consistently more than 4–5 points suggests a portioning problem, a waste
              problem, or a shrinkage issue worth investigating.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to lower your food cost percentage</h2>
            <p>In order of typical impact:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-3">
              <li>
                <strong className="text-gray-900">Reprice underpriced dishes.</strong> If your ingredient costs have risen since you last set prices, the fastest fix is raising prices rather than cutting portions. A dish that ran at 28% two years ago may be at 38% today if you have not repriced it.
              </li>
              <li>
                <strong className="text-gray-900">Tighten portion sizes on high-cost items.</strong> A 10% reduction in protein portion size is often invisible to guests but drops cost per dish meaningfully.
              </li>
              <li>
                <strong className="text-gray-900">Engineer your menu toward high-margin items.</strong> Promote dishes with low food cost percentage, position them well, and make the high-cost items less prominent.
              </li>
              <li>
                <strong className="text-gray-900">Reduce prep waste.</strong> Better forecasting and prep scheduling reduce the gap between theoretical and actual food cost.
              </li>
              <li>
                <strong className="text-gray-900">Renegotiate your highest-volume ingredients.</strong> For a restaurant, the top five ingredients by spend typically represent 60–70% of total food cost. A 5% reduction on those five has more impact than optimizing everything else combined.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Food cost percentage vs. prime cost</h2>
            <p>
              Food cost percentage only tells half the story. The other half is labor. Prime cost —
              food cost plus labor cost — is the number that more accurately reflects whether a
              restaurant is viable.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Prime cost guideline</p>
              <p className="font-mono text-sm text-gray-700">Prime Cost = Food Cost % + Labor Cost %</p>
              <p className="text-sm text-gray-600 mt-2">
                A prime cost below 60% is generally sustainable for a full-service restaurant. Below
                55% is healthy. Above 65% and the remaining 35% has to cover rent, utilities,
                marketing, and everything else — leaving very little margin.
              </p>
            </div>
            <p>
              This is why a food cost percentage of 35% is not automatically a problem if your labor
              cost is 25% (prime cost of 60%), but a food cost of 30% is still a problem if your
              labor is 40% (prime cost of 70%).
            </p>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center my-12">
          <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-2">Try it now</p>
          <h2 className="text-2xl font-bold text-white mb-3">Calculate food cost percentage for your dishes</h2>
          <p className="text-orange-100 mb-5">
            Type a dish name and get the ingredient cost estimate, suggested price tiers, and food
            cost percentage for each — in under 30 seconds. Free for your first 5 dishes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Price My First Dish Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQ_SCHEMA.mainEntity.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Step-by-step calculation with worked examples." },
              { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "Detailed benchmarks for 10 different restaurant concepts." },
              { href: "/blog/markup-vs-margin", title: "Markup vs. Margin", desc: "Why food cost percentage and gross margin describe the same number differently." },
              { href: "/blog/prime-cost-restaurant", title: "Restaurant Prime Cost", desc: "How food cost and labor cost combine into the most important number in your P&L." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-gray-100 mt-8 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <p className="text-xs text-gray-400">© 2026 MenuPricer. AI-powered menu pricing for restaurant owners.</p>
        </div>
      </footer>
    </div>
  );
}

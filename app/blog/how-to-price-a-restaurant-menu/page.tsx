import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Price a Restaurant Menu: The Complete Guide (2026)",
  description:
    "Step-by-step guide to pricing a restaurant menu. Covers food cost percentage, markup formula, pricing tiers, and delivery platform pricing — with real examples for every dish type.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-price-a-restaurant-menu" },
  openGraph: {
    title: "How to Price a Restaurant Menu: The Complete Guide",
    description: "Step-by-step formula for calculating food cost and setting profitable menu prices — with examples.",
    url: "https://www.aimenupricer.com/blog/how-to-price-a-restaurant-menu",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Restaurant owner pricing menu with AI tool" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Price a Restaurant Menu: The Complete Guide (2026)",
  description: "Step-by-step guide to pricing a restaurant menu using food cost percentage, markup formula, pricing tiers, and delivery platform pricing.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-price-a-restaurant-menu",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Price a Restaurant Menu", item: "https://www.aimenupricer.com/blog/how-to-price-a-restaurant-menu" },
  ],
};

export default function HowToPriceMenuPost() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
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
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Menu Pricing</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime="2026-07-01" className="text-xs text-gray-400">Updated July 2026</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          How to Price a Restaurant Menu: The Complete Guide
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Most restaurant owners set menu prices by copying competitors or guessing. The result: dishes that look profitable but aren't. This guide gives you the exact formula professional operators use — and how to calculate the right price for every item on your menu.
        </p>

        {/* TOC */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">In this guide</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            {[
              "The menu pricing formula",
              "Step 1: Calculate your food cost",
              "Step 2: Set your target food cost percentage",
              "Step 3: Calculate the menu price",
              "Step 4: Price for delivery platforms",
              "Step 5: Test and adjust",
              "Menu pricing by restaurant type",
              "Common pricing mistakes to avoid",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-400 font-bold shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The menu pricing formula</h2>
            <p>There are two equivalent ways to express the menu pricing formula:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400 space-y-2">
              <p>Menu Price = Food Cost ÷ Target Food Cost %</p>
              <p className="text-gray-500">— or —</p>
              <p>Menu Price = Food Cost × (1 ÷ Target Food Cost %)</p>
            </div>
            <p>Example: A dish with $4 in ingredient costs, targeting 30% food cost:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100">
              <p className="font-mono text-sm text-orange-700">$4.00 ÷ 0.30 = <strong className="text-xl">$13.33</strong></p>
              <p className="text-sm text-orange-600 mt-1">Round to $13.50 or $14.00</p>
            </div>
            <p>That's the complete formula. Everything else is about choosing the right food cost percentage and accurately calculating your ingredient costs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 1: Calculate your food cost</h2>
            <p>Food cost is the total cost of all ingredients that go into one portion of a dish. It includes every ingredient: the main protein, supporting vegetables, sauces, garnishes, and even the cooking oil.</p>
            <p className="mt-3">To calculate food cost accurately:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>List every ingredient in the dish</li>
              <li>Record the package size and cost you paid (from your invoice)</li>
              <li>Calculate cost per unit (e.g., cost per gram, per oz, per each)</li>
              <li>Multiply cost per unit × quantity used in the recipe</li>
              <li>Add all ingredient costs together</li>
            </ol>
            <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Example: Chicken Tikka Masala</p>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-2 font-semibold">Ingredient</th>
                  <th className="pb-2 font-semibold text-right">Cost/portion</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Chicken breast (6oz)", "$1.80"],
                    ["Canned tomatoes (4oz)", "$0.45"],
                    ["Heavy cream (2oz)", "$0.30"],
                    ["Spices + aromatics", "$0.35"],
                    ["Rice (6oz)", "$0.22"],
                    ["Naan bread (1pc)", "$0.40"],
                  ].map(([ing, cost]) => (
                    <tr key={ing}><td className="py-1.5 text-gray-600">{ing}</td><td className="py-1.5 text-right font-mono text-gray-700">{cost}</td></tr>
                  ))}
                  <tr className="font-bold text-gray-900">
                    <td className="pt-2">Total food cost</td>
                    <td className="pt-2 text-right font-mono text-orange-600">$3.52</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 2: Set your target food cost percentage</h2>
            <p>Food cost percentage (food cost ÷ menu price × 100) is the most important metric in restaurant pricing. Different restaurant types target different percentages:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Restaurant Type</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Target Food Cost</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Gross Margin</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Fine dining", "25–30%", "70–75%"],
                    ["Casual dining", "28–33%", "67–72%"],
                    ["Fast casual", "28–32%", "68–72%"],
                    ["Pizza", "22–28%", "72–78%"],
                    ["Café / coffee shop", "18–25%", "75–82%"],
                    ["Food truck", "28–35%", "65–72%"],
                    ["Bakery", "25–32%", "68–75%"],
                    ["BBQ / steakhouse", "30–38%", "62–70%"],
                  ].map(([type, fc, gm]) => (
                    <tr key={type} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-gray-700">{type}</td>
                      <td className="px-4 py-2.5 text-gray-600">{fc}</td>
                      <td className="px-4 py-2.5"><span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-xs">{gm}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>A lower food cost percentage means more money left over to cover labor, rent, and profit. Coffee shops can run 18–20% because beverage ingredients are cheap. Steakhouses run 35%+ because beef is expensive.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 3: Calculate the menu price</h2>
            <p>Using our Chicken Tikka Masala example ($3.52 food cost) at a 30% target food cost:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400 space-y-1">
              <p>$3.52 ÷ 0.30 = $11.73</p>
              <p className="text-gray-400 text-xs mt-2">→ Round up to $12.00 or $12.50</p>
            </div>
            <p>Most operators calculate three price points — Budget, Standard, and Premium — giving them flexibility to position the same dish differently across formats:</p>
            <div className="grid grid-cols-3 gap-3 my-4">
              {[
                { tier: "Budget", fc: "35%", formula: "$3.52 ÷ 0.35", price: "$10.06", note: "Delivery & promotions" },
                { tier: "Standard", fc: "30%", formula: "$3.52 ÷ 0.30", price: "$11.73", note: "Dine-in menu anchor" },
                { tier: "Premium", fc: "25%", formula: "$3.52 ÷ 0.25", price: "$14.08", note: "Special occasions" },
              ].map((t) => (
                <div key={t.tier} className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">{t.tier}</p>
                  <p className="text-xs text-gray-400 mb-2">{t.formula}</p>
                  <p className="text-2xl font-black text-gray-900">{t.price}</p>
                  <p className="text-xs text-gray-400 mt-1">{t.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 4: Price for delivery platforms</h2>
            <p>DoorDash, Uber Eats, and Grubhub charge 15–30% commission. If your dine-in price is $12 and DoorDash takes 25%:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400 space-y-1">
              <p>$12.00 × (1 − 0.25) = $9.00 net revenue</p>
              <p className="text-red-400">$9.00 − $3.52 food cost = $5.48 gross profit</p>
              <p className="text-gray-400 text-xs mt-2">vs. $8.48 gross profit at dine-in</p>
            </div>
            <p>To protect your margin on delivery, price the item 20–25% higher on delivery platforms:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100">
              <p className="font-mono text-sm text-orange-700">Delivery price: $12.00 ÷ (1 − 0.25) = <strong>$16.00</strong></p>
              <p className="text-sm text-orange-600 mt-1">At $16 delivery price: $16 × 0.75 = $12 net — matching dine-in revenue</p>
            </div>
            <p>Most platforms now allow separate delivery menus. Set your delivery prices 15–25% higher than dine-in and clearly label them in the app.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 5: Test and adjust</h2>
            <p>Menu pricing is not a one-time exercise. Review your food cost every month and adjust prices quarterly. Key triggers to reprice:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>A key ingredient rises more than 10% in cost</li>
              <li>Your food cost % for a dish exceeds your target by 3%+</li>
              <li>A competitor changes prices significantly in your market</li>
              <li>You change suppliers or portion sizes</li>
              <li>You update a recipe</li>
            </ul>
            <p className="mt-4">A 1% improvement in food cost across your full menu can add $15,000–$40,000 in annual profit for a typical independent restaurant.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common pricing mistakes to avoid</h2>
            <div className="space-y-4">
              {[
                { mistake: "Copying competitor prices without knowing their costs", fix: "Your costs are different from theirs. Start with your actual ingredient costs and work backward to price." },
                { mistake: "Only calculating food cost on the main protein", fix: "Include every ingredient: sauces, garnishes, starch, cooking oil. Missing ingredients undercount food cost by 15–30%." },
                { mistake: "Using the same food cost target for every dish", fix: "Price high-cost proteins at 28–32%, offset with 18–22% food cost beverages and sides. Target a blended average, not a per-item target." },
                { mistake: "Never updating prices after costs change", fix: "Set a quarterly calendar reminder to review food cost on your top 10 items. Supplier price increases are a common cause of margin erosion." },
                { mistake: "Pricing delivery the same as dine-in", fix: "Add 15–25% to delivery prices to offset platform commissions. Most guests understand and accept delivery pricing premiums." },
              ].map((item) => (
                <div key={item.mistake} className="bg-white rounded-xl border border-gray-200 p-5">
                  <p className="text-sm font-bold text-red-600 mb-1.5">❌ {item.mistake}</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-green-600">✓ Fix:</span> {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-orange-500 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Skip the math — let AI do it</h2>
          <p className="text-orange-100 mb-6 text-sm">Type a dish name and MenuPricer calculates food cost, gross margin, and 3 pricing tiers in 30 seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
          <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
        </div>

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/food-cost-formula" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Food Cost</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Food Cost Formula: Calculate Food Cost Percentage →</p>
            </Link>
            <Link href="/food-cost-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Food Cost Calculator — Free Online Tool →</p>
            </Link>
            <Link href="/blog/restaurant-profit-margin" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Profitability</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">What Is a Good Restaurant Profit Margin? →</p>
            </Link>
            <Link href="/compare/menupricer-vs-spreadsheet" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Compare</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">MenuPricer vs Spreadsheets for Pricing →</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/menu-pricing" className="hover:text-orange-500">By Restaurant Type</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

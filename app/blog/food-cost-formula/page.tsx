import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Food Cost Formula: How to Calculate Food Cost Percentage (2026)",
  description:
    "The exact food cost formula restaurant owners use to calculate food cost percentage per dish and across the full menu — with examples, benchmarks, and a free calculator.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-cost-formula" },
  openGraph: {
    title: "Food Cost Formula: Calculate Food Cost Percentage",
    description: "The exact formula to calculate food cost per dish and food cost percentage — with examples for every restaurant type.",
    url: "https://www.aimenupricer.com/blog/food-cost-formula",
  },
};

export default function FoodCostFormulaPost() {
  return (
    <div className="min-h-screen bg-white">
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
          <span className="text-xs text-gray-400">6 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">Updated July 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Food Cost Formula: Calculate Food Cost Percentage the Right Way
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Food cost percentage is the single most important number in restaurant finance. Here's the exact formula, how to use it for each dish, and what targets you should be hitting for your restaurant type.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The food cost formula</h2>
            <div className="bg-gray-900 rounded-xl p-6 my-4 text-center">
              <p className="font-mono text-lg text-green-400 font-bold">Food Cost % = (Food Cost ÷ Menu Price) × 100</p>
            </div>
            <p>If a dish costs $4 in ingredients and you sell it for $14:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p>($4 ÷ $14) × 100 = <strong className="text-2xl">28.6%</strong> food cost</p>
              <p className="text-orange-500 text-xs mt-1">71.4% gross margin</p>
            </div>
            <p>Food cost % and gross margin always add up to 100%. A 28% food cost is a 72% gross margin.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate food cost per dish</h2>
            <p>Food cost per dish is the sum of the cost of every ingredient in one portion:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>Get your invoice for each ingredient</li>
              <li>Calculate cost per unit: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">Package Cost ÷ Package Size</span></li>
              <li>Multiply by quantity used: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cost per unit × Amount used</span></li>
              <li>Add all ingredient costs together</li>
            </ol>

            <div className="bg-gray-50 rounded-xl p-5 my-5 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Worked example: Caesar Salad</p>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200 text-left">
                  <th className="pb-2 text-gray-500 font-semibold">Ingredient</th>
                  <th className="pb-2 text-gray-500 font-semibold">Pkg size / cost</th>
                  <th className="pb-2 text-gray-500 font-semibold">Qty used</th>
                  <th className="pb-2 text-gray-500 font-semibold text-right">Cost</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {[
                    ["Romaine lettuce", "$4.50 / head", "0.5 head", "$2.25"],
                    ["Parmesan (block)", "$12 / lb", "1 oz", "$0.75"],
                    ["Caesar dressing", "$8 / 32oz", "2 oz", "$0.50"],
                    ["Croutons", "$6 / lb", "1 oz", "$0.38"],
                    ["Anchovies (optional)", "$5 / tin", "3 fillets", "$0.30"],
                  ].map(([i, p, q, c]) => (
                    <tr key={i}><td className="py-1.5">{i}</td><td className="py-1.5 text-gray-400 text-xs">{p}</td><td className="py-1.5 text-gray-400 text-xs">{q}</td><td className="py-1.5 text-right font-mono">{c}</td></tr>
                  ))}
                  <tr className="font-bold text-gray-900 border-t border-gray-200">
                    <td className="pt-2" colSpan={3}>Total food cost</td>
                    <td className="pt-2 text-right font-mono text-orange-600">$4.18</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-sm">At $14 menu price: <span className="font-bold text-orange-600">($4.18 ÷ $14) × 100 = 29.9% food cost</span></p>
                <p className="text-xs text-gray-400 mt-0.5">70.1% gross margin ✓ (target: 68–72% for casual dining)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Food cost percentage benchmarks by restaurant type</h2>
            <p>What's a "good" food cost percentage depends on your restaurant type. Here are industry benchmarks:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Restaurant Type</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Food Cost %</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Why</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    ["Coffee shop (beverages)", "15–22%", "Cheap ingredients, high price tolerance"],
                    ["Pizza", "22–28%", "Low-cost dough + cheese base"],
                    ["Fine dining", "25–30%", "High prices justify higher cost"],
                    ["Casual / fast casual", "28–33%", "Volume compensates for tighter margins"],
                    ["Bakery", "25–32%", "Labor-intensive, premium ingredients"],
                    ["Food truck", "28–35%", "Lean menu, operational overhead high"],
                    ["BBQ / Steakhouse", "30–38%", "Expensive proteins are unavoidable"],
                    ["Seafood", "32–40%", "Volatile fresh fish prices"],
                  ].map(([type, fc, why]) => (
                    <tr key={type} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-gray-700">{type}</td>
                      <td className="px-4 py-2.5"><span className="font-bold text-orange-600">{fc}</span></td>
                      <td className="px-4 py-2.5 text-gray-400 text-xs">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to use food cost % to set your menu price</h2>
            <p>Flip the formula: if you know your food cost and target food cost %, you can calculate the right menu price:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400">
              <p>Menu Price = Food Cost ÷ Target Food Cost %</p>
            </div>
            <p>Example: $4.18 Caesar Salad food cost, targeting 30% food cost:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p>$4.18 ÷ 0.30 = <strong className="text-xl">$13.93</strong> → price at $14</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Total food cost vs. food cost per dish</h2>
            <p>There are two related but different calculations:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {[
                { title: "Food cost per dish", formula: "Sum of all ingredient costs for one serving", use: "Set individual dish prices" },
                { title: "Total food cost %", formula: "(Total food purchased ÷ Total food revenue) × 100", use: "Monitor overall restaurant performance" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.title}</p>
                  <p className="font-mono text-xs text-gray-500 mb-3 bg-white rounded-lg p-2 border border-gray-100">{item.formula}</p>
                  <p className="text-xs text-gray-500"><span className="font-semibold">Use for:</span> {item.use}</p>
                </div>
              ))}
            </div>
            <p>Track both. Per-dish food cost tells you whether each item is priced correctly. Total food cost % tells you whether your restaurant as a whole is performing within target.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Actual vs. ideal food cost</h2>
            <p>Your ideal food cost is calculated from recipes and menu prices. Your actual food cost comes from your invoices and sales reports. The gap between them — called food cost variance — reveals problems:</p>
            <div className="space-y-3 my-4">
              {[
                { cause: "Over-portioning", fix: "Use a kitchen scale and standardize portion weights" },
                { cause: "Waste and spoilage", fix: "Order to par, rotate FIFO, track waste daily" },
                { cause: "Theft", fix: "Implement receiving controls and inventory counts" },
                { cause: "Supplier price increases", fix: "Compare invoices monthly, reprice quarterly" },
                { cause: "Recipe drift", fix: "Conduct periodic recipe audits with your kitchen team" },
              ].map((item) => (
                <div key={item.cause} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <span className="text-red-400 font-bold text-sm shrink-0">→</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.cause}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>A food cost variance of more than 2–3% consistently signals a systemic problem. Investigate it — don't accept it as normal.</p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-orange-500 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Calculate food cost automatically</h2>
          <p className="text-orange-100 mb-6 text-sm">MenuPricer estimates ingredient costs from any dish name and calculates food cost %, gross margin, and the right selling price in seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
          <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Menu Pricing</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu: Complete Guide →</p>
            </Link>
            <Link href="/recipe-cost-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Recipe Cost Calculator — Free Online Tool →</p>
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
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500">Recipe Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

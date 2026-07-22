import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Cost a Dish: Step-by-Step Guide for Restaurant Owners (2026)",
  description:
    "Learn exactly how to cost a dish in a restaurant — ingredient breakdown, yield adjustments, labor, overhead, and how to set a menu price that protects your margins. Includes a free calculator.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-cost-a-dish" },
  openGraph: {
    title: "How to Cost a Dish: Step-by-Step Guide for Restaurant Owners",
    description: "The complete guide to costing a dish — ingredients, yield, labor, overhead, and pricing. With worked examples and a free recipe cost calculator.",
    url: "https://www.aimenupricer.com/blog/how-to-cost-a-dish",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Restaurant owner costing a dish with ingredient breakdown" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Cost a Dish: Step-by-Step Guide for Restaurant Owners (2026)",
  description: "Learn exactly how to cost a dish in a restaurant — ingredient breakdown, yield adjustments, labor, overhead, and how to set a menu price that protects your margins.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-cost-a-dish",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Cost a Dish", item: "https://www.aimenupricer.com/blog/how-to-cost-a-dish" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you cost out a dish?",
      acceptedAnswer: { "@type": "Answer", text: "To cost a dish: (1) List every ingredient including garnishes and condiments. (2) Calculate each ingredient cost as amount used divided by package size times package price. (3) Add all ingredient costs to get total recipe cost. (4) Divide by number of servings to get cost per portion. (5) Divide cost per portion by your target food cost percentage to get the menu price. Example: $4 ingredient cost divided by 0.30 equals $13.33 menu price at 30% food cost." },
    },
    {
      "@type": "Question",
      name: "What is the formula for costing a dish?",
      acceptedAnswer: { "@type": "Answer", text: "Cost per serving = Total ingredient cost divided by number of servings. Menu price = Cost per serving divided by target food cost percentage. For a dish with $5 ingredient cost targeting 30% food cost: $5 / 0.30 = $16.67 menu price. Most restaurants target 28-35% food cost." },
    },
    {
      "@type": "Question",
      name: "Should I include labor when costing a dish?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, but separately. Ingredient cost and labor cost are tracked differently. Ingredient cost drives your food cost percentage target (28-35%). Labor is tracked as a separate percentage of revenue (typically 25-35%). When setting menu prices, your pricing must cover both, plus overhead (rent, utilities, etc.)." },
    },
    {
      "@type": "Question",
      name: "What is a good food cost percentage when costing a dish?",
      acceptedAnswer: { "@type": "Answer", text: "Most restaurants target 28-35% food cost. Fine dining can go up to 38% on protein-heavy dishes because of high revenue per table. Fast casual and food trucks target 25-30% due to high volume and lower labor costs. Beverages typically cost 20-25% to make." },
    },
  ],
};

const EXAMPLE_DISH = [
  { ingredient: "Chicken thigh (bone-in)", amount: "220g raw", yieldPct: "72%", effectiveAmt: "158g usable", unitCost: "$8.50/kg", lineCost: "$1.87" },
  { ingredient: "Olive oil", amount: "15ml", yieldPct: "100%", effectiveAmt: "15ml", unitCost: "$0.015/ml", lineCost: "$0.23" },
  { ingredient: "Garlic", amount: "10g", yieldPct: "88%", effectiveAmt: "8.8g", unitCost: "$0.012/g", lineCost: "$0.12" },
  { ingredient: "Cherry tomatoes", amount: "80g", yieldPct: "95%", effectiveAmt: "76g", unitCost: "$0.008/g", lineCost: "$0.64" },
  { ingredient: "Fresh basil", amount: "5g", yieldPct: "90%", effectiveAmt: "4.5g", unitCost: "$0.04/g", lineCost: "$0.20" },
  { ingredient: "White wine", amount: "30ml", yieldPct: "100%", effectiveAmt: "30ml", unitCost: "$0.009/ml", lineCost: "$0.27" },
  { ingredient: "Salt, pepper, herbs", amount: "—", yieldPct: "—", effectiveAmt: "—", unitCost: "—", lineCost: "$0.15" },
];

export default function HowToCostADishPost() {
  const totalIngredientCost = 3.48;
  const targetFoodCostPct = 0.30;
  const suggestedPrice = totalIngredientCost / targetFoodCostPct;

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
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Recipe Costing</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <time dateTime="2026-07-21" className="text-xs text-gray-400">July 21, 2026</time>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-5">
          How to Cost a Dish: A Step-by-Step Guide for Restaurant Owners
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          Costing a dish means calculating the exact ingredient cost for one serving, then using that number to set a menu price that covers your costs and protects your profit margin. Here is how to do it correctly — with a real worked example.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">The Core Formula</p>
          <div className="space-y-2 font-mono text-sm text-gray-800">
            <div className="bg-white rounded-lg p-3 border border-orange-100">Cost per serving = Total ingredient cost / Number of servings</div>
            <div className="bg-white rounded-lg p-3 border border-orange-100">Menu price = Cost per serving / Target food cost %</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Example: $4.00 ingredient cost / 0.30 (30% target) = $13.33 menu price</p>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step 1: List Every Ingredient</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Start with a standardized recipe — a recipe that specifies exact quantities for a fixed number of portions. List every single ingredient including:
        </p>
        <ul className="space-y-2 mb-8 text-gray-600 text-sm">
          {[
            "Main protein or primary ingredient",
            "Vegetables, starches, and sides on the plate",
            "Sauces, glazes, and marinades",
            "Oils, butter, and cooking fats",
            "Garnishes (herbs, microgreens, lemon wedge)",
            "Condiments served with the dish",
            "Packaging and containers (for delivery or takeout)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-0.5">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-sm font-semibold text-amber-800">Common mistake: Forgetting small items</p>
          <p className="text-sm text-amber-700 mt-1">Salt, pepper, a lemon wedge, a sprig of parsley — individually small, but across 80 covers a night they add up. Add a miscellaneous line of $0.10–0.25 per dish to capture these.</p>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step 2: Calculate Each Ingredient Cost</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For each ingredient, the formula is:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-6 font-mono text-sm text-orange-300">
          Ingredient cost = (Amount used / Package size) x Package price
        </div>
        <div className="space-y-3 mb-6 text-sm text-gray-600">
          <p><strong>Example 1 — Chicken:</strong> You use 220g raw chicken. You buy 1 kg bags at $8.50. Cost = (220 / 1000) x $8.50 = <strong>$1.87</strong></p>
          <p><strong>Example 2 — Olive oil:</strong> You use 15ml. You buy 1L bottles at $15. Cost = (15 / 1000) x $15 = <strong>$0.23</strong></p>
          <p><strong>Example 3 — Fresh herbs:</strong> You use 5g basil. You buy 25g packs at $4. Cost = (5 / 25) x $4 = <strong>$0.80</strong></p>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step 3: Adjust for Yield</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Raw ingredients lose weight during prep and cooking. If you ignore this, your food cost will be understated. The yield-adjusted cost per usable unit is:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-6 font-mono text-sm text-orange-300">
          True cost per kg = Purchase price / Yield %
        </div>
        <p className="text-gray-600 text-sm mb-8">
          A chicken thigh at $8.50/kg with 72% yield (after cooking shrinkage) costs <strong>$8.50 / 0.72 = $11.81/kg</strong> of usable meat. Always use the yield-adjusted cost in your ingredient calculation.
        </p>

        <h2 className="text-2xl font-black text-gray-900 mb-6">Worked Example: Pan-Roasted Chicken Thigh</h2>
        <p className="text-gray-600 text-sm mb-5">Here is a full ingredient cost breakdown for one portion, using yield-adjusted costs:</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 font-bold text-gray-700">Ingredient</th>
                <th className="text-left px-4 py-3 font-bold text-gray-700">Amount</th>
                <th className="text-left px-4 py-3 font-bold text-gray-700">Yield</th>
                <th className="text-left px-4 py-3 font-bold text-gray-700">Unit Cost</th>
                <th className="text-right px-4 py-3 font-bold text-gray-700">Line Cost</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLE_DISH.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/20 transition-colors">
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{row.ingredient}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.amount}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.yieldPct}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.unitCost}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-gray-900">{row.lineCost}</td>
                </tr>
              ))}
              <tr className="bg-orange-50 border-t-2 border-orange-200">
                <td colSpan={4} className="px-4 py-3 font-black text-gray-900">Total Ingredient Cost per Serving</td>
                <td className="px-4 py-3 text-right font-black text-orange-600 text-base">$3.48</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="bg-gray-900 rounded-xl p-4 text-white text-center">
            <p className="text-xs text-gray-400 mb-1">Ingredient Cost</p>
            <p className="text-2xl font-black text-orange-400">$3.48</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-white text-center">
            <p className="text-xs text-gray-400 mb-1">At 30% food cost</p>
            <p className="text-2xl font-black text-orange-400">${suggestedPrice.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">suggested price</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-white text-center">
            <p className="text-xs text-gray-400 mb-1">Gross Margin</p>
            <p className="text-2xl font-black text-green-400">70%</p>
            <p className="text-xs text-gray-500 mt-1">before labor/OH</p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step 4: Add Labor and Overhead (Optional but Important)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Ingredient cost alone does not tell you whether a dish is profitable — you also need to cover labor and overhead. The industry rule of thumb:
        </p>
        <div className="space-y-3 mb-8">
          {[
            { label: "Food cost (ingredients)", range: "28–35%", color: "bg-orange-100 text-orange-700" },
            { label: "Labor cost (kitchen + FOH)", range: "25–35%", color: "bg-blue-100 text-blue-700" },
            { label: "Overhead (rent, utilities, equipment)", range: "10–15%", color: "bg-gray-100 text-gray-700" },
            { label: "Target profit margin", range: "10–20%", color: "bg-green-100 text-green-700" },
          ].map(({ label, range, color }) => (
            <div key={label} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3">
              <span className="text-sm text-gray-700">{label}</span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${color}`}>{range}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mb-8">
          If your three costs total more than 80% of revenue, you are not profitable. That is why food cost control is so critical — a 3% reduction in food cost goes directly to your bottom line.
        </p>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step 5: Set the Menu Price</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once you have your ingredient cost per serving, divide by your target food cost percentage:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-6 font-mono text-sm text-orange-300">
          Menu price = Ingredient cost per serving / Target food cost %
        </div>
        <div className="space-y-3 mb-8 text-sm">
          {[
            { target: "25% food cost", result: "$3.48 / 0.25", price: "$13.92" },
            { target: "30% food cost (recommended)", result: "$3.48 / 0.30", price: "$11.60" },
            { target: "35% food cost", result: "$3.48 / 0.35", price: "$9.94" },
          ].map(({ target, result, price }) => (
            <div key={target} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3">
              <div>
                <span className="font-semibold text-gray-800">{target}</span>
                <span className="text-gray-400 text-xs ml-2">{result}</span>
              </div>
              <span className="font-black text-gray-900">{price}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-10">
          Apply psychological pricing — round to .99 or .95 endings. $11.60 becomes $11.99. $13.92 becomes $13.99 or $14. These price points feel lower to guests while improving perceived value.
        </p>

        <h2 className="text-2xl font-black text-gray-900 mb-4">How to Cost a Dish for Delivery</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Delivery platforms like DoorDash and Uber Eats charge 15–30% commission. This dramatically changes your effective food cost. A dish you price at $12 for dine-in:
        </p>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <div className="text-sm space-y-1.5">
            <div className="flex justify-between"><span className="text-gray-700">Selling price (delivery app)</span><span className="font-bold">$12.00</span></div>
            <div className="flex justify-between text-red-600"><span>Commission (25%)</span><span>- $3.00</span></div>
            <div className="flex justify-between font-bold border-t border-red-200 pt-1.5 mt-1.5"><span>Net revenue to restaurant</span><span>$9.00</span></div>
            <div className="flex justify-between text-red-500 text-xs mt-2"><span>Effective food cost at $3.48 ingredient cost</span><span>38.7% — too high!</span></div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-10">
          Most restaurants add a 15–20% markup to delivery prices. Price that dish at $14–15 on delivery apps to maintain the same effective food cost percentage.
        </p>

        <div className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h3 className="text-xl font-black mb-2">Use the free recipe cost calculator</h3>
          <p className="text-orange-100 text-sm mb-5">Enter your ingredients, quantities, and prices — get cost per serving and suggested menu price instantly. No spreadsheet required.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/recipe-cost-calculator" className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors">
              Recipe Cost Calculator
            </Link>
            <Link href="/" className="border border-white/40 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors">
              AI Pricing Tool
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: "How often should I re-cost my dishes?", a: "Re-cost every time a key ingredient price changes significantly — typically every 3–6 months, or whenever your food cost percentage rises more than 2–3 points above target. Protein and produce prices fluctuate seasonally; these are the items to watch most closely." },
            { q: "What is the difference between theoretical and actual food cost?", a: "Theoretical food cost is what your food cost should be based on your recipe costing. Actual food cost is what you really spent, calculated from your inventory counts. The gap between the two — often called variance — reveals waste, theft, portioning errors, and spoilage. Healthy restaurants keep this variance under 1–2%." },
            { q: "Do I need to cost every dish on my menu?", a: "Yes — every dish should have a cost card. Prioritize your highest-selling and highest-cost items first. Use your recipe cost calculator to build a cost card for each dish and update them whenever ingredient prices change." },
            { q: "How do specials and seasonal dishes get costed?", a: "Cost them the same way before you add them to the menu. The advantage of specials is that you can respond to ingredient market prices — if produce is cheap this week, feature dishes heavy in that ingredient to achieve lower food cost while offering perceived value to guests." },
          ].map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/recipe-cost-calculator" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Calculator</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Recipe Cost Calculator</p>
            </Link>
            <Link href="/blog/recipe-yield" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Guide</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">What Is Recipe Yield?</p>
            </Link>
            <Link href="/blog/food-cost-formula" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Guide</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Food Cost Formula</p>
            </Link>
            <Link href="/blog/restaurant-profit-margin" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Guide</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Restaurant Profit Margin</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500 transition-colors">Recipe Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

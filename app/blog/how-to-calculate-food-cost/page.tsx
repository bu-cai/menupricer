import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Calculate Food Cost: Step-by-Step Formula for Restaurants",
  description: "How to calculate food cost for restaurants — step-by-step formula with examples. Learn food cost per dish, food cost percentage, and how to use food cost to price your menu correctly.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-calculate-food-cost" },
  openGraph: {
    title: "How to Calculate Food Cost: Step-by-Step Formula for Restaurants",
    description: "Step-by-step guide to calculating food cost per dish and food cost percentage — with worked examples and a free calculator.",
    url: "https://www.aimenupricer.com/blog/how-to-calculate-food-cost",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How to Calculate Food Cost: Step-by-Step Formula for Restaurants",
  description: "Complete guide to calculating food cost for restaurants — includes food cost per dish formula, food cost percentage formula, worked examples, and how to use food cost to set menu prices.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-calculate-food-cost",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Calculate Food Cost", item: "https://www.aimenupricer.com/blog/how-to-calculate-food-cost" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do you calculate food cost for a dish?", acceptedAnswer: { "@type": "Answer", text: "To calculate food cost for a single dish: (1) List every ingredient in one serving. (2) For each ingredient, calculate the unit cost: package price ÷ package size = cost per unit. (3) Multiply cost per unit × quantity used in the recipe. (4) Sum all ingredient costs. That total is your food cost per serving. Example: chicken thigh costs $4.00/lb, you use 6oz per dish → (4.00 ÷ 16) × 6 = $1.50. Do this for every ingredient and add them up." } },
    { "@type": "Question", name: "What is the food cost percentage formula?", acceptedAnswer: { "@type": "Answer", text: "Food Cost Percentage = (Food Cost per Serving ÷ Menu Price) × 100. Example: if a dish costs $3.20 to make and sells for $12.00, the food cost percentage is (3.20 ÷ 12.00) × 100 = 26.7%. Alternatively, for total restaurant food cost: Food Cost % = (Cost of Goods Sold ÷ Total Food Revenue) × 100, where COGS = Opening Inventory + Purchases - Closing Inventory." } },
    { "@type": "Question", name: "What is a good food cost percentage?", acceptedAnswer: { "@type": "Answer", text: "Target food cost percentages vary by restaurant type: Full-service casual dining: 28–33%. Fast casual: 28–32%. Fine dining: 25–30%. Bar and beverages: 18–24% for non-alcoholic, 15–20% for beer and wine, 12–18% for spirits and cocktails. Food trucks: 30–35%. Catering: 25–35%. If your food cost exceeds 38% consistently, you have a pricing, waste, or theft problem that needs to be addressed." } },
    { "@type": "Question", name: "How do I calculate menu price from food cost?", acceptedAnswer: { "@type": "Answer", text: "Use the food cost markup formula: Menu Price = Food Cost ÷ Target Food Cost Percentage. If a dish costs $3.50 to make and you want a 30% food cost: $3.50 ÷ 0.30 = $11.67 → round to $11.95 or $12.00. This is the minimum price needed to hit your food cost target. You may price higher based on market rates, but this is your floor." } },
  ],
};

const EXAMPLE_DISH = [
  { ingredient: "Chicken breast (8oz)", packageCost: "$6.99/lb", packageSize: "16 oz", qtyUsed: "8 oz", unitCost: "$0.437/oz", totalCost: "$3.50" },
  { ingredient: "Marinara sauce", packageCost: "$4.50/32oz jar", packageSize: "32 oz", qtyUsed: "4 oz", unitCost: "$0.141/oz", totalCost: "$0.56" },
  { ingredient: "Mozzarella cheese", packageCost: "$8.00/lb", packageSize: "16 oz", qtyUsed: "2 oz", unitCost: "$0.500/oz", totalCost: "$1.00" },
  { ingredient: "Pasta (dry)", packageCost: "$2.50/lb", packageSize: "16 oz", qtyUsed: "3 oz", unitCost: "$0.156/oz", totalCost: "$0.47" },
  { ingredient: "Olive oil", packageCost: "$12.00/liter", packageSize: "33.8 oz", qtyUsed: "0.5 oz", unitCost: "$0.355/oz", totalCost: "$0.18" },
  { ingredient: "Fresh basil, salt, pepper", packageCost: "—", packageSize: "—", qtyUsed: "—", unitCost: "—", totalCost: "$0.25" },
];

export default function HowToCalculateFoodCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Blog</Link>
          <Link href="/food-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Food Cost Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">How to Calculate Food Cost</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Food Costing</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          How to Calculate Food Cost: Step-by-Step Formula for Restaurants
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Every menu price you set should be based on a real food cost calculation — not an estimate or a guess. This guide walks through exactly how to calculate food cost per dish, food cost percentage, and how to use those numbers to price your menu correctly.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Two Food Cost Formulas You Need</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Formula 1</p>
              <p className="font-bold text-gray-900 mb-2">Food Cost Per Dish</p>
              <p className="font-mono text-sm bg-white rounded-lg p-3 border border-orange-200 text-gray-700">
                Sum of (ingredient unit cost × quantity used)
              </p>
              <p className="text-xs text-gray-500 mt-2">Use this when pricing individual menu items</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Formula 2</p>
              <p className="font-bold text-gray-900 mb-2">Food Cost Percentage</p>
              <p className="font-mono text-sm bg-white rounded-lg p-3 border border-orange-200 text-gray-700">
                (Food Cost ÷ Menu Price) × 100
              </p>
              <p className="text-xs text-gray-500 mt-2">Use this to check if a price gives you the margin you need</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 1 — List Every Ingredient in One Serving</h2>
          <p className="text-gray-600 mb-4">Start with a recipe card for one serving. List every ingredient by the exact quantity used — weight is better than volume for accuracy. Here is an example using Chicken Parmesan:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Ingredient</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Package Cost</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Unit Cost</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Qty Used</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Line Cost</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_DISH.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-3 py-3 text-gray-800 border-b border-gray-100">{row.ingredient}</td>
                    <td className="px-3 py-3 text-right text-gray-500 text-xs border-b border-gray-100">{row.packageCost}</td>
                    <td className="px-3 py-3 text-right text-gray-500 text-xs border-b border-gray-100">{row.unitCost}</td>
                    <td className="px-3 py-3 text-right text-gray-600 border-b border-gray-100">{row.qtyUsed}</td>
                    <td className="px-3 py-3 text-right font-semibold text-orange-600 border-b border-gray-100">{row.totalCost}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50">
                  <td colSpan={4} className="px-3 py-3 font-black text-gray-900 border-t-2 border-orange-200">Total Food Cost Per Serving</td>
                  <td className="px-3 py-3 text-right font-black text-orange-600 border-t-2 border-orange-200">$5.96</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 2 — Calculate the Unit Cost for Each Ingredient</h2>
          <p className="text-gray-600 mb-4">The key calculation is converting from package cost to unit cost:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <p className="font-bold text-gray-900 mb-3">Unit Cost Formula</p>
            <p className="font-mono text-sm text-orange-600 mb-3">Unit Cost = Package Price ÷ Package Size</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Chicken breast at $6.99/lb → $6.99 ÷ 16 oz = <strong>$0.437 per ounce</strong></p>
              <p>8oz serving → 8 × $0.437 = <strong>$3.50 food cost</strong></p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Do this calculation for every ingredient. For small quantities like spices and oils, estimate $0.10–0.30 per dish rather than measuring down to the gram — the precision does not justify the effort for low-cost ingredients.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 3 — Calculate Your Food Cost Percentage</h2>
          <p className="text-gray-600 mb-4">Once you have the food cost per serving, check it against your menu price:</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="font-bold text-gray-900 mb-4">Chicken Parmesan Example</p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-500">Food Cost</p>
                <p className="text-2xl font-black text-gray-900">$5.96</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-500">Menu Price</p>
                <p className="text-2xl font-black text-gray-900">$18.00</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-orange-300">
                <p className="text-xs text-gray-500">Food Cost %</p>
                <p className="text-2xl font-black text-orange-600">33.1%</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Formula: ($5.96 ÷ $18.00) × 100 = <strong>33.1%</strong> — within the 28–35% target range ✓</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 4 — Calculate the Minimum Price from Food Cost</h2>
          <p className="text-gray-600 mb-4">To find the minimum menu price that hits your food cost target:</p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
            <p className="font-mono text-sm text-orange-600 mb-3">Menu Price = Food Cost ÷ Target Food Cost %</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Food cost: $5.96 · Target: 30%</p>
              <p>$5.96 ÷ 0.30 = <strong>$19.87 minimum price</strong></p>
              <p className="text-gray-500">→ Round to $19.95 or $20.00</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">This is your floor. You can price higher based on market rates and competition — but pricing lower means you are not covering your food cost target.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Target Food Cost by Restaurant Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Restaurant Type</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Target Food Cost %</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Price Multiplier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fine Dining", "25–30%", "3.3–4.0x"],
                  ["Full-Service Casual Dining", "28–33%", "3.0–3.6x"],
                  ["Fast Casual", "28–32%", "3.1–3.6x"],
                  ["Food Truck", "30–35%", "2.9–3.3x"],
                  ["Catering (per person)", "25–35%", "2.9–4.0x"],
                  ["Beer & Wine", "18–24%", "4.2–5.6x"],
                  ["Spirits & Cocktails", "12–18%", "5.6–8.3x"],
                ].map(([type, pct, mult], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{type}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="bg-green-100 text-green-700 font-bold text-xs px-2 py-0.5 rounded-full">{pct}</span>
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-600 border-b border-gray-100">{mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Calculate Food Cost for Your Whole Menu</h2>
          <p className="text-orange-100 mb-5">Enter your dish name and MenuPricer AI calculates food cost, suggests the right price at multiple margin targets, and writes menu copy — in seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Try MenuPricer Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The complete food cost formula with examples and common mistakes." },
              { href: "/blog/how-to-do-food-costing", title: "How to Do Food Costing", desc: "Full recipe costing guide from ingredients to menu price." },
              { href: "/food-cost-calculator", title: "Food Cost Calculator", desc: "Free tool: enter ingredients, get food cost and suggested price." },
              { href: "/blog/restaurant-seasonality", title: "Restaurant Seasonality", desc: "How to recalculate food cost when ingredient prices change." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
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
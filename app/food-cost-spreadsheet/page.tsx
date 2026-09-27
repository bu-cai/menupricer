import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_UPDATED = "September 27, 2026";

export const metadata: Metadata = {
  title: "Free Food Cost Spreadsheet for Restaurants (2026) — Track Every Dish",
  description:
    "A free food cost spreadsheet template to track ingredient spend, food cost percentage, and menu pricing across your whole menu. Copy the structure into Excel or Google Sheets.",
  alternates: { canonical: "https://www.aimenupricer.com/food-cost-spreadsheet" },
  openGraph: {
    title: "Free Food Cost Spreadsheet for Restaurants (2026)",
    description:
      "Track food cost percentage for every dish on your menu. A free spreadsheet structure with formulas included.",
    url: "https://www.aimenupricer.com/food-cost-spreadsheet",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Food Cost Spreadsheet",
  description:
    "A free food cost spreadsheet template for tracking ingredient cost, food cost percentage, and menu pricing across a restaurant menu.",
  url: "https://www.aimenupricer.com/food-cost-spreadsheet",
  dateModified: "2026-09-27",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Food Cost Spreadsheet", item: "https://www.aimenupricer.com/food-cost-spreadsheet" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a food cost spreadsheet include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A food cost spreadsheet should include at minimum: dish name, ingredient cost per portion, menu price, food cost percentage, and target food cost percentage. For full recipe-level costing, add a separate ingredient tab with per-unit costs that feed into each dish's total. For tracking actual vs. theoretical food cost, add an inventory tab with opening stock, purchases, and closing count to calculate real food cost against sales.",
      },
    },
    {
      "@type": "Question",
      name: "How do you make a food cost spreadsheet in Excel or Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set up three tabs: (1) Ingredients — one row per ingredient with purchase unit, purchase cost, and cost per unit. (2) Recipes — one row per dish, with ingredient quantities pulling cost from the Ingredients tab. (3) Menu — one row per dish with ingredient cost (from Recipes), menu price, food cost percentage formula, and a flag column highlighting dishes over your target. Link the tabs with VLOOKUP or named ranges so updating one ingredient price updates every dish that uses it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the food cost percentage formula for a spreadsheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a spreadsheet, food cost percentage is: =ingredient_cost_cell/menu_price_cell*100. If ingredient cost is in cell C2 and menu price is in D2, enter =C2/D2*100 in cell E2 and format it as a percentage. To calculate a target menu price from a desired food cost percentage, use =ingredient_cost/target_food_cost_decimal — for example, =C2/0.30 to find the price that gives you 30% food cost.",
      },
    },
    {
      "@type": "Question",
      name: "How is a food cost spreadsheet different from a recipe costing template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A recipe costing template focuses on one dish at a time — listing every ingredient with exact quantities, yields, and unit costs to build up a precise portion cost. A food cost spreadsheet is a menu-level overview: one row per dish, showing ingredient cost, menu price, and food cost percentage side by side across your whole menu. You typically use both: the recipe costing template to calculate each dish's ingredient cost, then the food cost spreadsheet to manage the whole menu at a glance.",
      },
    },
  ],
};

const MENU_ROWS = [
  { dish: "Chicken Caesar Salad", category: "Salads", ingredientCost: 6.80, menuPrice: 22.00, target: 30 },
  { dish: "Margherita Pizza (12\")", category: "Mains", ingredientCost: 4.20, menuPrice: 18.00, target: 30 },
  { dish: "Beef Burger + Fries", category: "Mains", ingredientCost: 7.40, menuPrice: 19.00, target: 30 },
  { dish: "Grilled Salmon", category: "Mains", ingredientCost: 9.80, menuPrice: 28.00, target: 30 },
  { dish: "Tiramisu", category: "Desserts", ingredientCost: 2.10, menuPrice: 10.00, target: 25 },
  { dish: "Latte (12 oz)", category: "Beverages", ingredientCost: 0.80, menuPrice: 5.50, target: 20 },
];

export default function FoodCostSpreadsheetPage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Free Resource
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
          Food Cost Spreadsheet
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-3">
          Track food cost percentage across your whole menu in one place. Copy the spreadsheet structure below into Google Sheets or Excel — or use the AI tool to skip manual data entry.
        </p>
        <p className="text-xs text-gray-400 mb-10 border-b border-gray-100 pb-8">Last updated: {DATE_UPDATED}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-2">The menu overview spreadsheet</h2>
          <p className="text-gray-600 mb-4">
            One row per dish. The food cost % column is calculated automatically. Dishes above their target are flagged in red — those are the ones to reprice or investigate.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-left">
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Dish</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Category</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Ingredient cost</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Menu price</th>
                  <th className="px-4 py-3 text-orange-400 font-semibold text-xs">Food cost %</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Target %</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {MENU_ROWS.map((row, i) => {
                  const fcp = (row.ingredientCost / row.menuPrice) * 100;
                  const overTarget = fcp > row.target;
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 font-medium">{row.dish}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.category}</td>
                      <td className="px-4 py-3 text-gray-700 font-mono">${row.ingredientCost.toFixed(2)}</td>
                      <td className="px-4 py-3 text-gray-700 font-mono">${row.menuPrice.toFixed(2)}</td>
                      <td className={`px-4 py-3 font-black font-mono ${overTarget ? "text-red-500" : "text-green-600"}`}>
                        {fcp.toFixed(1)}%
                      </td>
                      <td className="px-4 py-3 text-gray-400 font-mono">{row.target}%</td>
                      <td className="px-4 py-3">
                        {overTarget ? (
                          <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">⚠ Review</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full">✓ OK</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 bg-gray-50 rounded-lg p-3">
            <strong>Formula for Food cost % column:</strong> <span className="font-mono">=C2/D2*100</span> (ingredient cost ÷ menu price × 100).
            Formula for Status column: <span className="font-mono">=IF(E2&gt;F2,"Review","OK")</span>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">How to build a 3-tab food cost spreadsheet</h2>
          <p className="text-gray-600 mb-5">A properly linked spreadsheet has three tabs. Update one ingredient price and every affected dish recalculates automatically.</p>

          <div className="space-y-4">
            {[
              {
                tab: "Tab 1: Ingredients",
                desc: "One row per ingredient. Columns: Ingredient name | Package unit | Package cost | Cost per unit (formula: package cost ÷ package size). This is your master price list — update it when suppliers change prices.",
                formula: "D2 = B2 / C2  (cost per unit = package cost / package size)",
              },
              {
                tab: "Tab 2: Recipes",
                desc: "One tab per dish, or one tab for all dishes with a dish-name column. For each ingredient: pull cost per unit from Tab 1 using VLOOKUP, multiply by quantity used, then sum all ingredient costs.",
                formula: "=VLOOKUP(A2, Ingredients!A:D, 4, FALSE) * qty_used",
              },
              {
                tab: "Tab 3: Menu Overview",
                desc: "One row per dish. Pull the total ingredient cost from the relevant recipe tab. Add menu price, calculate food cost %, compare to target, and flag anything over threshold.",
                formula: "Food cost % = ingredient_cost / menu_price * 100",
              },
            ].map((t, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{t.tab}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.desc}</p>
                <div className="bg-gray-900 rounded-lg px-4 py-2 font-mono text-xs text-green-400">{t.formula}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">What to do with the numbers</h2>
          <p className="text-gray-600 mb-4">A food cost spreadsheet tells you where you stand. Here is how to act on it:</p>
          <div className="space-y-3">
            {[
              {
                trigger: "Food cost % is above target",
                action: "Check whether the menu price is too low first (a quick fix), then check whether the recipe cost has increased since you last updated ingredient prices.",
              },
              {
                trigger: "Actual food cost % (from inventory) is higher than theoretical (from recipes)",
                action: "The gap is waste, over-portioning, comps, or theft. Investigate portions first — use a scale on protein stations and compare plated weight to recipe spec.",
              },
              {
                trigger: "One category is consistently above target",
                action: "Proteins and seafood run high in most restaurants. Check yield percentages and confirm you are costing post-trim weight, not raw weight.",
              },
              {
                trigger: "Beverages have very low food cost %",
                action: "This is normal and by design. Beverage margin subsidizes the rest of the menu. Use it to allow slightly higher food cost on your signature dishes.",
              },
            ].map((row, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">If: {row.trigger}</p>
                <p className="text-sm text-gray-600 leading-relaxed">→ {row.action}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-12">
          <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-2">Faster than a spreadsheet</p>
          <h2 className="text-2xl font-bold text-white mb-3">Get ingredient cost and menu price in 30 seconds</h2>
          <p className="text-orange-100 mb-5">
            No spreadsheet to build. Type the dish name and MenuPricer returns the estimated
            ingredient cost, suggested price tiers, and food cost percentage.
            Free for your first 5 dishes.
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/recipe-costing-template", title: "Recipe Costing Template", desc: "Per-dish ingredient costing with yield percentages and portion cost." },
              { href: "/blog/what-is-food-cost-percentage", title: "What Is Food Cost Percentage?", desc: "The definition, formula, and target ranges by restaurant type." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Step-by-step calculation behind every spreadsheet formula." },
              { href: "/food-cost-calculator", title: "Food Cost Calculator", desc: "Calculate food cost % for any dish instantly — no spreadsheet needed." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

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

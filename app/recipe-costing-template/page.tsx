import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_UPDATED = "September 27, 2026";

export const metadata: Metadata = {
  title: "Free Recipe Costing Template for Restaurants (2026) — Printable & Editable",
  description:
    "A free recipe costing template with all the fields you need: ingredient cost, yield percentage, food cost %, and suggested price. Use it in Excel, Google Sheets, or switch to AI pricing.",
  alternates: { canonical: "https://www.aimenupricer.com/recipe-costing-template" },
  openGraph: {
    title: "Free Recipe Costing Template for Restaurants (2026)",
    description:
      "A printable recipe costing sheet with ingredient cost, yield %, food cost %, and menu price — ready to copy into Excel or Google Sheets.",
    url: "https://www.aimenupricer.com/recipe-costing-template",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Recipe Costing Template",
  description:
    "A free recipe costing template with fields for ingredient cost, yield percentage, food cost percentage, and menu price. Suitable for restaurants, bakeries, and food businesses.",
  url: "https://www.aimenupricer.com/recipe-costing-template",
  dateModified: "2026-09-27",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Recipe Costing Template", item: "https://www.aimenupricer.com/recipe-costing-template" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a recipe costing template include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete recipe costing template needs: the ingredient name, purchase unit and purchase cost, cost per unit (calculated from purchase cost divided by package size), quantity used in the dish, portion cost for that ingredient, a yield percentage column for proteins and vegetables that lose weight during prep, a running total of ingredient cost, and a food cost percentage calculated against the menu price you set. Optionally, add a suggested menu price column that back-calculates from your target food cost percentage.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate food cost percentage in a recipe costing template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost percentage = (total ingredient cost ÷ menu price) × 100. In a spreadsheet, this means dividing your ingredient cost total cell by your menu price cell and multiplying by 100. For a dish that costs $4.50 to make and sells for $16, the food cost percentage is 28.1%. If you want to calculate a menu price from a target food cost percentage instead, the formula is: menu price = ingredient cost ÷ target food cost percentage.",
      },
    },
    {
      "@type": "Question",
      name: "What is yield percentage and why does it matter in recipe costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yield percentage is the proportion of an ingredient that is usable after trimming and cooking. A chicken breast may weigh 8 oz raw but 6.5 oz after trimming, giving a yield of 81%. If you buy chicken at $6 per pound, the true cost per usable pound is $6 ÷ 0.81 = $7.41. Ignoring yield means you underestimate your ingredient costs, especially for proteins and produce with significant trim loss.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update a recipe costing template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your ingredient prices whenever you receive a supplier price change, and at minimum quarterly. Food costs are not stable: commodity prices, seasonal produce, and delivery charges all shift throughout the year. A template that was accurate six months ago may significantly understate your current costs, causing you to underprice dishes without realizing it.",
      },
    },
  ],
};

const TEMPLATE_ROWS = [
  { ingredient: "Chicken breast (raw)", purchase: "$6.00 / lb", costPerUnit: "$0.375 / oz", qty: "8 oz", yield: "81%", portionCost: "$3.70" },
  { ingredient: "Romaine lettuce", purchase: "$3.50 / head", costPerUnit: "$3.50 / head", qty: "0.3 head", yield: "85%", portionCost: "$1.24" },
  { ingredient: "Caesar dressing", purchase: "$8.00 / 32 oz", costPerUnit: "$0.25 / oz", qty: "1.5 oz", yield: "100%", portionCost: "$0.38" },
  { ingredient: "Parmesan (shredded)", purchase: "$12.00 / lb", costPerUnit: "$0.75 / oz", qty: "0.5 oz", yield: "100%", portionCost: "$0.38" },
  { ingredient: "Croutons", purchase: "$4.00 / bag", costPerUnit: "$0.08 / piece", qty: "10 pieces", yield: "100%", portionCost: "$0.80" },
  { ingredient: "Lemon wedge", purchase: "$3.00 / 10-ct", costPerUnit: "$0.30 / wedge", qty: "1 wedge", yield: "100%", portionCost: "$0.30" },
];

export default function RecipeCostingTemplatePage() {
  const totalCost = 6.80;
  const menuPrice = 22.00;
  const foodCostPct = ((totalCost / menuPrice) * 100).toFixed(1);

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
          Recipe Costing Template
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-3">
          A complete recipe costing sheet with all the fields you need — ingredient cost, yield percentage, food cost %, and suggested menu price. Copy the structure below into Excel or Google Sheets, or use the AI tool to skip the data entry entirely.
        </p>
        <p className="text-xs text-gray-400 mb-10 border-b border-gray-100 pb-8">Last updated: {DATE_UPDATED}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-2">The template: all fields explained</h2>
          <p className="text-gray-600 mb-6">Below is a worked example for a Chicken Caesar Salad. Copy the column structure into a spreadsheet and replace the data with your own ingredients.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-left">
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Ingredient</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Purchase cost</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Cost / unit</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Qty used</th>
                  <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Yield %</th>
                  <th className="px-4 py-3 text-orange-400 font-semibold text-xs">Portion cost</th>
                </tr>
              </thead>
              <tbody>
                {TEMPLATE_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.ingredient}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">{row.purchase}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">{row.costPerUnit}</td>
                    <td className="px-4 py-3 text-gray-600">{row.qty}</td>
                    <td className="px-4 py-3 text-gray-500">{row.yield}</td>
                    <td className="px-4 py-3 text-gray-900 font-bold font-mono">{row.portionCost}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50 border-t-2 border-orange-200">
                  <td colSpan={5} className="px-4 py-3 font-black text-gray-900 text-right">Total ingredient cost</td>
                  <td className="px-4 py-3 font-black text-orange-600 font-mono text-lg">${totalCost.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
              <p className="text-xs text-gray-400 mb-1">Menu price</p>
              <p className="text-2xl font-black text-gray-900">${menuPrice.toFixed(2)}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 text-center">
              <p className="text-xs text-orange-500 mb-1">Food cost %</p>
              <p className="text-2xl font-black text-orange-600">{foodCostPct}%</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 text-center">
              <p className="text-xs text-green-600 mb-1">Gross margin</p>
              <p className="text-2xl font-black text-green-700">{(100 - parseFloat(foodCostPct)).toFixed(1)}%</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">How to set up the template in Google Sheets</h2>
          <p className="text-gray-600 mb-4">Create a new Google Sheet with these columns in row 1:</p>
          <div className="bg-gray-900 rounded-xl p-5 font-mono text-sm text-green-400 overflow-x-auto mb-4">
            <p>A: Ingredient</p>
            <p>B: Package size (with unit, e.g. &quot;32 oz&quot;)</p>
            <p>C: Package cost ($)</p>
            <p>D: Cost per unit (= C / numeric part of B)</p>
            <p>E: Quantity used in recipe (same unit as D)</p>
            <p>F: Yield % (enter as decimal, e.g. 0.81 for 81%)</p>
            <p>G: Portion cost (= D * E / F)</p>
          </div>
          <p className="text-gray-600 mb-3">At the bottom of column G, add a SUM formula. Then below that:</p>
          <div className="bg-gray-900 rounded-xl p-5 font-mono text-sm text-green-400 mb-4">
            <p className="text-gray-400 mb-1">{"// In cell H1 (menu price, enter manually):"}</p>
            <p>H1 = [your target menu price]</p>
            <p className="text-gray-400 mt-3 mb-1">{"// Food cost percentage:"}</p>
            <p>=SUM(G2:G20)/H1*100</p>
            <p className="text-gray-400 mt-3 mb-1">{"// Suggested price at 30% target food cost:"}</p>
            <p>=SUM(G2:G20)/0.30</p>
          </div>
          <p className="text-gray-600 text-sm bg-gray-50 rounded-lg p-3">
            <strong>Tip:</strong> Create one sheet per recipe, then a summary sheet that pulls the total ingredient cost and menu price from each recipe sheet. Your summary sheet becomes your menu costing overview.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The yield percentage column — and why it matters</h2>
          <p className="text-gray-600 mb-4">
            Yield percentage accounts for the weight or volume lost during prep: trimming fat from protein, peeling and seeding vegetables, reducing sauces. If you skip this column, you will systematically underestimate your costs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Ingredient</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical yield %</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">What causes the loss</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chicken breast (bone-in)", "65–70%", "Bone, skin, trim"],
                  ["Chicken breast (boneless)", "80–85%", "Fat and sinew trim"],
                  ["Beef tenderloin", "70–75%", "Silver skin and fat cap"],
                  ["Fish fillets", "75–80%", "Pin bones, bloodline"],
                  ["Broccoli (whole head)", "60–65%", "Stem and outer leaves"],
                  ["Onion", "85–90%", "Outer skin and root"],
                  ["Romaine (whole head)", "75–85%", "Outer leaves and base"],
                  ["Potatoes", "80–85%", "Peel and eyes"],
                ].map(([ingredient, yield_, cause], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100 font-medium">{ingredient}</td>
                    <td className="px-4 py-3 text-orange-600 font-bold border-b border-gray-100">{yield_}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-12">
          <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-2">Skip the spreadsheet</p>
          <h2 className="text-2xl font-bold text-white mb-3">Get the cost and price in under 30 seconds</h2>
          <p className="text-orange-100 mb-5">
            Type a dish name and MenuPricer estimates the ingredient cost, suggests price tiers,
            and shows the food cost percentage — no spreadsheet setup required.
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
              { href: "/food-cost-spreadsheet", title: "Food Cost Spreadsheet", desc: "A simpler spreadsheet focused on tracking overall food cost percentage rather than per-recipe costing." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The underlying math behind every costing template." },
              { href: "/blog/food-cost-management", title: "Food Cost Management", desc: "7 methods for keeping food cost under control — beyond the template." },
              { href: "/food-cost-calculator", title: "Food Cost Calculator", desc: "Calculate food cost percentage for any dish instantly." },
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

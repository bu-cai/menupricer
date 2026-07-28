import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Free Food Costing Template: How to Build a Recipe Cost Spreadsheet",
  description: "A free food costing template for restaurants — what to include, how to set up your recipe cost spreadsheet, and how to use it to price every dish profitably.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-costing-template" },
  openGraph: {
    title: "Free Food Costing Template: How to Build a Recipe Cost Spreadsheet",
    description: "Recipe costing template guide — what columns you need, how to calculate food cost percentage, and a free online alternative to spreadsheets.",
    url: "https://www.aimenupricer.com/blog/food-costing-template",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Free Food Costing Template: How to Build a Recipe Cost Spreadsheet",
  description: "What to include in a food costing template, how to structure your recipe costing spreadsheet, and how to use it to set profitable menu prices.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/food-costing-template",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Food Costing Template", item: "https://www.aimenupricer.com/blog/food-costing-template" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a food costing template?", acceptedAnswer: { "@type": "Answer", text: "A food costing template (also called a recipe costing sheet or menu costing form) is a structured document that lists every ingredient in a dish, the quantity used per serving, the cost per unit, and the total ingredient cost. The template then calculates your plate cost (total ingredient cost per serving) and food cost percentage (plate cost divided by menu price). Restaurants use one costing sheet per dish to track costs across their entire menu." } },
    { "@type": "Question", name: "What should a recipe costing template include?", acceptedAnswer: { "@type": "Answer", text: "A complete recipe costing template should include: dish name, portion size, recipe yield (number of servings), ingredient list (every item including garnishes), quantity per serving, unit of measure, purchase unit (e.g., 25 lb case), purchase price, cost per unit used, yield percentage for items that lose weight during prep, yield-adjusted cost, total plate cost, target food cost percentage, and suggested menu price. Optional additions include allergen notes, last-updated date, and supplier name." } },
    { "@type": "Question", name: "How do I calculate food cost percentage in a spreadsheet?", acceptedAnswer: { "@type": "Answer", text: "In a spreadsheet: (1) Create a row for each ingredient. In column A: ingredient name. Column B: quantity used. Column C: unit. Column D: cost per unit. Column E: row cost (=B*D). (2) At the bottom, sum column E to get your plate cost. (3) In a separate cell, enter your menu price. (4) Food cost % = plate cost / menu price. Format as percentage. (5) For yield adjustment, add a column F for yield % and change the row cost formula to =B*D/F." } },
    { "@type": "Question", name: "Is there a free recipe costing template I can download?", acceptedAnswer: { "@type": "Answer", text: "Yes — you can build one in Google Sheets or Excel using the column structure described in this guide. Alternatively, MenuPricer is a free online food costing tool that does the same calculation automatically: enter your ingredients, quantities, and costs, and it calculates your plate cost, food cost percentage, and suggests a menu price. No spreadsheet setup required, and your data is saved so you can update costs when supplier prices change." } },
  ],
};

const COLUMNS = [
  { col: "A", header: "Ingredient", desc: "Name of every ingredient, including oils, garnishes, sauces, and packaging" },
  { col: "B", header: "Qty used (per serving)", desc: "How much of this ingredient goes into one portion" },
  { col: "C", header: "Unit", desc: "oz, g, ml, each, tbsp — match how you measure it in the kitchen" },
  { col: "D", header: "Purchase unit", desc: "How you buy it — per lb, per case of 24, per gallon" },
  { col: "E", header: "Purchase price", desc: "What you paid for the purchase unit (from your invoice)" },
  { col: "F", header: "Cost per unit", desc: "Purchase price ÷ total units in purchase = cost per oz, per each, etc." },
  { col: "G", header: "Yield %", desc: "Usable % after trimming/cooking — 100% for pre-portioned items" },
  { col: "H", header: "Row cost", desc: "Formula: =B × F ÷ G — the yield-adjusted cost for this ingredient per serving" },
];

export default function FoodCostingTemplatePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2"><LogoIcon size={28} /><span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span></Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500">Blog</Link>
          <Link href="/food-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Food Cost Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Food Costing Template</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Food Costing Template: How to Build a Recipe Cost Spreadsheet (Free)</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 24, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">A food costing template is the foundation of profitable menu pricing. This guide walks you through exactly what to include, how to structure the formulas, and shows you a worked example for a real dish.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Skip the spreadsheet</p>
          <p className="text-sm text-gray-700 mb-4">MenuPricer is a free online recipe costing tool — enter your ingredients and get your plate cost, food cost %, and suggested menu price instantly. No spreadsheet setup required.</p>
          <Link href="/food-cost-calculator" className="inline-block bg-orange-500 text-white font-black px-5 py-2.5 rounded-xl text-sm hover:bg-orange-600 transition-colors">Open Free Food Cost Calculator →</Link>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a food costing template?</h2>
            <p className="text-gray-600 leading-relaxed">A food costing template (also called a recipe costing sheet, recipe cost card, or food costing form) is a structured document for calculating the exact ingredient cost of one serving of a menu item. It lists every ingredient, the quantity used per portion, the cost per unit, and produces a total plate cost and food cost percentage.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Every profitable restaurant uses some version of this — whether it is a handwritten card, an Excel spreadsheet, or a purpose-built tool like MenuPricer. Without it, menu pricing is guesswork, and guesswork costs you money.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">What to include in your food costing template</h2>
            <p className="text-gray-600 leading-relaxed mb-4">A complete recipe costing sheet has a header section (dish info) and a data section (ingredient rows).</p>

            <div className="bg-gray-50 rounded-2xl p-5 text-sm mb-6">
              <p className="font-bold text-gray-800 mb-3">Header section — fill once per dish</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-gray-600">
                {["Dish name", "Portion size (oz or g)", "Number of servings this recipe makes", "Date last updated", "Supplier notes (optional)", "Allergen flags (optional)"].map(f => (
                  <div key={f} className="flex items-center gap-2"><span className="text-orange-400">·</span><span>{f}</span></div>
                ))}
              </div>
            </div>

            <p className="font-bold text-gray-800 mb-3">Ingredient rows — one row per ingredient</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-center px-3 py-2.5 font-bold text-gray-600 w-8">Col</th>
                  <th className="text-left px-3 py-2.5 font-bold text-gray-700">Column header</th>
                  <th className="text-left px-3 py-2.5 font-bold text-gray-700 hidden sm:table-cell">What to enter</th>
                </tr></thead>
                <tbody>
                  {COLUMNS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-3 py-2.5 text-center font-black text-orange-500">{row.col}</td>
                      <td className="px-3 py-2.5 font-medium text-gray-800">{row.header}</td>
                      <td className="px-3 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 mt-4 text-sm">
              <p className="font-bold text-gray-800 mb-2">Summary rows (below the ingredient table)</p>
              <div className="space-y-1 text-gray-600 font-mono text-xs">
                <div className="flex gap-4"><span className="w-40">Total plate cost</span><span>=SUM(H2:H[last row])</span></div>
                <div className="flex gap-4"><span className="w-40">Menu price</span><span>Enter manually</span></div>
                <div className="flex gap-4"><span className="w-40">Food cost %</span><span>=plate cost / menu price</span></div>
                <div className="flex gap-4"><span className="w-40">Suggested price</span><span>=plate cost / target food cost %</span></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Worked example: grilled salmon with roasted vegetables</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 text-sm">
              <table className="w-full">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2.5 font-bold text-gray-700">Ingredient</th>
                  <th className="text-right px-3 py-2.5 font-bold text-gray-700">Qty</th>
                  <th className="text-center px-3 py-2.5 font-bold text-gray-700">Unit</th>
                  <th className="text-right px-3 py-2.5 font-bold text-gray-700">$/unit</th>
                  <th className="text-right px-3 py-2.5 font-bold text-gray-700">Yield</th>
                  <th className="text-right px-3 py-2.5 font-bold text-orange-600">Cost</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Salmon fillet (skin-on)", "7", "oz", "$0.88", "75%", "$0.82"],
                    ["Asparagus", "3", "oz", "$0.22", "78%", "$0.28"],
                    ["Cherry tomatoes", "2", "oz", "$0.18", "100%", "$0.36"],
                    ["Olive oil", "0.5", "oz", "$0.24", "100%", "$0.12"],
                    ["Lemon + herbs", "—", "each", "—", "—", "$0.20"],
                    ["Butter sauce (2oz)", "2", "oz", "$0.14", "100%", "$0.28"],
                    ["Sea salt + pepper", "—", "—", "—", "—", "$0.04"],
                  ].map(([ing, qty, unit, pu, yld, cost], i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="px-3 py-2 text-gray-800">{ing}</td>
                      <td className="px-3 py-2 text-right text-gray-600">{qty}</td>
                      <td className="px-3 py-2 text-center text-gray-600">{unit}</td>
                      <td className="px-3 py-2 text-right text-gray-600">{pu}</td>
                      <td className="px-3 py-2 text-right text-gray-500 text-xs">{yld}</td>
                      <td className="px-3 py-2 text-right font-bold text-gray-800">{cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-orange-50 border-t-2 border-orange-200">
                    <td colSpan={5} className="px-3 py-2.5 font-black text-gray-900">Total plate cost</td>
                    <td className="px-3 py-2.5 text-right font-black text-orange-600 text-base">$2.10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4 text-center text-sm">
              {[
                { label: "At 25% food cost", price: "$8.40" },
                { label: "At 30% food cost", price: "$7.00" },
                { label: "At 35% food cost", price: "$6.00" },
              ].map(({ label, price }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="font-black text-orange-600 text-lg">{price}</p>
                  <p className="text-xs text-gray-500">min menu price</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">Note: This example uses simplified costs for illustration. Your actual costs will vary by supplier, region, and market.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common food costing template mistakes</h2>
            <div className="space-y-3">
              {[
                { t: "Skipping small ingredients", b: "Salt, pepper, cooking oil, garnishes, and napkins each cost money. They feel negligible per dish but across hundreds of covers they can add 3–5% to your actual vs theoretical food cost variance." },
                { t: "Using purchase weight instead of yield-adjusted weight for proteins", b: "An 8oz salmon fillet at 75% yield costs the same as 10.7oz of raw salmon. If you cost based on 8oz, your plate cost is understated by 25% on the protein — the most expensive ingredient on the plate." },
                { t: "Never updating prices", b: "A costing card from a year ago is fiction. Salmon, beef, and avocado prices can swing 20–30% seasonally. Build a quarterly price update into your calendar." },
                { t: "One template for all portion sizes", b: "If you offer a half-portion or a shareable version, it needs its own costing card. Do not multiply by 0.5 in your head — the ingredient proportions often do not scale linearly." },
                { t: "Forgetting house-made components", b: "If your sauce, bread, or pasta is house-made, it needs a sub-recipe cost card before it can be included in the parent dish cost. Skipping this step systematically understates your plate cost on dishes with complex preparations." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Spreadsheet vs online food costing tool</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-black text-gray-800 mb-3">Excel / Google Sheets</p>
                <div className="space-y-2">
                  {[
                    { pro: true, t: "Free to build" },
                    { pro: true, t: "Fully customizable" },
                    { pro: false, t: "Manual formula setup" },
                    { pro: false, t: "No automatic price updates" },
                    { pro: false, t: "Easy to break with wrong formulas" },
                    { pro: false, t: "Hard to share with kitchen staff" },
                  ].map(({ pro, t }) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className={pro ? "text-green-500" : "text-red-400"}>{pro ? "✓" : "✗"}</span>
                      <span className="text-gray-600">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-2 border-orange-300 rounded-xl p-4 bg-orange-50">
                <p className="font-black text-orange-700 mb-3">MenuPricer (online)</p>
                <div className="space-y-2">
                  {[
                    { pro: true, t: "Free to use" },
                    { pro: true, t: "No formula setup needed" },
                    { pro: true, t: "Yield % built in" },
                    { pro: true, t: "AI menu price suggestions" },
                    { pro: true, t: "All dishes in one place" },
                    { pro: true, t: "Access from any device" },
                  ].map(({ pro, t }) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="text-orange-500">✓</span>
                      <span className="text-gray-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Cost every dish in 2 minutes — no spreadsheet needed</h2>
            <p className="text-orange-100 text-sm mb-5">Enter your ingredients and quantities, MenuPricer handles the yield math, calculates your plate cost, and tells you exactly what to charge.</p>
            <Link href="/food-cost-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Free Food Cost Calculator →</Link>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-5">
              {FAQ_SCHEMA.mainEntity.map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Menu Item", desc: "Step-by-step recipe costing walkthrough." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage Formula", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/what-is-yield-in-cooking", title: "Yield in Cooking", desc: "Yield % chart for proteins, vegetables, produce." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "The complete dish costing process." },
              ].map((post) => (
                <Link key={post.href} href={post.href} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all">
                  <p className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{post.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{post.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Recipe Costing: How to Cost a Recipe Step by Step (2026)",
  description: "How to cost a recipe accurately: the formula, a worked example, common mistakes, and a free template. Essential for every restaurant and catering operator.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/recipe-costing-guide" },
  openGraph: {
    title: "Recipe Costing: How to Cost a Recipe Step by Step (2026)",
    description: "The complete guide to recipe costing: the formula, a worked example, ingredient yield adjustments, and how to use cost data to price your menu.",
    url: "https://www.aimenupricer.com/blog/recipe-costing-guide",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Recipe Costing: How to Cost a Recipe Step by Step (2026)",
  description: "The step-by-step process for accurately costing a recipe: gathering ingredient prices, calculating yield-adjusted costs, summing the dish cost, and using that cost to set a profitable menu price.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/recipe-costing-guide",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Recipe Costing Guide", item: "https://www.aimenupricer.com/blog/recipe-costing-guide" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "What is recipe costing?",
      acceptedAnswer: { "@type": "Answer", text: "Recipe costing is the process of calculating the ingredient cost of a dish — the total amount you spend on food to produce one portion of that recipe. It includes every ingredient used, adjusted for yield loss (the unusable parts of raw ingredients like bones, peels, and trim). Recipe costing does not include labor, overhead, or occupancy costs; it is the 'cost of goods sold' portion for a single menu item. Once you know the recipe cost, you can calculate food cost percentage and set a menu price that meets your target margin." }
    },
    {
      "@type": "Question", name: "What is the recipe costing formula?",
      acceptedAnswer: { "@type": "Answer", text: "The recipe costing formula is: Dish Cost = Sum of (Ingredient Amount × Ingredient Cost per Unit). For each ingredient, calculate: (1) the as-purchased price per unit (e.g., $4.50/lb), (2) the yield percentage (e.g., 80% for vegetables after trimming), (3) the as-used cost per unit = as-purchased price ÷ yield percentage, and (4) the cost for that ingredient = as-used cost × amount used in the recipe. Add up all ingredient costs to get the total dish cost, then add a waste factor of 5–10% for portioning variance." }
    },
    {
      "@type": "Question", name: "What is yield percentage in recipe costing?",
      acceptedAnswer: { "@type": "Answer", text: "Yield percentage is the proportion of an ingredient that is usable after cleaning, trimming, and prepping. For example, a whole chicken purchased at $2.50/lb has a yield of approximately 65–70% after removing bones, skin, and fat. So the actual cost of usable chicken meat is $2.50 ÷ 0.67 = $3.73/lb. Ignoring yield is one of the most common recipe costing errors and consistently causes operators to underestimate their actual food cost by 10–20%." }
    },
    {
      "@type": "Question", name: "How do you turn recipe cost into a menu price?",
      acceptedAnswer: { "@type": "Answer", text: "Divide the recipe cost by your target food cost percentage to get the minimum menu price. For example: if the dish costs $4.80 to make and you want to maintain a 30% food cost, the minimum menu price is $4.80 ÷ 0.30 = $16.00. Most full-service restaurants target 28–33% food cost. Then cross-check this price against the market — what are comparable dishes selling for at competitors? If $16 is below market, you have pricing room. If it is above, consider reformulating the recipe to reduce cost." }
    },
    {
      "@type": "Question", name: "How often should you update your recipe costs?",
      acceptedAnswer: { "@type": "Answer", text: "Recipe costs should be updated whenever a key ingredient price changes significantly — typically when supplier invoices change by more than 5% on a high-volume item. At minimum, review all recipe costs quarterly. Many operators review their top 10–15 items by volume monthly and do a full review quarterly. If you are seeing food cost percentage creeping up without changing portion sizes, supplier price increases are usually the cause and a cost review is needed." }
    },
  ],
};

const WORKED_EXAMPLE = [
  { ingredient: "Chicken breast (bone-in)", purchase: "2.50/lb", yield: "68%", asUsed: "3.68/lb", amount: "10 oz", cost: "$2.30" },
  { ingredient: "Heavy cream", purchase: "4.80/qt", yield: "100%", asUsed: "4.80/qt", amount: "2 oz", cost: "$0.30" },
  { ingredient: "Garlic, fresh", purchase: "2.40/lb", yield: "85%", asUsed: "2.82/lb", amount: "0.5 oz", cost: "$0.09" },
  { ingredient: "Shallots", purchase: "3.20/lb", yield: "75%", asUsed: "4.27/lb", amount: "1 oz", cost: "$0.27" },
  { ingredient: "Butter, unsalted", purchase: "5.60/lb", yield: "100%", asUsed: "5.60/lb", amount: "1 oz", cost: "$0.35" },
  { ingredient: "Chicken stock", purchase: "0.80/qt", yield: "100%", asUsed: "0.80/qt", amount: "4 oz", cost: "$0.10" },
  { ingredient: "Fresh thyme", purchase: "1.80/bunch", yield: "70%", asUsed: "2.57/bunch", amount: "3 sprigs", cost: "$0.05" },
  { ingredient: "Lemon", purchase: "0.60/ea", yield: "100%", asUsed: "0.60/ea", amount: "¼ lemon", cost: "$0.15" },
  { ingredient: "Salt, kosher", purchase: "0.40/lb", yield: "100%", asUsed: "0.40/lb", amount: "pinch", cost: "$0.01" },
];

const STEPS = [
  {
    num: "1",
    title: "Write out the recipe with exact quantities",
    detail: "Every ingredient must have a specific amount — weight, volume, or count. Approximations ('a handful of parsley') make accurate costing impossible. If you do not have precise recipe cards, create them before attempting to cost. Work with a standard yield (e.g., 1 portion or 10 portions) so the math is consistent."
  },
  {
    num: "2",
    title: "Find the as-purchased price per unit for each ingredient",
    detail: "Pull prices from your most recent supplier invoices for each ingredient. Convert to a consistent unit — either per pound, per ounce, or per liter. If you buy a 5 lb bag of flour for $3.80, the as-purchased price is $0.76/lb or $0.048/oz. Keep these prices in a shared spreadsheet or costing software."
  },
  {
    num: "3",
    title: "Calculate yield percentage for each ingredient",
    detail: "Yield percentage = usable weight ÷ as-purchased weight × 100. Yield for whole chicken is typically 65–70%, for carrots 75–80%, for onions 85–90%, for spinach 60–70% (after washing and stems). Packaged or processed ingredients (canned tomatoes, pre-cut vegetables, frozen items) often have near 100% yield. Multiply the as-purchased price by the yield factor: as-used cost = as-purchased price ÷ yield %."
  },
  {
    num: "4",
    title: "Calculate each ingredient's cost in the recipe",
    detail: "Multiply the as-used cost per unit by the amount used in the recipe. If salmon costs $12.40/lb as-used and your recipe uses 7 oz, the ingredient cost is $12.40 × (7/16) = $5.43. Do this for every ingredient including garnishes, sauces, and plating components — they add up."
  },
  {
    num: "5",
    title: "Sum all ingredient costs and add a waste factor",
    detail: "Add all individual ingredient costs to get the base recipe cost. Then add a waste factor of 5–8% for portioning inconsistency, spillage, and prep trim that is not accounted for in yield. If base cost is $6.20, add 7% = $6.63. This waste-adjusted figure is your dish cost."
  },
  {
    num: "6",
    title: "Calculate food cost percentage and minimum menu price",
    detail: "Food cost % = dish cost ÷ menu price × 100. To find a target price: menu price = dish cost ÷ target food cost %. If dish cost is $6.63 and you target 30% food cost, minimum price = $6.63 ÷ 0.30 = $22.10. Round to a market-appropriate price and cross-check against competitive pricing in your area."
  },
];

export default function RecipeCostingGuidePage() {
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
          <Link href="/recipe-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Recipe Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Recipe Costing Guide</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">9 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Recipe Costing: How to Cost a Recipe Step by Step (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Recipe costing is the foundation of restaurant profitability. Without it, you are pricing by instinct rather than data — and instinct is consistently wrong on high-volume items. This guide covers the complete process with a worked example.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Recipe costing formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-sm text-gray-800">
            <p>Dish Cost = Σ (Ingredient Amount × (Purchase Price ÷ Yield %))</p>
            <p className="text-gray-400 text-xs mt-2">+ 5–8% waste factor for portioning variance</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">Menu Price = Dish Cost ÷ Target Food Cost %</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">The 6-step recipe costing process</h2>
            <div className="space-y-5">
              {STEPS.map(({ num, title, detail }) => (
                <div key={num} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-black flex items-center justify-center shrink-0 mt-0.5">{num}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Worked example: pan-seared chicken with cream sauce</h2>
            <p className="text-gray-600 mb-4">This example shows a full recipe cost calculation for a single-portion entrée.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-xs">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-3 font-bold text-gray-700">Ingredient</th>
                  <th className="text-center px-3 py-3 font-bold text-gray-700 hidden sm:table-cell">Purchase price</th>
                  <th className="text-center px-3 py-3 font-bold text-gray-700 hidden sm:table-cell">Yield</th>
                  <th className="text-center px-3 py-3 font-bold text-gray-700 hidden sm:table-cell">As-used cost</th>
                  <th className="text-center px-3 py-3 font-bold text-gray-700">Amount used</th>
                  <th className="text-center px-3 py-3 font-bold text-orange-600">Cost</th>
                </tr></thead>
                <tbody>
                  {WORKED_EXAMPLE.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-3 py-2 text-gray-800 font-medium">{row.ingredient}</td>
                      <td className="px-3 py-2 text-center text-gray-500 hidden sm:table-cell">${row.purchase}</td>
                      <td className="px-3 py-2 text-center text-gray-500 hidden sm:table-cell">{row.yield}</td>
                      <td className="px-3 py-2 text-center text-gray-500 hidden sm:table-cell">${row.asUsed}</td>
                      <td className="px-3 py-2 text-center text-gray-600">{row.amount}</td>
                      <td className="px-3 py-2 text-center font-bold text-orange-600">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 border-t-2 border-gray-300">
                    <td colSpan={4} className="px-3 py-3 font-black text-gray-900 text-sm hidden sm:table-cell">Base recipe cost</td>
                    <td colSpan={1} className="px-3 py-3 font-black text-gray-900 text-sm sm:hidden">Base cost</td>
                    <td className="px-3 py-3 text-center font-black text-gray-700 text-sm" colSpan={1}>—</td>
                    <td className="px-3 py-3 text-center font-black text-orange-600 text-sm">$3.62</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td colSpan={4} className="px-3 py-3 font-black text-gray-900 text-sm hidden sm:table-cell">+ 7% waste factor</td>
                    <td colSpan={1} className="px-3 py-3 font-black text-gray-900 text-sm sm:hidden">+ 7% waste</td>
                    <td className="px-3 py-3 text-center font-black text-gray-700 text-sm" colSpan={1}>—</td>
                    <td className="px-3 py-3 text-center font-black text-orange-600 text-sm">$3.87</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 mt-3 text-sm">
              <p className="font-bold text-gray-900 mb-1">Result: dish cost = $3.87</p>
              <p className="text-gray-700">At 30% target food cost → minimum menu price = $3.87 ÷ 0.30 = <strong>$12.90</strong></p>
              <p className="text-gray-700">At 28% target food cost → minimum menu price = $3.87 ÷ 0.28 = <strong>$13.82</strong></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common yield percentages by ingredient</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {[
                { item: "Whole chicken", yield: "65–70%" },
                { item: "Beef tenderloin", yield: "70–75%" },
                { item: "Whole fish (fillet)", yield: "45–55%" },
                { item: "Shrimp (shell-on)", yield: "65–70%" },
                { item: "Spinach", yield: "60–70%" },
                { item: "Carrots", yield: "75–80%" },
                { item: "Onions", yield: "85–90%" },
                { item: "Potatoes", yield: "80–85%" },
                { item: "Broccoli", yield: "60–70%" },
                { item: "Lemons", yield: "100% (whole)" },
                { item: "Strawberries", yield: "85–90%" },
                { item: "Garlic (cloves)", yield: "85–90%" },
              ].map(({ item, yield: y }) => (
                <div key={item} className="bg-gray-50 rounded-lg px-3 py-2 flex justify-between items-center">
                  <span className="text-gray-700">{item}</span>
                  <span className="font-bold text-orange-600 text-xs">{y}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">Always test yield for your own prep methods — these are industry averages and vary by supplier quality and knife technique.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The 4 most common recipe costing mistakes</h2>
            <div className="space-y-3">
              {[
                { mistake: "Ignoring yield", fix: "A 10–15% yield error compounds across every dish that uses that ingredient. Calculate yield once per ingredient and store it in your cost sheet." },
                { mistake: "Using invoice unit prices without converting to recipe units", fix: "If you buy a case of 6×#10 cans of tomatoes for $48, the cost per ounce is $48 ÷ (6 × 105 oz) = $0.076/oz. Do the unit conversion before costing." },
                { mistake: "Skipping garnishes and plating components", fix: "Micro-herbs, lemon wedges, edible flowers, and sauce pools have a real cost. A $0.40 garnish on a $4.00 dish is a 10% costing error — it adds up." },
                { mistake: "Costing at purchase price, not current market price", fix: "If you costed a dish when eggs were $0.18/ea and they are now $0.35/ea, your cost sheet is wrong. Review top-spend ingredients quarterly at minimum." },
              ].map(({ mistake, fix }) => (
                <div key={mistake} className="bg-red-50 rounded-xl p-4">
                  <p className="font-bold text-red-800 text-sm mb-1">✗ {mistake}</p>
                  <p className="text-gray-700 text-sm"><span className="font-bold text-green-700">Fix: </span>{fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQ_SCHEMA.mainEntity.map((faq) => (
                <div key={faq.name} className="border border-gray-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-50 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-2">Cost your recipes automatically</h2>
            <p className="text-gray-600 text-sm mb-4">The MenuPricer recipe cost calculator handles yield adjustments, unit conversions, and food cost percentage in one tool. Enter your ingredients and quantities to get the dish cost and target menu price instantly.</p>
            <Link href="/recipe-cost-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Recipe Cost Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/food-cost-formula", title: "Food Cost Formula Explained" },
                { href: "/blog/ideal-food-cost-percentage", title: "What Is the Ideal Food Cost Percentage?" },
                { href: "/blog/food-costing-101", title: "Food Costing 101" },
                { href: "/blog/recipe-yield", title: "Recipe Yield: Why It Matters" },
              ].map(({ href, title }) => (
                <Link key={href} href={href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-orange-400">→</span>{title}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

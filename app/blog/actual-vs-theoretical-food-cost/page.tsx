import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Actual vs Theoretical Food Cost: What the Gap Tells You (2026)",
  description: "Actual food cost is what you spent; theoretical food cost is what you should have spent. The gap between them reveals waste, theft, and portioning errors.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/actual-vs-theoretical-food-cost" },
  openGraph: {
    title: "Actual vs Theoretical Food Cost: What the Gap Tells You (2026)",
    description: "The difference between actual and theoretical food cost is one of the most diagnostic numbers in restaurant management. Here is what causes the gap and how to fix it.",
    url: "https://www.aimenupricer.com/blog/actual-vs-theoretical-food-cost",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Actual vs Theoretical Food Cost: What the Gap Tells You (2026)",
  description: "The definitions of actual and theoretical food cost, how to calculate each, what causes the variance between them, and how to use the gap to identify and fix profit leaks.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/actual-vs-theoretical-food-cost",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Actual vs Theoretical Food Cost", item: "https://www.aimenupricer.com/blog/actual-vs-theoretical-food-cost" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "What is actual food cost?",
      acceptedAnswer: { "@type": "Answer", text: "Actual food cost is the real amount you spent on food during a period, calculated from your inventory counts and purchase records. The formula is: Actual Food Cost = (Beginning Inventory + Purchases) − Ending Inventory. This is the COGS figure on your P&L. It reflects everything that left your inventory: food sold, waste, theft, staff meals, comps, and spoilage. Actual food cost is expressed as a percentage of revenue: Actual Food Cost % = Actual Food Cost $ ÷ Food Revenue × 100." }
    },
    {
      "@type": "Question", name: "What is theoretical food cost?",
      acceptedAnswer: { "@type": "Answer", text: "Theoretical food cost (also called 'ideal food cost') is what your food cost should have been if every portion was prepared and sold according to your standardized recipes with no waste, no theft, and no portioning variance. It is calculated by multiplying the recipe cost of each menu item by the number of portions sold, then summing across all items. Theoretical food cost represents the floor — the best possible food cost given your menu mix and pricing. It is always lower than actual food cost." }
    },
    {
      "@type": "Question", name: "What is a good actual vs theoretical food cost variance?",
      acceptedAnswer: { "@type": "Answer", text: "A variance of 1–2 percentage points between actual and theoretical food cost is considered acceptable in most full-service restaurants. For example, if your theoretical food cost is 28% and actual is 29.5%, that 1.5-point gap represents normal operational variance (minor portioning errors, small amounts of spoilage). A gap of 3+ percentage points warrants investigation. A gap above 5 percentage points almost always indicates a systematic problem: consistent over-portioning, significant spoilage, or theft." }
    },
    {
      "@type": "Question", name: "How do you reduce the gap between actual and theoretical food cost?",
      acceptedAnswer: { "@type": "Answer", text: "The most effective actions to close the actual vs theoretical gap are: (1) Use portion scales for every protein and high-cost ingredient; (2) Do weekly inventory counts rather than monthly — more frequent counts catch problems earlier; (3) Investigate which stations or staff shifts have the highest variance; (4) Track waste specifically — create a waste log so you can identify the most frequently wasted items; (5) Require manager approval for all comps, voids, and staff meals and record them separately. The gap shrinks fastest when you can identify the specific cause rather than trying to fix everything at once." }
    },
  ],
};

const CAUSES_OF_VARIANCE = [
  { cause: "Over-portioning", impact: "Very high", description: "The most common cause. A server scooping 2 extra ounces of mashed potatoes on every plate costs real money at scale. At $0.04/oz × 2 oz × 200 covers/day × 365 days = $5,840/year from one side dish." },
  { cause: "Waste and spoilage", impact: "High", description: "Ingredients that expire before use, prepped vegetables that are not sold, and trim that exceeds standard yield all add to actual cost without adding to theoretical." },
  { cause: "Theft", impact: "High", description: "Inventory that leaves without being sold. Can be as simple as a staff member eating product without a meal log entry, or as serious as systematic back-door theft. A gap that cannot be explained by portioning or spoilage should prompt a theft investigation." },
  { cause: "Unrecorded comps and voids", impact: "Medium", description: "A manager comping a table's appetizer without logging it as a comp inflates apparent food cost (the food went out but no revenue is counted against it in the theoretical calculation)." },
  { cause: "Incorrect recipe costing", impact: "Medium", description: "If the recipe costs used to calculate theoretical are outdated or wrong, theoretical food cost will be inaccurate — not because of operational problems but because of calculation errors. Always keep recipe costs current." },
  { cause: "Supplier variance", impact: "Low–Medium", description: "Receiving 18 oz steaks when your recipe assumes 16 oz portions (and you are not trimming them) inflates actual cost above theoretical without a portioning error on the line." },
];

export default function ActualVsTheoreticalFoodCostPage() {
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
          <Link href="/menu-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Food Cost Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Actual vs Theoretical Food Cost</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">6 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Actual vs Theoretical Food Cost: What the Gap Tells You (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Your theoretical food cost is what you should have spent. Your actual food cost is what you did spend. The distance between those two numbers is one of the most useful diagnostic metrics in restaurant operations — if you know how to read it.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Theoretical food cost</p>
            <p className="text-2xl font-black text-blue-800 mb-1">What should have been spent</p>
            <p className="text-sm text-blue-700">Calculated from standardized recipe costs × portions sold. Assumes perfect portioning, zero waste, no theft.</p>
            <div className="bg-white rounded-lg px-3 py-2 mt-3 text-xs font-mono text-blue-800">
              Σ (recipe cost × portions sold)
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Actual food cost</p>
            <p className="text-2xl font-black text-orange-800 mb-1">What was actually spent</p>
            <p className="text-sm text-orange-700">Calculated from inventory counts and invoices. Includes waste, theft, staff meals, spoilage, and portioning variance.</p>
            <div className="bg-white rounded-lg px-3 py-2 mt-3 text-xs font-mono text-orange-800">
              (Beg. inventory + Purchases) − End. inventory
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate each metric</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Actual food cost</h3>
                <div className="bg-gray-50 rounded-xl p-4 text-sm">
                  <p className="font-bold text-gray-900 mb-3">Formula:</p>
                  <p className="font-mono text-gray-800 mb-2">Actual Food Cost $ = Beginning Inventory + Purchases − Ending Inventory</p>
                  <p className="font-mono text-gray-800">Actual Food Cost % = Actual Food Cost $ ÷ Food Revenue × 100</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 mt-3 text-sm">
                  <p className="font-bold text-gray-900 mb-2">Example:</p>
                  <p className="text-gray-700">Beginning inventory: $12,400</p>
                  <p className="text-gray-700">+ Purchases this week: $8,600</p>
                  <p className="text-gray-700">− Ending inventory: $10,200</p>
                  <p className="font-bold text-gray-900 mt-2">= Actual food cost: $10,800</p>
                  <p className="text-gray-700">÷ Food revenue: $34,500</p>
                  <p className="font-bold text-orange-600">= Actual food cost %: 31.3%</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Theoretical food cost</h3>
                <div className="bg-gray-50 rounded-xl p-4 text-sm">
                  <p className="font-bold text-gray-900 mb-3">Formula:</p>
                  <p className="font-mono text-gray-800">Theoretical Food Cost $ = Σ (Recipe Cost per Item × Portions Sold)</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 mt-3 text-sm">
                  <p className="font-bold text-gray-900 mb-2">Example (simplified, 3 items):</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead><tr className="border-b border-blue-200">
                        <th className="text-left py-1 font-bold text-gray-700">Item</th>
                        <th className="text-center py-1 font-bold text-gray-700">Recipe cost</th>
                        <th className="text-center py-1 font-bold text-gray-700">Portions sold</th>
                        <th className="text-center py-1 font-bold text-blue-700">Total cost</th>
                      </tr></thead>
                      <tbody>
                        {[
                          { item: "Salmon entrée", cost: "$5.20", sold: "145", total: "$754" },
                          { item: "Chicken entrée", cost: "$3.40", sold: "210", total: "$714" },
                          { item: "Pasta dish", cost: "$2.10", sold: "175", total: "$368" },
                        ].map(row => (
                          <tr key={row.item} className="border-b border-blue-100">
                            <td className="py-1 text-gray-800">{row.item}</td>
                            <td className="py-1 text-center text-gray-600">{row.cost}</td>
                            <td className="py-1 text-center text-gray-600">{row.sold}</td>
                            <td className="py-1 text-center font-bold text-blue-700">{row.total}</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan={3} className="py-2 font-black text-gray-900 text-xs">Theoretical total (all items)</td>
                          <td className="py-2 text-center font-black text-blue-700 text-xs">~$9,800*</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">*Simplified; a real calculation includes every menu item sold. Theoretical food cost % = $9,800 ÷ $34,500 = <strong>28.4%</strong></p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
                <p className="font-bold text-yellow-900 mb-1">The variance: 31.3% − 28.4% = 2.9 percentage points</p>
                <p className="text-yellow-800">At $34,500 in weekly revenue, a 2.9-point gap = $1,000.50 in unexplained food cost per week, or $52,000+ per year. This is worth investigating.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">What causes the gap? The 6 main sources</h2>
            <div className="space-y-3">
              {CAUSES_OF_VARIANCE.map(({ cause, impact, description }) => (
                <div key={cause} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-gray-900 text-sm">{cause}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      impact === "Very high" ? "bg-red-100 text-red-700" :
                      impact === "High" ? "bg-orange-100 text-orange-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>{impact} impact</span>
                  </div>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to use the variance to diagnose the problem</h2>
            <p className="text-gray-600 mb-4">The gap size tells you how serious the problem is. The pattern tells you what it is.</p>
            <div className="space-y-3 text-sm">
              {[
                { gap: "Gap under 1%", interpretation: "Normal variance. Minor portioning inconsistency and unavoidable spoilage. No action required beyond standard inventory discipline." },
                { gap: "Gap 1–2%", interpretation: "Acceptable but worth monitoring. If the gap is consistently at the high end, investigate the station or item mix driving it." },
                { gap: "Gap 2–3%", interpretation: "Investigate portioning first. Spot-check plate weights on your top-5 volume items. Also review the waste log — if you do not have one, start one." },
                { gap: "Gap 3–5%", interpretation: "Likely a systemic problem. Cross-check shift-by-shift variance if your system allows it. A gap that appears on specific days or shifts suggests a staffing issue." },
                { gap: "Gap above 5%", interpretation: "Requires immediate investigation. At this level, the gap almost always involves theft, a systematic recipe costing error, or a major receiving discrepancy. Do not assume it is just waste." },
              ].map(({ gap, interpretation }) => (
                <div key={gap} className="flex gap-3">
                  <span className="font-black text-orange-500 text-xs whitespace-nowrap pt-0.5 w-28 shrink-0">{gap}</span>
                  <p className="text-gray-700">{interpretation}</p>
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
            <h2 className="text-xl font-black text-gray-900 mb-2">Calculate your food cost percentage</h2>
            <p className="text-gray-600 text-sm mb-4">Use the free MenuPricer food cost calculator to track actual food cost percentage by period and identify which items are causing variance.</p>
            <Link href="/menu-cost-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Food Cost Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/food-cost-formula", title: "Food Cost Formula Explained" },
                { href: "/blog/recipe-costing-guide", title: "Recipe Costing: Step-by-Step Guide" },
                { href: "/blog/food-cost-control", title: "Food Cost Control Strategies" },
                { href: "/blog/ideal-food-cost-percentage", title: "Ideal Food Cost Percentage by Type" },
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

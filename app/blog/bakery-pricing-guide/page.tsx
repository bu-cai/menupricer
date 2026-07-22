import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Bakery Pricing Guide: How to Price Baked Goods for Profit (2026)",
  description: "How to price bakery products — the ingredient cost formula, overhead allocation, labor rate for bakers, and per-item pricing for bread, cakes, pastries, and custom orders.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/bakery-pricing-guide" },
  openGraph: {
    title: "Bakery Pricing Guide: How to Price Baked Goods for Profit (2026)",
    description: "Bakery pricing formula: ingredient cost markup, labor rate for bakers, overhead per item, and sample prices for bread, cakes, pastries, and custom orders.",
    url: "https://www.aimenupricer.com/blog/bakery-pricing-guide",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Bakery Pricing Guide: How to Price Baked Goods for Profit (2026)",
  description: "Bakery product pricing formula — ingredient cost markup, labor, overhead, and custom cake pricing for retail and wholesale bakery operations.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22", dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/bakery-pricing-guide",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Bakery Pricing Guide", item: "https://www.aimenupricer.com/blog/bakery-pricing-guide" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do you calculate the price of baked goods?", acceptedAnswer: { "@type": "Answer", text: "The bakery pricing formula is: (Ingredient cost per item + Labor cost per item + Overhead per item) × desired markup = retail price. Most bakeries target a 3-4× markup on total cost (ingredient + labor + overhead). If your croissant costs $0.80 in ingredients, $0.40 in labor, and $0.30 in overhead ($1.50 total), pricing at 3× gives you $4.50 retail. Many home bakers undercharge by only considering ingredient cost — labor and overhead are equally important." } },
    { "@type": "Question", name: "What is a good profit margin for a bakery?", acceptedAnswer: { "@type": "Answer", text: "Retail bakeries typically target 8-15% net profit margin after all costs. Food cost alone should be 25-35% of retail price. Custom cake businesses often achieve higher margins (15-25%) due to the design premium. The biggest mistake in bakery pricing is undervaluing labor — bakers should pay themselves at least $18-25/hour when calculating item costs, even if they are the owner." } },
    { "@type": "Question", name: "How much should I charge for a custom cake?", acceptedAnswer: { "@type": "Answer", text: "Custom cake pricing: (Ingredient cost + Design labor hours × $25/hr + Overhead allocation) × 2.5 to 3 = base price. A 2-tier cake taking 4 hours with $30 in ingredients: $30 + (4 × $25) + $15 overhead = $145 total cost × 2.5 = $362. Most custom cake orders range from $75-150 for simple designs up to $500+ for elaborate tiered cakes. Never charge less than ingredient cost + $15/hour labor minimum." } },
    { "@type": "Question", name: "What is the difference between bakery retail pricing and wholesale pricing?", acceptedAnswer: { "@type": "Answer", text: "Wholesale bakery pricing is typically 40-60% of retail price. If your artisan sourdough retails for $12, wholesale to a café or grocery store would be $5-7.20. Wholesale requires higher volume to be profitable, so your per-item production cost must drop through efficiency. Only wholesale products where your ingredient + labor + overhead cost is below 40% of retail — otherwise you are losing money on every wholesale unit." } },
  ],
};

const ITEM_EXAMPLES = [
  { item: "Sourdough Loaf", ingredient: "$1.80", labor: "$1.20", overhead: "$0.80", total: "$3.80", markup: "3.2×", retail: "$12.00" },
  { item: "Croissant", ingredient: "$0.85", labor: "$0.55", overhead: "$0.35", total: "$1.75", markup: "2.9×", retail: "$5.00" },
  { item: "Cupcake", ingredient: "$0.45", labor: "$0.30", overhead: "$0.25", total: "$1.00", markup: "3.5×", retail: "$3.50" },
  { item: "Custom Cake (8\")", ingredient: "$18.00", labor: "$37.50", overhead: "$8.00", total: "$63.50", markup: "2.5×", retail: "$159.00" },
  { item: "Baguette", ingredient: "$0.60", labor: "$0.40", overhead: "$0.30", total: "$1.30", markup: "3.1×", retail: "$4.00" },
  { item: "Cinnamon Roll", ingredient: "$0.55", labor: "$0.45", overhead: "$0.25", total: "$1.25", markup: "2.8×", retail: "$3.50" },
];

export default function BakeryPricingGuidePage() {
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
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Bakery Pricing Guide</span>
          <Link href="/bakery-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Bakery Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Bakery Pricing Guide</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Bakery</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Bakery Pricing Guide: How to Price Baked Goods for Profit in 2026</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Most bakeries lose money because they price by instinct instead of formula. The fix is simple: ingredient cost + labor + overhead, then multiply. Here is how to do it for every product in your case.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "3–4×", label: "Recommended markup on total cost" }, { n: "28–33%", label: "Target ingredient cost %" }, { n: "8–15%", label: "Typical net margin for retail bakery" }].map(({ n, label }) => (
            <div key={n}><p className="text-xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The bakery pricing formula</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Every baked good has three cost components. Price from the sum — not just the ingredient cost, which is the most common and costly mistake in bakery pricing.</p>
            <div className="bg-gray-900 rounded-2xl p-5 text-sm font-mono text-white space-y-3">
              <p className="text-gray-400 text-xs">// Bakery item pricing</p>
              <p><span className="text-orange-400">Ingredient cost</span> = All raw ingredients per item (flour, butter, eggs, fillings)</p>
              <p><span className="text-blue-300">Labor cost</span> = (Minutes to make ÷ 60) × hourly baker rate</p>
              <p><span className="text-green-300">Overhead per item</span> = Monthly overhead ÷ total items produced per month</p>
              <p className="border-t border-gray-700 pt-3"><span className="text-yellow-300">Total cost</span> = Ingredient + Labor + Overhead</p>
              <p className="text-white font-bold">Retail price = Total cost × 3 to 4</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm">
              <p className="font-bold text-amber-800 mb-1">Labor rate to use</p>
              <p className="text-amber-700">Even if you are the owner and baker, use $20-25/hour as your labor cost when calculating item prices. Paying yourself below minimum wage is not a pricing strategy — it is a path to burnout and undercapitalized growth.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Sample bakery pricing by item</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Item</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Ingredients</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Labor</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Overhead</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Total cost</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Retail</th>
                </tr></thead>
                <tbody>
                  {ITEM_EXAMPLES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.ingredient}</td>
                      <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{row.labor}</td>
                      <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{row.overhead}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-semibold">{row.total}</td>
                      <td className="px-4 py-3 text-right font-black text-orange-600">{row.retail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Labor calculated at $22/hr. Overhead includes rent, utilities, equipment amortization, packaging.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate overhead per item</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Overhead is the expense that kills bakery margins when ignored. Calculate it monthly, then divide by your total output:</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <p className="font-bold text-gray-800 mb-3">Monthly overhead checklist</p>
              <div className="grid grid-cols-2 gap-2 text-gray-600 mb-4">
                {["Rent / lease", "Electricity (ovens run hot)", "Gas for ovens", "Equipment loan payments", "Packaging (boxes, bags, labels)", "Permits and licenses", "Insurance", "Marketing and website"].map(item => (
                  <div key={item} className="flex items-center gap-2"><span className="text-orange-400 text-xs">▸</span>{item}</div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-3 space-y-1.5">
                <div className="flex justify-between"><span>Example monthly overhead</span><span className="font-bold">$3,200</span></div>
                <div className="flex justify-between"><span>Items produced per month</span><span className="font-bold">800</span></div>
                <div className="flex justify-between font-black text-gray-900"><span>Overhead per item</span><span className="text-orange-600">$4.00</span></div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Custom cake pricing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Custom cakes are priced differently because design labor dominates the cost. Never quote a flat price — always time-track your first few orders to calibrate your estimate.</p>
            <div className="space-y-3">
              {[
                { label: "Simple 6\" single tier", time: "1.5 hrs", range: "$75–120", note: "Buttercream finish, minimal decoration" },
                { label: "2-tier standard", time: "3–4 hrs", range: "$180–280", note: "Fondant or elaborate buttercream" },
                { label: "3-tier wedding cake", time: "6–10 hrs", range: "$400–900", note: "Custom design, delivery, setup included" },
                { label: "Sculpted novelty cake", time: "8–15 hrs", range: "$500–1,500+", note: "Complex 3D shapes, premium pricing justified" },
              ].map(tier => (
                <div key={tier.label} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="flex-1"><p className="font-bold text-gray-800 text-sm">{tier.label}</p><p className="text-xs text-gray-500 mt-0.5">{tier.note}</p></div>
                  <div className="text-right shrink-0"><p className="font-black text-orange-600">{tier.range}</p><p className="text-xs text-gray-400">{tier.time}</p></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Wholesale vs retail pricing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Wholesale pricing is typically 50% of retail. Before accepting a wholesale account, verify your unit economics work at that price:</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="px-4 py-2 font-bold text-gray-700"></div>
                <div className="px-4 py-2 font-bold text-gray-700 text-center">Retail</div>
                <div className="px-4 py-2 font-bold text-gray-700 text-center">Wholesale (50%)</div>
              </div>
              {[
                { label: "Sourdough loaf", retail: "$12.00", wholesale: "$6.00" },
                { label: "Croissant (each)", retail: "$5.00", wholesale: "$2.50" },
                { label: "Total cost per unit", retail: "$3.80", wholesale: "$3.80" },
                { label: "Margin", retail: "$8.20 (68%)", wholesale: "$2.20 (37%)", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${row.highlight ? "bg-orange-50" : ""}`}>
                  <div className="px-4 py-2 text-gray-700 font-medium">{row.label}</div>
                  <div className="px-4 py-2 text-center text-gray-600">{row.retail}</div>
                  <div className={`px-4 py-2 text-center font-bold ${row.highlight ? "text-orange-600" : "text-gray-600"}`}>{row.wholesale}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">Wholesale still generates $2.20/unit margin on sourdough at this example — acceptable if volume is high. But the same item with higher ingredient cost may not survive wholesale pricing.</p>
          </section>
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price your whole bakery menu</h2>
            <p className="text-orange-100 text-sm mb-5">The bakery pricing calculator handles ingredient costing, labor, overhead, and markup — for every item in your case, at once.</p>
            <Link href="/bakery-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Bakery Calculator →</Link>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
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
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The food cost percentage formula for any menu item." },
                { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "Bakery food cost benchmarks vs other concepts." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Ingredient breakdown with yield adjustments." },
                { href: "/blog/catering-pricing-guide", title: "Catering Pricing Guide", desc: "Per-person catering pricing for any event type." },
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
            <Link href="/bakery-pricing-calculator" className="hover:text-orange-500">Bakery Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
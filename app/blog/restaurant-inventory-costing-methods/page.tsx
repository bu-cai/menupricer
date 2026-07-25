import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Inventory Costing Methods: FIFO vs Weighted Average Explained",
  description: "FIFO vs weighted average inventory costing for restaurants — what each method means, how each affects your reported food cost, and which one is right for your operation.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-inventory-costing-methods" },
  openGraph: {
    title: "Restaurant Inventory Costing Methods: FIFO vs Weighted Average Explained",
    description: "How FIFO and weighted average inventory costing work in restaurants, how each affects food cost percentage, and which to use.",
    url: "https://www.aimenupricer.com/blog/restaurant-inventory-costing-methods",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Inventory Costing Methods: FIFO vs Weighted Average Explained",
  description: "Complete guide to restaurant inventory costing methods — FIFO (First In, First Out) vs weighted average cost, how each affects food cost reporting, and when to use each method.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-inventory-costing-methods",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Inventory Costing Methods", item: "https://www.aimenupricer.com/blog/restaurant-inventory-costing-methods" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is FIFO in restaurant inventory?", acceptedAnswer: { "@type": "Answer", text: "FIFO (First In, First Out) means the oldest inventory you purchased is assumed to be sold or used first. In restaurant terms, if you bought chicken at $3.50/lb last week and $4.00/lb this week, FIFO says the $3.50 chicken gets used first. This matches how good kitchens actually operate physically — older stock gets rotated to the front and used before newer deliveries. FIFO gives you a more current inventory value on your balance sheet but can understate food cost when prices are rising." } },
    { "@type": "Question", name: "What is weighted average cost in restaurant inventory?", acceptedAnswer: { "@type": "Answer", text: "Weighted average cost (WAC) averages all purchase prices together based on quantity. If you bought 10 lbs of chicken at $3.50 and 10 lbs at $4.00, the weighted average cost is ($35 + $40) divided by 20 lbs = $3.75/lb. Every unit you use in a recipe gets costed at $3.75 regardless of when it was purchased. WAC smooths out price volatility and is simpler to manage than FIFO for most restaurant operations." } },
    { "@type": "Question", name: "Which inventory costing method should restaurants use?", acceptedAnswer: { "@type": "Answer", text: "Most restaurants should use weighted average cost (WAC). It is simpler to calculate, smooths out price volatility, and is less susceptible to cost distortion when ingredients have multiple purchase prices. FIFO is a better choice for: restaurants with stable prices and high inventory turnover, operations that physically rotate stock, and businesses that need the most accurate possible current balance sheet values. Both methods are acceptable for tax purposes — consistency is more important than which one you choose." } },
    { "@type": "Question", name: "How does inventory costing method affect food cost percentage?", acceptedAnswer: { "@type": "Answer", text: "In periods of rising prices, FIFO reports lower cost of goods sold (because older, cheaper inventory is consumed first) and therefore lower food cost percentage. WAC reports a smoothed, middle-ground cost. In periods of falling prices, FIFO reports higher COGS. For most restaurants where ingredient prices fluctuate regularly, WAC provides more stable food cost reporting. Changing methods mid-year affects comparability of your financial data, so pick one method and stick with it." } },
  ],
};

const FIFO_VS_WAC = [
  { feature: "How it works", fifo: "Oldest stock used first", wac: "All stock averaged by quantity" },
  { feature: "Complexity", fifo: "Higher — must track purchase layers", wac: "Lower — single average price" },
  { feature: "Food cost when prices rise", fifo: "Lower (older cheap stock expensed)", wac: "Moderate (blended price)" },
  { feature: "Food cost when prices fall", fifo: "Higher (older expensive stock first)", wac: "Moderate (blended price)" },
  { feature: "Inventory value on balance sheet", fifo: "More current (newer prices)", wac: "Smoothed average" },
  { feature: "Best for", fifo: "High-turnover, stable-price items", wac: "Most restaurant operations" },
  { feature: "Physical stock rotation", fifo: "Mirrors physical FIFO rotation", wac: "Independent of physical flow" },
];

export default function RestaurantInventoryCostingMethodsPage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Restaurant Inventory Costing Methods</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Food Costing</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Inventory Costing Methods: FIFO vs Weighted Average Explained
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          When you buy chicken at $3.50/lb one week and $4.00/lb the next, which cost goes into your recipes? The answer depends on your inventory costing method — and it directly affects your reported food cost percentage. Here is what FIFO and weighted average mean in practice, and which one most restaurants should use.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Two Main Inventory Costing Methods</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Method 1</p>
              <p className="font-black text-gray-900 text-xl mb-2">FIFO</p>
              <p className="font-semibold text-gray-700 text-sm mb-2">First In, First Out</p>
              <p className="text-gray-600 text-sm">The oldest inventory you purchased is assumed to be consumed first. Your cost of goods sold reflects older purchase prices; your remaining inventory reflects the most recent prices.</p>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Method 2</p>
              <p className="font-black text-gray-900 text-xl mb-2">WAC</p>
              <p className="font-semibold text-gray-700 text-sm mb-2">Weighted Average Cost</p>
              <p className="text-gray-600 text-sm">All purchase prices are blended into a single average cost per unit. Every recipe or sale draws from that same blended cost, regardless of when inventory was purchased.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Worked Example: Chicken Breast</h2>
          <p className="text-gray-600 mb-4">You buy chicken breast twice in one week:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
            <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="font-bold text-gray-900">Monday delivery</p>
                <p className="text-gray-600">20 lbs at $3.50/lb = $70.00</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="font-bold text-gray-900">Thursday delivery</p>
                <p className="text-gray-600">20 lbs at $4.00/lb = $80.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">You use 25 lbs for recipes this week. Here is how each method calculates the cost:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-xl p-5">
              <p className="font-bold text-blue-700 mb-2">FIFO Method</p>
              <div className="text-sm space-y-1 text-gray-600 mb-3">
                <p>First 20 lbs from Monday: 20 × $3.50 = $70.00</p>
                <p>Next 5 lbs from Thursday: 5 × $4.00 = $20.00</p>
                <p className="font-bold text-gray-900 pt-2 border-t border-gray-200 mt-2">Total COGS: $90.00</p>
                <p className="font-bold text-gray-900">Cost per lb: $3.60</p>
              </div>
              <p className="text-xs text-gray-500">Remaining inventory: 15 lbs at $4.00</p>
            </div>
            <div className="border border-orange-200 rounded-xl p-5">
              <p className="font-bold text-orange-600 mb-2">Weighted Average Method</p>
              <div className="text-sm space-y-1 text-gray-600 mb-3">
                <p>Total cost: ($70 + $80) = $150.00</p>
                <p>Total units: 40 lbs</p>
                <p>Average: $150 ÷ 40 = $3.75/lb</p>
                <p>25 lbs × $3.75 = $93.75</p>
                <p className="font-bold text-gray-900 pt-2 border-t border-gray-200 mt-2">Total COGS: $93.75</p>
                <p className="font-bold text-gray-900">Cost per lb: $3.75</p>
              </div>
              <p className="text-xs text-gray-500">Remaining inventory: 15 lbs at $3.75</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 bg-gray-50 rounded-lg p-3">With rising prices, FIFO produces a lower COGS ($90 vs $93.75) and therefore a lower food cost percentage. With falling prices, the relationship reverses.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">FIFO vs Weighted Average: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-600 border-b border-gray-200">FIFO</th>
                  <th className="text-left px-4 py-3 font-semibold text-orange-600 border-b border-gray-200">Weighted Average</th>
                </tr>
              </thead>
              <tbody>
                {FIFO_VS_WAC.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.fifo}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.wac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Which Method Should Your Restaurant Use?</h2>
          <div className="space-y-4">
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
              <p className="font-bold text-blue-700 mb-2">Use FIFO if:</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>You physically rotate stock (older product always used before newer)</li>
                <li>Your ingredient prices are relatively stable with few weekly swings</li>
                <li>You want the most accurate current balance sheet inventory value</li>
                <li>Your bookkeeper or accountant specifically recommends it for your situation</li>
              </ul>
            </div>
            <div className="border border-orange-200 rounded-xl p-5 bg-orange-50">
              <p className="font-bold text-orange-600 mb-2">Use Weighted Average if:</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Your ingredient prices fluctuate week-to-week (produce, proteins, seafood)</li>
                <li>You want stable, comparable food cost percentages week over week</li>
                <li>Simplicity of calculation matters — one average price vs. managing layers</li>
                <li>You use restaurant management software that defaults to WAC</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 bg-gray-50 rounded-lg p-3">For most independent restaurants, weighted average cost is the better choice because it is simpler and provides more consistent food cost readings in a market with fluctuating prices. The most important thing is to pick one method and stick with it — changing methods mid-year makes your financial comparisons meaningless.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Inventory Costing and Menu Pricing</h2>
          <p className="text-gray-600 mb-4">Regardless of which inventory costing method you use, your menu prices should be based on your expected ingredient cost at the time of pricing — not a historical average. Here is why:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 text-sm mb-2">Inventory costing = for the books</p>
              <p className="text-xs text-gray-600">How you account for inventory consumed affects your P&L and food cost percentage. This is a bookkeeping and tax decision.</p>
            </div>
            <div className="border border-orange-200 rounded-xl p-4 bg-orange-50">
              <p className="font-semibold text-orange-700 text-sm mb-2">Menu pricing = for profitability</p>
              <p className="text-xs text-gray-600">Your menu prices should be set based on the current market cost of your ingredients — updated whenever ingredient costs change significantly.</p>
            </div>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Your Menu Based on Current Costs</h2>
          <p className="text-orange-100 mb-5">MenuPricer calculates the right price for every dish based on today&apos;s ingredient costs — not last month&apos;s average. Stay profitable through price volatility.</p>
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
              { href: "/blog/restaurant-bookkeeping", title: "Restaurant Bookkeeping 101", desc: "How to set up inventory tracking and food cost accounting." },
              { href: "/blog/how-to-calculate-food-cost", title: "How to Calculate Food Cost", desc: "Step-by-step food cost calculation for any dish." },
              { href: "/blog/restaurant-seasonality", title: "Restaurant Seasonality", desc: "How to adjust menu prices when ingredient costs change seasonally." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The complete food cost percentage formula with examples." },
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
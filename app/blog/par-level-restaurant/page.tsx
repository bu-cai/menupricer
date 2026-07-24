import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Par Level in Restaurants: What It Means and How to Set It",
  description: "What is par level in a restaurant? The definition, how to calculate par levels for your inventory, and how par levels connect to actual vs theoretical food cost.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/par-level-restaurant" },
  openGraph: {
    title: "Par Level in Restaurants: What It Means and How to Set It",
    description: "Par level definition for restaurants — how to calculate par levels and use them to control food cost and reduce waste.",
    url: "https://www.aimenupricer.com/blog/par-level-restaurant",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Par Level in Restaurants: What It Means and How to Set It",
  description: "Par level meaning for restaurant operators — how to calculate par levels, why they matter for food cost control, and the actual vs theoretical food cost connection.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/par-level-restaurant",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Par Level in Restaurants", item: "https://www.aimenupricer.com/blog/par-level-restaurant" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is par level in a restaurant?", acceptedAnswer: { "@type": "Answer", text: "Par level (or par stock) in a restaurant is the minimum quantity of an ingredient or product that should always be in stock. When inventory falls to or below the par level, it is time to reorder. Par levels are set per item based on how much you use between delivery cycles. For example, if you use 40 lbs of ground beef per day and get deliveries every two days, you might set a par level of 90 lbs — enough for two days of use plus a 10 lb safety buffer." } },
    { "@type": "Question", name: "What is the difference between actual and theoretical food cost?", acceptedAnswer: { "@type": "Answer", text: "Theoretical food cost is what your food cost should be based on your recipes and sales mix — the cost you would have if every ingredient were used perfectly with zero waste. Actual food cost is what you actually spent on food in a given period, calculated from your invoices and inventory counts. The gap between actual and theoretical food cost is your variance, and it is one of the most important numbers in restaurant operations. A gap larger than 3–4% typically signals waste, over-portioning, unrecorded spoilage, or theft." } },
    { "@type": "Question", name: "How do you calculate par level?", acceptedAnswer: { "@type": "Answer", text: "Par level = (Average daily usage × Days between orders) + Safety stock. Example: Your restaurant uses 25 lbs of chicken breast per day. Your supplier delivers every 3 days. You want a 1-day safety buffer. Par level = (25 × 3) + 25 = 100 lbs. When your chicken stock falls below 100 lbs, you place an order." } },
    { "@type": "Question", name: "Why do par levels matter for food cost?", acceptedAnswer: { "@type": "Answer", text: "Par levels matter for food cost in two ways: (1) They prevent over-ordering, which reduces spoilage and waste. Excess stock that spoils before it can be used is a direct hit to your food cost. (2) They prevent under-ordering, which forces expensive last-minute orders or menu substitutions. Proper par levels keep your purchasing predictable and your food cost stable. Restaurants that skip par levels typically run 2–5 points higher food cost than those that track them carefully." } },
  ],
};

const PAR_EXAMPLES = [
  { item: "Chicken breast", usage: "30 lbs/day", cycle: "3 days", safety: "30 lbs", par: "120 lbs" },
  { item: "Ground beef", usage: "20 lbs/day", cycle: "3 days", safety: "20 lbs", par: "80 lbs" },
  { item: "Fresh salmon", usage: "8 lbs/day", cycle: "2 days", safety: "8 lbs", par: "24 lbs" },
  { item: "Roma tomatoes", usage: "15 lbs/day", cycle: "3 days", safety: "15 lbs", par: "60 lbs" },
  { item: "Heavy cream (qt)", usage: "4 qts/day", cycle: "3 days", safety: "4 qts", par: "16 qts" },
];

export default function ParLevelRestaurantPage() {
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
          <span className="text-gray-600">Par Level in Restaurants</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Par Level in Restaurants: What It Means and How to Set It</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Par level is one of the most practical tools in restaurant inventory management. Set it right and you eliminate both spoilage and stockouts. Ignore it and your food cost will always run higher than it should.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Par Level Formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-base font-black text-gray-900">
            Par Level = (Daily Usage × Days Between Orders) + Safety Stock
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is par level?</h2>
            <p className="text-gray-600 leading-relaxed">Par level (also called par stock or standing order) is the minimum quantity of an ingredient that should always be in your restaurant. When stock drops to this level, you order enough to bring it back to your target quantity.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Par is not the same as &ldquo;how much you need for one service&rdquo; — it is a reorder trigger point that accounts for your order cycle and a safety buffer. Setting par levels correctly means you always have enough stock without over-buying, which is the main cause of spoilage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate par level: step by step</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Measure average daily usage", b: "Track how much of each item you use per day over 2–4 weeks. Use your POS sales mix and recipe portions to calculate usage per item sold, or weigh remaining inventory before and after service. Aim for a 2-week average that captures both busy and slow days." },
                { n: "2", t: "Know your delivery cycle", b: "How many days between when you order and when the order arrives, including how often your supplier delivers? Most restaurant suppliers deliver 2–5 times per week. If your supplier delivers every Tuesday and Thursday and you order on Monday, your cycle is 2–3 days." },
                { n: "3", t: "Add a safety stock buffer", b: "Safety stock is extra inventory to protect against unexpected demand spikes or delivery delays. A common rule: 25–50% of one day's usage for perishables, one full day's usage for staples." },
                { n: "4", t: "Set the par level", b: "Par = (Daily usage × Delivery cycle days) + Safety stock. Check daily at opening and reorder any item that is at or below par." },
              ].map(({ n, t, b }) => (
                <div key={n} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <div><p className="font-bold text-gray-800">{t}</p><p className="text-sm text-gray-500 mt-1">{b}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Sample par level calculations</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Item</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Daily use</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Order cycle</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Safety stock</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Par level</th>
                </tr></thead>
                <tbody>
                  {PAR_EXAMPLES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.item}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{row.usage}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{row.cycle}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{row.safety}</td>
                      <td className="px-4 py-2.5 text-center font-black text-orange-600">{row.par}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Actual vs theoretical food cost — and where par levels come in</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Theoretical food cost is what your food cost <em>should</em> be based on your recipes and sales. Actual food cost is what you <em>really</em> spent. The gap between them is your variance — and it is the most important number most operators never track.</p>

            <div className="bg-gray-50 rounded-2xl p-5 text-sm mb-5">
              <p className="font-bold text-gray-800 mb-3">How to calculate actual vs theoretical food cost</p>
              <div className="space-y-1.5 text-gray-600">
                <div className="flex justify-between"><span>Beginning inventory value</span><span>$8,200</span></div>
                <div className="flex justify-between"><span>+ Purchases this week</span><span>$5,400</span></div>
                <div className="flex justify-between"><span>− Ending inventory value</span><span>$7,100</span></div>
                <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-1.5"><span>Actual food cost</span><span>$6,500</span></div>
                <div className="flex justify-between text-orange-600 font-black text-base border-t border-gray-300 pt-1.5"><span>Actual food cost %</span><span>33.5% (on $19,400 revenue)</span></div>
                <div className="flex justify-between text-gray-500 mt-1"><span>Theoretical food cost %</span><span>29.8%</span></div>
                <div className="flex justify-between text-red-500 font-bold border-t border-gray-200 pt-1.5"><span>Variance</span><span>3.7% ($718)</span></div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3">A 3.7% variance on $19,400 revenue is $718 of unexplained cost — every week. That is $37,000/year going somewhere unaccounted for.</p>

            <div className="space-y-3">
              <p className="font-bold text-gray-800">Common causes of actual vs theoretical variance:</p>
              {[
                { t: "Over-portioning", b: "Cooks are plating more than the recipe spec. Even 0.5 oz extra on a protein-heavy dish adds up fast across hundreds of covers." },
                { t: "Unrecorded spoilage", b: "Product thrown away without being counted in waste logs inflates your apparent food cost because you paid for it but did not sell it." },
                { t: "Incorrect par levels → over-ordering → spoilage", b: "Par levels set too high cause over-purchasing. The excess inventory spoils before it can be used. The cost of that spoilage appears in actual food cost but not in theoretical." },
                { t: "Theft or unrecorded employee meals", b: "Staff meals that are not tracked as a cost appear as food cost variance. Employee theft is less common but also shows up here." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Par level best practices</h2>
            <div className="space-y-3 text-sm">
              {[
                "Set different par levels for weekdays vs weekends if your volume varies significantly",
                "Review and update par levels quarterly — seasonal menu changes affect usage",
                "Count inventory at the same time every day — opening or closing service, consistently",
                "Separate par levels for perishables (short cycle) and dry goods (longer cycle)",
                "Track your variance weekly, not monthly — monthly reviews are too slow to catch waste",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-orange-500 font-black shrink-0">{i + 1}.</span>
                  <span className="text-gray-600">{tip}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Know your exact food cost per dish</h2>
            <p className="text-orange-100 text-sm mb-5">Controlling food cost starts with knowing exactly what each dish costs. MenuPricer calculates plate cost and food cost percentage for every item on your menu.</p>
            <Link href="/food-cost-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Food Cost Calculator →</Link>
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
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage Formula", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The complete food cost formula explained." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Average margins and how to improve yours." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Step-by-step ingredient costing guide." },
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
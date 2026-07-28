import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is Prime Cost? Restaurant Prime Cost Formula Explained",
  description: "What is prime cost in a restaurant? The prime cost formula (food cost + labor cost), what a good prime cost percentage is, and how to reduce it without cutting quality.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/prime-cost-restaurant" },
  openGraph: {
    title: "What Is Prime Cost? Restaurant Prime Cost Formula Explained",
    description: "Prime cost definition for restaurants — formula, benchmarks, and how to use it to improve profitability.",
    url: "https://www.aimenupricer.com/blog/prime-cost-restaurant",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "What Is Prime Cost? Restaurant Prime Cost Formula Explained",
  description: "What prime cost means in a restaurant, the prime cost formula, industry benchmarks, and strategies to reduce it without sacrificing quality.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/prime-cost-restaurant",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Prime Cost Restaurant", item: "https://www.aimenupricer.com/blog/prime-cost-restaurant" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is prime cost in a restaurant?", acceptedAnswer: { "@type": "Answer", text: "Prime cost in a restaurant is the sum of two largest controllable expenses: cost of goods sold (food and beverage cost) plus total labor cost (wages, salaries, payroll taxes, and benefits). It is called 'prime' cost because these two categories typically represent 55–70% of revenue and are the most directly controllable by management. All other costs — rent, utilities, marketing, insurance — are relatively fixed and harder to change quickly. Prime cost is where operational efficiency shows up first." } },
    { "@type": "Question", name: "What is the prime cost formula?", acceptedAnswer: { "@type": "Answer", text: "Prime cost = Cost of goods sold (COGS) + Total labor cost. As a percentage: Prime cost % = Prime cost ÷ Total revenue × 100. Example: If your restaurant has $80,000 in monthly revenue, $24,000 in food and beverage cost (30%), and $22,000 in labor cost (27.5%), your prime cost is $46,000 and your prime cost % is 57.5%. Most successful full-service restaurants keep prime cost below 60–65% of revenue." } },
    { "@type": "Question", name: "What is a good prime cost percentage for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A good prime cost percentage is 55–65% for full-service restaurants. Full-service restaurants typically run 28–35% food cost and 28–35% labor cost, totaling 56–70% prime cost. Fast casual and counter-service restaurants can operate at lower prime cost (50–58%) because they have less labor (no servers) and often lower food cost due to standardized menus. Fine dining typically runs higher prime cost (60–70%) because of the premium ingredients and higher staffing ratios required." } },
    { "@type": "Question", name: "How do I reduce prime cost?", acceptedAnswer: { "@type": "Answer", text: "To reduce prime cost, work both components separately. For food cost: reprice underperforming dishes, tighten portion controls, audit waste daily, and negotiate supplier pricing on high-volume ingredients. For labor cost: optimize scheduling to match staffing to actual covers, cross-train staff to reduce overtime, and measure labor cost as a percentage of each shift's revenue rather than just total hours. A 2-point reduction in food cost + 2-point reduction in labor cost equals a 4-point drop in prime cost — which on $1M revenue is $40,000 in recovered margin." } },
  ],
};

const BENCHMARKS = [
  { type: "Full-service casual", food: "28–33%", labor: "28–33%", prime: "56–66%", verdict: "Target" },
  { type: "Fast casual", food: "25–30%", labor: "25–30%", prime: "50–60%", verdict: "Strong" },
  { type: "Fine dining", food: "28–35%", labor: "32–38%", prime: "60–73%", verdict: "Acceptable" },
  { type: "Food truck", food: "28–35%", labor: "20–28%", prime: "48–63%", verdict: "Variable" },
  { type: "Bar / gastropub", food: "22–28%", labor: "28–35%", prime: "50–63%", verdict: "Target" },
];

export default function PrimeCostRestaurantPage() {
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
          <Link href="/restaurant-profit-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Profit Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Prime Cost Restaurant</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Profitability</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">What Is Prime Cost? Restaurant Prime Cost Formula Explained</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 24, 2026</p>
          <p className="text-lg text-gray-500 leading-relaxed">Prime cost is the single most useful number for diagnosing restaurant profitability. It combines your two largest controllable costs — food and labor — into one benchmark that tells you immediately whether your operation has room to be profitable.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Prime Cost Formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-base font-black text-gray-900 mb-2">
            Prime Cost = Food Cost + Labor Cost
          </div>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-sm text-gray-700">
            Prime Cost % = Prime Cost ÷ Total Revenue × 100
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Target: 55–65% for most full-service restaurants</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is prime cost?</h2>
            <p className="text-gray-600 leading-relaxed">Prime cost is the combined total of your cost of goods sold (COGS — food and beverage cost) and your total labor cost (all wages, salaries, payroll taxes, and benefits). Together, these two categories typically represent 55–70% of a restaurant's revenue.</p>
            <p className="text-gray-600 leading-relaxed mt-3">They are called &ldquo;prime&rdquo; costs because they are:</p>
            <ul className="space-y-2 mt-3">
              {[
                "The largest — together they usually dwarf rent, utilities, and all other costs",
                "The most controllable — unlike rent or insurance, you can change them with operational decisions",
                "The most immediate — changes show up in your numbers within days or weeks, not months",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-orange-500 mt-0.5">•</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">After prime cost, you still need to cover rent (5–10% of revenue), utilities (1–3%), marketing, insurance, repairs, and other overhead. If prime cost alone is already 70% or higher, there is mathematically no room for everything else plus profit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate prime cost: worked example</h2>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <p className="font-bold text-gray-800 mb-3">Monthly prime cost calculation — casual dining restaurant</p>
              <div className="space-y-1.5 text-gray-600">
                <div className="flex justify-between"><span>Total monthly revenue</span><span className="font-bold">$95,000</span></div>
                <div className="border-t border-gray-200 pt-1.5 mt-1.5">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1.5">Cost of Goods Sold</p>
                  {[
                    ["Food cost", "$24,700"],
                    ["Beverage cost", "$5,800"],
                    ["Total COGS", "$30,500"],
                  ].map(([l, v], i) => (
                    <div key={i} className={`flex justify-between ${i === 2 ? "font-bold text-gray-800" : ""}`}><span>{l}</span><span>{v}</span></div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-1.5 mt-1.5">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1.5">Labor Cost</p>
                  {[
                    ["FOH wages (servers, hosts)", "$14,200"],
                    ["BOH wages (cooks, prep)", "$10,500"],
                    ["Management salary", "$5,800"],
                    ["Payroll taxes + benefits", "$4,200"],
                    ["Total labor", "$34,700"],
                  ].map(([l, v], i) => (
                    <div key={i} className={`flex justify-between ${i === 4 ? "font-bold text-gray-800" : ""}`}><span>{l}</span><span>{v}</span></div>
                  ))}
                </div>
                <div className="border-t-2 border-orange-200 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between font-black text-gray-900 text-base"><span>Prime cost</span><span>$65,200</span></div>
                  <div className="flex justify-between font-black text-orange-600 text-lg"><span>Prime cost %</span><span>68.6%</span></div>
                  <p className="text-xs text-red-500 mt-1">⚠ Above the 65% target — profit is very tight with this cost structure</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Prime cost benchmarks by restaurant type</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Restaurant type</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Food cost</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Labor cost</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Prime cost</th>
                </tr></thead>
                <tbody>
                  {BENCHMARKS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.food}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.labor}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600">{row.prime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why prime cost beats tracking food and labor separately</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Food cost and labor cost trade off against each other in ways that matter for profitability. A restaurant might reduce food cost by switching to cheaper ingredients — but if it requires more prep labor, total prime cost might not improve. Tracking both together prevents these substitution effects from hiding in your numbers.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-black text-red-700 mb-2">Dangerous tradeoff (looks good individually)</p>
                <div className="space-y-1 text-red-600">
                  <div className="flex justify-between"><span>Food cost</span><span>25% ✓</span></div>
                  <div className="flex justify-between"><span>Labor cost</span><span>42% ✗</span></div>
                  <div className="flex justify-between font-bold border-t border-red-200 pt-1 mt-1"><span>Prime cost</span><span>67% ⚠</span></div>
                </div>
                <p className="text-xs text-red-500 mt-2">Low food cost masking a labor problem</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-black text-green-700 mb-2">Balanced (healthy prime cost)</p>
                <div className="space-y-1 text-green-700">
                  <div className="flex justify-between"><span>Food cost</span><span>31%</span></div>
                  <div className="flex justify-between"><span>Labor cost</span><span>29%</span></div>
                  <div className="flex justify-between font-bold border-t border-green-200 pt-1 mt-1"><span>Prime cost</span><span>60% ✓</span></div>
                </div>
                <p className="text-xs text-green-600 mt-2">Both components in range — room for profit</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to reduce prime cost</h2>
            <div className="space-y-4">
              <p className="font-bold text-gray-800">On the food cost side:</p>
              <div className="space-y-2">
                {[
                  "Reprice dishes where food cost exceeds 35% — even $1–2 increases on high-volume items shift the total significantly",
                  "Audit portion sizes quarterly — portion drift silently inflates food cost without changing the recipe",
                  "Track actual vs theoretical food cost weekly — the gap reveals waste, over-portioning, or unrecorded spoilage",
                  "Negotiate supplier pricing on your top 5 ingredients by spend",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-orange-400 mt-0.5 shrink-0">→</span><span>{tip}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-gray-800 mt-4">On the labor cost side:</p>
              <div className="space-y-2">
                {[
                  "Schedule to actual covers, not fixed shifts — avoid overstaffing slow days",
                  "Cross-train kitchen staff to reduce overtime when someone calls out",
                  "Measure labor cost per shift, not just monthly totals — lagging data hides weekly inefficiencies",
                  "Consider whether some prep tasks can be consolidated into off-peak prep hours rather than in-service hours",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-orange-400 mt-0.5 shrink-0">→</span><span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Control the food cost half of prime cost</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer calculates food cost percentage for every dish and suggests the right menu price to hit your food cost target — the first step to a healthy prime cost.</p>
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
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Average margins and how to improve yours." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Calculate your food cost % for any dish." },
                { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "Raise prices without losing customers." },
                { href: "/blog/restaurant-profit-loss-statement", title: "Restaurant P&L Statement", desc: "How to read and build your P&L." },
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
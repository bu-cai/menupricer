import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is a Good Restaurant Profit Margin? (2026 Benchmarks)",
  description:
    "Average restaurant profit margins by type, the biggest cost drivers that eat into net profit, and five strategies to improve your margin starting this week.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-profit-margin" },
  openGraph: {
    title: "What Is a Good Restaurant Profit Margin?",
    description: "Average profit margins by restaurant type and five strategies to improve yours.",
    url: "https://www.aimenupricer.com/blog/restaurant-profit-margin",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Restaurant owner reviewing profit margin on tablet" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is a Good Restaurant Profit Margin? (2026 Benchmarks)",
  description: "Average restaurant profit margins by type, the biggest cost drivers that eat into net profit, and five strategies to improve your margin.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-profit-margin",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Profit Margin", item: "https://www.aimenupricer.com/blog/restaurant-profit-margin" },
  ],
};

export default function RestaurantProfitMarginPost() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Profitability</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime="2026-07-01" className="text-xs text-gray-400">Updated July 2026</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          What Is a Good Restaurant Profit Margin?
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          The average restaurant net profit margin is 3–9%. That sounds thin — and it is. But the range is wide: some operators net 15–20%, others lose money every month. Here's what separates them, and how to move your number in the right direction.
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Average restaurant profit margins by type (2026)</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Restaurant Type</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Net Profit Margin</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Key Driver</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    ["Coffee shop / café", "6–15%", "Low ingredient cost, high beverage margin"],
                    ["Pizza restaurant", "7–15%", "Low food cost, delivery volume"],
                    ["Fast casual", "6–12%", "High volume, efficient operations"],
                    ["Food truck", "6–9%", "Low rent, offset by operational costs"],
                    ["Casual dining", "3–9%", "Higher labor and rent"],
                    ["Fine dining", "5–10%", "High prices offset high labor"],
                    ["Bakery", "4–9%", "High labor cost for scratch production"],
                    ["Bar / brewery", "10–15%", "Alcohol margins are exceptional"],
                    ["Steakhouse", "4–8%", "High revenue, but very high food cost"],
                  ].map(([type, margin, driver]) => (
                    <tr key={type} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-gray-700">{type}</td>
                      <td className="px-4 py-2.5"><span className="font-bold text-green-600">{margin}</span></td>
                      <td className="px-4 py-2.5 text-gray-400 text-xs">{driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>These are net profit margins — what's left after food cost, labor, rent, utilities, and everything else. Gross margin (before labor and overhead) runs much higher: typically 65–75%.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The three costs that eat your profit</h2>
            <p>Restaurant economics is simple: Revenue − (Food Cost + Labor Cost + Overhead) = Net Profit. The challenge is that all three cost buckets tend to grow faster than revenue.</p>
            <div className="space-y-4 mt-5">
              {[
                { cost: "Food cost", typical: "28–35% of revenue", risk: "Supplier price increases, over-portioning, waste, and theft all erode food cost silently. A 3% food cost creep on $500K revenue is $15,000 in lost profit annually." },
                { cost: "Labor cost", typical: "28–35% of revenue", risk: "The single biggest variable cost. Minimum wage increases, overtime, turnover (average restaurant loses $5,800 per departed employee), and understaffing all impact this line." },
                { cost: "Overhead (rent, utilities, etc.)", typical: "15–25% of revenue", risk: "Fixed costs don't flex with slow nights. A restaurant paying $8,000/month in rent needs $26,000–$32,000 in monthly revenue just to cover rent at industry-standard ratios." },
              ].map((item) => (
                <div key={item.cost} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.cost}</h3>
                    <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full shrink-0 ml-3">{item.typical}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.risk}</p>
                </div>
              ))}
            </div>
            <p className="mt-5">The industry rule of thumb: keep <strong className="text-gray-900">prime cost</strong> (food + labor) below 60–65% of revenue. Anything above that makes net profit nearly impossible at typical rent levels.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5 strategies to improve your profit margin</h2>
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Fix your menu pricing first",
                  body: "Underpriced dishes are the most common cause of thin margins. Calculate the true food cost for each dish and reprice anything running above your target food cost percentage. A 5% price increase across your menu with zero volume loss adds directly to net profit. Most restaurants can absorb a 3–5% price increase without meaningful guest pushback, especially if communicated as a quality story.",
                },
                {
                  num: "02",
                  title: "Cut your menu by 20–30%",
                  body: "The average restaurant menu is 20–40% larger than it needs to be. Every extra item creates inventory, waste, training complexity, and quality variance. Cutting underperforming items typically reduces food cost by 2–4% and improves kitchen consistency. Identify your bottom 20% sellers and audit whether they're worth keeping.",
                },
                {
                  num: "03",
                  title: "Increase average check size without adding covers",
                  body: "Training staff to suggest appetizers, desserts, wine pairings, and premium add-ons can increase average check by $4–$8 with minimal additional cost. A $5 dessert at 80% gross margin added to 30 covers per night is $1,200/month in incremental revenue — almost all of it falling to the bottom line.",
                },
                {
                  num: "04",
                  title: "Build a beverage program",
                  body: "Alcohol, specialty coffee, and premium non-alcoholic beverages typically run 70–85% gross margin — far higher than food. Restaurants where beverages represent 25–35% of revenue consistently outperform on net margin. Invest in your wine list, cocktail menu, and non-alcoholic options.",
                },
                {
                  num: "05",
                  title: "Price delivery correctly",
                  body: "Many restaurants are losing money on every delivery order without knowing it. DoorDash and Uber Eats take 15–30% commission. If your dine-in price is $14 and DoorDash takes 25%, you net $10.50 — which may be below your food cost plus packaging. Set delivery prices 18–25% higher than dine-in.",
                },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-5">
                  <span className="text-3xl font-black text-orange-200 shrink-0 leading-none">{s.num}</span>
                  <div>
                    <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What's a realistic profit margin target for your restaurant?</h2>
            <p>If you're currently at 0–3% net margin, start with menu pricing and prime cost control — these are quick wins. If you're at 4–7%, you're performing at industry average; optimize your beverage program and average check to push higher. If you're above 8%, you're outperforming most restaurants — focus on maintaining quality and protecting the drivers that got you there.</p>
            <div className="bg-gray-900 rounded-xl p-6 mt-5 text-center">
              <p className="text-sm text-gray-400 mb-1">Rule of thumb target</p>
              <p className="text-4xl font-black text-white mb-1">≥ 10%</p>
              <p className="text-sm text-gray-400">Net profit margin for a healthy independent restaurant</p>
            </div>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Fix your pricing to protect your margin</h2>
          <p className="text-orange-100 mb-6 text-sm">MenuPricer calculates food cost percentage and the right selling price for every dish — the fastest way to identify underpriced items on your menu.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Menu Pricing</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu →</p>
            </Link>
            <Link href="/restaurant-profit-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Restaurant Profit Calculator →</p>
            </Link>
            <Link href="/blog/delivery-platform-commission" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Delivery</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">DoorDash & Uber Eats Commission Rates →</p>
            </Link>
            <Link href="/compare" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Compare</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">MenuPricer vs Other Tools →</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

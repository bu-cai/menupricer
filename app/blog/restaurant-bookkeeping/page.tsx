import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Bookkeeping 101: Track Food Costs, Labor & Profit the Right Way",
  description: "Restaurant bookkeeping guide for owners — how to track food costs, labor, and profit. Includes chart of accounts, key ratios, and common mistakes that cost restaurants money.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-bookkeeping" },
  openGraph: {
    title: "Restaurant Bookkeeping 101: Track Food Costs, Labor & Profit the Right Way",
    description: "How to set up restaurant bookkeeping, track food cost and labor, and read your financial numbers like an owner.",
    url: "https://www.aimenupricer.com/blog/restaurant-bookkeeping",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Bookkeeping 101: Track Food Costs, Labor & Profit the Right Way",
  description: "Complete guide to restaurant bookkeeping — chart of accounts, food cost tracking, labor cost management, profit calculation, and common bookkeeping mistakes.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-bookkeeping",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Bookkeeping", item: "https://www.aimenupricer.com/blog/restaurant-bookkeeping" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do restaurants do bookkeeping?", acceptedAnswer: { "@type": "Answer", text: "Restaurants use either a bookkeeper, an accountant, or accounting software (QuickBooks, Restaurant365, or even a spreadsheet) to record daily sales, categorize expenses by type (food cost, labor, rent, utilities, etc.), reconcile bank accounts, and generate a weekly/monthly profit & loss statement. The key difference from other businesses is that restaurants must track food cost separately from other expenses, and account for inventory change when calculating true cost of goods sold." } },
    { "@type": "Question", name: "What is a good food cost percentage for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A good food cost percentage is 28–35% of revenue for most full-service restaurants. Fast casual targets 28–32%. Fine dining can run 25–30% because of higher menu prices. Food trucks and takeout concepts often target 30–35%. If your food cost is above 38%, you either have a pricing problem, a waste/theft problem, or both. Track it weekly, not just monthly." } },
    { "@type": "Question", name: "What is prime cost in restaurant bookkeeping?", acceptedAnswer: { "@type": "Answer", text: "Prime cost is food cost plus labor cost combined — it is the two largest controllable expenses in any restaurant. The formula is: Prime Cost = Cost of Goods Sold + Total Labor Cost. Target prime cost of 55–65% of revenue. If your prime cost exceeds 70%, the restaurant is unlikely to be profitable after fixed overhead (rent, utilities, equipment). Prime cost is the single most important number to track weekly." } },
    { "@type": "Question", name: "How often should a restaurant reconcile its books?", acceptedAnswer: { "@type": "Answer", text: "Sales and cash should be reconciled daily. Food cost should be tracked weekly (via inventory counts). A full profit & loss statement should be reviewed monthly. Quarterly reviews should compare against budget targets and prior year. Annual taxes and financial statements require a certified accountant. Daily reconciliation is especially important in restaurants because small daily variances compound quickly — a $20/day cash discrepancy is $7,300/year." } },
  ],
};

const ACCOUNTS = [
  { category: "Revenue", items: ["Food Sales", "Beverage Sales", "Alcohol Sales", "Delivery Revenue", "Catering Revenue"] },
  { category: "Cost of Goods Sold", items: ["Food Cost", "Beverage Cost", "Liquor/Bar Cost", "Packaging & Supplies"] },
  { category: "Labor", items: ["Kitchen Labor (hourly)", "FOH Labor (hourly)", "Management Salaries", "Payroll Taxes (FICA)", "Benefits & Insurance"] },
  { category: "Operating Expenses", items: ["Rent / Occupancy", "Utilities", "Equipment Maintenance", "Cleaning Supplies", "Marketing & Advertising"] },
  { category: "Administrative", items: ["Credit Card Processing Fees", "Software & POS Fees", "Accounting & Legal", "Licenses & Permits"] },
];

const BENCHMARKS = [
  { metric: "Food Cost %", formula: "Food Cost ÷ Food Sales", target: "28–35%", warning: ">38%" },
  { metric: "Beverage Cost %", formula: "Bev Cost ÷ Bev Sales", target: "18–24%", warning: ">28%" },
  { metric: "Labor Cost %", formula: "Total Labor ÷ Total Sales", target: "25–35%", warning: ">38%" },
  { metric: "Prime Cost %", formula: "Food + Labor ÷ Sales", target: "55–65%", warning: ">70%" },
  { metric: "Rent %", formula: "Rent ÷ Sales", target: "5–8%", warning: ">10%" },
  { metric: "Net Profit Margin", formula: "(Revenue - All Expenses) ÷ Revenue", target: "6–9%", warning: "<3%" },
];

export default function RestaurantBookkeepingPage() {
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
          <span className="text-gray-600">Restaurant Bookkeeping</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Finance</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Bookkeeping 101: Track Food Costs, Labor & Profit the Right Way
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Most restaurant owners understand food — they do not always understand numbers. This guide explains restaurant bookkeeping in plain terms: what accounts you need, which ratios to watch, and how to read your P&L so you always know if your restaurant is actually making money.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Restaurant Bookkeeping Is Different</h2>
          <p className="text-gray-600 mb-4">Restaurants have a more complex cost structure than most small businesses. You are dealing with:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {[
              { icon: "📦", label: "Perishable inventory", desc: "Must be tracked weekly or daily, not monthly" },
              { icon: "👥", label: "Complex labor", desc: "Tipped employees, split shifts, seasonal swings" },
              { icon: "💳", label: "High transaction volume", desc: "Hundreds of daily transactions to reconcile" },
              { icon: "📊", label: "Industry-specific ratios", desc: "Food cost %, prime cost %, covers per labor hour" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 border border-gray-200 rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Restaurant Chart of Accounts</h2>
          <p className="text-gray-600 mb-4">A chart of accounts is the list of categories your bookkeeping system uses. Here is a standard restaurant setup:</p>
          <div className="space-y-4">
            {ACCOUNTS.map((group, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 font-bold text-gray-800 text-sm">{group.category}</div>
                <div className="divide-y divide-gray-100">
                  {group.items.map((item, j) => (
                    <div key={j} className="px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Track Food Cost Correctly</h2>
          <p className="text-gray-600 mb-4">Most restaurants make one critical mistake: they use purchases as food cost. The correct formula accounts for inventory:</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-gray-900 mb-3">True Food Cost Formula</p>
            <div className="font-mono text-sm bg-white rounded-lg p-4 border border-orange-200">
              <p className="text-gray-600">Food Cost = Opening Inventory</p>
              <p className="text-gray-600 pl-8">+ Purchases</p>
              <p className="text-gray-600 pl-8">– Closing Inventory</p>
              <p className="font-bold text-orange-600 mt-2">= Cost of Goods Sold (COGS)</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">If you bought $5,000 in food this week but your closing inventory is $800 higher than your opening inventory, your actual food cost is $4,200 — not $5,000. Taking weekly inventory counts is the only way to know your true cost of goods sold.</p>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-2">Practical Weekly Inventory Process</p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-5">
              <li>Count all inventory before deliveries on the same day each week (Sunday morning works well)</li>
              <li>Record quantities by category: proteins, dairy, produce, dry goods, beverages</li>
              <li>Multiply quantities × cost per unit = total inventory value</li>
              <li>Apply the COGS formula above</li>
              <li>Divide COGS by that week&apos;s food revenue = food cost %</li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Key Restaurant Financial Benchmarks</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Metric</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Formula</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Target</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Warning</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row.metric}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100 font-mono">{row.formula}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="bg-green-100 text-green-700 font-semibold text-xs px-2 py-0.5 rounded-full">{row.target}</span>
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="bg-red-100 text-red-700 font-semibold text-xs px-2 py-0.5 rounded-full">{row.warning}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6 Common Restaurant Bookkeeping Mistakes</h2>
          <div className="space-y-3">
            {[
              { mistake: "Using purchases as food cost instead of COGS", fix: "Do weekly inventory counts and use the Opening + Purchases - Closing formula" },
              { mistake: "Not separating food and beverage cost categories", fix: "Track food, non-alcoholic beverages, and alcohol in separate accounts — each has different margin targets" },
              { mistake: "Tracking labor as one line item", fix: "Separate kitchen labor from FOH labor — they have different cost targets and solutions when high" },
              { mistake: "Reconciling books monthly instead of weekly", fix: "Reconcile sales daily, inventory weekly, full P&L monthly — problems compound fast in food service" },
              { mistake: "Not accounting for comps, voids, and waste", fix: "Track comps and voids in your POS and record them as a separate expense category, not a reduction in revenue" },
              { mistake: "Mixing personal and business finances", fix: "Separate bank accounts from day one — commingled finances make bookkeeping nearly impossible and create tax liability" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-red-600 text-sm mb-1">✗ {item.mistake}</p>
                <p className="text-gray-600 text-sm">✓ {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Pricing Is the Upstream Lever</h2>
          <p className="text-orange-100 mb-5">Good bookkeeping tells you where your money went. Correct menu pricing controls where it goes. Use MenuPricer to price every dish based on actual food cost — so your P&L reflects your intent, not accidents.</p>
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
              { href: "/blog/prime-cost-restaurant", title: "Restaurant Prime Cost Guide", desc: "How to calculate and reduce prime cost to improve profit margins." },
              { href: "/blog/restaurant-profit-loss-statement", title: "Restaurant P&L Statement", desc: "How to read and use a restaurant profit & loss statement." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The formula for calculating food cost percentage on any dish." },
              { href: "/blog/restaurant-kpis", title: "8 Restaurant KPIs to Track", desc: "Key performance indicators every restaurant owner should monitor." },
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
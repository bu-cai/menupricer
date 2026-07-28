import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Profit and Loss Statement: A Simple Guide for Operators",
  description: "How to read and build a restaurant profit and loss statement — the key line items, what a restaurant chart of accounts looks like, and how to use your P&L to improve margins.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-profit-loss-statement" },
  openGraph: {
    title: "Restaurant Profit and Loss Statement: A Simple Guide for Operators",
    description: "Restaurant P&L guide — line items, chart of accounts, benchmarks, and how to use it to improve profitability.",
    url: "https://www.aimenupricer.com/blog/restaurant-profit-loss-statement",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Profit and Loss Statement: A Simple Guide for Operators",
  description: "How to read a restaurant profit and loss statement, what each line item means, and how to use the P&L to find and fix the biggest drains on profitability.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-profit-loss-statement",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant P&L Statement", item: "https://www.aimenupricer.com/blog/restaurant-profit-loss-statement" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a restaurant profit and loss statement?", acceptedAnswer: { "@type": "Answer", text: "A restaurant profit and loss statement (P&L, also called an income statement) is a financial document that summarizes your restaurant's revenue, costs, and resulting profit or loss over a specific period — usually a week, month, or year. It lists all income at the top, subtracts each cost category in order (food cost, labor, rent, utilities, etc.), and shows your net profit or loss at the bottom. Unlike a balance sheet, a P&L only covers operating activity during the period — not assets or liabilities." } },
    { "@type": "Question", name: "What is a restaurant chart of accounts?", acceptedAnswer: { "@type": "Answer", text: "A restaurant chart of accounts is the organized list of all financial categories (accounts) that a restaurant uses to track income and expenses. It determines how line items appear on your P&L. A typical restaurant chart of accounts includes: Revenue accounts (food sales, beverage sales, catering), Cost of Goods Sold (food cost, beverage cost), Labor (FOH wages, BOH wages, management, benefits, payroll taxes), Occupancy (rent, property tax, utilities), Operating expenses (supplies, marketing, repairs, POS fees), and Administrative (accounting, insurance, licenses)." } },
    { "@type": "Question", name: "What is a good net profit margin for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A good net profit margin for a restaurant is 3–9%. The restaurant industry has some of the thinnest margins of any business — most restaurants that are considered financially healthy net 5–7% after all costs. Fast casual and counter-service concepts can reach 10–15% with lower labor costs. Fine dining often nets 3–5% despite higher menu prices, because the ingredient quality and service ratios required eat into margin. A net profit below 3% leaves almost no cushion for unexpected costs or a slow month." } },
    { "@type": "Question", name: "How often should I review my restaurant P&L?", acceptedAnswer: { "@type": "Answer", text: "Review your restaurant P&L at minimum monthly — ideally weekly for the most controllable line items (food cost and labor). Monthly P&L review lets you catch cost creep before it compounds. Weekly food cost tracking (using inventory counts and purchase records) catches over-ordering and waste in time to fix it that week rather than a month later. Annual P&L review with your accountant is important for tax planning and benchmarking against prior years, but it is not a management tool — it is too infrequent to drive decisions." } },
  ],
};

const PL_LINES = [
  { section: "Revenue", items: [
    { account: "Food sales", typical: "70–80% of revenue", note: "Your primary revenue stream" },
    { account: "Beverage sales (alcohol)", typical: "15–25% of revenue", note: "Higher margin than food" },
    { account: "Non-alcoholic beverages", typical: "2–5% of revenue", note: "Coffee, soda, juice" },
    { account: "Catering / events", typical: "Varies", note: "If applicable" },
  ]},
  { section: "Cost of Goods Sold", items: [
    { account: "Food cost", typical: "28–35% of food sales", note: "Track per dish" },
    { account: "Beverage cost (alcohol)", typical: "18–28% of bev sales", note: "Beer/wine/spirits differ" },
    { account: "Non-alcoholic beverage cost", typical: "15–25% of NAlc sales", note: "Coffee has low cost %" },
  ]},
  { section: "Labor Cost", items: [
    { account: "FOH wages (servers, hosts, bussers)", typical: "12–18% of revenue", note: "" },
    { account: "BOH wages (cooks, prep, dish)", typical: "10–16% of revenue", note: "" },
    { account: "Management salaries", typical: "5–8% of revenue", note: "" },
    { account: "Payroll taxes (FICA, FUTA, SUTA)", typical: "~8% of gross wages", note: "Employer portion" },
    { account: "Benefits (health, 401k)", typical: "2–5% of revenue", note: "If offered" },
  ]},
  { section: "Occupancy", items: [
    { account: "Rent / base lease", typical: "5–10% of revenue", note: "Location dependent" },
    { account: "Property taxes", typical: "Varies", note: "" },
    { account: "Utilities (gas, electric, water)", typical: "2–4% of revenue", note: "" },
    { account: "Trash removal", typical: "0.5–1%", note: "" },
  ]},
  { section: "Operating Expenses", items: [
    { account: "Supplies (smallwares, to-go, cleaning)", typical: "1–3%", note: "" },
    { account: "Marketing & advertising", typical: "1–3%", note: "" },
    { account: "POS / software fees", typical: "0.5–1.5%", note: "" },
    { account: "Repairs & maintenance", typical: "0.5–1.5%", note: "" },
    { account: "Credit card processing fees", typical: "1.5–3%", note: "" },
  ]},
  { section: "Administrative", items: [
    { account: "Insurance (liability, workers comp)", typical: "1–2%", note: "" },
    { account: "Accounting / legal", typical: "0.5–1.5%", note: "" },
    { account: "Licenses & permits", typical: "0.2–0.5%", note: "" },
  ]},
];

export default function RestaurantProfitLossPage() {
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
          <span className="text-gray-600">Restaurant P&L Statement</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Profitability</span>
            <span className="text-xs text-gray-400">8 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Restaurant Profit and Loss Statement: A Simple Guide for Operators</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 24, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">A restaurant P&L tells you exactly where your money is going — and where you are leaking margin. This guide walks through every line item, shows you the benchmarks, and explains how to use the numbers to make better decisions.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a restaurant profit and loss statement?</h2>
            <p className="text-gray-600 leading-relaxed">A profit and loss statement (P&L) is a financial summary of your restaurant's revenue, costs, and profit or loss over a defined period — typically a week, a month, or a year. It is the primary tool restaurant operators use to understand financial performance and diagnose problems.</p>
            <p className="text-gray-600 leading-relaxed mt-3">The P&L flows in one direction: revenue at the top, costs subtracted in order of controllability (food cost, then labor, then fixed costs), and net profit or loss at the bottom. The structure is the same whether you are running a single taco truck or a multi-unit group.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Restaurant P&L example: full line-item breakdown</h2>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm mb-4">
              <p className="font-bold text-gray-800 mb-4">Monthly P&L — casual dining, $110,000 revenue</p>
              <div className="space-y-4">
                {[
                  { label: "REVENUE", items: [["Food sales", "$83,000", "75.5%"], ["Beverage sales", "$22,000", "20%"], ["Other (delivery, merch)", "$5,000", "4.5%"], ["Total Revenue", "$110,000", "100%"]] },
                  { label: "COST OF GOODS SOLD", items: [["Food cost", "$26,560", "32%"], ["Beverage cost", "$4,400", "20%"], ["Total COGS", "$30,960", "28.1%"]] },
                  { label: "GROSS PROFIT", items: [["Gross Profit", "$79,040", "71.9%"]] },
                  { label: "LABOR", items: [["FOH wages", "$14,300", "13%"], ["BOH wages", "$12,100", "11%"], ["Management", "$7,700", "7%"], ["Payroll taxes + benefits", "$5,500", "5%"], ["Total Labor", "$39,600", "36%"]] },
                  { label: "PRIME COST TOTAL", items: [["Prime Cost", "$70,560", "64.1%"]] },
                  { label: "OCCUPANCY", items: [["Rent", "$8,800", "8%"], ["Utilities", "$2,750", "2.5%"], ["Total Occupancy", "$11,550", "10.5%"]] },
                  { label: "OPERATING & ADMIN", items: [["Supplies", "$1,650", "1.5%"], ["Marketing", "$1,100", "1%"], ["Insurance + POS + other", "$2,200", "2%"], ["Total Other", "$4,950", "4.5%"]] },
                  { label: "NET PROFIT", items: [["Net Profit", "$3,940", "3.6%"]] },
                ].map(({ label, items }) => (
                  <div key={label}>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
                    {items.map(([l, v, pct], i) => {
                      const isTotal = l.startsWith("Total") || l === "Gross Profit" || l === "Prime Cost" || l === "Net Profit";
                      return (
                        <div key={i} className={`flex justify-between py-0.5 ${isTotal ? "font-black text-gray-900 border-t border-gray-300 pt-1 mt-0.5" : "text-gray-600"} ${l === "Net Profit" ? "text-green-600 text-base" : ""} ${l === "Prime Cost" ? "text-orange-600" : ""}`}>
                          <span>{l}</span>
                          <span className="flex gap-4"><span className="w-20 text-right">{v}</span><span className="w-10 text-right text-gray-400">{pct}</span></span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Restaurant chart of accounts: full reference</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Your chart of accounts determines how expenses get categorized on your P&L. Here is a standard restaurant chart of accounts with typical benchmarks:</p>
            {PL_LINES.map(({ section, items }) => (
              <div key={section} className="mb-5">
                <p className="text-xs font-black text-orange-600 uppercase tracking-widest mb-2">{section}</p>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <tbody>
                      {items.map((row, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="px-4 py-2.5 font-medium text-gray-800 w-1/2">{row.account}</td>
                          <td className="px-4 py-2.5 text-orange-600 font-bold text-xs w-1/4">{row.typical}</td>
                          <td className="px-4 py-2.5 text-gray-400 text-xs hidden sm:table-cell">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to use your P&L to improve profitability</h2>
            <div className="space-y-3">
              {[
                { t: "Compare each line to benchmark %", b: "If your food cost is 36% and the benchmark is 28–35%, that specific line is where to focus. Do not try to fix everything at once — rank by dollar impact and address the biggest deviations first." },
                { t: "Track week-over-week, not just month-over-month", b: "Monthly P&Ls are useful for big-picture analysis. Weekly tracking of food cost and labor cost catches problems in time to fix them that month, not the next one." },
                { t: "Separate food and beverage COGS", b: "Combining them hides problems. Alcohol typically carries a 20–28% cost vs food at 28–35%. If your combined COGS is high, you need to know whether it is coming from food waste or from over-pouring." },
                { t: "Watch your prime cost first", b: "Food cost + labor cost is your biggest lever. A 2-point reduction in prime cost on $1M annual revenue is $20,000 straight to profit. Focus here before optimizing smaller line items." },
                { t: "Review supplier invoices against your COGS", b: "If your food cost is running above target but your recipes have not changed, the first place to look is your invoice prices. Supplier price increases without menu price adjustments erode margin invisibly." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Fix the food cost line on your P&L</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer calculates the exact food cost percentage for every dish and tells you the menu price needed to hit your target — the first step to a P&L that works in your favor.</p>
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
                { href: "/blog/prime-cost-restaurant", title: "What Is Prime Cost?", desc: "Food cost + labor cost — the key P&L metric." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Benchmarks and how to improve yours." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "Increase revenue without losing customers." },
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
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
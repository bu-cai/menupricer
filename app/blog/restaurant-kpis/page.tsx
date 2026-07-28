import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "8 Restaurant KPIs Every Owner Should Track",
  description: "The 8 most important restaurant KPIs — food cost %, labor cost %, prime cost, table turnover, average check, RevPASH, and more. What they mean and how to improve each.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-kpis" },
  openGraph: {
    title: "8 Restaurant KPIs Every Owner Should Track",
    description: "Track these 8 restaurant KPIs weekly and you will always know where your money is going — and what to do about it.",
    url: "https://www.aimenupricer.com/blog/restaurant-kpis",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "8 Restaurant KPIs Every Owner Should Track",
  description: "The 8 most critical restaurant KPIs: food cost percentage, labor cost percentage, prime cost, table turnover rate, average check size, RevPASH, customer acquisition cost, and net profit margin.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-kpis",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant KPIs", item: "https://www.aimenupricer.com/blog/restaurant-kpis" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the most important KPIs for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "The most important restaurant KPIs are: (1) Food cost percentage — target 28–35%, (2) Labor cost percentage — target 25–35%, (3) Prime cost (food + labor) — target 55–65%, (4) Table turnover rate — how many times each table seats a new party per service, (5) Average check size — revenue per guest, (6) RevPASH (Revenue Per Available Seat Hour) — combines turnover and check size into one efficiency metric, (7) Net profit margin — target 6–9%. These seven numbers together give you a complete picture of restaurant performance." } },
    { "@type": "Question", name: "What is RevPASH in restaurants?", acceptedAnswer: { "@type": "Answer", text: "RevPASH (Revenue Per Available Seat Hour) is calculated as: Total Revenue ÷ (Number of Seats × Hours Open). It combines table turnover and average check into one metric that measures how efficiently you are using your dining room. A restaurant with 50 seats open 6 hours generating $3,000 has a RevPASH of $10. Benchmark targets vary by format: casual dining $12–18, fine dining $20–35, fast casual $8–15." } },
    { "@type": "Question", name: "How do I reduce food cost in a restaurant?", acceptedAnswer: { "@type": "Answer", text: "To reduce food cost: (1) Take weekly inventory counts to find waste and shrinkage, (2) Recalculate food cost percentages for every dish and reprice items above your target, (3) Standardize recipe portions so every cook uses exactly the same amount, (4) Reduce menu size to focus on high-margin, popular items, (5) Renegotiate supplier contracts quarterly, (6) Implement FIFO (first in, first out) rotation to minimize spoilage, (7) Track and categorize waste — is it cooking waste, spoilage, or theft?" } },
  ],
};

const KPIS = [
  {
    num: 1,
    name: "Food Cost Percentage",
    formula: "(Food Cost ÷ Food Revenue) × 100",
    target: "28–35%",
    frequency: "Weekly",
    color: "orange",
    desc: "The percentage of your food revenue spent on ingredients. The single most important controllable cost in your restaurant. Calculate it weekly using actual inventory counts — not purchases.",
    improve: "Standardize portions, take weekly inventory, reprice dishes where food cost exceeds target, reduce menu size to eliminate low-margin items.",
  },
  {
    num: 2,
    name: "Labor Cost Percentage",
    formula: "(Total Labor ÷ Total Revenue) × 100",
    target: "25–35%",
    frequency: "Weekly",
    color: "blue",
    desc: "The percentage of revenue spent on all labor — kitchen, FOH, management, and payroll taxes. Labor is your second-largest cost and the one most operators undertrack.",
    improve: "Schedule based on projected covers, not habit. Cross-train staff. Use sales-per-labor-hour as a scheduling target. Reduce management overlap on slow shifts.",
  },
  {
    num: 3,
    name: "Prime Cost",
    formula: "Food Cost + Labor Cost",
    target: "55–65% of revenue",
    frequency: "Weekly",
    color: "red",
    desc: "Prime cost is food plus labor — the two largest controllable expenses combined. If prime cost exceeds 70%, the restaurant almost certainly cannot pay rent, utilities, and turn a profit.",
    improve: "Track weekly. If prime cost is high, determine which component (food or labor) is the driver before taking action. Trying to fix labor when food cost is the problem wastes time.",
  },
  {
    num: 4,
    name: "Table Turnover Rate",
    formula: "Guests Served ÷ Number of Seats",
    target: "2–3x per lunch / 1.5–2.5x dinner",
    frequency: "Per service",
    color: "green",
    desc: "How many times each seat is filled per meal period. Higher turnover means more revenue from the same square footage. Fast casual targets 3–5x. Fine dining targets 1–1.5x.",
    improve: "Bus tables faster. Pre-set tables between turns. Train servers to read table readiness. Consider whether your menu or service style is creating long check times.",
  },
  {
    num: 5,
    name: "Average Check Size",
    formula: "Total Revenue ÷ Number of Covers",
    target: "Varies by concept",
    frequency: "Daily",
    color: "purple",
    desc: "Revenue per guest. Increasing average check size by $2–3 through upselling, appetizers, or beverage programs can add $50,000–100,000 per year in a 100-seat restaurant without adding a single new guest.",
    improve: "Train servers to suggest add-ons (appetizers, desserts, premium beverages). Engineer your menu to make high-margin items visually prominent. Add wine pairings by the glass.",
  },
  {
    num: 6,
    name: "RevPASH",
    formula: "Revenue ÷ (Seats × Hours Open)",
    target: "$12–18 casual / $20–35 fine dining",
    frequency: "Weekly",
    color: "teal",
    desc: "Revenue Per Available Seat Hour — combines table turnover and average check into one efficiency metric. The best single measure of how well your dining room generates revenue.",
    improve: "Increase average check (higher RevPASH per turn) or reduce seat idle time (more turns per hour). RevPASH below benchmark usually means either long dwell times or off-peak dead zones.",
  },
  {
    num: 7,
    name: "Guest Return Rate",
    formula: "Returning Guests ÷ Total Guests",
    target: ">30% monthly",
    frequency: "Monthly",
    color: "yellow",
    desc: "What percentage of your guests come back within 30 days. Loyal guests spend 67% more than first-time visitors. Tracking this requires a loyalty program or reservation system.",
    improve: "Launch a loyalty program. Follow up on negative reviews within 24 hours. Train staff to remember regular guests by name and preference. Email list with value (not just promotions).",
  },
  {
    num: 8,
    name: "Net Profit Margin",
    formula: "(Net Profit ÷ Total Revenue) × 100",
    target: "6–9%",
    frequency: "Monthly",
    color: "gray",
    desc: "What percentage of revenue you actually keep after all expenses. The restaurant industry average is 3–9%. If this number is below 3%, the business is not viable long-term without significant changes.",
    improve: "Net profit is the output — it is improved by moving the inputs (food cost, labor, rent). Do not try to fix net margin directly; fix the KPIs above and net margin follows.",
  },
];

export default function RestaurantKPIsPage() {
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
          <span className="text-gray-600">Restaurant KPIs</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Finance & Operations</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          8 Restaurant KPIs Every Owner Should Track
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Most restaurant owners find out they have a problem when they look at their bank balance. The operators who survive long-term catch problems in their KPIs — weeks before they hit cash. Here are the 8 numbers that matter most and exactly how to track them.
        </p>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3">Quick Reference: All 8 KPIs</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {KPIS.map((kpi) => (
              <div key={kpi.num} className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 bg-orange-500 text-white font-black rounded-full flex items-center justify-center text-xs flex-shrink-0">{kpi.num}</span>
                <span className="text-gray-700 font-medium">{kpi.name}</span>
                <span className="ml-auto text-xs text-orange-600 font-semibold">{kpi.target.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 mb-10">
          {KPIS.map((kpi) => (
            <section key={kpi.num} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 text-white font-black text-lg rounded-full flex items-center justify-center flex-shrink-0">{kpi.num}</div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-black text-gray-900 text-lg">{kpi.name}</h2>
                  <p className="text-xs font-mono text-gray-500 mt-0.5">{kpi.formula}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full block mb-1">{kpi.target}</span>
                  <span className="text-xs text-gray-400">{kpi.frequency}</span>
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{kpi.desc}</p>
                <div className="bg-orange-50 rounded-lg px-4 py-3 text-sm">
                  <span className="font-semibold text-orange-700">How to improve: </span>
                  <span className="text-gray-700">{kpi.improve}</span>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Set Up a Weekly KPI Dashboard</h2>
          <p className="text-gray-600 mb-4">You do not need restaurant management software to track these KPIs. A weekly spreadsheet with these columns covers everything that matters:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  {["Week", "Revenue", "Food Cost %", "Labor %", "Prime Cost %", "Avg Check", "Covers", "Net Margin"].map((h) => (
                    <th key={h} className="px-3 py-2 font-semibold text-gray-700 border border-gray-200 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jul 14", "$28,400", "31.2%", "29.8%", "61.0%", "$24.50", "1,159", "7.2%"],
                  ["Jul 21", "$31,200", "29.5%", "28.1%", "57.6%", "$26.00", "1,200", "9.1%"],
                  ["Jul 28", "$29,800", "33.8%", "31.2%", "65.0%", "$24.80", "1,202", "4.5%"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-3 py-2 border border-gray-200 ${j === 0 ? "font-medium text-gray-700" : "text-gray-600"} ${(j === 2 && parseFloat(cell) > 35) ? "text-red-600 font-bold" : ""} ${(j === 4 && parseFloat(cell) > 65) ? "text-red-600 font-bold" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">The Jul 28 week shows warning signs: food cost and prime cost both elevated. That warrants an inventory audit before the next week.</p>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Fix Food Cost at the Source: Menu Pricing</h2>
          <p className="text-orange-100 mb-5">Every dish you underprice pushes food cost % higher. MenuPricer calculates the right price for every item based on actual ingredient cost — so your KPIs reflect your intent.</p>
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
              { href: "/blog/prime-cost-restaurant", title: "Restaurant Prime Cost Guide", desc: "How to calculate and reduce prime cost step by step." },
              { href: "/blog/restaurant-bookkeeping", title: "Restaurant Bookkeeping 101", desc: "Set up the financial tracking system to get these KPIs each week." },
              { href: "/blog/restaurant-budget-template", title: "Restaurant Budget Template", desc: "Forecast food cost, labor, and revenue with a budget template." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The formula behind the most important restaurant KPI." },
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
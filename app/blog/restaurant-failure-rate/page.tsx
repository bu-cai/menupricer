import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Failure Rate: Why Most Restaurants Fail and How Pricing Fixes It",
  description: "The real restaurant failure rate, what actually causes restaurants to close, and how fixing your menu pricing can solve the underlying profitability problems.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-failure-rate" },
  openGraph: {
    title: "Restaurant Failure Rate: Why Most Restaurants Fail and How Pricing Fixes It",
    description: "Restaurant failure statistics, root causes of closure, and how menu pricing directly addresses the most common reasons restaurants go under.",
    url: "https://www.aimenupricer.com/blog/restaurant-failure-rate",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Failure Rate: Why Most Restaurants Fail and How Pricing Fixes It",
  description: "The restaurant failure rate is often cited as 90% — the reality is more nuanced. Learn what actually causes restaurants to close, and how pricing is at the center of most failures.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-failure-rate",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Failure Rate", item: "https://www.aimenupricer.com/blog/restaurant-failure-rate" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What percentage of restaurants fail?", acceptedAnswer: { "@type": "Answer", text: "Approximately 17% of restaurants close in their first year, and around 50% close within five years, according to research from Cornell University and the National Restaurant Association. The commonly cited '90% failure rate' is a myth. The real numbers are still high — restaurant failure rates are about 3-4x higher than for other small businesses — but the majority of restaurants that open do survive their first year." } },
    { "@type": "Question", name: "Why do most restaurants fail?", acceptedAnswer: { "@type": "Answer", text: "The primary causes of restaurant failure are: (1) Undercapitalization — opening without enough working capital to survive the first slow months, (2) Poor food cost control — menu prices that do not reflect actual ingredient costs, (3) Labor cost mismanagement — scheduling too many staff relative to revenue, (4) High rent relative to sales — signing a lease where rent exceeds 8-10% of projected revenue, and (5) Concept mismatch with the market — offering the wrong food at the wrong price in the wrong location. Most of these failures trace back to pricing and financial planning done before the restaurant opened." } },
    { "@type": "Question", name: "How can a restaurant avoid failure?", acceptedAnswer: { "@type": "Answer", text: "The clearest path to survival: (1) Build a financial model before you open, with realistic sales projections and a 6-month cash reserve, (2) Calculate the actual cost of every menu item and price it to achieve 28-35% food cost, (3) Set labor schedules based on revenue projections, not staffing preferences, (4) Negotiate rent at no more than 6-8% of projected gross sales, and (5) Track your actual vs. budgeted costs weekly — not monthly. Restaurants that monitor their numbers weekly have significantly higher survival rates than those that review finances monthly or less." } },
    { "@type": "Question", name: "Does bad food cause restaurants to fail?", acceptedAnswer: { "@type": "Answer", text: "Rarely. Food quality is almost never the primary cause of restaurant failure. Most restaurants that close were serving acceptable or even good food. The overwhelming cause of failure is financial mismanagement: food cost percentages above 38%, labor costs above 40%, or simply running out of working capital in the first 6-12 months before revenue stabilized. Excellent food with terrible pricing can fail just as quickly as average food with excellent financial management — sometimes faster, because high-quality ingredients cost more." } },
  ],
};

const FAILURE_CAUSES = [
  { rank: 1, cause: "Undercapitalization", detail: "Not enough working capital to survive the first 6-12 months before revenue stabilizes", how_pricing_helps: "Accurate pricing from day 1 means higher margins and slower cash burn from the start" },
  { rank: 2, cause: "Poor food cost control", detail: "Menu prices set by intuition, not by actual ingredient cost calculation", how_pricing_helps: "Recipe costing ensures every dish achieves target food cost percentage" },
  { rank: 3, cause: "Labor cost mismanagement", detail: "Overstaffing or paying above-market rates without corresponding revenue", how_pricing_helps: "Higher margins give you room to staff properly without squeezing labor" },
  { rank: 4, cause: "High rent-to-revenue ratio", detail: "Signed a lease where rent exceeds 10-12% of revenue — impossible to profit", how_pricing_helps: "Correct pricing at opening can partially offset high occupancy; menu engineering increases revenue per seat" },
  { rank: 5, cause: "Concept-market mismatch", detail: "Wrong food, wrong price point, or wrong location for the customer base", how_pricing_helps: "Price-sensitivity analysis and competitive benchmarking can identify mismatches before they become fatal" },
  { rank: 6, cause: "Poor financial monitoring", detail: "Reviewing finances monthly or quarterly instead of weekly — corrections come too late", how_pricing_helps: "Weekly food cost tracking catches pricing problems in weeks, not months" },
];

export default function RestaurantFailureRatePage() {
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
          <span className="text-gray-600">Restaurant Failure Rate</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Restaurant Business</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Failure Rate: Why Most Restaurants Fail and How Pricing Fixes It
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026 · Reviewed by the MenuPricer Team</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          You have heard the statistic: 90% of restaurants fail in the first year. It is wrong — but the real numbers are still sobering. And the root cause almost always traces back to one place: menu pricing and financial planning done before the doors ever opened.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Real Restaurant Failure Rate</h2>
          <p className="text-gray-600 mb-4">The 90% myth has been cited so often it feels true. The actual research tells a different story — but not a comfortable one:</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <div className="border border-red-200 bg-red-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-black text-red-600 mb-1">17%</p>
              <p className="text-sm font-semibold text-gray-700">Close in Year 1</p>
              <p className="text-xs text-gray-500 mt-1">Cornell University / NRA data</p>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-black text-orange-500 mb-1">~50%</p>
              <p className="text-sm font-semibold text-gray-700">Close Within 5 Years</p>
              <p className="text-xs text-gray-500 mt-1">Across all restaurant types</p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-black text-yellow-600 mb-1">3-4×</p>
              <p className="text-sm font-semibold text-gray-700">vs. Other Small Biz</p>
              <p className="text-xs text-gray-500 mt-1">Higher failure rate than retail</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm bg-gray-50 rounded-lg p-4">The majority of restaurants that open do survive their first year. But the 5-year survival rate is still significantly worse than other industries — and the reasons are largely preventable.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Actually Causes Restaurants to Fail</h2>
          <p className="text-gray-600 mb-5">Contrary to popular belief, bad food is almost never the primary cause. The overwhelming causes are financial — and most of them connect directly to menu pricing:</p>
          <div className="space-y-4">
            {FAILURE_CAUSES.map((item) => (
              <div key={item.rank} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-black text-sm">{item.rank}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">{item.cause}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.detail}</p>
                    <p className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-lg px-3 py-1.5">
                      <span className="font-bold">How pricing helps: </span>{item.how_pricing_helps}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Pricing Death Spiral</h2>
          <p className="text-gray-600 mb-4">Most restaurant failures follow a predictable pattern. Understanding it helps you break the cycle before it starts:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="space-y-3">
              {[
                { step: "1", label: "Menu prices set by gut, not cost", color: "text-red-600" },
                { step: "2", label: "Food cost creeps above 38-40%", color: "text-red-600" },
                { step: "3", label: "Gross profit too low to cover labor and rent", color: "text-red-600" },
                { step: "4", label: "Owner cuts corners: smaller portions, lower quality", color: "text-red-600" },
                { step: "5", label: "Guest experience declines → fewer covers", color: "text-red-600" },
                { step: "6", label: "Revenue drops further → deficit accelerates", color: "text-red-600" },
                { step: "7", label: "Working capital depleted → closure", color: "text-red-700 font-bold" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                  <p className={`text-sm ${item.color}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">The spiral almost always starts at step 1. Restaurants that price correctly from day one almost never enter this cycle.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Separates Restaurants That Survive</h2>
          <p className="text-gray-600 mb-4">Research and operator experience consistently point to the same differentiators:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Weekly cost monitoring", desc: "Restaurants that review food and labor cost weekly catch problems in time to correct them. Monthly reviewers find out too late." },
              { title: "Pre-opening financial model", desc: "Operators who built a detailed proforma before opening had a 6-12 month plan — and a cash reserve to execute it." },
              { title: "Actual recipe costing", desc: "Knowing the real cost of every dish — not estimating — is the foundation of sustainable pricing." },
              { title: "Appropriate rent-to-revenue ratio", desc: "Successful operators negotiated rent at 6-8% of projected sales, not 15%." },
            ].map((item, i) => (
              <div key={i} className="border border-green-200 bg-green-50 rounded-xl p-5">
                <p className="font-bold text-green-800 mb-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Food Cost Percentage Is the Leading Indicator</h2>
          <p className="text-gray-600 mb-4">If you are running an existing restaurant, your food cost percentage is the single clearest indicator of whether you are on the failure track:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Food Cost %</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">What to Do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { range: "Below 28%", status: "Excellent", statusColor: "bg-green-100 text-green-700", action: "Review quality — ensure you are not cutting portions that hurt the guest experience" },
                  { range: "28-35%", status: "Healthy", statusColor: "bg-green-100 text-green-700", action: "Maintain current pricing discipline; monitor weekly" },
                  { range: "35-38%", status: "Watch", statusColor: "bg-yellow-100 text-yellow-700", action: "Review top-selling items for repricing opportunities; audit portion sizes" },
                  { range: "38-42%", status: "Danger", statusColor: "bg-orange-100 text-orange-700", action: "Immediate repricing required; run full recipe cost analysis this week" },
                  { range: "Above 42%", status: "Critical", statusColor: "bg-red-100 text-red-700", action: "You are likely losing money on most items — emergency menu audit and repricing needed now" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100">{row.range}</td>
                    <td className="px-4 py-3 border-b border-gray-100"><span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.statusColor}`}>{row.status}</span></td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Every Dish Before It Becomes a Problem</h2>
          <p className="text-orange-100 mb-5">MenuPricer calculates your exact food cost percentage for every dish and tells you the right menu price to hit your target margin. Run the numbers now — before costs creep up.</p>
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
              { href: "/blog/restaurant-kpis", title: "8 Restaurant KPIs to Track", desc: "The leading indicators that predict whether your restaurant will survive." },
              { href: "/blog/restaurant-bookkeeping", title: "Restaurant Bookkeeping 101", desc: "The financial tracking system that gives you the early-warning signals." },
              { href: "/blog/prime-cost-restaurant", title: "Restaurant Prime Cost Guide", desc: "How to control the two biggest cost drivers: food and labor." },
              { href: "/blog/restaurant-budget-template", title: "Restaurant Budget Template", desc: "Build the monthly budget that keeps your restaurant out of the danger zone." },
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
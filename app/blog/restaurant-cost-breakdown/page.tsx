import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Restaurant Cost Breakdown: Every Expense Category and Target % (2026)",
  description:
    "A complete breakdown of restaurant costs â€?food, labor, rent, utilities, and more â€?with target percentage benchmarks for each category. Know where your money goes.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-cost-breakdown" },
  openGraph: {
    title: "Restaurant Cost Breakdown: Every Expense Category and Target %",
    description:
      "See every restaurant cost category with industry-standard target percentages. Food, labor, rent, marketing, and more.",
    url: "https://www.aimenupricer.com/blog/restaurant-cost-breakdown",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer â€?AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Restaurant Cost Breakdown: Every Expense Category and Target %",
  description:
    "A complete restaurant cost breakdown covering food, labor, occupancy, utilities, and more â€?with benchmarks and actionable advice for each category.",
  url: "https://www.aimenupricer.com/blog/restaurant-cost-breakdown",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_PUBLISHED,
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Cost Breakdown", item: "https://www.aimenupricer.com/blog/restaurant-cost-breakdown" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main costs in a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main restaurant costs are: food cost (28â€?5% of revenue), labor cost (25â€?5%), occupancy/rent (5â€?0%), utilities (3â€?%), marketing (1â€?%), supplies and smallwares (1â€?%), and technology/POS (1â€?%). Prime cost â€?food plus labor â€?is the key metric and should stay below 60% of revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of restaurant revenue should food cost be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost should be 28â€?5% of revenue for most restaurants. Fast casual targets 25â€?0%. Fine dining allows up to 38% because of higher ticket prices. Most operators use the prime cost benchmark: food + labor should stay under 60% of revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest cost for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Labor is typically the largest single cost for a full-service restaurant, running 30â€?5% of revenue. Food cost is second at 28â€?5%. Together (prime cost) they consume 55â€?5% of every dollar earned, which is why both are tracked closely.",
      },
    },
    {
      "@type": "Question",
      name: "What is restaurant prime cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prime cost is food cost plus labor cost â€?the two largest controllable expenses in a restaurant. A healthy prime cost is under 60% of revenue. Full-service restaurants targeting profitability aim for 55â€?8%.",
      },
    },
    {
      "@type": "Question",
      name: "What is a typical restaurant profit margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restaurant net profit margins are typically 3â€?%. Full-service restaurants average 3â€?%. Fast casual averages 6â€?%. Fine dining varies widely. Margins this thin mean every percentage point of cost control matters significantly.",
      },
    },
  ],
};

const COSTS = [
  { cat: "Food Cost", target: "28â€?5%", fixed: false, notes: "Raw ingredients for all menu items. The most directly controllable cost." },
  { cat: "Labor Cost", target: "25â€?5%", fixed: false, notes: "Wages, salaries, taxes, benefits for all front and back of house staff." },
  { cat: "Rent / Occupancy", target: "5â€?0%", fixed: true, notes: "Base rent, CAM charges, property taxes. Higher for urban/high-traffic locations." },
  { cat: "Utilities", target: "3â€?%", fixed: true, notes: "Electricity, gas, water. Kitchen equipment drives most consumption." },
  { cat: "Marketing & Advertising", target: "1â€?%", fixed: false, notes: "Social media, email, promotions, delivery platform fees." },
  { cat: "Supplies & Smallwares", target: "1â€?%", fixed: false, notes: "Takeout containers, cleaning supplies, gloves, paper goods." },
  { cat: "Technology & POS", target: "0.5â€?%", fixed: true, notes: "POS system, reservation software, ordering platforms." },
  { cat: "Insurance", target: "0.5â€?%", fixed: true, notes: "General liability, workers' comp, property insurance." },
  { cat: "Repairs & Maintenance", target: "1â€?%", fixed: false, notes: "Equipment servicing, facility upkeep, unexpected breakdowns." },
  { cat: "Credit Card Fees", target: "2â€?%", fixed: false, notes: "Processing fees on card transactions, typically 1.5â€?.5% per transaction." },
];

export default function RestaurantCostBreakdownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Restaurant Cost Breakdown</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide Â· {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Restaurant Cost Breakdown: Every Expense Category and Target %
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Understanding where every dollar goes is the first step to running a profitable restaurant. Here is every cost category with industry-standard targets.
            </p>
          </header>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-2">The most important benchmark</p>
            <p className="text-white font-mono text-lg">Prime Cost (Food + Labor) &lt; 60% of revenue</p>
            <p className="text-gray-400 text-sm mt-1">Everything else â€?rent, utilities, marketing â€?must fit into the remaining 40% to leave a profit margin.</p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* Full cost table */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">All Restaurant Cost Categories at a Glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Category</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Target % of Revenue</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Type</th>
                      <th className="text-left py-3 text-gray-400 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {COSTS.map(({ cat, target, fixed, notes }) => (
                      <tr key={cat}>
                        <td className="py-3 pr-4 text-white font-medium">{cat}</td>
                        <td className="py-3 pr-4 text-right text-orange-300 font-mono">{target}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${fixed ? "bg-blue-500/20 text-blue-300" : "bg-green-500/20 text-green-300"}`}>
                            {fixed ? "Fixed" : "Variable"}
                          </span>
                        </td>
                        <td className="py-3 text-gray-400 text-xs">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* P&L waterfall */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How Restaurant Costs Build Up: A $50,000 Month</h2>
              <p className="mb-4">Here is how a typical casual dining restaurant allocates $50,000 in monthly revenue:</p>
              <div className="space-y-2">
                {[
                  { label: "Revenue", val: "$50,000", bar: 100, color: "bg-gray-600", prefix: "" },
                  { label: "Food Cost (30%)", val: "âˆ?15,000", bar: 30, color: "bg-orange-500", prefix: "" },
                  { label: "Labor Cost (28%)", val: "âˆ?14,000", bar: 28, color: "bg-orange-500", prefix: "" },
                  { label: "Prime Cost subtotal", val: "$21,000 left", bar: 42, color: "bg-gray-700 border border-orange-500/40", prefix: "" },
                  { label: "Rent (7%)", val: "âˆ?3,500", bar: 7, color: "bg-blue-500/60", prefix: "" },
                  { label: "Utilities (4%)", val: "âˆ?2,000", bar: 4, color: "bg-blue-500/60", prefix: "" },
                  { label: "Other (6%)", val: "âˆ?3,000", bar: 6, color: "bg-blue-500/60", prefix: "" },
                  { label: "Net Profit (5%)", val: "$2,500", bar: 5, color: "bg-green-500", prefix: "" },
                ].map(({ label, val, bar, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-44 text-sm text-gray-300 flex-shrink-0">{label}</div>
                    <div className="flex-1 bg-gray-900 rounded-full h-5 overflow-hidden">
                      <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${bar}%` }} />
                    </div>
                    <div className="w-28 text-right font-mono text-sm text-gray-300">{val}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fixed vs Variable */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Fixed vs. Variable Costs</h2>
              <p className="mb-4">Understanding which costs are fixed (stay the same regardless of sales) vs. variable (scale with revenue) is critical for forecasting and break-even analysis.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-5">
                  <h3 className="text-blue-300 font-semibold mb-3">Fixed Costs</h3>
                  <p className="text-gray-400 text-sm mb-3">Incurred regardless of how much you sell. Cannot be reduced quickly.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>â€?Rent / lease</li>
                    <li>â€?Insurance</li>
                    <li>â€?Technology & POS subscriptions</li>
                    <li>â€?Salaried management</li>
                    <li>â€?Loan repayments</li>
                  </ul>
                </div>
                <div className="bg-gray-900 border border-green-500/30 rounded-xl p-5">
                  <h3 className="text-green-300 font-semibold mb-3">Variable Costs</h3>
                  <p className="text-gray-400 text-sm mb-3">Scale with your sales volume. Easier to control in the short term.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>â€?Food cost</li>
                    <li>â€?Hourly labor</li>
                    <li>â€?Supplies & paper goods</li>
                    <li>â€?Credit card processing fees</li>
                    <li>â€?Delivery platform commissions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deep dive: food */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Deep Dive: Food Cost (28â€?5%)</h2>
              <p>
                Food cost is the most directly controllable line item. Unlike rent, you can reduce food cost this week through better purchasing, tighter portion control, and reduced waste.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Restaurant Type</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Food Cost Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Fast food / QSR", "25â€?0%"],
                      ["Fast casual", "28â€?2%"],
                      ["Casual dining", "28â€?5%"],
                      ["Fine dining", "30â€?8%"],
                      ["Bakery / cafÃ©", "28â€?5%"],
                      ["Catering", "25â€?5%"],
                    ].map(([type, target]) => (
                      <tr key={type}>
                        <td className="py-3 pr-6 text-white">{type}</td>
                        <td className="py-3 text-right text-orange-300 font-mono">{target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Deep dive: labor */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Deep Dive: Labor Cost (25â€?5%)</h2>
              <p>
                Labor is often the <strong className="text-white">largest single cost</strong> in a full-service restaurant. It includes wages, salaries, payroll taxes (7.65% for FICA), workers' compensation, and benefits.
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <p className="text-gray-400 text-sm mb-2">Labor cost % formula:</p>
                <pre className="text-green-400 font-mono text-sm">{`Labor Cost % = Total Labor Dollars Ã· Total Revenue Ã— 100`}</pre>
                <p className="text-gray-500 text-xs mt-3">Include all front-of-house, back-of-house, management, and owner draws in the labor number.</p>
              </div>
              <p className="mt-4">
                Many operators track back-of-house (BOH) and front-of-house (FOH) labor separately. BOH typically runs 12â€?8% of revenue; FOH 10â€?5%.
              </p>
            </section>

            {/* Cost per restaurant size */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cost Targets by Restaurant Type</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Type</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Food</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Labor</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Prime Cost</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Net Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["QSR / Fast Food", "25â€?0%", "25â€?0%", "50â€?8%", "6â€?%"],
                      ["Fast Casual", "28â€?2%", "25â€?0%", "53â€?0%", "5â€?%"],
                      ["Casual Dining", "28â€?5%", "28â€?5%", "56â€?5%", "3â€?%"],
                      ["Fine Dining", "30â€?8%", "30â€?5%", "60â€?8%", "3â€?%"],
                      ["Bar / Nightclub", "18â€?4%", "30â€?5%", "50â€?8%", "7â€?2%"],
                      ["Bakery", "28â€?5%", "25â€?5%", "55â€?5%", "3â€?%"],
                    ].map(([type, food, labor, prime, net]) => (
                      <tr key={type}>
                        <td className="py-3 pr-4 text-white text-sm">{type}</td>
                        <td className="py-3 pr-4 text-right text-orange-300 font-mono text-xs">{food}</td>
                        <td className="py-3 pr-4 text-right text-blue-300 font-mono text-xs">{labor}</td>
                        <td className="py-3 pr-4 text-right text-yellow-300 font-mono text-xs font-semibold">{prime}</td>
                        <td className="py-3 text-right text-green-300 font-mono text-xs">{net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What are the main costs in a restaurant?",
                    a: "Food (28â€?5%), labor (25â€?5%), rent (5â€?0%), utilities (3â€?%), marketing (1â€?%), and supplies (1â€?%) are the main categories. Prime cost (food + labor) is the key metric â€?target under 60% of revenue.",
                  },
                  {
                    q: "What is the biggest cost for a restaurant?",
                    a: "Labor is typically the largest single cost for full-service restaurants at 30â€?5% of revenue. Food cost is second at 28â€?5%. Together they form prime cost.",
                  },
                  {
                    q: "What is a typical restaurant profit margin?",
                    a: "Net margins are typically 3â€?%. Full-service restaurants average 3â€?%; fast casual averages 6â€?%. Margins are thin, so every point of cost reduction matters.",
                  },
                  {
                    q: "What is restaurant prime cost?",
                    a: "Prime cost = food cost + labor cost. The most important cost benchmark for restaurants. Target under 60% of revenue. Full-service restaurants targeting good profitability aim for 55â€?8%.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Control Your Biggest Cost: Food</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                MenuPricer helps you price every menu item to hit your target food cost percentage. Enter ingredients and get your ideal selling price in seconds.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Calculate Your Food Cost
              </Link>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/what-is-food-cost", "What Is Food Cost?"],
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/blog/food-cost-management", "Food Cost Management"],
                  ["/prime-cost-calculator", "Prime Cost Calculator"],
                  ["/labor-cost-calculator", "Labor Cost Calculator"],
                  ["/break-even-calculator", "Break-Even Calculator"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3"
                  >
                    <span className="text-gray-600">â†?/span>
                    {label}
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

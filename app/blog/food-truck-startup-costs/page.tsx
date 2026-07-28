import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Food Truck Startup Costs: How Much Does a Food Truck Cost in 2026?",
  description: "How much does a food truck cost to start? Complete breakdown of food truck startup costs — truck purchase, equipment, permits, food, and monthly operating costs.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-truck-startup-costs" },
  openGraph: {
    title: "Food Truck Startup Costs: How Much Does a Food Truck Cost in 2026?",
    description: "Full breakdown of food truck startup costs — from buying the truck to permits, equipment, and first month inventory.",
    url: "https://www.aimenupricer.com/blog/food-truck-startup-costs",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Food Truck Startup Costs: How Much Does a Food Truck Cost in 2026?",
  description: "Complete breakdown of food truck startup costs including truck purchase, kitchen equipment, permits, licenses, and ongoing monthly expenses.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/food-truck-startup-costs",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Food Truck Startup Costs", item: "https://www.aimenupricer.com/blog/food-truck-startup-costs" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a food truck cost to buy?", acceptedAnswer: { "@type": "Answer", text: "A used food truck costs $20,000–80,000. A new custom-built food truck costs $75,000–175,000. A basic converted trailer starts at $10,000–25,000. The truck itself is the largest single startup cost — budget at least $40,000–60,000 for a reliable used truck with functional kitchen equipment already installed." } },
    { "@type": "Question", name: "How much does it cost to start a food truck business?", acceptedAnswer: { "@type": "Answer", text: "Total food truck startup costs typically range from $40,000 to $200,000. A lean setup (used truck, minimal permits, small market) can come in around $40,000–75,000. A full setup with a new truck, commercial kitchen rental for prep, proper licensing, and marketing budget typically runs $100,000–200,000. Most operators budget $75,000–150,000 as a realistic midpoint." } },
    { "@type": "Question", name: "How much does a food truck permit cost?", acceptedAnswer: { "@type": "Answer", text: "Food truck permit costs vary widely by city and state. A business license costs $50–500/year. A health department permit costs $100–1,000/year. A mobile food vendor permit costs $100–3,000/year. Fire safety inspection fees run $50–500. City-specific vending permits in major cities like NYC or LA can add $1,000–5,000+/year. Budget $1,500–5,000 total for permits and licenses in your first year." } },
    { "@type": "Question", name: "What is the monthly cost to run a food truck?", acceptedAnswer: { "@type": "Answer", text: "Monthly food truck operating costs typically run $8,000–20,000. The biggest line items are food/ingredient costs (30–35% of revenue), labor ($2,000–6,000/month), fuel and commissary kitchen rental ($500–2,000/month), commissary fees ($400–1,200/month), insurance ($300–800/month), and loan repayment if financed ($1,500–3,500/month). Most food trucks need to generate $12,000–25,000/month in revenue to be profitable." } },
    { "@type": "Question", name: "Is a food truck profitable?", acceptedAnswer: { "@type": "Answer", text: "Yes, food trucks can be profitable — but margins are thin. Average food truck net profit margin is 6–9% of revenue. A truck doing $15,000/month in revenue might net $900–1,350/month profit after all costs. Higher-volume trucks at events or festivals can net 10–15%. The key drivers of profitability are food cost percentage (target 28–35%), labor efficiency, and choosing high-traffic locations. Operators who price their menu based on actual food cost — rather than guessing — consistently outperform those who do not." } },
  ],
};

const STARTUP_COSTS = [
  { category: "Truck / Vehicle", low: "$20,000", high: "$175,000", notes: "Used truck vs new custom build" },
  { category: "Kitchen equipment (if not included)", low: "$5,000", high: "$30,000", notes: "Fryers, grills, refrigeration, hood" },
  { category: "Permits & licenses (Year 1)", low: "$1,500", high: "$5,000", notes: "Varies heavily by city" },
  { category: "Health inspection & commissary setup", low: "$500", high: "$3,000", notes: "Required in most states" },
  { category: "Wrapping / branding", low: "$1,500", high: "$5,000", notes: "Vinyl wrap + menu signage" },
  { category: "POS system & payment processing", low: "$300", high: "$1,500", notes: "Square, Toast Go, etc." },
  { category: "First month food inventory", low: "$1,500", high: "$5,000", notes: "Depends on menu size" },
  { category: "Smallwares & supplies", low: "$500", high: "$2,500", notes: "Containers, utensils, uniforms" },
  { category: "Marketing & website", low: "$500", high: "$3,000", notes: "Social media, print materials" },
  { category: "Insurance (first 6 months)", low: "$1,500", high: "$4,000", notes: "Liability + commercial auto" },
  { category: "Emergency fund (3 months expenses)", low: "$5,000", high: "$20,000", notes: "Critical buffer for slow periods" },
];

const MONTHLY_COSTS = [
  { item: "Food & ingredients", range: "28–35% of revenue", notes: "Your single largest variable cost" },
  { item: "Labor (yourself + staff)", range: "$2,000–6,000", notes: "Including payroll taxes" },
  { item: "Commissary kitchen rental", range: "$400–1,200", notes: "Required in most jurisdictions" },
  { item: "Fuel", range: "$300–800", notes: "Driving to locations + generator" },
  { item: "Insurance", range: "$300–800", notes: "Liability + commercial auto" },
  { item: "Permit renewals (monthly avg)", range: "$100–400", notes: "Annualized per month" },
  { item: "Supplies & packaging", range: "$200–600", notes: "Containers, napkins, gloves" },
  { item: "Loan repayment (if financed)", range: "$1,500–3,500", notes: "Based on $60k–$100k loan at 7%" },
  { item: "Credit card processing fees", range: "2–3% of revenue", notes: "Square, Stripe, etc." },
];

export default function FoodTruckStartupCostsPage() {
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
          <Link href="/food-truck-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Food Truck Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Food Truck Startup Costs</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Food Truck</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Food Truck Startup Costs: How Much Does a Food Truck Cost in 2026?
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026 · Reviewed by the MenuPricer Team</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Starting a food truck costs between $40,000 and $200,000 depending on whether you buy new or used, your city&apos;s permit requirements, and how lean you run your first few months. Here is what every line item actually costs — and what new operators consistently underestimate.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Food Truck Startup Cost: Quick Answer</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-black text-orange-500">$40k–75k</p>
                <p className="text-xs text-gray-500 mt-1">Lean setup<br/>(used truck, low-permit city)</p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-500">$75k–150k</p>
                <p className="text-xs text-gray-500 mt-1">Typical setup<br/>(used/lightly used truck)</p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-500">$150k–200k+</p>
                <p className="text-xs text-gray-500 mt-1">Full setup<br/>(new custom truck)</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">The truck itself accounts for 50–70% of total startup cost. Everything else — permits, equipment, inventory, branding — typically adds $15,000–50,000 on top.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Startup Cost Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cost Category</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Low</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">High</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {STARTUP_COSTS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row.category}</td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold border-b border-gray-100">{row.low}</td>
                    <td className="px-4 py-3 text-right text-orange-600 font-semibold border-b border-gray-100">{row.high}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.notes}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 font-black text-gray-900 border-t-2 border-orange-200">TOTAL</td>
                  <td className="px-4 py-3 text-right font-black text-green-700 border-t-2 border-orange-200">~$38,000</td>
                  <td className="px-4 py-3 text-right font-black text-orange-600 border-t-2 border-orange-200">~$254,000</td>
                  <td className="px-4 py-3 border-t-2 border-orange-200 text-xs text-gray-500">Wide range based on truck choice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Used vs New Food Truck: Which Should You Buy?</h2>
          <p className="text-gray-600 mb-4">The truck is where most of the startup cost variance comes from. Here is how the options compare:</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">Used Truck</p>
              <p className="text-2xl font-black text-green-600 mb-2">$20k–80k</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Lower upfront cost</li>
                <li>✓ Faster to launch</li>
                <li>✗ May need equipment upgrades</li>
                <li>✗ Higher maintenance risk</li>
              </ul>
            </div>
            <div className="border border-orange-200 rounded-xl p-4 bg-orange-50">
              <p className="font-bold text-gray-900 mb-1">Lightly Used (2–4 yrs)</p>
              <p className="text-2xl font-black text-orange-500 mb-2">$50k–100k</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Best value for most operators</li>
                <li>✓ Modern equipment</li>
                <li>✓ Lower repair risk vs older used</li>
                <li>✗ Higher than bare-minimum cost</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">New Custom Build</p>
              <p className="text-2xl font-black text-gray-700 mb-2">$100k–175k</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Built to your exact spec</li>
                <li>✓ Warranty coverage</li>
                <li>✗ 3–6 month wait time</li>
                <li>✗ Highest upfront cost</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">For first-time operators, a 2–4 year old used truck in the $50,000–80,000 range is usually the right balance of cost and reliability. Inspect it with a diesel mechanic before buying, and budget $5,000–10,000 for equipment upgrades.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Monthly Operating Costs</h2>
          <p className="text-gray-600 mb-4">Once you are running, your monthly costs look like this:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cost Item</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {MONTHLY_COSTS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row.item}</td>
                    <td className="px-4 py-3 text-right font-semibold text-orange-600 border-b border-gray-100 tabular-nums">{row.range}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Most food trucks need $12,000–25,000/month in gross revenue to cover all costs and turn a profit. At a $10 average ticket, that means 1,200–2,500 transactions per month.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Food Cost: The Number That Makes or Breaks a Food Truck</h2>
          <p className="text-gray-600 mb-4">On a food truck, you have less room to absorb bad food cost than a full restaurant. Target food cost of <strong>28–35%</strong> of your menu price. If your food cost creeps to 40%+, the business almost certainly cannot survive — your margins are too thin to cover labor, fuel, and overhead.</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Example: $12 Taco Plate</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Ingredient cost</p>
                <p className="font-bold text-gray-900">$3.50 (29%)</p>
              </div>
              <div>
                <p className="text-gray-500">Labor allocation</p>
                <p className="font-bold text-gray-900">$2.40 (20%)</p>
              </div>
              <div>
                <p className="text-gray-500">Overhead + fuel</p>
                <p className="font-bold text-gray-900">$1.20 (10%)</p>
              </div>
              <div>
                <p className="text-gray-500">Gross profit</p>
                <p className="font-bold text-green-600">$4.90 (41%)</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">Price every menu item based on actual ingredient cost — not guesswork. Use our <Link href="/food-truck-pricing-calculator" className="text-orange-500 hover:underline font-medium">food truck pricing calculator</Link> to find the right price for each dish before you open.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Food Truck Permit Costs by State (Estimates)</h2>
          <p className="text-gray-600 mb-4">Permit costs are one of the most variable startup expenses — they differ dramatically by city. Here are representative annual totals:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { city: "Austin, TX", cost: "$800–1,500/yr", note: "Relatively low permit burden" },
              { city: "Los Angeles, CA", cost: "$2,500–6,000/yr", note: "Multiple city/county permits required" },
              { city: "New York, NY", cost: "$3,000–8,000/yr", note: "Limited licensed vendor spots" },
              { city: "Chicago, IL", cost: "$1,500–4,000/yr", note: "City medallion system" },
              { city: "Denver, CO", cost: "$700–1,800/yr", note: "Relatively straightforward" },
              { city: "Miami, FL", cost: "$1,000–3,000/yr", note: "County + city permits required" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3 text-sm">
                <span className="font-medium text-gray-800">{row.city}</span>
                <div className="text-right">
                  <span className="font-semibold text-orange-600">{row.cost}</span>
                  <p className="text-xs text-gray-400">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">* Estimates only. Contact your local city/county health department for exact requirements.</p>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Your Food Truck Menu Before You Open</h2>
          <p className="text-orange-100 mb-5">Enter your ingredient costs and get AI-powered pricing suggestions based on your target margin — so you launch with a menu that can actually cover your startup costs.</p>
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
              { href: "/blog/food-cost-formula", title: "Food Cost Formula Explained", desc: "Calculate food cost percentage for every dish." },
              { href: "/blog/ghost-kitchen-pricing", title: "Ghost Kitchen Pricing Guide", desc: "How to price menus for delivery-only kitchen brands." },
              { href: "/food-truck-pricing-calculator", title: "Food Truck Pricing Calculator", desc: "Free tool: enter your costs, get the right price." },
              { href: "/blog/food-cost-percentage-calculator", title: "How to Do Food Costing", desc: "Step-by-step recipe costing for any menu." },
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
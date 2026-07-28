import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Open a Restaurant? Full Cost Breakdown",
  description: "How much does it cost to open a restaurant? Full breakdown of restaurant startup costs — lease, build-out, equipment, licenses, staff, and working capital. With data by restaurant type.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/cost-to-open-a-restaurant" },
  openGraph: {
    title: "How Much Does It Cost to Open a Restaurant? Full Cost Breakdown",
    description: "Complete restaurant startup cost breakdown — from lease deposits to equipment, licenses, and working capital reserves.",
    url: "https://www.aimenupricer.com/blog/cost-to-open-a-restaurant",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How Much Does It Cost to Open a Restaurant? Full Cost Breakdown",
  description: "Complete breakdown of restaurant startup costs including commercial lease, kitchen build-out, equipment, licenses, pre-opening labor, and working capital requirements by restaurant type.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/cost-to-open-a-restaurant",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Cost to Open a Restaurant", item: "https://www.aimenupricer.com/blog/cost-to-open-a-restaurant" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to open a restaurant?", acceptedAnswer: { "@type": "Answer", text: "Opening a restaurant costs $175,000–750,000 for a typical full-service concept with a leased space. A fast casual or counter-service restaurant costs $75,000–300,000. A fine dining restaurant or flagship concept with full build-out can cost $500,000–2M+. These numbers include everything: lease deposits, construction and build-out, commercial kitchen equipment, furniture and fixtures, licenses and permits, initial inventory, pre-opening payroll, and working capital for the first 3–6 months." } },
    { "@type": "Question", name: "What is the biggest cost when opening a restaurant?", acceptedAnswer: { "@type": "Answer", text: "The biggest startup costs are typically: (1) Leasehold improvements and build-out — $100–400+ per square foot for full construction, $50–150/sq ft for lighter renovation; (2) Commercial kitchen equipment — $40,000–150,000 for a full commercial kitchen; (3) Working capital reserve — 3–6 months of operating expenses before revenue covers costs. The combination of these three items usually accounts for 70–80% of total startup cost." } },
    { "@type": "Question", name: "How much working capital do I need to open a restaurant?", acceptedAnswer: { "@type": "Answer", text: "Budget at least 3–6 months of projected operating expenses as working capital before you open. If your restaurant will cost $30,000/month to operate, you need $90,000–180,000 in working capital beyond your build-out and equipment costs. Most restaurants do not reach break-even revenue until month 3–6, and cash flow is negative in the months before opening (training, staff hire, inventory buildout). Undercapitalization is the single most common reason new restaurants fail in year one." } },
    { "@type": "Question", name: "How can I open a restaurant with less money?", acceptedAnswer: { "@type": "Answer", text: "Lower-capital paths to opening a restaurant include: (1) Taking over an existing restaurant space with equipment already in place — save $50,000–150,000 on build-out and equipment; (2) Starting as a food truck or pop-up before committing to a permanent space; (3) Starting a ghost kitchen or cloud kitchen — shared commercial space with no dining room; (4) Franchising — higher brand fees but lower build-out risk; (5) Leasing equipment instead of buying. Starting with less capital is possible, but you must have a larger working capital cushion to survive slow early months." } },
  ],
};

const COST_ITEMS = [
  { item: "Lease deposit (first + last + security)", low: "$15,000", high: "$60,000", notes: "3–6 months rent typical" },
  { item: "Build-out & leasehold improvements", low: "$50,000", high: "$400,000", notes: "$50–300/sq ft depending on condition" },
  { item: "Commercial kitchen equipment", low: "$40,000", high: "$150,000", notes: "New vs used makes huge difference" },
  { item: "Furniture, fixtures & décor (FOH)", low: "$15,000", high: "$100,000", notes: "Fast casual vs fine dining" },
  { item: "POS system & technology", low: "$2,000", high: "$15,000", notes: "Hardware + software + setup" },
  { item: "Licenses & permits (Year 1)", low: "$2,000", high: "$10,000", notes: "Health, liquor, fire, business" },
  { item: "Signage & branding", low: "$2,000", high: "$15,000", notes: "Interior + exterior signage" },
  { item: "Initial food & beverage inventory", low: "$5,000", high: "$25,000", notes: "2–4 weeks of projected usage" },
  { item: "Pre-opening staff & training", low: "$8,000", high: "$30,000", notes: "Hire + train before opening day" },
  { item: "Marketing & soft opening costs", low: "$3,000", high: "$20,000", notes: "Social media, PR, food comps" },
  { item: "Working capital (3–6 months ops)", low: "$30,000", high: "$150,000", notes: "The most underestimated line item" },
  { item: "Contingency (10–15% of above)", low: "$17,200", high: "$97,500", notes: "Always budget for overruns" },
];

const BY_TYPE = [
  { type: "Food Truck", range: "$40k–200k", notes: "Vehicle + equipment + permits" },
  { type: "Ghost Kitchen / Cloud Kitchen", range: "$10k–50k", notes: "Shared space, no FOH build-out" },
  { type: "Fast Casual (Counter Service)", range: "$75k–300k", notes: "Lower FOH cost, simpler kitchen" },
  { type: "Casual Dining (Full Service)", range: "$175k–500k", notes: "Full kitchen + dining room build-out" },
  { type: "Bar / Gastropub", range: "$200k–500k", notes: "Liquor licensing adds significant cost" },
  { type: "Fine Dining", range: "$400k–2M+", notes: "Premium build-out, high equipment spec" },
  { type: "Franchise (QSR)", range: "$200k–500k", notes: "Plus franchise fee $20k–45k" },
];

export default function CostToOpenRestaurantPage() {
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
          <span className="text-gray-600">Cost to Open a Restaurant</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Restaurant Startup</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          How Much Does It Cost to Open a Restaurant? Full Cost Breakdown
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026 · Reviewed by the MenuPricer Team</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Opening a restaurant costs $175,000–750,000 for most full-service concepts — but the range is enormous depending on restaurant type, location, and whether you are building from scratch or taking over an existing space. Here is every cost you need to budget for.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Startup Costs by Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Restaurant Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical Startup Cost</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {BY_TYPE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row.type}</td>
                    <td className="px-4 py-3 font-bold text-orange-600 border-b border-gray-100">{row.range}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Restaurant Startup Cost Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cost Item</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Low</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">High</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {COST_ITEMS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{row.item}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700 border-b border-gray-100">{row.low}</td>
                    <td className="px-4 py-3 text-right font-semibold text-orange-600 border-b border-gray-100">{row.high}</td>
                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{row.notes}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 font-black text-gray-900 border-t-2 border-orange-200">TOTAL (Casual Dining Estimate)</td>
                  <td className="px-4 py-3 text-right font-black text-green-700 border-t-2 border-orange-200">~$189k</td>
                  <td className="px-4 py-3 text-right font-black text-orange-600 border-t-2 border-orange-200">~$1.1M</td>
                  <td className="px-4 py-3 border-t-2 border-orange-200 text-xs text-gray-500">Wide range driven by build-out and market</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Most Underestimated Cost: Working Capital</h2>
          <p className="text-gray-600 mb-4">Most first-time restaurant owners budget for construction and equipment, then run out of money before month 4. Working capital is what keeps you open while you build revenue.</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="font-bold text-gray-900 mb-3">Working Capital Calculator Example</p>
            <div className="text-sm space-y-2">
              {[
                ["Projected monthly rent + utilities", "$8,000"],
                ["Projected monthly labor cost", "$15,000"],
                ["Projected monthly food & beverage cost", "$12,000"],
                ["Other monthly overhead", "$5,000"],
                ["Total monthly operating expenses", "$40,000"],
                ["× 4 months (to break-even)", "× 4"],
                ["Working capital needed", "$160,000"],
              ].map(([label, value], i) => (
                <div key={i} className={`flex justify-between py-2 ${i >= 5 ? "border-t-2 border-orange-200 font-black text-gray-900 mt-2" : "border-b border-orange-100 text-gray-700"}`}>
                  <span>{label}</span>
                  <span className={i >= 6 ? "text-orange-600" : ""}>{value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">This is in addition to your build-out and equipment budget — not part of it.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Reduce Restaurant Startup Costs</h2>
          <div className="space-y-3">
            {[
              { strategy: "Take over an existing restaurant space", saving: "Save $50k–200k", how: "Existing kitchen equipment, plumbing, and electrical rough-in can cut build-out cost dramatically. Look for recent closures — their equipment stays in place." },
              { strategy: "Buy used commercial kitchen equipment", saving: "Save $20k–80k", how: "Restaurant supply auctions, Going Out of Business sales, and used equipment dealers can get you commercial-grade equipment at 10–30 cents on the dollar." },
              { strategy: "Start with a ghost kitchen", saving: "Save $100k+", how: "Prove your concept and build your customer base in a shared kitchen before committing to a full dining room. Ghost kitchen rental starts at $1,500–4,000/month." },
              { strategy: "Phase your concept", saving: "Varies", how: "Open with a smaller menu and lower seat count. Add seats, expand the kitchen, and refine the concept as revenue grows — rather than betting everything on the day-one vision." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-gray-900 text-sm">{item.strategy}</p>
                  <span className="bg-green-100 text-green-700 font-bold text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0">{item.saving}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.how}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Your Menu Before You Open</h2>
          <p className="text-orange-100 mb-5">You have spent months planning your startup costs. Make sure your menu prices cover them. MenuPricer calculates the right price for every dish based on your actual food cost — before you serve your first customer.</p>
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
              { href: "/blog/food-truck-startup-costs", title: "Food Truck Startup Costs", desc: "Lower-cost path: how much a food truck business costs to launch." },
              { href: "/blog/how-to-start-a-catering-business", title: "How to Start a Catering Business", desc: "Even lower overhead: catering startup costs and how to price events." },
              { href: "/blog/restaurant-failure-rate", title: "Restaurant Failure Rate", desc: "Why restaurants fail — and how correct pricing reduces the risk." },
              { href: "/blog/restaurant-bookkeeping", title: "Restaurant Bookkeeping 101", desc: "Track food cost, labor, and profit from day one." },
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
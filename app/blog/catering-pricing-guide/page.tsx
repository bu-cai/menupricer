import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Catering Pricing Guide: How Much to Charge Per Person (2026)",
  description: "How to price catering jobs — per-person rates by event type, the food cost formula for catering, how to quote labor and equipment, and sample pricing for weddings, corporate, and social events.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/catering-pricing-guide" },
  openGraph: {
    title: "Catering Pricing Guide: How Much to Charge Per Person (2026)",
    description: "Per-person catering rates by event type, food cost formula, labor markup, and sample quotes for weddings, corporate events, and parties.",
    url: "https://www.aimenupricer.com/blog/catering-pricing-guide",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Catering Pricing Guide: How Much to Charge Per Person (2026)",
  description: "Per-person catering pricing benchmarks, food cost formula for catering, and how to build quotes for weddings, corporate events, and social catering.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22", dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/catering-pricing-guide",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Catering Pricing Guide", item: "https://www.aimenupricer.com/blog/catering-pricing-guide" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does catering cost per person on average?", acceptedAnswer: { "@type": "Answer", text: "Average catering costs per person in the US range from $20-35 for simple buffet/drop-off catering, $35-85 for full-service casual events, $85-150 for formal plated dinner service, and $150-300+ for luxury wedding catering with full staff and premium menu. The wide range reflects differences in service level, menu complexity, guest count, and geographic market. Higher guest counts lower the per-person cost due to economies of scale in food preparation." } },
    { "@type": "Question", name: "What food cost percentage should caterers target?", acceptedAnswer: { "@type": "Answer", text: "Caterers typically target 25-35% food cost, similar to restaurant benchmarks. However, large-scale catering events (100+ guests) can often achieve 20-28% food cost through bulk purchasing and standardized recipes. The key advantage caterers have over restaurants is predictable guest counts — you know exactly how many portions to prepare, which nearly eliminates food waste, allowing tighter food cost control." } },
    { "@type": "Question", name: "How do you quote a catering job?", acceptedAnswer: { "@type": "Answer", text: "A catering quote should include: (1) Food cost per person × 3-4 markup = food charge per person. (2) Labor cost: number of staff × hours × hourly rate, divided by guest count. (3) Equipment rental if applicable. (4) Travel/delivery charge. (5) Gratuity (typically 18-22% of food and labor subtotal). Sum all components to get total per-person price, then add a 10-15% contingency buffer on large events." } },
    { "@type": "Question", name: "How much should I charge for labor in catering?", acceptedAnswer: { "@type": "Answer", text: "Catering labor typically runs 25-40% of total revenue. A general rule: one server per 20-25 guests for buffet service, one per 10-15 guests for plated dinner service, plus one kitchen staff per 30-50 guests. At $18-25/hour per staff member, calculate total labor hours (including setup and breakdown), divide by guest count, and add this to your per-person price." } },
  ],
};

const PRICING_TABLE = [
  { event: "Drop-off / Delivery", service: "No staff on-site", perPerson: "$20–35", foodCost: "25–30%", notes: "Lowest margin but lowest labor. Good for corporate lunch orders." },
  { event: "Casual Buffet", service: "1-2 staff", perPerson: "$35–65", foodCost: "25–32%", notes: "Birthday parties, casual corporate. Highest volume opportunity." },
  { event: "Corporate Lunch", service: "2-3 staff", perPerson: "$40–75", foodCost: "28–33%", notes: "Repeating clients. Price slightly lower for loyalty." },
  { event: "Wedding Reception", service: "Full service", perPerson: "$85–175", foodCost: "25–30%", notes: "Highest revenue per event. Requires 6-12 months advance booking." },
  { event: "Plated Dinner", service: "Full brigade", perPerson: "$95–200", foodCost: "25–30%", notes: "Gala, charity dinner. High skill requirement, premium pricing justified." },
  { event: "Cocktail Reception", service: "2-4 staff", perPerson: "$45–95", foodCost: "22–28%", notes: "Passed appetizers only. Lower food cost due to small portion sizes." },
];

export default function CateringPricingGuidePage() {
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
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Catering Pricing Guide</span>
          <Link href="/catering-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Catering Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Catering Pricing Guide</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Catering</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Catering Pricing Guide: How Much to Charge Per Person in 2026</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Catering pricing is part math, part market positioning, and part negotiation. Charge too little and you work hard for nothing. Charge too much and the client goes elsewhere. Here is the formula to land in the right place every time.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "$20–$300+", label: "Per-person range by event type" }, { n: "28%", label: "Average catering food cost %" }, { n: "3–4×", label: "Typical food cost markup" }].map(({ n, label }) => (
            <div key={n}><p className="text-xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Per-person catering rates by event type</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Event type</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Per person</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Food cost %</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden md:table-cell">Notes</th>
                </tr></thead>
                <tbody>
                  {PRICING_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.event}<br /><span className="text-xs text-gray-400 font-normal">{row.service}</span></td>
                      <td className="px-4 py-3 font-black text-orange-600">{row.perPerson}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.foodCost}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 hidden md:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The catering pricing formula</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Every catering quote has four components. Build each separately, then sum for the total per-person price:</p>
            <div className="bg-gray-900 rounded-2xl p-5 text-sm font-mono text-white space-y-3">
              <p className="text-gray-400 text-xs">// Per-person quote calculation</p>
              <p><span className="text-orange-400">Food cost per person</span> = Ingredient cost per head</p>
              <p><span className="text-blue-300">Food charge</span> = Food cost per person ÷ 0.28 (target 28% food cost)</p>
              <p><span className="text-green-300">Labor charge</span> = (Staff × hours × rate) ÷ guest count</p>
              <p><span className="text-purple-300">Overhead</span> = Equipment + transport + consumables per head</p>
              <p className="border-t border-gray-700 pt-3 text-white font-bold">Total per person = Food charge + Labor charge + Overhead + 18% gratuity</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 mt-4 text-sm">
              <p className="font-bold text-gray-800 mb-3">Worked example: 80-person corporate buffet lunch</p>
              <div className="space-y-1.5 text-gray-600">
                <div className="flex justify-between"><span>Food cost per person</span><span className="font-bold">$9.50</span></div>
                <div className="flex justify-between"><span>Food charge (÷ 0.28)</span><span className="font-bold">$33.93</span></div>
                <div className="flex justify-between"><span>Labor: 3 staff × 6hr × $22 = $396 ÷ 80</span><span className="font-bold">$4.95</span></div>
                <div className="flex justify-between"><span>Equipment + transport ÷ 80</span><span className="font-bold">$2.50</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-1.5"><span>Subtotal</span><span className="font-bold">$41.38</span></div>
                <div className="flex justify-between"><span>Gratuity (18%)</span><span className="font-bold">$7.45</span></div>
                <div className="flex justify-between font-black text-gray-900 text-base border-t border-gray-300 pt-1.5"><span>Quote per person</span><span className="text-orange-600">$48.83</span></div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Catering vs restaurant: key pricing differences</h2>
            <div className="space-y-3">
              {[
                { title: "Predictable volume = lower waste", body: "Unlike a restaurant service where you guess demand, catering has a confirmed guest count. This allows you to prep exactly what you need — waste should be under 5%. Build waste into your ingredient cost estimate, not as a buffer on top." },
                { title: "Scale changes your food cost", body: "Cooking for 200 people costs less per person in ingredients than cooking for 20. Bulk purchasing, less trim waste per batch, and economies in prep time all compress your food cost as event size grows. Reward large events with slightly lower per-person pricing." },
                { title: "Quote by event, invoice by actual", body: "Give a per-person estimate upfront. When the final guest count is confirmed 72 hours before the event, adjust the invoice. Build a minimum guest count guarantee into your contract (typically 85-90% of the original quote) to protect against last-minute cancellations." },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{title}</p>
                  <p className="text-sm text-gray-500 mt-1">{body}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Calculate catering prices for any dish</h2>
            <p className="text-orange-100 text-sm mb-5">Use the free catering pricing calculator to cost your menu items and set per-person rates that protect your margins.</p>
            <Link href="/catering-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Catering Calculator →</Link>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
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
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Calculate food cost percentage per dish." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Step-by-step ingredient and yield breakdown." },
                { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "Industry benchmarks for every concept." },
                { href: "/blog/how-to-price-a-restaurant-menu", title: "Menu Pricing Guide", desc: "The complete formula for restaurant menu pricing." },
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
            <Link href="/catering-pricing-calculator" className="hover:text-orange-500">Catering Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
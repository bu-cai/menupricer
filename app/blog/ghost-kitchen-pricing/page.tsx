import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is a Ghost Kitchen? Definition, Costs & How to Start One",
  description: "What is a ghost kitchen? Everything you need to know — definition, startup costs, pricing strategy, pros and cons, and how to make a ghost kitchen profitable.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/ghost-kitchen-pricing" },
  openGraph: {
    title: "What Is a Ghost Kitchen? Definition, Costs & How to Start One",
    description: "Ghost kitchen definition, startup costs, menu pricing strategy, and what operators need to know before launching a delivery-only restaurant concept.",
    url: "https://www.aimenupricer.com/blog/ghost-kitchen-pricing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "What Is a Ghost Kitchen? Definition, Costs & How to Start One",
  description: "What ghost kitchens are, what they cost to start, and how to price your menu when your only revenue channel is delivery platforms.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/ghost-kitchen-pricing",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Ghost Kitchen Pricing", item: "https://www.aimenupricer.com/blog/ghost-kitchen-pricing" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a ghost kitchen?", acceptedAnswer: { "@type": "Answer", text: "A ghost kitchen (also called a dark kitchen, virtual kitchen, or cloud kitchen) is a professional food preparation facility that only produces food for delivery — there is no dining room, no storefront, and no walk-in customers. Ghost kitchens operate exclusively through third-party delivery platforms like DoorDash, Uber Eats, and Grubhub, or through their own direct ordering systems. They exist to serve a delivery radius, not a physical neighborhood." } },
    { "@type": "Question", name: "How much does it cost to start a ghost kitchen?", acceptedAnswer: { "@type": "Answer", text: "Ghost kitchen startup costs depend on the model. Renting space in a shared ghost kitchen facility typically costs $2,000–$5,000/month for a dedicated kitchen pod, with lower or zero build-out costs. Starting from scratch in leased commercial space costs $50,000–$175,000 for build-out, equipment, and licensing. Some existing restaurants launch ghost kitchen brands from their current kitchen at near-zero additional cost, which is the lowest-cost entry point." } },
    { "@type": "Question", name: "How do you price a ghost kitchen menu?", acceptedAnswer: { "@type": "Answer", text: "Ghost kitchen menu pricing must account for delivery platform commissions, which typically run 15–30% of the order total. This means your effective food cost target needs to leave room for platform fees before you reach your margin. For example: if your target margin is 15% net and the platform takes 25%, your food cost percentage should be no higher than 25–28%. Most ghost kitchen operators price their delivery menu 15–25% higher than equivalent dine-in pricing to offset platform commissions without eliminating their margin." } },
    { "@type": "Question", name: "What is the difference between a ghost kitchen and a virtual restaurant?", acceptedAnswer: { "@type": "Answer", text: "A ghost kitchen is the physical facility — the commercial kitchen space where food is prepared. A virtual restaurant is the brand or concept that operates within it. One ghost kitchen facility can host multiple virtual restaurant brands simultaneously. For example, a single kitchen might produce orders for three different branded menus: a burger brand, a wing brand, and a breakfast sandwich brand — all from the same kitchen, the same cooks, and shared equipment. Each brand has its own delivery app listing and menu." } },
    { "@type": "Question", name: "Are ghost kitchens profitable?", acceptedAnswer: { "@type": "Answer", text: "Ghost kitchens can be profitable, but margins are tighter than traditional restaurants because of delivery platform commissions (15–30%) stacked on top of food costs and labor. The most profitable ghost kitchen operations keep food cost below 28%, operate multiple virtual brands from the same kitchen to increase revenue per square foot, use a focused menu of 12–20 items to reduce complexity and waste, and route a portion of orders through direct channels (own website or app) to avoid platform fees entirely." } },
  ],
};

const COST_COMPARISON = [
  { item: "Kitchen space (monthly)", traditional: "$4,000–8,000", ghost: "$2,000–5,000", note: "Ghost: shared facility or smaller footprint" },
  { item: "Front-of-house buildout", traditional: "$100k–300k", ghost: "$0", note: "No dining room needed" },
  { item: "Equipment", traditional: "$30k–80k", ghost: "$10k–30k", note: "Smaller, delivery-focused menu" },
  { item: "Staff", traditional: "FOH + BOH", ghost: "BOH only", note: "No servers, hosts, or bussers" },
  { item: "Platform commission", traditional: "0–25%", ghost: "15–30%", note: "Ghost relies on delivery revenue" },
];

export default function GhostKitchenPricingPage() {
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
          <Link href="/food-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Food Cost Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Ghost Kitchen Pricing</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">What Is a Ghost Kitchen? Definition, Costs & Pricing Strategy</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Ghost kitchens have rewritten the math of opening a restaurant. Lower overhead, no front-of-house staff, and instant access to a delivery customer base. But the economics only work if you understand how platform commissions eat into your margin — and price accordingly.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 mb-10 text-white">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-3">Quick definition</p>
          <p className="text-lg font-black mb-2">Ghost kitchen = delivery-only commercial kitchen with no dining room</p>
          <p className="text-gray-300 text-sm">Also called: dark kitchen, virtual kitchen, cloud kitchen, or shadow kitchen. All the same concept.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a ghost kitchen?</h2>
            <p className="text-gray-600 leading-relaxed">A ghost kitchen is a commercial food preparation facility that produces meals exclusively for delivery. There is no storefront, no dining room, no counter service, and no walk-in customers. Food is ordered through delivery apps — DoorDash, Uber Eats, Grubhub — or through a restaurant&apos;s own ordering system, then picked up by a delivery driver.</p>
            <p className="text-gray-600 leading-relaxed mt-3">The term &ldquo;ghost&rdquo; refers to the brand being invisible to passersby — no signage, no curb appeal, no neighborhood foot traffic. The kitchen can be a dedicated facility, a pod inside a shared ghost kitchen building, or an existing restaurant kitchen running a separate delivery-only brand during off-peak hours.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Three types of ghost kitchen operations</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Standalone ghost kitchen", desc: "You lease commercial kitchen space (often in a purpose-built ghost kitchen facility) and operate a delivery-only brand. No existing restaurant needed. Low build-out cost but requires finding your own demand from scratch.", tag: "Most common for new operators" },
                { n: "2", t: "Shared/commissioned kitchen", desc: "You rent time or space in a shared kitchen facility. Multiple operators share the building. Very low startup cost and no long-term lease commitment, but you share equipment and peak time slots.", tag: "Lowest entry barrier" },
                { n: "3", t: "Restaurant ghost brand", desc: "An existing restaurant runs one or more additional delivery brands from its current kitchen — often during off-peak hours or alongside regular service. Near-zero incremental cost if you have spare kitchen capacity.", tag: "Highest ROI for existing restaurants" },
              ].map(({ n, t, desc, tag }) => (
                <div key={n} className="border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0">{n}</span>
                    <p className="font-black text-gray-900">{t}</p>
                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full whitespace-nowrap hidden sm:block">{tag}</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-10">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Ghost kitchen vs traditional restaurant: cost comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Cost item</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Traditional</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Ghost kitchen</th>
                </tr></thead>
                <tbody>
                  {COST_COMPARISON.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">
                        <div>{row.item}</div>
                        <div className="text-xs text-gray-400">{row.note}</div>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.traditional}</td>
                      <td className="px-4 py-3 text-center font-bold text-orange-600">{row.ghost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to price a ghost kitchen menu</h2>
            <p className="text-gray-600 leading-relaxed mb-5">The critical difference between ghost kitchen pricing and traditional restaurant pricing is that every order goes through a platform that takes 15–30%. That fee comes out of your revenue before you cover any costs. This forces a different pricing math:</p>

            <div className="bg-gray-50 rounded-2xl p-5 text-sm mb-5">
              <p className="font-bold text-gray-800 mb-3">Ghost kitchen margin stack — $20 dish example</p>
              <div className="space-y-2">
                {[
                  { label: "Customer pays", value: "$20.00", color: "text-gray-900 font-black" },
                  { label: "Platform commission (25%)", value: "− $5.00", color: "text-red-500" },
                  { label: "Net revenue to you", value: "$15.00", color: "text-gray-700 font-bold" },
                  { label: "Food cost (28%)", value: "− $5.60", color: "text-orange-500" },
                  { label: "Labor (30%)", value: "− $6.00", color: "text-orange-500" },
                  { label: "Kitchen rent & overhead (15%)", value: "− $3.00", color: "text-orange-500" },
                  { label: "Net profit", value: "$0.40", color: "text-gray-500" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-600">{label}</span><span className={color}>{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">At 25% platform commission + 28% food cost, you are left with almost nothing. This is why ghost kitchen menu prices must be 15–25% higher than equivalent dine-in prices.</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-800">Pricing rules for ghost kitchens:</p>
              {[
                { t: "Price for 25–30% food cost, not 30–35%", b: "Your food cost target needs to be tighter than a traditional restaurant to leave room for platform fees. Aim for 25–28% food cost on delivery items." },
                { t: "Add 15–25% to your normal dine-in price", b: "This offsets the platform commission without fully destroying your margin. Customers expect delivery to cost more — it is industry standard and rarely causes cart abandonment." },
                { t: "Focus on high-margin, high-velocity items", b: "Ghost kitchen menus work best with 12–20 items that use shared ingredients and travel well. Avoid dishes that are complex, low margin, or that deteriorate in transit." },
                { t: "Build in your own direct ordering channel", b: "Even a simple website with online ordering saves you 15–30% on every order. Over time, routing just 20% of volume to direct orders significantly improves your overall margin." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Pros and cons of ghost kitchens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-black text-green-700 mb-3">Pros</p>
                <div className="space-y-2">
                  {[
                    "Lower startup cost than a full restaurant",
                    "No front-of-house staff (no servers, hosts, bussers)",
                    "Test new concepts with low financial risk",
                    "Run multiple brands from one kitchen",
                    "Flexible hours — operate only during peak delivery windows",
                    "No lease dependency on foot traffic location",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-black text-red-600 mb-3">Cons</p>
                <div className="space-y-2">
                  {[
                    "Platform commissions (15–30%) are a permanent cost",
                    "No in-person customer relationship or walk-in discovery",
                    "Reliance on platform algorithms for visibility",
                    "Delivery packaging adds cost and environmental impact",
                    "Food quality is partly out of your control (driver handling)",
                    "Hard to build brand loyalty without physical presence",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✗</span>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price your ghost kitchen menu for delivery margins</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer calculates the right price for every dish accounting for your target food cost — so you can see exactly what you need to charge to stay profitable after platform fees.</p>
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
                { href: "/blog/delivery-platform-commission", title: "Delivery Platform Commission Guide", desc: "DoorDash, Uber Eats, Grubhub fee breakdown." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Set your food cost target for any restaurant type." },
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete pricing guide." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Benchmarks and how to improve yours." },
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
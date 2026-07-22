import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Coffee Shop Menu Pricing: How to Price Every Drink for Profit (2026)",
  description: "Coffee shop pricing strategy — how to price espresso drinks, cold brew, food items, and specialty beverages. Includes food cost benchmarks, markup formula, and sample price list.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/coffee-shop-menu-pricing" },
  openGraph: {
    title: "Coffee Shop Menu Pricing: How to Price Every Drink for Profit (2026)",
    description: "Coffee shop drink pricing formula, food cost benchmarks, and sample price list for espresso, cold brew, and specialty beverages.",
    url: "https://www.aimenupricer.com/blog/coffee-shop-menu-pricing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Coffee Shop Menu Pricing: How to Price Every Drink for Profit (2026)",
  description: "Coffee shop pricing formula, average food cost benchmarks for cafes, and a complete sample price list for espresso drinks, cold brew, and food items.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22", dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/coffee-shop-menu-pricing",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Coffee Shop Menu Pricing", item: "https://www.aimenupricer.com/blog/coffee-shop-menu-pricing" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a good food cost percentage for a coffee shop?", acceptedAnswer: { "@type": "Answer", text: "Coffee shops typically target 25-35% food and beverage cost. Espresso drinks are the most profitable items — their ingredient cost is often 15-20% of the retail price. Blended drinks and food items carry higher costs (30-40%) due to more ingredients and preparation time. Keep your beverage-only cost under 25% and overall menu cost under 32% to maintain healthy margins." } },
    { "@type": "Question", name: "How much does it cost to make an espresso drink?", acceptedAnswer: { "@type": "Answer", text: "A double-shot espresso drink costs roughly: espresso shots ($0.40-0.80 depending on bean quality), milk or milk alternative ($0.20-0.60), cup/lid ($0.10-0.15), syrups or add-ins ($0.05-0.30). Total ingredient cost for a latte is typically $0.75-1.80. At a $6 retail price, that is a 13-30% beverage cost — the lower end for premium beans, upper end for specialty options." } },
    { "@type": "Question", name: "How should I price specialty coffee drinks?", acceptedAnswer: { "@type": "Answer", text: "Specialty drinks (signature lattes, nitro cold brew, etc.) should carry a 10-20% premium over standard menu items. A signature latte with a proprietary syrup or unusual preparation can justify $7-9 when a standard latte is $5-6. The premium is not just for ingredients — it is for the experience, the story, and the differentiation. Name specialty drinks after your brand or concept to reinforce the premium." } },
    { "@type": "Question", name: "How do I price coffee shop food items vs drinks?", acceptedAnswer: { "@type": "Answer", text: "Food items at coffee shops typically carry higher ingredient cost (30-40%) than drinks (15-25%). Price food to cover higher ingredient cost plus labor allocation, but also recognize that food increases average ticket and customer dwell time. A $4 pastry with 35% food cost is still a healthy addition if it increases average check by $3-4 per customer. Never price food items at cost — aim for at least 60% gross margin on all food." } },
  ],
};

const DRINK_PRICES = [
  { drink: "Drip Coffee (12oz)", cost: "$0.25", retail: "$3.00–4.00", costPct: "7–8%", margin: "92%" },
  { drink: "Espresso (double)", cost: "$0.65", retail: "$3.50–4.50", costPct: "15–19%", margin: "83%" },
  { drink: "Cappuccino (12oz)", cost: "$0.95", retail: "$4.50–5.50", costPct: "17–21%", margin: "81%" },
  { drink: "Latte (16oz)", cost: "$1.20", retail: "$5.00–6.50", costPct: "18–24%", margin: "79%" },
  { drink: "Oat Milk Latte", cost: "$1.60", retail: "$6.00–7.00", costPct: "23–27%", margin: "75%" },
  { drink: "Cold Brew (12oz)", cost: "$0.75", retail: "$5.00–6.00", costPct: "13–15%", margin: "86%" },
  { drink: "Nitro Cold Brew", cost: "$0.90", retail: "$6.00–7.50", costPct: "12–15%", margin: "87%" },
  { drink: "Matcha Latte", cost: "$1.50", retail: "$6.50–8.00", costPct: "19–23%", margin: "79%" },
  { drink: "Blended Frappé", cost: "$1.80", retail: "$6.00–7.00", costPct: "26–30%", margin: "72%" },
];

export default function CoffeeShopMenuPricingPage() {
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
          <span className="text-sm text-gray-500 truncate">Coffee Shop Pricing</span>
          <Link href="/coffee-shop-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Coffee Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Coffee Shop Menu Pricing</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Café</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Coffee Shop Menu Pricing: How to Price Every Drink for Profit in 2026</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Espresso drinks have some of the highest gross margins in food service — but only if you price them correctly. This guide shows you the formula, the benchmarks, and the pitfalls that turn a profitable cafe into a break-even grind.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "15–25%", label: "Typical beverage food cost %" }, { n: "5–7%", label: "Average net margin for cafes" }, { n: "80%+", label: "Gross margin target for espresso drinks" }].map(({ n, label }) => (
            <div key={n}><p className="text-xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Coffee shop pricing formula</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beverages are priced differently from food because labor is largely shared across all drinks. Calculate the ingredient cost per drink, then apply a target beverage cost percentage:</p>
            <div className="bg-gray-900 rounded-2xl p-5 text-sm font-mono text-white space-y-3">
              <p className="text-gray-400 text-xs">// Coffee shop drink pricing</p>
              <p><span className="text-orange-400">Ingredient cost</span> = Coffee/tea + milk + syrups + cup + lid</p>
              <p><span className="text-blue-300">Target beverage cost %</span> = 20–25% for standard drinks, 15–20% for espresso</p>
              <p className="border-t border-gray-700 pt-3 text-white font-bold">Menu price = Ingredient cost ÷ target beverage cost %</p>
              <p className="text-gray-400 text-xs mt-1">Example: $1.20 ingredient cost ÷ 0.22 = $5.45 → round to $5.50</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Coffee drink pricing benchmarks (2026)</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Drink</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Ingredient cost</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Retail price</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Cost %</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 hidden md:table-cell">Gross margin</th>
                </tr></thead>
                <tbody>
                  {DRINK_PRICES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.drink}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.cost}</td>
                      <td className="px-4 py-3 text-right font-black text-orange-600">{row.retail}</td>
                      <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{row.costPct}</td>
                      <td className="px-4 py-3 text-right text-green-600 font-semibold hidden md:table-cell">{row.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Ingredient costs assume specialty-grade beans at $15-18/lb. Adjust for your actual bean cost.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Milk alternatives and pricing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Oat milk, almond milk, and other alternatives cost 2-3× more than whole milk. You have two options:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-green-200 bg-green-50 rounded-xl p-4">
                <p className="font-bold text-green-800 text-sm mb-2">Option A: Alternative milk surcharge</p>
                <p className="text-sm text-green-700">Charge $0.75-1.00 extra for any non-dairy alternative. Clear, transparent, familiar to customers. Easiest to implement.</p>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-blue-800 text-sm mb-2">Option B: Build into base price</p>
                <p className="text-sm text-blue-700">Price all drinks to cover oat milk cost, offer dairy as the default. Higher base price, but no upsell friction. Better for alt-milk-heavy markets.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Most US cafes use Option A. In cities where oat milk orders exceed 40% of sales, Option B may simplify operations and reduce ordering friction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Pricing food items at a coffee shop</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Food at cafes serves three functions: increase ticket size, extend dwell time, reduce morning revenue dependence. Price accordingly:</p>
            <div className="space-y-3">
              {[
                { category: "Pastries (retail/wholesale)", cost: "30–40%", price: "$3.50–6.00", note: "Sourced pastries: higher cost, zero labor. Self-baked: lower cost, more labor." },
                { category: "Sandwiches / wraps", cost: "35–42%", price: "$9.00–14.00", note: "High cost but high ticket. Lunch expansion increases AOV significantly." },
                { category: "Avocado toast / egg dishes", cost: "28–38%", price: "$10.00–16.00", note: "Brunch positioning commands premium. Labor-intensive; price reflects it." },
                { category: "Grab-and-go snacks", cost: "20–30%", price: "$2.00–5.00", note: "High margin impulse adds. Position near the register." },
              ].map(item => (
                <div key={item.category} className="border-l-4 border-orange-300 pl-4">
                  <div className="flex justify-between items-start"><p className="font-bold text-gray-800 text-sm">{item.category}</p><span className="text-orange-600 font-bold text-sm ml-4 shrink-0">{item.price}</span></div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.note} Cost: {item.cost}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price your coffee shop menu</h2>
            <p className="text-orange-100 text-sm mb-5">Enter your bean cost, milk cost, and overhead — the coffee shop pricing calculator builds your price list automatically.</p>
            <Link href="/coffee-shop-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Coffee Calculator →</Link>
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
                { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "Coffee shop food cost benchmarks vs other concepts." },
                { href: "/blog/bakery-pricing-guide", title: "Bakery Pricing Guide", desc: "How to price baked goods sold at cafes and bakeries." },
                { href: "/blog/how-to-price-a-restaurant-menu", title: "Restaurant Menu Pricing", desc: "Complete pricing formula for any food business." },
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "How to analyze and redesign menus to maximize profit." },
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
            <Link href="/coffee-shop-pricing-calculator" className="hover:text-orange-500">Coffee Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
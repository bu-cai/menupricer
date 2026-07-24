import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Cost a Menu Item: Recipe Costing Guide for Restaurants",
  description: "How to cost a menu item from scratch — the step-by-step recipe costing process, yield adjustments, portion cost formula, and how to set a profitable menu price.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-cost-a-menu-item" },
  openGraph: {
    title: "How to Cost a Menu Item: Recipe Costing Guide for Restaurants",
    description: "Step-by-step menu costing guide — ingredient breakdown, yield loss, portion cost, and pricing formula.",
    url: "https://www.aimenupricer.com/blog/how-to-cost-a-menu-item",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How to Cost a Menu Item: Recipe Costing Guide for Restaurants",
  description: "How to cost any menu item — from breaking down ingredients to applying yield loss and setting a price that hits your target food cost percentage.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-cost-a-menu-item",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Cost a Menu Item", item: "https://www.aimenupricer.com/blog/how-to-cost-a-menu-item" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is menu costing?", acceptedAnswer: { "@type": "Answer", text: "Menu costing (also called recipe costing or dish costing) is the process of calculating the exact ingredient cost for one serving of a menu item. The goal is to know your plate cost — what it costs in ingredients to produce a single portion — so you can set a menu price that achieves your target food cost percentage. A complete menu costing process includes every ingredient, accounts for yield loss during prep, and is updated whenever supplier prices change." } },
    { "@type": "Question", name: "What is a menu cost calculator?", acceptedAnswer: { "@type": "Answer", text: "A menu cost calculator is a tool that automates recipe costing. You enter your ingredients, quantities, and unit prices, and it calculates your plate cost and food cost percentage automatically. MenuPricer is a free AI-powered menu cost calculator that takes it further: it also suggests the right menu price based on your target food cost percentage, so you do not have to do the math yourself." } },
    { "@type": "Question", name: "How do I calculate the cost per serving for a recipe?", acceptedAnswer: { "@type": "Answer", text: "To calculate cost per serving: (1) List every ingredient and the quantity used per portion. (2) Convert your bulk purchase unit to a cost-per-unit used. For example, if chicken breast costs $6.50/lb and you use 8oz per serving, the cost is ($6.50 / 16oz) x 8oz = $3.25. (3) Apply yield percentage for ingredients that lose weight during prep. Chicken breast has roughly 75% yield after trimming, so the adjusted cost is $3.25 / 0.75 = $4.33. (4) Repeat for every ingredient and sum the total. That total is your plate cost (cost per serving)." } },
    { "@type": "Question", name: "What is yield percentage in recipe costing?", acceptedAnswer: { "@type": "Answer", text: "Yield percentage is how much of a purchased ingredient you actually use after trimming, peeling, cooking, or portioning. If you buy 10 lbs of broccoli and 7 lbs are usable after trimming, the yield percentage is 70%. Yield percentage matters for costing because you pay for the full purchase weight but only serve the usable portion. If you ignore yield, your plate cost calculation will be too low and your menu prices will not cover your actual ingredient cost." } },
    { "@type": "Question", name: "How often should I update my menu costing?", acceptedAnswer: { "@type": "Answer", text: "You should update your recipe costs whenever a major ingredient price changes — typically after each supplier invoice or at minimum quarterly. Protein prices (beef, chicken, seafood) can swing 10–20% in a season, which can shift your food cost percentage by 3–5 points on those dishes. A dish that was at 30% food cost last quarter can easily drift to 36% if ingredient prices rose and you did not update your costing cards or menu prices." } },
  ],
};

const YIELD_TABLE = [
  { ingredient: "Chicken breast", yield: "75%", note: "After trimming and cooking loss" },
  { ingredient: "Beef tenderloin", yield: "70%", note: "After trimming fat and sinew" },
  { ingredient: "Shrimp (shell-on)", yield: "65%", note: "After peeling and deveining" },
  { ingredient: "Salmon fillet", yield: "75%", note: "After skinning and pin bones" },
  { ingredient: "Broccoli", yield: "70%", note: "After trimming stems and florets" },
  { ingredient: "Onions", yield: "85%", note: "After peeling and root removal" },
  { ingredient: "Potatoes", yield: "80%", note: "After peeling and eyes removed" },
  { ingredient: "Spinach", yield: "90%", note: "After washing and stems removed" },
  { ingredient: "Strawberries", yield: "85%", note: "After removing hulls" },
  { ingredient: "Ground beef", yield: "88%", note: "After cooking and fat drainage" },
];

export default function HowToCostAMenuItemPage() {
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
          <Link href="/menu-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Menu Cost Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">How to Cost a Menu Item</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">8 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">How to Cost a Menu Item: Step-by-Step Recipe Costing Guide</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Every profitable restaurant menu starts with knowing the exact ingredient cost of every dish. This guide walks you through menu costing from scratch — ingredient breakdown, yield adjustments, portion cost, and pricing formula.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">The Plate Cost Formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-base font-black text-gray-900 mb-3">
            Plate Cost = Σ (Ingredient Qty × Unit Price ÷ Yield %)
          </div>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-base font-black text-gray-900">
            Menu Price = Plate Cost ÷ Target Food Cost %
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 1 — List every ingredient and quantity per serving</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Start with a standardized recipe for one portion. List every ingredient — including cooking oils, garnishes, and condiments that get plated. These small items are easy to skip but add up to 5–10% of your actual plate cost.</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <p className="font-bold text-gray-800 mb-3">Example: Grilled Chicken Caesar Salad (one serving)</p>
              <div className="space-y-1.5 text-gray-600">
                {[
                  ["Chicken breast (raw)", "8 oz"],
                  ["Romaine lettuce", "4 oz"],
                  ["Caesar dressing (house-made)", "2 oz"],
                  ["Parmesan, shaved", "0.5 oz"],
                  ["Croutons (house-made)", "1 oz"],
                  ["Lemon wedge + anchovy garnish", "0.5 oz"],
                ].map(([i, q]) => (
                  <div key={i} className="flex justify-between"><span>{i}</span><span className="font-medium">{q}</span></div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 2 — Convert purchase units to cost per quantity used</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You buy ingredients in bulk — cases, lbs, gallons. You cook with them by oz, g, or cup. The conversion step bridges those two units:</p>
            <div className="bg-orange-50 rounded-xl p-5 text-sm font-mono">
              <p className="text-gray-700">Cost per oz = Purchase price ÷ Total oz purchased</p>
              <p className="text-gray-500 mt-1">Example: Caesar dressing — $8.50 for a 32oz batch → $0.266/oz</p>
              <p className="text-gray-700 mt-2">Cost for 2oz used = 2 × $0.266 = $0.53</p>
            </div>
            <p className="text-sm text-gray-500 mt-3">Do this for every ingredient. Use the most granular unit that makes sense — oz for proteins and cheeses, fluid oz for sauces, pieces for items like eggs or lemon wedges.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 3 — Apply yield percentage</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Most proteins, vegetables, and produce lose weight during prep — trimming, peeling, cooking, or portioning. If you ignore yield, your plate cost will be understated and your prices will not be profitable.</p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm mb-4">
              <p className="font-bold text-amber-800">Why yield matters:</p>
              <p className="text-amber-700 mt-1">8 oz raw chicken breast with 75% yield → you are actually paying for 8 oz but only serving 6 oz of cooked protein. Your true chicken cost per serving should reflect the 8 oz purchased, not 6 oz served.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-sm font-mono mb-4">
              <p className="text-gray-700">Yield-adjusted cost = Raw cost ÷ Yield %</p>
              <p className="text-gray-500 mt-1">Chicken at $5.50/lb → $0.344/oz. For 8oz serving: 8 × $0.344 / 0.75 = $3.67</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Ingredient</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Yield %</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Note</th>
                </tr></thead>
                <tbody>
                  {YIELD_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.ingredient}</td>
                      <td className="px-4 py-2.5 text-center font-black text-orange-600">{row.yield}</td>
                      <td className="px-4 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 4 — Sum to get your plate cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Add up all yield-adjusted ingredient costs. This is your plate cost — also called recipe cost or portion cost.</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <p className="font-bold text-gray-800 mb-3">Grilled Chicken Caesar — full costing card</p>
              <div className="space-y-1.5 text-gray-600">
                {[
                  ["Chicken breast (8oz, 75% yield)", "$3.67"],
                  ["Romaine (4oz, 90% yield)", "$0.38"],
                  ["Caesar dressing (2oz)", "$0.53"],
                  ["Parmesan (0.5oz)", "$0.42"],
                  ["Croutons (1oz)", "$0.18"],
                  ["Garnish + lemon", "$0.12"],
                  ["Total plate cost", "$5.30"],
                ].map(([item, cost], i) => (
                  <div key={i} className={`flex justify-between ${i === 6 ? "border-t border-gray-200 pt-1.5 font-bold text-gray-900" : ""}`}>
                    <span>{item}</span><span>{cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 5 — Calculate your menu price</h2>
            <p className="text-gray-600 leading-relaxed mb-4">With your plate cost in hand, divide by your target food cost percentage to get the minimum menu price needed to hit your margin:</p>
            <div className="bg-orange-50 rounded-xl p-5 text-sm font-mono mb-4">
              <p className="text-gray-700">Menu price = Plate cost ÷ Target food cost %</p>
              <p className="text-gray-500 mt-1">$5.30 ÷ 0.30 = $17.67 → round to $18 or $17.99</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              {[
                { pct: "25%", price: "$21.20", label: "Fine dining target" },
                { pct: "30%", price: "$17.67", label: "Casual dining target" },
                { pct: "35%", price: "$15.14", label: "Max acceptable" },
              ].map(({ pct, price, label }) => (
                <div key={pct} className="bg-white border border-gray-200 rounded-xl p-3">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="font-black text-orange-600 text-lg mt-1">{pct}</p>
                  <p className="text-gray-700 font-bold">{price}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common menu costing mistakes</h2>
            <div className="space-y-3">
              {[
                { t: "Forgetting small ingredients", b: "Oils, spices, herbs, and condiments are easy to skip. They can add $0.30–0.60 per dish — enough to shift your food cost 2–3 points on a lower-priced item." },
                { t: "Using purchase weight instead of yield-adjusted weight", b: "The most common costing error. Proteins especially lose significant weight during prep and cooking. Always apply yield percentage to proteins." },
                { t: "Not updating costs when supplier prices change", b: "A costing card from 6 months ago may already be off by 10–15% on proteins. Build a quarterly audit into your calendar." },
                { t: "Costing based on the recipe as written, not as cooked", b: "If your cooks are plating different portions than the recipe spec, your costing card does not reflect reality. Check portioned weights during service periodically." },
                { t: "Ignoring house-made components", b: "If you make your own bread, dressings, sauces, or pasta, those components need their own sub-recipe cost before they can be included in the main dish cost." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Cost every dish in under 2 minutes</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer handles the ingredient conversion math, yield adjustments, and price calculation automatically — just enter your ingredients and quantities.</p>
            <Link href="/menu-cost-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Menu Cost Calculator →</Link>
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
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage Formula", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/what-is-yield-in-cooking", title: "What Is Yield in Cooking?", desc: "Yield percentages and how to apply them." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "The complete dish costing walkthrough." },
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Use costing data to redesign your menu for profit." },
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
            <Link href="/menu-cost-calculator" className="hover:text-orange-500">Menu Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
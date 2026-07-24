import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Do Food Costing: Step-by-Step Process for Restaurants",
  description: "How to do food costing for a restaurant — the complete step-by-step process for costing your entire menu, setting up a system, and keeping costs current as prices change.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-do-food-costing" },
  openGraph: {
    title: "How to Do Food Costing: Step-by-Step Process for Restaurants",
    description: "The complete food costing process — from setting up your costing system to pricing every dish on your menu profitably.",
    url: "https://www.aimenupricer.com/blog/how-to-do-food-costing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How to Do Food Costing: Step-by-Step Process for Restaurants",
  description: "How to set up and run a complete food costing system for a restaurant — from the initial setup to ongoing maintenance and menu pricing decisions.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-do-food-costing",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Do Food Costing", item: "https://www.aimenupricer.com/blog/how-to-do-food-costing" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is food costing?", acceptedAnswer: { "@type": "Answer", text: "Food costing is the process of calculating the exact cost of ingredients required to produce one serving of every dish on your menu. The goal is to know your plate cost — the ingredient cost per portion — so you can set menu prices that achieve your target food cost percentage. A complete food costing system covers every menu item, accounts for yield loss during preparation, and is updated whenever supplier prices change significantly." } },
    { "@type": "Question", name: "How do you figure out food cost for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "To figure out food cost for a restaurant: (1) Standardize your recipes so each dish has a documented ingredient list and portion size. (2) For each ingredient, calculate the cost per unit used based on your purchase invoices. (3) Apply yield percentages to account for prep loss on proteins and produce. (4) Sum ingredient costs to get your plate cost per dish. (5) Divide plate cost by menu price to get food cost percentage. (6) Compare against your target (typically 28–35%) and adjust prices or recipes accordingly." } },
    { "@type": "Question", name: "How often should you do food costing?", acceptedAnswer: { "@type": "Answer", text: "You should do a full food costing review whenever: (1) You launch new menu items. (2) A major ingredient price changes by more than 5–10%. (3) You redesign your menu seasonally. At minimum, review all food costs quarterly. For high-volatility ingredients like beef, seafood, or avocado, monitor prices monthly and reprice as needed. Your overall actual food cost percentage (from your P&L) is a quick indicator that something has drifted — if it rises more than 2 points above your theoretical target, it is time to recheck your costing cards." } },
    { "@type": "Question", name: "What is the difference between food costing and food cost percentage?", acceptedAnswer: { "@type": "Answer", text: "Food costing is the process of calculating the ingredient cost per serving for each dish. Food cost percentage is the ratio of that cost to your selling price, expressed as a percentage. Food costing is the work you do to figure out your numbers. Food cost percentage is the output — the benchmark you use to evaluate whether your prices are right and compare against industry standards. You need food costing to calculate food cost percentage; food cost percentage without food costing is just a guess." } },
  ],
};

export default function HowToDoFoodCostingPage() {
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
          <span className="text-gray-600">How to Do Food Costing</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">How to Do Food Costing: Step-by-Step Process for Restaurants</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Food costing is not a one-time task — it is an ongoing system. This guide covers how to set it up properly from scratch and how to maintain it so your costs and prices stay aligned as the market changes.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">The food costing process in brief</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Standardize recipes", "→", "Price each ingredient", "→", "Apply yield %", "→", "Sum plate cost", "→", "Set menu price", "→", "Monitor & update"].map((s, i) => (
              <span key={i} className={s === "→" ? "text-gray-300" : "bg-white border border-gray-200 px-2 py-1 rounded-lg font-medium text-gray-700"}>{s}</span>
            ))}
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">The 6-step food costing process</h2>
            <div className="space-y-6">
              {[
                {
                  n: "1", t: "Standardize every recipe",
                  b: "A food costing system only works if your recipes are fixed. Before you cost anything, write down the exact ingredients and quantities for each dish as it is currently being made — not as you imagine it should be made. Weigh portions, measure sauces, count garnishes. A standardized recipe is the source of truth for everything that follows.",
                  tip: "Start with your 10 highest-revenue dishes. These drive the most food cost, so getting them right first has the biggest financial impact."
                },
                {
                  n: "2", t: "Build your ingredient price database",
                  b: "Gather your last 3–4 supplier invoices and extract the price per unit for every ingredient you use. Convert everything to a common unit — price per oz, per g, per each. This database is what you pull from when you cost each recipe. Keep it in a spreadsheet or use a tool like MenuPricer that lets you save ingredient prices.",
                  tip: "Note the date on each price. Ingredient prices change — you need to know when you last updated each one."
                },
                {
                  n: "3", t: "Apply yield percentages to proteins and produce",
                  b: "Before you can cost an ingredient, you need to know how much of what you purchased is actually usable. Chicken breast loses about 12% to trimming. Salmon loses 24% to skinning and pin bones. Broccoli loses 30% to stem trimming. Ignoring yield is the #1 cause of food costs running above budget.",
                  tip: "Measure your kitchen's actual yield on each item rather than using published averages. Your prep team's technique and your supplier's trim level both affect real yield."
                },
                {
                  n: "4", t: "Cost each recipe ingredient by ingredient",
                  b: "For each ingredient in the recipe: take the quantity used per serving, divide by yield percentage to get the purchase quantity needed, multiply by your cost per purchase unit. Sum all ingredients — this is your plate cost (food cost per serving). Include everything: cooking oil, salt, garnishes, sauce, packaging for to-go items.",
                  tip: null
                },
                {
                  n: "5", t: "Calculate food cost percentage and set your price",
                  b: "Food cost % = Plate cost ÷ Menu price × 100. If your plate cost is $5.20 and you want a 30% food cost, your minimum menu price is $5.20 ÷ 0.30 = $17.33. Round to $17.50 or $17.99 based on your market positioning. If your existing menu price yields a food cost % above 35%, you need to either raise the price or redesign the recipe.",
                  tip: null
                },
                {
                  n: "6", t: "Schedule ongoing reviews",
                  b: "Food costs change. Beef prices can swing 15% between seasons. Avocado prices are notoriously volatile. Build a quarterly review of all costing cards into your calendar. More frequently, watch your actual food cost % on your P&L — if it starts running 2+ points above your theoretical target, that is your signal to recheck ingredient prices and portion adherence.",
                  tip: "When you update an ingredient price, cascade it through all recipes that use that ingredient — do not just update the card where you noticed the change."
                },
              ].map(({ n, t, b, tip }) => (
                <div key={n} className="flex gap-4">
                  <span className="w-9 h-9 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <div className="flex-1">
                    <p className="font-black text-gray-900 text-lg">{t}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">{b}</p>
                    {tip && <div className="bg-orange-50 rounded-lg p-3 mt-2 text-xs text-orange-700"><span className="font-bold">Tip: </span>{tip}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What food costing tells you — and what it does not</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-black text-green-800 mb-3">What food costing tells you</p>
                <div className="space-y-1.5 text-green-700">
                  {[
                    "Exact ingredient cost per dish",
                    "Food cost percentage per item",
                    "Minimum price needed to hit margin target",
                    "Which dishes are overpriced vs underpriced",
                    "Which menu changes would have the biggest impact",
                  ].map(t => <p key={t}>✓ {t}</p>)}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-black text-gray-800 mb-3">What it does not cover</p>
                <div className="space-y-1.5 text-gray-600">
                  {[
                    "Labor cost per dish (separate calculation)",
                    "Overhead allocation per dish",
                    "Waste and spoilage that happens between prep and plate",
                    "Portion drift by your kitchen staff",
                    "Price sensitivity — what customers will actually pay",
                  ].map(t => <p key={t}>· {t}</p>)}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Food costing solves the ingredient math. You still need to set prices based on your market, your brand positioning, and what your customers will pay. A dish that costs $4 in ingredients can be priced at $12 (budget diner) or $32 (upscale bistro) — food costing gives you the floor, not the ceiling.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to keep food costs current as prices change</h2>
            <div className="space-y-3 text-sm">
              {[
                { t: "Set price change alerts with your suppliers", b: "Ask your main suppliers to notify you when commodity prices move more than 5%. Most will do this if you ask. Even a weekly email with your top 10 ingredient prices is enough to catch significant changes." },
                { t: "Review invoices against your price database monthly", b: "Pull your last invoice and compare the per-unit price for your top 10 ingredients by spend against what is in your costing system. A quick 15-minute check each month catches drift before it compounds." },
                { t: "Update costing cards immediately after a price change", b: "When a price changes, update every recipe that uses that ingredient — not just the one you happen to be looking at. A 20% increase in chicken affects every dish with chicken." },
                { t: "Track actual vs theoretical food cost weekly", b: "Your P&L's actual food cost vs your theoretical (recipe-based) food cost is the diagnostic. A growing gap means either your prices are out of date, your portions have drifted, or waste has increased. Investigate immediately." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800">{t}</p>
                  <p className="text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Do food costing in 2 minutes per dish</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer is a free online food costing tool — enter your ingredients, get your plate cost and food cost percentage instantly, with AI-suggested pricing. No spreadsheet setup required.</p>
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
                { href: "/blog/food-costing-template", title: "Food Costing Template", desc: "Free recipe cost spreadsheet structure." },
                { href: "/blog/how-to-cost-a-menu-item", title: "How to Cost a Menu Item", desc: "Per-dish costing walkthrough with yield." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage Formula", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/what-is-yield-in-cooking", title: "Yield in Cooking", desc: "Yield % reference table for all ingredients." },
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
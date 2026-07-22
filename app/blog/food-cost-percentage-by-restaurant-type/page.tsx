import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Food Cost Percentage by Restaurant Type (2026 Benchmarks)",
  description:
    "What is a good food cost percentage? Benchmarks for fine dining, fast casual, food trucks, bakeries, coffee shops, and more — with industry averages and how to compare your numbers.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-cost-percentage-by-restaurant-type" },
  openGraph: {
    title: "Food Cost Percentage by Restaurant Type (2026 Benchmarks)",
    description: "Industry food cost benchmarks for every restaurant type — fine dining, fast casual, bakery, food truck, coffee shop, and more.",
    url: "https://www.aimenupricer.com/blog/food-cost-percentage-by-restaurant-type",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Food cost percentage benchmarks by restaurant type" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Food Cost Percentage by Restaurant Type (2026 Benchmarks)",
  description: "Industry food cost benchmarks for every restaurant type — with average ranges, why they differ, and how to improve your own numbers.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/food-cost-percentage-by-restaurant-type",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Food Cost Percentage by Restaurant Type", item: "https://www.aimenupricer.com/blog/food-cost-percentage-by-restaurant-type" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good food cost percentage for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good food cost percentage is 28-35% for most full-service restaurants. Fast casual restaurants typically run 25-35%, fine dining 25-35%, food trucks 25-40%, bakeries 25-35%, and coffee shops 15-25%. The right target depends on your concept: higher labor concepts (fine dining) can afford slightly lower food cost targets because labor is the bigger cost driver.",
      },
    },
    {
      "@type": "Question",
      name: "What food cost percentage do fast food restaurants run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fast food and quick service restaurants typically run a food cost percentage of 25-35%. Major chains like McDonald's have reported food costs around 30-33% of revenue. The lower end is achievable through bulk purchasing, standardized recipes, and minimal food waste — advantages that independent operators have difficulty replicating at the same scale.",
      },
    },
    {
      "@type": "Question",
      name: "Why do coffee shops have lower food cost percentages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffee shops run 15-25% food cost because the primary product — espresso — has very low ingredient cost relative to selling price. A double espresso costs roughly $0.30-0.50 in ingredients and sells for $3.50-5.00, a food cost of 8-14%. Pastries and food items raise the average, but the beverage margin pulls the blended food cost well below typical restaurant levels.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average food cost for a food truck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food trucks typically run food costs of 25-40%, with an average around 30-35%. Food trucks have higher food cost variability than brick-and-mortar restaurants because batch sizes are smaller (less buying power), waste is higher (limited cold storage), and menus are more specialized. Successful food trucks compensate with higher selling prices and lower rent costs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost percentage = (Cost of ingredients used / Revenue from food sales) x 100. For a single dish: divide the total ingredient cost of one portion by the menu price. Example: if a dish costs $4.20 in ingredients and sells for $14.00, your food cost percentage is 30%. Track this monthly using your invoices and POS sales data — most restaurant operators track it weekly during high-volume periods.",
      },
    },
  ],
};

const BENCHMARKS = [
  {
    type: "Fine Dining",
    range: "25–35%",
    avg: "28%",
    labor: "30–40%",
    margin: "3–9%",
    notes: "Premium ingredients justify higher ticket prices. Labor is the bigger cost lever — kitchen brigades are large.",
    icon: "🍽️",
  },
  {
    type: "Fast Casual",
    range: "25–35%",
    avg: "30%",
    labor: "25–35%",
    margin: "6–9%",
    notes: "Counter service keeps labor lower than full-service. Standardized recipes minimize waste. Chipotle runs ~30%.",
    icon: "🥗",
  },
  {
    type: "Quick Service / Fast Food",
    range: "25–35%",
    avg: "31%",
    labor: "25–30%",
    margin: "6–9%",
    notes: "Bulk purchasing gives chains a 3–5% food cost advantage over independents at the same price point.",
    icon: "🍔",
  },
  {
    type: "Pizza",
    range: "20–30%",
    avg: "25%",
    labor: "30–38%",
    margin: "7–15%",
    notes: "Dough and cheese are low cost. Delivery adds labor. Pizza has the highest margin potential of any fast food category.",
    icon: "🍕",
  },
  {
    type: "Casual Dining",
    range: "28–35%",
    avg: "32%",
    labor: "30–35%",
    margin: "3–6%",
    notes: "Breadbaskets, complimentary items, and larger menus raise food cost. Thin margins — Darden targets 31–32%.",
    icon: "🍴",
  },
  {
    type: "Food Truck",
    range: "25–40%",
    avg: "33%",
    labor: "25–35%",
    margin: "4–10%",
    notes: "Small batch sizes and limited cold storage create waste. Higher variance than brick-and-mortar.",
    icon: "🚚",
  },
  {
    type: "Bakery",
    range: "25–35%",
    avg: "30%",
    labor: "35–45%",
    margin: "4–9%",
    notes: "Flour, butter, and sugar are cheap — labor for skilled bakers is the dominant cost. Pastry margins can be excellent.",
    icon: "🥐",
  },
  {
    type: "Coffee Shop",
    range: "15–25%",
    avg: "20%",
    labor: "35–45%",
    margin: "2.5–6.5%",
    notes: "Espresso has ~10% food cost. Pastries pull it up. Starbucks globally runs around 28% including food items.",
    icon: "☕",
  },
  {
    type: "Sushi / Japanese",
    range: "28–35%",
    avg: "32%",
    labor: "30–38%",
    margin: "4–9%",
    notes: "Fish is expensive and highly perishable — waste is a significant cost driver. Omakase can target lower food cost with premium pricing.",
    icon: "🍣",
  },
  {
    type: "Catering",
    range: "25–35%",
    avg: "28%",
    labor: "30–40%",
    margin: "7–12%",
    notes: "Bulk cooking lowers per-unit ingredient cost. Large events can achieve 20–25% food cost with smart menu design.",
    icon: "🍱",
  },
];

export default function FoodCostByRestaurantTypePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Blog</Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Food Cost by Restaurant Type</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">Try AI Pricer →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Food Cost % by Restaurant Type</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Food Cost Percentage by Restaurant Type: 2026 Industry Benchmarks
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Your food cost percentage only means something when you compare it against the right benchmark. A 33% food
            cost is fine for a casual dining restaurant and a warning sign for a coffee shop. Here are the real numbers,
            by concept type.
          </p>
        </div>

        {/* Quick reference stat bar */}
        <div className="bg-gray-900 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Industry average food cost % — quick reference</p>
          <div className="space-y-2.5">
            {[
              { label: "Coffee Shop", pct: 20, color: "bg-blue-400" },
              { label: "Pizza", pct: 25, color: "bg-green-400" },
              { label: "Fine Dining", pct: 28, color: "bg-orange-400" },
              { label: "Bakery", pct: 30, color: "bg-amber-400" },
              { label: "Fast Casual", pct: 30, color: "bg-orange-400" },
              { label: "Casual Dining", pct: 32, color: "bg-orange-500" },
              { label: "Food Truck", pct: 33, color: "bg-red-400" },
            ].map(({ label, pct, color }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-28 shrink-0">{label}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-2">
                  <div className={`${color} h-2 rounded-full`} style={{ width: `${(pct / 40) * 100}%` }} />
                </div>
                <span className="text-xs font-bold text-white w-8 text-right">{pct}%</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Average values. Ranges shown in detail table below.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          {/* What is food cost % */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What food cost percentage actually measures</h2>
            <p className="text-gray-600 leading-relaxed">
              Food cost percentage is the share of your food revenue that goes toward buying the ingredients. If a dish sells
              for $14 and the ingredients cost $4.20, your food cost percentage is 30%.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-5 font-mono text-sm">
              <p className="text-gray-500 text-xs mb-2">Formula</p>
              <p className="text-gray-900 font-bold">Food Cost % = (Ingredient Cost ÷ Menu Price) × 100</p>
              <p className="text-gray-500 mt-3 text-xs">Example: $4.20 ÷ $14.00 × 100 = <span className="text-orange-600 font-bold">30%</span></p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The remaining 70% covers labor, rent, utilities, equipment, marketing, and — if everything goes well — profit.
              The reason food cost benchmarks differ so much between restaurant types is that each concept has a different
              balance of these other costs.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              A fine dining restaurant with six cooks and an executive chef has massive labor costs — so it can
              tolerate a slightly higher food cost if the menu prices are high enough. A coffee shop with minimal
              food prep has almost no kitchen labor, so a 20% food cost still leaves room for rent and staff wages.
            </p>
          </section>

          {/* Benchmark table */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Food cost benchmarks by restaurant type</h2>
            <div className="space-y-4">
              {BENCHMARKS.map((b) => (
                <div key={b.type} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{b.icon}</span>
                      <div>
                        <h3 className="font-black text-gray-900">{b.type}</h3>
                        <p className="text-xs text-gray-400">Avg. net margin: {b.margin}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xl font-black text-orange-500">{b.avg}</p>
                      <p className="text-xs text-gray-400">avg food cost</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-orange-50 rounded-xl px-3 py-2">
                      <p className="text-[10px] text-gray-400 mb-0.5">Food cost range</p>
                      <p className="text-sm font-bold text-orange-600">{b.range}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-3 py-2">
                      <p className="text-[10px] text-gray-400 mb-0.5">Typical labor cost</p>
                      <p className="text-sm font-bold text-gray-700">{b.labor}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why concepts differ */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why food cost targets differ between concepts</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The key insight is that food cost, labor cost, and overhead are connected. When one is lower, another
              is usually higher. Successful restaurants know their cost structure and price accordingly.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Coffee shops: low food cost, high labor",
                  body: "Espresso costs $0.30–0.50 in ingredients. Selling at $4.50, that is an 8% food cost. But a skilled barista costs $18–25/hour and a busy shop needs 2–4 staff at all times. Labor is 35–45% of revenue — food cost is not the concern.",
                },
                {
                  title: "Fine dining: moderate food cost, very high labor",
                  body: "A tasting menu dish might have $12 in ingredients selling for $45 — a 27% food cost. But the kitchen brigade to prepare it (sous chef, chef de partie, commis) adds substantial labor. Fine dining restaurants are really in the business of selling labor, not ingredients.",
                },
                {
                  title: "Pizza: lowest food cost in the industry",
                  body: "Flour, water, yeast, tomato, and mozzarella. Even a premium pizza can have $3–5 in ingredients selling for $18–24. The economics are why pizza is one of the most profitable independent restaurant concepts when run well.",
                },
                {
                  title: "Food trucks: widest cost variance",
                  body: "A food truck with a focused 8-item menu, high volume, and good purchasing can hit 25% food cost. One with a rotating menu, small batches, and leftover waste can run 40%. Waste control is the single biggest lever for food truck operators.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-4 border-orange-300 pl-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to use benchmarks */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to use these benchmarks for your restaurant</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Knowing the benchmark is only useful if you compare it to your own number. Here is a four-step process:
            </p>
            <div className="space-y-3">
              {[
                { step: "1", title: "Calculate your current food cost %", body: "Take last month's ingredient spend and divide by last month's food revenue. If you spent $8,400 on ingredients and made $28,000 in food sales, your food cost is 30%." },
                { step: "2", title: "Compare to your concept benchmark", body: "Find your restaurant type in the table above. Are you within the range? If you are a casual dining restaurant at 38% food cost, that is 6 points above the average — a significant problem." },
                { step: "3", title: "Identify which dishes are pulling the average up", body: "Your overall food cost percentage is an average of every dish you sell. Use a recipe costing tool to find the specific dishes above your target. These are the ones to reprice or reformulate." },
                { step: "4", title: "Set a per-dish target", body: "Once you know your concept's target range, apply it dish-by-dish. A 30% food cost target means every dish's ingredient cost should be no more than 30% of its menu price." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0">{step}</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-sm text-gray-500 mt-1">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Three mistakes restaurants make with food cost targets</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-2">❌ Comparing to the wrong concept</h3>
                <p className="text-sm text-gray-600">A coffee shop owner comparing their 22% food cost to a casual dining benchmark of 32% might think they are doing great. They are — but a 22% coffee shop food cost means nothing if labor is 48% and rent is 18%. Look at total prime cost (food + labor), not just food cost in isolation.</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-2">❌ Tracking at the category level, not the dish level</h3>
                <p className="text-sm text-gray-600">A 30% overall food cost could hide one dish at 55% and another at 15%. You need per-dish costing to know where the problem is. Tracking only the monthly average delays identifying the culprit by weeks.</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-2">❌ Ignoring yield and waste</h3>
                <p className="text-sm text-gray-600">If your food cost calculation uses the purchase price of ingredients without accounting for trim waste, cooking loss, or spoilage, your cost is understated. A chicken breast that loses 20% weight when cooked costs 25% more per usable ounce than the raw purchase price suggests. See our guide on <Link href="/blog/recipe-yield" className="text-orange-500 hover:underline">recipe yield</Link> for how to adjust.</p>
              </div>
            </div>
          </section>

          {/* Prime cost */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The better metric: prime cost</h2>
            <p className="text-gray-600 leading-relaxed">
              Most experienced operators focus on <strong>prime cost</strong> — the combination of food cost and labor cost — rather
              than food cost alone. Prime cost is harder to manipulate and gives a more accurate picture of operational health.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Concept</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Food cost</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Labor cost</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Prime cost</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Fine Dining", food: "28%", labor: "35%", prime: "63%", target: "≤65%" },
                    { type: "Fast Casual", food: "30%", labor: "28%", prime: "58%", target: "≤60%" },
                    { type: "Coffee Shop", food: "20%", labor: "40%", prime: "60%", target: "≤62%" },
                    { type: "Food Truck", food: "33%", labor: "30%", prime: "63%", target: "≤65%" },
                    { type: "Bakery", food: "30%", labor: "40%", prime: "70%", target: "≤70%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-orange-600 font-bold">{row.food}</td>
                      <td className="px-4 py-3 text-blue-600 font-bold">{row.labor}</td>
                      <td className="px-4 py-3 text-gray-900 font-black">{row.prime}</td>
                      <td className="px-4 py-3 text-green-600 font-bold">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">Prime cost target of ≤65% is the industry rule of thumb for full-service restaurants. Below 60% is excellent. Above 70% leaves almost nothing for rent, utilities, and profit.</p>
          </section>

          {/* CTA */}
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Calculate your actual food cost per dish</h2>
            <p className="text-orange-100 text-sm mb-5">
              Knowing the benchmark is step one. MenuPricer shows you the food cost percentage on every dish and flags anything above your target — so you know exactly where to focus.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-700/20"
            >
              Calculate My Food Cost Free →
            </Link>
            <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
          </section>

          {/* FAQ */}
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

          {/* Related */}
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/food-cost-formula", title: "Food Cost Formula Explained", desc: "The exact formula with worked examples for every dish type." },
                { href: "/blog/recipe-yield", title: "What Is Recipe Yield?", desc: "How trim waste and cooking loss affect your real ingredient cost." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin Benchmarks", desc: "Average net profit margins by concept type." },
                { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "When and how to raise prices without losing customers." },
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

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
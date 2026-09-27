import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-27";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "What Should Food Cost Be in a Restaurant? Targets by Type (2026)",
  description:
    "What should your food cost be? Targets range from 25–35% depending on your restaurant type. Here are the benchmarks, why they differ, and what to do if you're over.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/what-should-food-cost-be" },
  openGraph: {
    title: "What Should Food Cost Be in a Restaurant?",
    description: "Food cost targets by restaurant type, why they differ, and how to tell if your costs are too high.",
    url: "https://www.aimenupricer.com/blog/what-should-food-cost-be",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Should Food Cost Be in a Restaurant? Targets by Type",
  description: "Industry food cost benchmarks for full-service, fast-casual, bakeries, bars, food trucks, and catering. Includes how to evaluate your own numbers.",
  url: "https://www.aimenupricer.com/blog/what-should-food-cost-be",
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
    { "@type": "ListItem", position: 3, name: "What Should Food Cost Be?", item: "https://www.aimenupricer.com/blog/what-should-food-cost-be" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should food cost be in a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most full-service restaurants, food cost should be between 28% and 35% of menu price. Fast-casual and counter-service operations typically target 25–30% because they have more control over portion size and less waste. Fine dining often runs 25–35% but compensates with higher average check size. The right target depends on your concept, labor percentage, and overhead — food cost cannot be evaluated in isolation from your full cost structure.",
      },
    },
    {
      "@type": "Question",
      name: "Is 30% food cost good for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30% food cost is generally considered healthy for a full-service restaurant. It leaves 70% of menu revenue available for labor, rent, utilities, marketing, and profit. Whether it is sustainable depends on your other costs: a 30% food cost with a 35% labor cost gives a prime cost of 65%, which is tight but manageable. A 30% food cost with a 45% labor cost leaves almost nothing for overhead and profit.",
      },
    },
    {
      "@type": "Question",
      name: "What causes food cost to be too high?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two main causes of high food cost are: (1) underpriced menus — dishes priced before ingredient costs rose, so the food cost percentage has crept up without any operational change; and (2) operational waste — over-portioning, spoilage, theft, and comps. Underpricing is more common and is fixed by repricing. Waste is fixed by measuring the gap between theoretical and actual food cost, then investigating the largest discrepancies.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost for a bar or pub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For food at a bar or pub, a food cost of 25–30% is typical. Bars benefit from high beverage margins — alcohol often runs at 18–24% cost — which subsidizes the food side and allows the combined operation to be profitable even with slightly higher food cost percentages on individual dishes.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost percentage for a bakery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bakeries typically target 25–35% food cost, depending on how much of their revenue comes from high-margin beverages like coffee and tea. A bakery that is primarily a coffee shop with baked goods as a secondary product can run lower food cost percentages because beverage sales have high margins. A pure production bakery selling wholesale typically targets 30–40% because retail markup is limited by competition.",
      },
    },
  ],
};

const BENCHMARKS = [
  { type: "Full-service restaurant", range: "28–35%", note: "Higher check size allows more ingredient cost per dish. Wine and cocktails pull average food cost down." },
  { type: "Fast-casual / counter service", range: "25–30%", note: "Simplified menus, controlled portions, and lower waste offset the lower price point." },
  { type: "Fine dining", range: "25–35%", note: "Premium ingredients, but high average check and large wine program support the full range." },
  { type: "Bakery (café model)", range: "25–30%", note: "Coffee margin (often under 20% food cost) balances higher food percentages on baked goods." },
  { type: "Bakery (production / wholesale)", range: "30–40%", note: "No retail markup leverage; cost control matters more." },
  { type: "Bar / pub (food component)", range: "25–30%", note: "Alcohol margin at 18–24% cost subsidizes food. Combined prime cost is the key number." },
  { type: "Food truck", range: "28–35%", note: "Simplified menu reduces waste; lower overhead than a brick-and-mortar allows slightly higher food cost." },
  { type: "Catering", range: "25–35%", note: "Fixed-price packages allow precise costing. Large events benefit from volume buying." },
  { type: "Ghost kitchen / delivery-only", range: "28–33%", note: "No dining room, but platform commission (15–30%) eats into margin. Price accordingly." },
];

export default function WhatShouldFoodCostBePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Food Cost</span>
          <span className="text-xs text-gray-400">6 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime={DATE_PUBLISHED} className="text-xs text-gray-400">Updated {DATE_DISPLAY}</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          What Should Food Cost Be in a Restaurant?
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          There is no single right answer — it depends on your concept, check size, and how your labor percentage balances against it. Here are the benchmarks by restaurant type, why they differ, and how to evaluate your own numbers.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The short answer</h2>
            <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5">
              <p className="text-gray-700 leading-relaxed">
                For most restaurants, food cost should be between <strong className="text-gray-900">25% and 35%</strong> of menu price. Below 25% and you are either pricing very well or cutting quality. Above 35% and you are leaving very little for labor, overhead, and profit. The exact target depends on your concept — see the table below.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Food cost targets by restaurant type</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-left">
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Restaurant type</th>
                    <th className="px-4 py-3 text-orange-400 font-semibold text-xs">Target range</th>
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {BENCHMARKS.map((b, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{b.type}</td>
                      <td className="px-4 py-3 text-orange-600 font-black border-b border-gray-100">{b.range}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why the right number depends on your other costs</h2>
            <p>
              Food cost percentage only measures ingredient spend against sales. It tells you nothing
              about labor, rent, or utilities. A restaurant with 30% food cost and 40% labor cost
              (prime cost of 70%) is in worse shape than one with 35% food cost and 28% labor cost
              (prime cost of 63%).
            </p>
            <p className="mt-3">
              The practical target for prime cost (food + labor) in a full-service restaurant is
              below 60%. Fine dining and concepts with high labor requirements can survive at 65%
              with very strong check averages and high revenue per square foot. Above 65% prime
              cost, the remaining 35% has to cover rent, utilities, marketing, repairs, and profit
              — which is very tight.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Prime cost reference points</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-700">Below 55%</span><span className="font-bold text-green-600">Healthy — room for profitability</span></div>
                <div className="flex justify-between"><span className="text-gray-700">55–60%</span><span className="font-bold text-green-500">Good — manageable if overhead is controlled</span></div>
                <div className="flex justify-between"><span className="text-gray-700">60–65%</span><span className="font-bold text-orange-500">Tight — needs strong revenue or lean overhead</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Above 65%</span><span className="font-bold text-red-500">Problem — very little left for overhead and profit</span></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to tell if your food cost is too high</h2>
            <p>Run through this sequence:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-3">
              <li>
                <strong className="text-gray-900">Calculate your theoretical food cost.</strong> Cost every dish at current ingredient prices. If your theoretical food cost is already at or above your target, the menu is underpriced and needs a price increase before any operational intervention.
              </li>
              <li>
                <strong className="text-gray-900">Compare to actual food cost.</strong> Take an inventory count. Calculate actual food cost: (Opening inventory + Purchases − Closing inventory) ÷ Sales. If actual is 4+ percentage points above theoretical, the gap is operational: waste, over-portioning, spoilage, theft, or comps.
              </li>
              <li>
                <strong className="text-gray-900">Identify which dishes are over target.</strong> A blended food cost figure tells you there is a problem but not where. Dish-level food cost percentages tell you exactly which items to reprice or investigate.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The fastest way to lower food cost</h2>
            <p>
              If your food cost is above target because dishes are underpriced — which is the most
              common cause — the fix is a menu price increase. A $1.50 price increase on a dish
              that sells 40 covers per day is $1,800 per month. That is the impact of repricing
              one dish.
            </p>
            <p className="mt-3">
              Guest resistance to price increases is real but often less than operators expect. The
              way to minimize it: increase prices gradually rather than all at once, lead with value
              (portion improvement, quality upgrade, new items), and be deliberate about which dishes
              you increase. A high-frequency item like a house salad or a burger gets scrutinized.
              A specialty item or a seasonal special has more price flexibility.
            </p>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold text-white mb-3">Find out which dishes are above target</h2>
          <p className="text-orange-100 mb-5">
            Type a dish name and MenuPricer returns the estimated ingredient cost, suggested price,
            and food cost percentage. Free for your first 5 dishes.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price My First Dish Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Frequently asked questions</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/what-is-food-cost-percentage", title: "What Is Food Cost Percentage?", desc: "The definition, formula, and how to calculate it." },
              { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "More detailed benchmarks across 10 different concepts." },
              { href: "/blog/food-cost-management", title: "Food Cost Management", desc: "7 methods for bringing food cost within target." },
              { href: "/blog/prime-cost-restaurant", title: "Restaurant Prime Cost", desc: "Why food cost alone does not tell the full story." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-gray-100 mt-8 py-8">
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

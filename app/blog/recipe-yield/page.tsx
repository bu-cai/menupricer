import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is Recipe Yield? How to Calculate Yield in a Restaurant (2026)",
  description:
    "Recipe yield is the amount of usable product after cooking, trimming, or portioning. Learn the yield formula, why it matters for food cost, and how to calculate yield percentage for every ingredient.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/recipe-yield" },
  openGraph: {
    title: "What Is Recipe Yield? How to Calculate Yield in a Restaurant",
    description: "Recipe yield formula, yield percentage by ingredient, and why ignoring yield will make your food cost calculations wrong.",
    url: "https://www.aimenupricer.com/blog/recipe-yield",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Chef calculating recipe yield in a restaurant kitchen" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is Recipe Yield? How to Calculate Yield in a Restaurant (2026)",
  description: "Recipe yield is the amount of usable product after cooking, trimming, or portioning. Learn the yield formula, yield percentage by ingredient, and how yield affects food cost.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/recipe-yield",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "What Is Recipe Yield?", item: "https://www.aimenupricer.com/blog/recipe-yield" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is recipe yield?",
      acceptedAnswer: { "@type": "Answer", text: "Recipe yield is the total amount of usable, ready-to-serve product a recipe produces after all preparation including trimming, cooking, portioning, and plating. It is expressed as a weight, volume, or number of servings. For example, 1 kg of raw chicken breast typically yields 750-800g of cooked, usable meat (a 75-80% yield)." },
    },
    {
      "@type": "Question",
      name: "How do you calculate recipe yield percentage?",
      acceptedAnswer: { "@type": "Answer", text: "Yield % = (Usable weight after prep divided by Original raw weight) times 100. Example: if you start with 2 kg of beef and end up with 1.6 kg after trimming fat and gristle, the yield is (1.6 / 2) x 100 = 80%." },
    },
    {
      "@type": "Question",
      name: "Why does recipe yield matter for food cost?",
      acceptedAnswer: { "@type": "Answer", text: "If you ignore yield, your food cost per serving will be understated. A 1 kg salmon fillet at $30/kg that yields only 70% costs an effective $42.86/kg not $30. Accurate yield data ensures your menu prices cover your real ingredient costs." },
    },
  ],
};

const YIELD_TABLE = [
  { ingredient: "Chicken breast (boneless)", rawYield: "~80%", note: "Cooking shrinkage" },
  { ingredient: "Beef tenderloin", rawYield: "~65-70%", note: "Trim fat, silverskin" },
  { ingredient: "Salmon fillet", rawYield: "~70-75%", note: "Skin, pin bones removed" },
  { ingredient: "Shrimp (shell-on)", rawYield: "~60-65%", note: "Shell and head removal" },
  { ingredient: "Broccoli (whole head)", rawYield: "~60%", note: "Stems and leaves removed" },
  { ingredient: "Onion (whole)", rawYield: "~88%", note: "Skin and root removed" },
  { ingredient: "Potatoes (whole)", rawYield: "~80%", note: "Peeled and trimmed" },
  { ingredient: "Spinach (fresh)", rawYield: "~85%", note: "Stems removed" },
  { ingredient: "Mango (whole)", rawYield: "~65%", note: "Skin and pit removed" },
  { ingredient: "Whole chicken", rawYield: "~70%", note: "Bones and carcass removed" },
];

export default function RecipeYieldPost() {
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
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Recipe Costing</span>
          <span className="text-xs text-gray-400">5 min read</span>
          <time dateTime="2026-07-21" className="text-xs text-gray-400">July 21, 2026</time>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-5">
          What Is Recipe Yield? How to Calculate It (With Examples)
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          Recipe yield tells you how much usable food a recipe actually produces. Ignoring it is one of the most common reasons restaurant food costs run higher than expected — and menu prices end up too low.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Key Definition</p>
          <p className="text-gray-800 font-semibold leading-relaxed">
            <strong>Recipe yield</strong> is the total amount of ready-to-serve food produced by a recipe after all preparation — trimming, cooking, portioning, and plating. It is expressed as a weight, volume, or number of servings.
          </p>
          <div className="mt-4 bg-white rounded-xl p-4 font-mono text-sm text-gray-700 border border-orange-100">
            Yield % = (Usable weight after prep / Raw weight) x 100
          </div>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Why Recipe Yield Matters for Food Cost</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most restaurant owners calculate food cost using the purchase price of ingredients. That is a mistake — what you pay per kilogram is not what you actually use per kilogram.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Consider salmon. You buy a 1 kg fillet at <strong>$28/kg</strong>. After removing the skin and pin bones, you have <strong>720g of usable fish</strong>. Your real cost is:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-6 font-mono text-sm text-orange-300">
          Real cost = $28 / 0.72 = <strong className="text-white">$38.89/kg</strong>
        </div>
        <p className="text-gray-600 leading-relaxed mb-8">
          If you ignored yield, you would underprice your salmon dish by nearly <strong>$11 per kilogram of protein</strong>. Over hundreds of portions, that is a significant profit leak.
        </p>

        <h2 className="text-2xl font-black text-gray-900 mb-4">The Three Yield Formulas</h2>
        <div className="space-y-4 mb-8">
          {[
            { label: "Yield Percentage", formula: "Yield % = (Usable weight / Raw weight) x 100", example: "800g cooked chicken from 1,000g raw = 80% yield" },
            { label: "True Cost After Yield", formula: "True cost/kg = Purchase price / Yield %", example: "$20/kg / 0.80 = $25/kg true cost" },
            { label: "How Much to Buy", formula: "Raw quantity = Required yield / Yield %", example: "Need 600g cooked; yield 80% → buy 600 / 0.80 = 750g raw" },
          ].map(({ label, formula, example }) => (
            <div key={label} className="border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{label}</p>
              <p className="font-mono text-base text-gray-900 mb-2">{formula}</p>
              <p className="text-sm text-gray-500">{example}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Yield Percentages for Common Restaurant Ingredients</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          These are industry-standard yield percentages used for menu costing in North American restaurants.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Ingredient</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Typical Yield</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">What Is Lost</th>
              </tr>
            </thead>
            <tbody>
              {YIELD_TABLE.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/30 transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-gray-800">{row.ingredient}</td>
                  <td className="px-5 py-3.5">
                    <span className="bg-orange-100 text-orange-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{row.rawYield}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Step-by-Step: How to Measure Recipe Yield</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: "1", title: "Weigh ingredients before prep", desc: "Measure every ingredient in its raw, as-purchased state. Use a digital scale for accuracy. Record the raw weight." },
            { step: "2", title: "Prep and cook as normal", desc: "Trim, peel, cut, or cook the ingredient exactly as you would for service. Do not change your technique — you want to measure your real process." },
            { step: "3", title: "Weigh again after prep", desc: "Weigh the usable output after all prep and cooking. This is your yield weight." },
            { step: "4", title: "Calculate yield percentage", desc: "Divide yield weight by raw weight and multiply by 100. A 700g yield from 1,000g raw = 70%." },
            { step: "5", title: "Apply to your cost calculations", desc: "Divide your purchase price by the yield percentage to get the true cost per unit. Use this yield-adjusted cost in your recipe costing." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{step}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-4">Yield vs. Portion Size</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Yield</strong> is how much usable product you get from a raw ingredient. <strong>Portion size</strong> is how much of that usable product goes on one plate.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-bold text-blue-700 mb-2">Example: Roast Beef</p>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>Purchase: 5 kg whole roast at $18/kg = $90 total</li>
            <li>Yield: 70% → 3.5 kg usable beef → true cost = $90 / 3.5 = <strong>$25.71/kg</strong></li>
            <li>Portion: 180g per plate → cost per portion = 0.18 x $25.71 = <strong>$4.63</strong></li>
            <li>At 30% food cost: price at $4.63 / 0.30 = <strong>$15.43</strong></li>
          </ul>
        </div>

        <div className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h3 className="text-xl font-black mb-2">Calculate recipe cost with yield factored in</h3>
          <p className="text-orange-100 text-sm mb-5">Use MenuPricer to enter yield-adjusted ingredient costs and see your true cost per serving instantly.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/recipe-cost-calculator" className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors">
              Recipe Cost Calculator
            </Link>
            <Link href="/" className="border border-white/40 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors">
              AI Pricing Tool
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/recipe-cost-calculator" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Calculator</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Recipe Cost Calculator</p>
            </Link>
            <Link href="/blog/how-to-cost-a-dish" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Guide</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">How to Cost a Dish</p>
            </Link>
            <Link href="/food-cost-calculator" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Calculator</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Food Cost Calculator</p>
            </Link>
            <Link href="/blog/food-cost-formula" className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-orange-500 font-bold mb-1">Guide</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Food Cost Formula</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500 transition-colors">Recipe Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

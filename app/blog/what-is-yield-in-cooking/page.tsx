import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is Yield in Cooking? Definition, Formula & Percentage Chart",
  description: "What does yield mean in cooking? The definition of recipe yield, how to calculate yield percentage, and a reference chart for common restaurant ingredients.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/what-is-yield-in-cooking" },
  openGraph: {
    title: "What Is Yield in Cooking? Definition, Formula & Percentage Chart",
    description: "Yield in cooking explained — definition, formula, and yield percentage reference table for proteins, vegetables, and produce.",
    url: "https://www.aimenupricer.com/blog/what-is-yield-in-cooking",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "What Is Yield in Cooking? Definition, Formula & Percentage Chart",
  description: "What yield means in cooking and recipe development — how to calculate yield percentage and why it matters for food costing and menu pricing.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/what-is-yield-in-cooking",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "What Is Yield in Cooking?", item: "https://www.aimenupricer.com/blog/what-is-yield-in-cooking" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What does yield mean in cooking?", acceptedAnswer: { "@type": "Answer", text: "In cooking, yield means the usable amount of food you get from a raw ingredient after all prep work — trimming, peeling, cutting, and sometimes cooking. Yield is usually expressed as a percentage: if you start with 10 lbs of whole chicken and end up with 6.5 lbs of usable meat after breaking it down, your yield is 65%. Yield matters because you pay for the whole ingredient but can only serve the usable portion. Ignoring yield when pricing menu items leads to understated food costs and unprofitable prices." } },
    { "@type": "Question", name: "How do you calculate yield percentage?", acceptedAnswer: { "@type": "Answer", text: "Yield percentage = (Usable weight ÷ Original purchase weight) × 100. Example: You buy 5 lbs of carrots. After peeling and trimming, you have 4.2 lbs of usable carrot. Yield % = (4.2 ÷ 5) × 100 = 84%. To apply this to costing: if carrots cost $1.20/lb, your true cost for usable carrot is $1.20 ÷ 0.84 = $1.43/lb." } },
    { "@type": "Question", name: "What is the difference between recipe yield and ingredient yield?", acceptedAnswer: { "@type": "Answer", text: "Ingredient yield (also called trimming yield or prep yield) refers to the usable amount of a single ingredient after prep — for example, how much broccoli floret you get after removing the stems. Recipe yield refers to the total output of a recipe — how many portions or what total volume a recipe produces. A soup recipe might have an ingredient yield issue (trimming vegetables) AND a recipe yield question (how many quarts of finished soup does it make, and how many 8oz portions is that?)." } },
    { "@type": "Question", name: "Why does yield matter for menu pricing?", acceptedAnswer: { "@type": "Answer", text: "Yield matters for menu pricing because you pay the purchase price for the whole ingredient but can only sell the usable portion. If you cost a dish using the raw purchase price without adjusting for yield loss, your actual plate cost will be higher than your calculated cost. This leads to food cost percentages that run above budget, margins that disappear, and prices that feel right on paper but lose money in practice. Yield-adjusted costing is what separates a restaurant that runs at 30% food cost from one that budgeted 30% but actually runs at 35%." } },
  ],
};

const YIELD_DATA = [
  { category: "Proteins", items: [
    { name: "Chicken breast (boneless)", yield: "88%", loss: "12%", note: "Trimming fat and cartilage" },
    { name: "Chicken thigh (bone-in)", yield: "68%", loss: "32%", note: "Bone + skin + fat removed" },
    { name: "Whole chicken", yield: "65%", loss: "35%", note: "Full breakdown to boneless meat" },
    { name: "Beef tenderloin (whole)", yield: "68%", loss: "32%", note: "Silverskin, fat, chain removed" },
    { name: "Ground beef (cooked)", yield: "84%", loss: "16%", note: "Moisture and fat loss during cooking" },
    { name: "Salmon fillet (skin-on)", yield: "76%", loss: "24%", note: "After skin and pin bone removal" },
    { name: "Shrimp (shell-on, raw)", yield: "64%", loss: "36%", note: "Shell, tail, vein removed" },
    { name: "Pork loin", yield: "82%", loss: "18%", note: "Fat cap and silverskin removed" },
  ]},
  { category: "Vegetables", items: [
    { name: "Broccoli", yield: "70%", loss: "30%", note: "Stems and outer leaves removed" },
    { name: "Cauliflower", yield: "52%", loss: "48%", note: "Core, leaves, thick stems removed" },
    { name: "Carrots", yield: "84%", loss: "16%", note: "Peeled and topped" },
    { name: "Onions (yellow)", yield: "88%", loss: "12%", note: "Outer skin and root trimmed" },
    { name: "Bell pepper", yield: "82%", loss: "18%", note: "Seeds and ribs removed" },
    { name: "Mushrooms (button)", yield: "96%", loss: "4%", note: "Stem trimmed only" },
    { name: "Spinach (fresh)", yield: "92%", loss: "8%", note: "Tough stems removed" },
    { name: "Asparagus", yield: "78%", loss: "22%", note: "Woody base snapped off" },
  ]},
  { category: "Produce & Starches", items: [
    { name: "Potatoes (russet)", yield: "81%", loss: "19%", note: "Peel and eyes removed" },
    { name: "Avocado", yield: "75%", loss: "25%", note: "Pit and skin removed" },
    { name: "Strawberries", yield: "87%", loss: "13%", note: "Hulls removed" },
    { name: "Mango", yield: "60%", loss: "40%", note: "Skin and pit removed" },
    { name: "Lemons (juice yield)", yield: "30%", loss: "70%", note: "Juice from whole fruit" },
    { name: "Garlic (whole head)", yield: "88%", loss: "12%", note: "Papery skin removed" },
  ]},
];

export default function WhatIsYieldInCookingPage() {
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
          <span className="text-gray-600">What Is Yield in Cooking?</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">What Is Yield in Cooking? Definition, Formula & Percentage Chart</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Yield is the percentage of a purchased ingredient that is actually usable after prep. It is one of the most overlooked factors in food costing — and one of the most expensive to ignore.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Yield Percentage Formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-base font-black text-gray-900 mb-2">
            Yield % = (Usable Weight ÷ Purchase Weight) × 100
          </div>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-sm text-gray-700">
            True Cost per lb = Purchase Price ÷ Yield %
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What does yield mean in cooking?</h2>
            <p className="text-gray-600 leading-relaxed">Yield in cooking refers to the amount of usable food you get from a raw ingredient after all preparation. That preparation can include trimming, peeling, deboning, seeding, cooking, or portioning — any process that reduces the weight or volume of the original ingredient.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Yield is always lower than purchase weight because something is always removed or lost:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Trimming fat, sinew, and silverskin from proteins",
                "Removing peels, skins, and seeds from produce",
                "Snapping tough stems from asparagus and broccoli",
                "Moisture loss during cooking (especially proteins)",
                "Waste from portioning (trim from cutting uniform pieces)",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-orange-500 mt-0.5">•</span><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Worked example: calculating yield percentage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-2xl p-5 text-sm">
                <p className="font-black text-gray-800 mb-3">Example 1: Salmon fillet</p>
                <div className="space-y-1.5 text-gray-600">
                  <div className="flex justify-between"><span>Purchase weight</span><span>4.0 lbs</span></div>
                  <div className="flex justify-between"><span>After skinning + pin bones</span><span>3.0 lbs</span></div>
                  <div className="flex justify-between font-bold text-orange-600 border-t border-gray-200 pt-1.5"><span>Yield %</span><span>75%</span></div>
                  <div className="flex justify-between text-xs text-gray-500"><span>True cost (at $14/lb)</span><span>$18.67/lb usable</span></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5 text-sm">
                <p className="font-black text-gray-800 mb-3">Example 2: Whole cauliflower</p>
                <div className="space-y-1.5 text-gray-600">
                  <div className="flex justify-between"><span>Purchase weight</span><span>2.5 lbs</span></div>
                  <div className="flex justify-between"><span>After removing leaves/core</span><span>1.3 lbs</span></div>
                  <div className="flex justify-between font-bold text-orange-600 border-t border-gray-200 pt-1.5"><span>Yield %</span><span>52%</span></div>
                  <div className="flex justify-between text-xs text-gray-500"><span>True cost (at $2.50/lb)</span><span>$4.81/lb usable</span></div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Yield percentage chart by ingredient</h2>
            {YIELD_DATA.map((group) => (
              <div key={group.category} className="mb-6">
                <h3 className="font-black text-gray-800 mb-3">{group.category}</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-2.5 font-bold text-gray-700">Ingredient</th>
                      <th className="text-center px-4 py-2.5 font-bold text-gray-700">Yield %</th>
                      <th className="text-center px-4 py-2.5 font-bold text-gray-700">Loss %</th>
                      <th className="text-left px-4 py-2.5 font-bold text-gray-700 hidden sm:table-cell">Reason</th>
                    </tr></thead>
                    <tbody>
                      {group.items.map((row, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                          <td className="px-4 py-2.5 text-center font-black text-green-600">{row.yield}</td>
                          <td className="px-4 py-2.5 text-center font-bold text-red-400">{row.loss}</td>
                          <td className="px-4 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400">Note: Yield percentages vary by supplier quality, skill of prep staff, and seasonal factors. Use these as starting points and measure your own kitchen's actual yields.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How yield affects menu pricing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">The impact of yield on pricing is most dramatic for high-cost proteins with significant prep loss. Here is what happens when you do — and do not — account for yield:</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <p className="font-bold text-gray-800 mb-3">Beef tenderloin steak — with vs without yield adjustment</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase mb-2">Without yield adjustment</p>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between"><span>Purchase price</span><span>$28/lb</span></div>
                    <div className="flex justify-between"><span>Assumed 8oz serving</span><span>$14.00</span></div>
                    <div className="flex justify-between"><span>Menu price at 30%</span><span>$46.67</span></div>
                    <div className="flex justify-between text-red-500 font-bold border-t border-gray-200 pt-1"><span>Actual food cost %</span><span>43%</span></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase mb-2">With yield adjustment (68%)</p>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between"><span>True cost/lb</span><span>$41.18/lb</span></div>
                    <div className="flex justify-between"><span>Adjusted 8oz cost</span><span>$20.59</span></div>
                    <div className="flex justify-between"><span>Menu price at 30%</span><span>$68.63</span></div>
                    <div className="flex justify-between text-green-600 font-bold border-t border-gray-200 pt-1"><span>Actual food cost %</span><span>30%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Not adjusting for yield on this one item would result in pricing the steak $22 below where it needs to be to hit your food cost target.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Recipe yield vs ingredient yield</h2>
            <p className="text-gray-600 leading-relaxed mb-4">These are related but different concepts:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-black text-blue-800 mb-2">Ingredient yield</p>
                <p className="text-blue-700">The usable % of a single ingredient after prep. Applies to raw materials before they enter a recipe.</p>
                <p className="text-blue-500 text-xs mt-2">Example: Chicken breast = 88% yield after trimming fat</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="font-black text-orange-800 mb-2">Recipe yield</p>
                <p className="text-orange-700">The total quantity a recipe produces — total weight, volume, or number of portions.</p>
                <p className="text-orange-500 text-xs mt-2">Example: This soup recipe makes 12 portions of 8oz each</p>
              </div>
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Let MenuPricer apply yield automatically</h2>
            <p className="text-orange-100 text-sm mb-5">Enter your ingredients and raw quantities — MenuPricer applies yield percentages and calculates your true plate cost and menu price in seconds.</p>
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
                { href: "/blog/how-to-cost-a-menu-item", title: "How to Cost a Menu Item", desc: "Full recipe costing walkthrough with yield." },
                { href: "/blog/recipe-yield", title: "Recipe Yield Guide", desc: "How to calculate recipe yield and portions." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Calculate and benchmark your food cost %." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "The complete dish costing process." },
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
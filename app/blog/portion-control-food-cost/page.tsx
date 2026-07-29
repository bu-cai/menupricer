import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Portion Control: The Cheapest Way to Fix Food Cost",
  description: "Portion drift — servings that quietly creep above spec — is one of the most common and least noticed sources of rising food cost. How to catch it and fix it without buying anything new.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/portion-control-food-cost" },
  openGraph: {
    title: "Portion Control: The Cheapest Way to Fix Food Cost",
    description: "How portion drift silently raises food cost, and the specific checks that catch it before it shows up on the P&L.",
    url: "https://www.aimenupricer.com/blog/portion-control-food-cost",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Portion Control: The Cheapest Way to Fix Food Cost",
  description: "Portion drift is one of the most common and least noticed sources of rising food cost. Fixing it requires no new equipment or supplier negotiation — just measurement and a consistent standard.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/portion-control-food-cost",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Portion Control", item: "https://www.aimenupricer.com/blog/portion-control-food-cost" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is portion drift?", acceptedAnswer: { "@type": "Answer", text: "Portion drift is when the actual amount of an ingredient served creeps above the recipe spec over time, without anyone deciding to change it — a slightly heavier scoop, a bigger pour, an extra ounce of protein. No single instance looks significant, which is exactly why it goes unnoticed for months while quietly raising food cost." } },
    { "@type": "Question", name: "How much does portion drift actually cost a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A protein portion that drifts from 6oz to 7oz — a 17% increase that's easy to miss by eye — raises that dish's food cost by roughly the same percentage. Across a high-volume item sold dozens of times a day, that adds up to real monthly dollars, often more than a single supplier price negotiation would save." } },
    { "@type": "Question", name: "How do I check for portion drift without slowing down service?", acceptedAnswer: { "@type": "Answer", text: "Spot-check plated portions during a normal service period, without announcing it in advance — weigh a handful of servings against the recipe spec. This takes minutes and reveals drift that a kitchen walk-through alone won't catch, since cooks plating from muscle memory often don't realize their portions have shifted." } },
  ],
};

const CHECKS = [
  { title: "Weigh a plated portion during actual service", desc: "Not a test kitchen run — grab a scale during a normal Tuesday dinner and weigh what's actually going onto plates. This catches real drift, not theoretical recipe accuracy." },
  { title: "Compare against the written recipe spec, not memory", desc: "If the recipe says 6oz and the cook has been portioning 7oz for months by feel, nobody remembers the original number was different. Check against the document, not institutional memory." },
  { title: "Standardize scoops, ladles, and portion cups by size", desc: "Free-handed portions drift. A dedicated scoop or ladle size for each ingredient removes the judgment call and keeps portions consistent across shifts and cooks." },
  { title: "Recheck after any staff turnover in the kitchen", desc: "A new cook learning a dish by watching a coworker, rather than from the written spec, is one of the most common moments portion sizes quietly shift." },
  { title: "Track actual vs. theoretical food cost monthly", desc: "A widening gap between what your recipes say food cost should be and what your P&L actually shows is often portion drift showing up in the numbers before anyone catches it by eye." },
];

export default function PortionControlFoodCostPage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Portion Control</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Portion Control: The Cheapest Way to Fix Food Cost
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Renegotiating with suppliers takes weeks and goodwill. Redesigning a menu takes a season.
            Catching portion drift takes an afternoon with a scale — and it's often worth more to your
            margin than either of the bigger projects.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Portion drift happens when actual serving sizes creep above the recipe spec over time,
            without anyone deciding to change them. A protein portion drifting from 6oz to 7oz — easy
            to miss by eye — raises that dish's food cost by roughly 17%. Spot-checking plated portions
            during real service, not a staged test, is the fastest way to catch it.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why this is the cheapest fix available</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every other lever for improving food cost costs something: repricing risks guest pushback,
            renegotiating with suppliers takes time and relationship capital, and menu re-engineering is
            a real project. Portion control costs a scale you already own and an afternoon of attention.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It's also the lever most likely to be silently broken right now. Drift happens gradually —
            nobody decides to serve a bigger portion, it just creeps upward through staff turnover,
            muscle memory, and the natural human tendency toward generosity when eyeballing a scoop.
            That gradualness is exactly why it goes unnoticed for months at a time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Five checks that catch it</h2>
          <div className="space-y-3">
            {CHECKS.map((c, i) => (
              <div key={i} className="border-l-4 border-orange-300 pl-4 py-1">
                <p className="font-bold text-gray-800 text-sm">{c.title}</p>
                <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">A worked example</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            A burger recipe specs a 6oz patty at $1.80 in ingredient cost. Over eight months, without
            any decision to change it, the actual grilled patty weight drifts to 7oz — a common,
            easy-to-miss creep as cooks portion by feel rather than a scale.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That extra ounce raises the patty cost to roughly $2.10, a 17% increase on that single
            ingredient. Sold 60 times a day, that's about $18 a day, or over $500 a month, in cost that
            never shows up as a supplier price increase or a decision anyone made — just a slow drift
            that a five-minute spot-check would have caught in week one.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">See the impact of a portion change instantly</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer recalculates a dish's cost and price the moment you update a portion size, so
            you can see exactly what a half-ounce of drift is worth before it becomes a habit.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price My Menu Free →
          </Link>
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

        <section className="border-t border-gray-100 pt-8 mt-8">
          <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/portion-cost-calculator", title: "Portion Cost Calculator", desc: "Turn a batch cost into cost per serving instantly." },
              { href: "/blog/menu-pricing-mistakes", title: "12 Menu Pricing Mistakes", desc: "Portion drift is mistake #9 on this list." },
              { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "The full costing process, including yield adjustment." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "How to spot the gap between theoretical and actual food cost." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all">
                <p className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{post.title}</p>
                <p className="text-xs text-gray-500 mt-1">{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500">AI Pricing Tool</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

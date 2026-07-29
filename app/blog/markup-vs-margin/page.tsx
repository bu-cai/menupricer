import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Markup vs Margin: The Mistake That Costs Restaurants Thousands",
  description: "Markup and margin are calculated from different bases and give very different numbers for the same dish. Confusing the two is one of the most expensive pricing mistakes a restaurant can make.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/markup-vs-margin" },
  openGraph: {
    title: "Markup vs Margin: The Mistake That Costs Restaurants Thousands",
    description: "Why a '300% markup' and a '300% margin' are not the same thing, and how confusing them silently underprices your menu.",
    url: "https://www.aimenupricer.com/blog/markup-vs-margin",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Markup vs Margin: The Mistake That Costs Restaurants Thousands",
  description: "Markup is calculated on cost; margin is calculated on price. The two numbers diverge fast, and treating them as interchangeable is one of the most common and expensive pricing mistakes in the industry.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/markup-vs-margin",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Markup vs Margin", item: "https://www.aimenupricer.com/blog/markup-vs-margin" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the difference between markup and margin?", acceptedAnswer: { "@type": "Answer", text: "Markup is calculated as a percentage of cost: (Price minus Cost) divided by Cost. Margin is calculated as a percentage of price: (Price minus Cost) divided by Price. A 100% markup and a 50% margin describe the exact same dish, because the two formulas use different denominators. They are never numerically equal except at very low percentages, and the gap widens as the percentage increases." } },
    { "@type": "Question", name: "Is a 300% markup the same as a 300% margin?", acceptedAnswer: { "@type": "Answer", text: "No, and this is where the expensive mistake happens. A 300% markup on a $4 dish gives a price of $16, which is a 75% margin. But a 300% margin is mathematically impossible — margin can never exceed 100%, since it is calculated against price, not cost. If someone asks for a '300% margin' they almost always mean a 300% markup, and pricing to the literal, impossible request produces a nonsensical number." } },
    { "@type": "Question", name: "Which one should restaurants use for pricing decisions?", acceptedAnswer: { "@type": "Answer", text: "Margin, expressed as food cost percentage, is the more useful number for restaurant decisions because it directly answers 'what share of this dollar goes to ingredients?' — the question that matters for budgeting and profitability. Markup is more useful as a quick mental-math multiplier when setting an initial price. Use markup to set the price, then check the resulting food cost percentage (margin) against your target before finalizing it." } },
    { "@type": "Question", name: "How do I convert between markup and margin?", acceptedAnswer: { "@type": "Answer", text: "To convert markup to margin: Margin % = Markup % divided by (100% plus Markup %). To convert margin to markup: Markup % = Margin % divided by (100% minus Margin %). For example, a 200% markup converts to a 66.7% margin (200 / 300). A 30% margin (food cost target) converts to a 42.9% markup (30 / 70)." } },
  ],
};

const CONVERSION_TABLE = [
  { markup: "100%", margin: "50%", foodCostPct: "50%" },
  { markup: "150%", margin: "60%", foodCostPct: "40%" },
  { markup: "200%", margin: "66.7%", foodCostPct: "33.3%" },
  { markup: "233%", margin: "70%", foodCostPct: "30%" },
  { markup: "300%", margin: "75%", foodCostPct: "25%" },
  { markup: "400%", margin: "80%", foodCostPct: "20%" },
];

export default function MarkupVsMarginPage() {
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
          <span className="text-gray-600">Markup vs Margin</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">6 min read · July 2026 · Reviewed by the MenuPricer Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Markup vs Margin: The Mistake That Costs Restaurants Thousands
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            "I want a 300% margin on this dish" is a sentence that comes up constantly in restaurant
            pricing conversations, and it is usually mathematically impossible. Markup and margin
            answer different questions using different math, and treating them as interchangeable is
            one of the most common — and most expensive — pricing mistakes in the industry.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Markup is calculated on cost: (Price − Cost) ÷ Cost. Margin is calculated on price:
            (Price − Cost) ÷ Price. A 100% markup is only a 50% margin, not a 100% margin. Margin can
            never exceed 100%; markup can go arbitrarily high. If you are not sure which one someone
            means, ask — the gap between the two numbers gets larger, not smaller, as the percentage rises.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why this confusion is so expensive</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Imagine an owner tells a manager to "price every dish at a 300% margin." The manager,
            trying to be helpful, treats this as a 300% markup instead, because a 300% margin is
            impossible. A $4 dish gets priced at $16 — a 75% margin, a 25% food cost. That is a
            perfectly reasonable price. But if the owner actually meant something closer to a 75%
            margin and the manager had taken "300%" literally and tried to force it, the math would
            have broken down entirely, because margin has a hard ceiling of 100% no matter how high
            the price goes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The more common and quieter version of this mistake: someone quotes a "50% markup" meaning
            a 50% margin (33.3% markup), and the resulting price ends up too low to hit the target
            food cost. Multiply that gap across a full menu and it adds up to real, ongoing lost margin
            — not a one-time error, but a silent tax on every sale of every mispriced dish.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The two formulas, side by side</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Markup</p>
              <p className="font-mono text-sm text-blue-800 mb-2">(Price − Cost) ÷ Cost × 100</p>
              <p className="text-sm text-gray-600">Answers: "How much more than cost am I charging?"</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">Margin (= Gross Profit %)</p>
              <p className="font-mono text-sm text-orange-800 mb-2">(Price − Cost) ÷ Price × 100</p>
              <p className="text-sm text-gray-600">Answers: "What share of the price is profit?"</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Same inputs, different denominator — cost for markup, price for margin. That single
            difference is why the two numbers diverge, and why the divergence gets bigger as the
            percentage climbs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Conversion table</h2>
          <p className="text-gray-600 mb-4">
            Food cost percentage is just 100% minus margin, so this table also doubles as a markup-to-food-cost
            reference — useful when you know the multiplier you want to charge and need the resulting
            food cost percentage to check it against your target.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Markup</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Margin</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Food Cost %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {CONVERSION_TABLE.map((row) => (
                  <tr key={row.markup}>
                    <td className="px-4 py-3 font-mono text-gray-800">{row.markup}</td>
                    <td className="px-4 py-3 font-mono text-gray-800">{row.margin}</td>
                    <td className="px-4 py-3 font-mono text-orange-600 font-bold">{row.foodCostPct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Which one should you actually use?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Use both, at different steps. Markup is the faster mental-math tool for setting an initial
            price — "charge 3x cost" is a quick multiplier anyone on a team can apply consistently.
            Margin, expressed as food cost percentage, is the more useful number afterward for
            checking that price against your target and for comparing dishes to each other, since food
            cost percentage is the number that shows up on your P&amp;L and the one restaurant
            benchmarks are quoted in.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The practical workflow: set a price using a markup multiplier you're comfortable with,
            then calculate the resulting food cost percentage and check it against your target range.
            If it's off, adjust the price — don't try to force a specific markup and a specific margin
            to both land exactly where you want simultaneously, since fixing one determines the other.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Skip the mental math entirely</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer calculates food cost percentage, margin, and the equivalent markup for every
            dish automatically, so you never have to convert between the two by hand.
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
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The exact formula and worked examples for calculating food cost percentage." },
              { href: "/restaurant-markup-calculator", title: "Restaurant Markup Calculator", desc: "Enter cost and markup % to instantly see price, margin, and food cost %." },
              { href: "/prime-cost-calculator", title: "Prime Cost Calculator", desc: "Combine food cost % and labor cost % into one profitability diagnostic." },
              { href: "/blog/how-to-price-a-restaurant-menu", title: "Menu Pricing Guide", desc: "The complete formula for pricing every dish on your menu." },
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

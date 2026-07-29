import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "12 Menu Pricing Mistakes That Kill Independent Restaurants",
  description: "The recurring pricing mistakes that quietly erode restaurant profit — from copying competitor prices to never repricing after a menu change. What to check on your own menu.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-pricing-mistakes" },
  openGraph: {
    title: "12 Menu Pricing Mistakes That Kill Independent Restaurants",
    description: "The pricing mistakes that show up again and again in independent restaurants, and what to check on your own menu this week.",
    url: "https://www.aimenupricer.com/blog/menu-pricing-mistakes",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "12 Menu Pricing Mistakes That Kill Independent Restaurants",
  description: "The recurring pricing mistakes that quietly erode restaurant profit, from copying competitor prices without checking their cost structure to never repricing after a supplier increase.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/menu-pricing-mistakes",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Menu Pricing Mistakes", item: "https://www.aimenupricer.com/blog/menu-pricing-mistakes" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the most common menu pricing mistake?", acceptedAnswer: { "@type": "Answer", text: "Copying competitor prices without knowing their cost structure. A competitor with a larger kitchen, better supplier rates, or a different rent situation can profitably charge a price that would lose you money. Competitor prices are a reference point for what the market will bear, not a substitute for costing your own dish." } },
    { "@type": "Question", name: "How often do restaurants actually reprice their menus?", acceptedAnswer: { "@type": "Answer", text: "Far less often than ingredient costs actually move. Many independent restaurants set prices once at opening or at an annual menu redesign and leave them untouched in between, even as supplier costs shift throughout the year. This gap between how often costs change and how often prices are reviewed is one of the most common sources of margin erosion." } },
    { "@type": "Question", name: "Should every dish on the menu hit the same food cost percentage?", acceptedAnswer: { "@type": "Answer", text: "No, and trying to force this is itself a common mistake. What matters is your blended food cost across your actual sales mix. A signature dish can run a higher food cost if it drives traffic, as long as other items compensate. Manage the average, not each dish in isolation." } },
  ],
};

const MISTAKES = [
  { n: "01", title: "Copying competitor prices without their cost structure", body: "A competitor's price reflects their rent, supplier rates, and kitchen efficiency — not yours. Matching their price without knowing your own ingredient cost for the same dish is pricing blind.", tag: "Strategy" },
  { n: "02", title: "Pricing from gut feel instead of a costed recipe", body: "\"That feels about right\" is not a pricing method. Every dish needs an actual ingredient cost calculation before a price goes on the menu, even a rough one." },
  { n: "03", title: "Never repricing after a supplier cost increase", body: "Ingredient costs move throughout the year, but menu prices set at opening or at an annual redesign often don't move with them. The gap between how often costs change and how often prices are reviewed is where margin quietly leaks out." },
  { n: "04", title: "Costing at purchase weight instead of yield weight", body: "Proteins lose weight to trimming and cooking. Costing against the raw purchase weight rather than the usable, servable yield understates true cost on nearly every protein-based dish." },
  { n: "05", title: "Treating markup and margin as interchangeable", body: "A 300% markup and a 300% margin are not the same number — margin can never exceed 100%. Confusing the two produces prices that don't hit the food cost target you actually intended." },
  { n: "06", title: "Forgetting small ingredients in the cost calculation", body: "Oils, garnish, condiments, and sauces feel too minor to bother costing individually. Together they commonly add $0.30-0.60 per dish, enough to shift food cost 2-3 points on a lower-priced item." },
  { n: "07", title: "Pricing every dish at the same food cost percentage", body: "Forcing every item to the same target ignores that some dishes should run higher (signature items that draw traffic) and some lower (high-volume sides). Manage the blended average across your sales mix instead." },
  { n: "08", title: "Not adjusting delivery prices for platform commission", body: "Marking up a dine-in price by the commission percentage doesn't work, because commission is charged on the marked-up price too. Work backwards from the payout you need instead." },
  { n: "09", title: "Ignoring portion drift over time", body: "A slightly heavier scoop or a bigger pour that creeps in gradually, without anyone deciding to change it, is one of the most common invisible sources of rising food cost. No single instance looks significant." },
  { n: "10", title: "Raising all prices by the same percentage across the board", body: "A blanket increase annoys guests on items that were already profitable, while leaving genuinely underpriced dishes still underpriced. Reprice the specific items that need it instead." },
  { n: "11", title: "Not costing bundled sides and add-ons", body: "A combo or plate that includes a 'free' side still has a real ingredient cost for that side, and it needs to be part of the total plate cost calculation, not treated as included at no cost." },
  { n: "12", title: "Building a costing system that only works when someone remembers to update it", body: "A spreadsheet is not hard to build. Keeping it current when a supplier price changes is the part that actually fails, usually during the exact busy weeks when nobody has time to open thirty tabs and retype numbers." },
];

export default function MenuPricingMistakesPage() {
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
          <span className="text-gray-600">Menu Pricing Mistakes</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            12 Menu Pricing Mistakes That Kill Independent Restaurants
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            None of these mistakes look dramatic in isolation. Each one quietly shaves a point or two
            off margin, and they compound across a full menu and a full year. Here are the twelve that
            show up most often in independent restaurants — check your own menu against each one.
          </p>
        </div>

        <div className="space-y-5 mb-12">
          {MISTAKES.map((m) => (
            <div key={m.n} className="border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-gray-200 shrink-0 leading-none mt-0.5">{m.n}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-black text-gray-900 text-base mb-2">{m.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Fix all twelve at once</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer costs every dish from its name, recalculates when ingredient prices change, and
            flags dishes running above your target food cost — so most of this list stops being a
            manual thing to remember.
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
              { href: "/blog/markup-vs-margin", title: "Markup vs Margin", desc: "The mistake behind mistake #5 — explained in full." },
              { href: "/blog/how-often-to-reprice-menu", title: "How Often Should You Reprice?", desc: "A concrete schedule instead of 'whenever we remember.'" },
              { href: "/blog/portion-control-food-cost", title: "Portion Control", desc: "The cheapest fix for mistake #9, portion drift." },
              { href: "/blog/how-to-price-a-restaurant-menu", title: "Menu Pricing Guide", desc: "The complete formula for pricing every dish." },
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

import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Price a Menu Before You Open (No Sales History)",
  description: "Pricing a menu before opening day means no sales data, no actual vs. theoretical food cost to check against, and no idea which dishes will actually sell. Here's how to price with confidence anyway.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-price-a-menu-before-opening" },
  openGraph: {
    title: "How to Price a Menu Before You Open (No Sales History)",
    description: "A pre-opening pricing process for a menu with zero sales history to lean on.",
    url: "https://www.aimenupricer.com/blog/how-to-price-a-menu-before-opening",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How to Price a Menu Before You Open (No Sales History)",
  description: "A step-by-step process for pricing a restaurant menu before opening day, when there is no sales history, no actual vs. theoretical food cost comparison, and no data on which dishes will sell.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-price-a-menu-before-opening",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Pricing a Menu Before Opening", item: "https://www.aimenupricer.com/blog/how-to-price-a-menu-before-opening" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do you price a menu with no sales history?", acceptedAnswer: { "@type": "Answer", text: "Cost every dish from its recipe using supplier quotes gathered before opening, price to a target food cost percentage benchmarked against your specific concept type, then check those prices against comparable local competitors. Without sales data you can't verify actual food cost yet, so build in a deliberate 60-90 day review to correct anything once real numbers arrive." } },
    { "@type": "Question", name: "Should pre-opening prices be conservative or aggressive?", acceptedAnswer: { "@type": "Answer", text: "Lean toward the higher end of your target food cost range rather than the lower end, since pre-opening cost estimates are usually optimistic — actual portioning, waste, and supplier prices during a chaotic opening period commonly run higher than the calm test-kitchen numbers used to build the menu." } },
    { "@type": "Question", name: "How soon after opening should prices be reviewed?", acceptedAnswer: { "@type": "Answer", text: "Within 60-90 days, once there is enough real sales and inventory data to calculate actual food cost per dish and compare it to the theoretical numbers used at launch. Waiting longer risks locking in underpriced items for a full season before anyone notices the gap." } },
  ],
};

const STEPS = [
  { n: "1", title: "Cost every dish from the recipe, using real supplier quotes", desc: "Get actual pricing from the suppliers you intend to use, not generic online estimates. A quote-based cost is far more reliable than a number pulled from a recipe blog or a competitor's menu." },
  { n: "2", title: "Price to a target food cost benchmarked to your specific concept", desc: "Fine dining, fast casual, and food truck concepts all carry different healthy food cost ranges. Use the benchmark for your actual concept type, not a generic restaurant-wide average." },
  { n: "3", title: "Check prices against comparable local competitors", desc: "Once you have a cost-based price, sanity-check it against what similar concepts nearby charge for comparable dishes. This isn't your primary pricing method, but it catches prices that are wildly out of step with local market expectations." },
  { n: "4", title: "Build in a margin of safety on your estimates", desc: "Pre-opening cost calculations tend to be optimistic — a calm test kitchen doesn't reflect the waste, over-portioning, and chaos of an actual opening week. Price toward the higher end of your target range rather than the lower end." },
  { n: "5", title: "Schedule a 60-90 day pricing review before you open", desc: "Put a specific date on the calendar now, not as an afterthought. Once real sales and inventory data exist, compare actual food cost to the theoretical numbers you launched with and correct anything that's off." },
];

export default function HowToPriceMenuBeforeOpeningPage() {
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
          <span className="text-gray-600">Pricing a Menu Before Opening</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            How to Price a Menu Before You Open (No Sales History)
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Every pricing method that relies on actual vs. theoretical food cost, sales mix, or
            customer behavior assumes you have data to check against. Before opening day, you have
            none of that. Here's how to price with confidence anyway.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Cost every dish using real supplier quotes, price to a target food cost benchmarked to
            your specific concept, sanity-check against local competitors, and price toward the higher
            end of your target range since pre-opening estimates tend to be optimistic. Then schedule
            a firm 60-90 day review once actual sales data exists to correct anything that's off.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">The process</h2>
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-sm">{s.n}</span>
                <div>
                  <p className="font-black text-gray-900 text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why the 60-90 day review matters more than getting it perfect on day one</h2>
          <p className="text-gray-600 leading-relaxed">
            No pre-opening price is going to be exactly right — there's no way to know which dishes
            will sell in what volume, how portioning will drift once a real kitchen team is working
            under pressure, or how actual waste compares to a calm test-kitchen estimate. The goal
            isn't a perfect launch menu. It's a reasonable starting point plus a firm commitment to
            revisit it with real data before three months pass, since that's the window where an
            underpriced dish can quietly cost the most before anyone notices.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Price your opening menu without a spreadsheet</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer drafts an ingredient breakdown from just a dish name, so you can price a full
            opening menu before you've built a single recipe card.
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
              { href: "/blog/cost-to-open-a-restaurant", title: "Cost to Open a Restaurant", desc: "The full startup cost breakdown this pricing plan fits into." },
              { href: "/blog/recipe-costing-without-recipes", title: "Costing Without Written Recipes", desc: "How to cost dishes when there's no recipe history at all yet." },
              { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost Benchmarks by Type", desc: "The target ranges to price against for your specific concept." },
              { href: "/blog/how-often-to-reprice-menu", title: "How Often to Reprice", desc: "What the 60-90 day review turns into as an ongoing habit." },
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

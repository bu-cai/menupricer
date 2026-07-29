import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Supplier Price Increases: Negotiate or Reprice?",
  description: "When a supplier raises prices, restaurants have three real options: absorb it, negotiate, or reprice the menu. How to decide which one, dish by dish, instead of defaulting to the same response every time.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/supplier-price-increases" },
  openGraph: {
    title: "Supplier Price Increases: Negotiate or Reprice?",
    description: "A decision framework for responding to a supplier price increase — when to negotiate, when to reprice, and when to substitute instead.",
    url: "https://www.aimenupricer.com/blog/supplier-price-increases",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Supplier Price Increases: Negotiate or Reprice?",
  description: "A decision framework for responding to a supplier price increase, based on whether the increase is industry-wide or supplier-specific, and how much of your menu the ingredient actually touches.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/supplier-price-increases",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Supplier Price Increases", item: "https://www.aimenupricer.com/blog/supplier-price-increases" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should I always negotiate with a supplier before repricing my menu?", acceptedAnswer: { "@type": "Answer", text: "Negotiate first when the increase looks supplier-specific rather than industry-wide — check a second supplier's current price on the same item. If competitors are also seeing the same increase, it's a market-wide shift and negotiation has limited room; reprice instead. If only your supplier raised prices, you have real leverage to push back or switch." } },
    { "@type": "Question", name: "How much of a supplier increase should get passed on to the menu price?", acceptedAnswer: { "@type": "Answer", text: "Enough to restore your target food cost percentage on that specific dish, not necessarily the full dollar increase. A 15% ingredient cost increase on a component that's 30% of the dish's total cost only needs a price adjustment covering that 30% share, not 15% of the entire menu price." } },
    { "@type": "Question", name: "When does it make sense to substitute an ingredient instead of repricing?", acceptedAnswer: { "@type": "Answer", text: "When the increase is on a single component that can be swapped without changing the dish's identity — a different fish species, a different cut of the same protein, a seasonal produce swap. Substitution works best when guests are unlikely to notice or mind the change; it works poorly on signature ingredients that define the dish." } },
  ],
};

const DECISION_TREE = [
  { q: "Is the increase industry-wide or just this supplier?", a: "Check a second supplier's current price on the same item. Industry-wide → limited negotiation room, lean toward repricing. Supplier-specific → real leverage to negotiate or switch." },
  { q: "How much of the dish's total cost does this ingredient represent?", a: "A 20% increase on an ingredient that's 10% of the dish cost barely moves the total. The same 20% increase on the dominant ingredient (protein in a protein-forward dish) moves it significantly — prioritize repricing there first." },
  { q: "Can the ingredient be substituted without changing the dish's identity?", a: "A seasonal produce swap or a different cut of the same protein can absorb an increase without a price change or a guest-facing announcement. A defining, named ingredient usually can't be swapped without the dish becoming a different dish." },
  { q: "Is this increase likely temporary or structural?", a: "A weather-driven produce spike often reverses in weeks — absorbing it briefly may cost less than the friction of repricing twice. A structural cost shift (new tariff, permanent supply change) won't reverse, and repricing sooner avoids months of reduced margin." },
];

export default function SupplierPriceIncreasesPage() {
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
          <span className="text-gray-600">Supplier Price Increases</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Supplier Price Increases: Negotiate or Reprice?
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            An invoice arrives with a higher price on it, and the default reaction is usually one of
            two extremes: absorb it and hope it's temporary, or reprice the whole menu in frustration.
            Neither is right most of the time. Here's a framework for deciding, ingredient by ingredient.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Check whether the increase is industry-wide or specific to your supplier — that determines
            how much negotiating room actually exists. Then check how much of the affected dish's total
            cost that ingredient represents, since a small-share ingredient barely needs a price
            response while a dominant one does. Substitute where the dish's identity allows it;
            reprice where it doesn't.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">The decision framework</h2>
          <div className="space-y-4">
            {DECISION_TREE.map((d, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{d.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">A worked example</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Your cheese supplier raises mozzarella price 18%. Cheese represents about 35% of a pizza's
            total ingredient cost. The math: 18% increase on 35% of cost is roughly a 6.3% increase on
            the dish's total cost — not the full 18% that the invoice line item suggests.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A quick check with another cheese distributor shows the same increase industry-wide, so
            negotiation room is limited. The fix: a price adjustment covering that 6.3% cost increase on
            pizza specifically, not an across-the-board menu increase, and not a full pass-through of
            the 18% figure that only applies to the cheese line item in isolation.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">See the real dish-level impact instantly</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer recalculates every dish that uses an ingredient the moment you update its price,
            so you see the actual dish-level cost impact instead of estimating it by hand.
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
              { href: "/blog/how-often-to-reprice-menu", title: "How Often to Reprice", desc: "The schedule this triggers into, once you've decided to reprice." },
              { href: "/blog/restaurant-seasonality", title: "Restaurant Seasonality", desc: "How to handle temporary, weather-driven cost swings specifically." },
              { href: "/blog/menu-pricing-mistakes", title: "12 Menu Pricing Mistakes", desc: "Never repricing after an increase is mistake #3." },
              { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "The guest-facing playbook once you've decided a price needs to move." },
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

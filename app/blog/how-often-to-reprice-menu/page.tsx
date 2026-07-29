import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How Often Should You Reprice Your Menu?",
  description: "A concrete schedule for reviewing and adjusting restaurant menu prices — what to check weekly, monthly, and at each menu change, instead of repricing only when it feels overdue.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-often-to-reprice-menu" },
  openGraph: {
    title: "How Often Should You Reprice Your Menu?",
    description: "A weekly, monthly, and trigger-based schedule for reviewing restaurant menu prices before costs quietly erode margin.",
    url: "https://www.aimenupricer.com/blog/how-often-to-reprice-menu",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How Often Should You Reprice Your Menu?",
  description: "A concrete review schedule for restaurant menu pricing — weekly checks, monthly deep reviews, and the specific triggers that should force an immediate reprice regardless of calendar.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-often-to-reprice-menu",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How Often to Reprice", item: "https://www.aimenupricer.com/blog/how-often-to-reprice-menu" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How often should a restaurant reprice its menu?", acceptedAnswer: { "@type": "Answer", text: "Review food cost weekly, do a deeper cost audit monthly, and reprice specific dishes whenever a key ingredient moves 10% or more, whenever overall food cost drifts 2-3 points above target, or at any menu change. This is different from a full menu redesign, which most restaurants do once or twice a year — pricing adjustments should happen far more often than the visual menu itself changes." } },
    { "@type": "Question", name: "Is it better to reprice the whole menu at once or individual dishes?", acceptedAnswer: { "@type": "Answer", text: "Individual dishes, in almost all cases. A blanket across-the-board increase annoys guests on items that were already profitable, while dishes that are genuinely underpriced may still not be raised enough. Repricing specific items as their costs move is less noticeable to guests and more accurate." } },
    { "@type": "Question", name: "What triggers should force an immediate price check?", acceptedAnswer: { "@type": "Answer", text: "A supplier price change of 10% or more on a key ingredient, a new menu item added, a change in portion size or recipe, and a monthly food cost percentage that has drifted 2-3 points above target are the four clearest triggers. Waiting for an annual review to catch these means months of reduced margin before the fix happens." } },
  ],
};

const SCHEDULE = [
  { freq: "Weekly", tasks: ["Check actual vs. theoretical food cost from your POS and inventory", "Scan for any supplier invoice price changes on top ingredients by spend"] },
  { freq: "Monthly", tasks: ["Run full food cost percentage by dish, not just the overall average", "Compare against your target range and flag anything more than 2-3 points over", "Review sales mix — are high-margin items still selling at expected volume?"] },
  { freq: "At every menu change", tasks: ["Cost the new dish before it goes on the menu, not after", "Re-check any dish whose recipe or portion changed"] },
  { freq: "Trigger-based (any time)", tasks: ["A key ingredient moves 10%+ in price", "A supplier changes or a contract renews at a different rate", "You open a new location with different rent or labor costs"] },
];

export default function HowOftenToRepriceMenuPage() {
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
          <span className="text-gray-600">How Often to Reprice</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            How Often Should You Reprice Your Menu?
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            "Whenever it feels overdue" is not a schedule — it's how a menu quietly drifts 5-8 points
            below its intended food cost over a year. Here is a concrete review cadence, separate from
            your annual menu redesign, that catches cost drift before it compounds.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Review food cost weekly, do a full audit monthly, and reprice specific dishes whenever a
            key ingredient moves 10% or more, your overall food cost drifts 2-3 points above target, or
            you change a menu item. This is a pricing review cadence, not a full menu redesign — most
            restaurants only redesign the physical menu once or twice a year, but prices should move
            more often than that.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">The schedule</h2>
          <div className="space-y-4">
            {SCHEDULE.map((s) => (
              <div key={s.freq} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 mb-3">{s.freq}</p>
                <ul className="space-y-1.5">
                  {s.tasks.map((t, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-orange-400 shrink-0">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why annual repricing alone fails</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Ingredient costs don't move on a yearly schedule — proteins, produce, and dairy all shift
            within weeks based on supply conditions. A menu priced once at the annual redesign and left
            alone in between will spend most of the year slightly mispriced in one direction or the
            other, and the gap compounds every time a dish sells.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The fix isn't repricing more dramatically once a year — it's checking more frequently in
            smaller increments. A restaurant that adjusts two or three dishes a month, as their specific
            costs move, ends the year closer to target than one that leaves everything untouched for
            eleven months and then makes one large correction.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Get notified when a dish needs repricing</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer saves your recipes and recalculates automatically when you update an ingredient
            price, so the weekly and monthly review becomes a five-minute check instead of a spreadsheet project.
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
              { href: "/blog/menu-pricing-mistakes", title: "12 Menu Pricing Mistakes", desc: "Never repricing after a cost increase is mistake #3 on this list." },
              { href: "/blog/supplier-price-increases", title: "Supplier Price Increases", desc: "What to do when the trigger actually happens." },
              { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "The playbook for the actual increase, once you've decided to make it." },
              { href: "/blog/restaurant-seasonality", title: "Restaurant Seasonality", desc: "How seasonal cost swings fit into a repricing schedule." },
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

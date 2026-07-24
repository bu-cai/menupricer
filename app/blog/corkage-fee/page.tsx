import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "What Is a Corkage Fee? How Much to Charge & When to Waive It",
  description: "What is a corkage fee at a restaurant? Definition, typical corkage fee amounts, how to set your corkage policy, and when to waive it for the best customer experience.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/corkage-fee" },
  openGraph: {
    title: "What Is a Corkage Fee? How Much to Charge & When to Waive It",
    description: "Corkage fee definition — what restaurants charge when guests bring their own wine, typical fee ranges, and how to set a fair policy.",
    url: "https://www.aimenupricer.com/blog/corkage-fee",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "What Is a Corkage Fee? How Much to Charge & When to Waive It",
  description: "The definition of a corkage fee, typical amounts charged at restaurants, how to set a corkage policy, and when to waive the fee to maintain goodwill.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/corkage-fee",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "What Is a Corkage Fee?", item: "https://www.aimenupricer.com/blog/corkage-fee" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a corkage fee?", acceptedAnswer: { "@type": "Answer", text: "A corkage fee (also called a corking fee or BYO fee) is a charge that a restaurant applies when a guest brings their own bottle of wine or other alcohol to the restaurant. The fee compensates the restaurant for the service of opening and pouring the wine, providing glassware, and — more importantly — for the lost revenue that would have come from selling a bottle from the restaurant's own wine list. Corkage fees typically range from $15 to $75 per bottle depending on the restaurant's tier and wine program." } },
    { "@type": "Question", name: "How much is a typical corkage fee?", acceptedAnswer: { "@type": "Answer", text: "Corkage fees vary significantly by restaurant tier. Casual restaurants that allow BYOB typically charge $10–25 per bottle. Mid-range restaurants with a wine program charge $25–50. Fine dining restaurants charge $50–100 or more, and some ban BYOB entirely to protect their wine revenue. In major cities like New York and San Francisco, $35–75 is the most common range at full-service restaurants. The fee is meant to make it economically neutral for the restaurant whether you drink from their wine list or bring your own." } },
    { "@type": "Question", name: "Is a corkage fee per bottle or per person?", acceptedAnswer: { "@type": "Answer", text: "Corkage fees are almost always charged per bottle, not per person. If a party of four brings two bottles of wine, they typically pay two corkage fees. Some restaurants set a limit of one or two bottles per table to prevent guests from bringing their entire wine cellar and ordering nothing from the list." } },
    { "@type": "Question", name: "When should a restaurant waive the corkage fee?", acceptedAnswer: { "@type": "Answer", text: "Restaurants commonly waive the corkage fee when: the guest purchases a bottle from the wine list in addition to bringing their own (the purchased bottle offsets the lost revenue), the bottle is a rare or special wine the restaurant cannot source (a 20-year-old bottle from the guest's cellar), the occasion is a special celebration where waiving is a goodwill gesture, or the guest is a loyal regular whose relationship you value more than the fee. Many restaurants also offer one waived corkage per table as a policy to encourage the practice without fully giving up the revenue protection." } },
    { "@type": "Question", name: "What is the difference between a corkage fee and a corking fee?", acceptedAnswer: { "@type": "Answer", text: "Corkage fee and corking fee are the same thing — just different names for the same charge. Both terms refer to the fee a restaurant charges when guests bring their own bottle of wine or spirits. Corkage is the more common term in the United States, while corking is used in some other English-speaking countries. You may also see it called a BYO fee or bring-your-own-bottle (BYOB) fee." } },
  ],
};

const CORKAGE_TIERS = [
  { tier: "Casual dining / pizza / bistro", range: "$10–25", notes: "Often a flat fee, sometimes waived for regulars" },
  { tier: "Mid-range full-service restaurant", range: "$25–45", notes: "Most common bracket in mid-size US cities" },
  { tier: "Upscale dining / wine-focused", range: "$45–75", notes: "Protects a serious wine program's revenue" },
  { tier: "Fine dining / destination restaurant", range: "$75–150", notes: "Some simply prohibit BYOB to preserve list integrity" },
  { tier: "No-license / BYOB only restaurant", range: "$0–15", notes: "No wine license — corkage is for service only" },
];

export default function CorkageFeePage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Menu Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">What Is a Corkage Fee?</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">What Is a Corkage Fee? How Much to Charge & When to Waive It</h1>
          <p className="text-lg text-gray-500 leading-relaxed">A corkage fee is what your restaurant charges when a guest brings their own bottle of wine. Get the amount wrong in either direction — too high and guests feel nickel-and-dimed, too low and you give away revenue your wine program was built to capture.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Quick answer</p>
          <p className="text-gray-800 font-bold">Corkage fee = the charge for opening and serving a bottle the guest brought themselves</p>
          <p className="text-sm text-gray-500 mt-1">Also called: corking fee, BYOB fee, or bring-your-own-bottle fee. Typical range: $15–75/bottle.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a corkage fee?</h2>
            <p className="text-gray-600 leading-relaxed">A corkage fee is a charge applied by a restaurant when a guest brings their own bottle of wine or other alcohol to drink with their meal. The name comes from the act of opening (or &ldquo;uncorking&rdquo;) a bottle — although the fee covers more than just popping a cork.</p>
            <p className="text-gray-600 leading-relaxed mt-3">The fee compensates the restaurant for:</p>
            <ul className="space-y-2 mt-2">
              {[
                "Providing glassware, often premium stemware that represents a real cost",
                "The service of opening, aerating, and pouring the wine professionally",
                "Lost revenue from wine list sales — the main economic driver of the fee",
                "The labor of a sommelier or server who would otherwise be selling from the list",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-orange-500 mt-0.5">•</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">From the restaurant&apos;s perspective, wine is one of the highest-margin revenue streams in the business. A bottle that costs the restaurant $20 sells for $70–90. When a guest brings their own bottle, the restaurant loses that margin. The corkage fee is designed to make the economic outcome roughly neutral — or at least soften the revenue miss.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Corkage fee by restaurant type</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Restaurant type</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Typical fee</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr></thead>
                <tbody>
                  {CORKAGE_TIERS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.tier}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600 whitespace-nowrap">{row.range}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to set your corkage fee</h2>
            <p className="text-gray-600 leading-relaxed mb-4">The right corkage fee is the amount that makes bringing a bottle economically equivalent — for the restaurant — to ordering a comparable bottle from the wine list. A rough framework:</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm mb-4">
              <p className="font-bold text-gray-800 mb-3">Corkage fee calculation framework</p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2"><span className="w-5 font-bold text-orange-500">1.</span><span>Average gross profit on a bottle sold from your wine list (menu price − cost)</span></div>
                <div className="flex items-center gap-2"><span className="w-5 font-bold text-orange-500">2.</span><span>Subtract: glassware cost per service ($2–5), labor for opening and pouring ($3–8)</span></div>
                <div className="flex items-center gap-2"><span className="w-5 font-bold text-orange-500">3.</span><span>The result is approximately what you should charge as a corkage fee</span></div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-xl text-gray-600">
                <p className="font-bold text-gray-800 mb-1">Example:</p>
                <p>Average bottle on your list: costs $22, sells for $75 → gross profit $53</p>
                <p>Minus glassware ($4) + labor ($6) = $43</p>
                <p className="font-bold text-orange-600 mt-1">Suggested corkage fee: $40–45</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">In practice, most restaurants round to a clean number and consider competitive norms in their market. If every comparable restaurant in your area charges $35, charging $45 may feel punitive to guests even if it is economically justified.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">When to waive the corkage fee</h2>
            <div className="space-y-3">
              {[
                { t: "Guest purchases a bottle from the list", b: "This is the most common waiver policy. If the guest buys a bottle from your wine list, waive the corkage on their brought bottle. They more than compensated you with the list purchase, and they leave feeling treated well." },
                { t: "The bottle is genuinely special or irreplaceable", b: "A guest who brings a 25-year-old bottle from a producer you cannot source is not competition to your wine list — it is a complement. A sommelier who recognizes this and waives the fee earns loyalty." },
                { t: "Special occasions and important regulars", b: "For a couple celebrating a 30th anniversary with a bottle from their cellar, the corkage fee is a revenue-negative transaction. The goodwill from waiving it — and the story they tell — is worth far more than $45." },
                { t: "One bottle per table as a standing policy", b: "Some restaurants offer one waived corkage per table as their standard policy. This prevents abuse (a table arriving with 6 bottles), while remaining guest-friendly for the typical BYOB situation." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Corkage fee etiquette — for restaurants and guests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-black text-blue-800 mb-3">For restaurant operators</p>
                <div className="space-y-2 text-blue-700">
                  {[
                    "Post your corkage policy publicly — on your menu and website",
                    "Train staff to explain the fee graciously, not defensively",
                    "Never charge corkage without informing the guest first",
                    "Consider a per-bottle limit (1–2 bottles) for BYOB tables",
                  ].map(tip => <p key={tip} className="text-sm">• {tip}</p>)}
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="font-black text-orange-800 mb-3">What guests should know</p>
                <div className="space-y-2 text-orange-700">
                  {[
                    "Always call ahead to confirm BYOB is permitted",
                    "Corkage fees are standard — they are not a surprise tactic",
                    "Tipping on the corkage fee is appreciated (sommeliers earn gratuity on wine service)",
                    "Bringing a bottle from the restaurant's list era is a nice gesture",
                  ].map(tip => <p key={tip} className="text-sm">• {tip}</p>)}
                </div>
              </div>
            </div>
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

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price every item on your menu for profit</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer helps you set the right price for every dish and beverage — food cost calculation, AI pricing suggestions, and margin analysis in one tool.</p>
            <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Try MenuPricer Free →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete pricing guide for every dish." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Average margins and how to improve yours." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Calculate your food cost % for any dish." },
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Redesign your menu to maximize profit per cover." },
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
            <Link href="/" className="hover:text-orange-500">AI Menu Pricing</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
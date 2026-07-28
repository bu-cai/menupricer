import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const LAST_UPDATED = "July 28, 2026";
const PRICING_CHECKED = "July 2026";

export const metadata: Metadata = {
  title: "MarketMan Alternatives: 6 Options for Smaller Restaurants (2026)",
  description:
    "MarketMan starts around $199/month plus setup and takes weeks to implement. Six alternatives compared by price, setup time, and what each is actually built for.",
  alternates: { canonical: "https://www.aimenupricer.com/alternatives/marketman-alternatives" },
  openGraph: {
    title: "MarketMan Alternatives: 6 Options for Smaller Restaurants (2026)",
    description:
      "Honest comparison of MarketMan alternatives by price, setup time, and fit — including when MarketMan is still the right choice.",
    url: "https://www.aimenupricer.com/alternatives/marketman-alternatives",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MarketMan Alternatives",
  description:
    "Comparison of alternatives to MarketMan restaurant inventory and recipe costing software, covering price, implementation time, and intended operation size.",
  url: "https://www.aimenupricer.com/alternatives/marketman-alternatives",
  dateModified: "2026-07-28",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://www.aimenupricer.com/alternatives" },
    {
      "@type": "ListItem",
      position: 3,
      name: "MarketMan Alternatives",
      item: "https://www.aimenupricer.com/alternatives/marketman-alternatives",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do restaurants look for MarketMan alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The three reasons that come up most often in published reviews are cost, implementation time, and scope. Entry pricing has been reported around $199 per month plus a setup fee, which is difficult to justify for smaller independents. Realistic implementations are commonly described as taking six to twelve weeks, most of it spent entering recipes and ingredients. And many operators discover they wanted menu pricing help rather than full purchasing and inventory automation, which is what MarketMan is primarily built for.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a cheaper alternative to MarketMan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the cheaper options are usually narrower rather than equivalent. Tools focused only on recipe costing and menu pricing cost considerably less because they do not handle purchase orders, vendor management, or stock counts. If you need full inventory automation, the realistic alternatives are other enterprise platforms at similar price points. If you mainly need to know what to charge, a pricing-focused tool covers that for a fraction of the cost.",
      },
    },
    {
      "@type": "Question",
      name: "When is MarketMan still the right choice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MarketMan is a strong fit when purchasing is your actual bottleneck: multiple locations, several vendors, par-level-driven ordering, and someone on staff whose job includes inventory. It holds a high satisfaction rating on review sites for good reason. The mismatch happens when a single-location independent buys it hoping to solve menu pricing, then finds themselves managing a purchasing platform they did not need.",
      },
    },
    {
      "@type": "Question",
      name: "What should I check before switching away from MarketMan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check your contract's cancellation terms first, since reviews have described a notice period rather than immediate cancellation. Export your recipe and ingredient data before you cancel anything, because that data represents the weeks of entry work you already paid for and is the most expensive thing to rebuild. Then confirm the replacement genuinely covers the functions you actually use, not the ones you signed up for.",
      },
    },
  ],
};

const ALTERNATIVES = [
  {
    name: "MenuPricer",
    tag: "Pricing only",
    tagColor: "bg-orange-100 text-orange-700",
    price: "$9/mo (free tier available)",
    setup: "Minutes",
    bestFor: "Independents who need to know what to charge, not what to order",
    strength:
      "Drafts an ingredient breakdown from the dish name, so there is no recipe-import project before you get a number. Saved dishes recalculate when you change an ingredient price.",
    limitation:
      "No purchasing, no stock counts, no vendor management, no POS integration. If inventory control is the actual problem, this is not the tool.",
    isUs: true,
  },
  {
    name: "MarginEdge",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Reported from ~$330/mo",
    setup: "Weeks",
    bestFor: "Operators who want invoice processing and a daily P&L",
    strength:
      "Invoice capture with a human review layer checking the extracted data, plus daily profit and loss visibility. Different emphasis from MarketMan: financial visibility rather than purchase automation.",
    limitation:
      "Higher entry price than MarketMan. Same fundamental issue for small operators: you are paying for a finance platform.",
    isUs: false,
  },
  {
    name: "Craftable",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Quote-based",
    setup: "Weeks",
    bestFor: "Operations wanting both back-office and beverage program depth",
    strength:
      "Frequently named as the closest direct substitute for MarketMan, and reviewers have rated its ongoing support favourably in head-to-head comparisons.",
    limitation:
      "Quote-based pricing means you cannot evaluate cost without a sales conversation. Same weight class as MarketMan overall.",
    isUs: false,
  },
  {
    name: "meez",
    tag: "Recipe-first",
    tagColor: "bg-blue-100 text-blue-700",
    price: "Free tier, paid plans above",
    setup: "Days",
    bestFor: "Chef-led kitchens that want recipe management as much as costing",
    strength:
      "Built around recipe development and standardisation rather than purchasing, which suits kitchens whose real problem is consistency across cooks.",
    limitation: "Still expects you to have recipes to put in. Less focused on the pricing decision itself.",
    isUs: false,
  },
  {
    name: "Free web calculators",
    tag: "Free",
    tagColor: "bg-green-100 text-green-700",
    price: "$0",
    setup: "None",
    bestFor: "Costing one dish right now to settle a question",
    strength: "Instant, no signup, genuinely fine for a single calculation.",
    limitation:
      "Almost all are single-shot: nothing saves, so you re-enter everything next time and there is no way to reprice when costs move. Most exist to generate leads for a paid product.",
    isUs: false,
  },
  {
    name: "Spreadsheet",
    tag: "DIY",
    tagColor: "bg-gray-100 text-gray-600",
    price: "$0",
    setup: "Hours to days",
    bestFor: "Operators who want total control and have the discipline to maintain it",
    strength:
      "Infinitely customisable, no vendor risk, and you fully understand every formula because you wrote it.",
    limitation:
      "Maintenance is the failure point, not construction. Supplier prices move and the file does not, so a carefully built sheet quietly goes stale within months.",
    isUs: false,
  },
];

export default function MarketManAlternativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Compare
          </Link>
          <Link
            href="/"
            className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/compare" className="hover:text-gray-600">Compare</Link>
          <span>›</span>
          <span className="text-gray-600">MarketMan Alternatives</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Software Comparison
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          MarketMan Alternatives: 6 Options for Smaller Restaurants
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED}</p>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            The right MarketMan alternative depends on which half of the product you actually need.
            If you need purchasing and inventory automation, the realistic alternatives are other
            enterprise platforms such as MarginEdge or Craftable at comparable cost. If what you
            really wanted was help deciding what to charge, a pricing-focused tool does that for a
            fraction of the price and without a multi-week implementation. Most operators searching
            for alternatives are in the second group.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why operators go looking</h2>
          <p className="text-gray-600 mb-4">
            Three specific frictions come up repeatedly in published reviews and comparisons of
            MarketMan:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                t: "Entry cost",
                d: "Pricing has been reported starting around $199 per month with a setup fee on top. Across a year that is a meaningful line item for a single-location independent.",
              },
              {
                t: "Implementation length",
                d: "Realistic rollouts are commonly described as six to twelve weeks. The software is not the slow part; entering recipes and ingredients is.",
              },
              {
                t: "Scope mismatch",
                d: "It is fundamentally a purchasing and inventory automation platform. Operators who bought it to solve menu pricing end up administering a system built for a different job.",
              },
            ].map((x, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{x.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Worth saying plainly:</strong> none of this
              means MarketMan is a bad product. It holds a high satisfaction score on review sites,
              and for multi-location operators with real purchasing complexity it earns its price.
              The complaints above are mostly about fit, not quality.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">When you should stay with MarketMan</h2>
          <p className="text-gray-600 mb-4">
            Switching costs you the recipe data you already paid weeks to enter. Do not do it if any
            of these describe you:
          </p>
          <ul className="space-y-2">
            {[
              "You run more than one location and need consistent purchasing across them.",
              "You order from several vendors and want par levels to fire purchase orders automatically.",
              "Someone on your team owns inventory as part of their actual job description.",
              "Your food cost problem is shrinkage and over-ordering rather than pricing.",
            ].map((x, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The six alternatives</h2>
          <div className="space-y-5">
            {ALTERNATIVES.map((a) => (
              <div
                key={a.name}
                className={`rounded-xl p-5 border ${
                  a.isUs ? "border-orange-300 bg-orange-50/40" : "border-gray-200"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="font-black text-gray-900 text-lg">{a.name}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.tagColor}`}>{a.tag}</span>
                  {a.isUs && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white uppercase tracking-wide">
                      Our tool
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <span className="text-xs text-gray-400 block">Price</span>
                    <span className="font-semibold text-gray-800">{a.price}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Time to first number</span>
                    <span className="font-semibold text-gray-800">{a.setup}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  <span className="font-bold text-gray-600">Best for: </span>
                  {a.bestFor}
                </p>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-bold text-green-700">Strength: </span>
                    {a.strength}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-bold text-gray-500">Limitation: </span>
                    {a.limitation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pick by what you actually need</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    If your real problem is
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Look at
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Over-ordering and stock sitting in the walk-in", "Stay with MarketMan, or look at Craftable"],
                  ["No visibility into weekly profit", "MarginEdge, for the daily P&L"],
                  ["Not knowing which dishes are unprofitable", "A pricing-focused tool such as MenuPricer"],
                  ["Cooks making the same dish differently", "meez, for recipe standardisation"],
                  ["One dish you need costed today", "A free calculator"],
                  ["Cost, and you have time to maintain it yourself", "A spreadsheet, with a monthly reminder to update prices"],
                ].map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{a}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Before you cancel anything</h2>
          <div className="space-y-3">
            {[
              {
                n: "1",
                t: "Read your cancellation terms",
                d: "Reviews have described a notice period rather than instant cancellation, so check what yours says before assuming you can stop billing this month.",
              },
              {
                n: "2",
                t: "Export your recipe and ingredient data first",
                d: "This is the weeks of entry work you already paid for. It is the single most expensive thing to rebuild, and it is much harder to retrieve after an account closes.",
              },
              {
                n: "3",
                t: "List the features you used in the last 30 days",
                d: "Not the ones that sold you. Operators are often surprised to find they used three functions out of thirty, which makes the replacement decision much clearer.",
              },
            ].map((x) => (
              <div key={x.n} className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
                <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-xs">
                  {x.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{x.t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">If pricing was the problem all along</h2>
          <p className="text-orange-100 mb-5">
            MenuPricer costs a dish from its name and tells you what to charge. No implementation
            project, no purchase orders, no setup fee. Free for your first 5 dishes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Price a dish free →
          </Link>
        </div>

        {/* Sourcing note */}
        <div className="border border-gray-200 rounded-xl p-5 mb-10 bg-gray-50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            About the pricing figures on this page
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Prices cited here reflect publicly reported figures as of {PRICING_CHECKED} and are
            included to show relative scale, not to quote any vendor. Software pricing changes, and
            most enterprise plans are negotiated per account. Confirm current pricing directly with
            each vendor before making a decision. MenuPricer is our own product, which is why it is
            labelled as such in the list above rather than presented as a neutral recommendation.
            See our <Link href="/editorial-policy" className="text-orange-500 hover:underline">editorial policy</Link>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/alternatives/marginedge-alternatives",
                title: "MarginEdge Alternatives",
                desc: "The same analysis for the other major invoice-and-P&L platform.",
              },
              {
                href: "/blog/recipe-costing-without-recipes",
                title: "Costing Without Written Recipes",
                desc: "Why implementations stall at step zero, and three ways around it.",
              },
              {
                href: "/compare/menupricer-vs-spreadsheet",
                title: "MenuPricer vs Spreadsheets",
                desc: "If the alternative you are considering is going back to Excel.",
              },
              {
                href: "/blog/prime-cost-restaurant",
                title: "Restaurant Prime Cost",
                desc: "The number that tells you whether software is your problem at all.",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">
                  {link.title}
                </p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400">
            © 2026 MenuPricer. AI-powered menu pricing for restaurant owners.
          </p>
        </div>
      </footer>
    </div>
  );
}

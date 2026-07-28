import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const LAST_UPDATED = "July 28, 2026";
const PRICING_CHECKED = "July 2026";

export const metadata: Metadata = {
  title: "MarginEdge Alternatives: 6 Options Compared for Independents (2026)",
  description:
    "MarginEdge has been reported from around $330/month. Six alternatives compared by price, setup time, and whether you need invoice processing or just better menu pricing.",
  alternates: { canonical: "https://www.aimenupricer.com/alternatives/marginedge-alternatives" },
  openGraph: {
    title: "MarginEdge Alternatives: 6 Options Compared for Independents (2026)",
    description:
      "An honest look at MarginEdge alternatives — including when MarginEdge is worth every dollar.",
    url: "https://www.aimenupricer.com/alternatives/marginedge-alternatives",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MarginEdge Alternatives",
  description:
    "Comparison of alternatives to MarginEdge restaurant invoice processing and back-office software, covering price, setup effort, and intended operation size.",
  url: "https://www.aimenupricer.com/alternatives/marginedge-alternatives",
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
      name: "MarginEdge Alternatives",
      item: "https://www.aimenupricer.com/alternatives/marginedge-alternatives",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do restaurants look for MarginEdge alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost is the most common reason. Entry pricing has been reported from around $330 per month, which is a significant commitment for a single-location independent. The second reason is scope: MarginEdge is built around invoice processing and daily profit and loss reporting, and operators who mainly wanted help setting menu prices find they are paying for a back-office finance platform to get one feature.",
      },
    },
    {
      "@type": "Question",
      name: "What is MarginEdge actually good at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Invoice capture with a human review layer that checks the AI-extracted line items, and the daily profit and loss view that comes out of it. For an operator who currently learns their food cost several weeks after month end, seeing it the next morning is a genuine change in how the business can be run. That is the feature worth paying for, and no cheaper tool replicates it.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a cheaper alternative to MarginEdge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For invoice processing and daily P&L specifically, not really — that combination is expensive to deliver because it involves human verification of extracted invoice data. What is cheaper is everything adjacent to it. If you need recipe costing, menu pricing, or inventory counts rather than automated invoice ingestion, narrower tools cover those at a fraction of the price.",
      },
    },
    {
      "@type": "Question",
      name: "MarginEdge or MarketMan — which should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They solve adjacent but different problems. MarketMan leans toward purchasing automation: par levels, purchase orders, vendor ordering. MarginEdge leans toward financial visibility: invoices in, daily P&L out. Choose based on whether your bottleneck is ordering the right amount or knowing your numbers in time to act on them. If it is neither, and you simply do not know which dishes are unprofitable, both are heavier than the problem requires.",
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
    bestFor: "Knowing what to charge, without a back-office platform",
    strength:
      "Costs a dish from its name and returns price tiers with the resulting margin. Change an ingredient price later and every saved dish using it recalculates.",
    limitation:
      "No invoice capture, no P&L, no accounting integration. It answers what to charge, not what you spent last week.",
    isUs: true,
  },
  {
    name: "MarketMan",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Reported from ~$199/mo + setup fee",
    setup: "6–12 weeks commonly reported",
    bestFor: "Purchasing automation across vendors or locations",
    strength:
      "Par-level-driven ordering and vendor management, with a high satisfaction rating on review sites. Lower entry price than MarginEdge.",
    limitation:
      "A setup fee applies, implementation is long, and reviews describe a cancellation notice period. Purchasing focus rather than financial reporting.",
    isUs: false,
  },
  {
    name: "Craftable",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Quote-based",
    setup: "Weeks",
    bestFor: "Back-office depth with strong beverage program handling",
    strength:
      "In published head-to-head comparisons against MarginEdge, reviewers have favoured Craftable on fit and on quality of ongoing support.",
    limitation: "You cannot evaluate the price without talking to sales, which slows down comparison.",
    isUs: false,
  },
  {
    name: "Your accountant plus a monthly close",
    tag: "Manual",
    tagColor: "bg-blue-100 text-blue-700",
    price: "Varies",
    setup: "Already in place",
    bestFor: "Operators whose numbers are fine, just slow",
    strength:
      "You likely already pay for this. A bookkeeper who codes invoices properly produces the same P&L, and asking for it more frequently is often cheaper than new software.",
    limitation:
      "Monthly rather than daily, so problems surface weeks after they start. Manual entry means less line-item ingredient detail.",
    isUs: false,
  },
  {
    name: "POS reporting you already pay for",
    tag: "Included",
    tagColor: "bg-green-100 text-green-700",
    price: "$0 extra",
    setup: "None",
    bestFor: "Sales-side visibility before buying anything new",
    strength:
      "Most modern POS systems already report item-level sales mix, which is half of menu engineering and is sitting unused in a lot of restaurants.",
    limitation:
      "Tells you what sold, never what it cost to make. You still need cost data from somewhere to turn sales mix into a margin decision.",
    isUs: false,
  },
  {
    name: "Spreadsheet",
    tag: "DIY",
    tagColor: "bg-gray-100 text-gray-600",
    price: "$0",
    setup: "Hours to days",
    bestFor: "Full control at zero software cost",
    strength: "Every formula is yours and nothing is hidden behind a vendor's interface.",
    limitation:
      "The build is the easy part. Keeping supplier prices current is what fails, usually in exactly the busy weeks when the numbers matter most.",
    isUs: false,
  },
];

export default function MarginEdgeAlternativesPage() {
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
          <span className="text-gray-600">MarginEdge Alternatives</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Software Comparison
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          MarginEdge Alternatives: 6 Options Compared for Independents
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED}</p>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            If you genuinely need automated invoice processing and a daily P&amp;L, there is no cheap
            substitute — that combination is expensive to deliver because a human verifies the
            extracted invoice data, and the realistic alternatives are Craftable or MarketMan at
            similar cost. If what you actually needed was to know which dishes are unprofitable, a
            pricing tool answers that for a fraction of the price. Start by deciding which of those
            two problems you have.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">First, the honest case for keeping it</h2>
          <p className="text-gray-600 mb-4">
            MarginEdge does one thing that genuinely changes how a restaurant can be run: it turns
            invoices into a daily profit and loss view, with a human review layer checking what the
            AI pulled off each invoice.
          </p>
          <p className="text-gray-600 mb-4">
            If you currently find out your food cost three weeks after month end, moving that to the
            next morning is not a marginal improvement. It is the difference between correcting a
            problem while it is happening and reading about it afterwards. No cheaper tool on this
            page reproduces that.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">The question to ask yourself:</strong> in the
              last three months, did you change a decision because of something the daily P&amp;L
              showed you? If yes, it is doing its job and the cost is defensible. If you mostly log
              in to check food cost percentage, you are paying a finance-platform price for a
              costing feature.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why operators look elsewhere</h2>
          <div className="space-y-3">
            {[
              {
                t: "The monthly cost against a thin margin",
                d: "Entry pricing has been reported from around $330 per month. On a restaurant netting a low single-digit percentage, that subscription has to displace a real cost to pay for itself.",
              },
              {
                t: "Paying for a platform to use one feature",
                d: "Operators frequently describe using a small fraction of what they bought. Invoice automation is powerful, but only if you have enough invoice volume for automation to matter.",
              },
              {
                t: "It reports the past, it does not set the price",
                d: "A daily P&L tells you food cost ran at 37% last week. It does not tell you which dish to reprice or what to change it to. That is a separate decision and a separate tool.",
              },
            ].map((x, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{x.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Decide by your actual bottleneck</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Your bottleneck
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Where to look
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Numbers arrive too late to act on", "Keep MarginEdge — this is what it is for"],
                  ["Drowning in supplier invoices every week", "Keep MarginEdge, or compare Craftable"],
                  ["Ordering too much and wasting it", "MarketMan, for par-level purchasing"],
                  ["No idea which dishes lose money", "A pricing tool such as MenuPricer"],
                  ["Numbers are fine, just monthly instead of daily", "Ask your bookkeeper for a mid-month close first"],
                  ["Never looked at your sales mix", "Your existing POS reports, before buying anything"],
                ].map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{a}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 bg-gray-50 rounded-lg p-3">
            Two of the six rows point at something you already own. That is deliberate. A meaningful
            share of restaurants shopping for back-office software have unused reporting in their POS
            and a bookkeeper who could close more often, and both are cheaper than any subscription
            on this page.
          </p>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">If the real gap is the pricing decision</h2>
          <p className="text-orange-100 mb-5">
            Reporting tells you food cost ran high. MenuPricer tells you which dish caused it and
            what to charge instead. $9/month, free for your first 5 dishes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Price a dish free →
          </Link>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 mb-10 bg-gray-50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            About the pricing figures on this page
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Prices cited here reflect publicly reported figures as of {PRICING_CHECKED} and are
            included to show relative scale, not to quote any vendor. Software pricing changes, and
            most enterprise plans are negotiated per account. Confirm current pricing directly with
            each vendor before deciding. MenuPricer is our own product, which is why it is labelled
            as such rather than presented as a neutral recommendation. See our{" "}
            <Link href="/editorial-policy" className="text-orange-500 hover:underline">editorial policy</Link>.
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
                href: "/alternatives/marketman-alternatives",
                title: "MarketMan Alternatives",
                desc: "The same analysis for the purchasing-focused platform.",
              },
              {
                href: "/blog/restaurant-profit-loss-statement",
                title: "Reading a Restaurant P&L",
                desc: "What a daily P&L would actually be showing you, line by line.",
              },
              {
                href: "/blog/menu-engineering",
                title: "Menu Engineering",
                desc: "How to turn sales mix from your POS into a repricing decision.",
              },
              {
                href: "/blog/prime-cost-restaurant",
                title: "Restaurant Prime Cost",
                desc: "The single number worth watching before adding any software.",
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

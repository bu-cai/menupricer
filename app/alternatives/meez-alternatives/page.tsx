import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const LAST_UPDATED = "September 27, 2026";
const PRICING_CHECKED = "September 2026";

export const metadata: Metadata = {
  title: "Meez Alternatives: 6 Options Compared for Independent Restaurants (2026)",
  description:
    "Meez is a recipe management and costing platform. Six alternatives compared by price, setup time, and whether you need full recipe management or just accurate menu pricing.",
  alternates: { canonical: "https://www.aimenupricer.com/alternatives/meez-alternatives" },
  openGraph: {
    title: "Meez Alternatives: 6 Options Compared for Independent Restaurants (2026)",
    description:
      "An honest look at Meez alternatives — including when Meez is actually worth it.",
    url: "https://www.aimenupricer.com/alternatives/meez-alternatives",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Meez Alternatives",
  description:
    "Comparison of alternatives to Meez recipe management and costing software, covering price, setup effort, and intended operation size.",
  url: "https://www.aimenupricer.com/alternatives/meez-alternatives",
  dateModified: "2026-09-27",
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
      name: "Meez Alternatives",
      item: "https://www.aimenupricer.com/alternatives/meez-alternatives",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do restaurants look for Meez alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reason is scope: Meez is primarily a recipe management platform with costing built in, so operators who mainly wanted to know what to charge for a dish find they are paying for a full recipe library and training tool they do not need. The second reason is that Meez is designed partly as a team training system, and solo operators or small two-person kitchens do not get value from that side of the product.",
      },
    },
    {
      "@type": "Question",
      name: "What is Meez actually good at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meez is genuinely strong at standardizing recipes across a team: each recipe card lives in one place, gets updated once, and the updated version reaches every station and every person trained on it. If you run a fast-casual with seasonal menu changes and new staff regularly, having training built into the same tool as the recipe costing card is a real workflow improvement. That is the part no cheaper tool replicates well.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free alternative to Meez for recipe costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For recipe storage and scaling specifically, yes — you can build a recipe database in a spreadsheet at no cost. For recipe costing with AI assistance, MenuPricer costs a dish from its name and key ingredients without requiring you to build a full recipe library first. Neither replaces the training and team standardization side of Meez, but both answer the pricing question at lower cost.",
      },
    },
    {
      "@type": "Question",
      name: "Meez vs MenuPricer — which should I use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you need a centralized recipe library that your cooks refer to during service and that doubles as a training tool, Meez does that and MenuPricer does not. If you need to know what to charge for a dish — the actual menu price that gives you a sustainable margin — MenuPricer answers that faster and at a lower cost than setting up a full recipe library. Many operators need both, in which case they are solving different problems and can run side by side.",
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
    bestFor: "Knowing what to charge, without a full recipe management platform",
    strength:
      "Costs a dish from its name and returns price tiers with the resulting margin. No recipe library to build — type the dish, get the number.",
    limitation:
      "No recipe storage, no training features, no team standardization. It answers what to charge, not how to cook it consistently.",
    isUs: true,
  },
  {
    name: "Google Sheets recipe costing template",
    tag: "DIY",
    tagColor: "bg-gray-100 text-gray-600",
    price: "$0",
    setup: "A few hours to build",
    bestFor: "Full control over your recipe and cost data at zero software cost",
    strength:
      "Everything Meez stores, a spreadsheet can store. A well-built recipe tab with ingredient costs and yield factors gives you the same costing math.",
    limitation:
      "No team access controls, no training workflows, and keeping ingredient prices current is manual. The build is easy; the maintenance is what fails.",
    isUs: false,
  },
  {
    name: "MarginEdge",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Reported from ~$330/mo",
    setup: "Several weeks",
    bestFor: "Invoice processing and daily P&L alongside recipe costing",
    strength:
      "If you need to know food cost each morning rather than each month, MarginEdge delivers that. Its recipe costing is a byproduct of its invoice-to-P&L engine.",
    limitation:
      "Built for operators who need financial reporting first. If you only want recipe costs and menu pricing, you will pay a finance-platform price for a costing feature.",
    isUs: false,
  },
  {
    name: "MarketMan",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Reported from ~$199/mo + setup fee",
    setup: "6–12 weeks commonly reported",
    bestFor: "Purchasing automation: par levels, vendor orders, inventory counts",
    strength:
      "Par-level-driven ordering is what MarketMan is best at. If over-ordering and waste is the real problem, this addresses it more directly than Meez.",
    limitation:
      "Purchasing focus, not recipe training. Pricing is not publicly listed, and setup involves a fee and implementation period.",
    isUs: false,
  },
  {
    name: "Recipe costing inside your POS",
    tag: "Included",
    tagColor: "bg-green-100 text-green-700",
    price: "$0 extra on many platforms",
    setup: "Variable — depends on your POS",
    bestFor: "Operators who already pay for Toast, Square, or similar with recipe features included",
    strength:
      "Some POS systems have basic recipe costing built in. If yours does, you may already own the feature you are shopping for.",
    limitation:
      "Depth varies widely. Most POS recipe modules lack yield tracking, supplier price sync, and the training layer Meez provides.",
    isUs: false,
  },
  {
    name: "Notejoy or Notion recipe wiki",
    tag: "Manual",
    tagColor: "bg-blue-100 text-blue-700",
    price: "$0–$16/mo depending on team size",
    setup: "Days",
    bestFor: "Centralizing recipes for a team without buying dedicated software",
    strength:
      "A shared wiki solves the recipe standardization and access problem at near-zero cost. Photos, instructions, and version history all work out of the box.",
    limitation:
      "No costing math, no yield calculations, no food cost percentages. You store the recipe but still need a separate tool to price it.",
    isUs: false,
  },
];

export default function MeezAlternativesPage() {
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
          <Link href="/alternatives" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Alternatives
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
          <Link href="/alternatives" className="hover:text-gray-600">Alternatives</Link>
          <span>›</span>
          <span className="text-gray-600">Meez Alternatives</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Software Comparison
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          Meez Alternatives: 6 Options Compared for Independent Restaurants
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED}</p>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            If you need a recipe management platform that doubles as a training tool for your team,
            Meez fills that gap and no cheap alternative replicates both sides. If what you actually
            needed was to know what to charge for a dish — the right menu price given your ingredient
            costs and target margin — a pricing tool answers that for a fraction of the cost without
            requiring you to build a full recipe library first.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">First, the honest case for keeping it</h2>
          <p className="text-gray-600 mb-4">
            Meez solves a real problem in restaurant kitchens: the recipe in the chef&apos;s head is
            not the recipe being executed at the line. A standardized recipe card with photos,
            instructions, and yield factors — accessible to everyone on shift — closes that gap in a
            way a spreadsheet technically can but practically does not.
          </p>
          <p className="text-gray-600 mb-4">
            The costing that Meez adds on top of that recipe library means a menu price change
            cascades through every dish that uses the repriced ingredient. For operators who change
            seasonal menus regularly and run a team of more than two or three cooks, that is a real
            workflow improvement.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">The question to ask yourself:</strong> is your
              current bottleneck that your cooks are executing inconsistently and you need a
              centralized recipe system, or is it that you do not know what to charge for your dishes?
              The first points at Meez. The second points at a pricing tool. Many operators conflate
              the two and buy more than they need.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why operators look elsewhere</h2>
          <div className="space-y-3">
            {[
              {
                t: "Training features that a solo operator does not use",
                d: "Meez was built partly as a team training system. A one-chef operation, food truck, or home caterer gets the costing math but pays for team management and SOP features that sit idle.",
              },
              {
                t: "Needing a menu price, not a recipe library",
                d: "The question 'what should I charge for this dish?' does not require a full recipe database to answer. A lighter tool gets to that number faster without the onboarding overhead.",
              },
              {
                t: "Building the recipe library is the product",
                d: "Meez costs money from day one, but the value is proportional to how complete your recipe database is. The setup period — entering every recipe with yield factors and ingredient costs — is substantial work before the tool pays off.",
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
                  ["Team executing recipes inconsistently", "Keep Meez — this is the core use case"],
                  ["Seasonal menu changes hitting multiple dishes", "Keep Meez for the cascade repricing"],
                  ["Need menu prices, not a recipe library", "MenuPricer — price a dish in minutes"],
                  ["Drowning in supplier invoices", "MarginEdge or MarketMan for purchasing"],
                  ["Over-ordering and wasting stock", "MarketMan, for par-level inventory"],
                  ["Just need recipes in one place for free", "Google Sheets or Notion before buying anything"],
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

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">If the gap is the pricing decision</h2>
          <p className="text-orange-100 mb-5">
            Know what to charge for any dish in minutes. No recipe library to build.
            Free for your first 5 dishes.
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
            plans are often customized per account. Confirm current pricing directly with each vendor
            before deciding. MenuPricer is our own product, which is why it is labelled as such
            rather than presented as a neutral recommendation. See our{" "}
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
                href: "/alternatives/marginedge-alternatives",
                title: "MarginEdge Alternatives",
                desc: "The same analysis for the invoice processing and daily P&L platform.",
              },
              {
                href: "/alternatives/marketman-alternatives",
                title: "MarketMan Alternatives",
                desc: "Alternatives to the purchasing and inventory management platform.",
              },
              {
                href: "/blog/food-cost-formula",
                title: "Food Cost Formula",
                desc: "The math behind recipe costing — without any software.",
              },
              {
                href: "/blog/menu-engineering",
                title: "Menu Engineering",
                desc: "How to use your sales mix to decide which dishes to reprice.",
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

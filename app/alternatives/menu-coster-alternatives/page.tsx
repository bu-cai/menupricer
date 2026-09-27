import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const LAST_UPDATED = "September 27, 2026";
const PRICING_CHECKED = "September 2026";

export const metadata: Metadata = {
  title: "Menu Coster Alternatives: 5 Options Compared for Restaurants (2026)",
  description:
    "Looking for Menu Coster alternatives? Five options compared by price, ease of use, and what they actually cover — from free spreadsheets to AI-powered pricing tools.",
  alternates: { canonical: "https://www.aimenupricer.com/alternatives/menu-coster-alternatives" },
  openGraph: {
    title: "Menu Coster Alternatives: 5 Options Compared for Restaurants (2026)",
    description:
      "An honest look at what Menu Coster does and five alternatives for operators who need something different.",
    url: "https://www.aimenupricer.com/alternatives/menu-coster-alternatives",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Menu Coster Alternatives",
  description:
    "Comparison of alternatives to Menu Coster restaurant costing software, covering price, ease of use, and scope.",
  url: "https://www.aimenupricer.com/alternatives/menu-coster-alternatives",
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
      name: "Menu Coster Alternatives",
      item: "https://www.aimenupricer.com/alternatives/menu-coster-alternatives",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Menu Coster do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menu Coster is a recipe costing tool designed for restaurant operators and food businesses. You enter your recipes and ingredient costs, and it calculates your food cost percentage and suggested menu price for each dish. It focuses specifically on costing rather than offering inventory management, invoice processing, or POS integration.",
      },
    },
    {
      "@type": "Question",
      name: "Why do operators look for Menu Coster alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons are: wanting AI assistance that estimates costs without building a full ingredient database first, needing batch pricing across an entire menu at once, or wanting a tool that also connects to sales data from a POS. Menu Coster is a focused costing tool, so operators whose needs expand beyond that look elsewhere.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free alternative to Menu Coster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Google Sheets or Excel recipe costing template costs nothing and gives you full control over the calculation. The trade-off is setup time — you build the formulas yourself — and manual updates when ingredient prices change. MenuPricer offers a free tier that covers your first 5 dishes without any template setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI replace a recipe costing tool like Menu Coster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can estimate the ingredient cost of a dish from its name and main components, which means you do not need to enter a full ingredient database before getting a useful price. For dishes with unusual or very locally priced ingredients, that estimate will be less accurate than a detailed manual costing — so AI works well for quick-pricing decisions and initial menu setup, with manual costing for your highest-margin dishes.",
      },
    },
  ],
};

const ALTERNATIVES = [
  {
    name: "MenuPricer",
    tag: "Pricing + AI",
    tagColor: "bg-orange-100 text-orange-700",
    price: "$9/mo (free tier available)",
    setup: "Minutes",
    bestFor: "Pricing dishes quickly without building a full ingredient database",
    strength:
      "Type a dish name and get a price with the resulting margin — no recipe entry required. Also supports batch pricing across a full menu and ingredient-level cost tracking on Pro.",
    limitation:
      "No inventory management, no invoice processing. It answers what to charge, not what you ordered last week.",
    isUs: true,
  },
  {
    name: "Google Sheets or Excel template",
    tag: "DIY",
    tagColor: "bg-gray-100 text-gray-600",
    price: "$0",
    setup: "Hours to days",
    bestFor: "Full control at zero software cost",
    strength:
      "Free food cost templates are widely available online. A well-structured spreadsheet with ingredient costs, yield percentages, and a food cost formula replicates what Menu Coster does, and every formula is yours.",
    limitation:
      "Keeping ingredient prices current is manual. A 50-item menu with shared ingredients becomes genuinely unwieldy to maintain during supplier price increases.",
    isUs: false,
  },
  {
    name: "Meez",
    tag: "Recipe management",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Varies by plan",
    setup: "Days to weeks",
    bestFor: "Teams that need recipe standardization alongside costing",
    strength:
      "Meez stores your full recipe library with photos and instructions, and costing is built in. If you also need your cooks to reference standardized recipes during service, Meez handles both.",
    limitation:
      "More setup than a dedicated costing tool. Solo operators and small teams often pay for team training features they never use.",
    isUs: false,
  },
  {
    name: "MarginEdge",
    tag: "Enterprise",
    tagColor: "bg-gray-200 text-gray-700",
    price: "Reported from ~$330/mo",
    setup: "Several weeks",
    bestFor: "Invoice processing and daily P&L reporting alongside recipe costing",
    strength:
      "MarginEdge turns invoices into a daily profit and loss view. Recipe costing is included, but the platform earns its price through invoice automation and financial reporting.",
    limitation:
      "Expensive if you only need costing. Built for multi-unit operators or operators who need daily financial reporting.",
    isUs: false,
  },
  {
    name: "Your POS system's built-in costing",
    tag: "Included",
    tagColor: "bg-green-100 text-green-700",
    price: "$0 extra on many platforms",
    setup: "Variable",
    bestFor: "Operators who already pay for Toast, Square, or similar with costing features",
    strength:
      "Some POS systems include basic recipe costing. If yours does, you may already own the feature before paying for separate software.",
    limitation:
      "POS costing modules vary widely in depth. Most lack yield tracking, supplier price sync, and the AI estimation that lets you skip full recipe entry.",
    isUs: false,
  },
];

export default function MenuCosterAlternativesPage() {
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
          <span className="text-gray-600">Menu Coster Alternatives</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Software Comparison
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          Menu Coster Alternatives: 5 Options Compared
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED}</p>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Menu Coster is a straightforward recipe costing tool: enter your ingredients, get your
            food cost percentage and a suggested price. Operators look for alternatives when they want
            AI assistance that skips the ingredient database setup, need batch pricing across an
            entire menu, or want costing built into a larger platform. The right choice depends on
            whether your bottleneck is the setup work or something a dedicated pricing tool covers.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Menu Coster does well</h2>
          <p className="text-gray-600 mb-4">
            Menu Coster is purpose-built for one task: take a recipe, enter ingredient costs, and
            return the food cost percentage and a suggested price. That focus means it is simple to
            learn and does not bundle inventory management or invoice processing you might not need.
          </p>
          <p className="text-gray-600 mb-4">
            For operators who prefer to own their full ingredient database — entering every component
            with exact yields and current prices — Menu Coster gives you complete control over the
            input data, which means the output is as accurate as the time you put in.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">The right question:</strong> is the bottleneck
              the calculation itself, or is it that building and maintaining the ingredient database
              takes longer than the pricing decision is worth? If it is the second, an AI-powered
              tool that estimates costs from a dish name is a different kind of solution.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why operators look elsewhere</h2>
          <div className="space-y-3">
            {[
              {
                t: "Setup time before getting the first number",
                d: "A manual costing tool is only as good as the ingredient database you build for it. Entering every ingredient with current prices, units, and yield percentages is hours of work — before you have priced a single dish.",
              },
              {
                t: "AI can skip the database entirely",
                d: "Newer tools estimate the ingredient cost of a dish from its name and main components. For most common restaurant dishes, the estimate is close enough to make a pricing decision without manual data entry.",
              },
              {
                t: "Batch pricing an entire menu at once",
                d: "If you are opening a new restaurant or repricing a seasonal menu, costing one dish at a time is slow. Batch pricing tools process a full menu list and flag which dishes need attention.",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The five alternatives</h2>
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

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price your first dish in minutes</h2>
          <p className="text-orange-100 mb-5">
            No ingredient database to build. Type the dish name, get the price and margin.
            Free for your first 5 dishes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Try MenuPricer free →
          </Link>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 mb-10 bg-gray-50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            About the pricing figures on this page
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Prices cited here reflect publicly reported figures as of {PRICING_CHECKED}. Software
            pricing changes frequently. Confirm current pricing directly with each vendor before
            deciding. MenuPricer is our own product, labelled as such rather than presented as a
            neutral recommendation. See our{" "}
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
                href: "/alternatives/meez-alternatives",
                title: "Meez Alternatives",
                desc: "Alternatives to the recipe management and team training platform.",
              },
              {
                href: "/alternatives/marginedge-alternatives",
                title: "MarginEdge Alternatives",
                desc: "Analysis for the invoice processing and daily P&L platform.",
              },
              {
                href: "/blog/food-cost-formula",
                title: "Food Cost Formula",
                desc: "The manual calculation behind every costing tool.",
              },
              {
                href: "/blog/food-costing-template",
                title: "Free Food Costing Template",
                desc: "A spreadsheet template for costing dishes without any software.",
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

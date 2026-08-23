import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Best Food Costing Software for Restaurants in 2026 (Free & Paid)",
  description:
    "Food costing software compared by what it actually does — recipe costing, invoice processing, or inventory control — and who each one is really built for, from free calculators to enterprise platforms.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/best-food-costing-software" },
  openGraph: {
    title: "Best Food Costing Software for Restaurants in 2026 (Free & Paid)",
    description: "An honest comparison of food costing and recipe costing software, grouped by what each tool is actually built to solve.",
    url: "https://www.aimenupricer.com/blog/best-food-costing-software",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Best Food Costing Software for Restaurants in 2026 (Free & Paid)",
  description: "Food costing and recipe costing software compared by category — recipe costing, invoice/AP automation, and full inventory control — with who each is built for.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-08-21", dateModified: "2026-08-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/best-food-costing-software",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Best Food Costing Software", item: "https://www.aimenupricer.com/blog/best-food-costing-software" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is food costing software?", acceptedAnswer: { "@type": "Answer", text: "Food costing software calculates how much a dish costs to make from its ingredients, then helps set a menu price that hits a target margin. The category ranges from free single-dish calculators to enterprise platforms that also handle purchasing, invoice processing, and multi-location inventory." } },
    { "@type": "Question", name: "Is there free food costing software?", acceptedAnswer: { "@type": "Answer", text: "Yes. Several tools offer a free tier or free one-off calculator: MenuPricer (5 dishes free), meez, Supy, StockTake Online, DishTrack, and MenuCostCalculator.com all have a free entry point. Free tools are typically single-dish calculators without saved recipe history or batch pricing across a full menu." } },
    { "@type": "Question", name: "What's the difference between recipe costing software and full restaurant management software?", acceptedAnswer: { "@type": "Answer", text: "Recipe costing software (like MenuPricer or meez) answers one question: what should this dish cost? Full restaurant management platforms (like MarketMan, Craftable, or CostGuard) also handle purchase orders, vendor management, and stock counts. Buying the second type to solve the first problem usually means paying for — and administering — features you never touch." } },
    { "@type": "Question", name: "Do I need software to calculate food cost, or can I use a spreadsheet?", acceptedAnswer: { "@type": "Answer", text: "A spreadsheet works and costs nothing, but it requires you to look up every ingredient price yourself and remember to update it when supplier costs change — which is where most spreadsheets quietly go stale. Software's main advantage is automatic ingredient cost estimation and recalculation when prices move, not the math itself." } },
  ],
};

const CATEGORIES = [
  {
    name: "Recipe & menu costing",
    desc: "Answers one question: what should this dish cost, and what should I charge for it?",
    tools: [
      { name: "MenuPricer", note: "AI drafts an ingredient list from just a dish name — no recipe card required first. Free for 5 dishes, $9/mo or $79/yr for unlimited.", isUs: true },
      { name: "meez", note: "Recipe-first costing with live recost when ingredient prices change. Has a free tier." },
      { name: "DishTrack", note: "Free one-off calculator, plus a free account tier to save recipes. Built for small food businesses." },
      { name: "MenuCostCalculator.com", note: "Free, no signup, single-dish calculator. No saved history." },
    ],
  },
  {
    name: "Invoice processing & AP automation",
    desc: "Extracts costs from vendor invoices automatically, usually paired with daily P&L reporting.",
    tools: [
      { name: "MarginEdge", note: "Invoice capture with human-reviewed extraction and next-day P&L visibility. Reported from ~$330/mo." },
      { name: "XtraChef", note: "Invoice processing and cost tracking, part of the Toast ecosystem — deepest fit if you already run Toast POS." },
      { name: "Ottimate", note: "Positioned for finance-heavy operators processing a high volume of invoices." },
    ],
  },
  {
    name: "Full inventory & purchasing platforms",
    desc: "Recipe costing is one module inside a larger system covering purchase orders, vendor management, and stock counts.",
    tools: [
      { name: "MarketMan", note: "Purchasing automation with par-level ordering. Reported from ~$199/mo plus a setup fee; implementations commonly take 6-12 weeks." },
      { name: "Craftable", note: "Back-office and beverage-program depth for multi-unit groups. Quote-based pricing." },
      { name: "Supy", note: "Multi-branch procurement and inventory with theoretical-vs-actual COGS tracking. Also offers a free standalone food cost calculator." },
      { name: "StockTake Online", note: "Connects directly to your POS so stock updates as sales happen. Also has a free calculator tool." },
      { name: "CostGuard", note: "Long-established (25+ years) foodservice software covering recipes, menus, and sales-mix analysis, with POS and accounting integrations." },
      { name: "opsi", note: "Recipe management, checklists, food costing, and inventory in one platform. Starts around $149/mo flat, no free tier." },
    ],
  },
  {
    name: "Nutrition & compliance-focused costing",
    desc: "Recipe costing bundled with nutrition analysis and allergen labeling — built for operators who need both.",
    tools: [
      { name: "Nutritics", note: "Food-data platform combining nutrition analysis, allergen/menu labeling, and recipe costing. Serves caterers, manufacturers, healthcare, and education as much as restaurants." },
    ],
  },
];

export default function BestFoodCostingSoftwarePage() {
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
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Best Food Costing Software</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">AI Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Best Food Costing Software</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Software Comparison</span>
            <span className="text-xs text-gray-400">7 min read · August 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Best Food Costing Software for Restaurants in 2026</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: August 21, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">The best food costing software depends entirely on what you're actually trying to solve. A single-location owner who needs to know what to charge for a dish needs a completely different tool than a five-location group trying to control purchasing waste — and buying the wrong category is the most common expensive mistake in this space.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Start with the question you're actually asking</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              "Food costing software" covers four genuinely different product categories, and most of the confusion in this space comes from comparing tools across categories instead of within one. Figure out which question you're asking first:
            </p>
            <div className="space-y-3">
              {[
                { q: "\"What should I charge for this dish?\"", a: "You want recipe & menu costing — the lightest, usually cheapest category." },
                { q: "\"My invoices pile up and I don't know my real cost until month-end.\"", a: "You want invoice processing & AP automation." },
                { q: "\"I need to control purchasing and stock across multiple locations.\"", a: "You want a full inventory & purchasing platform — the most expensive and slowest to implement." },
                { q: "\"I need nutrition facts and allergen labels alongside cost.\"", a: "You want a nutrition & compliance-focused tool." },
              ].map((row) => (
                <div key={row.q} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 text-sm mb-1">{row.q}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.a}</p>
                </div>
              ))}
            </div>
          </section>

          {CATEGORIES.map((cat) => (
            <section key={cat.name}>
              <h2 className="text-2xl font-black text-gray-900 mb-2">{cat.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{cat.desc}</p>
              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className={`rounded-xl p-4 border ${tool.isUs ? "border-orange-300 bg-orange-50/40" : "border-gray-200"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-gray-900 text-sm">{tool.name}</p>
                      {tool.isUs && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white uppercase tracking-wide">Our tool</span>}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{tool.note}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">If you just need to know what to charge</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer starts from a dish name — no recipe card, no purchase orders, no multi-week setup. Free for your first 5 dishes.</p>
            <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Try MenuPricer Free →</Link>
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

          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">About the figures on this page</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Pricing figures shown (MarketMan, MarginEdge, opsi) reflect publicly reported numbers as of August 2026 and are included to show relative scale, not to quote any vendor — confirm current pricing directly with each vendor. Tools without a listed price were not publicly disclosed at the time of writing; we describe positioning only rather than guess a number. MenuPricer is our own product, which is why it's labelled as such above rather than presented as a neutral pick. See our <Link href="/editorial-policy" className="text-orange-500 hover:underline">editorial policy</Link>.
            </p>
          </div>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/alternatives/marketman-alternatives", title: "MarketMan Alternatives", desc: "A deeper look at why operators switch away, and when to stay." },
                { href: "/alternatives/marginedge-alternatives", title: "MarginEdge Alternatives", desc: "The same analysis for the invoice-and-P&L platform." },
                { href: "/blog/recipe-costing-without-recipes", title: "Costing Without Written Recipes", desc: "Why most implementations stall at step zero." },
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Classify every dish by profit and popularity once costing is done." },
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
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer · aimenupricer.com</p>
        </div>
      </footer>
    </div>
  );
}

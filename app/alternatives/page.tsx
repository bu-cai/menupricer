import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Software Alternatives — Honest Comparisons",
  description:
    "Alternatives to the major restaurant costing and inventory platforms, compared by price, setup time, and what each is actually built for. Including when the incumbent is the right choice.",
  alternates: { canonical: "https://www.aimenupricer.com/alternatives" },
  openGraph: {
    title: "Restaurant Software Alternatives — Honest Comparisons | MenuPricer",
    description:
      "Alternatives to major restaurant costing platforms, compared by price, setup time, and intended use.",
    url: "https://www.aimenupricer.com/alternatives",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Alternatives", item: "https://www.aimenupricer.com/alternatives" },
  ],
};

const PAGES = [
  {
    href: "/alternatives/marketman-alternatives",
    name: "MarketMan Alternatives",
    summary:
      "Purchasing and inventory automation, reported from around $199/month plus a setup fee, with implementations commonly described as six to twelve weeks.",
    whoLeaves: "Single-location independents who wanted pricing help, not purchase orders",
  },
  {
    href: "/alternatives/marginedge-alternatives",
    name: "MarginEdge Alternatives",
    summary:
      "Invoice processing and daily profit and loss reporting, reported from around $330/month, with a human review layer verifying extracted invoice data.",
    whoLeaves: "Operators paying finance-platform prices to check one number",
  },
];

export default function AlternativesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Alternatives</span>
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
          <span className="text-gray-600">Alternatives</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Software Alternatives
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Comparisons of the major restaurant costing platforms and what else exists at each price
          point. Each page also says plainly when the incumbent is the right call, because most
          software regret is a fit problem rather than a quality problem.
        </p>

        <div className="space-y-4 mb-10">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors group"
            >
              <p className="font-black text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                {p.name} →
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.summary}</p>
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-500">Who tends to switch: </span>
                {p.whoLeaves}
              </p>
            </Link>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 mb-10">
          <p className="text-sm font-bold text-gray-800 mb-2">How we write these</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            MenuPricer appears in these comparisons and is labelled as our own product wherever it
            does. We list competitors we do not sell, including free options and things you may
            already be paying for, and every page states where MenuPricer is the wrong tool. Pricing
            figures are dated and sourced from public reporting rather than quoted as current vendor
            terms. Full details in our{" "}
            <Link href="/editorial-policy" className="text-orange-500 hover:underline">
              editorial policy
            </Link>
            .
          </p>
        </div>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Also useful</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/compare",
                title: "Head-to-head comparisons",
                desc: "Direct MenuPricer vs single-product breakdowns.",
              },
              {
                href: "/blog/recipe-costing-without-recipes",
                title: "Costing Without Written Recipes",
                desc: "Why costing implementations stall before they start.",
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

import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const LAST_UPDATED = "July 28, 2026";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How MenuPricer researches, writes, sources, and updates its restaurant pricing and food cost guides — including our data sources, review process, and correction policy.",
  alternates: { canonical: "https://www.aimenupricer.com/editorial-policy" },
  openGraph: {
    title: "Editorial Policy — MenuPricer",
    description:
      "How MenuPricer researches, sources, and updates its restaurant pricing content.",
    url: "https://www.aimenupricer.com/editorial-policy",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Editorial Policy",
      item: "https://www.aimenupricer.com/editorial-policy",
    },
  ],
};

const SOURCES = [
  {
    name: "National Restaurant Association",
    url: "https://restaurant.org/research-and-media/research/restaurant-economic-insights/economic-indicators/menu-prices/",
    use: "Menu price indices and industry-wide economic indicators",
  },
  {
    name: "USDA Economic Research Service — Food Price Outlook",
    url: "https://www.ers.usda.gov/data-products/food-price-outlook/summary-findings",
    use: "Forward-looking ingredient and commodity price forecasts",
  },
  {
    name: "U.S. Bureau of Labor Statistics",
    url: "https://www.bls.gov/",
    use: "Wage data used in labor cost and prime cost guidance",
  },
  {
    name: "Published vendor pricing",
    url: null,
    use: "Software and delivery platform pricing, cited with the date observed",
  },
  {
    name: "Practitioner communities",
    url: null,
    use: "Operator-reported experience from public forums, used for context and never presented as statistics",
  },
];

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }}
      />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Editorial Policy</span>
          <Link
            href="/"
            className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-600">Editorial Policy</span>
        </nav>

        <h1 className="text-3xl font-black text-gray-900 mb-2">Editorial Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: {LAST_UPDATED}</p>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">In short:</strong> MenuPricer publishes
            pricing and cost-control guidance for independent restaurant operators. We
            cite a source for every industry statistic, we show the arithmetic behind
            every formula so you can check it, and we date every page so you know how
            current it is. We do not publish sponsored placements, and we do not invent
            numbers.
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who writes this content</h2>
            <p>
              MenuPricer&apos;s guides are written and maintained by the MenuPricer team.
              Our work is grounded in three inputs: published industry data from the
              sources listed below, the mechanics of restaurant cost accounting, and
              operator-reported experience from public professional communities.
            </p>
            <p className="mt-3">
              We are a software company, not a licensed accounting or financial advisory
              firm. Our content explains how restaurant cost and pricing math works. It is
              not accounting, tax, or legal advice, and it is not a substitute for a
              conversation with your accountant about your specific business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How we source numbers</h2>
            <p className="mb-4">
              Every industry statistic on this site falls into one of three buckets, and we
              label which one it is:
            </p>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">1. Cited external data</p>
                <p className="text-sm text-gray-600">
                  Published figures from the organizations listed below. These carry a link
                  to the original source. If we cannot link to a primary source, we do not
                  publish the number.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  2. Worked examples and illustrative figures
                </p>
                <p className="text-sm text-gray-600">
                  Sample dishes, sample budgets, and sample cost breakdowns exist to
                  demonstrate a calculation. They are realistic but illustrative, and we say
                  so. Do not treat them as survey data.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">3. Ranges and benchmarks</p>
                <p className="text-sm text-gray-600">
                  Widely-used operating benchmarks, such as a 28–35% target food cost, are
                  presented as ranges rather than precise figures, because the correct
                  number depends on concept, region, and service model.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Primary sources we rely on</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                      Source
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                      What we use it for
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SOURCES.map((source, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">
                        {source.url ? (
                          <a
                            href={source.url}
                            className="text-orange-500 hover:underline"
                            rel="noopener"
                          >
                            {source.name}
                          </a>
                        ) : (
                          source.name
                        )}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-600">
                        {source.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How our calculators work
            </h2>
            <p>
              Every calculator on this site uses standard, publicly documented restaurant
              cost accounting formulas. We show the formula on the page rather than hiding
              it, so you can verify the result by hand or in a spreadsheet.
            </p>
            <p className="mt-3">
              Calculator outputs are estimates based only on the inputs you provide. They
              do not account for waste, shrinkage, theft, comps, or seasonal yield variance
              unless the calculator explicitly asks for those inputs. A calculator result
              is a starting point for a pricing decision, not the decision itself.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How AI is used on this site
            </h2>
            <p>
              MenuPricer&apos;s product uses AI to generate ingredient breakdowns and
              pricing recommendations from a dish name. AI-generated ingredient lists are
              estimates based on typical preparations. Your actual recipe, portion sizes,
              and supplier prices will differ, and the product is designed for you to edit
              those values.
            </p>
            <p className="mt-3">
              For our published guides, AI may assist with drafting, but every article is
              reviewed by a person before publication, and every statistic is verified
              against the primary source. We do not publish unreviewed AI output.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Updates and corrections</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Every guide carries a visible <strong>Last updated</strong> date.
              </li>
              <li>
                Pages containing cost figures, vendor pricing, or industry benchmarks are
                reviewed at least twice a year, and sooner when market conditions shift
                materially.
              </li>
              <li>
                When we correct a factual error, we fix the page and update its date. We do
                not silently delete pages that turned out to be wrong.
              </li>
              <li>
                Competitor pricing is cited with the date we observed it. Vendors change
                pricing without notice — always confirm on the vendor&apos;s own site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Independence and conflicts of interest
            </h2>
            <p>
              MenuPricer sells a menu pricing product, and our guides link to it. That is a
              commercial interest and we state it plainly rather than obscuring it.
            </p>
            <p className="mt-3">Within that constraint, we hold to the following:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>We do not accept payment for reviews, rankings, or placements.</li>
              <li>
                We have no affiliate relationship with any competitor or vendor we write
                about.
              </li>
              <li>
                When we compare MenuPricer to another product, we describe that
                product&apos;s genuine strengths, including the cases where it is the better
                choice for a given operator.
              </li>
              <li>
                We do not publish fabricated reviews, testimonials, or ratings. Any customer
                quote on this site is from a real, consenting customer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Report an error</h2>
            <p>
              If you find a number, formula, or claim on this site that looks wrong, tell us
              and we will check it. Corrections are welcome and we would rather be corrected
              than be wrong.
            </p>
            <p className="mt-3">
              Email{" "}
              <a
                href="mailto:xiaocaiwang14@gmail.com"
                className="text-orange-500 hover:underline"
              >
                xiaocaiwang14@gmail.com
              </a>{" "}
              with the page URL and what you believe is incorrect.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About MenuPricer
          </Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Back to MenuPricer
          </Link>
        </div>
      </main>
    </div>
  );
}

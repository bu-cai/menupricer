import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Pricing Glossary",
  description:
    "Plain-language definitions for 30 restaurant pricing and food cost terms — food cost percentage, prime cost, menu engineering, yield, par level, and more.",
  alternates: { canonical: "https://www.aimenupricer.com/glossary" },
  openGraph: {
    title: "Restaurant Pricing Glossary | MenuPricer",
    description:
      "Plain-language definitions for restaurant pricing and food cost terms, with links to the full guide for each.",
    url: "https://www.aimenupricer.com/glossary",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: "https://www.aimenupricer.com/glossary" },
  ],
};

type Term = { term: string; def: string; href?: string };

const TERMS: Term[] = [
  {
    term: "Actual vs. Theoretical Food Cost",
    def: "Theoretical food cost is what your recipes say a dish should cost. Actual food cost is what your P&L reports it cost, once waste, over-portioning, and shrinkage are included. A stable gap between the two is normal; a widening one means something in the kitchen needs investigating.",
    href: "/blog/food-cost-formula",
  },
  {
    term: "Average Check Size",
    def: "The average amount a guest spends per visit, calculated as total revenue divided by number of covers. It's one of the fastest ways to see whether upselling or menu changes are moving revenue per table.",
    href: "/blog/restaurant-kpis",
  },
  {
    term: "Break-Even Point",
    def: "The revenue level at which total costs equal total revenue and profit is exactly zero. Below it you lose money; above it, every additional dollar of revenue drops mostly to profit once fixed costs are covered.",
    href: "/restaurant-profit-calculator",
  },
  {
    term: "COGS (Cost of Goods Sold)",
    def: "The direct cost of the food and beverage you sold in a period — what you paid suppliers for the ingredients, not what you charged customers. It's the first deduction on a restaurant P&L, before labor and overhead.",
    href: "/blog/restaurant-profit-loss-statement",
  },
  {
    term: "Contribution Margin",
    def: "What's left from a dish's price after subtracting its direct ingredient cost — the amount it contributes toward covering labor, rent, and profit. High-contribution dishes are worth pushing even if their food cost percentage looks average.",
    href: "/blog/restaurant-profit-margin",
  },
  {
    term: "Corkage Fee",
    def: "What a restaurant charges a guest for opening and serving a bottle of wine they brought themselves, rather than buying from the wine list. It exists to recover the lost bottle margin and the service cost of pouring it.",
    href: "/blog/corkage-fee",
  },
  {
    term: "Delivery Commission",
    def: "The percentage a third-party delivery platform (DoorDash, Uber Eats, Grubhub) keeps from each order. Commission is charged on the listed price, so simply marking up your dine-in price by the commission rate undercharges you.",
    href: "/blog/delivery-platform-commission",
  },
  {
    term: "FIFO (First In, First Out)",
    def: "An inventory costing method where the oldest purchased stock is assumed to be used first. Recipes are costed against the oldest purchase price, which keeps remaining inventory valued closer to current prices.",
    href: "/blog/restaurant-inventory-costing-methods",
  },
  {
    term: "Food Cost Formula",
    def: "Food cost percentage equals ingredient cost divided by menu price, times 100. It's the single most-used equation in restaurant pricing, and the basis for setting a price from a target margin.",
    href: "/blog/food-cost-formula",
  },
  {
    term: "Food Cost Percentage",
    def: "The share of a dish's menu price that goes to its ingredients. Most full-service restaurants target 28–35%; the right number depends heavily on concept, since fine dining and fast casual sit at different ends of that range for good reason.",
    href: "/blog/food-cost-percentage-calculator",
  },
  {
    term: "Food Cost Variance",
    def: "The gap between what your recipes predict food cost should be and what your actual purchase and sales data show. Tracking variance weekly catches pricing and portioning problems before they show up as a bad month.",
    href: "/blog/food-cost-formula",
  },
  {
    term: "Ghost Kitchen",
    def: "A food preparation facility built for delivery-only orders, with no dine-in space. Because there's no front-of-house, pricing has to absorb full delivery commission without the offset of higher-margin dine-in sales.",
    href: "/blog/ghost-kitchen-pricing",
  },
  {
    term: "Gross Profit Margin",
    def: "Revenue minus cost of goods sold, expressed as a percentage of revenue. It only accounts for ingredients, so it typically looks healthy — the real test of profitability comes after labor and overhead are subtracted too.",
    href: "/blog/restaurant-profit-margin",
  },
  {
    term: "Labor Cost Percentage",
    def: "Total labor cost — wages, payroll tax, benefits — divided by revenue. Paired with food cost percentage, it makes up prime cost, the two largest and most controllable expenses in a restaurant.",
    href: "/blog/restaurant-kpis",
  },
  {
    term: "Menu Engineering",
    def: "Classifying every dish by profitability and popularity into four categories — Stars, Plowhorses, Puzzles, and Dogs — to decide what to promote, reprice, or drop. It turns a menu from a list of items into a set of deliberate profit decisions.",
    href: "/blog/menu-engineering",
  },
  {
    term: "Menu Markup",
    def: "The multiplier applied to ingredient cost to reach a menu price — for example, a 3x markup on a $4 dish gives a $12 price. Markup and food cost percentage describe the same relationship from opposite directions.",
    href: "/restaurant-markup-calculator",
  },
  {
    term: "Menu Mix",
    def: "The proportion of total sales each dish represents. A dish with a thin margin but a large share of sales can matter more to overall profit than a high-margin dish nobody orders.",
    href: "/blog/menu-engineering",
  },
  {
    term: "Menu Price Elasticity",
    def: "How much demand for a dish changes when its price changes. Low-elasticity items — signature dishes, items with no obvious competitor comparison — tolerate price increases better than commodity items like beverages.",
    href: "/blog/how-to-raise-menu-prices",
  },
  {
    term: "Net Profit Margin",
    def: "What's left of revenue after every cost — food, labor, rent, utilities, marketing — is subtracted. Full-service restaurants commonly net 3–6%, which is why small cost shifts have an outsized effect on whether the year is profitable.",
    href: "/blog/restaurant-profit-margin",
  },
  {
    term: "Par Level",
    def: "The target quantity of an ingredient to keep in stock between deliveries. Set correctly, it prevents both running out mid-service and over-ordering perishables that spoil before they're used.",
    href: "/blog/par-level-restaurant",
  },
  {
    term: "Plate Cost",
    def: "The total ingredient cost of everything on the plate for one serving, including garnish and sauce — not just the protein. It's the number you divide by target food cost percentage to get a menu price.",
    href: "/blog/how-to-cost-a-dish",
  },
  {
    term: "Portion Cost",
    def: "The ingredient cost of a single serving of one component — for example, the cost of the 6oz portion of salmon in a dish, before adding sides and garnish. Portion drift, where actual servings creep above spec, is one of the most common invisible sources of rising food cost.",
    href: "/blog/how-to-cost-a-dish",
  },
  {
    term: "Prime Cost",
    def: "Food cost plus labor cost combined, as a percentage of revenue. It's the fastest single diagnostic for restaurant health because it captures your two largest controllable expenses in one number, typically targeted at 55–65%.",
    href: "/blog/prime-cost-restaurant",
  },
  {
    term: "RevPASH",
    def: "Revenue Per Available Seat Hour — total revenue divided by seats multiplied by hours open. It accounts for both how much guests spend and how efficiently seats turn over, which check size or covers alone don't capture.",
    href: "/blog/restaurant-kpis",
  },
  {
    term: "Recipe Yield",
    def: "How much usable, servable food a recipe actually produces after trimming, cooking loss, and portioning — as opposed to the raw purchased weight you started with. Costing against purchase weight instead of yield is one of the most common recipe-costing errors.",
    href: "/blog/recipe-yield",
  },
  {
    term: "Service Charge",
    def: "A mandatory percentage added to a bill by the restaurant, distinct from a tip because the guest has no choice about it and the restaurant — not the server directly — decides how it's distributed.",
    href: "/blog/service-charge-vs-tip",
  },
  {
    term: "Table Turnover Rate",
    def: "How many times a table is seated with a new party during a service period. Higher turnover increases revenue per seat without raising prices, but pushing it too hard can hurt guest experience and average check.",
    href: "/blog/restaurant-kpis",
  },
  {
    term: "Weighted Average Cost",
    def: "An inventory costing method that blends all purchase prices for an ingredient into a single average, weighted by quantity. It smooths out price volatility and is simpler to maintain than tracking purchase layers individually.",
    href: "/blog/restaurant-inventory-costing-methods",
  },
  {
    term: "Yield Percentage",
    def: "The share of an ingredient's raw purchased weight that survives trimming and cooking to become servable food, expressed as a percentage. A 70% yield on a protein means 30% of what you bought is lost before it reaches the plate.",
    href: "/blog/what-is-yield-in-cooking",
  },
];

const SORTED = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));

export default function GlossaryPage() {
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
          <span className="text-sm text-gray-500">Glossary</span>
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
          <span className="text-gray-600">Glossary</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Pricing Glossary
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          Plain-language definitions for {SORTED.length} terms restaurant owners run into when
          costing dishes and setting menu prices. Each links to the full guide when there's more
          to say than a definition can cover.
        </p>

        {/* Jump nav */}
        <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-gray-100">
          {SORTED.map((t) => (
            <a
              key={t.term}
              href={`#${t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-xs font-semibold text-gray-500 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 px-2.5 py-1 rounded-full transition-colors"
            >
              {t.term}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {SORTED.map((t) => (
            <div
              key={t.term}
              id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="scroll-mt-20 border-b border-gray-100 pb-8 last:border-0"
            >
              <h2 className="text-xl font-black text-gray-900 mb-2">{t.term}</h2>
              <p className="text-gray-600 leading-relaxed mb-2">{t.def}</p>
              {t.href && (
                <Link href={t.href} className="text-sm font-semibold text-orange-500 hover:underline">
                  Full guide →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mt-14">
          <h2 className="text-2xl font-bold text-white mb-2">Put these numbers to work</h2>
          <p className="text-orange-100 mb-5">
            MenuPricer calculates food cost, prime cost, and margin for every dish automatically —
            no need to run the formulas by hand.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Try MenuPricer Free →
          </Link>
        </div>
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

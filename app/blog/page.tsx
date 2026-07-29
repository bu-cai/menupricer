import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Pricing & Food Cost Blog",
  description:
    "Guides on menu pricing, food cost calculation, and restaurant profitability. Free resources for restaurant owners, food truck operators, and caterers.",
  alternates: {
    canonical: "https://www.aimenupricer.com/blog",
    types: { "application/rss+xml": "https://www.aimenupricer.com/feed.xml" },
  },
  openGraph: {
    title: "Restaurant Pricing & Food Cost Blog — MenuPricer",
    description: "Free guides on menu pricing, food cost, and restaurant profitability.",
    url: "https://www.aimenupricer.com/blog",
  },
};

const POSTS = [
  {
    slug: "recipe-costing-without-recipes",
    title: "You Don't Have Written Recipes. Here's How to Cost Your Menu Anyway",
    description: "Most costing tools assume you already have written recipes — most working kitchens don't. Three practical ways to cost a menu when the recipes only exist in someone's head, two of which need no software at all.",
    category: "Food Cost",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "markup-vs-margin",
    title: "Markup vs Margin: The Mistake That Costs Restaurants Thousands",
    description: "Markup and margin are calculated from different bases and give very different numbers for the same dish. A 100% markup is only a 50% margin — confusing the two is one of the most expensive pricing mistakes a restaurant can make.",
    category: "Menu Pricing",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "menu-pricing-mistakes",
    title: "12 Menu Pricing Mistakes That Kill Independent Restaurants",
    description: "The recurring pricing mistakes that quietly erode restaurant profit — from copying competitor prices to never repricing after a menu change.",
    category: "Menu Pricing",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "how-often-to-reprice-menu",
    title: "How Often Should You Reprice Your Menu?",
    description: "A concrete schedule for reviewing restaurant menu prices — what to check weekly, monthly, and at each menu change, instead of repricing only when it feels overdue.",
    category: "Menu Pricing",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "portion-control-food-cost",
    title: "Portion Control: The Cheapest Way to Fix Food Cost",
    description: "Portion drift — servings that quietly creep above spec — is one of the most common and least noticed sources of rising food cost. How to catch it without buying anything new.",
    category: "Food Cost",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "supplier-price-increases",
    title: "Supplier Price Increases: Negotiate or Reprice?",
    description: "When a supplier raises prices, restaurants have three real options: absorb it, negotiate, or reprice the menu. A framework for deciding, dish by dish.",
    category: "Food Cost",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "how-to-price-a-restaurant-menu",
    title: "How to Price a Restaurant Menu: The Complete Guide",
    description: "Step-by-step formula for calculating food cost percentage, setting markup, and pricing every dish on your menu profitably — with examples.",
    category: "Menu Pricing",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "food-cost-formula",
    title: "Food Cost Formula: Calculate Food Cost Percentage the Right Way",
    description: "The exact formula restaurant owners use to calculate food cost percentage, with examples for every dish type and how to use it to set menu prices.",
    category: "Food Cost",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "restaurant-profit-margin",
    title: "What Is a Good Restaurant Profit Margin? (And How to Improve Yours)",
    description: "Average profit margins by restaurant type, the biggest cost drivers that eat into profit, and five strategies to improve your margin starting this week.",
    category: "Profitability",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "delivery-platform-commission",
    title: "DoorDash vs Uber Eats Commission: How Much Do They Actually Take?",
    description: "A complete breakdown of DoorDash, Uber Eats, and Grubhub commission rates, payment processing fees, and how to price your delivery menu to protect your margin.",
    category: "Delivery",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "recipe-yield",
    title: "What Is Recipe Yield? How to Calculate It (With Examples)",
    description: "Recipe yield is how much usable food a recipe actually produces after trimming, cooking, and portioning. Learn the formula, yield % by ingredient, and how it affects your food cost.",
    category: "Food Cost",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "how-to-cost-a-dish",
    title: "How to Cost a Dish: Step-by-Step Guide for Restaurant Owners",
    description: "The complete process for costing a restaurant dish — ingredient breakdown, yield adjustments, labor, overhead, and setting a menu price that protects your margins.",
    category: "Food Cost",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "how-to-raise-menu-prices",
    title: "How to Raise Menu Prices Without Losing Customers",
    description: "The step-by-step playbook for raising restaurant prices — when to do it, how much, which dishes first, and how to communicate it so your regulars stay.",
    category: "Menu Pricing",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "food-cost-percentage-by-restaurant-type",
    title: "Food Cost Percentage by Restaurant Type: 2026 Benchmarks",
    description: "What is a good food cost percentage? Benchmarks for fine dining, fast casual, food trucks, bakeries, coffee shops, and more — with industry averages and prime cost targets.",
    category: "Food Cost",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "menu-engineering",
    title: "Menu Engineering: How to Use the Four-Quadrant Framework to Increase Profit",
    description: "Menu engineering classifies every dish as a Star, Plowhorse, Puzzle, or Dog — and tells you exactly what to do with each. The complete framework for restaurant owners.",
    category: "Menu Pricing",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "how-to-write-menu-descriptions",
    title: "How to Write Menu Descriptions That Sell (With Examples)",
    description: "The words on your menu directly affect what customers order and what they pay. Learn the five types of selling words, the two-sentence formula, and see 5 before/after examples.",
    category: "Menu Design",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "catering-pricing-guide",
    title: "Catering Pricing Guide: How Much to Charge Per Person (2026)",
    description: "Per-person catering rates by event type, the food cost formula for catering, how to quote labor and equipment, and sample pricing for weddings, corporate, and social events.",
    category: "Catering",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "bakery-pricing-guide",
    title: "Bakery Pricing Guide: How to Price Baked Goods for Profit (2026)",
    description: "The bakery pricing formula — ingredient cost + labor + overhead — with sample prices for bread, croissants, cakes, pastries, and custom cake orders.",
    category: "Bakery",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "coffee-shop-menu-pricing",
    title: "Coffee Shop Menu Pricing: How to Price Every Drink for Profit (2026)",
    description: "Coffee shop pricing benchmarks for espresso drinks, cold brew, matcha, and food items — with food cost percentages and the formula to price any beverage profitably.",
    category: "Café",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "restaurant-menu-design-tips",
    title: "Restaurant Menu Design Tips: 12 Rules That Increase Sales (2026)",
    description: "12 proven menu design rules — golden triangle placement, anchor pricing, decoy items, removing $ signs, and more — backed by Cornell University research.",
    category: "Menu Design",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "food-cost-percentage-calculator",
    title: "Food Cost Percentage: Formula, Benchmarks & How to Calculate It",
    description: "How to calculate food cost percentage for any dish or restaurant — the exact formula, industry benchmarks by restaurant type, and step-by-step examples.",
    category: "Food Cost",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "what-is-yield-in-cooking",
    title: "What Is Yield in Cooking? Definition, Formula & Percentage Chart",
    description: "What does yield mean in cooking? The definition of recipe yield, how to calculate yield percentage, and a reference chart for common restaurant ingredients.",
    category: "Food Cost",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "ghost-kitchen-pricing",
    title: "What Is a Ghost Kitchen? Definition, Costs & Pricing Strategy",
    description: "What is a ghost kitchen? Everything you need to know — definition, startup costs, pricing strategy for delivery-only restaurants, and how to make one profitable.",
    category: "Menu Pricing",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "par-level-restaurant",
    title: "Par Level in Restaurants: What It Means and How to Set It",
    description: "What is par level in a restaurant? The definition, how to calculate par levels for your inventory, and how par levels connect to actual vs theoretical food cost.",
    category: "Food Cost",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "corkage-fee",
    title: "What Is a Corkage Fee? How Much to Charge & When to Waive It",
    description: "What is a corkage fee at a restaurant? Definition, typical corkage fee amounts, how to set your corkage policy, and when to waive it for the best customer experience.",
    category: "Menu Pricing",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "service-charge-vs-tip",
    title: "Service Charge vs Tip vs Gratuity: What Is the Difference?",
    description: "What is a service charge at a restaurant? How it differs from a tip and gratuity, whether you have to pay it, and what restaurant owners need to know about service charge policy.",
    category: "Menu Pricing",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "food-costing-template",
    title: "Food Costing Template: How to Build a Recipe Cost Spreadsheet (Free)",
    description: "A free food costing template for restaurants — what to include, how to set up your recipe cost spreadsheet, and how to use it to price every dish profitably.",
    category: "Food Cost",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "prime-cost-restaurant",
    title: "What Is Prime Cost? Restaurant Prime Cost Formula Explained",
    description: "What is prime cost in a restaurant? The prime cost formula (food cost + labor cost), what a good prime cost percentage is, and how to reduce it without cutting quality.",
    category: "Profitability",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "restaurant-profit-loss-statement",
    title: "Restaurant Profit and Loss Statement: A Simple Guide for Operators",
    description: "How to read and build a restaurant profit and loss statement — the key line items, what a restaurant chart of accounts looks like, and how to use your P&L to improve margins.",
    category: "Profitability",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "catering-cost-per-person",
    title: "Catering Cost Per Person: Prices for 50, 100 & 150 Guests (2026)",
    description: "How much does catering cost per person? Average catering prices for 50, 100, and 150 guests — by service style, event type, and what is included in the quote.",
    category: "Catering",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "food-truck-startup-costs",
    title: "Food Truck Startup Costs: How Much Does a Food Truck Cost in 2026?",
    description: "The full cost breakdown to start a food truck — vehicle, equipment, permits, and working capital — with low, mid, and high-range estimates and how to fund it.",
    category: "Food Truck",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "how-to-start-a-catering-business",
    title: "How to Start a Catering Business: Startup Costs, Pricing & Business Plan",
    description: "Step-by-step guide to starting a catering business — startup cost breakdown, how to price catering jobs, and what to include in your catering business plan.",
    category: "Catering",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "restaurant-bookkeeping",
    title: "Restaurant Bookkeeping 101: Track Food Costs, Labor & Profit the Right Way",
    description: "How to set up restaurant bookkeeping — chart of accounts, tracking food cost and labor, common mistakes operators make, and the key financial benchmarks to monitor.",
    category: "Profitability",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "restaurant-seasonality",
    title: "Restaurant Seasonality: How to Adjust Menu Prices When Ingredient Costs Change",
    description: "How seasonal ingredient price swings affect your food cost percentage, and four strategies to protect your margins — from seasonal menus to weekly cost monitoring.",
    category: "Menu Pricing",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "cost-to-open-a-restaurant",
    title: "How Much Does It Cost to Open a Restaurant? Full Cost Breakdown",
    description: "The full cost breakdown to open a restaurant in 2026 — by restaurant type, line-item startup costs from $189k to $1.1M, and strategies to reduce your opening investment.",
    category: "Profitability",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "restaurant-kpis",
    title: "8 Restaurant KPIs Every Owner Should Track",
    description: "The 8 key performance indicators that predict restaurant profitability — food cost %, labor cost %, prime cost, table turnover, average check, RevPASH, return rate, and net margin.",
    category: "Profitability",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "restaurant-budget-template",
    title: "Restaurant Budget Template: How to Forecast Food Cost, Labor & Revenue",
    description: "A complete monthly restaurant budget template — revenue, COGS, labor, and operating expenses — with target cost percentages and a weekly actual vs. budget review process.",
    category: "Profitability",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "restaurant-inventory-costing-methods",
    title: "Restaurant Inventory Costing Methods: FIFO vs Weighted Average Explained",
    description: "FIFO vs weighted average cost inventory accounting for restaurants — how each method works, how each affects your food cost percentage, and which to use.",
    category: "Food Cost",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "restaurant-failure-rate",
    title: "Restaurant Failure Rate: Why Most Restaurants Fail and How Pricing Fixes It",
    description: "The real restaurant failure rate (not the 90% myth), the six causes that drive most closures, and how getting menu pricing right from day one prevents most of them.",
    category: "Profitability",
    readTime: "7 min read",
    featured: false,
  },
];

const CATEGORIES = ["All", "Menu Pricing", "Food Cost", "Menu Design", "Catering", "Bakery", "Café", "Profitability", "Delivery", "Food Truck"];

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Restaurant Pricing & Food Cost Guides",
  url: "https://www.aimenupricer.com/blog",
  numberOfItems: POSTS.length,
  itemListElement: POSTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.aimenupricer.com/blog/${p.slug}`,
    name: p.title,
  })),
};

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Blog</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Restaurant Pricing<br /><span className="text-orange-500">& Food Cost Guides</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Practical guides on menu pricing, food cost calculation, and restaurant profitability — written for operators, not accountants.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <span key={cat} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${cat === "All" ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-500"}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Featured posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {featured.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group block bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{post.category}</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="font-black text-gray-900 text-lg leading-tight mb-2 group-hover:text-orange-600 transition-colors">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
              <p className="mt-4 text-xs font-bold text-orange-500 group-hover:underline">Read guide →</p>
            </Link>
          ))}
        </div>

        {/* Other posts */}
        <div className="space-y-4">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group flex items-start gap-5 bg-white border border-gray-200 hover:border-orange-300 hover:shadow-sm rounded-2xl p-5 transition-all">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{post.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
              </div>
              <span className="text-orange-400 font-bold shrink-0 group-hover:translate-x-1 transition-transform mt-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to price your menu?</h2>
          <p className="text-orange-100 mb-8">Stop reading about pricing — let AI calculate the right price for every dish in 30 seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · Free for 5 dishes</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
            <Link href="/compare" className="hover:text-orange-500">Compare</Link>
            <a href="/feed.xml" className="hover:text-orange-500">RSS Feed</a>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Pricing & Food Cost Blog — MenuPricer",
  description:
    "Guides on menu pricing, food cost calculation, and restaurant profitability. Free resources for restaurant owners, food truck operators, and caterers.",
  alternates: { canonical: "https://www.aimenupricer.com/blog" },
  openGraph: {
    title: "Restaurant Pricing & Food Cost Blog — MenuPricer",
    description: "Free guides on menu pricing, food cost, and restaurant profitability.",
    url: "https://www.aimenupricer.com/blog",
  },
};

const POSTS = [
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
];

const CATEGORIES = ["All", "Menu Pricing", "Food Cost", "Profitability", "Delivery"];

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
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
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

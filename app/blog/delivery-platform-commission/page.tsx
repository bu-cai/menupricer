import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "DoorDash vs Uber Eats Commission: How Much Do They Take? (2026)",
  description:
    "Complete breakdown of DoorDash, Uber Eats, and Grubhub restaurant commission rates, processing fees, and how to price your delivery menu to stay profitable.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/delivery-platform-commission" },
  openGraph: {
    title: "DoorDash vs Uber Eats Commission: How Much Do They Actually Take?",
    description: "Real commission rates for DoorDash, Uber Eats, and Grubhub — and how to price your menu to stay profitable on every platform.",
    url: "https://www.aimenupricer.com/blog/delivery-platform-commission",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Restaurant owner calculating delivery platform commissions" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "DoorDash vs Uber Eats Commission: How Much Do They Take? (2026)",
  description: "Complete breakdown of DoorDash, Uber Eats, and Grubhub restaurant commission rates and how to price delivery menus profitably.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/delivery-platform-commission",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Delivery Platform Commission", item: "https://www.aimenupricer.com/blog/delivery-platform-commission" },
  ],
};

export default function DeliveryPlatformCommissionPost() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Delivery</span>
          <span className="text-xs text-gray-400">5 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime="2026-07-01" className="text-xs text-gray-400">Updated July 2026</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          DoorDash vs Uber Eats Commission: How Much Do They Actually Take?
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Delivery platforms don't advertise their true cost to restaurants. Here's the complete breakdown of every fee — and how to calculate whether you're actually making money on delivery.
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Commission rates by platform (2026)</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Platform & Plan</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Commission</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Processing</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Total Fee</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Net on $15</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["DoorDash Basic", "25–30%", "2.9%", "27.9–32.9%", "$10.07–$10.82"],
                    ["DoorDash Plus", "20–25%", "2.9%", "22.9–27.9%", "$10.82–$11.57"],
                    ["DoorDash Premier", "15%", "2.9%", "17.9%", "$12.32"],
                    ["Uber Eats Standard", "25–30%", "3.0%", "28–33%", "$10.05–$10.80"],
                    ["Uber Eats Plus", "15%", "3.0%", "18%", "$12.30"],
                    ["Grubhub Basic", "15%", "3.05%", "18.05%", "$12.29"],
                    ["Grubhub Premium", "25%", "3.05%", "28.05%", "$10.79"],
                  ].map(([platform, comm, proc, total, net]) => (
                    <tr key={platform} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-gray-700">{platform}</td>
                      <td className="px-4 py-2.5 text-red-500 font-bold">{comm}</td>
                      <td className="px-4 py-2.5 text-gray-500">{proc}</td>
                      <td className="px-4 py-2.5"><span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full text-xs">{total}</span></td>
                      <td className="px-4 py-2.5 font-bold text-green-700">{net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400">Rates as of 2026. Verify with your account rep — rates vary by market and negotiated contract.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Are you actually making money on delivery?</h2>
            <p>Here's the math most restaurant owners don't do. Take a dish priced at $14 on your dine-in menu:</p>
            <div className="grid grid-cols-2 gap-4 my-5">
              <div className="bg-green-50 rounded-xl border border-green-100 p-5">
                <p className="text-xs font-bold text-green-600 uppercase mb-3">Dine-In</p>
                <div className="space-y-1 text-sm font-mono">
                  <p>Revenue: <span className="font-bold">$14.00</span></p>
                  <p className="text-gray-400">Food cost: −$4.00</p>
                  <p className="border-t border-green-100 pt-1 font-bold text-green-700">Gross profit: $10.00</p>
                  <p className="text-xs text-gray-400">71.4% gross margin</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl border border-red-100 p-5">
                <p className="text-xs font-bold text-red-600 uppercase mb-3">Delivery (DoorDash 25%)</p>
                <div className="space-y-1 text-sm font-mono">
                  <p>Revenue: $14.00</p>
                  <p className="text-red-500">Commission: −$3.50</p>
                  <p className="text-red-400">Processing: −$0.41</p>
                  <p className="text-gray-400">Food cost: −$4.00</p>
                  <p className="border-t border-red-100 pt-1 font-bold text-red-700">Gross profit: $6.09</p>
                  <p className="text-xs text-gray-400">43.5% gross margin</p>
                </div>
              </div>
            </div>
            <p>That's $3.91 less gross profit per dish on delivery — for the same food, same ingredients, same kitchen labor. Multiply that by 50 delivery orders per day and you're leaving $195/day ($71,175/year) on the table.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to price your delivery menu to stay profitable</h2>
            <p>The solution is a separate delivery menu priced 18–25% higher than your dine-in menu. Here's the formula:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400">
              <p>Delivery Price = Dine-In Price ÷ (1 − Commission Rate)</p>
              <p className="text-gray-500 mt-2 text-xs">Example: $14 ÷ (1 − 0.25) = $18.67 → round to $18.99</p>
            </div>
            <p>At $18.99 on DoorDash with 25% commission: $18.99 × 0.75 = $14.24 net — slightly above your dine-in revenue. This is what "break-even on delivery" looks like.</p>
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-5 mt-5">
              <p className="text-sm font-bold text-blue-700 mb-2">Platform tip: All major platforms allow separate delivery menus</p>
              <p className="text-sm text-blue-600">DoorDash, Uber Eats, and Grubhub all let you set different prices for delivery vs. dine-in. This is the standard practice — not a workaround. Customers on delivery apps have accepted higher prices; they know delivery costs more.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">DoorDash vs Uber Eats: Which is better for restaurants?</h2>
            <div className="space-y-4 mt-4">
              {[
                { platform: "DoorDash", pros: ["Largest market share in most US cities", "Premier plan at 15% available", "DashPass drives volume"], cons: ["Base plan commission is 25–30%", "Annual contract for Premier plan", "Customer service varies by market"] },
                { platform: "Uber Eats", pros: ["Uber One subscribers = frequent orderers", "Plus plan offers 15% commission", "Strong international presence"], cons: ["Standard plan is 25–30%", "Higher processing fee (3%)", "More variable pricing structures"] },
                { platform: "Grubhub", pros: ["Lower minimum commission on Basic (15%)", "Strong in NYC and Chicago", "Grubhub+  drives loyalty"], cons: ["Smaller market share vs DD/UE", "Basic plan has geographic limits", "Marketing support less robust"] },
              ].map((p) => (
                <div key={p.platform} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-black text-gray-900 mb-3">{p.platform}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-green-600 mb-2">Pros</p>
                      <ul className="space-y-1">{p.pros.map((pro) => <li key={pro} className="text-xs text-gray-500 flex items-start gap-1.5"><span className="text-green-400 shrink-0">✓</span>{pro}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-500 mb-2">Cons</p>
                      <ul className="space-y-1">{p.cons.map((con) => <li key={con} className="text-xs text-gray-500 flex items-start gap-1.5"><span className="text-red-300 shrink-0">–</span>{con}</li>)}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5">Most restaurants list on 2–3 platforms simultaneously. The incremental volume from a second platform usually outweighs the operational complexity — as long as you've priced each menu correctly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5 ways to protect margin on delivery</h2>
            <div className="space-y-3">
              {[
                { tip: "Price delivery menus 18–25% higher than dine-in", desc: "The single most impactful change. Set it once in each platform's menu editor." },
                { tip: "Negotiate your commission rate", desc: "High-volume restaurants ($15K+/month on a single platform) can often negotiate 2–5% lower commission rates. Call your account rep." },
                { tip: "Cut low-margin items from your delivery menu", desc: "Items with food cost above 35% become money-losers on delivery. Remove them or adjust delivery pricing specifically." },
                { tip: "Add packaging costs to delivery pricing", desc: "Delivery requires better packaging ($0.50–$1.50/order). Factor this into your delivery price increase." },
                { tip: "Use delivery data to fix your dine-in pricing", desc: "Delivery platforms show you exactly what sells and at what price. If a dish moves well at $18 delivery, consider repricing the dine-in version from $14 to $15–$16." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <span className="text-orange-500 font-black text-sm shrink-0 mt-0.5">{i + 1}.</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.tip}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Calculate your delivery break-even price</h2>
          <p className="text-orange-100 mb-6 text-sm">MenuPricer shows you the right delivery price for every dish — with DoorDash and Uber Eats commission offset built in.</p>
          <Link href="/delivery-platform-calculator" className="inline-block bg-white text-orange-600 font-black px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg shadow-orange-600/20">
            Open Delivery Calculator →
          </Link>
          <p className="text-orange-200 text-xs mt-3">Free · No sign-up required</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Menu Pricing</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu →</p>
            </Link>
            <Link href="/delivery-platform-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Delivery Commission Calculator →</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/delivery-platform-calculator" className="hover:text-orange-500">Delivery Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Page Not Found — MenuPricer",
  robots: { index: false, follow: false },
};

const TOOLS = [
  { href: "/food-cost-calculator", label: "Food Cost Calculator" },
  { href: "/recipe-cost-calculator", label: "Recipe Cost Calculator" },
  { href: "/restaurant-profit-calculator", label: "Profit Calculator" },
  { href: "/delivery-platform-calculator", label: "Delivery Calculator" },
  { href: "/compare", label: "Compare vs Alternatives" },
  { href: "/blog", label: "Pricing Blog" },
  { href: "/about", label: "About MenuPricer" },
  { href: "/menu-pricing", label: "Menu Pricing by Type" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 text-center">
      <Link href="/" className="flex items-center gap-2 mb-10">
        <LogoIcon size={32} />
        <span className="font-black text-gray-900 tracking-tight text-xl">
          Menu<span className="text-orange-500">Pricer</span>
        </span>
      </Link>

      <p className="text-6xl font-black text-orange-500 mb-4">404</p>
      <h1 className="text-2xl font-black text-gray-900 mb-3">Page not found</h1>
      <p className="text-gray-500 text-base max-w-sm mb-10">
        This page doesn't exist. Try one of our free tools below, or head back to the AI pricing tool.
      </p>

      <Link
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-sm mb-10"
      >
        Back to AI Menu Pricer →
      </Link>

      <div className="w-full max-w-md">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Free Calculators</p>
        <div className="grid grid-cols-2 gap-2">
          {TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors text-left font-medium"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

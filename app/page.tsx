"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import CostForm from "@/components/CostForm";
import PricingResult from "@/components/PricingResult";
import ProfitChart from "@/components/ProfitChart";
import HistoryPanel, { HistoryItem } from "@/components/HistoryPanel";
import RecipeLibrary, { RecipeItem } from "@/components/RecipeLibrary";
import { CostData } from "@/lib/calculations";
import { formatPrice } from "@/lib/currency";
import { LanguageProvider, useLang } from "@/lib/LanguageContext";
import { CurrencyProvider, useCurrency } from "@/lib/CurrencyContext";
import { Currency, SYMBOLS } from "@/lib/currency";
import { t, getFaq } from "@/lib/i18n";
import OnboardingModal from "@/components/OnboardingModal";
import AuthButton from "@/components/AuthButton";
import MenuView from "@/components/MenuView";
import { MenuItem, MenuTier, loadMenu, saveMenu } from "@/lib/menuStore";
import { exportMenuPdf } from "@/lib/exportMenuPdf";
import LogoIcon from "@/components/LogoIcon";
import UpgradeModal from "@/components/UpgradeModal";
import LoginModal from "@/components/LoginModal";
import { useSession } from "next-auth/react";
import {
  cloudLoadMenus, cloudSaveMenus,
  cloudLoadHistory, cloudSaveHistory,
  cloudLoadRecipes, cloudSaveRecipes,
  mergeLocalToCloud,
} from "@/lib/cloudSync";

const FORM_ID = "cost-form-main";

function parsePrices(content: string): number[] {
  const re = /Price:\s*\$?([\d.]+)/g;
  const results: number[] = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    const v = parseFloat(m[1]);
    if (!isNaN(v) && v > 0) results.push(v);
  }
  return results.slice(0, 3);
}

function ExamplePreview() {
  const { lang } = useLang();
  const exampleTiers = [
    { name: "Budget", price: 6.99, margin: 72 },
    { name: "Standard", price: 8.99, margin: 79, recommended: true },
    { name: "Premium", price: 12.99, margin: 86 },
  ];
  return (
    <div className="relative bg-white rounded-2xl border border-dashed border-orange-200 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-3">
        <span className="text-3xl">👆</span>
        <p className="text-sm font-semibold text-gray-500">{t("emptyHint", lang)}</p>
      </div>
      <div className="opacity-30 select-none pointer-events-none">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🤖</span>
          <h2 className="text-base font-bold text-gray-800">AI Pricing Analysis</h2>
          <span className="ml-auto text-xs text-gray-400">{t("exampleLabel", lang)}</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {exampleTiers.map((tier, i) => (
            <div key={i} className={`relative rounded-xl border-2 p-3 text-center ${tier.recommended ? "border-orange-300 bg-orange-50" : "border-gray-200 bg-gray-50"}`}>
              {tier.recommended && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Best</span>
              )}
              <p className="text-xs text-gray-500 mb-1">{tier.name}</p>
              <p className="text-xl font-black text-gray-900">${tier.price}</p>
              <p className="text-xs font-semibold text-orange-500 mt-1">Margin {tier.margin}%</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-2.5 bg-gray-100 rounded-full w-3/4" />
          <div className="h-2.5 bg-gray-100 rounded-full w-full" />
          <div className="h-2.5 bg-gray-100 rounded-full w-2/3" />
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const faqItems = getFaq(lang);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8 reveal">{t("faqTitle", lang)}</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`reveal bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-sm`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors"
              >
                <span>{item.q}</span>
                <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${open === i ? "rotate-180" : ""}`}>▾</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3"
                  style={{ animation: "slide-up 200ms ease both" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-6 leading-relaxed">
          {lang === "ZH" ? (
            <>行业食材成本区间参考自{" "}
              <a href="https://restaurant.org/research-and-media/research/restaurant-economic-insights/economic-indicators/food-costs/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                全美餐饮协会 (National Restaurant Association)
              </a>{" "}的行业经济指标数据。</>
          ) : (
            <>Industry food cost ranges referenced from the{" "}
              <a href="https://restaurant.org/research-and-media/research/restaurant-economic-insights/economic-indicators/food-costs/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                National Restaurant Association
              </a>{" "}economic indicators.</>
          )}
        </p>
      </div>
    </section>
  );
}

/* ── Navbar ─────────────────────────────────── */
function Navbar({ activeTab, setActiveTab, menuCount }: {
  activeTab: "pricer" | "menu";
  setActiveTab: (t: "pricer" | "menu") => void;
  menuCount: number;
}) {
  const { lang, setLang } = useLang();
  const { currency, setCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-gray-100 transition-all duration-300 ${scrolled ? "navbar-scrolled" : "bg-white/90 backdrop-blur-md"}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
          <LogoIcon size={28} />
          <span className="font-black text-gray-900 tracking-tight text-lg">
            Menu<span className="text-orange-500">Pricer</span>
          </span>
        </div>

        {/* Tab nav */}
        <nav className="hidden sm:flex items-center gap-1 flex-1">
          {(["pricer", "menu"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-1.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === tab
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab === "pricer" ? t("tabPricer", lang) : (
                <span className="flex items-center gap-1.5">
                  {t("tabMenu", lang)}
                  {menuCount > 0 && (
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      {menuCount}
                    </span>
                  )}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Currency — hidden on mobile */}
          <div className="hidden sm:block relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="appearance-none text-xs font-bold pl-2.5 pr-6 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
            >
              {(["USD", "CNY", "EUR", "GBP", "CAD", "AUD"] as Currency[]).map((c) => (
                <option key={c} value={c}>
                  {SYMBOLS[c]} {c}
                </option>
              ))}
            </select>
          </div>
          {/* Language */}
          <button
            onClick={() => setLang(lang === "EN" ? "ZH" : "EN")}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
          >
            {lang === "EN" ? "中文" : "EN"}
          </button>
          <AuthButton />
        </div>
      </div>

      {/* Mobile tab nav — the desktop nav above is hidden below sm, so this is
          the only way to reach "My Menu" on a phone. */}
      <nav className="sm:hidden flex items-center gap-1 px-4 pb-2 -mt-1">
        {(["pricer", "menu"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeTab === tab
                ? "text-orange-600 bg-orange-50"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            {tab === "pricer" ? t("tabPricer", lang) : (
              <span className="flex items-center gap-1.5">
                {t("tabMenu", lang)}
                {menuCount > 0 && (
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    {menuCount}
                  </span>
                )}
              </span>
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}

/* ── Hero Mockup ─────────────────────────────── */
function HeroMockup() {
  const tiers = [
    { label: "Budget", price: "$8.99", margin: 65, dim: true },
    { label: "Standard", price: "$11.99", margin: 74, recommended: true },
    { label: "Premium", price: "$15.99", margin: 80, dim: true },
  ];
  const costs = [
    { label: "Ingredients", pct: 52, color: "bg-orange-400" },
    { label: "Labor", pct: 20, color: "bg-blue-300" },
    { label: "Overhead", pct: 10, color: "bg-purple-300" },
  ];
  return (
    <div className="relative select-none" style={{ animation: "hero-sub 800ms ease 400ms both" }}>
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/40 to-amber-100/20 rounded-3xl blur-3xl" />

      {/* Browser window */}
      <div className="relative bg-white rounded-2xl border border-gray-200/80 shadow-2xl shadow-orange-100/50 overflow-hidden">

        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 bg-white rounded-md px-2.5 py-1 text-[11px] text-gray-400 border border-gray-200 flex items-center gap-1.5">
            <LogoIcon size={10} />
            <span>aimenupricer.com</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Dish header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🍜</span>
              <div>
                <p className="text-xs font-black text-gray-900">Kung Pao Chicken</p>
                <p className="text-[10px] text-gray-400">Total cost: $3.15</p>
              </div>
            </div>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              AI Done
            </span>
          </div>

          {/* Cost breakdown bar */}
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1">Cost Breakdown</p>
            <div className="flex rounded-full overflow-hidden h-2 gap-px">
              {costs.map((c) => (
                <div key={c.label} className={`${c.color} h-full`} style={{ width: `${c.pct}%` }} />
              ))}
              <div className="bg-green-400 h-full flex-1" />
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              {costs.map((c) => (
                <span key={c.label} className="flex items-center gap-1 text-[9px] text-gray-400">
                  <span className={`w-1.5 h-1.5 rounded-full ${c.color} inline-block`} />
                  {c.label}
                </span>
              ))}
              <span className="flex items-center gap-1 text-[9px] text-green-600 font-semibold ml-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Profit
              </span>
            </div>
          </div>

          {/* Pricing tiers */}
          <div className="grid grid-cols-3 gap-1.5">
            {tiers.map((t) => (
              <div key={t.label} className={`relative rounded-xl border-2 p-2 text-center ${
                t.recommended
                  ? "border-orange-400 bg-gradient-to-b from-orange-50 to-white shadow-sm"
                  : "border-gray-100 bg-gray-50/80"
              }`}>
                {t.recommended && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    ★ BEST
                  </span>
                )}
                <p className={`text-[9px] font-bold mb-0.5 ${t.recommended ? "text-orange-500" : "text-gray-400"}`}>{t.label}</p>
                <p className={`text-base font-black leading-tight ${t.recommended ? "text-gray-900" : "text-gray-400"}`}>{t.price}</p>
                {/* Mini margin bar */}
                <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${t.recommended ? "bg-orange-400" : "bg-gray-300"}`}
                    style={{ width: `${t.margin}%` }}
                  />
                </div>
                <p className={`text-[9px] font-bold mt-0.5 ${t.recommended ? "text-orange-500" : "text-gray-400"}`}>{t.margin}% margin</p>
              </div>
            ))}
          </div>

          {/* AI menu copy preview */}
          <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100">
            <p className="text-[9px] font-black text-orange-500 uppercase tracking-wide mb-1.5">✦ AI Menu Copy</p>
            <p className="text-[10px] text-gray-600 leading-relaxed">
              &ldquo;Wok-tossed chicken with roasted peanuts in a&nbsp;
            </p>
            <div className="flex gap-1 mt-1">
              <div className="h-1.5 bg-gray-200 rounded-full w-3/4" />
            </div>
            <div className="flex gap-1 mt-1">
              <div className="h-1.5 bg-gray-200 rounded-full w-1/2" />
              <span className="inline-block w-0.5 h-3 bg-orange-400 animate-pulse -mt-0.5" />
            </div>
          </div>

          {/* Delivery row */}
          <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">🛵</span>
              <span className="text-[10px] font-semibold text-blue-700">DoorDash price</span>
            </div>
            <span className="text-[11px] font-black text-blue-700">$14.99</span>
            <span className="text-[9px] text-blue-500">+25% offset</span>
          </div>
        </div>
      </div>

      {/* Floating badge — food cost readout for the Standard tier shown above */}
      <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-2xl px-3 py-2 shadow-xl shadow-gray-200/60 flex items-center gap-2.5">
        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-sm">✓</div>
        <div>
          <p className="text-[9px] text-gray-400 leading-none">Food cost</p>
          <p className="text-sm font-black text-gray-900 leading-tight">26% · on target</p>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="absolute -top-3 -left-3 bg-orange-500 text-white rounded-xl px-2.5 py-1.5 shadow-lg shadow-orange-200 flex items-center gap-1.5">
        <span className="text-xs">⚡</span>
        <span className="text-[10px] font-black">30 seconds</span>
      </div>
    </div>
  );
}

/* ── Homepage FAQ schema ─────────────────────── */
const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good food cost percentage for a restaurant?",
      acceptedAnswer: { "@type": "Answer", text: "A good food cost percentage is 28–35% of the menu price. Fine dining can go up to 38%; fast casual should stay below 30%. MenuPricer calculates this automatically for every dish." },
    },
    {
      "@type": "Question",
      name: "How do I calculate menu pricing?",
      acceptedAnswer: { "@type": "Answer", text: "Divide your ingredient cost by your target food cost percentage. If a dish costs $4 to make and you want 30% food cost, the menu price is $4 ÷ 0.30 = $13.33. MenuPricer automates this and shows Budget, Standard, and Premium price tiers." },
    },
    {
      "@type": "Question",
      name: "Do I need written recipes to use MenuPricer?",
      acceptedAnswer: { "@type": "Answer", text: "No. MenuPricer drafts an ingredient list and typical quantities from the dish name alone, which you then correct to match how your kitchen actually cooks. This is the difference from tools that require you to import existing recipe cards before producing any number." },
    },
    {
      "@type": "Question",
      name: "How much does DoorDash charge restaurants?",
      acceptedAnswer: { "@type": "Answer", text: "DoorDash charges 15–30% commission depending on plan (Basic: 25–30%, Plus: 20–25%, Premier: 15%), plus ~2.9% payment processing. MenuPricer calculates a delivery-adjusted price that offsets these fees." },
    },
    {
      "@type": "Question",
      name: "Is MenuPricer free to use?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. MenuPricer is free for up to 5 dishes with no credit card required. The Pro plan ($9/month or $79/year) unlocks unlimited dishes, batch pricing, and PDF export." },
    },
    {
      "@type": "Question",
      name: "What currencies does MenuPricer support?",
      acceptedAnswer: { "@type": "Answer", text: "MenuPricer supports USD, CNY (Chinese Yuan), EUR, GBP (British Pound), CAD (Canadian Dollar), and AUD (Australian Dollar). You can switch currencies from the settings panel at the top of the page." },
    },
    {
      "@type": "Question",
      name: "How do I price a dish for delivery vs. dine-in?",
      acceptedAnswer: { "@type": "Answer", text: "Set your dine-in price based on food cost + target margin. Then add 15–25% for delivery platforms to offset commissions. MenuPricer shows both prices in every pricing report." },
    },
  ],
};

/* ── How We Compare ──────────────────────────── */
function HowWeCompare() {
  const { lang } = useLang();
  const ZH = lang === "ZH";

  const columns = [
    {
      name: ZH ? "表格" : "Spreadsheets",
      icon: "📊",
      good: ZH ? "完全可控，零成本" : "Total control, zero cost",
      bad: ZH
        ? "食材涨价后没人会回去更新，几个月后数字就失真了"
        : "Nobody goes back to update them when costs move, so the numbers quietly go stale",
      highlight: false,
    },
    {
      name: ZH ? "通用 AI 助手" : "General AI chatbots",
      icon: "💬",
      good: ZH ? "灵活，什么都能问" : "Flexible, will answer anything",
      bad: ZH
        ? "不记得你的菜单，同一道菜问两次可能给出不同答案，也无法在成本变动时提醒你"
        : "They do not remember your menu, can give different answers to the same dish twice, and cannot tell you when costs shift",
      highlight: false,
    },
    {
      name: ZH ? "企业级库存系统" : "Enterprise inventory platforms",
      icon: "🏢",
      good: ZH
        ? "功能最全面，适合有专职财务的连锁"
        : "The most complete feature set, right for chains with dedicated finance staff",
      bad: ZH
        ? "上线前要先花数周把配方和食材库录进去，年费对独立小店往往不划算"
        : "Weeks of recipe and ingredient data entry before the first number, at an annual cost most independents cannot justify",
      highlight: false,
    },
    {
      name: "MenuPricer",
      icon: "⚡",
      good: ZH
        ? "输入菜名就能开始，配方存一次，成本变了自动重算"
        : "Starts from a dish name, saves the recipe once, and recalculates when costs change",
      bad: ZH
        ? "专注定价，不做采购和库存管理——需要全套库存系统的话，上面第三类更合适"
        : "Focused on pricing only — no purchasing or stock management. If you need full inventory control, the third column is the better fit",
      highlight: true,
    },
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            {ZH ? "如何选择" : "Honest comparison"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {ZH ? "和你现在用的方式比" : "How this compares to what you use today"}
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            {ZH
              ? "每种方式都有它合适的场景。下面也写了 MenuPricer 不适合的情况。"
              : "Each option is genuinely right for someone. Including where MenuPricer is not the answer."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl p-5 flex flex-col gap-4 border transition-all ${
                c.highlight
                  ? "bg-white border-orange-300 shadow-md shadow-orange-100"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{c.icon}</span>
                <p
                  className={`text-sm font-black leading-tight ${
                    c.highlight ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {c.name}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-green-600 uppercase tracking-wide mb-1">
                  {ZH ? "强在哪" : "Where it wins"}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.good}</p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">
                  {ZH ? "弱在哪" : "Where it falls short"}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.bad}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          {ZH
            ? "想看具体产品的逐项对比？"
            : "Want a named, feature-by-feature breakdown?"}{" "}
          <a href="/compare" className="text-orange-500 font-semibold hover:underline">
            {ZH ? "查看详细对比 →" : "See the full comparisons →"}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ── Hero ────────────────────────────────────── */
function Hero({ onStart }: { onStart?: () => void }) {
  const { lang } = useLang();
  const ZH = lang === "ZH";

  const handleCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
    onStart?.();
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-orange-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase"
              style={{ animation: "hero-badge 600ms ease both" }}>
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              {ZH ? "全球餐厅老板专属" : "FOR RESTAURANT OWNERS WORLDWIDE"}
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4"
              style={{ animation: "hero-title 700ms ease 150ms both" }}>
              <span className="sr-only">MenuPricer: </span>
              {ZH ? (
                <>30 秒给每道菜定价<br /><span className="text-orange-500">哪怕你从没写下过配方</span></>
              ) : (
                <>Price Every Dish in 30 Seconds<br /><span className="text-orange-500">Even the Ones You Never Wrote Down</span></>
              )}
            </h1>

            {/* Brand line — visible, small: keeps H1/title/schema brand name consistent for AI/SEO */}
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              MenuPricer {ZH ? "· AI 菜单定价工具" : "· AI Menu Pricing Tool"}
            </p>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 leading-relaxed mb-3"
              style={{ animation: "hero-sub 700ms ease 300ms both" }}>
              {ZH
                ? "输入菜名，AI 自动生成食材成本拆解，并给出 3 档建议售价和真实利润率。不需要配方卡，不需要表格，不需要逐条录入。"
                : "Type a dish name. The AI builds the ingredient cost breakdown and gives you 3 price tiers with your real margin. No recipe cards, no spreadsheets, no data entry."}
            </p>

            {/* Social proof */}
            <p className="text-sm text-gray-400 mb-8" style={{ animation: "hero-sub 700ms ease 400ms both" }}>
              {ZH ? "只需一个菜名 · 无需配方卡 · 无需先搭建食材库" : "Works from a dish name alone · No recipe cards · No ingredient database to build first"}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3"
              style={{ animation: "hero-sub 700ms ease 500ms both" }}>
              <button
                className="btn-primary bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-orange-200"
                onClick={handleCta}
              >
                {ZH ? "免费给第一道菜定价 →" : "Price My First Dish Free →"}
              </button>
              <a href="#how-it-works"
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors px-4 py-3.5">
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs">▶</span>
                {ZH ? "查看演示" : "See how it works"}
              </a>
            </div>

            {/* Trust badges — 2×2 on mobile, 4-col on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 mt-6 text-xs text-gray-400"
              style={{ animation: "hero-sub 700ms ease 600ms both" }}>
              {[t("trustFree", lang), t("trustNoCard", lang), t("trustAI", lang), t("trustTiers", lang)].map(b => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>

          {/* Right: product mockup */}
          <div className="hidden lg:block">
            <HeroMockup />
          </div>
        </div>
      </div>

      {/* How it works anchor */}
      <div id="how-it-works" />

      {/* How it works strip */}
      <div className="relative border-t border-gray-100 bg-gray-50/60">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Mobile: horizontal snap scroll — Desktop: 3-col grid */}
          <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-2 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-none"
            style={{ scrollbarWidth: "none" }}>

            {/* Step 1 — Enter costs */}
            <div className="flex flex-col gap-3 min-w-[80vw] sm:min-w-0 snap-start">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-2.5">
                {/* Mini dish name input */}
                <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <span className="text-[10px] text-gray-400 shrink-0">Dish</span>
                  <span className="text-[11px] font-bold text-gray-700 truncate">Kung Pao Chicken</span>
                </div>
                {/* Mini ingredient rows */}
                {[["Chicken breast", "$2.40"], ["Peanuts", "$0.30"], ["Sauce mix", "$0.45"]].map(([name, cost]) => (
                  <div key={name} className="flex items-center justify-between gap-2">
                    <div className="h-2 bg-gray-100 rounded-full flex-1" style={{ maxWidth: "55%" }} />
                    <span className="text-[10px] font-bold text-orange-500">{cost}</span>
                  </div>
                ))}
                {/* Mini total */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400">Total cost</span>
                  <span className="text-[11px] font-black text-gray-800">$3.15</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{ZH ? "输入食材成本" : "Enter Costs"}</p>
                  <p className="text-xs text-gray-500">{ZH ? "填写食材、人工和包装成本" : "Add ingredients, labor & overhead"}</p>
                </div>
              </div>
            </div>

            {/* Step 2 — AI analyzing */}
            <div className="flex flex-col gap-3 min-w-[80vw] sm:min-w-0 snap-start">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-[10px]">🤖</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">AI analyzing…</span>
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-1 h-1 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </span>
                </div>
                {/* Skeleton lines */}
                {[80, 100, 65, 90, 55].map((w, i) => (
                  <div key={i} className="h-2 bg-gray-100 rounded-full animate-pulse" style={{ width: `${w}%`, animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{ZH ? "AI 分析定价" : "AI Analyzes"}</p>
                  <p className="text-xs text-gray-500">{ZH ? "AI 参考市场行情计算最优价格" : "AI benchmarks against market rates"}</p>
                </div>
              </div>
            </div>

            {/* Step 3 — Results */}
            <div className="flex flex-col gap-3 min-w-[80vw] sm:min-w-0 snap-start">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-2.5">
                {/* Mini tier cards */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: "Budget", price: "$8.99", margin: "65%", highlight: false },
                    { label: "Standard", price: "$11.99", margin: "74%", highlight: true },
                    { label: "Premium", price: "$15.99", margin: "80%", highlight: false },
                  ].map(t => (
                    <div key={t.label} className={`rounded-lg border-2 p-1.5 text-center ${t.highlight ? "border-orange-400 bg-orange-50" : "border-gray-100 bg-gray-50"}`}>
                      <p className={`text-[8px] font-semibold ${t.highlight ? "text-orange-500" : "text-gray-400"}`}>{t.label}</p>
                      <p className={`text-[11px] font-black ${t.highlight ? "text-gray-900" : "text-gray-500"}`}>{t.price}</p>
                      <p className={`text-[8px] font-bold ${t.highlight ? "text-orange-400" : "text-gray-400"}`}>{t.margin}</p>
                    </div>
                  ))}
                </div>
                {/* Mini text lines */}
                <div className="space-y-1.5 pt-1">
                  <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
                  <div className="h-1.5 bg-gray-100 rounded-full w-full" />
                  <div className="h-1.5 bg-gray-100 rounded-full w-2/3" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{ZH ? "获得定价方案" : "Get Your Price"}</p>
                  <p className="text-xs text-gray-500">{ZH ? "3档定价 + 利润率 + 菜单文案" : "3 tiers + margin + menu copy"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────── */
function Testimonials() {
  const { lang } = useLang();
  const ZH = lang === "ZH";
  const useCases = [
    {
      icon: "📝",
      color: "bg-orange-500",
      title: ZH ? "你的配方只在脑子里" : "Your recipes live in your head",
      problem: ZH ? "没有写下来的配方" : "No written recipe cards",
      text: ZH
        ? "大多数成本核算工具的第一步是「导入你的配方」——可如果配方从来没被写下来过，这一步就走不通。输入菜名，AI 直接生成食材清单和用量估算，你再按自己的实际做法调整。"
        : "Most costing tools start with \"import your recipes\" — which stalls immediately if they were never written down. Type the dish name instead, and the AI drafts the ingredient list and quantities for you to adjust to how you actually make it.",
    },
    {
      icon: "🛵",
      color: "bg-blue-500",
      title: ZH ? "外卖抽成吃掉了利润" : "Delivery commission eats the margin",
      problem: ZH ? "堂食价直接上外卖" : "Dine-in prices on delivery apps",
      text: ZH
        ? "把堂食价加 30% 放到外卖平台是错的——因为平台佣金会对加价后的价格再抽一次。正确做法是从「你需要到手多少」倒推挂牌价，这一步工具会替你算。"
        : "Marking your dine-in price up by 30% for delivery does not work, because the commission applies to the marked-up price too. The right move is to work backwards from the payout you need — the tool does that arithmetic for you.",
    },
    {
      icon: "📈",
      color: "bg-green-600",
      title: ZH ? "食材又涨价了" : "Ingredient costs moved again",
      problem: ZH ? "表格没人回去更新" : "Nobody updates the spreadsheet",
      text: ZH
        ? "表格的问题从来不是难用，而是食材涨价后没人会回去改。存下配方后，改一次原料价格，所有用到它的菜品会同时重算，并标出哪些已经跌破你的目标成本线。"
        : "The problem with spreadsheets was never that they are hard to build — it is that nobody goes back to update them. Save a recipe once, change an ingredient price, and every dish using it recalculates, flagging the ones that fell below your target.",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            {ZH ? "常见场景" : "WHERE PRICING BREAKS DOWN"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {ZH ? "三个让定价失控的时刻" : "Three moments where menu pricing goes wrong"}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {ZH ? "每一个，MenuPricer 都有对应的解法" : "Each one is a specific thing MenuPricer is built to handle"}
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0"
          style={{ scrollbarWidth: "none" }}>
          {useCases.map((u, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm min-w-[80vw] md:min-w-0 snap-start"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon + problem tag */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${u.color} text-white text-base flex items-center justify-center shrink-0`}>
                  {u.icon}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{u.problem}</span>
              </div>
              {/* Title */}
              <p className="text-base font-black text-gray-900 leading-snug">{u.title}</p>
              {/* Explanation */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{u.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom fact bar — verifiable product capabilities only */}
        <div className="mt-10 reveal">
          <div className="bg-orange-50 rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "5", label: ZH ? "免费定价菜品数" : "Dishes free, no card" },
              { n: "3", label: ZH ? "每道菜定价档位" : "Price tiers per dish" },
              { n: "30s", label: ZH ? "从菜名到定价" : "Dish name to price" },
              { n: "3", label: ZH ? "支持货币" : "Currencies supported" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-orange-500">{n}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HomeContent ─────────────────────────────── */
function HomeContent() {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const { data: session } = useSession();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [ingredientCost, setIngredientCost] = useState(0);
  const [breakdown, setBreakdown] = useState("");
  const [currentDishName, setCurrentDishName] = useState("");
  const [liveTotal, setLiveTotal] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  const [loadedRecipe, setLoadedRecipe] = useState<CostData | undefined>();
  const [isEstimate, setIsEstimate] = useState(false);
  const [activeTab, setActiveTab] = useState<"pricer" | "menu">("pricer");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuToast, setMenuToast] = useState(false);
  const [syncToast, setSyncToast] = useState(false);
  const [isSharedView, setIsSharedView] = useState(false);
  const [userPlan, setUserPlan] = useState<"free" | "pro">("free");
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const syncedRef = useRef(false);

  // Fetch user plan
  useEffect(() => {
    fetch("/api/user/plan").then(r => r.json()).then(d => setUserPlan(d.plan ?? "free"));
  }, [session]);

  // Show success toast after Stripe redirect
  useEffect(() => {
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("upgraded") === "1") {
      setUserPlan("pro");
      setSyncToast(true);
      setTimeout(() => setSyncToast(false), 4000);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  // Initial load from cloud (if logged in) or localStorage
  useEffect(() => {
    async function initialLoad() {
      if (session?.user?.email) {
        const [cloudMenus, cloudHistory, cloudRecipes] = await Promise.all([
          cloudLoadMenus(), cloudLoadHistory(), cloudLoadRecipes(),
        ]);
        if (cloudMenus) setMenuItems(cloudMenus);
        else setMenuItems(loadMenu());
        if (cloudHistory) setHistory(cloudHistory);
        else {
          const saved = localStorage.getItem("menupricer_history");
          if (saved) setHistory(JSON.parse(saved));
        }
        if (cloudRecipes) setRecipes(cloudRecipes);
        else {
          const savedRecipes = localStorage.getItem("menupricer_recipes");
          if (savedRecipes) setRecipes(JSON.parse(savedRecipes));
        }
      } else {
        setMenuItems(loadMenu());
        const saved = localStorage.getItem("menupricer_history");
        if (saved) setHistory(JSON.parse(saved));
        const savedRecipes = localStorage.getItem("menupricer_recipes");
        if (savedRecipes) setRecipes(JSON.parse(savedRecipes));
      }
    }
    initialLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.email]);

  // Merge localStorage → cloud on first login
  useEffect(() => {
    if (session?.user?.email && !syncedRef.current) {
      syncedRef.current = true;
      mergeLocalToCloud(session.user.email).then((mergedMenus) => {
        if (mergedMenus) setMenuItems(mergedMenus);
        setSyncToast(true);
        setTimeout(() => setSyncToast(false), 3000);
      });
    }
  }, [session?.user?.email]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#share=")) {
      try {
        const payload = JSON.parse(decodeURIComponent(atob(hash.slice(7))));
        if (payload.dishName && payload.content) {
          setCurrentDishName(payload.dishName);
          setResult(payload.content);
          setIsSharedView(true);
          window.history.replaceState(null, "", window.location.pathname);
        }
      } catch { /* ignore */ }
    }
  }, []);

  const handleCostChange = useCallback((cost: number) => setLiveTotal(cost), []);

  const saveHistory = (dishName: string, cost: number, suggestedPrice?: number, formData?: CostData) => {
    const item: HistoryItem = { id: Date.now().toString(), dishName, totalCost: cost, suggestedPrice, formData, timestamp: Date.now() };
    const updated = [item, ...history].slice(0, 20);
    setHistory(updated);
    localStorage.setItem("menupricer_history", JSON.stringify(updated));
    if (session?.user?.email) cloudSaveHistory(updated);
  };

  const saveRecipe = (data: CostData, total: number) => {
    const item: RecipeItem = {
      id: Date.now().toString(), dishName: data.dishName, formData: data,
      totalCost: total, ingredientCount: data.ingredients.filter(i => i.name).length, savedAt: Date.now(),
    };
    const updated = [item, ...recipes.filter(r => r.dishName !== data.dishName)].slice(0, 20);
    setRecipes(updated);
    localStorage.setItem("menupricer_recipes", JSON.stringify(updated));
    if (session?.user?.email) cloudSaveRecipes(updated);
  };

  const FREE_LIMIT = 5;

  const handleAddToMenu = (tiers: MenuTier[]) => {
    const isNew = !menuItems.find(m => m.dishName === currentDishName);
    if (isNew && userPlan === "free" && menuItems.length >= FREE_LIMIT) {
      setShowUpgrade(true);
      return;
    }
    const item: MenuItem = { id: Date.now().toString(), dishName: currentDishName, totalCost, tiers, addedAt: Date.now() };
    const updated = [item, ...menuItems.filter(m => m.dishName !== currentDishName)];
    setMenuItems(updated);
    saveMenu(updated);
    if (session?.user?.email) cloudSaveMenus(updated);
    setMenuToast(true);
    setTimeout(() => setMenuToast(false), 4000);
  };

  const handleDeleteMenuItem = (id: string) => {
    const updated = menuItems.filter(m => m.id !== id);
    setMenuItems(updated);
    saveMenu(updated);
    if (session?.user?.email) cloudSaveMenus(updated);
  };

  const handleTagsChange = (id: string, tags: string[]) => {
    const updated = menuItems.map(m => m.id === id ? { ...m, tags } : m);
    setMenuItems(updated);
    saveMenu(updated);
    if (session?.user?.email) cloudSaveMenus(updated);
  };

  const handleCategoryChange = (id: string, category: string) => {
    const updated = menuItems.map(m => m.id === id ? { ...m, category } : m);
    setMenuItems(updated);
    saveMenu(updated);
    if (session?.user?.email) cloudSaveMenus(updated);
  };

  const handleBatchAdd = (newItems: Omit<MenuItem, "id" | "addedAt">[]) => {
    const reallyNew = newItems.filter(n => !menuItems.find(m => m.dishName === n.dishName));
    const allowed = userPlan === "free"
      ? reallyNew.slice(0, Math.max(0, FREE_LIMIT - menuItems.length))
      : reallyNew;
    if (allowed.length < reallyNew.length && userPlan === "free") {
      setShowUpgrade(true);
    }
    const toAdd: MenuItem[] = allowed.map(item => ({
      ...item, id: `${Date.now()}_${Math.random().toString(36).slice(2)}`, addedAt: Date.now(),
    }));
    if (toAdd.length === 0) return;
    const updated = [...toAdd, ...menuItems.filter(m => !toAdd.some(n => n.dishName === m.dishName))];
    setMenuItems(updated);
    saveMenu(updated);
    if (session?.user?.email) cloudSaveMenus(updated);
    setActiveTab("menu");
    setMenuToast(false);
  };

  const deleteRecipe = (id: string) => {
    const updated = recipes.filter(r => r.id !== id);
    setRecipes(updated);
    localStorage.setItem("menupricer_recipes", JSON.stringify(updated));
    if (session?.user?.email) cloudSaveRecipes(updated);
  };

  const handleQuickEstimate = async (dishName: string) => {
    setLoading(true); setResult(""); setIsEstimate(true);
    setCurrentDishName(dishName); setTotalCost(0); setIngredientCost(0); setBreakdown("");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dishName, totalCost: 0, ingredientCost: 0, breakdown: "", estimateMode: true, lang }),
      });
      if (res.status === 429) { const e = await res.json().catch(() => ({})); setLoading(false); if (e.reason === "login_required") { setShowLoginModal(true); } else { setShowUpgrade(true); } return; }
      if (!res.ok) { const e = await res.json().catch(() => ({})); setResult((lang === "ZH" ? "AI 服务暂时不可用，请稍后重试。\n\n错误：" : "AI service unavailable. Please try again later.\n\nError: ") + (e.error ?? res.statusText)); setLoading(false); return; }
      if (!res.body) return;
      const reader = res.body.getReader(); const decoder = new TextDecoder(); let full = "";
      while (true) { const { done, value } = await reader.read(); if (done) break; full += decoder.decode(value); setResult(full); }
      const prices = parsePrices(full);
      saveHistory(dishName, 0, prices[1] ?? prices[0]);
    } catch (err) { setResult("Request failed.\n\n" + String(err)); }
    finally { setLoading(false); }
  };

  const handleSubmit = async (data: CostData, total: number) => {
    setLoading(true); setResult(""); setIsEstimate(false);
    setTotalCost(total); setCurrentDishName(data.dishName);
    const ic = data.ingredients.reduce((sum, ing) => sum + (parseFloat(ing.quantity) || 0) * (ing.unitPrice || 0), 0);
    setIngredientCost(ic);
    const bd = data.ingredients.filter(i => i.name)
      .map(i => `${i.name} ${i.quantity}${i.unit} × $${i.unitPrice} = $${((parseFloat(i.quantity)||0)*i.unitPrice).toFixed(2)}`).join("; ");
    setBreakdown(bd);
    try {
      const res = await fetch("/api/pricing", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dishName: data.dishName, totalCost: total, ingredientCost: ic, breakdown: bd, lang }),
      });
      if (res.status === 429) { const e = await res.json().catch(() => ({})); setLoading(false); if (e.reason === "login_required") { setShowLoginModal(true); } else { setShowUpgrade(true); } return; }
      if (!res.ok) { const e = await res.json().catch(() => ({})); setResult((lang === "ZH" ? "AI 服务暂时不可用，请稍后重试。\n\n错误：" : "AI service unavailable. Please try again later.\n\nError: ") + (e.error ?? res.statusText)); setLoading(false); return; }
      if (!res.body) return;
      const reader = res.body.getReader(); const decoder = new TextDecoder(); let full = "";
      while (true) { const { done, value } = await reader.read(); if (done) break; full += decoder.decode(value); setResult(full); }
      const prices = parsePrices(full);
      saveHistory(data.dishName, total, prices[1] ?? prices[0], data);
    } catch (err) { setResult("Request failed.\n\n" + String(err)); }
    finally { setLoading(false); }
  };

  const prices = parsePrices(result);
  const priceLabels = ["Budget", "Standard", "Premium"].slice(0, prices.length);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <OnboardingModal />
      {showUpgrade && (
        <UpgradeModal reason="menu_limit" onClose={() => setShowUpgrade(false)} />
      )}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

      {/* Homepage FAQ schema — scoped here, not in layout, so article pages
          do not end up with two competing FAQPage blocks. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} menuCount={menuItems.length} />
      <Hero onStart={() => document.getElementById("cost-form-main")?.scrollIntoView({ behavior: "smooth", block: "start" })} />

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* Sync Toast */}
          {syncToast && (
            <div
              className="flex items-center gap-3 bg-gray-900 text-white text-sm px-5 py-3.5 rounded-2xl mb-4 shadow-lg"
              style={{ animation: "slide-up 250ms ease both" }}
            >
              <span>{userPlan === "pro" && new URLSearchParams(typeof window !== "undefined" ? "" : "").get("upgraded") !== "1"
                ? (lang === "ZH" ? "🎉 已升级到 Pro！" : "🎉 Upgraded to Pro!")
                : (lang === "ZH" ? "☁️ 数据已同步到云端" : "☁️ Data synced to cloud")
              }</span>
            </div>
          )}

          {/* Toast */}
          {menuToast && (
            <div
              className="flex items-center justify-between gap-3 bg-gray-900 text-white text-sm px-5 py-3.5 rounded-2xl mb-6 shadow-lg"
              style={{ animation: "slide-up 250ms ease both" }}
            >
              <span>
                ✅ {lang === "ZH" ? `已加入菜单：${currentDishName}` : `Added "${currentDishName}" to menu`}
                {userPlan === "free" && menuItems.length >= FREE_LIMIT - 1 && (
                  <span className="text-orange-300 ml-2">
                    {lang === "ZH"
                      ? `· 还剩 ${Math.max(0, FREE_LIMIT - menuItems.length)} 个免费名额`
                      : `· ${Math.max(0, FREE_LIMIT - menuItems.length)} free ${Math.max(0, FREE_LIMIT - menuItems.length) === 1 ? "slot" : "slots"} left`}
                  </span>
                )}
              </span>
              <button
                onClick={() => { setActiveTab("menu"); setMenuToast(false); }}
                className="text-orange-300 font-bold hover:text-orange-200 whitespace-nowrap transition-colors text-sm"
              >
                {lang === "ZH" ? "查看菜单 →" : "View Menu →"}
              </button>
            </div>
          )}

          {/* Menu tab content */}
          {activeTab === "menu" && (
            <MenuView
              items={menuItems}
              onDelete={handleDeleteMenuItem}
              onCategoryChange={handleCategoryChange}
              onTagsChange={handleTagsChange}
              onAddMore={() => setActiveTab("pricer")}
              onExportPdf={(brand) => exportMenuPdf(menuItems, brand)}
              onBatchAdd={handleBatchAdd}
              userPlan={userPlan}
            />
          )}

          {/* Pricer tab content */}
          <div className={activeTab === "pricer" ? "grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24 lg:pb-0" : "hidden"}>
            {/* Left: Form */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                <CostForm
                  onSubmit={handleSubmit}
                  onQuickEstimate={handleQuickEstimate}
                  onSaveRecipe={saveRecipe}
                  loading={loading}
                  onCostChange={handleCostChange}
                  formId={FORM_ID}
                  initialData={loadedRecipe}
                />
              </div>
              <RecipeLibrary
                recipes={recipes}
                onLoad={(r) => setLoadedRecipe(r.formData)}
                onDelete={deleteRecipe}
              />
              <HistoryPanel
                items={history}
                onSelect={(item) => { if (item.totalCost) setTotalCost(item.totalCost); }}
              />
            </div>

            {/* Right: Result */}
            <div className="space-y-5">
              {isSharedView && (
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs px-4 py-3 rounded-xl">
                  <span>🔗</span>
                  <span className="font-medium">{t("shareReadOnly", lang)}</span>
                  <button onClick={() => setIsSharedView(false)} className="ml-auto text-blue-400 hover:text-blue-600 font-bold">✕</button>
                </div>
              )}
              <PricingResult
                content={result}
                loading={loading}
                dishName={currentDishName}
                totalCost={totalCost}
                ingredientCost={ingredientCost}
                breakdown={breakdown}
                isEstimate={isEstimate}
                onAddToMenu={handleAddToMenu}
              />
              {prices.length > 0 && (
                <ProfitChart totalCost={totalCost} prices={prices} labels={priceLabels} />
              )}
              {!result && !loading && <ExamplePreview />}
            </div>
          </div>
        </div>
      </main>

      <Testimonials />
      <HowWeCompare />
      <FaqAccordion />

      {/* From the Blog */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">From the Blog</p>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Restaurant pricing guides</h2>
            </div>
            <a href="/blog" className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors hidden sm:block">All articles →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/blog/how-to-price-a-restaurant-menu", category: "Menu Pricing", title: "How to Price a Restaurant Menu", desc: "The complete formula for calculating food cost % and setting profitable prices for every dish." },
              { href: "/blog/food-cost-formula", category: "Food Cost", title: "Food Cost Formula Explained", desc: "Calculate food cost percentage per dish and across your full menu — with worked examples." },
              { href: "/blog/restaurant-profit-margin", category: "Profitability", title: "What's a Good Restaurant Profit Margin?", desc: "Average margins by restaurant type and five strategies to improve yours this week." },
              { href: "/blog/delivery-platform-commission", category: "Delivery", title: "DoorDash & Uber Eats Commission Rates", desc: "Every fee broken down — and the exact formula to price your delivery menu profitably." },
            ].map((post) => (
              <a key={post.href} href={post.href} className="group bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-5 transition-all hover:shadow-sm">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">{post.category}</span>
                <h3 className="font-black text-gray-900 text-sm mt-2 mb-2 group-hover:text-orange-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{post.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <a href="/blog" className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">All articles →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Free Calculators</p>
              <div className="space-y-2">
                <a href="/food-cost-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Food Cost Calculator</a>
                <a href="/recipe-cost-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Recipe Cost Calculator</a>
                <a href="/menu-cost-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Menu Cost Calculator</a>
                <a href="/restaurant-markup-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Markup Calculator</a>
                <a href="/restaurant-profit-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Profit Calculator</a>
                <a href="/bakery-pricing-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Bakery Pricing Calculator</a>
                <a href="/catering-pricing-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Catering Calculator</a>
                <a href="/coffee-shop-pricing-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Coffee Shop Pricing</a>
                <a href="/food-truck-pricing-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Food Truck Pricing</a>
                <a href="/delivery-platform-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Delivery Commission</a>
                <a href="/prime-cost-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Prime Cost Calculator</a>
                <a href="/break-even-calculator" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Break-Even Calculator</a>
                <a href="/tools" className="block text-xs text-orange-500 hover:text-orange-600 transition-colors">All Calculators →</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">By Industry</p>
              <div className="space-y-2">
                <a href="/menu-pricing/cafe" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Coffee Shop</a>
                <a href="/menu-pricing/bakery" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Bakery</a>
                <a href="/menu-pricing/food-truck" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Food Truck</a>
                <a href="/menu-pricing/pizza" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Pizza</a>
                <a href="/menu-pricing/fine-dining" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Fine Dining</a>
                <a href="/menu-pricing" className="block text-xs text-orange-500 hover:text-orange-600 transition-colors">All Types →</a>
                <a href="/how-to-price" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors mt-2">How to Price by Dish →</a>
                <a href="/restaurant-pricing" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Pricing by Country →</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Product</p>
              <div className="space-y-2">
                <a href="/pricing" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Pricing</a>
                <a href="/?upgrade=1" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Upgrade to Pro</a>
                <a href="/about" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">About</a>
                <a href="/compare" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Compare</a>
                <a href="/blog" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Blog</a>
                <a href="/glossary" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Glossary</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Legal</p>
              <div className="space-y-2">
                <a href="/privacy" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-xs text-gray-500 hover:text-orange-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <LogoIcon size={20} />
              <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer — AI-powered menu pricing for restaurant owners.</p>
          </div>
        </div>
      </footer>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-5 py-3 flex items-center gap-4 z-50">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400 font-medium">{t("totalCost", lang)}</p>
          <p className="font-black text-orange-500 text-xl leading-tight tabular-nums">
            {liveTotal > 0 ? formatPrice(liveTotal, currency) : "—"}
          </p>
        </div>
        <button
          type="submit" form={FORM_ID}
          disabled={loading || liveTotal <= 0}
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shrink-0 shadow-sm"
        >
          {loading ? t("loadingBtn", lang) : t("mobileSubmit", lang)}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <HomeContent />
      </CurrencyProvider>
    </LanguageProvider>
  );
}

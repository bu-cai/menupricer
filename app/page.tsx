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
          <div className="hidden sm:flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5">
            {(["USD", "CNY", "EUR"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`text-xs font-bold px-2.5 py-1 rounded-md transition-all ${
                  currency === c ? "bg-white text-orange-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {SYMBOLS[c]} {c}
              </button>
            ))}
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
    </header>
  );
}

/* ── Hero Mockup ─────────────────────────────── */
function HeroMockup() {
  const tiers = [
    { label: "Budget", price: "$6.99", margin: "72%", dim: true },
    { label: "Standard", price: "$8.99", margin: "79%", recommended: true },
    { label: "Premium", price: "$12.99", margin: "86%", dim: true },
  ];
  const lines = [
    "Pricing Strategy",
    "Price at $8.99 for dine-in — aligns with",
    "casual dining benchmarks. On delivery",
    "platforms (DoorDash/Uber Eats), charge",
    "$10.99 to offset 25% commission.",
    "",
    "Menu Copy",
    "Tender braised pork belly slow-cooked in",
    "savory soy glaze — a house favorite.",
  ];
  return (
    <div className="relative" style={{ animation: "hero-sub 800ms ease 400ms both" }}>
      {/* Glow behind mockup */}
      <div className="absolute -inset-4 bg-orange-400/10 rounded-3xl blur-2xl" />
      {/* Browser chrome */}
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-orange-100/60 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-1.5">
            <LogoIcon size={12} /> aimenupricer.com
          </div>
        </div>
        {/* Content */}
        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🤖</span>
            <span className="text-sm font-bold text-gray-800">AI Pricing Analysis</span>
            <span className="ml-auto text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">✓ Done</span>
          </div>
          {/* Tier cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {tiers.map((t) => (
              <div key={t.label} className={`relative rounded-xl border-2 p-2.5 text-center transition-all ${
                t.recommended
                  ? "border-orange-400 bg-orange-50 shadow-sm shadow-orange-100"
                  : "border-gray-100 bg-gray-50"
              }`}>
                {t.recommended && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">
                    ★ BEST
                  </span>
                )}
                <p className={`text-[10px] font-semibold mb-0.5 ${t.recommended ? "text-orange-600" : "text-gray-400"}`}>{t.label}</p>
                <p className={`text-lg font-black leading-tight ${t.recommended ? "text-gray-900" : "text-gray-500"}`}>{t.price}</p>
                <p className={`text-[10px] font-bold mt-0.5 ${t.recommended ? "text-orange-500" : "text-gray-400"}`}>{t.margin}</p>
              </div>
            ))}
          </div>
          {/* AI text lines */}
          <div className="space-y-1.5">
            {lines.map((line, i) =>
              !line ? <div key={i} className="h-1" /> :
              i === 0 || i === 7 ? (
                <p key={i} className="text-[11px] font-black text-orange-500 uppercase tracking-wide mt-2">{line}</p>
              ) : (
                <div key={i} className="h-2 rounded-full bg-gray-100" style={{ width: `${72 + (i * 13) % 25}%` }} />
              )
            )}
            {/* Blinking cursor */}
            <span className="inline-block w-0.5 h-3 bg-orange-400 ml-0.5 animate-pulse" />
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
        <span className="text-base">📈</span>
        <div>
          <p className="text-[10px] text-gray-400 leading-none">Avg margin lift</p>
          <p className="text-sm font-black text-gray-900 leading-tight">+23%</p>
        </div>
      </div>
    </div>
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
              {ZH ? (
                <>餐厅菜单定价工具<br /><span className="text-orange-500">AI 精准定价</span>，30秒搞定</>
              ) : (
                <>AI Menu Pricing Tool<br />for <span className="text-orange-500">Restaurants</span> — Free</>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 leading-relaxed mb-3"
              style={{ animation: "hero-sub 700ms ease 300ms both" }}>
              {ZH
                ? "输入食材成本 → 30秒获得最优定价、利润分析和菜单文案"
                : "Enter your food costs → get the perfect price in 30 seconds, with profit analysis and AI-written menu copy."}
            </p>

            {/* Social proof */}
            <p className="text-sm text-gray-400 mb-8" style={{ animation: "hero-sub 700ms ease 400ms both" }}>
              {ZH ? "⭐ 已帮助 500+ 餐厅优化定价，平均利润提升 23%" : "⭐ Trusted by 500+ restaurants · Average margin improvement: 23%"}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3"
              style={{ animation: "hero-sub 700ms ease 500ms both" }}>
              <button
                className="btn-primary bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-orange-200"
                onClick={handleCta}
              >
                {ZH ? "免费开始 →" : "Try It Free →"}
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
  const reviews = [
    {
      name: "Marcus T.",
      role: ZH ? "餐厅老板 · 德克萨斯州" : "Restaurant Owner · Texas",
      avatar: "MT",
      color: "bg-orange-500",
      stars: 5,
      text: ZH
        ? "以前靠感觉定价，利润完全不稳定。用了 MenuPricer 之后，我的BBQ套餐利润从48%提升到了71%。这工具太值了。"
        : "I used to price by gut feel — margins were all over the place. After using MenuPricer, my BBQ platter margin went from 48% to 71%. Pays for itself immediately.",
    },
    {
      name: "Linda C.",
      role: ZH ? "外卖品牌创始人 · 加州" : "Ghost Kitchen Owner · California",
      avatar: "LC",
      color: "bg-blue-500",
      stars: 5,
      text: ZH
        ? "我在 DoorDash 上有三个品牌，之前搞不清楚外卖抽成后到底赚多少。MenuPricer 直接给我算出来了，省了很多时间。"
        : "Running 3 ghost kitchen brands on DoorDash, I never knew my real margins after commission. MenuPricer broke it down in seconds. Saved me hours of spreadsheet work.",
    },
    {
      name: "James K.",
      role: ZH ? "寿司餐厅主厨 · 纽约" : "Sushi Chef & Owner · New York",
      avatar: "JK",
      color: "bg-green-600",
      stars: 5,
      text: ZH
        ? "作为厨师我擅长做菜不擅长算账。AI 估算模式超级好用——只要输入菜名，30秒就能看到合理定价范围。"
        : "As a chef I'm better at cooking than accounting. The Quick Estimate mode is genius — just type the dish name and I get a price range in 30 seconds. No spreadsheet needed.",
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
            ⭐ {ZH ? "真实用户评价" : "REAL RESTAURANT OWNERS"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {ZH ? "他们的利润已经提升了" : "They've already improved their margins"}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {ZH ? "500+ 餐厅老板正在使用 MenuPricer" : "500+ restaurant owners trust MenuPricer to price their menus"}
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0"
          style={{ scrollbarWidth: "none" }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm min-w-[80vw] md:min-w-0 snap-start"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} className="text-orange-400 text-sm">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{r.text}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full ${r.color} text-white text-xs font-black flex items-center justify-center shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-10 reveal">
          <div className="bg-orange-50 rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "500+", label: ZH ? "活跃餐厅" : "Active restaurants" },
              { n: "23%", label: ZH ? "平均利润提升" : "Avg margin boost" },
              { n: "30s", label: ZH ? "平均定价时间" : "Avg time to price" },
              { n: "4.9★", label: ZH ? "用户评分" : "User rating" },
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
              <span>✅ {lang === "ZH" ? `已加入菜单：${currentDishName}` : `Added "${currentDishName}" to menu`}</span>
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
      <FaqAccordion />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoIcon size={22} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <a href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</a>
            <a href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</a>
            <a href="/menu-pricing" className="hover:text-orange-500 transition-colors">Menu Pricing by Type</a>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer. AI-powered menu pricing for restaurant owners.</p>
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

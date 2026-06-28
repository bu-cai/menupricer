"use client";

import { useState, useEffect, useCallback } from "react";
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
import MenuView from "@/components/MenuView";
import { MenuItem, MenuTier, loadMenu, saveMenu } from "@/lib/menuStore";
import { exportMenuPdf } from "@/lib/exportMenuPdf";

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
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">{t("faqTitle", lang)}</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-sm">
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

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
          <span className="text-xl">🍽️</span>
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
          {/* Currency */}
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
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
          >
            {lang === "EN" ? "🇨🇳 中文" : "🇺🇸 EN"}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────── */
function Hero() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      {/* Orange radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center" style={{ animation: "hero-drop 700ms ease both" }}>
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          {t("tagline", lang)}
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none mb-4">
          Menu<span className="text-orange-500">Pricer</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          {t("subtitle", lang)}
        </p>
      </div>
    </section>
  );
}

/* ── HomeContent ─────────────────────────────── */
function HomeContent() {
  const { lang } = useLang();
  const { currency } = useCurrency();
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
  const [isSharedView, setIsSharedView] = useState(false);

  useEffect(() => { setMenuItems(loadMenu()); }, []);

  useEffect(() => {
    const saved = localStorage.getItem("menupricer_history");
    if (saved) setHistory(JSON.parse(saved));
    const savedRecipes = localStorage.getItem("menupricer_recipes");
    if (savedRecipes) setRecipes(JSON.parse(savedRecipes));
    const hash = window.location.hash;
    if (hash.startsWith("#share=")) {
      try {
        const payload = JSON.parse(decodeURIComponent(atob(hash.slice(7))));
        if (payload.dishName && payload.content) {
          setCurrentDishName(payload.dishName);
          setResult(payload.content);
          setIsSharedView(true);
          history.replaceState(null, "", window.location.pathname);
        }
      } catch { /* ignore */ }
    }
  }, []);

  const handleCostChange = useCallback((cost: number) => setLiveTotal(cost), []);

  const saveHistory = (dishName: string, cost: number, suggestedPrice?: number, formData?: CostData) => {
    const item: HistoryItem = { id: Date.now().toString(), dishName, totalCost: cost, suggestedPrice, formData, timestamp: Date.now() };
    const updated = [item, ...history].slice(0, 10);
    setHistory(updated);
    localStorage.setItem("menupricer_history", JSON.stringify(updated));
  };

  const saveRecipe = (data: CostData, total: number) => {
    const item: RecipeItem = {
      id: Date.now().toString(), dishName: data.dishName, formData: data,
      totalCost: total, ingredientCount: data.ingredients.filter(i => i.name).length, savedAt: Date.now(),
    };
    const updated = [item, ...recipes.filter(r => r.dishName !== data.dishName)].slice(0, 20);
    setRecipes(updated);
    localStorage.setItem("menupricer_recipes", JSON.stringify(updated));
  };

  const handleAddToMenu = (tiers: MenuTier[]) => {
    const item: MenuItem = { id: Date.now().toString(), dishName: currentDishName, totalCost, tiers, addedAt: Date.now() };
    const updated = [item, ...menuItems.filter(m => m.dishName !== currentDishName)];
    setMenuItems(updated);
    saveMenu(updated);
    setMenuToast(true);
    setTimeout(() => setMenuToast(false), 4000);
  };

  const handleDeleteMenuItem = (id: string) => {
    const updated = menuItems.filter(m => m.id !== id);
    setMenuItems(updated);
    saveMenu(updated);
  };

  const deleteRecipe = (id: string) => {
    const updated = recipes.filter(r => r.id !== id);
    setRecipes(updated);
    localStorage.setItem("menupricer_recipes", JSON.stringify(updated));
  };

  const handleQuickEstimate = async (dishName: string) => {
    setLoading(true); setResult(""); setIsEstimate(true);
    setCurrentDishName(dishName); setTotalCost(0); setIngredientCost(0); setBreakdown("");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dishName, totalCost: 0, ingredientCost: 0, breakdown: "", estimateMode: true, lang }),
      });
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

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} menuCount={menuItems.length} />
      <Hero />

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10">

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
              onAddMore={() => setActiveTab("pricer")}
              onExportPdf={() => exportMenuPdf(menuItems)}
            />
          )}

          {/* Pricer tab content */}
          <div className={activeTab === "pricer" ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : "hidden"}>
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

      <FaqAccordion />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base">🍽️</span>
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
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

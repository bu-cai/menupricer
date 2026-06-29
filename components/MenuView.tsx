"use client";

import { useState, useEffect } from "react";
import { MenuItem } from "@/lib/menuStore";
import { formatPrice } from "@/lib/currency";
import { calcMargin } from "@/lib/calculations";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";
import { BrandConfig, loadBrand, saveBrand } from "@/lib/brandConfig";
import BatchPricingModal from "@/components/BatchPricingModal";

interface Props {
  items: MenuItem[];
  onDelete: (id: string) => void;
  onCategoryChange: (id: string, category: string) => void;
  onTagsChange: (id: string, tags: string[]) => void;
  onAddMore: () => void;
  onExportPdf: (brand: BrandConfig) => void;
  onBatchAdd: (newItems: Omit<MenuItem, "id" | "addedAt">[]) => void;
}

const TAGS = [
  { key: "spicy",    label: "🌶️ Spicy" },
  { key: "vegan",    label: "🥦 Vegan" },
  { key: "gf",       label: "🌾 Gluten-Free" },
  { key: "nuts",     label: "🥜 Nuts" },
  { key: "seafood",  label: "🐟 Seafood" },
  { key: "kid",      label: "🍼 Kid-Friendly" },
  { key: "special",  label: "🔥 Chef's Special" },
  { key: "new",      label: "✨ New" },
];

const TIER_COLORS = [
  { border: "border-gray-200", bg: "bg-gray-50", label: "text-gray-500" },
  { border: "border-orange-300", bg: "bg-orange-50", label: "text-orange-600", best: true },
  { border: "border-amber-300", bg: "bg-amber-50", label: "text-amber-600" },
];

const CATEGORIES_EN = ["Appetizer", "Main", "Sides", "Dessert", "Drinks", "Specials"];
const CATEGORIES_ZH = ["前菜", "主菜", "小食", "甜点", "饮品", "特色菜"];

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 p-4 text-center">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

function MarginBar({ margin }: { margin: number }) {
  const color = margin >= 65 ? "bg-green-400" : margin >= 45 ? "bg-amber-400" : "bg-red-400";
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${Math.min(margin, 100)}%` }} />
      </div>
      <span className={`text-xs font-bold w-10 text-right ${margin >= 65 ? "text-green-600" : margin >= 45 ? "text-amber-600" : "text-red-500"}`}>
        {margin.toFixed(0)}%
      </span>
    </div>
  );
}

export default function MenuView({ items, onDelete, onCategoryChange, onTagsChange, onAddMore, onExportPdf, onBatchAdd }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const isZH = lang === "ZH";

  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [editCategoryId, setEditCategoryId] = useState<string | null>(null);
  const [editTagsId, setEditTagsId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"menu" | "analytics">("menu");
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [brand, setBrand] = useState<BrandConfig>({ restaurantName: "", tagline: "", accentColor: "#ea580c" });
  const [showBatch, setShowBatch] = useState(false);

  useEffect(() => { setBrand(loadBrand()); }, []);

  const categories = isZH ? CATEGORIES_ZH : CATEGORIES_EN;

  const avgMargin = items.length === 0 ? 0 :
    items.reduce((sum, item) => {
      const std = item.tiers[1] ?? item.tiers[0];
      return sum + (std ? calcMargin(std.price, item.totalCost) : 0);
    }, 0) / items.length;

  const lowestCost = items.length === 0 ? 0 : Math.min(...items.map(i => i.totalCost));

  const handleDelete = (id: string) => {
    if (confirmId === id) { onDelete(id); setConfirmId(null); }
    else { setConfirmId(id); setTimeout(() => setConfirmId(null), 2500); }
  };

  const handleBrandSave = (next: BrandConfig) => {
    setBrand(next);
    saveBrand(next);
    setShowBrand(false);
  };

  // Group items by category
  const grouped: Record<string, MenuItem[]> = {};
  for (const item of items) {
    const cat = item.category?.trim() || (isZH ? "未分类" : "Uncategorized");
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  }

  // Sorted by margin for analytics
  const withMargin = items.map(item => {
    const std = item.tiers[1] ?? item.tiers[0];
    const margin = std ? (item.totalCost > 0 ? calcMargin(std.price, item.totalCost) : std.margin) : 0;
    return { item, margin };
  }).sort((a, b) => b.margin - a.margin);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4">
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">{t("menuEmpty", lang)}</h3>
        <p className="text-sm text-gray-400 max-w-xs mb-6">{t("menuEmptyDesc", lang)}</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={onAddMore}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            {t("menuAddMore", lang)}
          </button>
          <button
            onClick={() => setShowBatch(true)}
            className="border-2 border-orange-200 text-orange-500 font-bold px-5 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm"
          >
            {isZH ? "⚡ 批量定价" : "⚡ Batch Pricing"}
          </button>
        </div>
        {showBatch && <BatchPricingModal onClose={() => setShowBatch(false)} onAddAll={onBatchAdd} />}
      </div>
    );
  }

  const renderDishCard = (item: MenuItem, idx: number) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl border border-orange-100 shadow-sm p-5"
      style={{ animation: "slide-up 300ms ease both", animationDelay: `${idx * 40}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base truncate">{item.dishName}</h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {item.totalCost > 0 && (
              <span className="text-xs text-gray-400">
                {t("menuCost", lang)}: {formatPrice(item.totalCost, currency)}
              </span>
            )}
            {/* Category badge */}
            {editCategoryId === item.id ? (
              <div className="flex flex-wrap gap-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { onCategoryChange(item.id, cat); setEditCategoryId(null); }}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors font-medium"
                  >
                    {cat}
                  </button>
                ))}
                <button
                  onClick={() => setEditCategoryId(null)}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditCategoryId(item.id)}
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                  item.category
                    ? "bg-blue-50 text-blue-500 hover:bg-blue-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {item.category || (isZH ? "+ 分类" : "+ Category")}
              </button>
            )}
          </div>
        </div>
        <button
          onClick={() => handleDelete(item.id)}
          className={`text-xs px-2.5 py-1 rounded-lg transition-all font-medium ml-2 ${
            confirmId === item.id ? "bg-red-100 text-red-600" : "text-gray-300 hover:text-red-400 hover:bg-red-50"
          }`}
        >
          {confirmId === item.id ? t("menuConfirmDelete", lang) : t("menuDelete", lang)}
        </button>
      </div>

      {/* Tags row */}
      <div className="mb-3">
        {editTagsId === item.id ? (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              {TAGS.map(tag => {
                const active = item.tags?.includes(tag.key);
                return (
                  <button
                    key={tag.key}
                    onClick={() => {
                      const current = item.tags ?? [];
                      const next = active ? current.filter(k => k !== tag.key) : [...current, tag.key];
                      onTagsChange(item.id, next);
                    }}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                      active
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-500 border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setEditTagsId(null)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              {isZH ? "完成" : "Done"}
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-1.5">
            {(item.tags ?? []).map(key => {
              const tag = TAGS.find(t => t.key === key);
              return tag ? (
                <span key={key} className="text-xs bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full font-medium">
                  {tag.label}
                </span>
              ) : null;
            })}
            <button
              onClick={() => setEditTagsId(item.id)}
              className="text-xs text-gray-300 hover:text-orange-400 transition-colors px-1"
            >
              {(item.tags?.length ?? 0) > 0 ? (isZH ? "编辑标签" : "Edit tags") : (isZH ? "+ 添加标签" : "+ Add tags")}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {item.tiers.map((tier, i) => {
          const c = TIER_COLORS[i] ?? TIER_COLORS[0];
          const margin = item.totalCost > 0 ? calcMargin(tier.price, item.totalCost) : tier.margin;
          return (
            <div key={i} className={`relative rounded-xl border-2 ${c.border} ${c.bg} p-3 text-center`}>
              {c.best && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Best
                </span>
              )}
              <p className={`text-xs font-medium mb-1 ${c.label}`}>{tier.name}</p>
              <p className="text-lg font-black text-gray-900">{formatPrice(tier.price, currency)}</p>
              <p className="text-xs text-orange-500 font-semibold mt-1">{margin.toFixed(0)}%</p>
              {tier.scene && (
                <p className="text-[10px] text-gray-400 mt-1 leading-tight line-clamp-2">{tier.scene}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label={t("menuDishes", lang)} value={String(items.length)} />
        <StatCard label={t("menuAvgMargin", lang)} value={`${avgMargin.toFixed(0)}%`} />
        <StatCard
          label={t("menuLowestCost", lang)}
          value={lowestCost > 0 ? formatPrice(lowestCost, currency) : "—"}
        />
      </div>

      {/* View tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveView("menu")}
          className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${
            activeView === "menu" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {isZH ? "菜单" : "Menu"}
        </button>
        <button
          onClick={() => setActiveView("analytics")}
          className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${
            activeView === "analytics" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {isZH ? "📊 分析" : "📊 Analytics"}
        </button>
      </div>

      {/* ── ANALYTICS VIEW ── */}
      {activeView === "analytics" && (
        <div className="space-y-4">
          {/* Margin chart */}
          <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              {isZH ? "各菜品利润率（标准档）" : "Profit Margin by Dish (Standard Tier)"}
            </h3>
            <div className="space-y-3">
              {withMargin.map(({ item, margin }, i) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 truncate max-w-[60%]">{item.dishName}</span>
                    {i === 0 && <span className="text-[10px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full font-medium">{isZH ? "最佳" : "Best"}</span>}
                    {i === withMargin.length - 1 && withMargin.length > 1 && (
                      <span className="text-[10px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full font-medium">{isZH ? "最低" : "Lowest"}</span>
                    )}
                  </div>
                  <MarginBar margin={margin} />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />≥65%</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />45–65%</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />&lt;45%</span>
            </div>
          </div>

          {/* Category breakdown */}
          {Object.keys(grouped).length > 1 && (
            <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">
                {isZH ? "按分类汇总" : "Category Breakdown"}
              </h3>
              <div className="space-y-3">
                {Object.entries(grouped).map(([cat, catItems]) => {
                  const catAvg = catItems.reduce((s, item) => {
                    const std = item.tiers[1] ?? item.tiers[0];
                    return s + (std ? (item.totalCost > 0 ? calcMargin(std.price, item.totalCost) : std.margin) : 0);
                  }, 0) / catItems.length;
                  return (
                    <div key={cat} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{cat}</p>
                        <p className="text-xs text-gray-400">{catItems.length} {isZH ? "道菜" : "dishes"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-orange-500">{catAvg.toFixed(0)}%</p>
                        <p className="text-xs text-gray-400">{isZH ? "平均利润率" : "avg margin"}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Top / Bottom performers */}
          {withMargin.length >= 3 && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                <p className="text-xs text-green-600 font-semibold mb-2">{isZH ? "🏆 利润最高" : "🏆 Most Profitable"}</p>
                <p className="text-sm font-bold text-gray-900 leading-tight">{withMargin[0].item.dishName}</p>
                <p className="text-lg font-black text-green-600">{withMargin[0].margin.toFixed(0)}%</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <p className="text-xs text-red-500 font-semibold mb-2">{isZH ? "⚠️ 利润最低" : "⚠️ Lowest Margin"}</p>
                <p className="text-sm font-bold text-gray-900 leading-tight">{withMargin[withMargin.length - 1].item.dishName}</p>
                <p className="text-lg font-black text-red-500">{withMargin[withMargin.length - 1].margin.toFixed(0)}%</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── MENU VIEW ── */}
      {activeView === "menu" && (
        <>
          {/* Category group toggle */}
          {Object.keys(grouped).length > 1 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{isZH ? "按分类分组" : "Group by category"}</span>
              <button
                onClick={() => setGroupByCategory(v => !v)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${groupByCategory ? "bg-orange-500" : "bg-gray-200"}`}
              >
                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${groupByCategory ? "translate-x-4.5" : "translate-x-0.5"}`} />
              </button>
            </div>
          )}

          {/* Dish cards */}
          <div className="space-y-4">
            {groupByCategory
              ? Object.entries(grouped).map(([cat, catItems]) => (
                  <div key={cat}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{cat}</span>
                      <div className="flex-1 h-px bg-gray-100" />
                      <span className="text-xs text-gray-400">{catItems.length}</span>
                    </div>
                    <div className="space-y-3">
                      {catItems.map((item, idx) => renderDishCard(item, idx))}
                    </div>
                  </div>
                ))
              : items.map((item, idx) => renderDishCard(item, idx))
            }
          </div>
        </>
      )}

      {/* Brand settings panel */}
      {showBrand && (
        <BrandSettingsPanel brand={brand} onSave={handleBrandSave} onCancel={() => setShowBrand(false)} isZH={isZH} />
      )}

      {/* Actions */}
      <div className="space-y-3 pb-4">
        <div className="flex gap-3">
          <button
            onClick={onAddMore}
            className="flex-1 py-3 rounded-xl border-2 border-dashed border-orange-200 text-orange-500 font-semibold text-sm hover:bg-orange-50 transition-colors"
          >
            {t("menuAddMore", lang)}
          </button>
          <button
            onClick={() => setShowBatch(true)}
            className="flex-1 py-3 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            {isZH ? "⚡ 批量" : "⚡ Batch"}
          </button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowBrand(v => !v)}
            className="py-3 px-4 rounded-xl border border-gray-200 text-gray-500 font-medium text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="5.5" />
              <path d="M7 4.5v.5M7 7v3" />
            </svg>
            {brand.restaurantName || (isZH ? "品牌设置" : "Brand")}
          </button>
          <button
            onClick={() => onExportPdf(brand)}
            className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1v9M4 7l3 3 3-3M1.5 11.5v1a1 1 0 001 1h9a1 1 0 001-1v-1" />
            </svg>
            {t("menuExportPdf", lang)}
          </button>
        </div>
      </div>

      {showBatch && <BatchPricingModal onClose={() => setShowBatch(false)} onAddAll={onBatchAdd} />}
    </div>
  );
}

// ── Brand Settings Panel ────────────────────────────────────────────
function BrandSettingsPanel({
  brand, onSave, onCancel, isZH
}: { brand: BrandConfig; onSave: (b: BrandConfig) => void; onCancel: () => void; isZH: boolean }) {
  const [name, setName] = useState(brand.restaurantName);
  const [tagline, setTagline] = useState(brand.tagline);

  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 space-y-4">
      <h3 className="font-bold text-gray-900 text-sm">{isZH ? "餐厅品牌信息" : "Restaurant Branding"}</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">{isZH ? "餐厅名称" : "Restaurant Name"}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={isZH ? "例：老陈家餐馆" : "e.g. Golden Dragon Restaurant"}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-base"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">{isZH ? "副标题 / 口号（可选）" : "Tagline (optional)"}</label>
          <input
            type="text"
            value={tagline}
            onChange={e => setTagline(e.target.value)}
            placeholder={isZH ? "例：正宗川菜 · 三十年匠心" : "e.g. Authentic Cantonese Cuisine"}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-base"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onSave({ restaurantName: name, tagline, accentColor: brand.accentColor })}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
        >
          {isZH ? "保存并用于 PDF" : "Save & Use in PDF"}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-500 text-sm hover:bg-gray-50 transition-colors"
        >
          {isZH ? "取消" : "Cancel"}
        </button>
      </div>
    </div>
  );
}

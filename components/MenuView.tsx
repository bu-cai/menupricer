"use client";

import { useState } from "react";
import { MenuItem } from "@/lib/menuStore";
import { formatPrice } from "@/lib/currency";
import { calcMargin } from "@/lib/calculations";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";

interface Props {
  items: MenuItem[];
  onDelete: (id: string) => void;
  onAddMore: () => void;
  onExportPdf: () => void;
}

const TIER_COLORS = [
  { border: "border-gray-200", bg: "bg-gray-50", label: "text-gray-500" },
  { border: "border-orange-300", bg: "bg-orange-50", label: "text-orange-600", best: true },
  { border: "border-amber-300", bg: "bg-amber-50", label: "text-amber-600" },
];

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 p-4 text-center">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

export default function MenuView({ items, onDelete, onAddMore, onExportPdf }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const avgMargin = items.length === 0 ? 0 :
    items.reduce((sum, item) => {
      const standardTier = item.tiers[1] ?? item.tiers[0];
      return sum + (standardTier ? calcMargin(standardTier.price, item.totalCost) : 0);
    }, 0) / items.length;

  const lowestCost = items.length === 0 ? 0 : Math.min(...items.map(i => i.totalCost));

  const handleDelete = (id: string) => {
    if (confirmId === id) {
      onDelete(id);
      setConfirmId(null);
    } else {
      setConfirmId(id);
      setTimeout(() => setConfirmId(null), 2500);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">{t("menuEmpty", lang)}</h3>
        <p className="text-sm text-gray-400 max-w-xs mb-6">{t("menuEmptyDesc", lang)}</p>
        <button
          onClick={onAddMore}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          {t("menuAddMore", lang)}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label={t("menuDishes", lang)} value={String(items.length)} />
        <StatCard label={t("menuAvgMargin", lang)} value={`${avgMargin.toFixed(0)}%`} />
        <StatCard
          label={t("menuLowestCost", lang)}
          value={lowestCost > 0 ? formatPrice(lowestCost, currency) : "—"}
        />
      </div>

      {/* Dish cards */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-orange-100 shadow-sm p-5"
            style={{ animation: "slide-up 300ms ease both", animationDelay: `${idx * 60}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-base">{item.dishName}</h3>
                {item.totalCost > 0 && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t("menuCost", lang)}: {formatPrice(item.totalCost, currency)}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all font-medium ${
                  confirmId === item.id
                    ? "bg-red-100 text-red-600"
                    : "text-gray-300 hover:text-red-400 hover:bg-red-50"
                }`}
              >
                {confirmId === item.id ? t("menuConfirmDelete", lang) : t("menuDelete", lang)}
              </button>
            </div>

            {/* Tier cards */}
            <div className="grid grid-cols-3 gap-2">
              {item.tiers.map((tier, i) => {
                const c = TIER_COLORS[i] ?? TIER_COLORS[0];
                const margin = item.totalCost > 0 ? calcMargin(tier.price, item.totalCost) : tier.margin;
                return (
                  <div
                    key={i}
                    className={`relative rounded-xl border-2 ${c.border} ${c.bg} p-3 text-center`}
                  >
                    {c.best && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Best
                      </span>
                    )}
                    <p className={`text-xs font-medium mb-1 ${c.label}`}>{tier.name}</p>
                    <p className="text-lg font-black text-gray-900">{formatPrice(tier.price, currency)}</p>
                    <p className="text-xs text-orange-500 font-semibold mt-1">
                      {margin.toFixed(0)}%
                    </p>
                    {tier.scene && (
                      <p className="text-[10px] text-gray-400 mt-1 leading-tight line-clamp-2">
                        {tier.scene}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pb-4">
        <button
          onClick={onAddMore}
          className="flex-1 py-3 rounded-xl border-2 border-dashed border-orange-200 text-orange-500 font-semibold text-sm hover:bg-orange-50 transition-colors"
        >
          {t("menuAddMore", lang)}
        </button>
        <button
          onClick={onExportPdf}
          className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 1v9M4 7l3 3 3-3M1.5 11.5v1a1 1 0 001 1h9a1 1 0 001-1v-1" />
          </svg>
          {t("menuExportPdf", lang)}
        </button>
      </div>
    </div>
  );
}

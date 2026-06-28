"use client";

import { formatPrice } from "@/lib/currency";
import { CostData } from "@/lib/calculations";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";

export interface HistoryItem {
  id: string;
  dishName: string;
  totalCost: number;
  suggestedPrice?: number;
  formData?: CostData;
  timestamp: number;
}

interface Props {
  items: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export default function HistoryPanel({ items, onSelect }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-5">
      <h2 className="text-sm font-bold text-gray-600 mb-3">{t("recentHistory", lang)}</h2>
      <div className="space-y-1">
        {items.map((item, idx) => (
          <button key={item.id} onClick={() => onSelect(item)}
            className="w-full flex items-center justify-between text-left hover:bg-orange-50 rounded-lg px-3 py-2 transition-colors"
            style={{ animation: "fade-slide-left 300ms ease both", animationDelay: `${idx * 50}ms` }}>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">{item.dishName}</p>
              <p className="text-xs text-gray-400">{t("costLabel", lang)} {formatPrice(item.totalCost, currency)}</p>
            </div>
            {item.suggestedPrice && (
              <span className="text-xs text-orange-500 font-semibold shrink-0 ml-2">
                {t("recommended2", lang)} {formatPrice(item.suggestedPrice, currency)}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

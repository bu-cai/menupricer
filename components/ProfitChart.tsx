"use client";

import { useState, useEffect, useRef } from "react";
import { calcMargin } from "@/lib/calculations";
import { formatPrice } from "@/lib/currency";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";

interface Props {
  totalCost: number;
  prices: number[];
  labels: string[];
}

// ⑥ 数字同步滚动
function useCountUp(target: number, delay = 0, duration = 800): number {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setDisplay(0);
    const t = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        else setDisplay(target);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(rafRef.current); };
  }, [target, delay, duration]);

  return display;
}

function MarginBar({ price, totalCost, label, color, barDelay }: {
  price: number; totalCost: number; label: string; color: string; barDelay: number;
}) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const margin = calcMargin(price, totalCost);
  const profit = price - totalCost;
  const [width, setWidth] = useState(0);
  const displayMargin = useCountUp(Math.round(margin), barDelay);

  useEffect(() => {
    setWidth(0);
    const t = setTimeout(() => setWidth(Math.min(margin, 100)), 50);
    return () => clearTimeout(t);
  }, [margin]);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold tabular-nums" style={{ color }}>
          {formatPrice(price, currency)} · {t("profit", lang)} {formatPrice(profit, currency)} · {displayMargin}%
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full"
          style={{
            width: `${width}%`,
            backgroundColor: color,
            transition: `width 800ms ease-out ${barDelay}ms`,
          }} />
      </div>
    </div>
  );
}

export default function ProfitChart({ totalCost, prices, labels }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  if (totalCost <= 0 || prices.length === 0) return null;

  const colors = ["#fb923c", "#f97316", "#ea580c"];
  const delays = [0, 150, 300];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4">{t("marginComparison", lang)}</h2>
      <div className="space-y-4">
        {prices.map((price, i) => (
          <MarginBar key={i}
            price={price} totalCost={totalCost}
            label={labels[i]} color={colors[i]}
            barDelay={delays[i]} />
        ))}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t("totalCostBaseline", lang)}</span>
            <span className="font-semibold text-gray-700">{formatPrice(totalCost, currency)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

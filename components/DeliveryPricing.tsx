"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/currency";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";

interface PricingTier {
  name: string;
  price: number;
  margin: number;
}

interface Props {
  tiers: PricingTier[];
  totalCost: number;
}

const PLATFORMS = [
  { key: "meituan", labelEN: "Meituan", labelZH: "美团", rate: 0.18 },
  { key: "eleme",   labelEN: "Ele.me",  labelZH: "饿了么", rate: 0.20 },
  { key: "doordash",labelEN: "DoorDash",labelZH: "DoorDash", rate: 0.25 },
  { key: "custom",  labelEN: "Custom",  labelZH: "自定义", rate: 0 },
] as const;

type PlatformKey = typeof PLATFORMS[number]["key"];

export default function DeliveryPricing({ tiers, totalCost }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<PlatformKey>("meituan");
  const [customRate, setCustomRate] = useState("22");
  const [targetMargin, setTargetMargin] = useState("65");

  const ZH = lang === "ZH";
  const selected = PLATFORMS.find(p => p.key === platform)!;
  const commissionRate = platform === "custom" ? (parseFloat(customRate) || 0) / 100 : selected.rate;
  const marginRate = (parseFloat(targetMargin) || 65) / 100;

  // delivery price = totalCost / (1 - commissionRate) / (1 - marginRate)
  const calcDeliveryPrice = (cost: number) => {
    if (commissionRate >= 1 || marginRate >= 1 || cost <= 0) return 0;
    return cost / (1 - commissionRate) / (1 - marginRate);
  };

  // Use Standard tier as dine-in reference (index 1), fallback to first
  const dineInTier = tiers[1] ?? tiers[0];

  const rows = tiers.map(tier => {
    const deliveryPrice = calcDeliveryPrice(totalCost > 0 ? totalCost : tier.price * (1 - tier.margin / 100));
    const effectiveCost = totalCost > 0 ? totalCost : tier.price * (1 - tier.margin / 100);
    const netRevenue = deliveryPrice * (1 - commissionRate);
    const netProfit = netRevenue - effectiveCost;
    const delta = deliveryPrice - tier.price;
    return { tier, deliveryPrice, netProfit, delta };
  });

  const dineInRef = dineInTier?.price ?? 0;
  const deliveryRef = rows[1]?.deliveryPrice ?? rows[0]?.deliveryPrice ?? 0;

  if (tiers.length === 0) return null;

  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
      {/* Header toggle */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">🛵</span>
          {ZH ? "外卖平台定价计算器" : "Delivery Platform Pricing"}
        </span>
        <span className={`text-gray-400 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="border-t border-gray-100 px-5 pb-5 pt-4 space-y-4" style={{ animation: "slide-up 200ms ease both" }}>
          {/* Platform selector */}
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              {ZH ? "选择平台" : "Platform"}
            </p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map(p => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPlatform(p.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    platform === p.key
                      ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                  }`}
                >
                  {ZH ? p.labelZH : p.labelEN}
                  {p.key !== "custom" && (
                    <span className="ml-1 opacity-70">{(p.rate * 100).toFixed(0)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Custom rate + target margin */}
          <div className="flex gap-3">
            {platform === "custom" && (
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">{ZH ? "佣金率 %" : "Commission %"}</label>
                <input
                  type="number" value={customRate} onChange={e => setCustomRate(e.target.value)}
                  min="0" max="99" step="0.5"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            )}
            <div className="flex-1">
              <label className="text-xs text-gray-400 mb-1 block">{ZH ? "目标利润率 %" : "Target Margin %"}</label>
              <input
                type="number" value={targetMargin} onChange={e => setTargetMargin(e.target.value)}
                min="1" max="95" step="1"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Result table */}
          <div className="rounded-xl overflow-hidden border border-gray-100">
            {/* Column headers */}
            <div className="grid grid-cols-4 bg-gray-50 px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
              <span>{ZH ? "定价档" : "Tier"}</span>
              <span className="text-right">{ZH ? "堂食价" : "Dine-in"}</span>
              <span className="text-right">{ZH ? "外卖建议价" : "Delivery"}</span>
              <span className="text-right">{ZH ? "到手利润" : "Net Profit"}</span>
            </div>
            {rows.map(({ tier, deliveryPrice, netProfit, delta }, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 px-3 py-3 text-sm items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} ${i === 1 ? "border-l-2 border-orange-400" : ""}`}
              >
                <span className="font-semibold text-gray-700 text-xs">{tier.name}</span>
                <span className="text-right text-gray-500 tabular-nums text-xs">{formatPrice(tier.price, currency)}</span>
                <span className="text-right font-black text-gray-900 tabular-nums">
                  {deliveryPrice > 0 ? formatPrice(deliveryPrice, currency) : "—"}
                  {delta > 0 && (
                    <span className="block text-[10px] text-orange-500 font-semibold">
                      +{formatPrice(delta, currency)}
                    </span>
                  )}
                </span>
                <span className={`text-right tabular-nums font-bold text-xs ${netProfit > 0 ? "text-green-600" : "text-red-500"}`}>
                  {netProfit > 0 ? formatPrice(netProfit, currency) : "—"}
                </span>
              </div>
            ))}
          </div>

          {/* Summary tip */}
          <div className="flex items-start gap-2 bg-orange-50 rounded-xl px-3 py-2.5 text-xs text-orange-700">
            <span className="mt-0.5">💡</span>
            <span>
              {ZH
                ? `按当前设置，外卖价比堂食价高约 ${dineInRef > 0 && deliveryRef > 0 ? ((deliveryRef / dineInRef - 1) * 100).toFixed(0) : "—"}%，佣金率 ${(commissionRate * 100).toFixed(0)}% 后仍可保留 ${targetMargin}% 利润。`
                : `At these settings, delivery price is ~${dineInRef > 0 && deliveryRef > 0 ? ((deliveryRef / dineInRef - 1) * 100).toFixed(0) : "—"}% above dine-in. After ${(commissionRate * 100).toFixed(0)}% commission, you retain your target ${targetMargin}% margin.`
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

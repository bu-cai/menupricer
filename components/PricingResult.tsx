"use client";

import { useState, useEffect, useRef } from "react";
import { formatPrice } from "@/lib/currency";
import { exportPricingPdf } from "@/lib/exportPdf";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";
import DeliveryPricing from "@/components/DeliveryPricing";

interface PricingTier {
  name: string;
  price: number;
  margin: number;
  scene: string;
}

function parseTiers(content: string): PricingTier[] {
  const tiers: PricingTier[] = [];
  for (const name of ["Budget", "Standard", "Premium"]) {
    const block = content.match(new RegExp(`\\*\\*${name}[^*]*\\*\\*([\\s\\S]*?)(?=\\*\\*|##|$)`));
    if (!block) continue;
    const text = block[1];
    const priceMatch = text.match(/(?:Price)[：:\s]*\$?([\d.]+)/);
    const marginMatch = text.match(/(?:Margin)[：:\s]*([\d.]+)%/);
    const sceneMatch = text.match(/(?:Best for)[：:\s]*(.+)/);
    if (!priceMatch) continue;
    tiers.push({
      name,
      price: parseFloat(priceMatch[1]),
      margin: marginMatch ? parseFloat(marginMatch[1]) : 0,
      scene: sceneMatch ? sceneMatch[1].trim() : "",
    });
  }
  return tiers;
}

function extractCopyText(content: string): string {
  const match = content.match(/## Menu Copy\n+([\s\S]*?)(?=\n##|$)/);
  return match ? match[1].trim() : "";
}

function renderRestContent(content: string): string {
  return content
    .replace(/## Pricing Tiers[\s\S]*?(?=## Pricing Strategy|## Menu Copy|## Break-Even|$)/, "")
    .trim();
}

const LOADING_STEPS_EN = [
  "🔍 Analyzing ingredient costs...",
  "💡 Calculating optimal margins...",
  "✍️ Building pricing strategy...",
  "📝 Writing menu copy...",
];
const LOADING_STEPS_ZH = [
  "🔍 分析食材成本结构...",
  "💡 计算最优利润区间...",
  "✍️ 生成定价策略...",
  "📝 撰写菜单文案...",
];

interface Props {
  content: string;
  loading: boolean;
  dishName?: string;
  totalCost?: number;
  ingredientCost?: number;
  breakdown?: string;
  isEstimate?: boolean;
  onAddToMenu?: (tiers: import("@/lib/menuStore").MenuTier[]) => void;
}

export default function PricingResult({ content, loading, dishName = "dish", totalCost = 0, ingredientCost = 0, breakdown = "", isEstimate = false, onAddToMenu }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const LOADING_STEPS = lang === "ZH" ? LOADING_STEPS_ZH : LOADING_STEPS_EN;
  const [copied, setCopied] = useState(false);
  const [copyBounce, setCopyBounce] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [addedToMenu, setAddedToMenu] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = async () => {
    const payload = btoa(encodeURIComponent(JSON.stringify({ dishName, content })));
    const url = `${window.location.origin}${window.location.pathname}#share=${payload}`;
    await navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };
  // ③ 首次出现时的 key，用于触发 slide-in-right
  const appearedRef = useRef(false);
  const [appearKey, setAppearKey] = useState(0);

  useEffect(() => {
    if (!loading || content.length > 0) return;
    const timer = setInterval(() => setStepIdx((s) => (s + 1) % LOADING_STEPS.length), 1500);
    return () => clearInterval(timer);
  }, [loading, content.length]);

  useEffect(() => { if (loading) setStepIdx(0); }, [loading]);

  // ③ 每次从无到有出现时触发滑入
  const hasContent = !!(content || loading);
  useEffect(() => {
    if (hasContent && !appearedRef.current) {
      appearedRef.current = true;
      setAppearKey((k) => k + 1);
    }
    if (!hasContent) appearedRef.current = false;
  }, [hasContent]);

  if (!content && !loading) return null;

  const tiers = parseTiers(content);
  const copyText = extractCopyText(content);
  const restContent = renderRestContent(content);

  // ⑧ Copy 按钮弹跳
  const handleCopy = async () => {
    if (!copyText) return;
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setCopyBounce(true);
    setTimeout(() => setCopyBounce(false), 400);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportPdf = async () => {
    setExporting(true);
    try {
      exportPricingPdf({ dishName, totalCost, ingredientCost, breakdown, aiContent: content });
    } finally {
      setTimeout(() => setExporting(false), 800);
    }
  };

  const tierColors = [
    { border: "border-gray-200", bg: "bg-gray-50", badge: "" },
    { border: "border-orange-300", bg: "bg-orange-50", badge: "Best" },
    { border: "border-amber-300", bg: "bg-amber-50", badge: "" },
  ];

  const lines = restContent.split("\n");
  const formatted = lines.map((line, i) => {
    if (line.startsWith("## ")) {
      const isMenuSection = line.includes("Menu Copy");
      return (
        <div key={i} className="flex items-center gap-2 mt-4 mb-1">
          <h3 className="text-base font-bold text-orange-600">{line.replace("## ", "")}</h3>
          {isMenuSection && copyText && (
            <button onClick={handleCopy}
              className="ml-auto text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500 hover:text-orange-500 hover:border-orange-300 transition-colors"
              style={copyBounce ? { animation: "scale-in 300ms cubic-bezier(0.34,1.56,0.64,1) both" } : undefined}>
              {copied ? t("copiedBtn", lang) : t("copyBtn", lang)}
            </button>
          )}
        </div>
      );
    }
    if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-gray-800 mt-2">{line.replace(/\*\*/g, "")}</p>;
    if (line.startsWith("- ") || line.match(/^[•·]/)) return <p key={i} className="text-gray-700 text-sm pl-3">{line}</p>;
    if (line.trim() === "") return <div key={i} className="h-1" />;
    return <p key={i} className="text-gray-700 text-sm">{line}</p>;
  });

  return (
    // ③ 滑入动画
    <div key={appearKey}
      className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6"
      style={{ animation: "slide-in-right 400ms ease both" }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🤖</span>
        <h2 className="text-lg font-bold text-gray-800">{t("aiAnalysis", lang)}</h2>
        {isEstimate && !loading && (
          <span className="ml-2 text-xs bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">{t("aiEstimated", lang)}</span>
        )}
        {/* Add to Menu button */}
        {!loading && content && onAddToMenu && tiers.length > 0 && (
          <button
            onClick={() => {
              onAddToMenu(tiers);
              setAddedToMenu(true);
              setTimeout(() => setAddedToMenu(false), 2000);
            }}
            className="ml-auto flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-orange-200 text-orange-500 hover:bg-orange-50 transition-colors font-semibold"
            style={addedToMenu ? { animation: "scale-in 250ms ease both" } : undefined}
          >
            {addedToMenu ? t("addedToMenu", lang) : t("addToMenu", lang)}
          </button>
        )}
        {/* Share + Export PDF buttons */}
        {!loading && content && (
          <>
            <button onClick={handleShare}
              className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-500 transition-colors">
              {shareCopied ? (
                <span style={{ animation: "scale-in 250ms ease both" }}>{t("shareCopied", lang)}</span>
              ) : (
                <><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="2" r="1.5"/><circle cx="9" cy="10" r="1.5"/><circle cx="2" cy="6" r="1.5"/>
                  <line x1="3.5" y1="5.1" x2="7.5" y2="3"/><line x1="3.5" y1="6.9" x2="7.5" y2="9"/>
                </svg>{t("shareBtn", lang)}</>
              )}
            </button>
            <button onClick={handleExportPdf} disabled={exporting}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-500 transition-colors disabled:opacity-50">
              {exporting ? (
                <span className="inline-block w-3 h-3 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 1v8M3.5 6.5l3 3 3-3M1.5 10.5v1a1 1 0 001 1h9a1 1 0 001-1v-1" />
                </svg>
              )}
              {exporting ? t("exporting", lang) : t("exportPdf", lang)}
            </button>
          </>
        )}
        {loading && (
          <span className="ml-auto flex items-center gap-2">
            {content.length === 0
              ? <span className="text-sm text-orange-500 animate-pulse">{LOADING_STEPS[stepIdx]}</span>
              : <span className="flex gap-1">{[0,1,2].map((i) => (
                  <span key={i} className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}</span>
            }
          </span>
        )}
      </div>

      {tiers.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-4">
          {tiers.map((tier, i) => {
            const c = tierColors[i] ?? tierColors[0];
            return (
              <div key={i} className={`relative rounded-xl border-2 ${c.border} ${c.bg} p-3 text-center`}
                style={{ animation: "slide-up 400ms ease both", animationDelay: `${i * 100}ms` }}>
                {c.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{c.badge}</span>
                )}
                <p className="text-xs text-gray-500 mb-1">{tier.name}</p>
                <p className="text-xl font-black text-gray-900">{formatPrice(tier.price, currency)}</p>
                <p className="text-xs font-semibold text-orange-500 mt-1">Margin {tier.margin.toFixed(0)}%</p>
                {tier.scene && <p className="text-xs text-gray-400 mt-1 leading-tight">{tier.scene}</p>}
              </div>
            );
          })}
        </div>
      )}

      {tiers.length > 0 && !loading && (
        <div className="mb-4">
          <DeliveryPricing tiers={tiers} totalCost={totalCost} />
        </div>
      )}

      {isEstimate && content && !loading && (
        <div className="mb-3 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 text-xs text-amber-700">
          <span className="text-base leading-none mt-0.5">⚠️</span>
          <span>Costs estimated by AI based on typical North American wholesale prices. Adjust for your actual supplier costs for more accurate pricing.</span>
        </div>
      )}
      <div className="space-y-0.5">
        {formatted}
        {/* ② 打字光标 */}
        {loading && content.length > 0 && (
          <span aria-hidden="true"
            className="inline-block text-orange-400 font-bold text-sm ml-0.5"
            style={{ animation: "blink 1s step-end infinite" }}>|</span>
        )}
      </div>
    </div>
  );
}

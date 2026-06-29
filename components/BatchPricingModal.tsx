"use client";

import { useState } from "react";
import { MenuItem, MenuTier } from "@/lib/menuStore";
import { parseTiers } from "@/lib/parseTiers";
import { useLang } from "@/lib/LanguageContext";

interface BatchResult {
  dishName: string;
  tiers: MenuTier[];
  status: "pending" | "pricing" | "done" | "error";
}

interface Props {
  onClose: () => void;
  onAddAll: (items: Omit<MenuItem, "id" | "addedAt">[]) => void;
}

export default function BatchPricingModal({ onClose, onAddAll }: Props) {
  const { lang } = useLang();
  const isZH = lang === "ZH";

  const [text, setText] = useState("");
  const [results, setResults] = useState<BatchResult[]>([]);
  const [running, setRunning] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);

  const dishNames = text
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .slice(0, 20);

  async function priceDish(dishName: string): Promise<MenuTier[]> {
    const res = await fetch("/api/pricing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dishName, totalCost: 0, ingredientCost: 0, breakdown: "", estimateMode: true, lang }),
    });
    if (!res.ok || !res.body) return [];
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      full += decoder.decode(value);
    }
    return parseTiers(full) as MenuTier[];
  }

  async function handleStart() {
    if (dishNames.length === 0) return;
    setRunning(true);
    setCurrentIdx(0);
    const initial: BatchResult[] = dishNames.map(n => ({ dishName: n, tiers: [], status: "pending" }));
    setResults(initial);

    for (let i = 0; i < dishNames.length; i++) {
      setCurrentIdx(i);
      setResults(prev => prev.map((r, idx) => idx === i ? { ...r, status: "pricing" } : r));
      try {
        const tiers = await priceDish(dishNames[i]);
        setResults(prev => prev.map((r, idx) => idx === i ? { ...r, tiers, status: tiers.length > 0 ? "done" : "error" } : r));
      } catch {
        setResults(prev => prev.map((r, idx) => idx === i ? { ...r, status: "error" } : r));
      }
    }
    setCurrentIdx(-1);
    setRunning(false);
  }

  function handleAddAll() {
    const toAdd = results
      .filter(r => r.status === "done" && r.tiers.length > 0)
      .map(r => ({ dishName: r.dishName, totalCost: 0, tiers: r.tiers }));
    onAddAll(toAdd);
    onClose();
  }

  const doneCount = results.filter(r => r.status === "done").length;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h2 className="font-bold text-gray-900 text-lg">
              {isZH ? "批量定价" : "Batch Pricing"}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {isZH ? "一次定价多道菜品，最多 20 个" : "Price up to 20 dishes at once"}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {results.length === 0 ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isZH ? "菜品名称（每行一个）" : "Dish names (one per line)"}
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 text-base"
                  rows={8}
                  placeholder={isZH
                    ? "宫保鸡丁\n麻婆豆腐\n糖醋里脊\n蒜蓉炒菜心"
                    : "Kung Pao Chicken\nMapo Tofu\nSweet & Sour Pork\nGarlic Bok Choy"
                  }
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  {dishNames.length > 0
                    ? (isZH ? `已识别 ${dishNames.length} 道菜` : `${dishNames.length} dish${dishNames.length > 1 ? "es" : ""} detected`)
                    : (isZH ? "每行输入一个菜品名" : "Enter one dish per line")}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-3 text-xs text-orange-700 leading-relaxed">
                {isZH
                  ? "AI 将自动估算每道菜的食材成本并生成 3 档定价。预计每道菜约需 10-15 秒。"
                  : "AI will estimate ingredient costs and generate 3 pricing tiers per dish. ~10-15 seconds per dish."}
              </div>
            </>
          ) : (
            <div className="space-y-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                    r.status === "pricing" ? "border-orange-300 bg-orange-50" :
                    r.status === "done" ? "border-green-200 bg-green-50" :
                    r.status === "error" ? "border-red-200 bg-red-50" :
                    "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    {r.status === "pricing" && (
                      <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
                    )}
                    {r.status === "done" && <span className="text-green-500 text-base">✓</span>}
                    {r.status === "error" && <span className="text-red-400 text-base">✗</span>}
                    {r.status === "pending" && <div className="w-3 h-3 rounded-full bg-gray-300" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{r.dishName}</p>
                    {r.status === "done" && r.tiers.length > 0 && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        ${r.tiers[0]?.price.toFixed(2)} – ${r.tiers[r.tiers.length - 1]?.price.toFixed(2)}
                        {" · "}{r.tiers[1]?.margin.toFixed(0) ?? r.tiers[0]?.margin.toFixed(0)}% margin
                      </p>
                    )}
                    {r.status === "pricing" && (
                      <p className="text-xs text-orange-500 mt-0.5">{isZH ? "AI 定价中..." : "Pricing..."}</p>
                    )}
                    {r.status === "error" && (
                      <p className="text-xs text-red-400 mt-0.5">{isZH ? "定价失败" : "Failed"}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 space-y-3">
          {results.length === 0 ? (
            <button
              onClick={handleStart}
              disabled={dishNames.length === 0}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-colors"
            >
              {isZH
                ? `开始批量定价 ${dishNames.length > 0 ? `(${dishNames.length} 道菜)` : ""}`
                : `Start Batch Pricing ${dishNames.length > 0 ? `(${dishNames.length} dishes)` : ""}`}
            </button>
          ) : (
            <>
              {running && (
                <p className="text-center text-sm text-orange-600 font-medium">
                  {isZH
                    ? `正在定价第 ${currentIdx + 1} / ${results.length} 道...`
                    : `Pricing ${currentIdx + 1} / ${results.length}...`}
                </p>
              )}
              {!running && doneCount > 0 && (
                <button
                  onClick={handleAddAll}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  {isZH
                    ? `加入菜单（${doneCount} 道菜）`
                    : `Add to Menu (${doneCount} dish${doneCount > 1 ? "es" : ""})`}
                </button>
              )}
              {!running && (
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  {isZH ? "关闭" : "Close"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

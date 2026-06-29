"use client";

import { useState, useEffect, useId, useRef, useCallback, useMemo } from "react";
import { Ingredient, CostData, calcIngredientTotal, calcMargin } from "@/lib/calculations";
import { PRESETS } from "@/lib/presets";
import { formatPrice, SYMBOLS } from "@/lib/currency";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";

interface Props {
  onSubmit: (data: CostData, total: number) => void;
  onQuickEstimate?: (dishName: string) => void;
  onSaveRecipe?: (data: CostData, total: number) => void;
  loading: boolean;
  onCostChange?: (cost: number) => void;
  formId?: string;
  initialData?: CostData;
}

const defaultIngredient = (): Ingredient => ({
  name: "",
  quantity: "",
  unit: "g",
  unitPrice: 0,
});

function parseQtyUnit(text: string): { qty: string; unit: string } | null {
  const m = text.match(/^([\d.]+)\s*(pc|pcs|g|kg|ml|L|lb|oz)$/i);
  if (!m) return null;
  const unitMap: Record<string, string> = { pcs: "pc" };
  return { qty: m[1], unit: unitMap[m[2].toLowerCase()] ?? m[2] };
}

// ① 数字滚动 hook
function useCountUp(target: number, duration = 350): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = prevRef.current;
    const diff = target - start;
    if (Math.abs(diff) < 0.001) { setDisplay(target); return; }
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(start + diff * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else { setDisplay(target); prevRef.current = target; }
    };
    rafRef.current = requestAnimationFrame(tick);
    prevRef.current = target;
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

// 包装换算弹出框
function PriceCalcPopover({ unit, onApply }: { unit: string; onApply: (unitPrice: number) => void }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  const [totalQty, setTotalQty] = useState("");
  const popoverRef = useRef<HTMLDivElement>(null);

  const unitPrice = useMemo(() => {
    const p = parseFloat(totalPrice);
    const q = parseFloat(totalQty);
    if (!p || !q || q === 0) return null;
    return p / q;
  }, [totalPrice, totalQty]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleApply = () => {
    if (unitPrice === null) return;
    onApply(parseFloat(unitPrice.toFixed(6)));
    setOpen(false);
    setTotalPrice("");
    setTotalQty("");
  };

  return (
    <div className="relative" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Package price calculator"
        className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-bold leading-none min-w-[28px] min-h-[28px] flex items-center justify-center rounded-md hover:bg-orange-50 active:scale-95"
      >
        ÷
      </button>
      {open && (
        <div
          className="absolute right-0 top-8 z-50 bg-white border border-orange-200 rounded-2xl shadow-xl p-4 w-64"
          style={{ animation: "slide-up 200ms ease both" }}
        >
          <p className="text-xs font-bold text-gray-700 mb-3">{t("calcTitle", lang)}</p>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">{t("iPaid", lang)}</label>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="number" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)}
                  placeholder="e.g. 3.99" min="0" step="any" autoFocus
                  className="w-full border border-gray-300 rounded-lg pl-6 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">{t("totalQty", lang)} ({unit || "g"})</label>
              <input
                type="number" value={totalQty} onChange={(e) => setTotalQty(e.target.value)}
                placeholder={`e.g. 500`} min="0" step="any"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          {unitPrice !== null && (
            <div className="mt-3 bg-orange-50 rounded-xl px-3 py-2 text-sm text-center" style={{ animation: "scale-in 200ms ease both" }}>
              <span className="text-gray-500">{t("unitPrice", lang)}: </span>
              <span className="font-bold text-orange-600">${unitPrice.toFixed(4)}</span>
              <span className="text-gray-400"> / {unit || "g"}</span>
            </div>
          )}
          <button
            type="button" onClick={handleApply} disabled={unitPrice === null}
            className="mt-3 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-2 rounded-xl text-sm transition-colors"
          >
            {t("apply", lang)}
          </button>
        </div>
      )}
    </div>
  );
}

// ④ 涟漪按钮
interface RippleState { x: number; y: number; id: number }
function PresetButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const [ripple, setRipple] = useState<RippleState | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
    onClick();
  };
  return (
    <button type="button" onClick={handleClick}
      className="relative overflow-hidden text-xs px-2.5 py-1 rounded-full border border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-colors">
      {children}
      {ripple && (
        <span key={ripple.id} aria-hidden="true" style={{
          position: "absolute", left: ripple.x, top: ripple.y,
          width: 8, height: 8, marginLeft: -4, marginTop: -4,
          borderRadius: "50%", backgroundColor: "rgba(249,115,22,0.45)",
          animation: "ripple-out 600ms ease-out both", pointerEvents: "none",
        }} />
      )}
    </button>
  );
}

function HealthBadge({ totalCost, ingredientCost }: { totalCost: number; ingredientCost: number }) {
  const { lang } = useLang();
  if (totalCost <= 0 || ingredientCost <= 0) return null;
  const margin = calcMargin(ingredientCost * 3, totalCost);
  const marginKey = Math.round(margin);
  let emoji = "🟢", label = t("healthGood", lang), cls = "bg-green-50 text-green-600 border-green-200";
  if (margin < 50) { emoji = "🔴"; label = t("healthLow", lang); cls = "bg-red-50 text-red-500 border-red-200"; }
  else if (margin < 70) { emoji = "🟡"; label = t("healthFair", lang); cls = "bg-yellow-50 text-yellow-600 border-yellow-200"; }
  return (
    <div key={marginKey}
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold ${cls}`}
      style={{ animation: "scale-in 300ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
      <span>{emoji}</span>
      <span>{label} {margin.toFixed(0)}%</span>
    </div>
  );
}

function ReverseCalc({ totalCost }: { totalCost: number }) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [targetPrice, setTargetPrice] = useState("");

  const target = parseFloat(targetPrice) || 0;
  const maxCost = target * 0.3; // 70% margin → cost ≤ 30% of price
  const currentMargin = target > 0 ? ((target - totalCost) / target) * 100 : null;
  const isHealthy = currentMargin !== null && currentMargin >= 65;

  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
      >
        <span>🎯 {t("reverseCalc", lang)}</span>
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-gray-50 pt-3 space-y-3" style={{ animation: "slide-up 200ms ease both" }}>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">{t("reverseTarget", lang)}</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">{SYMBOLS[currency]}</span>
              <input
                type="number" value={targetPrice} onChange={e => setTargetPrice(e.target.value)}
                placeholder="e.g. 12.99" min="0" step="any"
                className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          {target > 0 && (
            <div className="space-y-2" style={{ animation: "scale-in 200ms ease both" }}>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{t("reverseMaxCost", lang)}</span>
                <span className={`font-bold ${totalCost <= maxCost ? "text-green-600" : "text-red-500"}`}>
                  {formatPrice(maxCost, currency)}
                  {totalCost > maxCost ? " ⚠️" : " ✓"}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{t("reverseCurrentMargin", lang)}</span>
                <span className={`font-bold ${isHealthy ? "text-green-600" : "text-orange-500"}`}>
                  {currentMargin !== null ? `${currentMargin.toFixed(1)}%` : "—"}
                </span>
              </div>
              {/* Margin bar */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isHealthy ? "bg-green-500" : currentMargin! > 0 ? "bg-orange-400" : "bg-red-400"}`}
                  style={{ width: `${Math.min(Math.max(currentMargin ?? 0, 0), 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-400">{t("reverseTip", lang)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CostForm({ onSubmit, onQuickEstimate, onSaveRecipe, loading, onCostChange, formId, initialData }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const generatedId = useId();
  const id = formId ?? generatedId;
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([defaultIngredient()]);
  const [qtyInputs, setQtyInputs] = useState<string[]>([""]);
  // ⑤ 稳定 key，用于食材行入场动画
  const [ingKeys, setIngKeys] = useState<number[]>([Date.now()]);
  const keyCounter = useRef(1);
  const [laborCostPercent, setLaborCostPercent] = useState(15);
  const [overheadCostPercent, setOverheadCostPercent] = useState(10);
  const [packagingCost, setPackagingCost] = useState(0);
  const [recognizing, setRecognizing] = useState(false);
  const [recognizeError, setRecognizeError] = useState("");
  const [saved, setSaved] = useState(false);
  const [validationErrors, setValidationErrors] = useState<number[]>([]);

  // Load recipe from library
  useEffect(() => {
    if (!initialData) return;
    setDishName(initialData.dishName);
    setIngredients(initialData.ingredients);
    setQtyInputs(initialData.ingredients.map(ing => `${ing.quantity}${ing.unit}`));
    setIngKeys(initialData.ingredients.map(() => keyCounter.current++));
    setLaborCostPercent(initialData.laborCostPercent);
    setOverheadCostPercent(initialData.overheadCostPercent);
    setPackagingCost(initialData.packagingCost);
  }, [initialData]);

  const applyPreset = (idx: number) => {
    const p = PRESETS[idx];
    setDishName(p.dishName);
    setIngredients(p.ingredients);
    setQtyInputs(p.ingredients.map((ing) => `${ing.quantity}${ing.unit}`));
    const newKeys = p.ingredients.map(() => keyCounter.current++);
    setIngKeys(newKeys);
  };

  const addIngredient = () => {
    setIngredients((prev) => [...prev, defaultIngredient()]);
    setQtyInputs((prev) => [...prev, ""]);
    setIngKeys((prev) => [...prev, keyCounter.current++]);
  };

  const removeIngredient = (i: number) => {
    setIngredients((prev) => prev.filter((_, idx) => idx !== i));
    setQtyInputs((prev) => prev.filter((_, idx) => idx !== i));
    setIngKeys((prev) => prev.filter((_, idx) => idx !== i));
  };

  const updateIngredient = (i: number, field: keyof Ingredient, value: string | number) => {
    setIngredients((prev) => {
      const updated = [...prev];
      updated[i] = { ...updated[i], [field]: value };
      return updated;
    });
  };

  const handleQtyInput = (i: number, raw: string) => {
    setQtyInputs((prev) => { const n = [...prev]; n[i] = raw; return n; });
    const parsed = parseQtyUnit(raw.trim());
    if (parsed) {
      setIngredients((prev) => {
        const updated = [...prev];
        updated[i] = { ...updated[i], quantity: parsed.qty, unit: parsed.unit };
        return updated;
      });
    } else {
      const num = raw.replace(/[^\d.]/g, "");
      if (num) updateIngredient(i, "quantity", num);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setRecognizing(true);
    setRecognizeError("");
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const res = await fetch("/api/recognize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, mimeType: file.type }),
      });
      const data = await res.json();
      if (data.ingredients?.length > 0) {
        const recognized: Ingredient[] = data.ingredients;
        const hasBlankOnly = ingredients.length === 1 && !ingredients[0].name;
        const merged = hasBlankOnly ? recognized : [...ingredients.filter((i) => i.name), ...recognized];
        setIngredients(merged);
        setQtyInputs(merged.map((ing) => `${ing.quantity}${ing.unit}`));
        setIngKeys(merged.map(() => keyCounter.current++));
      } else {
        setRecognizeError("No ingredients detected — try a clearer photo.");
      }
    } catch {
      setRecognizeError("Recognition failed. Please try again.");
    } finally {
      setRecognizing(false);
      if (cameraInputRef.current) cameraInputRef.current.value = "";
    }
  };

  const ingredientCost = calcIngredientTotal(ingredients);
  const laborCost = ingredientCost * (laborCostPercent / 100);
  const overheadCost = ingredientCost * (overheadCostPercent / 100);
  const totalCost = ingredientCost + laborCost + overheadCost + packagingCost;

  // ① 数字滚动
  const displayIngCost = useCountUp(ingredientCost);
  const displayLaborOH = useCountUp(laborCost + overheadCost);
  const displayPkg = useCountUp(packagingCost);
  const displayTotal = useCountUp(totalCost);

  useEffect(() => { onCostChange?.(totalCost); }, [totalCost, onCostChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim() || totalCost <= 0) return;
    // Validate: named ingredients must have a price
    const errorIdx = ingredients
      .map((ing, i) => (ing.name.trim() && !ing.unitPrice ? i : -1))
      .filter(i => i >= 0);
    if (errorIdx.length > 0) {
      setValidationErrors(errorIdx);
      setTimeout(() => setValidationErrors([]), 3000);
      return;
    }
    setValidationErrors([]);
    onSubmit({ dishName, ingredients, laborCostPercent, overheadCostPercent, packagingCost }, totalCost);
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-5">
      {/* Dish name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">{t("dishName", lang)}</label>
        <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)}
          placeholder={t("dishNamePlaceholder", lang)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" required />
        {/* ④ 涟漪预设按钮 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {PRESETS.map((p, i) => (
            <PresetButton key={i} onClick={() => applyPreset(i)}>
              {p.emoji} {p.label}
            </PresetButton>
          ))}
        </div>
        {/* Quick Estimate shortcut */}
        {onQuickEstimate && dishName.trim() && totalCost <= 0 && (
          <button type="button"
            onClick={() => onQuickEstimate(dishName.trim())}
            disabled={loading}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-dashed border-orange-300 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition-colors disabled:opacity-50"
            style={{ animation: "slide-up 250ms ease both" }}>
            <span>✨</span>
            <span>{t("quickEstimate", lang)}</span>
          </button>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-semibold text-gray-700">{t("ingredients", lang)}</label>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => cameraInputRef.current?.click()} disabled={recognizing}
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 font-medium disabled:opacity-50 disabled:cursor-wait transition-colors">
              {recognizing
                ? <><span className="inline-block w-3.5 h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /><span className="text-xs">{t("scanning", lang)}</span></>
                : <><span className="text-sm">📷</span><span className="text-xs">{t("scanPhoto", lang)}</span></>
              }
            </button>
            <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleImageChange} />
            <button type="button" onClick={addIngredient} className="text-sm text-orange-500 hover:text-orange-600 font-medium">
              {t("addIngredient", lang)}
            </button>
          </div>
        </div>

        {recognizeError && (
          <div className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2 mb-2 flex items-center gap-1.5">
            <span>⚠️</span> {recognizeError}
          </div>
        )}

        {/* ⑤ 食材行入场动画，用稳定 key */}
        <div className="space-y-2">
          {ingredients.map((ing, i) => (
            <div key={ingKeys[i]} className={`flex gap-2 items-center rounded-xl transition-all ${validationErrors.includes(i) ? "ring-2 ring-red-400 ring-offset-1" : ""}`}
              style={{ animation: "row-enter 220ms ease both" }}>
              <input type="text" value={ing.name} onChange={(e) => updateIngredient(i, "name", e.target.value)}
                placeholder={t("ingredientName", lang)}
                className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="text" value={qtyInputs[i] ?? `${ing.quantity}${ing.unit}`}
                onChange={(e) => handleQtyInput(i, e.target.value)} placeholder="100g"
                className="w-20 border border-gray-300 rounded-lg px-2 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <div className="relative w-24">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input type="number" value={ing.unitPrice || ""}
                  onChange={(e) => updateIngredient(i, "unitPrice", parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-lg pl-5 pr-2 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
                  min="0" step="any" />
              </div>
              <PriceCalcPopover
                unit={ing.unit || "g"}
                onApply={(price) => updateIngredient(i, "unitPrice", price)}
              />
              {ingredients.length > 1 && (
                <button type="button" onClick={() => removeIngredient(i)}
                  className="text-gray-400 hover:text-red-400 text-lg leading-none transition-colors">×</button>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-1">{t("qtyHint", lang)}</p>
        {validationErrors.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2 mt-2" style={{ animation: "slide-up 200ms ease both" }}>
            <span>⚠️</span>
            <span>{t("validationError", lang)} {validationErrors.map(i => ingredients[i]?.name).join(", ")}</span>
          </div>
        )}
      </div>

      {/* Cost percentages */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">{t("laborCost", lang)}</label>
          <input type="number" value={laborCostPercent} onChange={(e) => setLaborCostPercent(parseFloat(e.target.value) || 0)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" min="0" max="100" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">{t("overheadCost", lang)}</label>
          <input type="number" value={overheadCostPercent} onChange={(e) => setOverheadCostPercent(parseFloat(e.target.value) || 0)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" min="0" max="100" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">{t("packagingCost", lang)}</label>
          <input type="number" value={packagingCost || ""} onChange={(e) => setPackagingCost(parseFloat(e.target.value) || 0)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-400" min="0" step="any" />
        </div>
      </div>

      {/* ① 数字滚动 cost summary */}
      <div className="bg-orange-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500">{t("profitHealth", lang)}</span>
          <HealthBadge totalCost={totalCost} ingredientCost={ingredientCost} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">{t("ingredientCost", lang)}</p>
            <p className="font-bold text-gray-800">{formatPrice(displayIngCost, currency)}</p>
          </div>
          <div className="text-gray-300">+</div>
          <div>
            <p className="text-xs text-gray-500">{t("laborOverhead", lang)}</p>
            <p className="font-bold text-gray-800">{formatPrice(displayLaborOH, currency)}</p>
          </div>
          <div className="text-gray-300">+</div>
          <div>
            <p className="text-xs text-gray-500">{t("packaging", lang)}</p>
            <p className="font-bold text-gray-800">{formatPrice(displayPkg, currency)}</p>
          </div>
          <div className="text-orange-400 font-bold text-xl">=</div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{t("totalCost", lang)}</p>
            <p className="font-bold text-orange-500 text-xl">{formatPrice(displayTotal, currency)}</p>
          </div>
        </div>
      </div>

      {/* Reverse Calculator */}
      {totalCost > 0 && <ReverseCalc totalCost={totalCost} />}

      <div className="flex gap-3">
        {/* Save Recipe */}
        {onSaveRecipe && (
          <button type="button"
            disabled={!dishName.trim() || totalCost <= 0}
            onClick={() => {
              onSaveRecipe({ dishName, ingredients, laborCostPercent, overheadCostPercent, packagingCost }, totalCost);
              setSaved(true);
              setTimeout(() => setSaved(false), 2000);
            }}
            className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-orange-200 text-orange-600 hover:bg-orange-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-semibold text-sm">
            {saved ? (
              <span style={{ animation: "scale-in 300ms cubic-bezier(0.34,1.56,0.64,1) both" }}>{t("savedBtn", lang)}</span>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 2h9l2 2v9a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1z" /><path d="M4 2v4h6V2M4 10h7" />
                </svg>
                {t("saveRecipe", lang)}
              </>
            )}
          </button>
        )}
        <button type="submit" form={id}
          disabled={loading || !dishName.trim()}
          className="btn-primary flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-3 rounded-xl text-base"
          style={!loading && dishName.trim() ? { animation: "pulse-glow 2s ease-in-out infinite" } : undefined}
          onClick={(e) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
            btn.appendChild(ripple);
            ripple.addEventListener("animationend", () => ripple.remove());
          }}>
          {loading ? t("loadingBtn", lang) : t("submitBtn", lang)}
        </button>
      </div>
    </form>
  );
}

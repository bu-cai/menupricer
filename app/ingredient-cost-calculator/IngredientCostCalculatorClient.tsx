"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

interface Ingredient {
  id: number;
  name: string;
  quantity: string;
  unit: string;
  pricePerUnit: string;
}

const UNITS = ["g", "kg", "ml", "L", "oz", "lb", "pc", "cup", "tbsp", "tsp"];

const EXAMPLE: Ingredient[] = [
  { id: 1, name: "Chicken breast", quantity: "200", unit: "g", pricePerUnit: "0.020" },
  { id: 2, name: "Olive oil", quantity: "15", unit: "ml", pricePerUnit: "0.008" },
  { id: 3, name: "Garlic", quantity: "2", unit: "pc", pricePerUnit: "0.15" },
  { id: 4, name: "Herbs & seasoning", quantity: "1", unit: "pc", pricePerUnit: "0.12" },
];

let nextId = 10;

export default function IngredientCostCalculatorClient() {
  const [ingredients, setIngredients] = useState<Ingredient[]>(EXAMPLE);
  const [targetPct, setTargetPct] = useState(30);
  const [dishName, setDishName] = useState("Grilled Chicken");

  const totalCost = ingredients.reduce((sum, ing) => {
    const qty = parseFloat(ing.quantity) || 0;
    const price = parseFloat(ing.pricePerUnit) || 0;
    return sum + qty * price;
  }, 0);

  const menuPrice = targetPct > 0 ? totalCost / (targetPct / 100) : 0;
  const grossMargin = menuPrice > 0 ? ((menuPrice - totalCost) / menuPrice) * 100 : 0;

  function addRow() {
    setIngredients((prev) => [
      ...prev,
      { id: nextId++, name: "", quantity: "", unit: "g", pricePerUnit: "" },
    ]);
  }

  function removeRow(id: number) {
    setIngredients((prev) => prev.filter((i) => i.id !== id));
  }

  function updateRow(id: number, field: keyof Ingredient, value: string) {
    setIngredients((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  }

  function loadExample() {
    setIngredients(EXAMPLE);
    setDishName("Grilled Chicken");
    setTargetPct(30);
  }

  return (
    <div className="space-y-8">
      {/* Dish name + target */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Dish name (optional)</label>
          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="e.g. Grilled Salmon"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Target food cost % <span className="text-orange-400">{targetPct}%</span>
          </label>
          <input
            type="range"
            min={15}
            max={50}
            value={targetPct}
            onChange={(e) => setTargetPct(Number(e.target.value))}
            className="w-full accent-orange-500 mt-1"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-0.5">
            <span>15% (fine dining)</span>
            <span>50% (high-end bakery)</span>
          </div>
        </div>
      </div>

      {/* Ingredient table */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">Ingredients</h2>
          <button
            onClick={loadExample}
            className="text-xs text-gray-500 hover:text-orange-400 transition-colors"
          >
            Load example
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left pb-2 pr-3 text-gray-400 font-medium w-1/3">Ingredient</th>
                <th className="text-right pb-2 pr-3 text-gray-400 font-medium w-1/6">Qty</th>
                <th className="text-left pb-2 pr-3 text-gray-400 font-medium w-1/8">Unit</th>
                <th className="text-right pb-2 pr-3 text-gray-400 font-medium w-1/5">Price / Unit ($)</th>
                <th className="text-right pb-2 pr-3 text-gray-400 font-medium w-1/6">Cost</th>
                <th className="pb-2 w-8" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-900">
              {ingredients.map((ing) => {
                const rowCost = (parseFloat(ing.quantity) || 0) * (parseFloat(ing.pricePerUnit) || 0);
                return (
                  <tr key={ing.id}>
                    <td className="py-2 pr-3">
                      <input
                        type="text"
                        value={ing.name}
                        onChange={(e) => updateRow(ing.id, "name", e.target.value)}
                        placeholder="Ingredient name"
                        className="w-full bg-gray-900 border border-gray-800 rounded px-2 py-1.5 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 text-sm"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={ing.quantity}
                        onChange={(e) => updateRow(ing.id, "quantity", e.target.value)}
                        placeholder="0"
                        min="0"
                        step="any"
                        className="w-full bg-gray-900 border border-gray-800 rounded px-2 py-1.5 text-white text-right placeholder-gray-600 focus:outline-none focus:border-orange-500 text-sm"
                      />
                    </td>
                    <td className="py-2 pr-3">
                      <select
                        value={ing.unit}
                        onChange={(e) => updateRow(ing.id, "unit", e.target.value)}
                        className="w-full bg-gray-900 border border-gray-800 rounded px-2 py-1.5 text-white focus:outline-none focus:border-orange-500 text-sm"
                      >
                        {UNITS.map((u) => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        value={ing.pricePerUnit}
                        onChange={(e) => updateRow(ing.id, "pricePerUnit", e.target.value)}
                        placeholder="0.00"
                        min="0"
                        step="any"
                        className="w-full bg-gray-900 border border-gray-800 rounded px-2 py-1.5 text-white text-right placeholder-gray-600 focus:outline-none focus:border-orange-500 text-sm"
                      />
                    </td>
                    <td className="py-2 pr-3 text-right text-orange-300 font-mono text-sm">
                      ${rowCost.toFixed(2)}
                    </td>
                    <td className="py-2">
                      <button
                        onClick={() => removeRow(ing.id)}
                        className="text-gray-600 hover:text-red-400 transition-colors text-lg leading-none"
                        aria-label="Remove ingredient"
                      >
                        Ã—
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button
          onClick={addRow}
          className="mt-3 flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          <span className="text-lg leading-none">+</span> Add ingredient
        </button>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
          <p className="text-gray-400 text-xs mb-1">Total ingredient cost</p>
          <p className="text-white font-bold text-3xl">${totalCost.toFixed(2)}</p>
          <p className="text-gray-500 text-xs mt-1">per portion</p>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 text-center">
          <p className="text-gray-400 text-xs mb-1">Suggested menu price</p>
          <p className="text-orange-400 font-bold text-3xl">${menuPrice.toFixed(2)}</p>
          <p className="text-gray-500 text-xs mt-1">at {targetPct}% food cost</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
          <p className="text-gray-400 text-xs mb-1">Gross margin</p>
          <p className="text-green-400 font-bold text-3xl">{grossMargin.toFixed(1)}%</p>
          <p className="text-gray-500 text-xs mt-1">before labor & overhead</p>
        </div>
      </div>

      {/* Cost breakdown bar */}
      {menuPrice > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <p className="text-gray-400 text-sm mb-3">Price breakdown</p>
          <div className="flex rounded-full overflow-hidden h-6 mb-3">
            <div
              className="bg-orange-500 flex items-center justify-center text-white text-xs font-semibold"
              style={{ width: `${targetPct}%` }}
            >
              {targetPct}%
            </div>
            <div
              className="bg-green-600 flex items-center justify-center text-white text-xs font-semibold"
              style={{ width: `${grossMargin.toFixed(1)}%` }}
            >
              {grossMargin.toFixed(0)}%
            </div>
          </div>
          <div className="flex gap-6 text-xs text-gray-400">
            <span><span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-1" />Food cost ({targetPct}%)</span>
            <span><span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1" />Gross margin ({grossMargin.toFixed(1)}%)</span>
          </div>
        </div>
      )}

      {/* AI upgrade CTA */}
      <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-6 text-center">
        <h2 className="text-white font-bold text-lg mb-2">Want AI-Powered Pricing Analysis?</h2>
        <p className="text-gray-400 text-sm mb-4 max-w-md mx-auto">
          MenuPricer&apos;s AI analyzes your dish, benchmarks against competitor prices, and suggests the optimal price for your market â€?not just the math.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
        >
          <LogoIcon size={16} />
          Try AI Pricing Free
        </Link>
      </div>
    </div>
  );
}

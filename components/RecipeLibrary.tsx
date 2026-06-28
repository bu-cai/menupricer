"use client";

import { useState } from "react";
import { CostData } from "@/lib/calculations";
import { formatPrice } from "@/lib/currency";
import { useLang } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { t } from "@/lib/i18n";

export interface RecipeItem {
  id: string;
  dishName: string;
  formData: CostData;
  totalCost: number;
  ingredientCount: number;
  savedAt: number;
}

interface Props {
  recipes: RecipeItem[];
  onLoad: (recipe: RecipeItem) => void;
  onDelete: (id: string) => void;
}

export default function RecipeLibrary({ recipes, onLoad, onDelete }: Props) {
  const { lang } = useLang();
  const { currency } = useCurrency();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  if (recipes.length === 0) return null;

  const handleDelete = (id: string) => {
    if (confirmDelete === id) {
      onDelete(id);
      setConfirmDelete(null);
    } else {
      setConfirmDelete(id);
      setTimeout(() => setConfirmDelete(null), 2500);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-gray-600">{t("recipeLibrary", lang)}</h2>
        <span className="text-xs text-gray-400">{recipes.length} {t("recipeSaved", lang)}</span>
      </div>
      <div className="space-y-2">
        {recipes.map((recipe, idx) => (
          <div key={recipe.id}
            className="flex items-center gap-2 hover:bg-orange-50 rounded-xl px-3 py-2.5 transition-colors group"
            style={{ animation: "fade-slide-left 280ms ease both", animationDelay: `${idx * 40}ms` }}>
            {/* Load button area */}
            <button onClick={() => onLoad(recipe)}
              className="flex-1 text-left min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{recipe.dishName}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {recipe.ingredientCount} {t("recipeIngredients", lang)} · {formatPrice(recipe.totalCost, currency)} {t("recipeCost", lang)} ·{" "}
                {new Date(recipe.savedAt).toLocaleDateString(lang === "ZH" ? "zh-CN" : "en-US", { month: "short", day: "numeric" })}
              </p>
            </button>
            {/* Load icon */}
            <button onClick={() => onLoad(recipe)}
              title="Load recipe"
              className="shrink-0 text-gray-300 hover:text-orange-500 transition-colors opacity-0 group-hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h12M9 4l5 4-5 4" />
              </svg>
            </button>
            {/* Delete button */}
            <button onClick={() => handleDelete(recipe.id)}
              title={confirmDelete === recipe.id ? t("confirmDelete", lang) : t("deleteRecipe", lang)}
              className={`shrink-0 text-xs px-2 py-0.5 rounded-md transition-all ${
                confirmDelete === recipe.id
                  ? "bg-red-100 text-red-600 opacity-100"
                  : "text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100"
              }`}>
              {confirmDelete === recipe.id ? t("confirmDelete", lang) : "×"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

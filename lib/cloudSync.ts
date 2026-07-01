import { MenuItem } from "./menuStore";
import { HistoryItem } from "@/components/HistoryPanel";
import { RecipeItem } from "@/components/RecipeLibrary";

async function apiFetch(url: string, method = "GET", body?: unknown) {
  const opts: RequestInit = { method, headers: { "Content-Type": "application/json" } };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) return null;
  return res.json();
}

// ── Menus ──────────────────────────────────────────
export async function cloudLoadMenus(): Promise<MenuItem[] | null> {
  return apiFetch("/api/sync/menus");
}

export async function cloudSaveMenus(items: MenuItem[]): Promise<void> {
  await apiFetch("/api/sync/menus", "POST", items);
}

export async function cloudDeleteMenu(id: string): Promise<void> {
  await apiFetch("/api/sync/menus", "DELETE", { id });
}

// ── History ────────────────────────────────────────
export async function cloudLoadHistory(): Promise<HistoryItem[] | null> {
  return apiFetch("/api/sync/history");
}

export async function cloudSaveHistory(items: HistoryItem[]): Promise<void> {
  await apiFetch("/api/sync/history", "POST", items);
}

// ── Recipes ────────────────────────────────────────
export async function cloudLoadRecipes(): Promise<RecipeItem[] | null> {
  return apiFetch("/api/sync/recipes");
}

export async function cloudSaveRecipes(items: RecipeItem[]): Promise<void> {
  await apiFetch("/api/sync/recipes", "POST", items);
}

// ── Merge local → cloud on login ───────────────────
export async function mergeLocalToCloud(userId: string) {
  const LS_KEYS = {
    menus: "menupricer_menu_v1",
    history: "menupricer_history",
    recipes: "menupricer_recipes",
  };

  // Menus
  const localMenusRaw = localStorage.getItem(LS_KEYS.menus);
  if (localMenusRaw) {
    try {
      const localMenus: MenuItem[] = JSON.parse(localMenusRaw);
      if (localMenus.length > 0) {
        const cloudMenus = (await cloudLoadMenus()) ?? [];
        const merged = mergeById([...cloudMenus, ...localMenus]);
        await cloudSaveMenus(merged);
        return merged;
      }
    } catch { /* ignore */ }
  }

  // History
  const localHistoryRaw = localStorage.getItem(LS_KEYS.history);
  if (localHistoryRaw) {
    try {
      const localHistory: HistoryItem[] = JSON.parse(localHistoryRaw);
      if (localHistory.length > 0) {
        const cloudHistory = (await cloudLoadHistory()) ?? [];
        const merged = mergeById([...cloudHistory, ...localHistory]).slice(0, 20);
        await cloudSaveHistory(merged);
      }
    } catch { /* ignore */ }
  }

  // Recipes
  const localRecipesRaw = localStorage.getItem(LS_KEYS.recipes);
  if (localRecipesRaw) {
    try {
      const localRecipes: RecipeItem[] = JSON.parse(localRecipesRaw);
      if (localRecipes.length > 0) {
        const cloudRecipes = (await cloudLoadRecipes()) ?? [];
        const merged = mergeById([...cloudRecipes, ...localRecipes]);
        await cloudSaveRecipes(merged);
      }
    } catch { /* ignore */ }
  }

  return null;
}

function mergeById<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

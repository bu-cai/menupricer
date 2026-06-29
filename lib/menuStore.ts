export interface MenuTier {
  name: string;
  price: number;
  margin: number;
  scene: string;
}

export interface MenuItem {
  id: string;
  dishName: string;
  totalCost: number;
  tiers: MenuTier[];
  addedAt: number;
  category?: string;
}

const KEY = "menupricer_menu_v1";

export function loadMenu(): MenuItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveMenu(items: MenuItem[]): void {
  localStorage.setItem(KEY, JSON.stringify(items));
}

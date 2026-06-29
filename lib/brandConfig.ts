const KEY = "menupricer_brand_v1";

export interface BrandConfig {
  restaurantName: string;
  tagline: string;
  accentColor: string;
}

const DEFAULT: BrandConfig = { restaurantName: "", tagline: "", accentColor: "#ea580c" };

export function loadBrand(): BrandConfig {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT };
  } catch { return { ...DEFAULT }; }
}

export function saveBrand(cfg: BrandConfig): void {
  localStorage.setItem(KEY, JSON.stringify(cfg));
}

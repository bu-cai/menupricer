export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
  unitPrice: number;
}

export interface CostData {
  dishName: string;
  ingredients: Ingredient[];
  laborCostPercent: number;
  overheadCostPercent: number;
  packagingCost: number;
}

export function calcIngredientTotal(ingredients: Ingredient[]): number {
  return ingredients.reduce((sum, ing) => {
    const qty = parseFloat(ing.quantity) || 0;
    return sum + qty * (ing.unitPrice || 0);
  }, 0);
}

export function calcTotalCost(data: CostData): number {
  const ingredientCost = calcIngredientTotal(data.ingredients);
  const laborCost = ingredientCost * (data.laborCostPercent / 100);
  const overheadCost = ingredientCost * (data.overheadCostPercent / 100);
  return ingredientCost + laborCost + overheadCost + (data.packagingCost || 0);
}

export function calcMargin(price: number, cost: number): number {
  if (price <= 0) return 0;
  return ((price - cost) / price) * 100;
}

export function calcBreakeven(fixedCost: number, price: number, variableCost: number): number {
  const contribution = price - variableCost;
  if (contribution <= 0) return Infinity;
  return Math.ceil(fixedCost / contribution);
}

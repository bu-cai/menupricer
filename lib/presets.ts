import { Ingredient } from "./calculations";

export interface Preset {
  emoji: string;
  label: string;
  labelEn: string;
  dishName: string;
  dishNameEn: string;
  ingredients: Ingredient[];
  ingredientsEn: Ingredient[];
}

export const PRESETS: Preset[] = [
  {
    emoji: "🥟",
    label: "猪肉饺子",
    labelEn: "Pork Dumplings",
    dishName: "猪肉白菜饺子",
    dishNameEn: "Pork & Cabbage Dumplings",
    ingredients: [
      { name: "猪肉馅", quantity: "150", unit: "g", unitPrice: 0.016 },
      { name: "白菜", quantity: "100", unit: "g", unitPrice: 0.002 },
      { name: "饺子皮", quantity: "20", unit: "pc", unitPrice: 0.04 },
      { name: "葱姜蒜", quantity: "15", unit: "g", unitPrice: 0.004 },
      { name: "调料（酱油/麻油）", quantity: "10", unit: "ml", unitPrice: 0.01 },
    ],
    ingredientsEn: [
      { name: "Ground pork", quantity: "150", unit: "g", unitPrice: 0.016 },
      { name: "Napa cabbage", quantity: "100", unit: "g", unitPrice: 0.002 },
      { name: "Dumpling wrappers", quantity: "20", unit: "pc", unitPrice: 0.04 },
      { name: "Scallion/ginger/garlic", quantity: "15", unit: "g", unitPrice: 0.004 },
      { name: "Seasoning (soy/sesame oil)", quantity: "10", unit: "ml", unitPrice: 0.01 },
    ],
  },
  {
    emoji: "🍜",
    label: "红烧肉",
    labelEn: "Braised Pork",
    dishName: "东坡红烧肉",
    dishNameEn: "Dongpo Braised Pork Belly",
    ingredients: [
      { name: "五花肉", quantity: "300", unit: "g", unitPrice: 0.022 },
      { name: "生抽/老抽", quantity: "30", unit: "ml", unitPrice: 0.008 },
      { name: "冰糖", quantity: "20", unit: "g", unitPrice: 0.006 },
      { name: "料酒", quantity: "20", unit: "ml", unitPrice: 0.005 },
      { name: "葱姜八角", quantity: "10", unit: "g", unitPrice: 0.005 },
    ],
    ingredientsEn: [
      { name: "Pork belly", quantity: "300", unit: "g", unitPrice: 0.022 },
      { name: "Soy sauce (light/dark)", quantity: "30", unit: "ml", unitPrice: 0.008 },
      { name: "Rock sugar", quantity: "20", unit: "g", unitPrice: 0.006 },
      { name: "Shaoxing wine", quantity: "20", unit: "ml", unitPrice: 0.005 },
      { name: "Scallion/ginger/star anise", quantity: "10", unit: "g", unitPrice: 0.005 },
    ],
  },
  {
    emoji: "🍱",
    label: "盖浇饭",
    labelEn: "Rice Bowl",
    dishName: "鱼香肉丝盖浇饭",
    dishNameEn: "Yu Xiang Pork Rice Bowl",
    ingredients: [
      { name: "猪里脊", quantity: "120", unit: "g", unitPrice: 0.018 },
      { name: "木耳/胡萝卜/笋", quantity: "80", unit: "g", unitPrice: 0.005 },
      { name: "米饭", quantity: "200", unit: "g", unitPrice: 0.003 },
      { name: "郫县豆瓣酱", quantity: "15", unit: "g", unitPrice: 0.012 },
      { name: "调料（醋/糖/酱油）", quantity: "20", unit: "ml", unitPrice: 0.008 },
    ],
    ingredientsEn: [
      { name: "Pork tenderloin", quantity: "120", unit: "g", unitPrice: 0.018 },
      { name: "Wood ear/carrot/bamboo", quantity: "80", unit: "g", unitPrice: 0.005 },
      { name: "Steamed rice", quantity: "200", unit: "g", unitPrice: 0.003 },
      { name: "Doubanjiang paste", quantity: "15", unit: "g", unitPrice: 0.012 },
      { name: "Seasoning (vinegar/sugar/soy)", quantity: "20", unit: "ml", unitPrice: 0.008 },
    ],
  },
  {
    emoji: "🥢",
    label: "麻婆豆腐",
    labelEn: "Mapo Tofu",
    dishName: "麻婆豆腐",
    dishNameEn: "Mapo Tofu",
    ingredients: [
      { name: "嫩豆腐", quantity: "300", unit: "g", unitPrice: 0.006 },
      { name: "猪肉末", quantity: "60", unit: "g", unitPrice: 0.016 },
      { name: "豆瓣酱", quantity: "20", unit: "g", unitPrice: 0.012 },
      { name: "花椒/干辣椒", quantity: "5", unit: "g", unitPrice: 0.015 },
      { name: "葱蒜/淀粉", quantity: "15", unit: "g", unitPrice: 0.005 },
    ],
    ingredientsEn: [
      { name: "Soft tofu", quantity: "300", unit: "g", unitPrice: 0.006 },
      { name: "Ground pork", quantity: "60", unit: "g", unitPrice: 0.016 },
      { name: "Doubanjiang paste", quantity: "20", unit: "g", unitPrice: 0.012 },
      { name: "Sichuan pepper/dried chili", quantity: "5", unit: "g", unitPrice: 0.015 },
      { name: "Scallion/garlic/starch", quantity: "15", unit: "g", unitPrice: 0.005 },
    ],
  },
  {
    emoji: "🍣",
    label: "宫保鸡丁",
    labelEn: "Kung Pao Chicken",
    dishName: "宫保鸡丁",
    dishNameEn: "Kung Pao Chicken",
    ingredients: [
      { name: "鸡胸肉", quantity: "200", unit: "g", unitPrice: 0.014 },
      { name: "花生米", quantity: "40", unit: "g", unitPrice: 0.01 },
      { name: "干辣椒/花椒", quantity: "8", unit: "g", unitPrice: 0.015 },
      { name: "葱段/蒜片", quantity: "20", unit: "g", unitPrice: 0.004 },
      { name: "调料（醋/糖/酱油）", quantity: "25", unit: "ml", unitPrice: 0.008 },
    ],
    ingredientsEn: [
      { name: "Chicken breast", quantity: "200", unit: "g", unitPrice: 0.014 },
      { name: "Roasted peanuts", quantity: "40", unit: "g", unitPrice: 0.01 },
      { name: "Dried chili/Sichuan pepper", quantity: "8", unit: "g", unitPrice: 0.015 },
      { name: "Scallion/garlic slices", quantity: "20", unit: "g", unitPrice: 0.004 },
      { name: "Seasoning (vinegar/sugar/soy)", quantity: "25", unit: "ml", unitPrice: 0.008 },
    ],
  },
  {
    emoji: "🥡",
    label: "蛋炒饭",
    labelEn: "Fried Rice",
    dishName: "扬州蛋炒饭",
    dishNameEn: "Yangzhou Fried Rice",
    ingredients: [
      { name: "隔夜米饭", quantity: "250", unit: "g", unitPrice: 0.003 },
      { name: "鸡蛋", quantity: "2", unit: "pc", unitPrice: 0.2 },
      { name: "虾仁", quantity: "60", unit: "g", unitPrice: 0.022 },
      { name: "胡萝卜/豌豆/葱", quantity: "50", unit: "g", unitPrice: 0.004 },
      { name: "生抽/盐/油", quantity: "15", unit: "ml", unitPrice: 0.006 },
    ],
    ingredientsEn: [
      { name: "Day-old cooked rice", quantity: "250", unit: "g", unitPrice: 0.003 },
      { name: "Eggs", quantity: "2", unit: "pc", unitPrice: 0.2 },
      { name: "Shrimp", quantity: "60", unit: "g", unitPrice: 0.022 },
      { name: "Carrot/peas/scallion", quantity: "50", unit: "g", unitPrice: 0.004 },
      { name: "Soy sauce/salt/oil", quantity: "15", unit: "ml", unitPrice: 0.006 },
    ],
  },
];

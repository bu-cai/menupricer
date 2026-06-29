export type Lang = "EN" | "ZH";

const translations = {
  // Header
  tagline: {
    EN: "🌏 For Restaurant Owners Worldwide",
    ZH: "🌏 全球餐馆主专属工具",
  },
  subtitle: {
    EN: "Enter ingredient costs → Get AI-powered menu pricing instantly",
    ZH: "输入食材成本 → AI 秒出最优菜单定价与利润率",
  },

  // CostForm
  dishName: { EN: "Dish Name", ZH: "菜品名称" },
  dishNamePlaceholder: { EN: "e.g. General Tso's Chicken", ZH: "例：左宗鸡" },
  ingredients: { EN: "Ingredients", ZH: "食材清单" },
  addIngredient: { EN: "+ Add Ingredient", ZH: "+ 添加食材" },
  ingredientName: { EN: "Ingredient", ZH: "食材名" },
  qtyPlaceholder: { EN: "e.g. 6pc 100g", ZH: "如：6个 100克" },
  qtyHint: { EN: 'Supports "6pc", "100g", "2lb"', ZH: '用量支持"6个"或"100克"' },
  laborCost: { EN: "Labor Cost %", ZH: "人工成本 %" },
  overheadCost: { EN: "Overhead %", ZH: "水电/杂费 %" },
  packagingCost: { EN: "Packaging", ZH: "包装成本" },
  ingredientCost: { EN: "Ingredient", ZH: "食材成本" },
  laborOverhead: { EN: "Labor+OH", ZH: "人工+杂费" },
  packaging: { EN: "Packaging", ZH: "包装" },
  totalCost: { EN: "Total Cost", ZH: "总成本" },
  profitHealth: { EN: "Profit Health", ZH: "利润健康度预估" },
  submitBtn: { EN: "Get AI Pricing →", ZH: "获取 AI 定价建议 →" },
  loadingBtn: { EN: "Analyzing...", ZH: "AI 正在分析定价..." },
  saveRecipe: { EN: "Save Recipe", ZH: "保存配方" },
  savedBtn: { EN: "✓ Saved!", ZH: "✓ 已保存！" },
  scanPhoto: { EN: "Scan photo", ZH: "拍照识别" },
  scanning: { EN: "Scanning...", ZH: "识别中..." },
  quickEstimate: { EN: "Quick Estimate — let AI figure out the costs", ZH: "快速估算 — 让 AI 自动推算成本" },
  calcTitle: { EN: "📦 Package Price Calculator", ZH: "📦 包装换算计算器" },
  iPaid: { EN: "I paid ($)", ZH: "我花了（$）" },
  totalQty: { EN: "Total quantity", ZH: "总重量/数量" },
  unitPrice: { EN: "Unit price", ZH: "单位价格" },
  apply: { EN: "Apply →", ZH: "应用 →" },
  exportPdf: { EN: "Export PDF", ZH: "导出 PDF" },
  exporting: { EN: "Exporting...", ZH: "导出中..." },

  // Health badge
  healthLow: { EN: "Low", ZH: "偏低" },
  healthFair: { EN: "Fair", ZH: "一般" },
  healthGood: { EN: "Good", ZH: "健康" },

  // PricingResult
  aiAnalysis: { EN: "AI Pricing Analysis", ZH: "AI 定价分析" },
  copyBtn: { EN: "📋 Copy", ZH: "📋 复制" },
  copiedBtn: { EN: "✓ Copied", ZH: "✓ 已复制" },

  // Loading steps
  loadingStep0: { EN: "🔍 Analyzing ingredient costs...", ZH: "🔍 分析食材成本结构..." },
  loadingStep1: { EN: "💡 Calculating profit margins...", ZH: "💡 计算最优利润区间..." },
  loadingStep2: { EN: "✍️ Building pricing strategy...", ZH: "✍️ 生成定价策略..." },
  loadingStep3: { EN: "📝 Writing menu copy...", ZH: "📝 撰写菜单文案..." },

  // Tier names (used in AI prompt and card display)
  tierBudget: { EN: "Budget", ZH: "经济档" },
  tierStandard: { EN: "Standard", ZH: "标准档" },
  tierPremium: { EN: "Premium", ZH: "高端档" },
  recommended: { EN: "Best", ZH: "推荐" },
  grossMargin: { EN: "Margin", ZH: "毛利" },

  // Section titles in AI response
  sectionPricing: { EN: "Pricing Tiers", ZH: "定价建议" },
  sectionStrategy: { EN: "Pricing Strategy", ZH: "定价策略分析" },
  sectionCopy: { EN: "Menu Copy", ZH: "菜单文案建议" },
  sectionBreakeven: { EN: "Break-Even", ZH: "损益平衡" },

  // History
  recentHistory: { EN: "🕐 Recent", ZH: "🕐 最近记录" },
  costLabel: { EN: "Cost", ZH: "成本" },
  recommended2: { EN: "→ Suggest", ZH: "→ 推荐" },
  recipeLibrary: { EN: "📚 Recipe Library", ZH: "📚 配方库" },
  recipeSaved: { EN: "saved", ZH: "已保存" },
  recipeIngredients: { EN: "ingredients", ZH: "种食材" },
  recipeCost: { EN: "cost", ZH: "成本" },
  deleteRecipe: { EN: "Delete", ZH: "删除" },
  confirmDelete: { EN: "Confirm?", ZH: "确认删除？" },
  marginComparison: { EN: "📊 Margin Comparison", ZH: "📊 利润率对比" },
  totalCostBaseline: { EN: "Total cost baseline", ZH: "总成本基准" },
  profit: { EN: "profit", ZH: "利润" },
  aiEstimated: { EN: "✨ AI Estimated", ZH: "✨ AI 估算" },
  currencyLabel: { EN: "Currency", ZH: "货币" },
  shareBtn: { EN: "Share", ZH: "分享" },
  shareCopied: { EN: "✓ Link copied!", ZH: "✓ 链接已复制！" },
  shareReadOnly: { EN: "Shared pricing analysis (read-only)", ZH: "共享定价分析（只读）" },
  reverseCalc: { EN: "Target Price Calculator", ZH: "目标售价反推" },
  reverseTarget: { EN: "Target selling price", ZH: "目标售价" },
  reverseMaxCost: { EN: "Max allowed cost (70% margin)", ZH: "最高成本上限（70% 毛利率）" },
  reverseCurrentMargin: { EN: "Margin at this price", ZH: "该售价下的利润率" },
  reverseTip: { EN: "Tip: Healthy restaurant margin is 65–75%", ZH: "建议：餐厅健康利润率为 65–75%" },
  validationError: { EN: "Please fill in the price for:", ZH: "请填写以下食材的单价：" },
  tabPricer: { EN: "Pricer", ZH: "定价" },
  tabMenu: { EN: "My Menu", ZH: "我的菜单" },
  addToMenu: { EN: "+ Add to Menu", ZH: "+ 加入菜单" },
  addedToMenu: { EN: "✓ Added!", ZH: "✓ 已加入！" },
  menuEmpty: { EN: "No dishes yet", ZH: "还没有菜品" },
  menuEmptyDesc: { EN: "Price a dish and click \"+ Add to Menu\" to build your menu.", ZH: "定价完成后点击「加入菜单」，即可在这里查看整份菜单。" },
  menuDishes: { EN: "dishes", ZH: "道菜" },
  menuAvgMargin: { EN: "Avg. margin", ZH: "平均利润率" },
  menuLowestCost: { EN: "Lowest cost", ZH: "最低成本" },
  menuExportPdf: { EN: "Export Menu PDF", ZH: "导出菜单 PDF" },
  menuAddMore: { EN: "+ Price more dishes", ZH: "+ 继续定价" },
  menuDelete: { EN: "Remove", ZH: "移除" },
  menuConfirmDelete: { EN: "Confirm?", ZH: "确认移除？" },
  menuCost: { EN: "Cost", ZH: "成本" },
  onboardTitle: { EN: "Welcome to MenuPricer 👋", ZH: "欢迎使用 MenuPricer 👋" },
  onboardSubtitle: { EN: "Price your menu in 3 simple steps", ZH: "3 步完成菜单定价" },
  onboardSkip: { EN: "Skip", ZH: "跳过" },
  onboardNext: { EN: "Next →", ZH: "下一步 →" },
  onboardStart: { EN: "Get Started →", ZH: "开始使用 →" },
  onboardStep1Title: { EN: "Enter dish name", ZH: "输入菜品名称" },
  onboardStep1Desc: { EN: "Type your dish name or pick a preset — you can also let AI estimate costs without filling anything.", ZH: "输入菜品名称，或选择预设菜品——也可以让 AI 直接估算成本，无需手动填写。" },
  onboardStep2Title: { EN: "Fill in ingredient costs", ZH: "填写食材成本" },
  onboardStep2Desc: { EN: "Add each ingredient with quantity and price. Use 📷 to scan a photo, or the ÷ button to convert package price to unit price automatically.", ZH: "添加食材名称、用量和价格。可用 📷 拍照识别食材，或点击 ÷ 按钮将包装价格自动换算为单位价格。" },
  onboardStep3Title: { EN: "Get AI pricing instantly", ZH: "立刻获取 AI 定价建议" },
  onboardStep3Desc: { EN: "Click \"Get AI Pricing\" to receive Budget / Standard / Premium tiers with margins, strategy tips, and ready-to-use menu copy.", ZH: "点击「获取 AI 定价建议」，即可获得实惠 / 标准 / 高端三档定价，含利润率分析、策略建议和可直接使用的菜单文案。" },

  // Empty state
  emptyHint: { EN: "👆 Fill in costs to generate analysis", ZH: "👆 填写左侧即可生成类似分析" },
  exampleLabel: { EN: "Example: General Tso's Chicken", ZH: "示例：左宗鸡" },

  // Mobile bar
  currentCost: { EN: "Total Cost", ZH: "当前总成本" },
  mobileSubmit: { EN: "Get Pricing →", ZH: "获取 AI 建议 →" },
  mobileLoading: { EN: "Analyzing...", ZH: "分析中..." },

  // FAQ
  faqTitle: { EN: "Frequently Asked Questions", ZH: "常见问题" },
  faq: {
    EN: [
      {
        q: "Which markets does the pricing cover?",
        a: "AI pricing benchmarks reference global restaurant markets. For North America, it considers competitor pricing (Panda Express, P.F. Chang's) and delivery platform commissions (DoorDash/Uber Eats 15-30%). Switch to ¥ CNY for China market benchmarks.",
      },
      {
        q: "Should delivery and dine-in use different prices?",
        a: "Yes. We recommend pricing delivery 15-20% higher to offset platform commissions. The 'Budget' tier suits delivery platforms, while 'Standard' and 'Premium' tiers suit dine-in or pickup.",
      },
      {
        q: "How is profit margin calculated?",
        a: "Gross Margin = (Price − Total Cost) ÷ Price × 100%. Total Cost includes ingredients, labor, overhead, and packaging. A healthy restaurant margin is typically 65-75%.",
      },
      {
        q: "What cuisines are supported?",
        a: "All cuisines — Chinese, Japanese, American, Mediterranean, and more. As long as you enter accurate ingredient costs, the AI will provide relevant pricing recommendations.",
      },
      {
        q: "What is a good food cost percentage for a restaurant?",
        a: "Most restaurants target 28–35% food cost. Fine dining can run 30–38% due to premium ingredients. Fast casual and QSR typically aim for 25–30%. Use our food cost calculator to check where your dishes stand.",
      },
      {
        q: "How do I price a menu item for the first time?",
        a: "Start with your ingredient cost, add 25–30% for labor and overhead, then divide by your target food cost percentage (e.g. 0.30 for 30%). MenuPricer automates this: just enter your costs or dish name and the AI handles the rest.",
      },
      {
        q: "Can I use MenuPricer without entering ingredient costs?",
        a: "Yes. Use Quick Estimate mode — just type the dish name and the AI estimates realistic North American ingredient costs from wholesale prices (Costco Business, US Foods, Restaurant Depot) and gives you a full pricing recommendation.",
      },
      {
        q: "How does the AI account for DoorDash and Uber Eats commissions?",
        a: "The AI factors in typical 15–30% delivery platform commissions when suggesting delivery prices. The 'Budget' pricing tier is specifically calibrated to maintain healthy margins after commission deductions.",
      },
      {
        q: "Can I export my menu pricing to PDF?",
        a: "Yes. After generating pricing for a dish, click 'Export PDF' to download a branded report with cost breakdown, 3 pricing tiers, and AI analysis. You can also build a full menu and export all dishes at once from the Menu tab.",
      },
      {
        q: "Is MenuPricer free to use?",
        a: "Yes, the core pricing tool is free with no credit card required. You can calculate pricing for unlimited dishes, save recipes, and export PDFs without signing up.",
      },
      {
        q: "How accurate are the AI ingredient cost estimates?",
        a: "The AI references typical North American wholesale prices and is accurate within 10–20% for most common ingredients. For the most accurate results, enter your actual supplier costs using the manual ingredient entry mode.",
      },
      {
        q: "Can I save my recipes and pricing history?",
        a: "Yes. MenuPricer automatically saves your last 10 pricing analyses in History and lets you save unlimited recipes to your Recipe Library — all stored locally in your browser. Sign in with Google to sync across devices (coming soon).",
      },
      {
        q: "What currencies does MenuPricer support?",
        a: "MenuPricer supports USD ($), CNY (¥), and EUR (€). Switch currencies using the toggle in the top navigation bar. The AI will adjust pricing benchmarks to match the selected market.",
      },
      {
        q: "How do I calculate break-even for a menu item?",
        a: "The AI includes a break-even analysis in every pricing report — it tells you how many servings you need to sell per day to cover fixed costs (assuming $150/day in rent, utilities, and labor). You can adjust this based on your actual fixed costs.",
      },
      {
        q: "Can I use MenuPricer for a food truck or ghost kitchen?",
        a: "Absolutely. MenuPricer works for all food service formats — restaurants, food trucks, ghost kitchens, catering, and bakeries. The AI tailors pricing recommendations based on your market context and cost structure.",
      },
      {
        q: "Does MenuPricer generate menu descriptions?",
        a: "Yes. Every AI pricing report includes a professionally written menu copy — a 15–30 word description designed to appeal to customers and highlight the dish's key selling points. Ready to copy directly onto your menu.",
      },
    ],
    ZH: [
      {
        q: "定价建议基于哪个市场？",
        a: "AI 支持全球市场定价。切换货币为 $ 时，参考北美市场（含 Panda Express 等竞品及外卖平台佣金）；切换为 ¥ 时，参考中国大陆市场行情。",
      },
      {
        q: "外卖和堂食应该用不同定价吗？",
        a: "建议外卖价比堂食高 15-20%，以覆盖平台佣金成本。AI 给出的「经济档」更适合平台外卖，「标准档/高端档」更适合堂食。",
      },
      {
        q: "利润率怎么算的？",
        a: "毛利率 = (售价 - 总成本) ÷ 售价 × 100%。总成本含食材、人工、水电和包装。餐饮健康毛利率通常在 65-75%。",
      },
      {
        q: "支持哪些菜系？",
        a: "支持所有菜系！中餐、日料、西餐、融合菜等均可。只要填入准确的食材成本，AI 都能给出合理的定价建议。",
      },
      {
        q: "餐厅食材成本率应该控制在多少？",
        a: "大多数餐厅目标食材成本率在 28-35% 之间。精致餐厅可以稍高（30-38%），快餐和快休闲餐厅通常控制在 25-30%。可用我们的食材成本计算器检查你的菜品是否达标。",
      },
      {
        q: "第一次给菜品定价怎么做？",
        a: "先算食材成本，加上 25-30% 的人工和运营费用，再除以目标成本率（比如 30% → 除以 0.30）。MenuPricer 自动完成这些计算——只要填入成本或菜名，AI 搞定一切。",
      },
      {
        q: "不知道食材成本也能用吗？",
        a: "可以。用「快速估算」模式，只输入菜名，AI 会根据北美批发市场价格（Costco Business、美国食品等）自动估算食材成本，给出完整定价建议。",
      },
      {
        q: "AI 怎么处理外卖平台抽成？",
        a: "AI 会将 DoorDash、Uber Eats 等平台 15-30% 的抽成纳入计算。「经济档」定价专门为外卖场景设计，扣除平台佣金后依然保持健康利润。",
      },
      {
        q: "可以导出 PDF 吗？",
        a: "可以。生成定价后点击「导出 PDF」即可下载带品牌设计的完整报告，包含成本明细、三档定价和 AI 分析。也可以在「菜单」标签页批量导出整份菜单。",
      },
      {
        q: "MenuPricer 免费吗？",
        a: "核心定价功能完全免费，无需信用卡或注册账号。可以无限次计算菜品定价、保存食谱、导出 PDF。",
      },
      {
        q: "AI 估算的食材成本准确吗？",
        a: "AI 参考北美批发市场价格，对常见食材的估算误差通常在 10-20% 以内。如果需要更精确的结果，建议手动输入实际供应商价格。",
      },
      {
        q: "可以保存食谱和定价历史吗？",
        a: "可以。MenuPricer 自动保存最近 10 条定价记录，食谱库可无限保存——数据存在本地浏览器中。登录 Google 账号后可跨设备同步（即将上线）。",
      },
      {
        q: "支持哪些货币？",
        a: "支持美元（$）、人民币（¥）和欧元（€）。在顶部导航栏切换货币后，AI 会自动调整对应市场的定价基准。",
      },
      {
        q: "如何计算菜品保本销量？",
        a: "AI 定价报告中包含保本分析，告诉你每天需要售出多少份才能覆盖固定成本（默认按每日 $150 的房租、水电和人工计算）。可根据实际情况调整。",
      },
      {
        q: "餐车或外卖品牌也能用吗？",
        a: "完全可以。MenuPricer 适用于各类餐饮形式——堂食餐厅、餐车、外卖品牌、外卖厨房、烘焙店等。AI 会根据你的经营模式调整定价建议。",
      },
      {
        q: "AI 会生成菜单文案吗？",
        a: "会的。每份定价报告都包含一句专业菜单介绍文案（15-30 字），突出菜品卖点，可直接复制到菜单上使用。",
      },
    ],
  },
};

export function t(key: keyof Omit<typeof translations, "faq">, lang: Lang): string {
  return translations[key][lang] ?? translations[key]["EN"];
}

export function getFaq(lang: Lang) {
  return translations.faq[lang];
}

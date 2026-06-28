import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: process.env.DATAEYESAI_BASE_URL ?? "https://api.anthropic.com",
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { dishName, totalCost, ingredientCost, breakdown, estimateMode, lang } = body;
  const isZH = lang === "ZH";

  const prompt = estimateMode
    ? isZH
      ? `你是一位专业的餐厅成本分析师和定价顾问，专注于北美市场。

用户仅提供了菜品名称："${dishName}"

你的任务：
1. 根据北美批发/餐厅供应商价格（Costco Business、Restaurant Depot、US Foods）估算单份食材成本。
2. 计算含人工成本（15%）和运营费用（10%）的总成本。
3. 提供专业的定价建议。

请严格按照以下格式回复（不得省略任何部分，价格使用美元）：

## 估算食材
（每行格式：• 食材名 — 用量 — 估算成本：$X.XX）

## 估算成本
- 食材成本：$X.XX
- 人工（15%）：$X.XX
- 运营费用（10%）：$X.XX
- **总成本：$X.XX**

## Pricing Tiers

**Budget**
Price: $X.XX
Margin: XX%
Best for: （例：外卖平台、午餐特供）

**Standard (Recommended)**
Price: $X.XX
Margin: XX%
Best for: （例：堂食、晚餐服务）

**Premium**
Price: $X.XX
Margin: XX%
Best for: （例：特殊场合、高端餐厅）

## 定价策略
（2-3句话，涵盖心理定价、竞品参考、外卖与堂食差异）

## 菜单文案
（1句吸引人的中文菜单介绍，15-30字）

## 保本分析
每日需售出约 X 份才能覆盖固定成本（假设每日固定成本 $150）

注意：以上为 AI 根据北美市场价格估算，请结合实际供应商成本调整。`
      : `You are a professional restaurant cost analyst and pricing consultant specializing in North American markets.

The user only provided a dish name: "${dishName}"

Your job:
1. Estimate realistic ingredient costs based on North American wholesale/restaurant supplier prices (Costco Business, Restaurant Depot, US Foods). Assume a single serving portion.
2. Calculate total cost including typical labor (15%) and overhead (10%).
3. Provide professional pricing recommendations.

Respond in this EXACT format (do not skip any section):

## Estimated Ingredients
(List each ingredient as: • Name — Qty — Est. cost: $X.XX)

## Estimated Costs
- Ingredient cost: $X.XX
- Labor (15%): $X.XX
- Overhead (10%): $X.XX
- **Total cost: $X.XX**

## Pricing Tiers

**Budget**
Price: $X.XX
Margin: XX%
Best for: (e.g. delivery platforms, lunch specials)

**Standard (Recommended)**
Price: $X.XX
Margin: XX%
Best for: (e.g. dine-in, dinner service)

**Premium**
Price: $X.XX
Margin: XX%
Best for: (e.g. special occasions, upscale dining)

## Pricing Strategy
(2-3 specific sentences on psychological pricing, competitor benchmarks, delivery vs dine-in)

## Menu Copy
(1 compelling English menu description, 15-30 words)

## Break-Even
Daily units needed to cover fixed costs (assuming $150/day): ~X units

Note: These are AI estimates based on typical North American wholesale prices. Adjust based on your actual supplier costs.`

    : isZH
      ? `你是一位专业的餐厅定价顾问，精通全球餐饮市场、食材成本和定价心理学。

菜品信息：
- 菜品：${dishName}
- 食材成本：$${ingredientCost.toFixed(2)}
- 总成本（含人工和运营费用）：$${totalCost.toFixed(2)}
- 食材明细：${breakdown}

市场背景：北美餐饮市场（美国/加拿大）。竞品参考：熊猫快餐、P.F. Chang's、当地休闲餐厅。考虑外卖平台抽成（DoorDash/Uber Eats 15-30%）和人工成本（$16-20/小时）。

请严格按照以下格式回复（价格使用美元）：

## Pricing Tiers

**Budget**
Price: $X.XX
Margin: XX%
Best for: （例：外卖平台、午餐特供）

**Standard (Recommended)**
Price: $X.XX
Margin: XX%
Best for: （例：堂食、晚餐服务）

**Premium**
Price: $X.XX
Margin: XX%
Best for: （例：特殊场合、高端用餐）

## 定价策略
（2-3句话，涵盖心理定价技巧、竞品价格参考、外卖与堂食定价差异）

## 菜单文案
（1句吸引人的中文菜单介绍，15-30字，突出核心卖点）

## 保本分析
每日需售出约 X 份才能覆盖固定成本（假设每日房租/人工/水电 $150）

请提供具体、专业、有数据支撑的分析。`
      : `You are a professional restaurant pricing consultant with deep expertise in global restaurant markets, food costs, and pricing psychology.

Dish info:
- Dish: ${dishName}
- Ingredient cost: $${ingredientCost.toFixed(2)}
- Total cost (incl. labor & overhead): $${totalCost.toFixed(2)}
- Breakdown: ${breakdown}

Market context: North American restaurant market (US/Canada). Competitor benchmarks: Panda Express, P.F. Chang's, local casual dining. Factor in delivery platform commissions (DoorDash/Uber Eats 15-30%) and labor costs ($16-20/hr).

Respond in this EXACT format:

## Pricing Tiers

**Budget**
Price: $X.XX
Margin: XX%
Best for: (e.g. delivery platforms, lunch specials)

**Standard (Recommended)**
Price: $X.XX
Margin: XX%
Best for: (e.g. dine-in, dinner service)

**Premium**
Price: $X.XX
Margin: XX%
Best for: (e.g. special occasions, upscale dining)

## Pricing Strategy
(2-3 specific sentences on psychological pricing, competitor benchmarks, delivery vs dine-in)

## Menu Copy
(1 compelling English menu description, 15-30 words, highlight key selling points)

## Break-Even
Daily units needed to cover fixed costs (assuming $150/day in rent/labor/utilities): ~X units

Be specific, professional, and data-driven.`;

  const stream = await client.messages.stream({
    model: "claude-opus-4-7",
    max_tokens: 1500,
    messages: [{ role: "user", content: prompt }],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

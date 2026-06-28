import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: process.env.DATAEYESAI_BASE_URL ?? "https://api.anthropic.com",
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { image, mimeType } = body as { image: string; mimeType: string };

  const prompt = `Look at this image and identify all food ingredients or items visible. This may be a photo of raw ingredients, a grocery receipt, a menu, or food packaging.

Return ONLY a JSON array (no markdown, no explanation) in this exact format:
[
  {"name": "ingredient name in English", "quantity": "numeric amount", "unit": "g/kg/pc/lb/oz/ml/L", "unitPrice": 0}
]

Rules:
- Use English ingredient names
- If quantity is not visible, use "100" and unit "g" as default
- For liquids use "ml", for countable items use "pc", for solids use "g"
- If price is visible on a receipt, fill unitPrice as a number (per unit, in USD)
- If price is not visible, use 0
- Extract up to 10 ingredients max
- Return only the JSON array, nothing else`;

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mimeType as "image/jpeg" | "image/png" | "image/gif" | "image/webp",
                data: image,
              },
            },
            { type: "text", text: prompt },
          ],
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "[]";
    const cleaned = text.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
    const ingredients = JSON.parse(cleaned);
    return Response.json({ ingredients });
  } catch (err) {
    return Response.json({ error: String(err), ingredients: [] }, { status: 500 });
  }
}

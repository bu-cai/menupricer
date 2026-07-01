import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sql } from "@vercel/postgres";
import { ensureTables } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return Response.json([], { status: 401 });
  try {
    await ensureTables();
    const { rows } = await sql`
      SELECT id, dish_name, form_data, total_cost, ingredient_count, saved_at
      FROM user_recipes WHERE user_id = ${session.user.email}
      ORDER BY saved_at DESC
    `;
    return Response.json(rows.map(r => ({
      id: r.id, dishName: r.dish_name, formData: r.form_data,
      totalCost: r.total_cost, ingredientCount: r.ingredient_count, savedAt: r.saved_at,
    })));
  } catch {
    return Response.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await ensureTables();
    const items = await req.json();
    const userId = session.user.email;
    await sql`DELETE FROM user_recipes WHERE user_id = ${userId}`;
    for (const item of items) {
      await sql`
        INSERT INTO user_recipes (id, user_id, dish_name, form_data, total_cost, ingredient_count, saved_at)
        VALUES (${item.id}, ${userId}, ${item.dishName}, ${JSON.stringify(item.formData)},
                ${item.totalCost}, ${item.ingredientCount}, ${item.savedAt})
        ON CONFLICT (id, user_id) DO UPDATE
        SET dish_name = EXCLUDED.dish_name, form_data = EXCLUDED.form_data,
            total_cost = EXCLUDED.total_cost, ingredient_count = EXCLUDED.ingredient_count
      `;
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "DB error" }, { status: 500 });
  }
}

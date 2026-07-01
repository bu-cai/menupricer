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
      SELECT id, dish_name, total_cost, suggested_price, form_data, timestamp
      FROM user_history WHERE user_id = ${session.user.email}
      ORDER BY timestamp DESC LIMIT 20
    `;
    return Response.json(rows.map(r => ({
      id: r.id, dishName: r.dish_name, totalCost: r.total_cost,
      suggestedPrice: r.suggested_price, formData: r.form_data, timestamp: r.timestamp,
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
    await sql`DELETE FROM user_history WHERE user_id = ${userId}`;
    for (const item of items) {
      await sql`
        INSERT INTO user_history (id, user_id, dish_name, total_cost, suggested_price, form_data, timestamp)
        VALUES (${item.id}, ${userId}, ${item.dishName}, ${item.totalCost},
                ${item.suggestedPrice ?? null}, ${JSON.stringify(item.formData ?? null)}, ${item.timestamp})
        ON CONFLICT (id, user_id) DO NOTHING
      `;
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "DB error" }, { status: 500 });
  }
}

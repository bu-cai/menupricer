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
      SELECT id, dish_name, total_cost, tiers, added_at
      FROM user_menus WHERE user_id = ${session.user.email}
      ORDER BY added_at DESC
    `;
    return Response.json(rows.map(r => ({
      id: r.id, dishName: r.dish_name, totalCost: r.total_cost,
      tiers: r.tiers, addedAt: r.added_at,
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
    // Replace all menus for this user
    await sql`DELETE FROM user_menus WHERE user_id = ${userId}`;
    for (const item of items) {
      await sql`
        INSERT INTO user_menus (id, user_id, dish_name, total_cost, tiers, added_at)
        VALUES (${item.id}, ${userId}, ${item.dishName}, ${item.totalCost},
                ${JSON.stringify(item.tiers)}, ${item.addedAt})
        ON CONFLICT (id, user_id) DO UPDATE
        SET dish_name = EXCLUDED.dish_name, total_cost = EXCLUDED.total_cost,
            tiers = EXCLUDED.tiers, added_at = EXCLUDED.added_at
      `;
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "DB error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await req.json();
    await sql`DELETE FROM user_menus WHERE id = ${id} AND user_id = ${session.user.email}`;
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "DB error" }, { status: 500 });
  }
}

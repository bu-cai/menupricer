import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// One-time fix route — delete after use
// Access: GET /api/admin/fix-pro-users?secret=fix2026

const SECRET = "fix2026";

// Confirmed paying users from Stripe dashboard — grant 1 year Pro
const PAYING_EMAILS = [
  "veronikar004@gmail.com",
  "adamadmintech@hotmail.com",
  "rodrigolaiseq@gmail.com",
];

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Show all users in DB first so we can debug
  const { rows: allUsers } = await sql`SELECT id, email, plan, plan_expires_at FROM users`;

  const results = [];
  const expiresAt = Date.now() + ONE_YEAR;

  for (const email of PAYING_EMAILS) {
    const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (rows.length === 0) {
      results.push({ email, status: "not in DB — user has not logged in yet" });
      continue;
    }

    await sql`
      UPDATE users SET plan = 'pro', plan_expires_at = ${expiresAt}
      WHERE email = ${email}
    `;

    results.push({
      email,
      status: "upgraded",
      expiresAt: new Date(expiresAt).toISOString(),
    });
  }

  return NextResponse.json({ allUsers, results });
}

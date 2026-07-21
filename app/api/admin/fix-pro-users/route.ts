import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

// One-time fix route — delete after use
// Access: GET /api/admin/fix-pro-users?secret=fix2026

const SECRET = "fix2026";

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

  // Debug: find which DB env var is available
  const connStr =
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.DATABASE_URL ??
    process.env.NEON_DATABASE_URL ??
    process.env.POSTGRES_URL_NON_POOLING;

  const availableDbVars = [
    "POSTGRES_URL",
    "POSTGRES_PRISMA_URL",
    "DATABASE_URL",
    "NEON_DATABASE_URL",
    "POSTGRES_URL_NON_POOLING",
  ].filter((k) => !!process.env[k]);

  if (!connStr) {
    return NextResponse.json({
      error: "No database connection string found",
      availableDbVars,
      allEnvKeys: Object.keys(process.env).filter((k) =>
        k.includes("POST") || k.includes("DATABASE") || k.includes("NEON") || k.includes("PG")
      ),
    });
  }

  const sql = neon(connStr);

  const allUsers = await sql`SELECT id, email, plan, plan_expires_at FROM users`;

  const results = [];
  const expiresAt = Date.now() + ONE_YEAR;

  for (const email of PAYING_EMAILS) {
    const rows = await sql`SELECT * FROM users WHERE email = ${email}`;

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

  return NextResponse.json({ connVarUsed: availableDbVars[0], allUsers, results });
}

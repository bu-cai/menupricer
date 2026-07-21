import { NextRequest, NextResponse } from "next/server";
import { ensureUsers, ensureTables } from "@/lib/db";

// One-time DB init — delete after use
// Access: GET /api/admin/init-db?secret=fix2026

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("secret") !== "fix2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await ensureUsers();
  await ensureTables();
  return NextResponse.json({ ok: true, message: "Tables created successfully" });
}

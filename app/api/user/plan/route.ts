import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser, upsertUser } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string })?.id;
  if (!userId) {
    return NextResponse.json({ plan: "free" });
  }

  await upsertUser(userId, session?.user?.email ?? "");
  const user = await getUser(userId);

  const plan = user?.plan === "pro" && user.plan_expires_at > Date.now() ? "pro" : "free";
  return NextResponse.json({ plan, expiresAt: user?.plan_expires_at ?? null });
}

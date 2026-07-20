import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";

// One-time fix route — delete after use
// Access: GET /api/admin/fix-pro-users?secret=fix2026

const SECRET = "fix2026";
const PAYING_EMAILS = [
  "veronikar004@gmail.com",
  "adamadmintech@hotmail.com",
  "rodrigolaiseq@gmail.com",
];

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = [];

  for (const email of PAYING_EMAILS) {
    try {
      // Find Stripe customer
      const customers = await stripe.customers.list({ email, limit: 1 });
      if (customers.data.length === 0) {
        results.push({ email, status: "no stripe customer" });
        continue;
      }
      const customer = customers.data[0];

      // Get active subscription
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 1,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let expiresAt: number;
      if (subscriptions.data.length > 0) {
        const sub = subscriptions.data[0] as any;
        expiresAt = (sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end ?? 0) * 1000;
      } else {
        expiresAt = Date.now() + 365 * 24 * 60 * 60 * 1000;
      }

      // Check if user in DB
      const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;
      if (rows.length === 0) {
        results.push({ email, status: "not in DB — user has not logged in yet" });
        continue;
      }

      // Upgrade to pro
      await sql`
        UPDATE users
        SET plan = 'pro', plan_expires_at = ${expiresAt}, stripe_customer_id = ${customer.id}
        WHERE email = ${email}
      `;

      results.push({
        email,
        status: "upgraded",
        customerId: customer.id,
        expiresAt: new Date(expiresAt).toISOString(),
      });
    } catch (err) {
      results.push({ email, status: "error", error: String(err) });
    }
  }

  return NextResponse.json({ results });
}

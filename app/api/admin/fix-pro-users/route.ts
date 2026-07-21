import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";

// One-time fix route — delete after use
// Access: GET /api/admin/fix-pro-users?secret=fix2026

const SECRET = "fix2026";

// Payment Intent IDs from Stripe dashboard transactions
const PAYMENT_INTENTS = [
  "pi_3TuWFuIJCbRETctE1YnNIL4a", // veronikar004@gmail.com  Jul 18
  "pi_3TsxeoIJCbRETctE1jb8Z6nd", // adamadmintech@hotmail.com  Jul 14
  "pi_3TlyGqIJCbRETctE13mpWS1t", // rodrigolaiseq@gmail.com  Jun 25
];

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("secret") !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = [];

  for (const piId of PAYMENT_INTENTS) {
    try {
      // Get payment intent to find customer + email
      const pi = await stripe.paymentIntents.retrieve(piId);
      const email = (pi as any).receipt_email ?? (pi as any).charges?.data?.[0]?.billing_details?.email;
      const customerId = pi.customer as string | null;

      if (!customerId) {
        results.push({ piId, email, status: "no customer on payment intent" });
        continue;
      }

      // Get active subscription for this customer
      const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: "active",
        limit: 1,
      });

      let expiresAt: number;
      if (subscriptions.data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sub = subscriptions.data[0] as any;
        expiresAt = (sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end ?? 0) * 1000;
      } else {
        // Grace: 1 year from payment date
        expiresAt = (pi.created + 365 * 24 * 60 * 60) * 1000;
      }

      // Find user in DB by email
      if (!email) {
        results.push({ piId, customerId, status: "no email found on payment" });
        continue;
      }

      const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;
      if (rows.length === 0) {
        results.push({ piId, email, status: "not in DB — user has not logged in yet" });
        continue;
      }

      await sql`
        UPDATE users
        SET plan = 'pro', plan_expires_at = ${expiresAt}, stripe_customer_id = ${customerId}
        WHERE email = ${email}
      `;

      results.push({
        piId,
        email,
        customerId,
        status: "upgraded",
        expiresAt: new Date(expiresAt).toISOString(),
      });
    } catch (err) {
      results.push({ piId, status: "error", error: String(err) });
    }
  }

  return NextResponse.json({ results });
}

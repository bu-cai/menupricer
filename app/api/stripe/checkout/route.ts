import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser, upsertUser, setStripeCustomerId } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const BASE_URL = process.env.NEXTAUTH_URL ?? "https://www.aimenupricer.com";

export async function POST() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string })?.id;
  if (!session?.user?.email || !userId) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  await upsertUser(userId, session.user.email);
  let user = await getUser(userId);

  let customerId = user?.stripe_customer_id;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email,
      metadata: { userId },
    });
    customerId = customer.id;
    await setStripeCustomerId(userId, customerId);
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: process.env.STRIPE_PRO_PRICE_ID!, quantity: 1 }],
    success_url: `${BASE_URL}/?upgraded=1`,
    cancel_url: `${BASE_URL}/`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: checkoutSession.url });
}

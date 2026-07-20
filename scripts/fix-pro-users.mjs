/**
 * Fix paying users who were charged but not upgraded to Pro.
 * Run once: node scripts/fix-pro-users.mjs
 *
 * Requires env vars: STRIPE_SECRET_KEY, POSTGRES_URL
 */

import Stripe from "stripe";
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse .env.local manually
const envFile = readFileSync(join(__dirname, "../.env.local"), "utf8");
for (const line of envFile.split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const sql = neon(process.env.POSTGRES_URL);

// Emails of the 3 paying users from Stripe dashboard
const PAYING_EMAILS = [
  "veronikar004@gmail.com",
  "adamadmintech@hotmail.com",
  "rodrigolaiseq@gmail.com",
];

async function main() {
  console.log("=== Fix Pro Users ===\n");

  for (const email of PAYING_EMAILS) {
    console.log(`Processing: ${email}`);

    // 1. Find Stripe customer by email
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) {
      console.log(`  ❌ No Stripe customer found for ${email}\n`);
      continue;
    }
    const customer = customers.data[0];
    console.log(`  ✓ Stripe customer: ${customer.id}`);

    // 2. Get their active subscription
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
      limit: 1,
    });

    let expiresAt;
    if (subscriptions.data.length > 0) {
      const sub = subscriptions.data[0];
      expiresAt =
        (sub.current_period_end ??
          sub.items?.data?.[0]?.current_period_end ??
          0) * 1000;
      console.log(`  ✓ Active subscription, expires: ${new Date(expiresAt).toISOString()}`);
    } else {
      // No active sub — set expiry 1 year from now as a grace period
      expiresAt = Date.now() + 365 * 24 * 60 * 60 * 1000;
      console.log(`  ⚠️  No active subscription found, granting 1-year grace period`);
    }

    // 3. Check if user exists in DB by email
    const rows = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (rows.length === 0) {
      console.log(`  ⚠️  User not in DB yet (never logged in). Skipping — they'll be upgraded on first login once webhook is live.\n`);
      continue;
    }

    const user = rows[0];
    console.log(`  ✓ DB user id: ${user.id}, current plan: ${user.plan}`);

    // 4. Update stripe_customer_id if missing
    if (!user.stripe_customer_id) {
      await sql`UPDATE users SET stripe_customer_id = ${customer.id} WHERE email = ${email}`;
      console.log(`  ✓ Linked stripe_customer_id: ${customer.id}`);
    }

    // 5. Set plan to pro
    await sql`
      UPDATE users
      SET plan = 'pro', plan_expires_at = ${expiresAt}, stripe_customer_id = ${customer.id}
      WHERE email = ${email}
    `;
    console.log(`  ✅ Upgraded to Pro until ${new Date(expiresAt).toLocaleDateString()}\n`);
  }

  console.log("=== Done ===");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

import { sql } from "@vercel/postgres";

export async function ensureUsers() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE,
      stripe_customer_id TEXT,
      plan TEXT DEFAULT 'free',
      plan_expires_at BIGINT
    )
  `;
}

export async function getUser(userId: string) {
  const { rows } = await sql`SELECT * FROM users WHERE id = ${userId}`;
  return rows[0] ?? null;
}

export async function upsertUser(userId: string, email: string) {
  await sql`
    INSERT INTO users (id, email) VALUES (${userId}, ${email})
    ON CONFLICT (id) DO UPDATE SET email = ${email}
  `;
}

export async function setUserPro(stripeCustomerId: string, expiresAt: number) {
  await sql`
    UPDATE users SET plan = 'pro', plan_expires_at = ${expiresAt}
    WHERE stripe_customer_id = ${stripeCustomerId}
  `;
}

export async function setUserFree(stripeCustomerId: string) {
  await sql`
    UPDATE users SET plan = 'free', plan_expires_at = NULL
    WHERE stripe_customer_id = ${stripeCustomerId}
  `;
}

export async function setStripeCustomerId(userId: string, customerId: string) {
  await sql`
    UPDATE users SET stripe_customer_id = ${customerId} WHERE id = ${userId}
  `;
}

export async function ensureTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS user_menus (
      id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      dish_name TEXT NOT NULL,
      total_cost FLOAT DEFAULT 0,
      tiers JSONB DEFAULT '[]',
      added_at BIGINT DEFAULT 0,
      PRIMARY KEY (id, user_id)
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS user_history (
      id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      dish_name TEXT NOT NULL,
      total_cost FLOAT DEFAULT 0,
      suggested_price FLOAT,
      form_data JSONB,
      timestamp BIGINT DEFAULT 0,
      PRIMARY KEY (id, user_id)
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS user_recipes (
      id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      dish_name TEXT NOT NULL,
      form_data JSONB,
      total_cost FLOAT DEFAULT 0,
      ingredient_count INT DEFAULT 0,
      saved_at BIGINT DEFAULT 0,
      PRIMARY KEY (id, user_id)
    )
  `;
}

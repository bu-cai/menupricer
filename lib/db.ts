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

// ── Rate limiting ─────────────────────────────────────────────────────────────

const FREE_USER_DAILY_LIMIT = 3;
const ANON_DAILY_LIMIT = 2;

function todayStr() {
  return new Date().toISOString().slice(0, 10); // "2026-07-21"
}

/** Ensure rate-limit columns exist on users table and ip_rate_limits table exists */
export async function ensureRateLimitTables() {
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS ai_calls_today INT DEFAULT 0`;
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS ai_calls_date TEXT DEFAULT ''`;
  await sql`
    CREATE TABLE IF NOT EXISTS ip_rate_limits (
      ip TEXT PRIMARY KEY,
      calls_today INT DEFAULT 0,
      date TEXT DEFAULT ''
    )
  `;
}

/**
 * Check + increment rate limit for a logged-in free user.
 * Returns true if allowed, false if limit exceeded.
 */
export async function checkUserRateLimit(userId: string): Promise<boolean> {
  await ensureRateLimitTables();
  const today = todayStr();
  const { rows } = await sql`SELECT ai_calls_today, ai_calls_date FROM users WHERE id = ${userId}`;
  const row = rows[0];
  if (!row) return true; // user not found, allow (upsert will create them)

  const calls = row.ai_calls_date === today ? (row.ai_calls_today ?? 0) : 0;
  if (calls >= FREE_USER_DAILY_LIMIT) return false;

  await sql`
    UPDATE users
    SET ai_calls_today = ${calls + 1}, ai_calls_date = ${today}
    WHERE id = ${userId}
  `;
  return true;
}

/**
 * Check + increment rate limit for an anonymous user by IP.
 * Returns true if allowed, false if limit exceeded.
 */
export async function checkIpRateLimit(ip: string): Promise<boolean> {
  await ensureRateLimitTables();
  const today = todayStr();
  const { rows } = await sql`SELECT calls_today, date FROM ip_rate_limits WHERE ip = ${ip}`;
  const row = rows[0];

  const calls = row?.date === today ? (row.calls_today ?? 0) : 0;
  if (calls >= ANON_DAILY_LIMIT) return false;

  await sql`
    INSERT INTO ip_rate_limits (ip, calls_today, date) VALUES (${ip}, ${calls + 1}, ${today})
    ON CONFLICT (ip) DO UPDATE SET calls_today = ${calls + 1}, date = ${today}
  `;
  return true;
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

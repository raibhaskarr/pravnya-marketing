// Password login with a signed session cookie. The password is stored only as an scrypt hash
// (make one with `node dashboard/hash-password.mjs`).
import crypto from "node:crypto";

const COOKIE = "pravnya_social";
const TTL = 14 * 24 * 3600 * 1000;

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  return `scrypt:${salt.toString("base64url")}:${crypto.scryptSync(password, salt, 32).toString("base64url")}`;
}

export function verifyPassword(password, stored) {
  const [kind, salt, hash] = String(stored || "").split(":");
  if (kind !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "base64url");
  const actual = crypto.scryptSync(String(password), Buffer.from(salt, "base64url"), expected.length);
  return crypto.timingSafeEqual(actual, expected);
}

export function createAuth(secret) {
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters");
  const sign = (data) => crypto.createHmac("sha256", secret).update(data).digest("base64url");

  return {
    cookieFor() {
      const payload = Buffer.from(JSON.stringify({ exp: Date.now() + TTL })).toString("base64url");
      return `${COOKIE}=${payload}.${sign(payload)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${TTL / 1000}`;
    },
    clearCookie: () => `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    isSignedIn(req) {
      const raw = (req.headers.cookie || "").split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`));
      if (!raw) return false;
      const [payload, sig] = raw.slice(COOKIE.length + 1).split(".");
      if (!payload || !sig) return false;
      const good = Buffer.from(sign(payload));
      const given = Buffer.from(sig);
      if (good.length !== given.length || !crypto.timingSafeEqual(good, given)) return false;
      try {
        return JSON.parse(Buffer.from(payload, "base64url").toString()).exp > Date.now();
      } catch {
        return false;
      }
    },
  };
}

/** Allows `limit` failed logins per IP (and 4× that overall) in a rolling window. */
export function createLimiter(limit = 5, windowMs = 15 * 60 * 1000) {
  const fails = new Map();
  const recent = (key) => (fails.get(key) || []).filter((t) => Date.now() - t < windowMs);
  return {
    blocked: (ip) => recent(ip).length >= limit || recent("*").length >= limit * 4,
    fail(ip) {
      for (const key of [ip, "*"]) fails.set(key, [...recent(key), Date.now()]);
    },
    reset: (ip) => fails.delete(ip),
  };
}

import { timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";

export const TEST_ACCOUNT = "test@qadence.dev";
export const SESSION_COOKIE = "demo_session";

// QAdence sends its test token on every request to the preview. A request carrying
// it is the dedicated test account. Ignored when QADENCE_TEST_TOKEN is unset.
function isTestToken(sent: string | null): boolean {
  const want = process.env.QADENCE_TEST_TOKEN;
  if (!want || !sent) return false;
  const a = Buffer.from(sent);
  const b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** The signed-in email, or null. Demo-grade: the session cookie is just the email. */
export async function currentUser(): Promise<string | null> {
  if (isTestToken((await headers()).get("x-qadence-test-token"))) return TEST_ACCOUNT;
  return (await cookies()).get(SESSION_COOKIE)?.value ?? null;
}

import { SESSION_COOKIE } from "@/lib/session";

export async function POST(request: Request) {
  const email = String((await request.formData()).get("email") ?? "").trim();
  if (!email) return new Response("email is required", { status: 400 });
  return new Response(null, {
    status: 303,
    headers: {
      Location: "/account",
      "Set-Cookie": `${SESSION_COOKIE}=${encodeURIComponent(email)}; Path=/; HttpOnly; SameSite=Lax`,
    },
  });
}

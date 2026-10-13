export async function POST(request: Request) {
  const form = await request.formData();
  // Normalise before sending on: trimmed message, lower-case email.
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const message = (form.get("message") as string).trim();
  if (!email.includes("@") || !message) {
    return new Response("a valid email and a message are required", { status: 400 });
  }
  return Response.redirect(new URL("/contact?sent=1", request.url), 303);
}

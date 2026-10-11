export async function POST(request: Request) {
  const form = await request.formData();
  if (!form.get("email") || !form.get("message")) {
    return new Response("email and message are required", { status: 400 });
  }
  return Response.redirect(new URL("/contact?sent=1", request.url), 303);
}

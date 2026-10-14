import { saveMessage } from "@/lib/messages";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get("email");
  const message = form.get("message");
  if (!email || !message) {
    return new Response("email and message are required", { status: 400 });
  }
  return Response.json(saveMessage(String(email), String(message)), { status: 201 });
}

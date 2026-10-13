import { listOrders } from "@/lib/orders";
import { currentUser } from "@/lib/session";

export async function GET() {
  const email = await currentUser();
  if (!email) return Response.json({ error: "sign in required" }, { status: 401 });
  return Response.json({ email, orders: listOrders() });
}

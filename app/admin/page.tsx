import { redirect } from "next/navigation";
import { listOrders } from "@/lib/orders";
import { currentRole } from "@/lib/session";

// Owner only: everyone else is sent away, signed-out visitors to sign in.
export default async function Admin() {
  const role = await currentRole();
  if (!role) redirect("/signin");
  if (role !== "owner") redirect("/");
  const orders = listOrders();
  const revenue = orders.reduce((sum, o) => o.total, 0);
  return (
    <>
      <h1>Admin</h1>
      <p>{orders.length} orders on file. Only owners see this page.</p>
      <p>Revenue: ${revenue}</p>
    </>
  );
}

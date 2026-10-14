import { redirect } from "next/navigation";
import { listOrders } from "@/lib/orders";
import { currentRole } from "@/lib/session";

// Owner only, like /admin.
export default async function AdminOrders() {
  const role = await currentRole();
  if (!role) redirect("/signin");
  if (role !== "owner") redirect("/");
  return (
    <>
      <h1>All orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {listOrders().map((o) => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.item}</td>
              <td>${o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

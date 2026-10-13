import { redirect } from "next/navigation";
import { listOrders } from "@/lib/orders";
import { currentUser } from "@/lib/session";

export default async function Account() {
  const user = await currentUser();
  if (!user) redirect("/signin");
  return (
    <>
      <h1>Your account</h1>
      <p>Signed in as {user}</p>
      <h2>Orders</h2>
      <ul>
        {listOrders().map((o) => (
          <li key={o.id}>
            #{o.id} · {o.item} · ${o.total}
          </li>
        ))}
      </ul>
    </>
  );
}

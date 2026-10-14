import { redirect } from "next/navigation";
import { listOrders } from "@/lib/orders";
import { currentRole, currentUser } from "@/lib/session";

const ROLES: Record<string, { title: string; perks: string[] }> = {
  owner: { title: "Store owner", perks: ["Admin page", "Every order"] },
  members: { title: "Member", perks: ["Your orders"] },
};

export default async function Account() {
  const user = await currentUser();
  if (!user) redirect("/signin");
  const role = ROLES[(await currentRole()) ?? "member"];
  return (
    <>
      <h1>Your account</h1>
      <p>Signed in as {user}</p>
      <p>
        {role.title}: {role.perks.join(", ")}
      </p>
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

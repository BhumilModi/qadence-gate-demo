import { redirect } from "next/navigation";
import { listOrders } from "@/lib/orders";
import { currentRole } from "@/lib/session";

// Signed-in staff only; signed-out visitors go to sign in.
export default async function Admin() {
  const role = await currentRole();
  if (!role) redirect("/signin");
  return (
    <>
      <h1>Admin</h1>
      <p>{listOrders().length} orders on file. Only owners see this page.</p>
    </>
  );
}

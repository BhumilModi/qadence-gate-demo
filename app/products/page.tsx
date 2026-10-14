import { connection } from "next/server";
import { listCatalogue } from "@/lib/catalogue";

export default async function Products() {
  await connection(); // rendered per request, like a real catalogue
  const items = listCatalogue();
  return (
    <>
      <h1>Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} · ${item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

import { connection } from "next/server";
import { listProducts } from "@/lib/products";

export default async function Products() {
  await connection(); // rendered per request, like a real catalogue
  const products = listProducts();
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} · ${p.price}
          </li>
        ))}
      </ul>
    </>
  );
}

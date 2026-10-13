import { connection } from "next/server";
import { featuredIds, listProducts } from "@/lib/products";

export default async function Products() {
  await connection(); // rendered per request, like a real catalogue
  const featured = featuredIds();
  const products = [...listProducts()].sort(
    (a, b) => Number(featured.includes(b.id)) - Number(featured.includes(a.id)),
  );
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

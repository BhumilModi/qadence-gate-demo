import { connection } from "next/server";
import ProductRow from "@/components/ProductRow";
import { listProducts } from "@/lib/products";

export default async function Products() {
  await connection(); // rendered per request, like a real catalogue
  const products = listProducts();
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <ProductRow key={p.id} product={p} />
        ))}
      </ul>
    </>
  );
}

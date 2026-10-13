import type { Product } from "@/lib/products";

export default function ProductRow({ product }: { product: Product }) {
  return (
    <li>
      {product.name} · ${product.price}
    </li>
  );
}

export type Product = { id: string; name: string; price: number };

const PRODUCTS: Product[] = [
  { id: "kettle", name: "Pour-over kettle", price: 64 },
  { id: "grinder", name: "Burr grinder", price: 189 },
  { id: "scale", name: "Brew scale", price: 42 },
];

export function listProducts(): Product[] {
  return PRODUCTS;
}

export type Order = { id: string; item: string; total: number };

const ORDERS: Order[] = [
  { id: "1042", item: "Pour-over kettle", total: 64 },
  { id: "1043", item: "Brew scale", total: 42 },
];

export function listOrders(): Order[] {
  return ORDERS;
}

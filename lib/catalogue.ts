export type CatalogueItem = { id: string; name: string; price: number };

const CATALOGUE: CatalogueItem[] = [
  { id: "kettle", name: "Pour-over kettle", price: 64 },
  { id: "grinder", name: "Burr grinder", price: 189 },
  { id: "scale", name: "Brew scale", price: 42 },
];

export function listCatalogue(): CatalogueItem[] {
  return CATALOGUE;
}

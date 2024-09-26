import { CatalogData } from "@/types/types";
export async function getVegetableCatalog(): Promise<CatalogData> {
  //GET the vegetable catalog using the /catalog endpoint
  const response = await fetch("http://192.168.0.108:8000/catalog");
  const catalog_json = await response.json();
  const catalog_entries = Object.entries(catalog_json.catalog);
  const catalog_map = new Map(
    catalog_entries.map(([id, vegetable]) => [parseInt(id), vegetable])
  );
  console.log("response ", catalog_map as CatalogData);
  return catalog_map as CatalogData;
}

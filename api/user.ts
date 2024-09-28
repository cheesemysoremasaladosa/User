import {
  CatalogData,
  PartnerData,
  PartnersWithLoc,
  TypeLocation,
} from "@/types/types";

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

// export async function getAllPartners(): Promise<PartnerData> {
// }
export async function getAllPartners(): Promise<TypeLocation[]> {
  const url = new URL("http://192.168.0.108:8000/partners");
  url.searchParams.append("radius", "10000");
  url.searchParams.append("lat", "10.0");
  url.searchParams.append("lon", "10.0");
  const response = await fetch(url.toString());
  const partner_json = await response.json();
  let allpartners = convertToLocation(
    partner_json.partners as PartnersWithLoc[]
  );
  return allpartners as TypeLocation[];
}
function convertToLocation(response: PartnersWithLoc[]): TypeLocation[] {
  let allPartners: TypeLocation[] = [];

  for (const [resp, respval] of Object.entries(response)) {
    allPartners.push({
      latitude: respval.lat,
      longitude: respval.lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      title: respval.partner.name,
    });
  }

  return allPartners;
}

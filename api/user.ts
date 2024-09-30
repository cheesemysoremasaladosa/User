import {
  CatalogData,
  PartnerData,
  PartnersWithLoc,
  TypeLocation,
  Item
} from "@/types/types";

const app_url = 'http://192.168.1.6:8000';
// const app_url = process.env.EXPO_PUBLIC_SYSTEM_URL;

export async function getVegetableCatalog(): Promise<CatalogData> {
  //GET the vegetable catalog using the /catalog endpoint
  // const response = await fetch(app_url + "/catalog");
  const url = app_url + '/catalog'
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',      
    },
  });
  if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  const catalog_json = await response.json();
  const catalog_entries = Object.entries(catalog_json.catalog);
  const catalog_map = new Map(
    catalog_entries.map(([id, vegetable]) => [parseInt(id), vegetable])
  );
  // console.log("response ", catalog_map as CatalogData);
  return catalog_map as CatalogData;
}

// export async function getAllPartners(): Promise<PartnerData> {
// }
export async function getAllPartners(
  userLocation: TypeLocation
): Promise<PartnersWithLoc[]> {
  console.log(app_url);
  const url = new URL(app_url + "/partners");
  url.searchParams.append("radius", "1");
  console.log(userLocation);
  url.searchParams.append("lat", String(userLocation.latitude));
  url.searchParams.append("lon", String(userLocation.longitude));
  const response = await fetch(url.toString());
  const partner_json = await response.json();
  return partner_json.partners as PartnersWithLoc[];
}

export function convertToLocation(response: PartnersWithLoc[]): TypeLocation[] {
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

export async function getVendorCart(vendorID: string): Promise<Item[]>{
  // console.log(app_url)
  const partnerID = vendorID as string
  const  url = new URL(app_url + '/cart/' + partnerID)
  // console.log(url)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(response.status)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    // const data1 = Object.entries(data)[0][1]
    const items: Item[] = data.items.map((item: { price: number; vegetableId: number }) => ({
      vegetableId: item.vegetableId,
      price: item.price,
    }));

    // console.log('data --->' ,items);

    return items as Item[];
  } catch (error){
    console.error('Error fetching cart data.'+ error);
    return [];
  }
}

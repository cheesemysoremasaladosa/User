type vegetableId = number;
type locFloat = number;
export type partners = string;
export interface CatalogState {
  catalog: CatalogData;
  setCatalog: React.Dispatch<React.SetStateAction<CatalogData>>;
}
export interface Vegetable {
  id: vegetableId;
  name: string;
}

export interface Item {
  vegetableId: vegetableId;
  price: number;
}
export interface TypeLocation {
  title: string;
  latitude: locFloat;
  longitude: locFloat;
  latitudeDelta: locFloat;
  longitudeDelta: locFloat;
}
export interface Partner {
  id: number;
  name: string;
}
export interface PartnersWithLoc {
  partner: Partner;
  lat: locFloat;
  lon: locFloat;
}

export type PartnerData = Map<partners, Array<PartnersWithLoc>>;

export type CatalogData = Map<vegetableId, Vegetable>;

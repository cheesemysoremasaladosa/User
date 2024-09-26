
type vegetableId = number;
type locFloat = number;


export interface CatalogState{
  catalog: CatalogData,
  setCatalog: React.Dispatch<React.SetStateAction<CatalogData>>
}
export interface Vegetable{
    id: vegetableId
    name: string
};

export interface Item{
    vegetableId: vegetableId
    price: number
};
export interface Location{
    latitude: locFloat,
    longitude: locFloat,
    latitudeDelta: locFloat,
    longitudeDelta: locFloat

}

export type CatalogData = Map<vegetableId, Vegetable>;
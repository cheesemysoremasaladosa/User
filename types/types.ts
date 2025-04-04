
type vegetableId = number;

export interface Vegetable{
    id: vegetableId
    name: string
};

export interface Item{
    vegetableId: vegetableId
    price: number
};

export type CatalogData = Map<vegetableId, Vegetable>;
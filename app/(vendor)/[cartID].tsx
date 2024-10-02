import { ItemCatalog } from "@/components/layout/ListComponents";
import { View, Text } from "react-native";
import {
  router,
  Stack,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { getVendorCart, getVegetableCatalog } from "@/api/user";
import { useState, useEffect, useMemo } from "react";
import { Item, CatalogData } from "@/types/types";
import { Catalog } from "@/components/Catalog";

// const [items, setItems] = useState<Item[]>([]);
let catalogMap: CatalogData = {} as CatalogData;
export default function Layout() {
  const params = useLocalSearchParams();
  const vendorID = params.cartID;
  const vendorName = params.vendorName as String;
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({ title: `${vendorName}'s cart` });
  });
  const [catalog, setCatalog] = useState<CatalogData>({} as CatalogData);
  const [isCatalogLoaded, setIsCatalogLoaded] = useState(false);
  const [combinedItems, setCombinedItems] = useState<
    (Item & { name: string })[]
  >([]);
  useEffect(() => {
    async function getCatalog() {
      const catalogData = await getVegetableCatalog();
      setCatalog(catalogData);
      setIsCatalogLoaded(true);
    }
    getCatalog();
  }, []);

  useEffect(() => {
    // TODO: cache catalog somewhere
    async function fetchData() {
      if (isCatalogLoaded) {
        const cartItems = await getVendorCart(vendorID as string);
        console.log(catalog);

        const combinedData = cartItems.map((item: Item) => ({
          ...item,
          name: catalog.get(item.vegetableId)?.name || "Unknown Vegetable",
        }));

        // console.log(combinedData)
        setCombinedItems(combinedData);
      }
    }
    fetchData();
  }, [isCatalogLoaded, catalog]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ItemCatalog items={combinedItems} />
    </View>
  );
}

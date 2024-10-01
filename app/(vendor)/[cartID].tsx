import { ItemCatalog } from "@/components/layout/ListComponents";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { getVendorCart, getVegetableCatalog } from "@/api/user";
import { useState, useEffect} from "react";
import { Item, CatalogData } from '@/types/types'

export default function Layout() {
  const params = useLocalSearchParams();
  const vendorID = params.cartID;
  const vendorName = params.vendorName as String;
  // const [items, setItems] = useState<Item[]>([]);
  const [catalog, setCatalog] = useState<CatalogData>(new Map());
  const [combinedItems, setCombinedItems] = useState<(Item & { name: string })[]>([]);

  useEffect(() => {
    async function fetchData() {
      const catalogData = await getVegetableCatalog();
      setCatalog(catalogData);
      
      const cartItems = await getVendorCart(vendorID as string);
      const combinedData = cartItems.map((item: Item) => ({
        ...item,
        name: catalog.get(item.vegetableId)?.name || "Unknown Vegetable",
      }));

      // console.log(combinedData)
      setCombinedItems(combinedData);
    }

    fetchData();
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ItemCatalog items={combinedItems}/>
    </View>
  );
}

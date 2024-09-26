import { UserMap } from "@/components/Maps";
import { CatalogData, CatalogState, Vegetable } from "@/types/types";
import { Location } from "@/types/types";
import { CatalogSkeleton, Catalog } from "@/components/Catalog";
import { getVegetableCatalog } from "@/api/user";
import { useState, createContext, useEffect, useContext } from "react";
import { StyleSheet, View, Text, ViewBase, ScrollView } from "react-native";

const CatalogContext = createContext<CatalogState>({} as CatalogState);
export default function Home() {
  const [cart, setCart] = useState<Set<Vegetable>>(new Set());

  async function handleVeggie(vegetable: Vegetable) {
    setCart(new Set(cart.add(vegetable)));
  }
  const [region, setRegion] = useState<Location>();
  let [catalogLoading, setCatalogLoading] = useState<boolean>(true);

  let [catalogError, setCatalogError] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<CatalogData>({} as CatalogData);
  //   const { catalog, setCatalog } = useContext(CatalogContext);
  useEffect(() => {
    async function fetchCatalog() {
      try {
        const data = await getVegetableCatalog();
        // const data = await fetch("http://192.168.0.108:8000/catalog");
        console.log("data is ", data);
        setCatalog(data);
      } catch (error) {
        console.error("Failed to fetch vegetable catalog:", error);
        // You might want to set an error state here and handle it in your UI
      }
    }

    fetchCatalog();
    // if (Object.keys(catalog).length === 0) {

    getVegetableCatalog()
      .then((data) => {
        //TODO: cache catalog data in the AsyncStorage for a period of time i.e associcate a TTL with CatalogData
        setCatalog(data);
        console.log("console logging", data);
        setCatalogLoading(false);
      })
      .catch(() => {
        console.log();
        setCatalogError(true);
      });

    // }
  }, []);
  if (catalogError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  if (catalogLoading) {
    return (
      <View>
        <CatalogSkeleton />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <UserMap location="hl" />
      <Text
        style={{
          fontSize: 32,
          paddingLeft: 20,
          paddingTop: 10,
          backgroundColor: "lightgray",
        }}
      >
        Catalog
      </Text>
      <ScrollView>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flex: 10 }}>
            <Catalog catalog={catalog} VeggiePressCallback={handleVeggie} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
});

import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import Veggie from "./Veggie";
import { CatalogData, Vegetable } from "@/types/types";
import { SafeAreaView } from "react-native-safe-area-context";

export function CatalogSkeleton() {
  //TODO: return a skeleton while loading data
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const squareDim = 150;
const numColumns = Math.floor(Dimensions.get("window").width / squareDim);

function formatData(data: CatalogData, numColumns: number): Array<Vegetable> {
  const numberOfFullRows = Math.floor(data.size / numColumns);
  let numberOfElementsLastRow = data.size - numberOfFullRows * numColumns;
  let out: Array<Vegetable> = [...data.values()];
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    out.push({} as Vegetable);
    numberOfElementsLastRow++;
  }
  return out;
}

export function Catalog({
  catalog,
  VeggiePressCallback,
}: {
  catalog: CatalogData;
  VeggiePressCallback: (vegetable: Vegetable) => void;
}) {
  return (
    <SafeAreaView>
      <FlatList
        data={formatData(catalog, numColumns)}
        renderItem={({ item }: { item: Vegetable }) => {
          if (Object.keys(item).length == 0) {
            return (
              <Veggie
                vegetable={{} as Vegetable}
                pressCallback={() => {}}
                style={{ backgroundColor: "transperent" }}
              />
            );
          }
          return (
            <Veggie vegetable={item} pressCallback={VeggiePressCallback} />
          );
        }}
        numColumns={numColumns}
        style={style.veggieRow}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  veggieRow: {
    flex: 1,
  },
});

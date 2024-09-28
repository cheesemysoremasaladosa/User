import { ItemCatalog } from "@/components/layout/ListComponents";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

export default function Layout({ cartID }: { cartID?: string }) {
  const params = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>{params.cartID}</Text>
      <ItemCatalog />
    </View>
  );
}

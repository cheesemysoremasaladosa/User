import { ItemCatalog } from "@/components/layout/ListComponents";
import {
    View,
    Text
} from "react-native";
// import {Stack} from 'expo-router'

export default function Layout() {
  return (
    <View
        style={{
            flex: 1
        }}
    >
        <ItemCatalog />
    </View>
  );
}

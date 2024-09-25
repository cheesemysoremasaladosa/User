import { Text, View } from "react-native";
import { UserMap } from "@/components/Maps"
import {Home }  from "./home";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Screen 1: Map + catalog</Text>
      <Text>Screen 2(call to action on Map):  Partner catalog</Text>
      <Text>Screen 3: User Cart. </Text>
    </View>
  );
}

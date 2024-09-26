import MapView from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { Location } from "@/types/types";
// make location of type Location and get the
export function UserMap({ location }: { location: string }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 40,
    borderBlockColor: "black",
    alignSelf: "center",
    height: "50%",
    width: "97%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

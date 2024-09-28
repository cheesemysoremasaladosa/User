import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { TypeLocation } from "@/types/types";
import { Link, router } from "expo-router";
// make location of type Location and get the
const link = () => {};
export function UserMap({
  location,
  partners,
}: {
  location: TypeLocation;
  partners: TypeLocation[];
}) {
  // useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <MapView region={location} style={styles.map}>
        <Marker coordinate={location} title="Userlocation" />
        {partners &&
          partners.length > 0 &&
          partners.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              onPress={() => {
                console.log("pressed map");
                router.push({
                  pathname: "/vendor/[cartID]",
                  params: { cartID: "Ramesh" },
                });
              }}
            />
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "green",
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

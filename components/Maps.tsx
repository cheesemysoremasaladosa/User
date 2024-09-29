import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { PartnersWithLoc, TypeLocation } from "@/types/types";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
// make location of type Location and get the
const link = () => {};
export function UserMap({
  location,
  partners,
}: {
  location: TypeLocation;
  partners?: PartnersWithLoc[];
}) {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <MapView region={location} style={styles.map}>
        <Marker coordinate={location} title="User" />
        {partners &&
          partners.length > 0 &&
          partners.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.lat,
                longitude: location.lon,
              }}
              title={location.partner.name}
              onPress={() => {
                console.log("pressed map");
                router.push({
                  pathname: "/vendor/[cartID]",
                  params: { cartID: location.partner.id },
                });
              }}
            >
              <Image
                source={{ uri: "https://img.icons8.com/color/48/shop.png" }} // User marker icon from URL
                style={{ width: 30, height: 30 }}
              />
            </Marker>
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

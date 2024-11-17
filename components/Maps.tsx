import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { PartnersWithLoc, TypeLocation } from "@/types/types";
// import { mapstyle } from "@/types/maputils";
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
  const nearest =
    partners && partners.length > 0
      ? partners.reduce((minloc, curloc) =>
          curloc.distance < minloc.distance ? curloc : minloc
        )
      : null;
  console.log("nearest is ", nearest);
  useEffect(() => {}, []);
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <MapView region={location} style={styles.map}>
          <Marker
            // image={require("@/asstes/human-marker-pin-3d-style.png")}
            coordinate={location}
            title="User"
          >
            {/* <Image
              source={require("@/asstes/human-marker-pin-3d-style.png")}
              style={{ height: 30, width: 30 }}
            /> */}
          </Marker>
          {partners &&
            partners.length > 0 &&
            partners.map((location, index) => (
              // add a callout here
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
                    pathname: "/(vendor)/[cartID]",
                    params: { cartID: location.partner.id },
                  });
                }}
              >
                <Image
                  // source={{ uri: "https://img.icons8.com/color/48/shop.png" }} // User marker icon from URL
                  source={require("@/asstes/veggie-shop--style.png")}
                  style={{ width: 30, height: 30 }}
                />
              </Marker>
            ))}
        </MapView>
      </View>
      {nearest && (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/(vendor)/[cartID]",
              params: {
                cartID: nearest.partner.id,
                vendorName: nearest.partner.name,
              },
            })
          }
        >
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Nearest Partner: {nearest.partner.name}
              <Image
                source={{ uri: "https://img.icons8.com/color/48/shop.png" }} // User marker icon from URL
                style={{ width: 30, height: 30 }}
              />
              {/* {Math.round(nearest.distance * 1000)} m */}
            </Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  outer: {
    width: "100%",
    height: "70%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    height: 20, // Set custom height for marker
    width: 50, // Set custom width for marker
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    position: "absolute",
    backgroundColor: "white",
    width: "60%",
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 20,
    zIndex: 1,
    bottom: -20,
    padding: 10,
    elevation: 5, // Adds shadow for better visibility
    alignItems: "center", // Center text
    borderBlockColor: "yellow",
    borderColor: "green",
    borderCurve: "circular",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

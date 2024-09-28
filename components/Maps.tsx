import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { TypeLocation } from "@/types/types";
// make location of type Location and get the
export function UserMap({
  location,
  partners,
}: {
  location: TypeLocation;
  partners: TypeLocation[];
}) {
  // useEffect(() => {
  //   const currentLocation = getCurrentLocation();
  //   if (currentLocation) {
  //     setLoc(currentLocation);
  //   }
  // }, []);
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

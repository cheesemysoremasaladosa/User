import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import React from "react";
import { useEffect, createContext } from "react";
import * as Location from "expo-location";
import { TypeLocation } from "@/types/types";

interface LocationState {
  loc: TypeLocation;
  setLoc: React.Dispatch<React.SetStateAction<TypeLocation>>;
}

async function getCurrentLocation(): Promise<TypeLocation | null> {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});

  return {
    title: "name",
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.019,
  };
}

const LocationAccess: React.FC<LocationState> = ({ loc, setLoc }) => {
  // Function to send location to the parent
  const sendLocationToParent = async () => {
    console.log("pressed location");
    const newLocation = await getCurrentLocation();
    console.log(newLocation);
    if (newLocation) {
      setLoc(newLocation);
    } else {
      console.log("Location permission denied");
    }
  };
  // export function LocationAccess({
  //   loc,
  //   setLoc,
  // }: {
  //   loc: TypeLocation;
  //   setLoc: React.Dispatch<React.SetStateAction<TypeLocation>>;
  // }) {
  //   const navigation = useNavigation();
  //   useEffect(() => {
  //     navigation.setOptions({ headerShown: false });
  //   });
  // const ChildComponent: React.FC<LocationState> = ({ loc, setLoc }) => {
  //   // Function to send the location back to the parent
  //   const sendLocationToParent = async () => {
  //     const newLocation = await getCurrentLocation();
  //     // Call the setLocation function passed from the parent
  //     if (newLocation) {
  //       setLoc(newLocation);
  //     }
  //   };

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(157,211,153,255)" }}>
      <Image
        style={{ flex: 1, width: "100%", resizeMode: "contain" }}
        source={require("@/asstes/location.jpg")}
      />
      <Text style={styles.textcontainer}>Allow Location Access</Text>
      <Button
        title="Allow"
        onPress={() => {
          sendLocationToParent();
        }}
      ></Button>
    </View>
  );
};
// };
const styles = StyleSheet.create({
  textcontainer: {
    color: "#fff",
    position: "relative",
    bottom: 200,
    zIndex: 1,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    // fontFamily: "Comic Sans MS",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default LocationAccess;

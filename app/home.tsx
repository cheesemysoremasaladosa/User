import { UserMap } from "@/components/Maps";
import { PartnersWithLoc, TypeLocation } from "@/types/types";
import { BlurView } from "expo-blur";
import { useState, createContext, useEffect, useContext } from "react";
import { StyleSheet, View, Text, ViewBase, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { getAllPartners } from "@/api/user";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ListPartners from "@/components/ListPartners";
import { Link } from "expo-router";

async function getCurrentLocation(): Promise<TypeLocation | null> {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Permission to access location was denied");
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
export default function Home() {
  const [loc, setLoc] = useState<TypeLocation>({
    title: "user",
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [locations, setLocations] = useState<TypeLocation[]>([]);
  const [partners, setPartners] = useState<PartnersWithLoc[]>([]);

  useEffect(() => {
    updateToCurrentLocation();
    fetchPartners(loc);
  }, []);
  useEffect(() => {
    if (loc.latitude !== 0 && loc.longitude !== 0) {
      fetchPartners(loc);
    }
  }, [loc]);
  async function fetchPartners(user: TypeLocation) {
    const fetchallPartners = await getAllPartners(user);
    console.log("fetching partners ", fetchallPartners);
    setPartners(fetchallPartners);
  }

  const updateToCurrentLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      if (currentLocation) {
        setLoc(currentLocation);
      } else {
        setErrorMsg("Unable to get current location");
      }
    } catch (error) {
      setErrorMsg("Error updating location");
      console.error("Error in updateToCurrentLocation:", error);
    }
  };

  return (
    <View style={style.container}>
      <BlurView intensity={50} style={style.blurContainer}>
        <UserMap location={loc} partners={partners} />
        <View style={style.separator} />
        <Text style={style.heading}>nearby bhajiwalas</Text>
        <ScrollView style={style.scrollcontainer}>
          <ListPartners partner={partners} />
        </ScrollView>


        {/* <Link href={{ pathname: "/vendor/[cartID]", params: { cartID: 1 , vendorName: 'Sam'} }}>
          Go to vendor`s cart
        </Link> */}


      </BlurView>
    </View>
  );
}

// experimentation
const style = StyleSheet.create({
  container: {
    // paddingTop: 10,
    // flex: 1,
    // backgroundColor: "#F5F5DC", // Soft Beige
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollcontainer: {
    // backgroundColor: "#F5F5DC", // Soft Beige
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  heading: {
    fontSize: 24, // Font size for the heading
    fontWeight: "bold", // Bold text
    color: "green", // Text color
    textAlign: "center", // Center the text
    marginBottom: 20, // Space below the heading
    letterSpacing: 1, // Spacing between letters
  },
  blurContainer: {
    width: "90%", // Width of the glass container
    borderRadius: 20, // Rounded corners for the glass effect
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
    borderColor: "#fff", // Optional border color
    borderWidth: 1, // Optional border width
  },
  separator: {
    marginTop: 20,
    height: 2, // Height of the separator
    width: "100%", // Width of the separator
    backgroundColor: "#CED0CE", // Color of the separator
    marginBottom: 10, // Space below the separator
  },
});

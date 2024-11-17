import { UserMap } from "@/components/Maps";
import { PartnersWithLoc, TypeLocation } from "@/types/types";
import { useState, createContext, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getAllPartners } from "@/api/user";
import * as Location from "expo-location";
import ListPartners from "@/components/ListPartners";
import LocationAccess from "@/components/Location";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { useCallback, useRef } from "react";

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
interface LocationState {
  loc: TypeLocation;
  setLoc: React.Dispatch<React.SetStateAction<TypeLocation>>;
}

export const LocationContext = createContext<LocationState>(
  {} as LocationState
);
export default function Home() {
  const [loc, setLoc] = useState<TypeLocation>({
    title: "user",
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState<boolean>(true);
  const [locations, setLocations] = useState<TypeLocation[]>([]);
  const [partners, setPartners] = useState<PartnersWithLoc[]>([]);

  useEffect(() => {}, []);
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

  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  if (!loc.latitude) {
    return <LocationAccess loc={loc} setLoc={setLoc} />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: "4%",
          zIndex: 1000,
          flex: 1,
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: "2%",
          alignItems: "center",
        }}
      >
        <FontAwesome name="navicon" size={24} color="#e9ecef" />
      </View>
      <UserMap location={loc} partners={partners} />
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enableDynamicSizing={false}
        snapPoints={["60%"]}
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        style={{ shadowColor: "black", shadowOpacity: 0.5 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={style.heading}>Nearby Bhajiwalas</Text>
          <BottomSheetScrollView>
            <ListPartners partner={partners} />
          </BottomSheetScrollView>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    // paddingTop: 10,
    // flex: 1,
    // backgroundColor: "#F5F5DC",
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  scrollcontainer: {
    // backgroundColor: "#F5F5DC",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1,
  },
});
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollcontainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
};

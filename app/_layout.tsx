import { StackRouter } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    // <View style={styles.outerContainer}>
    <Stack>
<<<<<<< HEAD

      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>

=======
      <Stack.Screen
        name="home"
        options={{
          headerTintColor: "green",
          title: "BhajiWala",
          headerBackButtonMenuEnabled: true,
        }}
      />
>>>>>>> dev
    </Stack>
    // </View>
  );
}

const ViewStyleProps = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 5,
    borderRadius: 15,
  },
  outerContainer: {
    flex: 1, // Make sure it takes up the full screen
    backgroundColor: "lightgray", // C
  },
});

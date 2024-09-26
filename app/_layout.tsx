import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.outerContainer}>
      <Tabs screenOptions={{ tabBarStyle: styles.container }}>
        <Tabs.Screen name="index" options={{ title: "Bhajiwala" }} />
        <Tabs.Screen
          name="home"
          options={{ title: "Home", tabBarActiveTintColor: "orange" }}
        />
      </Tabs>
    </View>
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

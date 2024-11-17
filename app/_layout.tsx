import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { ThemeProvider } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [title, setTitle] = useState("");

  return (
    <SafeAreaProvider>
      <View style={styles.outerContainer}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "green",
            headerBackVisible: true,
          }}
        >
          <Stack.Screen
            name="(main)/index" // This should match your folder structure
            options={{
              headerTitle: "Bhajiwala",
              headerBackButtonMenuEnabled: true,
            }}
          />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 5,
    borderRadius: 15,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});

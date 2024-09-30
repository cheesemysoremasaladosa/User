import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const params = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen
        name="[cartID]"
        options={{ headerShown: true, title: params.vendorName as string + '`s Cart'}}
      />
    </Stack>
  );
}

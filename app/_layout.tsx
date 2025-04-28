import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { CoffeeAnimated } from "@/components/CoffeeAnimatedIcon";

function HeaderTitle() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>OneSignal Push Notification (prueba)</Text>
    </View>
  );
}

export default function RootLayout() {
  return <Stack screenOptions={{
    headerTitle: () => <HeaderTitle />,
  }} />;
}

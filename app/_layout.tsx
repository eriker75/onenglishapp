import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Stack } from "expo-router";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Welcome",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

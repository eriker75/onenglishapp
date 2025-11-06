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
        <Stack />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

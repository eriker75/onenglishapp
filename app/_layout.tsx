import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/roboto/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/roboto/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/roboto/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/roboto/Roboto-BoldItalic.ttf"),
    "Roboto-ExtraBold": require("../assets/fonts/roboto/Roboto-ExtraBold.ttf"),
    "Roboto-ExtraBoldItalic": require("../assets/fonts/roboto/Roboto-ExtraBoldItalic.ttf"),
    "Roboto-ExtraLight": require("../assets/fonts/roboto/Roboto-ExtraLight.ttf"),
    "Roboto-ExtraLightItalic": require("../assets/fonts/roboto/Roboto-ExtraLightItalic.ttf"),
    "Roboto-Italic": require("../assets/fonts/roboto/Roboto-Italic.ttf"),
    "Roboto-Light": require("../assets/fonts/roboto/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/roboto/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/roboto/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-SemiBold": require("../assets/fonts/roboto/Roboto-SemiBold.ttf"),
    "Roboto-SemiBoldItalic": require("../assets/fonts/roboto/Roboto-SemiBoldItalic.ttf"),
    "Roboto-Thin": require("../assets/fonts/roboto/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../assets/fonts/roboto/Roboto-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
          <Stack.Screen
            name="start"
            options={{
              title: "Start",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="welcome"
            options={{
              title: "WelcomeSteps",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

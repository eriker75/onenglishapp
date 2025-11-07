import { Stack } from "expo-router";

export default function WelcomeStackLayout() {
  return (
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
          title: "Welcome Step 1",
        }}
      />
      <Stack.Screen
        name="step1"
        options={{
          title: "Welcome Step 1",
        }}
      />
      <Stack.Screen
        name="step2"
        options={{
          title: "Welcome Step 2",
        }}
      />
      <Stack.Screen
        name="step3"
        options={{
          title: "Welcome Step 3",
        }}
      />
      <Stack.Screen
        name="step4"
        options={{
          title: "Welcome Step 4",
        }}
      />
      <Stack.Screen
        name="step5"
        options={{
          title: "Welcome Step 5",
        }}
      />
    </Stack>
  );
}


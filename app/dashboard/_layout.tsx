import { Stack } from "expo-router";
import React from "react";

export default function DashboardStackLayout() {
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
          title: "HomeScreen",
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          title: "HomeScreen",
        }}
      />
      <Stack.Screen
        name="olympics"
        options={{
          title: "OlympicScreen",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "ProfileScreen",
        }}
      />
      <Stack.Screen
        name="simulations"
        options={{
          title: "SimulationScreen",
        }}
      />
    </Stack>
  );
}

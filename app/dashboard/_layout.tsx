import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function DashboardTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1D286E",
          borderTopColor: "#1D286E",
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#8891B0",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/HomeIcon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#ffffff" : "#8891B0",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          href: null, // Hide duplicate home tab
        }}
      />
      <Tabs.Screen
        name="olympics"
        options={{
          title: "Olympics",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/OlympicIcon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#ffffff" : "#8891B0",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="simulations"
        options={{
          title: "Practice",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/PracticeIcon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#ffffff" : "#8891B0",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/ScoreIcon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#ffffff" : "#8891B0",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/ProfileIcon.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#ffffff" : "#8891B0",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

import { Tabs } from "expo-router";
import React from "react";

// Import SVG icons
import HomeIcon from "../../assets/svg/HomeIconWhite.svg";
import OlympicsIcon from "../../assets/svg/OlympicsIconWhite.svg";
import PracticeIcon from "../../assets/svg/PracticeIconWhite.svg";
import ProfileIcon from "../../assets/svg/ProfileIconWhite.svg";
import ScoreIcon from "../../assets/svg/ScoreIconWhite.svg";

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
            <HomeIcon
              width={24}
              height={24}
              stroke={focused ? "#ffffff" : "#8891B0"}
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
            <OlympicsIcon
              width={24}
              height={24}
              stroke={focused ? "#ffffff" : "#8891B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="simulations"
        options={{
          title: "Practice",
          tabBarIcon: ({ focused }) => (
            <PracticeIcon
              width={24}
              height={24}
              stroke={focused ? "#ffffff" : "#8891B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          tabBarIcon: ({ focused }) => (
            <ScoreIcon
              width={24}
              height={24}
              stroke={focused ? "#ffffff" : "#8891B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={24}
              height={24}
              stroke={focused ? "#ffffff" : "#8891B0"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

import Sidebar from "@/components/blocs/Sidebar";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import SVG icons
import HomeIcon from "../../assets/svg/HomeIconWhite.svg";
import OlympicsIcon from "../../assets/svg/OlympicsIconWhite.svg";
import PracticeIcon from "../../assets/svg/PracticeIconWhite.svg";
import ProfileIcon from "../../assets/svg/ProfileIconWhite.svg";
import ScoreIcon from "../../assets/svg/ScoreIconWhite.svg";

function DashboardTabContent() {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 0, backgroundColor: "#ffffff" }}
          edges={["top"]}
        />
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#1D286E",
              borderTopColor: "#1D286E",
              borderTopWidth: 1,
              height: 70,
              paddingBottom: 16,
              paddingTop: 8,
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
            },
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#8891B0",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
            },
            headerShadowVisible: false,
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
      </View>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#1D286E" }}
        edges={["bottom"]}
      />
    </View>
    <Sidebar visible={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default function DashboardTabLayout() {
  return (
    <SidebarProvider>
      <DashboardTabContent />
    </SidebarProvider>
  );
}

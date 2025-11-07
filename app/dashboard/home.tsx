import { Box } from "@/components/ui";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreenView = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={["#2C93FE", "#FFFFFF"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ flex: 1 }}
      >
        <View className="flex-1">
          <Box className="bg-white p-4 h-16 rounded-br-[40px] rounded-bl-[40px]"></Box>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreenView;

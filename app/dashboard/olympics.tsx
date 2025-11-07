import { Text } from "@/components/ui";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OlympicScreenView = () => {
  return (
    <SafeAreaView className="bg-[#1D286E]">
      {/* Your home screen content goes here */}
      <Text className="text-white">Welcome to the Home Screen!</Text>
    </SafeAreaView>
  );
};

export default OlympicScreenView;

import { Box, Button, Image, Text } from "@/components/ui";
import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NoiseGradient1 from "@/assets/img/noisegradients/NoiseGradient1.png";
import OlympicRing1 from "@/assets/img/olympicrings/ring1.png";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const WelcomeStepScreen1 = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#1D286E]">
      <Box className="flex-1 w-full items-center justify-center px-5 py-5">
        <Box className="w-full h-full max-w-[480px] min-w-[260px] rounded-[24px] overflow-hidden">
          <ImageBackground
            source={NoiseGradient1}
            resizeMode="cover"
            className="flex-1 w-full h-full items-center px-6 py-2 flex flex-col justify-start"
            imageStyle={{ borderRadius: 24 }}
          >
            <Button
              onPress={() => {
                router.back();
              }}
              className="self-start mb-2"
              variant="link"
            >
              <Box className="flex-row items-center gap-1">
                <Ionicons name="chevron-back" size={18} color="#000" />
                <Text className="text-black font-roboto">Back</Text>
              </Box>
            </Button>
            <Box className="flex-1 w-full items-start gap-3 ">
              <Image
                source={OlympicRing1}
                className="w-[95%] h-4/6 max-w-[500px] max-h-[500px]"
                resizeMode="contain"
                alt="Olympic Ring 1"
              />
              <Text className="text-black text-4xl font-roboto-bold text-start self-start">
                Hi there!
              </Text>
              <Text className="text-black text-xl font-roboto text-start self-start max-w-[50%] min-w-[250px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Text>
            </Box>
            <Box className="w-full flex-row justify-between items-center mt-8 pb-5 px-2">
              <Button variant="link" className="px-0">
                <Box className="flex-row items-center gap-1">
                  <Text className="text-black font-roboto">Skip</Text>
                  <Ionicons name="chevron-forward" size={18} color="#000" />
                </Box>
              </Button>
              <Button className="px-6">
                <Text className="text-white font-roboto">Next</Text>
              </Button>
            </Box>
          </ImageBackground>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default WelcomeStepScreen1;

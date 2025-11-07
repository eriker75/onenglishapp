import { GlassButton } from "@/components/elements";
import { Box, Button, Image, Text } from "@/components/ui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type WelcomeStepProps = {
  backgroundImage: ImageSourcePropType;
  ringImage: ImageSourcePropType;
  title: string;
  subtitle: string;
  onSkip: () => void;
  onNext: () => void;
  onBack?: () => void;
  skipLabel?: string;
  nextLabel?: string;
  ringAlt?: string;
};

export const WelcomeStep: React.FC<WelcomeStepProps> = ({
  backgroundImage,
  ringImage,
  title,
  subtitle,
  onSkip,
  onNext,
  onBack,
  skipLabel = "Skip",
  nextLabel = "Next",
  ringAlt = "Olympic Ring",
}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#1D286E]">
      <Box className="flex-1 w-full items-center justify-center px-5 py-5">
        <Box className="w-full h-full max-w-[480px] min-w-[260px] rounded-[24px] overflow-hidden">
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            className="flex-1 w-full h-full items-center px-6 py-2 flex flex-col justify-start"
            imageStyle={{ borderRadius: 24 }}
          >
            {onBack ? (
              <Button
                onPress={onBack}
                className="self-start mb-2"
                variant="link"
              >
                <Box className="flex-row items-center gap-1">
                  <Ionicons name="chevron-back" size={18} color="#000" />
                  <Text className="text-black font-roboto">Back</Text>
                </Box>
              </Button>
            ) : (
              <Box className="self-start mb-2" />
            )}
            <Box className="flex-1 w-full items-start gap-3">
              <Image
                source={ringImage}
                className="w-[95%] h-4/6 max-w-[500px] max-h-[500px]"
                resizeMode="contain"
                alt={ringAlt}
              />
              <Text className="text-black text-4xl font-roboto-bold text-start self-start">
                {title}
              </Text>
              <Text className="text-black text-xl font-roboto text-start self-start max-w-[50%] min-w-[250px]">
                {subtitle}
              </Text>
            </Box>
            <Box className="w-full flex-row justify-between items-center mt-8 pb-5 px-2">
              <Button variant="link" className="px-0" onPress={onSkip}>
                <Box className="flex-row items-center gap-1">
                  <Text className="text-black font-roboto">{skipLabel}</Text>
                  <Ionicons name="chevron-forward" size={18} color="#000" />
                </Box>
              </Button>
              <GlassButton
                label={nextLabel}
                rightIcon={<Ionicons name="arrow-forward" size={16} color="#fff" />}
                onPress={onNext}
              />
            </Box>
          </ImageBackground>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default WelcomeStep;


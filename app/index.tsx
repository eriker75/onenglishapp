import { Button, ButtonText, Image } from "@/components/ui";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginBgImg = require("@/assets/img/LoginBgImg.png");
const OnEnglishLogo = require("@/assets/img/OnEnglishLogo.png");
const OnEnglishPet = require("@/assets/img/OnEnglishPet.png");

export default function Index() {
  return (
    <ImageBackground
      source={LoginBgImg}
      className="flex-1 w-full h-full"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center px-5">
          <View className="w-full flex-1 justify-between flex-col max-w-[800px] min-w-[280px] px-5 pt-[30px] items-center">
            <Image
              source={OnEnglishLogo}
              className="w-[50%] h-[120px] max-w-[300px]"
              resizeMode="contain"
              alt="OnEnglishLogo"
            />

            <View className="flex-1 flex items-center justify-center w-full">
              <View className="items-center my-5">
                <Text className="text-5xl font-bold text-white text-center">
                  Get
                </Text>
                <Text className="text-5xl font-bold text-[#2C93FE] text-center">
                  Started!
                </Text>
              </View>

              <View className="w-full max-w-[400px] gap-[15px] px-5 mb-5 items-center">
                <Button
                  size="lg"
                  variant="solid"
                  action="default"
                  className="bg-white rounded-full h-[70px] w-[85%] border-[3px] border-[#2C93FE]"
                >
                  <ButtonText className="text-black text-lg font-semibold">
                    Login
                  </ButtonText>
                </Button>

                <Button
                  size="lg"
                  variant="solid"
                  action="primary"
                  className="bg-[#2C93FE] rounded-full h-[70px] w-[85%] border-[3px] border-[#303030]"
                >
                  <ButtonText className="text-[#303030] text-lg font-semibold">
                    Sign in
                  </ButtonText>
                </Button>
              </View>
            </View>
          </View>

          <View className="flex-1 w-full items-center">
            <Image
              source={OnEnglishPet}
              className="w-full h-full"
              style={{
                maxHeight: 800,
              }}
              resizeMode="contain"
              alt="OnEnglishPet"
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

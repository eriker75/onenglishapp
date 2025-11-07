import { Button, ButtonText, Image } from "@/components/ui";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginBgImg = require("@/assets/img/LoginBgImg.png");
const OnEnglishLogo = require("@/assets/img/OnEnglishLogo.png");
const OnEnglishPet = require("@/assets/img/OnEnglishPet.png");

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function StartScreen() {
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
              className="w-[40%] h-[120px] max-w-[300px]"
              resizeMode="contain"
              alt="OnEnglishLogo"
            />

            <View className="flex-1 flex items-center justify-center w-full">
              <View className="items-start mt-4 mb-8 w-[85%] pl-6">
                <Text className="text-5xl ps-14 font-roboto-black text-white text-left">
                  Get
                </Text>
                <Text className="text-7xl font-roboto-black text-[#2C93FE] text-left">
                  Started!
                </Text>
              </View>

              <View className="w-full max-w-[400px] gap-[15px] px-5 mb-5 items-center">
                <Button
                  size="lg"
                  variant="solid"
                  action="default"
                  className="bg-white data-[active=true]:bg-[#2C93FE] rounded-full h-[70px] w-[85%] border-[3px] border-[#2C93FE]"
                >
                  <ButtonText className="text-black data-[active=true]:text-white text-xl font-roboto-bold">
                    Login
                  </ButtonText>
                </Button>

                <Button
                  size="lg"
                  variant="solid"
                  action="primary"
                  className="bg-[#2C93FE] rounded-full h-[70px] w-[85%] border-[3px] border-[#2C93FE]"
                >
                  <ButtonText className="text-[#303030] text-xl font-roboto-bold">
                    Sign in
                  </ButtonText>
                </Button>
              </View>
            </View>
          </View>

          <View className="w-full items-center">
            <Image
              source={OnEnglishPet}
              className={`w-full h-${WINDOW_HEIGHT * 0.35}`}
              resizeMode="contain"
              alt="OnEnglishPet"
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

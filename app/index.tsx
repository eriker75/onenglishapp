import { Box, Image } from "@/components/ui";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const RadarLoginImg = require("@/assets/img/LoginBgImg.png");

const screenHeight = Dimensions.get("window").height;

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="items-center justify-center flex-grow max-w-full">
          <Image
            source={RadarLoginImg}
            style={{
              width: "100%",
              height: screenHeight * 0.5,
              maxHeight: 400,
            }}
            resizeMode="contain"
          />
        </Box>
      </View>
    </SafeAreaView>
  );
}

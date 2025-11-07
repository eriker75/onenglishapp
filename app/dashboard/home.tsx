import HeaderMenu from "@/components/blocs/HeaderMenu";
import { LinearGradient } from "expo-linear-gradient";
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
          <HeaderMenu />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreenView;

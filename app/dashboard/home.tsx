import HeaderMenu from "@/components/blocs/HeaderMenu";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const HomeScreenView = () => {
  return (
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
  );
};

export default HomeScreenView;

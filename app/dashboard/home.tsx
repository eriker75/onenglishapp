import HeaderMenu from "@/components/blocs/HeaderMenu";
import { Box, Text } from "@/components/ui";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const HomeScreenView = () => {
  const { width } = useWindowDimensions();

  const carouselData = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-purple-500" },
    { id: 3, color: "bg-yellow-500" },
    { id: 4, color: "bg-blue-500" },
    { id: 5, color: "bg-red-600" },
  ];

  const smallCarouselData = [
    { id: 1, color: "bg-green-500" },
    { id: 2, color: "bg-pink-500" },
    { id: 3, color: "bg-orange-500" },
    { id: 4, color: "bg-cyan-500" },
    { id: 5, color: "bg-indigo-500" },
  ];

  const leaderboardData = [
    { id: 1, color: "bg-teal-500" },
    { id: 2, color: "bg-amber-500" },
    { id: 3, color: "bg-rose-500" },
    { id: 4, color: "bg-emerald-500" },
    { id: 5, color: "bg-violet-500" },
  ];

  const itemWidth = (width - 32) / 3.2;

  return (
    <LinearGradient
      colors={["#2C93FE", "#FFFFFF"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <HeaderMenu />
      <View className="flex-1 p-4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text className="text-white text-4xl font-roboto-bold">
            Hi Aaron!
          </Text>

          <Box className="h-64 mt-4">
            <Carousel
              loop
              width={width - 32}
              height={220}
              autoPlay={true}
              data={carouselData}
              scrollAnimationDuration={1000}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
              }}
              renderItem={({ item }) => (
                <Box className={`flex-1 ${item.color} rounded-2xl mx-2`} />
              )}
            />
          </Box>
          <Box className="pb-4">
            <Text className="text-[#1D286E] pb-2 font-roboto">
              Bilingual interschool Olympics
            </Text>
            <Box className="flex-row gap-4">
              <Box className="flex-1 bg-blue-500 rounded-lg h-32"></Box>
              <Box className="flex-1 bg-blue-500 rounded-lg h-32"></Box>
            </Box>
          </Box>

          <Box className="pb-4">
            <Text className="text-[#1D286E] pb-2 font-roboto">Practice</Text>
            <Carousel
              loop={false}
              width={itemWidth}
              height={128}
              snapEnabled={true}
              pagingEnabled={true}
              data={smallCarouselData}
              style={{ width: "100%" }}
              renderItem={({ item }) => (
                <Box
                  className={`${item.color} rounded-lg h-32`}
                  style={{ marginRight: 16 }}
                />
              )}
            />
          </Box>

          <Box className="pb-4">
            <Text className="text-[#1D286E] pb-2 font-roboto">Leaderboard</Text>
            <Carousel
              loop
              width={width - 32}
              height={160}
              autoPlay={false}
              autoPlayInterval={3000}
              data={leaderboardData}
              scrollAnimationDuration={600}
              renderItem={({ item }) => (
                <Box className={`${item.color} rounded-lg flex-1 h-60 mx-2`} />
              )}
            />
          </Box>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HomeScreenView;

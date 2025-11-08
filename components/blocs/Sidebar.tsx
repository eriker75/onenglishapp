import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Animated,
    Dimensions,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { Box, Text } from "../ui";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center py-4 px-6"
      activeOpacity={0.7}
    >
      <View className="w-6 h-6 mr-4 items-center justify-center">{icon}</View>
      <Text className="text-white text-base font-roboto">{label}</Text>
    </TouchableOpacity>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const slideAnim = React.useRef(
    new Animated.Value(-Dimensions.get("window").width * 0.8)
  ).current;

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get("window").width * 0.8,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Overlay */}
        <Pressable style={styles.overlay} onPress={onClose} />

        {/* Sidebar */}
        <Animated.View
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <LinearGradient
            colors={["#1A237E", "#283593", "#1A237E"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {/* Logo */}
              <Box className="px-6 py-8">
                <Text className="text-2xl font-roboto-bold">
                  <Text className="text-[#FF4081]">on </Text>
                  <Text className="text-[#4CAF50]">English</Text>
                </Text>
              </Box>

              {/* Separator */}
              <View style={styles.separator} />

              {/* General Section */}
              <Box className="py-4">
                <Text className="text-gray-400 text-sm font-roboto px-6 mb-2">
                  General
                </Text>
                <MenuItem
                  icon={<Ionicons name="settings-outline" size={24} color="#FFFFFF" />}
                  label="Preferences"
                  onPress={() => {
                    console.log("Preferences pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="person-outline" size={24} color="#FFFFFF" />}
                  label="Account"
                  onPress={() => {
                    console.log("Account pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="star-outline" size={24} color="#FFFFFF" />}
                  label="Subscription"
                  onPress={() => {
                    console.log("Subscription pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="card-outline" size={24} color="#FFFFFF" />}
                  label="Verify your account"
                  onPress={() => {
                    console.log("Verify account pressed");
                    onClose();
                  }}
                />
              </Box>

              {/* Separator */}
              <View style={styles.separator} />

              {/* Support Section */}
              <Box className="py-4">
                <Text className="text-gray-400 text-sm font-roboto px-6 mb-2">
                  Support
                </Text>
                <MenuItem
                  icon={<Ionicons name="power-outline" size={24} color="#FFFFFF" />}
                  label="About On English"
                  onPress={() => {
                    console.log("About pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="call-outline" size={24} color="#FFFFFF" />}
                  label="Contact"
                  onPress={() => {
                    console.log("Contact pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="help-circle-outline" size={24} color="#FFFFFF" />}
                  label="Help center"
                  onPress={() => {
                    console.log("Help center pressed");
                    onClose();
                  }}
                />
                <MenuItem
                  icon={<Ionicons name="log-out-outline" size={24} color="#FFFFFF" />}
                  label="Log out"
                  onPress={() => {
                    console.log("Log out pressed");
                    onClose();
                  }}
                />
              </Box>
            </ScrollView>
          </LinearGradient>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("window").width * 0.8,
    maxWidth: 320,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginHorizontal: 24,
  },
});

export default Sidebar;


import {
  LiquidGlassView,
  isLiquidGlassSupported,
} from "@callstack/liquid-glass";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import { Box, Text } from "@/components/ui";

type GlassButtonProps = {
  label: string;
  onPress: () => void;
  textClassName?: string;
  className?: string;
  containerStyle?: StyleProp<ViewStyle>;
  effect?: "clear" | "regular" | "none";
} & Omit<PressableProps, "onPress" | "style">;

const fallbackGradient = [
  "rgba(255, 255, 255, 0.65)",
  "rgba(255, 255, 255, 0.15)",
];

const GlassButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  GlassButtonProps
>(({ label, onPress, disabled, className, textClassName, containerStyle, effect = "clear", ...pressableProps }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      {...pressableProps}
    >
      {({ pressed }) => {
        const containerClassName = ["overflow-hidden", className]
          .filter(Boolean)
          .join(" ");

        return (
          <Box
            className={containerClassName}
            style={StyleSheet.flatten([
              styles.container,
              containerStyle,
              pressed && styles.containerPressed,
              disabled && styles.disabled,
            ])}
          >
            <LiquidGlassView
              interactive={isLiquidGlassSupported}
              effect={effect}
              style={StyleSheet.flatten([
                styles.glass,
                pressed && styles.glassPressed,
                !isLiquidGlassSupported && styles.glassFallback,
              ])}
            >
              {!isLiquidGlassSupported && (
                <LinearGradient
                  pointerEvents="none"
                  colors={fallbackGradient}
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 0.8, y: 1 }}
                  style={styles.fallbackOverlay}
                />
              )}
              <Box pointerEvents="none" style={styles.highlight} />
              <Text
                style={styles.text}
                className={
                  [
                    "text-base font-roboto tracking-tight",
                    pressed ? "opacity-90" : "opacity-100",
                    textClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {label}
              </Text>
            </LiquidGlassView>
          </Box>
        );
      }}
    </Pressable>
  );
});

GlassButton.displayName = "GlassButton";

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    shadowColor: "rgba(15, 23, 42, 0.22)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 10,
  },
  containerPressed: {
    shadowOpacity: 0.16,
    transform: [{ scale: 0.985 }],
  },
  glass: {
    borderRadius: 9999,
    paddingHorizontal: 28,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  glassPressed: {
    opacity: 0.92,
  },
  glassFallback: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255, 255, 255, 0.35)",
  },
  fallbackOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 9999,
  },
  highlight: {
    position: "absolute",
    top: 2,
    left: 6,
    right: 6,
    height: 18,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.4)",
    opacity: 0.35,
  },
  text: {
    color: "#1d1d1f",
    textShadowColor: "rgba(0,0,0,0.08)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  disabled: {
    opacity: 0.6,
  },
});

export { GlassButton };


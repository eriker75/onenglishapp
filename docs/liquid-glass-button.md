## Liquid Glass Button Pattern

This document explains how the `GlassButton` component is implemented and how to extend the liquid glass pattern for new UI elements.

### Library Dependencies
- `@callstack/liquid-glass` – renders the iOS 18 liquid glass material. Exported APIs we use:
  - `LiquidGlassView` – wraps interactive content with the material.
  - `isLiquidGlassSupported` – lets us fall back when the device lacks the effect.
- `expo-linear-gradient` – used to imitate the glass tint when the effect is unsupported (Android, web, iOS < 18).

> Build requirements: React Native ≥ 0.80 and Xcode ≥ 15.4 (iOS 18 SDK). If the app targets older iOS versions the component will automatically use the fallback gradient.

### Component Snapshot
- File: `components/elements/glass-button.tsx`
- Re-export: `components/elements/index.ts`
- Props:
  - `label: string`
  - `onPress: () => void`
  - Optional visual overrides: `effect`, `tintColor`, `colorScheme`, `leftIcon`, `rightIcon`, `className`, `textClassName`, `containerStyle`
  - `PressableProps` passthrough (except `style`/`onPress`).

### Rendering Flow
1. The outer `Pressable` handles touch feedback and disables interaction when `disabled`.
2. We compute `showFallback = !isLiquidGlassSupported`. We do **not** rely on platform checks; the library handles the detection.
3. The core material is a `LiquidGlassView` with:
   - `interactive` toggled only when supported and not disabled.
   - `effect` defaulting to `regular` for more pronounced blur.
   - `tintColor` defaulted to `rgba(152, 197, 255, 0.38)` to match the provided inspiration.
   - `colorScheme` customizable; default `system`.
4. For unsupported environments we layer a `LinearGradient` over the view to mimic the glass tint and keep the same palette.
5. We add a translucent top highlight and white text/icon with soft shadows to reinforce the glass feel.

### Styling Notes
- Container shadow: soft navy (`rgba(15, 23, 42, 0.22)`) with radius 20 keeps the floating look.
- `LiquidGlassView` uses a hairline white border; the library merges the blur and tint underneath.
- Highlights (`styles.highlight`) should be subtle (opacity ~0.35). Adjust width/height per component size.
- Text uses `font-roboto`, white color, and `textShadow` to stay legible over varied backgrounds.
- Icons are passed through `leftIcon`/`rightIcon`; wrap them in a `Box` to center align.

### Fallback Strategy
When `showFallback` is true:
- Gradient colors defined in `fallbackGradient` maintain a similar luminance to the glass effect.
- Keep the highlight and shadow so the control still feels elevated.
- Avoid setting `interactive` to true; the effect does not animate without native support.

### Creating New Liquid Glass Elements
Follow these steps:
1. **Start from `LiquidGlassView`:** wrap your content in a `LiquidGlassView` and provide `effect`, `tintColor`, and `colorScheme` that suit the use case.
2. **Fallback gradient:** replicate the gradient technique used in the button. Reuse `fallbackGradient` or define a variant if the tint changes.
3. **Highlight + Shadow:** add a translucent white highlight and an outer shadow. These are essential for the glass depth on flat backgrounds.
4. **Interactive surfaces:** only set `interactive` to true when you want the native liquid deformation on press. For static cards you can omit it.
5. **Props design:** expose icon slots or content render props to keep components flexible. Use `Pressable` or `TouchableOpacity` depending on the UX.
6. **Consistency:** place new components under `components/elements/` and export them via `components/elements/index.ts` for discoverability.

### Troubleshooting
- **Effect not visible on simulator:** ensure you target an iOS 18 (or newer) simulator. Older simulators fall back to the gradient.
- **Yellow box warning about native module:** rerun `expo prebuild` or `pod install` after adding `@callstack/liquid-glass` so native code is linked.
- **Performance concerns:** limit large, full-screen glass views; the effect is more expensive than a static gradient.

### Usage Example
```tsx
import { GlassButton } from "@/components/elements";
import { Ionicons } from "@expo/vector-icons";

<GlassButton
  label="Next"
  rightIcon={<Ionicons name="arrow-forward" size={16} color="#fff" />}
  onPress={handleNext}
/>
```

For variations (e.g., floating cards) follow the steps above and reuse the fallback/lighting recipe so glass surfaces feel consistent across the app.


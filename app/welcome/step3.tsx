import NoiseGradient3 from "@/assets/img/noisegradients/NoiseGradient3.png";
import OlympicRing3 from "@/assets/img/olympicrings/ring3.png";
import { useRouter } from "expo-router";
import React from "react";
import { WelcomeStep } from "./components/WelcomeStep";

const WelcomeStepScreen3 = () => {
  const router = useRouter();

  return (
    <WelcomeStep
      backgroundImage={NoiseGradient3}
      ringImage={OlympicRing3}
      title="Entrena día a día"
      subtitle="Sigue tu progreso con retos diarios y recibe retroalimentación inmediata de tu entrenador."
      ringAlt="Olympic Ring 3"
      onBack={() => router.back()}
      onSkip={() => router.replace("/start")}
      onNext={() => router.push("/welcome/step4")}
    />
  );
};

export default WelcomeStepScreen3;

import NoiseGradient4 from "@/assets/img/noisegradients/NoiseGradient4.png";
import OlympicRing4 from "@/assets/img/olympicrings/ring4.png";
import { useRouter } from "expo-router";
import React from "react";
import { WelcomeStep } from "./components/WelcomeStep";

const WelcomeStepScreen4 = () => {
  const router = useRouter();

  return (
    <WelcomeStep
      backgroundImage={NoiseGradient4}
      ringImage={OlympicRing4}
      title="Escala posiciones"
      subtitle="Gana medallas virtuales, compite en rankings globales y celebra cada logro con tu equipo."
      ringAlt="Olympic Ring 4"
      onBack={() => router.back()}
      onSkip={() => router.replace("/start")}
      onNext={() => router.push("/welcome/step5")}
    />
  );
};

export default WelcomeStepScreen4;

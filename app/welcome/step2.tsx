import NoiseGradient2 from "@/assets/img/noisegradients/NoiseGradient2.png";
import OlympicRing2 from "@/assets/img/olympicrings/ring2.png";
import { useRouter } from "expo-router";
import React from "react";
import { WelcomeStep } from "./components/WelcomeStep";

const WelcomeStepScreen2 = () => {
  const router = useRouter();

  return (
    <WelcomeStep
      backgroundImage={NoiseGradient2}
      ringImage={OlympicRing2}
      title="Forma tu equipo"
      subtitle="Elige a tus compañeros y compitan juntos en desafíos temáticos de ciencias y deporte."
      ringAlt="Olympic Ring 2"
      onBack={() => router.back()}
      onSkip={() => router.replace("/start")}
      onNext={() => router.push("/welcome/step3")}
    />
  );
};

export default WelcomeStepScreen2;

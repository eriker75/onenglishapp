import NoiseGradient5 from "@/assets/img/noisegradients/NoiseGradient5.png";
import OlympicRing5 from "@/assets/img/olympicrings/ring5.png";
import { useRouter } from "expo-router";
import React from "react";
import { WelcomeStep } from "./components/WelcomeStep";

const WelcomeStepScreen5 = () => {
  const router = useRouter();

  return (
    <WelcomeStep
      backgroundImage={NoiseGradient5}
      ringImage={OlympicRing5}
      title="¿Listo para competir?"
      subtitle="Da el siguiente paso, crea tu perfil y comienza a vivir la experiencia BioLympics."
      ringAlt="Olympic Ring 5"
      onBack={() => router.back()}
      onSkip={() => router.replace("/start")}
      onNext={() => router.push("/dashboard")}
      nextLabel="Comenzar"
    />
  );
};

export default WelcomeStepScreen5;

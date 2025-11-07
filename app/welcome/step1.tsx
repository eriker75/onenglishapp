import NoiseGradient1 from "@/assets/img/noisegradients/NoiseGradient1.png";
import OlympicRing1 from "@/assets/img/olympicrings/ring1.png";
import { useRouter } from "expo-router";
import React from "react";
import { WelcomeStep } from "./components/WelcomeStep";

const WelcomeStepScreen1 = () => {
  const router = useRouter();

  return (
    <WelcomeStep
      backgroundImage={NoiseGradient1}
      ringImage={OlympicRing1}
      title="¡Hola!"
      subtitle="Descubre cómo BioLympics transforma el aprendizaje en un reto divertido y colaborativo."
      ringAlt="Olympic Ring 1"
      onBack={() => router.back()}
      onSkip={() => router.replace("/start")}
      onNext={() => router.push("/welcome/step2")}
    />
  );
};

export default WelcomeStepScreen1;

"use client";

import { useState } from "react";

import Heading from "@/components/layout/onBoard/OnBoardHeading";
import SetupHero from "@/components/layout/onBoard/setup/SetupHero";
import SetupStepper from "@/components/layout/onBoard/setup/SetupStepper";
import Logo from "@/components/Logo";
import HardwareWallet from "@/components/layout/onBoard/HardwareWallet";

export default function Setup() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <section className="flex-1 flex-col justify-items-center p-8 px-7 ">
        <Logo />
        <Heading heading={"Ok"} paragraph={"para"} />
        <SetupStepper onStepChange={handleStepChange} />

        <HardwareWallet />
      </section>

      <section className="grid-bg flex-1">
        <SetupHero activeStep={activeStep} />
      </section>
    </>
  );
}

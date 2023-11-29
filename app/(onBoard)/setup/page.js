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
      <section className=" w-1/2 flex-1 items-center justify-center p-8 px-7 ">
        <Logo />
        <div className=" flex flex-col items-center">
          <Heading page={activeStep} />
          <SetupStepper onStepChange={handleStepChange} />
          <HardwareWallet />
        </div>
      </section>

      <section
        className="grid-bg flex w-1/2 flex-col  items-center
      "
      >
        <SetupHero activeStep={activeStep} />
      </section>
    </>
  );
}

"use client";

import { useState } from "react";

import StepperBtn from "./stepper/StepperBtn";
import StepperList from "./stepper/StepperList";
import StepperMain from "./stepper/StepperMain";
import SetUpYourAcc from "./SetUpYourAcc";

const SetupStepper = ({ onStepChange }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const handleStepChange = (updater) => {
    const newStep = updater(activeStep);
    setActiveStep(newStep);
    onStepChange(newStep);
  };

  return (

    <div className="w-full flex flex-col gap-14 px-24 py-4">
      <SetUpYourAcc/>
      <StepperList
        activeStep={activeStep}
        setActiveStep={handleStepChange}
        setIsFirstStep={setIsFirstStep}
        setIsLastStep={setIsLastStep}
      />

      <StepperMain activeStep={activeStep} />

{
      <StepperBtn
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        setActiveStep={handleStepChange}
      /> }
      

  </div>
  );
};

export default SetupStepper;

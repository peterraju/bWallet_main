import { Stepper } from "@material-tailwind/react";

import StepperItem from "./StepperItem";

const StepperList = ({
  activeStep,
  setActiveStep,
  setIsFirstStep,
  setIsLastStep,
}) => {
  return (
    <Stepper
      lineClassName="bg-gray-700"
      activeLineClassName="bg-white"
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
    >
      <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={0}
        stepDes={"Add Gaurdians"}
      />

      <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={1}
        stepDes={"Enable 2FA"}
      />

      <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={2}
        stepDes={"Deploy Your Wallet"}
      />
    </Stepper>
  );
};
export default StepperList;

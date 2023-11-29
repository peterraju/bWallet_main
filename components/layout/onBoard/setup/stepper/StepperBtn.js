import { Button } from "@material-tailwind/react";

const StepperBtn = ({ isFirstStep, isLastStep, setActiveStep }) => {
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="mt-[32px] flex justify-between ">
      <Button className=" bg-gradient-primary" onClick={handlePrev} disabled={isFirstStep}>
        Prev
      </Button>
      <Button className=" bg-gradient-primary" onClick={handleNext} disabled={isLastStep}>
        Next            
      </Button>
    </div>
  );
};

export default StepperBtn;

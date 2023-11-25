import { Button } from "@material-tailwind/react";

const StepperBtn = ({ isFirstStep, isLastStep, setActiveStep }) => {
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="mt-4 flex justify-between ">
      <div className="bg-gradient-primary rounded-lg ">
      <Button className="" onClick={handlePrev} disabled={isFirstStep}>
        Prev
      </Button>
      </div>
      <div className="decoration-white bg-gradient-primary  rounded-lg">

      <Button onClick={handleNext} disabled={isLastStep}>
        Next
      </Button>
      </div>
     
    </div>
  );
};

export default StepperBtn;

import Image from "next/image";
import SetUpHeroHeading from "./SetUpHeroHeading";

const images = ["setup", "twoFA", "deploy"];
const SetupHero = ({ activeStep }) => {
  console.log()
  console.log(activeStep);
  return (
    <div className="flex h-full w-full flex-col  items-center mt-[85px]">
      <SetUpHeroHeading page={activeStep} />
      <Image
      className="mt-16"
        width={400}
        height={400}
        src={`/images/modal/setup/${images[activeStep]}.svg`}
      />
    </div>
  );
};
export default SetupHero;

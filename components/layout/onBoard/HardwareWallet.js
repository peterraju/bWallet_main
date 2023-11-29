import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HardwareWallet = () => {
  return (
    <div className=" h-[30px] py-[6px] rounded-lg flex items-center justify-center bg-[#FCADFF]/10 text-center text-[#FCADFF]  decoration-[#FCADFF] ">
      Connect Hardware Wallet
      <div className="ml-1 w-4 h-4">

      <ArrowTopRightOnSquareIcon/>
      </div>
    </div>
  );
};

export default HardwareWallet;

import BCard from "./Cards/B-Card/B-Card";
import {PiArrowUpRightBold} from 'react-icons/pi'

export const Hero = () => {
  return (
    <div className="text-white">
      <h1 className="text-9xl font-bold font-sec text-center">
        Bankless <br />
        Wallet
      </h1>
      <p className="text-2xl max-w-[50ch] mt-12 font-prm">
        Bankless Wallet is a perfect platform for your web3 wallet, just plug
        your wallet and play with additional features.
      </p>
      <div className="text-xl flex items-center justify-center mt-12 gap-12">
        <button style={{
            background:'linear-gradient(95.51deg, #D02129 0%, #750069 100%)'
        }} className="p-3 rounded-prm flex items-center gap-3">Create Wallet <PiArrowUpRightBold/></button>
        <button className="border border-1 p-3 rounded-prm flex items-center gap-3">How it Works <PiArrowUpRightBold/></button>
      </div>
     
    </div>
  );
};

const { default: Image } = require("next/image");
import {PiArrowUpRightBold} from 'react-icons/pi'

const Navbar = () => {
  return (
    <div style={{
      WebkitBackdropFilter: 'blur(15px)',
      backdropFilter:'blur(15px)',
      zIndex:100
    }} className="fixed w-screen flex items-center text-xl  text-white justify-around py-4 ">
      <div className="flex items-center font-sec">
        <Image src="/assets/logo.png" width={50} height={50} />B Wallet
      </div>
      <div className="flex gap-8 font-prm pt-4">
        <h3>Home</h3>
        <h3>Features</h3>
        <h3>Contact us</h3>
      </div>
      <div className="border border-1 px-2 py-1 font-prm flex items-center gap-3">
        Launch App
        <PiArrowUpRightBold/>
      </div>
    </div>
  );
};

export default Navbar;

import HardwareWallet from "../HardwareWallet";
import { DefaultBlackBtn } from "components/ui/ClientButtons.js";


const LoginMain = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%' // Adjust as needed
  };

  const columnStyle = {
    width: '50%',
    margin: 'auto', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      {/* <HardwareWallet /> */}
        <div style={columnStyle}>
          <div className="flex flex-col items-center h-full">
          <p className="text-white font-display font-semibold text-3xl mb-1"> Login to your Account</p>
          <p className="text-gray-500 text-center font-sans text-sm font-normal leading-6 mb-10"> Choose your Wallet or Login with Google</p>
          <div className="flex flex-col">
            <DefaultBlackBtn image="\images\btn.svg" label="Sign In with Social" />
            <p>Powered By </p>
            <div className="flex flex-row justify-between items-center">
              <div className="w-30 h-1 bg-white"></div>
              <div>or</div>
              <div className="w-30 h-1 bg-white"></div>
              </div>
            <DefaultBlackBtn image="\images\modal\login\metamask.svg" label="Metamask"  />
            <DefaultBlackBtn image="\images\modal\login\coinbase.svg" label="Coinbase Wallet" />
            <DefaultBlackBtn image="\images\modal\login\walletconnect.svg" label="WalletConnect" />
          </div>
          <div>
            <span className="text-sm font-">
            By signing up to create an account | Accept <br></br>company’s
          </span>
          <span className="text-sm items-center text-[#FCADFF]"> Terms of use &
            Private policy</span>
          </div>
          </div>
        </div>
        
    </div>
  );
};

export default LoginMain;

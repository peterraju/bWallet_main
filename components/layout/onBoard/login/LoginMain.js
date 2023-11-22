import HardwareWallet from "../HardwareWallet";
import { DefaultBlackBtn } from "components/ui/ClientButtons.js";


const LoginMain = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Adjust as needed
  };

  const columnStyle = {
    width: '48%', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      {/* <HardwareWallet /> */}
      <div style={columnStyle}>
        <div className="flex flex-col items-center">
        <p class="text-2xl mb-5"> Login to your Account</p>
        <p class="text-sm mb"> Choose your Wallet or Login with Google</p>
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
        <p>
          By signing up to create an account | Accept company’s Terms of use &
          Private policy
        </p>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;

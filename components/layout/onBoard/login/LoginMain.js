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
        <p class="text-2xl"> Login to your Account</p>
        <p> Choose your Wallet or Login with Google</p>
        <div className="flex flex-col">
          <DefaultBlackBtn label="Sign In with Social" />
          <p>Powered By</p>
          <DefaultBlackBtn label="Metamask" />
          <DefaultBlackBtn label="Coinbase Wallet" />
          <DefaultBlackBtn label="WalletConnect" />
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

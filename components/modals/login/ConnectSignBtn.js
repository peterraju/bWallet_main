"use client";
import { useAccount } from "wagmi";

import { ConnectWalletBtn, SignWalletBtn } from "@/components/ui/ClientButtons";

const ConnectSignBtn = ({ name }) => {
  const { isConnected } = useAccount();

  return (
    <div className="space-y-2 px-5 text-center">
      <p className="px-4">Please connect your {name} to continue</p>

      {isConnected ? <SignWalletBtn /> : <ConnectWalletBtn />}
    </div>
  );
};

export default ConnectSignBtn;

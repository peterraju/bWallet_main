"use client";

import { CreateWalletBtn, HowItWorksBtn } from "@/components/ui/ClientButtons";

const HeaderBtn = () => {
  return (
    <div className="flex justify-center gap-4">
      <CreateWalletBtn isDefault={true} />
      <HowItWorksBtn />
    </div>
  );
};

export default HeaderBtn;

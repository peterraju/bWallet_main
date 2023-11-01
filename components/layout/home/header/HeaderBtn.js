import {
  CreateWalletBtn,
  HardwareWalletBtn,
} from "@/components/ui/ClientButtons";

const HeaderBtn = () => {
  return (
    <div className="flex justify-center gap-4">
      <CreateWalletBtn isDefault={true} />
      <HardwareWalletBtn />
    </div>
  );
};

export default HeaderBtn;

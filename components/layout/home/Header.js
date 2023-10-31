import RippleButton from "@/components/ui/RippleButton";

const Header = () => {
  return (
    <header className="mx-4 space-y-12 pt-32 text-center md:mx-0 md:pt-36">
      <div className="space-y-6">
        <h1 className="font-clash-display text-5xl font-medium md:text-6xl lg:text-7xl">
          Secure Your Finances, <br /> Minimize Risk
        </h1>

        <p className="mx-auto w-[50ch] text-base font-medium leading-normal md:text-lg lg:text-xl">
          Unlock the Power of Web3 with Bankless Wallet: Seamlessly Connect,
          Pay, and Explore with Extraordinary Features!
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <RippleButton
          style="flex bg-gradient-primary"
          label="Create Wallet"
          location="/onboard"
          icon="default"
        />

        <RippleButton
          style="flex border border-white"
          label="Hardware Wallet"
          location="/hardware-wallet"
          icon="default"
        />
      </div>
    </header>
  );
};

export default Header;

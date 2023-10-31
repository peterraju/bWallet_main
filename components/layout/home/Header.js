import HeaderBtn from "./HeaderBtn";

const Header = () => {
  return (
    <header className="text-center space-y-12 pt-32 md:pt-36 mx-4 md:mx-0">
      <div className="space-y-6">
        <h1 className="font-clash-display font-medium text-5xl md:text-6xl lg:text-7xl">
          Secure Your Finances, <br /> Minimize Risk
        </h1>

        <p className="font-medium leading-normal w-[50ch] mx-auto text-base md:text-lg lg:text-xl">
          Unlock the Power of Web3 with Bankless Wallet: Seamlessly Connect,
          Pay, and Explore with Extraordinary Features!
        </p>
      </div>

      <HeaderBtn />
    </header>
  );
};

export default Header;

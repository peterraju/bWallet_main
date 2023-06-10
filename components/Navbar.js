const { default: Image } = require("next/image");

const Navbar = () => {
  return (
    <div className="fixed w-screen flex items-center text-xl text-white justify-around pt-4">
      <div className="flex items-center">
        <Image src="/assets/logo.png" width={50} height={50} />B Wallet
      </div>
      <div className="flex gap-8">
        <h3>Home</h3>
        <h3>Features</h3>
        <h3>Contact us</h3>
      </div>
      <div className="border border-1 px-2 py-1">
        Launch App
      </div>
    </div>
  );
};

export default Navbar;

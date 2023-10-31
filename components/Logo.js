import Image from "next/image";

const Logo = () => {
  return (
    <section className="flex gap-2 items-center">
      <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={16} height={20} />
      </div>

      <p className="font-grotesque text-xl font-bold text-white">
        Bankless Wallet
      </p>
    </section>
  );
};

export default Logo;

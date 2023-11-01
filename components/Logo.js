import Image from "next/image";

const Logo = () => {
  return (
    <section className="prevent-select flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
        <Image src="/logo.svg" alt="Logo" width={16} height={20} />
      </div>

      <p className="hidden font-grotesque text-xl font-bold text-white sm:block">
        Bankless Wallet
      </p>
    </section>
  );
};

export default Logo;

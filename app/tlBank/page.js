import Image from "next/image";

const TlBankPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <Image
        src="/images/tlbank/logo.png"
        alt="TL Bank Logo"
        width={320}
        height={320}
      />

      <div className="mt-6 flex flex-col gap-4 text-center">
        <h2 className="bg-tlBank-gradient-primary gradient-text-primary prevent-select w-fit text-7xl font-bold leading-normal">
          Enabling Payents in tlBank
        </h2>

        <p className="text-xl">
          Empowering BanklessDAO Contributors with tlbank Rewards
        </p>
      </div>

      <button
        style={{
          background: "linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="mt-10 flex cursor-pointer rounded-full border-2 border-gray-900 px-20 py-2 text-xl font-bold text-white"
      >
        Login Wallet
      </button>
    </main>
  );
};

export default TlBankPage;

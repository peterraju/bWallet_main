"use client";

const Pubkey = () => {
  const handlePubKeyClick = () => {
    navigator.clipboard.writeText("0x1234...567");
  };

  return (
    <p
      className="rounded-full bg-[#292929] px-3 py-1 text-base font-medium"
      onClick={handlePubKeyClick}
    >
      0x1234...567
    </p>
  );
};

export default Pubkey;

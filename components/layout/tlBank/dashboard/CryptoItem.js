import Image from "next/image";

const CryptoItem = ({ src, amount, crypto }) => {
  return (
    <div className="flex w-48 min-w-[192px] items-start gap-3 rounded-md bg-gray-900 p-3">
      <div className="h-6 w-6 rounded-full bg-white">
        <Image
          src={`/images/home/coins/${src}.svg`}
          alt={src}
          width={24}
          height={24}
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-semibold">{amount + " " + crypto}</h3>
        <span className="text-offwhite text-sm">{"$" + amount}</span>
      </div>
    </div>
  );
};

export default CryptoItem;

import Image from "next/image";

const OrganisationItem = ({ src, name, label, pubKey }) => {
  return (
    <div className="mx-auto flex w-[46vw] max-w-2xl items-center justify-between gap-8 rounded-2xl border-2 border-gray-700 bg-gray-900/60 p-3">
      <div className="flex w-44 items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Image src={src} alt="BanklessDAO" width={24} height={24} />
        </div>

        <h3 className="text-base text-gray-400">{name}</h3>
      </div>

      <p className="w-44 overflow-hidden text-ellipsis whitespace-nowrap text-xl">
        {label}
      </p>

      <p className="text-pink  text-xl">{pubKey}</p>
    </div>
  );
};

export default OrganisationItem;

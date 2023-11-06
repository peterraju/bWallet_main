import OrganisationItem from "./OrganisationItem";

const OrganisationList = () => {
  const organisations = [
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless Design",
      pubKey: "0x1234567890",
    },
    {
      src: "/images/tlbank/org/parcel-safe.svg",
      name: "Parcel Safe",
      label: "Spacevents Treasury Safe",
      pubKey: "0x1234567890",
    },
    {
      src: "/logo.svg",
      name: "Bankless Wallet",
      label: "Xelmar Safe Treasury",
      pubKey: "0x1234567890",
    },
  ];

  return (
    <div className="mt-20 flex w-full flex-col gap-6">
      {organisations.map((organisation) => (
        <OrganisationItem
          key={organisation.name}
          src={organisation.src}
          name={organisation.name}
          label={organisation.label}
          pubKey={organisation.pubKey}
        />
      ))}
    </div>
  );
};

export default OrganisationList;

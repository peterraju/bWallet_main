import OrganisationItem from "./OrganisationItem";

const OrganisationList = () => {
  const organisations = [
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Analytics Guild Multisig",
      pubKey: "0x28861eeec6ab073A36Cc299ef8186978893e21FF",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "AV Guild Multisig",
      pubKey: "0xE2D721c126150BeEE3C56A1AD71A2E0E29A411F0",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless Academy EOA",
      pubKey: "0xe1887ff140bfa9d3b45d0b2077b7471124acd242",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Grants Committee Multisig",
      pubKey: "0x12BD9048b419838e25046040Dcd297aB16850280",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless DAO Treasury",
      pubKey: "0x31016FFCEBFf16C20E74A8610f1650DCB5c01Df3",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Dummy Safe",
      pubKey: "0x1dBA01d7519f3CD18cBdF2B207CC3D261eEadeF3",
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

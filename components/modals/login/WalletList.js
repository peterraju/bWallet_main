import WalletItem from "./WalletItem";

const WalletList = ({ setActiveWallet }) => {
  const wallets = [
    {
      name: "MetaMask",
      bg: "bg-[#ffe6ce]",
      src: "metamask.svg",
    },
    {
      name: "Coinbase",
      bg: "bg-[#0052FF]",
      src: "coinbase.svg",
    },
    {
      name: "WalletConnect",
      bg: "bg-wallet-gradient",
      src: "walletconnect.svg",
    },
  ];

  return (
    <ul className="space-y-1">
      {wallets.map((wallet, i) => (
        <WalletItem
          key={i}
          name={wallet.name}
          bg={wallet.bg}
          src={wallet.src}
          setActiveWallet={setActiveWallet}
        />
      ))}
    </ul>
  );
};

export default WalletList;

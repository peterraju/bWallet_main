import { useEthersProvider } from "./utils/useEthersProvider";
import TLBankABI from "./utils/abi";

const tlBankAddress = {
  mainnet: "0xeaEAb9f1B25fa00FC01a3fcE521b47E88527Aa02",
};

export default function useTLBank() {
  const provider = useEthersProvider();
  const signer = useEthersSigner();

  const createTLBank = async (recipient, amount, unlockDate) => {
    const TLBank = new ethers.Contract(
      tlBankAddress.mainnet,
      TLBankABI,
      provider,
    );

    const unsignedTx = await TLBank.populateTransaction.createNFT(
      recipient,
      amount,
      unlockDate,
    );

    return unsignedTx;
  };

  const lockAndLoadTLBank = async (id, amount, relockDate) => {
    const TLBank = new ethers.Contract(
      tlBankAddress.mainnet,
      TLBankABI,
      provider,
    );

    const unsignedTx = await TLBank.populateTransaction.locknLoadNFT(
      id,
      amount,
      relockDate,
    );

    return unsignedTx;
  };

  const redeemTLBank = async (id) => {
    const TLBank = new ethers.Contract(
      tlBankAddress.mainnet,
      TLBankABI,
      provider,
    );

    const unsignedTx = await TLBank.populateTransaction.redeemNFT(id);

    return unsignedTx;
  };

  const executeTransaction = async (unsignedTx) => {
    const tx = {
      to: tlBankAddress.mainnet,
      value: 0,
      data: unsignedTx.data,
      gasLimit: 1000000,
    };

    const txHash = await signer.sendTransaction(tx);
    return txHash;
  };

  return { createTLBank, lockAndLoadTLBank, redeemTLBank, executeTransaction };
}

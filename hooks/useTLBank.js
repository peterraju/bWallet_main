import { useEthersProvider } from "./utils/useEthersProvider";
import TLBankABI from "./utils/abi";
import BankABI from "./utils/tokenAbi";
import { useEthersSigner } from "./utils/useEthersSigner";
import { BigNumber, ethers } from "ethers";

const tlBankAddress = {
  mainnet: "0xeaEAb9f1B25fa00FC01a3fcE521b47E88527Aa02",
};

const bankToken = {
  mainnet: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
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

  const allowwanceBank = async (amount) => {
    const Bank = new ethers.Contract(bankToken.mainnet, BankABI, provider);

    const unsignedTx = await Bank.populateTransaction.approve(
      tlBankAddress.mainnet,
      ethers.utils.parseEther(amount.toString()),
    );

    return unsignedTx;
  };

  const executeTransaction = async (unsignedTx) => {
    try {
      const tx = {
        to: tlBankAddress.mainnet,
        value: 0,
        data: unsignedTx.data,
        gasLimit: 1000000,
      };

      const txHash = await signer.sendTransaction(tx);
      return txHash;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return {
    createTLBank,
    lockAndLoadTLBank,
    redeemTLBank,
    executeTransaction,
    allowwanceBank,
  };
}

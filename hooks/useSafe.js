import axios from "axios";
import { useEthersSigner } from "./utils/useEthersSigner";
import SafeApiKit from "@safe-global/api-kit";
import Safe from "@safe-global/protocol-kit";
import { EthersAdapter } from "@safe-global/protocol-kit";
import { ethers } from "ethers";

const SAFE_TRANSACTION_API = {
  mainnet: "https://safe-transaction-mainnet.safe.global",
};

export default function useSafe() {
  const signer = useEthersSigner();

  const getAllSafes = async (address) => {
    try {
      const safes = await axios.get(
        `${SAFE_TRANSACTION_API.mainnet}/api/v1/owners/${address}/safes/`,
      );

      return safes.data.safes;
    } catch (error) {
      console.log(error);
    }
  };

  const executeSafeTransaction = async (safeAddress, tos, unsignedTxs) => {
    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeApiKit = new SafeApiKit({
      txServiceUrl: SAFE_TRANSACTION_API.mainnet,
      ethAdapter,
    });

    const safe = await Safe.create({
      ethAdapter,
      safeAddress: safeAddress,
    });

    let safeTransactionData;

    for (let i = 0; i < unsignedTxs.length; i++) {
      safeTransactionData = {
        to: tos[i],
        value: 0,
        data: unsignedTxs[i],
      };
    }

    const nonce = await safeApiKit.getNextNonce(safeAddress);

    const txConfig = {
      nonce,
    };

    const safeTransaction = await safe.createTransaction({
      safeTransactionData,
      options: txConfig,
    });

    const senderAddress = await signer.getAddress();
    const safeTxHash = await safe.getTransactionHash(safeTransaction);
    const signature = await safe.signTransactionHash(safeTxHash);

    await safeApiKit.proposeTransaction({
      safeAddress: await safe.getAddress(),
      safeTransactionData: safeTransaction.data,
      safeTxHash,
      senderAddress,
      senderSignature: signature.data,
    });
  };

  return { getAllSafes, executeSafeTransaction };
}

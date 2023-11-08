"use client";
import axios from "axios";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

export default function usePostServer() {
  const selectedSafe = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);

  const addContributor = async (name, contributorPubkey) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        name,
        contributorPubkey,
        safeAddress: selectedSafe,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/add`,
        body,
        { headers },
      );

      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const deleteContributor = async (contributorPubkey) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        safeAddress: selectedSafe,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/delete/${contributorPubkey}`,
        body,
        { headers },
      );

      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return { addContributor, deleteContributor };
}

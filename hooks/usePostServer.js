"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { addContributor as add } from "@/redux/slice/tlbankSlice";

export default function usePostServer() {
  const selectedSafe = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);
  const dispatch = useDispatch();

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

      dispatch(add(res.data));
      return true;
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

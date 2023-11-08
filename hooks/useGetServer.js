"use client";
import axios from "axios";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

export default function useGetServer() {
  const selectedSafe = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);

  const getAllContributors = async () => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/${selectedSafe}/all`,
        { headers },
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllContributors };
}

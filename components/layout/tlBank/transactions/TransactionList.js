"use client";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";
import { useEffect } from "react";
import useGetServer from "@/hooks/useGetServer";
import { useAccount } from "wagmi";

const TransactionList = () => {
  const transactions = useSelector((state) => state.tlbank.transactions);
  const { address } = useAccount();
  const safeAddress = useSelector((state) => state.wallet.safe);
  const status = useSelector((state) => state.tlbank.status);
  const { getAllTransactions } = useGetServer();

  useEffect(() => {
    if (status === "CON") {
      if (!address) return;
      getAllTransactions(address);
    } else {
      if (!safeAddress) return;
      getAllTransactions(safeAddress);
    }
  }, [address, safeAddress, status, getAllTransactions]);

  return (
    <section className="mt-10 w-full max-w-6xl space-y-3 rounded-xl bg-gray-800/70 px-4 py-4">
      <div className="flex w-full items-center justify-between px-4">
        <div className="w-2/12 text-gray-500">Status</div>

        <div className="hidden w-full text-gray-500 md:block md:w-2/12">
          Amount
        </div>

        <div className="w-2/12 text-gray-500">Contributor</div>

        <div className="hidden w-full max-w-[90px] text-right text-gray-500 md:block">
          Date
        </div>
      </div>

      {transactions.map((contributor, index) => (
        <TransactionItem key={index} contributor={contributor} />
      ))}
    </section>
  );
};

export default TransactionList;

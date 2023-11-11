"use client";

import { handleTransactionModal } from "@/redux/slice/modalSlice";
import { handleSelectedTransaction } from "@/redux/slice/selectedSlice";
import { useDispatch } from "react-redux";

const TransactionItem = ({ contributor }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const transaction = {
      price: contributor.price,
      contributor: contributor.contributor,
      date: contributor.date,
      status: contributor.status,
    };

    dispatch(handleSelectedTransaction(transaction));
    dispatch(handleTransactionModal());
  };

  return (
    <div
      className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3"
      onClick={handleClick}
    >
      <div className="w-2/12 text-left text-gray-400">{contributor.status}</div>

      <div
        className="hidden w-2/12 overflow-hidden whitespace-nowrap md:block"
        style={{ textOverflow: "ellipsis" }}
      >
        {contributor.price}
      </div>

      <div
        className="w-2/12 overflow-hidden whitespace-nowrap"
        style={{ textOverflow: "ellipsis" }}
      >
        {contributor.contributor}
      </div>

      <div className="hidden max-w-[90px] text-right md:block">
        {new Date(contributor.date / 1000).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;

import Image from "next/image";
import TransactionItem from "./TransactionItem";
import { PlusIcon } from "@heroicons/react/24/outline";

const TransactionList = () => {
  let transaction = [
    {
      amount: 324,
      token: "ETH",
      pubKey: "0x1234567890",
    },
    {
      amount: 324,
      token: "ETH",
      pubKey: "0x1234567890",
    },
  ];

  return transaction && transaction.length > 0 ? (
    <div className="mt-6 space-y-3">
      {transaction.map((item, index) => (
        <TransactionItem
          key={index}
          amount={item.amount}
          token={item.token}
          pubKey={item.pubKey}
        />
      ))}
    </div>
  ) : (
    <div className="mt-6 text-center">
      <button
        style={{
          background: "url(/images/tlBank/bg-btn.svg) no-repeat center center",
        }}
        className="mx-auto flex h-16 w-16 items-center justify-center"
      >
        <PlusIcon className="h-10 w-10 text-gray-400" />
      </button>

      <div className="mt-6 space-y-3">
        <h4 className="text-center text-xl font-semibold text-gray-400">
          No transactions on queue
        </h4>

        <p className="font-base text-gray-600">
          To create a transaction, add one or more contributors to the queue.
        </p>
      </div>
    </div>
  );
};

export default TransactionList;

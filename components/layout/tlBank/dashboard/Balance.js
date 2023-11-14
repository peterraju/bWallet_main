"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.wallet.balance);
  const [totalBalance, setTotalBalance] = useState(0);
  const status = useSelector((state) => state.tlbank.status);
  const safeName = useSelector((state) => state.wallet.safeName);

  useEffect(() => {
    setTotalBalance(balance.reduce((a, b) => a + b, 0));
  }, [balance]);

  return (
    <div>
      <p className="text-sm text-gray-500">
        {status === "CON" ? "Contributor" : safeName}
      </p>

      <div className="flex items-end gap-4">
        <h2 className="mt-6 text-5xl font-semibold">
          ${totalBalance.toFixed(2)}
        </h2>

        {/* <span className="flex items-center gap-1 rounded-md bg-[#56c861]/20 p-1 text-sm font-normal text-[#56C861]">
          <ArrowUpIcon className="inline-block h-4 w-4" />
          3.4%
        </span> */}
      </div>
    </div>
  );
};

export default Balance;

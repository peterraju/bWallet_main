import { ArrowUpIcon } from "@heroicons/react/24/outline";

const Balance = () => {
  return (
    <div>
      <p className="text-sm  text-gray-500">BanklessDAO Design Treasury</p>

      <div className="flex items-end gap-4">
        <h2 className="mt-6 text-5xl font-semibold">$16,206.20</h2>

        <span className="flex items-center gap-1 rounded-md bg-[#56c861]/20 p-1 text-sm font-normal text-[#56C861]">
          <ArrowUpIcon className="inline-block h-4 w-4" />
          3.4%
        </span>
      </div>
    </div>
  );
};

export default Balance;

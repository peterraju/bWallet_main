const TransactionItem = ({ contributor }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3">
      <div className="w-2/12 text-left text-gray-400">{contributor.status}</div>

      <div className="w-1/12 text-left font-medium text-white">
        {"$" + contributor.price}
      </div>

      <div
        className="hidden w-2/12 overflow-hidden whitespace-nowrap md:block"
        style={{ textOverflow: "ellipsis" }}
      >
        {"21004 " + contributor.token}
      </div>

      <div
        className="w-2/12 overflow-hidden whitespace-nowrap"
        style={{ "text-overflow": "ellipsis" }}
      >
        {contributor.contributor}
      </div>

      <div className="hidden max-w-[90px] text-right md:block">
        {contributor.date}
      </div>
    </div>
  );
};

export default TransactionItem;

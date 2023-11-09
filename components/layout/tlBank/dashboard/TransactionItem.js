const TransactionItem = () => {
  return (
    <div className="flex justify-between rounded-md bg-black/80 p-3 text-lg">
      <div className="flex items-center gap-3 font-semibold">
        <p>$200</p>
        <p className="text-gray-500">600 BANK</p>
      </div>

      <p>0x1234423123</p>
    </div>
  );
};

export default TransactionItem;

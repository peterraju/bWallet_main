import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = [
    {
      status: "Transfer",
      price: 380,
      token: "BANK",
      contributor: "koolade.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
    {
      status: "Queue Transfer",
      price: 31385,
      token: "BANK",
      contributor: "koolade.transbut.eth",
      date: "2021-09-01",
    },
  ];

  return (
    <section className="mt-10 w-full max-w-6xl space-y-3 rounded-xl bg-gray-800/70 px-4 py-4">
      <div className="flex w-full items-center justify-between px-4">
        <div className="w-2/12 text-gray-500">Status</div>

        <div className="w-1/12 font-medium text-gray-500">Price</div>

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

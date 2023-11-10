import { removeFromQueue } from "@/redux/slice/tlbankSlice";
import { useDispatch } from "react-redux";

const TransactionItem = ({ amount, time, pubKey }) => {
  const dispatch = useDispatch();

  const convertDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = date.getFullYear();

    return `${day}-${month}-${year}`; // or `${day}/${month}/${year}` for 10/05/2024
  };

  time = convertDate(time);

  return (
    <div
      className="prevent-select flex justify-between rounded-md bg-black/80 p-3 text-lg"
      onClick={() => {
        dispatch(removeFromQueue(pubKey));
      }}
    >
      <div className="flex items-center gap-3 font-semibold">
        <p className="text-gray-500">{amount + " BANK"}</p>
      </div>

      <p>{pubKey}</p>
      <p>{time}</p>
    </div>
  );
};

export default TransactionItem;

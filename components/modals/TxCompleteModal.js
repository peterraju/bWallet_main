"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { handleTxCompleteModal } from "@/redux/slice/modalSlice";
import Image from "next/image";

const TxCompleteModal = () => {
  const isOpen = useSelector((state) => state.modal.txCompleteModal);
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.tlbank.executedTx);

  const handleOpen = () => {
    dispatch(handleTxCompleteModal());
  };
  return (
    transaction && (
      <Dialog
        id="content"
        size="sm"
        open={isOpen}
        handler={handleOpen}
        className="bg-black"
        aria-hidden={isOpen}
      >
        <DialogHeader className="flex  items-center font-grotesque">
          <h3 className="ml-6 w-full text-xl font-bold text-white">
            Transaction
          </h3>

          <IconButton size="sm" variant="text" onClick={handleOpen}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="space-y-6 px-10 font-grotesque">
          <div className="space-y-2 text-center">
            <div className="mx-auto w-fit rounded-md bg-[#00B728]/10 p-3">
              <PaperAirplaneIcon className="h-5 w-5 -translate-y-0.5 translate-x-px -rotate-45 text-[#00B728]" />
            </div>

            <p className="text-gray-200">{transaction.status}</p>
          </div>

          <div className="space-y-1 text-center">
            <div
              className="mx-auto w-1/2 overflow-hidden text-4xl font-semibold text-white"
              style={{ textOverflow: "ellipsis" }}
            >
              {transaction.price}
            </div>
            <div className="text-base font-medium text-[#FCADFF]">
              Transaction has been Initiated
            </div>
          </div>
        </DialogBody>
      </Dialog>
    )
  );
};

export default TxCompleteModal;

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

import { handleTransactionModal } from "@/redux/slice/modalSlice";
import Image from "next/image";

const TransactionModal = () => {
  const isOpen = useSelector((state) => state.modal.transactionModal);
  const transaction = useSelector(
    (state) => state.selected.selectedTransaction,
  );

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(handleTransactionModal());
  };
  console.log(transaction);
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
              {transaction.contributor}
            </div>
          </div>
        </DialogBody>

        <DialogFooter className="mt-4 justify-center font-grotesque">
          <div className="mx-4 mb-6 flex w-full items-center justify-between rounded-md bg-gray-900 p-4">
            <div className="flex items-start gap-2">
              <div>
                <h2 className="font-medium text-gray-200">
                  {transaction.sender.substring(0, 6)}...
                  {transaction.sender.substring(
                    transaction.sender.length - 4,
                    transaction.sender.length,
                  )}
                </h2>
                <h2 className="text-sm text-gray-400">{transaction.role}</h2>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Image
                src="/images/home/coins/bankless.svg"
                alt="Bankless logo"
                width={32}
                height={32}
              />

              <div>
                <h2 className="font-medium text-gray-200">TL Bank</h2>
                <h2 className="text-sm text-gray-400">BanklessDAO</h2>
              </div>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    )
  );
};

export default TransactionModal;

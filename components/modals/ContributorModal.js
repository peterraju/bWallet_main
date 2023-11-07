"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { handleContributorModal } from "@/redux/slice/modalSlice";
import { AddContributorBtn } from "../ui/ClientButtons";

const ContributorModal = () => {
  const isOpen = useSelector((state) => state.modal.contributorModal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(handleContributorModal());
  };

  return (
    <Dialog
      id="content"
      size="xs"
      open={isOpen}
      handler={handleOpen}
      className="bg-gray-900"
      aria-hidden={isOpen}
    >
      <DialogHeader className="flex items-center">
        <p className="ml-6 w-full text-xl font-medium text-white">
          Add Contributors
        </p>

        <IconButton size="sm" variant="text" onClick={handleOpen}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="space-y-4 px-10">
        <Input type="text" label="Wallet Address" color="white" />
        <Input type="text" label="Name" color="white" />
      </DialogBody>

      <DialogFooter className="justify-end px-10">
        <AddContributorBtn />
      </DialogFooter>
    </Dialog>
  );
};

export default ContributorModal;

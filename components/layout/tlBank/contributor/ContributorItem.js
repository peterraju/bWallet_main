"use client";

import { Checkbox } from "@material-tailwind/react";
import {
  TrashIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import usePostServer from "@/hooks/usePostServer";
import { useDispatch, useSelector } from "react-redux";
import {
  removeContributor,
  updateContributor as update,
} from "@/redux/slice/tlbankSlice";
import { useState } from "react";
import {
  addSelectedContributor,
  removeSelectedContributor,
  setWalletAddress,
} from "@/redux/slice/selectedSlice";
import { useRouter } from "next/navigation";

const ContributorItem = ({ contributor }) => {
  const { deleteContributor, updateContributor } = usePostServer();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(contributor.name);
  const selectedContributors = useSelector(
    (state) => state.selected.selectedContributors,
  );
  const router = useRouter();

  const handleDeleteContributor = async () => {
    const res = await deleteContributor(contributor.pubkey);
    if (!res) return;
    dispatch(removeContributor(contributor.pubkey));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = async () => {
    setIsEditing(false);
    const res = await updateContributor(contributor.pubkey, text);
    if (!res) return;
    dispatch(
      update({
        pubkey: contributor.pubkey,
        name: text,
      }),
    );
  };

  return (
    <div className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3">
      <div className="w-1/3">
        <Checkbox
          color="purple"
          checked={selectedContributors.some(
            (selectedContributor) => selectedContributor === contributor.pubkey,
          )}
          onChange={() => {
            if (
              selectedContributors.some(
                (selectedContributor) =>
                  selectedContributor === contributor.pubkey,
              )
            ) {
              dispatch(removeSelectedContributor(contributor.pubkey));
            } else {
              dispatch(addSelectedContributor(contributor.pubkey));
            }
          }}
          label={
            <div className="ml-3 flex items-center font-grotesque">
              <div onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleBlur}
                    className="border-b border-white bg-transparent text-white/90 outline-none"
                  />
                ) : (
                  <p className="text-white/90">{contributor.name}</p>
                )}
              </div>
            </div>
          }
        />
      </div>

      <p className="w-28 text-[#FCADFF]">{contributor.pubkey}</p>

      <button
        className="rounded-md bg-black/40 p-2"
        onClick={() => {
          dispatch(setWalletAddress(contributor.pubkey));
          router.push("/tlBank/dashboard");
        }}
      >
        <PaperAirplaneIcon className="h-5 w-5 text-[#FCADFF]" />
      </button>

      <div className="flex space-x-3">
        <button onClick={handleDeleteContributor}>
          <TrashIcon className="h-5 w-5 text-gray-300" />
        </button>

        {isEditing ? (
          <button onClick={handleBlur}>
            <CheckIcon className="h-5 w-5 text-gray-300" />
          </button>
        ) : (
          <button onClick={handleDoubleClick}>
            <PencilSquareIcon className="h-5 w-5 text-gray-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContributorItem;

"use client";

import Image from "next/image";

import { Checkbox } from "@material-tailwind/react";
import {
  TrashIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ContributorItem = ({ contributor }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-gray-900/90 px-4 py-3">
      <div className="w-1/3">
        <Checkbox
          color="purple"
          label={
            <div className="ml-3 flex items-center">
              <Image
                src={contributor.src}
                alt={contributor.name}
                width={32}
                height={32}
                className="rounded-full"
              />

              <p className="text-white/90">{contributor.name}</p>
            </div>
          }
        />
      </div>

      <p className="w-28 text-[#FCADFF]">
        {contributor.address.slice(0, 6)}...{contributor.address.slice(-4)}
      </p>

      <button className="rounded-md bg-black p-2">
        <PaperAirplaneIcon className="h-5 w-5 text-[#FCADFF]" />
      </button>

      <div className="flex space-x-3">
        <button>
          <TrashIcon className="h-5 w-5 text-gray-300" />
        </button>

        <button>
          <PencilSquareIcon className="h-5 w-5 text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default ContributorItem;

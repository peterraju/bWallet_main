"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import ContributorItem from "./ContributorItem";
import { useEffect } from "react";
import useGetServer from "@/hooks/useGetServer";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

const ContributerList = () => {
  const { getAllContributors } = useGetServer();
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);
  const status = useSelector((state) => state.tlbank.status);
  const contributors = useSelector((state) => state.tlbank.contributors);

  useEffect(() => {
    if (signature && address && status === "ORG") {
      getAllContributors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature, address, status]);

  return (
    <section className="mt-10 w-full max-w-6xl space-y-3 rounded-3xl bg-gray-800/70 px-4 py-4">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex w-1/3 items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600">
              <CheckIcon className="h-4 w-4 text-white " />
            </div>
          </div>

          <p className="text-gray-500">Name</p>
        </div>

        <p className="w-28 text-gray-500">Address</p>
        <div aria-hidden="true" className="h-9 w-9"></div>
        <p className="text-gray-500">Action</p>
      </div>

      {contributors.map((contributor, index) => (
        <ContributorItem key={index} contributor={contributor} />
      ))}
    </section>
  );
};

export default ContributerList;

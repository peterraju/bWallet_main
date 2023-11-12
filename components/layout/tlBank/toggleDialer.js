"use client";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useDispatch } from "react-redux";
import { setGoerli, setMainnet } from "@/redux/slice/tlbankSlice";
import { useEffect } from "react";

export function ToggleDialer() {
  const { address } = useAccount();

  const { switchNetwork } = useSwitchNetwork();
  const dispatch = useDispatch();
  const { chain } = useNetwork();

  useEffect(() => {
    if (!chain) return;
    if (chain.id === 1) dispatch(setMainnet());
    if (chain.id === 5) dispatch(setGoerli());
  }, [chain]);

  return (
    address && (
      <div className="fixed bottom-5 right-5">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <LinkIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction onClick={() => switchNetwork(1)}>
              <Image
                src="/images/tlbank/ethereum.svg"
                width={12}
                height={12}
                alt="ETH"
              />
            </SpeedDialAction>
            <SpeedDialAction onClick={() => switchNetwork(5)}>
              <p className="text-black ">G</p>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    )
  );
}

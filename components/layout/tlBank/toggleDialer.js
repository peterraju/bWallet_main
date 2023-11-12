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
import { useAccount, useSwitchNetwork } from "wagmi";
import { useDispatch } from "react-redux";
import { setGoerli, setMainnet } from "@/redux/slice/tlbankSlice";

export function ToggleDialer() {
  const { address } = useAccount();

  const { switchNetworkAsync } = useSwitchNetwork();
  const dispatch = useDispatch();

  const switchGoerli = async () => {
    try {
      await switchNetworkAsync(5);
      dispatch(setGoerli());
    } catch (err) {
      console.log(err);
    }
  };

  const switchMainnet = async () => {
    try {
      await switchNetworkAsync(1);
      dispatch(setMainnet());
    } catch (err) {
      console.log(err);
    }
  };

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
            <SpeedDialAction onClick={switchMainnet}>
              <Image
                src="/images/tlbank/ethereum.svg"
                width={12}
                height={12}
                alt="ETH"
              />
            </SpeedDialAction>
            <SpeedDialAction onClick={switchGoerli}>
              <p className="text-black ">G</p>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    )
  );
}

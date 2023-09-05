"use client";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useState, useEffect, useRef } from "react";
import { setGlobalState, useGlobalState, getGlobalState } from "@store";
import { BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ethers } from "ethers";
import { useConnect, useAccount } from "wagmi";

function Step() {
  const { connectors, connectAsync } = useConnect();

  const { address } = useAccount();

  const connectExternal = async (index) => {
    try {
      if (!address) {
        await connectAsync({ connector: connectors[index] });
        setGlobalState("stepCount", 3);
        setGlobalState("loginType", "external");
      } else {
        setGlobalState("stepCount", 3);
        setGlobalState("loginType", "external");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1 shadow-xl hover:cursor-pointer"
        onClick={() => connectExternal(0)}
      >
        Metamask
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1 hover:cursor-pointer"
        onClick={() => connectExternal(1)}
      >
        Coinbase
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1 hover:cursor-pointer"
        onClick={() => connectExternal(2)}
      >
        WalletConnect
      </div>

      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center hover:cursor-pointer"
        onClick={() => {
          setGlobalState("stepCount", 1);
        }}
      >
        Back{" "}
      </div>
    </div>
  );
}

export default Step;

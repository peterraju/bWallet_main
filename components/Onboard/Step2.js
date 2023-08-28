"use client";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useState, useEffect, useRef } from "react";
import { setGlobalState, useGlobalState, getGlobalState } from "@store";
import { BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ethers } from "ethers";

function Step() {
  const [mounted, setMounted] = useState(false);
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [address, setAddress] = useState(null);
  const [user, setUser] = useState(null);
  const [addr] = useGlobalState("address");

  const {
    init,
    login,
    logout,
    getPrivateKey,
    getUserInfo,
    checkLogin,
    getPublicKey,
  } = useWeb3Auth();

  const initialize = async () => {
    const { web3authInstance } = await init();
    setWeb3authInstance(web3authInstance);
  };

  useEffect(() => {
    setMounted(true);
    initialize();
  }, []);

  const connectwalletHandler = () => {
    if (typeof window === "undefined") return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (window.Ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
    } else {
      alert("Please install metamask");
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1 shadow-xl"
        onClick={connectwalletHandler}
      >
        Metamask
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1"
      >
        Coinbase
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)",
        }}
        className="text-sm flex items-center justify-center rounded-full py-1"
      >
        WalletConnect
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center"
        onClick={() => {
          if (getGlobalState("address")) {
            setGlobalState("stepCount", 3);
          } else {
            alert("connect with google");
          }
        }}
      >
        Next <BsArrowRight />
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center"
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

"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { setGlobalState, useGlobalState } from "@store";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useEffect, useRef } from "react";
import { ethers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit";
import { SafeFactory } from "@safe-global/protocol-kit";
import SafeApiKit from "@safe-global/api-kit";

function Step() {
  const [data] = useGlobalState("deployData");
  console.log(data);
  const [mounted, setMounted] = useState(false);
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [safeAddress, setSafeAddress] = useState(null);
  const [loading, setLoading] = useState(false);

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
    const { web3authInstance, provider } = await init();
    setWeb3authInstance(web3authInstance);
    setProvider(provider);
  };

  useEffect(() => {
    setMounted(true);
    initialize();
  }, []);

  const initSafe = async () => {
    const RPC_URL = "https://eth-goerli.public.blastapi.io";
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    const privateKey = await getPrivateKey(web3authInstance.provider);

    // Initialize signers
    const owner1Signer = new ethers.Wallet(privateKey, provider);

    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: owner1Signer,
    });

    //Init Safe Service
    const txServiceUrl = "https://safe-transaction-goerli.safe.global";
    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });

    //Init Safe Factory
    const safeFactory = await SafeFactory.create({
      ethAdapter: ethAdapterOwner1,
    });

    if (data.guardian1 && data.guardian2) {
      //Preparing Safe Account Config
      const safeAccountConfig = {
        owners: [
          await owner1Signer.getAddress(),
          data.guardian1,
          data.guardian2,
        ],
        threshold: 2,
      };

      //Deploy Safe
      const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig });
      const safeAddress = await safeSdkOwner1.getAddress();
      setSafeAddress(safeAddress);
    } else if (data.guardian1) {
      //Preparing Safe Account Config
      const safeAccountConfig = {
        owners: [await owner1Signer.getAddress(), data.guardian1],
        threshold: 2,
      };
      setLoading(true);

      //Deploy Safe
      try {
        const safeSdkOwner1 = await safeFactory.deploySafe({
          safeAccountConfig,
        });
        const safeAddress = await safeSdkOwner1.getAddress();
        setSafeAddress(safeAddress);
        setLoading(false);
        console.log(safeAddress);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please enter at least one guardian public key");
    }
  };
  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
      <div>
        <h2 className="text-lg font-semibold">Review</h2>
        <p className="text-xs text-[#5f5f5f]">
          You’re about to create a new safe wallet and will have to confirm the
          transaction with your connected wallet.
        </p>
      </div>
      <div className="text-sm flex flex-col gap-3">
        <div className="grid grid-cols-5">
          <div className="col-span-2">Wallet Owner (You) </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="p-2 rounded-md col-span-3 w-fit flex items-center gap-2"
          >
            <Image src="/assets/btc.png" alt="" width={30} height={20} />
            <div>
              <h6 className="text-xs text-[rgb(95,95,95)]">mywallet</h6>
              <h5 className="text-sm">{data?.address?.slice(0, 16)}....</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">Guardian 1</div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="p-2 rounded-md col-span-3 w-fit flex items-center gap-2"
          >
            <Image src="/assets/btc.png" alt="" width={30} height={20} />
            <div>
              <h6 className="text-xs text-[#5f5f5f]">Guardian 1</h6>
              <h5 className="text-sm">{data?.guardian1?.slice(0, 16)}...</h5>
            </div>
          </div>
        </div>

        {data?.guardian2 && (
          <div className="grid grid-cols-5">
            <div className="col-span-2">Guardian 2</div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
              }}
              className="p-2 rounded-md col-span-3 w-fit flex items-center gap-2"
            >
              <Image src="/assets/btc.png" alt="" width={30} height={20} />
              <div>
                <h6 className="text-xs text-[#5f5f5f]">Guardian 2</h6>
                <h5 className="text-sm">{data?.guardian2?.slice(0, 16)}...</h5>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        onClick={initSafe}
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center"
      >
        {loading ? "Deploying safe.." : "Deploy safe"}
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center"
        onClick={() => {
          setGlobalState("stepCount", 3);
        }}
      >
        Back
      </div>
    </div>
  );
}

export default Step;

"use client";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit";
import { SafeFactory } from "@safe-global/protocol-kit";
import SafeApiKit from "@safe-global/api-kit";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import { getGlobalState, setGlobalState, useGlobalState } from "@store";
import { useRouter } from "next/navigation";
import { useConnect, useAccount } from "wagmi";

export default function Onboard() {
  const [mounted, setMounted] = useState(false);
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [user, setUser] = useState(null);
  const [addr] = useGlobalState("address");
  const router = useRouter();
  const { connectors, connectAsync } = useConnect();

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

  const handleGoogleLogin = async () => {
    const logInStatus = await checkLogin(web3authInstance);
    if (!logInStatus) {
      const web3authProvider = await login(web3authInstance);
      setProvider(web3authProvider);
      setGlobalState("provider", web3authProvider);
      const user = await getUserInfo(web3authInstance);
      setUser(user);
      setGlobalState("user", user);
      const publicKey = await getPublicKey(web3authInstance.provider);
      setAddress(publicKey);
      setGlobalState("address", publicKey);
      setGlobalState("loginType", "openLogin");
      router.push("/dashboard");
    }

    if (logInStatus) {
      const user = await getUserInfo(web3authInstance);
      setUser(user);
      setGlobalState("user", user);
      const publicKey = await getPublicKey(web3authInstance.provider);
      setAddress(publicKey);
      console.log(publicKey);
      setGlobalState("address", publicKey);
      setGlobalState("loginType", "openLogin");
      router.push("/dashboard");
    }
  };

  const connectExternal = async (index) => {
    try {
      if (!address) {
        await connectAsync({ connector: connectors[index] });
        setGlobalState("loginType", "external");
        router.push("/dashboard");
      } else {
        setGlobalState("loginType", "external");
        router.push("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex mx-auto my-auto justify-center items-center w-screen h-screen">
      <div className="bg-prm-bg w-96  rounded-xl text-white p-3">
        <div
          className="flex justify-end w-full hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <AiOutlineClose className="text-white" />
        </div>
        <div
          style={{
            background:
              "radial-gradient(138.37% 138.37% at 50% -24.42%, rgba(234, 19, 242, 0.75) 0%, #E51E2A 54.62%, rgba(234, 19, 242, 0.75) 100%)",
          }}
          className="flex justify-center w-fit p-1 items-center mx-auto rounded-md"
        >
          <Image src="/assets/logo2.png" alt="" width={20} height={10} />
        </div>
        <h2 className="text-lg font-semibold text-center mt-2 border-b w-fit mx-auto pb-4 border-b-offwhite">
          Welcome to Bankless Wallet!
        </h2>
        <Link href="/onboard">
          {" "}
          <h2 className="text-[#EA13F2] text-center mt-3">Sign Up</h2>
        </Link>
        <h2 className="text-center text-sm text-offwhite mt-3">or</h2>
        <h2 className="text-white text-lg font-medium mt-3 text-center">
          Access your Account with
        </h2>
        <div
          onClick={handleGoogleLogin}
          className="bg-sec-bg border border-offwhite rounded-full w-fit h-fit p-2 flex mx-auto mt-3 cursor-pointer"
        >
          <FcGoogle />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="text-sm flex items-center justify-center rounded-full py-1 shadow-xl hover:cursor-pointer"
            onClick={() => {
              connectExternal(0);
            }}
          >
            Metamask wallet
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="text-sm flex items-center justify-center rounded-full py-1 hover:cursor-pointer"
            onClick={() => {
              connectExternal(1);
            }}
          >
            Coinbase wallet
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="text-sm flex items-center justify-center rounded-full py-1 hover:cursor-pointer"
            onClick={() => {
              connectExternal(2);
            }}
          >
            WalletConnect
          </div>
          <div className="bg-[#EA13F2] text-[#FCADFF] w-fit p-1 rounded-md font-medium flex items-center mx-auto opacity-60 hover:opacity-90">
            Connect hardware wallet
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit";
import { SafeFactory } from "@safe-global/protocol-kit";
import SafeApiKit from "@safe-global/api-kit";

function Page() {
  const [mounted, setMounted] = useState(false);
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [user, setUser] = useState(null);
  const guardian1 = useRef(null);
  const guardian2 = useRef(null);
  const [safeAddress, setSafeAddress] = useState(null);

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
    if (!checkLogin(web3authInstance)) {
      const web3authProvider = await login(web3authInstance);
      setProvider(web3authProvider);
      getUserInfo();
    }

    const user = await getUserInfo(web3authInstance);
    setUser(user);
    const publicKey = await getPublicKey(web3authInstance.provider);
    setAddress(publicKey);
  };

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

    if (guardian1.current.value && guardian2.current.value) {
      //Preparing Safe Account Config
      const safeAccountConfig = {
        owners: [
          await owner1Signer.getAddress(),
          guardian1.current.value,
          guardian2.current.value,
        ],
        threshold: 2,
      };

      //Deploy Safe
      const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig });
      const safeAddress = await safeSdkOwner1.getAddress();
      setSafeAddress(safeAddress);
    } else if (guardian1.current.value) {
      //Preparing Safe Account Config
      const safeAccountConfig = {
        owners: [await owner1Signer.getAddress(), guardian1.current.value],
        threshold: 2,
      };

      //Deploy Safe
      const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig });
      const safeAddress = await safeSdkOwner1.getAddress();
      setSafeAddress(safeAddress);
    } else {
      console.log("Please enter at least one guardian public key");
    }
  };

  return (
    mounted && (
      <div className="text-white ml-5">
        <p className="mt-5 font-bold">Backend test page</p>

        {/* Login */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>1.</h1>
          <button
            className=" bg-red-700 text-white rounded-xl p-4"
            onClick={handleGoogleLogin}
          >
            Log In With Google
          </button>
        </div>

        {/* Check Info */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>2.</h1>
          <h1>Check Info:</h1>
          {user && (
            <>
              <h1>{user.email}</h1>
              <h1>{address}</h1>
            </>
          )}
        </div>

        {/* Assign Guardian */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>3.</h1>
          <h1>Assign Guardian:</h1>
          <input
            type="text"
            placeholder="1st Guardian Public Key"
            className="text-black"
            ref={guardian1}
          ></input>
          <input
            type="text"
            placeholder="2nd Guardian Public Key"
            className="text-black"
            ref={guardian2}
          ></input>
        </div>

        {/* Create Safe */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>4.</h1>
          <button
            className=" bg-red-700 text-white rounded-xl p-4"
            onClick={initSafe}
          >
            Create Safe
          </button>
        </div>

        {/* Check Safe Address */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>5.</h1>
          <h1>Check Safe Address:</h1>
          {safeAddress && <h1>{safeAddress}</h1>}
        </div>

        {/* Logout */}
        <div className="flex space-x-3 items-center mt-5">
          <h1>6.</h1>
          <button
            className=" bg-red-700 text-white rounded-xl p-4"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    )
  );
}

export default Page;

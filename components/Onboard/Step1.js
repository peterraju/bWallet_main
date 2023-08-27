"use client";
import React, { useRef, useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { BsArrowRight } from "react-icons/bs";
import { Progress } from "@nextui-org/react";
import { setGlobalState } from "@store";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import useWeb3Auth from "@hooks/useWeb3Auth";

function Step() {
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [provider, setProvider] = useState(null);
  const email = useRef(null);

  const { init, login, loginWithEmail, loginMetamask, checkLogin } =
    useWeb3Auth();

  const initialize = async () => {
    const { web3authInstance, provider } = await init();
    setWeb3authInstance(web3authInstance);
    setProvider(provider);
  };

  const handleMetamakLogin = async () => {
    try {
      const logInStatus = await checkLogin(web3authInstance);
      if (web3authInstance) web3authInstance.logout();
      if (!logInStatus) {
        web3authInstance.logout();
        const web3authProvider = await loginMetamask(web3authInstance);
        setProvider(web3authProvider);
        setGlobalState("stepCount", 2);
        setGlobalState("loginType", "metamask");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const logInStatus = await checkLogin(web3authInstance);
      if (web3authInstance) web3authInstance.logout();
      if (!logInStatus) {
        web3authInstance.logout();
        const web3authProvider = await login(web3authInstance);
        setProvider(web3authProvider);
        setGlobalState("stepCount", 2);
        setGlobalState("loginType", "openLogin");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEmailLogin = async () => {
    if (!email.current.value) {
      alert("Please enter email");
      return;
    }
    try {
      if (web3authInstance) web3authInstance.logout();
      const logInStatus = await checkLogin(web3authInstance);
      if (!logInStatus) {
        const web3authProvider = await loginWithEmail(web3authInstance, email);
        setProvider(web3authProvider);
        setGlobalState("stepCount", 2);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-2 pb-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white font-semibold">Email</label>
        <input
          ref={email}
          type="text"
          className="bg-white p-2 text-sm text-black rounded-md"
          placeholder="abc@bankless.xyz"
        />
        <p className="text-xs text-[#5f5f5f]">
          Provide your email to receive our newsletters and stay connected with
          our latest developments
        </p>
      </div>
      <div className="flex flex-col gap-1">
        {/* <label className="text-xs text-white font-semibold">
          Verification code{" "}
          <span className="text-[#5f5f5f] ml-3">
            Input 6 digit code received in your mail
          </span>
        </label> */}
        {/* <OtpInput
          value={code}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "30px",
            height: "30px",
            fontSize: "14px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        /> */}
      </div>
      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center hover:cursor-pointer"
        onClick={handleEmailLogin}
      >
        Connect <BsArrowRight />
      </div>
      <h2 className="text-center text-sm text-offwhite mt-2">or</h2>
      <div className="flex mx-auto space-x-3">
        <div
          className="bg-sec-bg border border-offwhite rounded-full w-fit h-fit p-2 flex mt-2 mb-3 cursor-pointer"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
        </div>
        <div
          className="bg-sec-bg border border-offwhite rounded-full w-fit h-fit p-2 flex mt-2 mb-3 cursor-pointer"
          onClick={handleMetamakLogin}
        >
          <Image
            src="/assets/MetaMask_Fox.svg"
            alt="Metamask"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center hover:cursor-pointer"
      >
        Cancel
      </div>
    </div>
  );
}

export default Step;

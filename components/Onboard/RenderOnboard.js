"use client";
import React, { useEffect } from "react";
import Step1 from "@components/Onboard/Step1";
import Step2 from "@components/Onboard/Step2";
import Step3 from "@components/Onboard/Step3";
import Step4 from "@components/Onboard/Step4";
import { getGlobalState, useGlobalState } from "@store";
import useWeb3Auth from "@hooks/useWeb3Auth";
import { useState, useRef } from "react";
import { setGlobalState } from "@store";

function RenderOnboard() {
  const [count] = useGlobalState("stepCount");
  const cnt = getGlobalState("stepCount");
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

  const handleGoogleLogin = async () => {
    try {
      const logInStatus = await checkLogin(web3authInstance);
      if (!logInStatus) {
        const web3authProvider = await login(web3authInstance);
        setProvider(web3authProvider);
        setGlobalState("stepCount", 3);
        setGlobalState("loginType", "openLogin");
      } else {
        setGlobalState("stepCount", 3);
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
      const logInStatus = await checkLogin(web3authInstance);
      if (!logInStatus) {
        const web3authProvider = await loginWithEmail(web3authInstance, email);
        setProvider(web3authProvider);
        setGlobalState("stepCount", 3);
      } else {
        setGlobalState("stepCount", 3);
        setGlobalState("loginType", "openLogin");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    switch (cnt) {
      case 1:
        <Step1
          handleGoogleLogin={handleGoogleLogin}
          handleEmailLogin={handleEmailLogin}
          email={email}
        />;
      case 2:
        <Step2 />;
      case 3:
        <Step3 />;
      case 4:
        <Step4 />;
    }
  }, [count]);
  if (count == 1)
    return (
      <Step1
        handleGoogleLogin={handleGoogleLogin}
        handleEmailLogin={handleEmailLogin}
        email={email}
      />
    );
  else if (count === 2) return <Step2 />;
  else if (count === 3) return <Step3 />;
  else return <Step4 />;
}

export default RenderOnboard;

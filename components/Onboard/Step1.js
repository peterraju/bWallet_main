"use client";
import React, { useRef, useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { BsArrowRight } from "react-icons/bs";
import { Progress } from "@nextui-org/react";
import { setGlobalState } from "@store";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import useWeb3Auth from "@hooks/useWeb3Auth";

function Step({ handleGoogleLogin, handleEmailLogin, email }) {
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);

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
      </div>
      <div className="flex flex-col">
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
        Sign Up with Email <BsArrowRight />
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm flex items-center text-center justify-center rounded-full py-1 shadow-xl hover:cursor-pointer"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="mr-2 mb-1" /> Google
      </div>
      <h2 className="text-center text-sm text-offwhite ">or</h2>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm flex items-center justify-center gap-1 rounded-full py-1 shadow-xl hover:cursor-pointer"
        onClick={() => {
          setGlobalState("stepCount", 2);
        }}
      >
        External Wallets <BsArrowRight />
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

"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import {BsArrowRight} from 'react-icons/bs'
import {Progress} from "@nextui-org/react";
function Step() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
     <div className="flex flex-col gap-6 w-full max-w-md">
     <Progress color="danger" size="sm" aria-label="Loading..." value={30} />
     </div>
    
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white font-semibold">Email</label>
        <input
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
        <label className="text-xs text-white font-semibold">
          Verification code{" "}
          <span className="text-[#5f5f5f] ml-3">
            Input 6 digit code received in your mail
          </span>
        </label>
        <OtpInput
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
        />
        
      </div>
      <div style={{
            background: 'linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)'
        }} className="text-sm py-1 rounded-full gap-1 flex justify-center items-center">
        Next <BsArrowRight/>
        </div>
        <div style={{
background: 'linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)'

        }} className="text-sm py-1 rounded-full flex justify-center items-center">
        Cancel
        </div>
    </div>
  );
}

export default Step;

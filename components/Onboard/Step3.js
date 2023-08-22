"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { BsArrowRight } from "react-icons/bs";

function Step() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white font-semibold">Safe Name</label>
        <input
          style={{
            background:
              "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
          }}
          type="text"
          className="bg-white p-2 text-sm text-black rounded-md border border-offwhite"
          placeholder="abc@bankless.xyz"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <label className="text-xs text-white font-semibold">
            Wallet Owner
          </label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-white p-2 text-sm text-black rounded-md w-20 border border-offwhite"
            placeholder="ABC"
          />
        </div>
        <div className="col-span-3 ml-4">
          <label className="text-xs text-white font-semibold">Address</label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-white p-2 text-sm text-black rounded-md border border-offwhite w-full"
            placeholder="abc@bankless.xyz"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <label className="text-xs text-white font-semibold">Guardian</label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-white p-2 text-sm text-black rounded-md w-20 border border-offwhite"
            placeholder="ABC"
          />
        </div>
        <div className="col-span-3 ml-4">
          <label className="text-xs text-white font-semibold">Address</label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-white p-2 text-sm text-black rounded-md border border-offwhite w-full"
            placeholder="abc@bankless.xyz"
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center"
      >
        Next <BsArrowRight />
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center"
      >
        Cancel
      </div>
    </div>
  );
}

export default Step;

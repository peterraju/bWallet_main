"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

function Step() {
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
          <div className="col-span-2">Safe Name</div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="p-2 rounded-md col-span-3 w-fit "
          >
            ABC Wallet
           </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">Wallet Owner (You) </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="p-2 rounded-md col-span-3 w-fit flex items-center gap-2"
          >
           <Image src="/assets/btc.png" alt="" width={30} height={20}/>
            <div>
                <h6 className="text-xs text-[rgb(95,95,95)]">mywallet</h6>
                <h5 className="text-sm">0x12345678010..</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">Guardian</div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
            }}
            className="p-2 rounded-md col-span-3 w-fit flex items-center gap-2"
          >
            <Image src="/assets/btc.png" alt="" width={30} height={20}/>
            <div>
                <h6 className="text-xs text-[#5f5f5f]">mywallet</h6>
                <h5 className="text-sm">0x12345678910..</h5>
            </div>
          </div>
        </div>
        
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center"
      >
        Deploy Safe 
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center"
      >
        Back
      </div>
    </div>
  );
}

export default Step;

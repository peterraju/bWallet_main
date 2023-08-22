"use client";
import React, { useState } from "react";
import {BsArrowRight} from 'react-icons/bs'


function Step() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
    <div style={{
        background: 'linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)'

    }} className="text-sm flex items-center justify-center rounded-full py-1 shadow-xl">
    Metamask
    </div>
    <div style={{
        background: 'linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)'

    }} className="text-sm flex items-center justify-center rounded-full py-1">
    Coinbase
    </div>
    <div style={{
        background: 'linear-gradient(180deg, #1E1E1E 0%, #141414 100%),linear-gradient(0deg, #EA13F2, #EA13F2)'

    }} className="text-sm flex items-center justify-center rounded-full py-1">
    WalletConnect
    </div>



      <div style={{
            background: 'linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)'
        }} className="text-sm py-1 rounded-full gap-1 flex justify-center items-center">
        Next <BsArrowRight/>
        </div>
        <div style={{
background: 'linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)'

        }} className="text-sm py-1 rounded-full flex justify-center items-center">
Back        </div>
    </div>
  );
}

export default Step;

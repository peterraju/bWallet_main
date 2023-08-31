"use client";
import React, { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { setGlobalState, getGlobalState } from "@store";
import { ethers } from "ethers";
import { Web3AuthContext } from "@hooks/web3AuthContext";
import { useAccount } from "wagmi";

function Step() {
  const { address } = useContext(Web3AuthContext);
  const { address: extAddress } = useAccount();
  const loginType = getGlobalState("loginType");

  console.log(loginType);
  console.log(address);

  const [data, setData] = useState({
    address: loginType === "openLogin" ? address : extAddress,
    guardian1: "",
    guardian2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    //check if address and guardian are public keys
    if (
      ethers.utils.isAddress(data.address) &&
      ethers.utils.isAddress(data.guardian1)
    ) {
      let deploydata = {
        address: data.address,
        guardian1: data.guardian1,
        guardian2: data.guardian2.length > 0 ? data.guardian2 : null,
      };
      setGlobalState("deployData", deploydata);
      setGlobalState("stepCount", 4);
    } else {
      alert("Please enter a valid address");
      return;
    }

    console.log(data);
  };
  return (
    <div className="mt-4 flex flex-col gap-3 pb-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white font-semibold">Your Address</label>
        <input
          style={{
            background:
              "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
          }}
          type="text"
          className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite"
          placeholder="abc@bankless.xyz"
          name="address"
          value={data.address}
          disabled={true}
        />
      </div>
      <div className="">
        <div className="w-[100%]">
          <label className="text-xs text-white font-semibold">Guardian 1</label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite w-full"
            placeholder="0x1234567890"
            name="guardian1"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <label className="text-xs text-white font-semibold">
            Guardian 2 (optional)
          </label>
          <input
            style={{
              background:
                "linear-gradient(0deg, #222222, #222222),linear-gradient(0deg, #161616, #161616)",
            }}
            type="text"
            className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite w-full"
            placeholder="0x1234567890"
            name="guardian2"
            value={data.guardian2}
            onChange={handleChange}
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center mt-2"
        onClick={() => {
          handleSubmit();
        }}
      >
        Next <BsArrowRight />
      </div>
    </div>
  );
}

export default Step;

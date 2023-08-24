"use client";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { setGlobalState, useGlobalState } from "@store";
import { ethers } from "ethers";


function Step() {
  
  const [useraddr] = useGlobalState('address')

  

 const [data,setData] = useState({
  safeName:'',
  address:useraddr,
  guardian:''
 })
 const handleChange =(e)=>{
  const {name,value} = e.target
  setData({...data,[name]:value})
 }
const handleSubmit=()=>{
  //check if address and guardian are public keys
  if(ethers.utils.isAddress(data.address) && ethers.utils.isAddress(data.guardian)){
    let deploydata = {
      address:data.address,
      guardian1:data.guardian,
      guardian2:null,
      safeName:data.safeName
    }
    setGlobalState('deployData',deploydata)
  }else{
    alert("Please enter a valid address")
    return;
  }

  console.log(data)
}
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
          className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite"
          placeholder="abc@bankless.xyz"
          name="safeName"
          value={data.safeName}
          onChange={handleChange}
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
            className="bg-prm-bg p-2 text-sm text-white rounded-md w-20 border border-offwhite"
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
            className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite w-full"
            placeholder="abc@bankless.xyz"
            name="address"
            value={useraddr}
            onChange={handleChange}
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
            className=" bg-prm-bg p-2 text-sm text-white rounded-md w-20 border border-offwhite"
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
            className="bg-prm-bg p-2 text-sm text-white rounded-md border border-offwhite w-full"
            placeholder="abc@bankless.xyz"
            name="guardian"
            value={data.guardian}
            onChange={handleChange}
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #E51E2A 0%, #EA13F2 100%)",
        }}
        className="text-sm py-1 rounded-full gap-1 flex justify-center items-center" onClick={()=>{
          handleSubmit()
          setGlobalState('stepCount',4)}}
      >
        Next <BsArrowRight />
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #222222, #222222),linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="text-sm py-1 rounded-full flex justify-center items-center" onClick={()=>{setGlobalState('stepCount',2)}}
      >
        Back
      </div>
    </div>
  );
}

export default Step;

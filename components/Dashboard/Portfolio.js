import React from 'react'

import { BiSync, BiUpArrowAlt } from "react-icons/bi";
import {BsFuelPump} from 'react-icons/bs'
import { AiFillEuroCircle } from "react-icons/ai";
function Portfolio() {
  return (
    <div className="h-40 bg-sec-bg rounded-md p-3 flex flex-col gap-2">
    <div className="text-[#545454] text-xs  items-center font-prm">
      Portfolio Value{" "}
    </div>
    <h2 className="text-white text-2xl font-prm font-bold flex gap-16">
      $ 240000{" "}
      <span className="text-green-500 text-xs flex items-center gap-1">
        {" "}
        <BiUpArrowAlt className="text-lg" /> 0.24%{" "}
      </span>
    </h2>
    <div className="flex gap-3 items-center justify-between  border-t-[1px] border-[#545454]">
      <div className="flex mt-2 text-white items-center gap-2">
        <div className="flex items-center gap-2 bg-prm-bg py-1 px-2 rounded-full text-white text-sm">
          Fiat
          <AiFillEuroCircle className="text-blue-500 bg-white rounded-full" />
        </div>
        <span className="font-semibold">$32,100</span>
        <div className="flex items-center gap-2 bg-prm-bg py-1 ml-2 px-2 rounded-full text-white text-sm">
          Crypto
          <AiFillEuroCircle className="text-blue-500 bg-white rounded-full" />
        </div>
        <span className="font-semibold">$32,100</span>
      </div>
      <div className="bg-prm-bg opacity-50 flex items-center text-sm py-1 px-2 rounded-full text-white gap-1 mt-2">
     <span className="font-semibold">BASE</span>  <span className="flex items-center text-[#FCADFF] gap-1">| <BsFuelPump className=""/></span>  
     $0.04
      </div>
    </div>
  </div>
  )
}

export default Portfolio
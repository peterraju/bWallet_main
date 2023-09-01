'use client';
import React from 'react'
import { PiArrowUpRightBold, PiArrowDownLeftBold } from "react-icons/pi";
import { BiSync } from "react-icons/bi";
import {Select, SelectItem} from "@nextui-org/react";
import Image from 'next/image';
import {BsSendFill} from 'react-icons/bs'
import TransferFuntion from './ActionFunctions/TransferAction';
import DepositFunction from './ActionFunctions/DepositFunction';


function Actions() {
  return (
    <div className=" bg-sec-bg rounded-md px-2">
          <div className='border-b-[1px] pb-2 border-[#545454] flex items-center p-3 text-sm justify-between font-semibold'>
          <div
          style={{
            background:'linear-gradient(103deg, #E51E2A -32.2%, #EA13F2 178.76%)'
          }}
            className="h-fit text-white px-1 py-1  flex items-center gap-1 rounded-md"
          >
            Transfer <PiArrowUpRightBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Receive <PiArrowDownLeftBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Swap <BiSync className="text-lg" />{" "}
          </div>
          </div>
         {/* <TransferFuntion/> */}
           <DepositFunction/> 
        </div>
  )
}

export default Actions


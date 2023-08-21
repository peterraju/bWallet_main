import Image from "next/image";
import React from "react";
import {BsSendFill} from 'react-icons/bs'
import { BiSync} from "react-icons/bi";


function PortfolioDetails() {
  return (
    <div className="h-full bg-sec-bg rounded-md p-3 overflow-hidden">
      <h2 className="text-white text-sm border-b-[1px] pb-2 border-[#545454]">
        <div className="flex items-center gap-5 font-semibold ">
          <div>Tokens</div>
          <div className="opacity-50">Fiat</div>
          <div className="opacity-50">Collectibles</div>
        </div>
      </h2>
      <div className="h-full overflow-y-hidden">
      <div className="grid grid-cols-5 text-xs text-white opacity-40 m-2">
        <div className="col-span-1">Token</div>
        <div className="col-span-1">Price</div>
        <div className="col-span-1">Quantity</div>
        <div className="col-span-1">Value</div>
        <div className="col-span-1">Actions</div>
      </div>
      <div className="overflow-y-scroll h-full">
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>
      <TokenInfo/>

      </div>

      </div>

    </div>
  );
}
const TokenInfo = () => {
  return (
    <div className="bg-card-bg p-4 rounded-md grid grid-cols-5 text-sm text-white  mt-2">
      
        <div className="col-span-1 flex items-center gap-1">
            <Image src="/assets/btc.png" alt="" height={20} width={20}/>
            BTC
        </div>
        <div className="col-span-1 text-red-300">$1234</div>
        <div className="col-span-1">$2.000001</div>
        <div className="col-span-1">$26,000</div>
        <div className="col-span-1 flex gap-2 ">
        <div className="bg-sec-bg px-2 py-1 rounded-full">
        <BsSendFill className="text-white  text-xs"/>
        </div>
        <div className="bg-sec-bg px-2 py-1 rounded-full">
        <BiSync className="text-white  text-xs"/>
        </div>

           
        </div>

    </div>
  );
};
export default PortfolioDetails;

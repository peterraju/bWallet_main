import Image from "next/image";
import React from "react";
import Portfolio from "@components/Dashboard/Portfolio";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { PiArrowUpRightBold, PiArrowDownLeftBold } from "react-icons/pi";
import { BiSync, BiUpArrowAlt } from "react-icons/bi";
import PortfolioDetails from "@components/Dashboard/PortfolioDetails";
import Actions from "@components/Dashboard/Actions";
import TransactionHistory from "@components/Dashboard/TransactionHistory";
function Dashboard() {
  return (
  <div>
  <div className="w-full bg-sec-bg flex text-white font-large gap-4 py-1 px-12"><Image src='/assets/Union.png' width={20} height={10} alt=""/>  <h2 className="font-semibold">Bankless Wallet</h2> </div>
      <div className="bg-prm-bg h-[90vh] w-[85vw] flex mx-auto mt-[4vh] gap-4 shadow-2xl rounded-md">
      <div className="w-8/12 flex flex-col gap-3 ">
        <Portfolio/>
        <PortfolioDetails/>
       
      </div>
      <div className="w-1/3 flex flex-col gap-3">
        <Actions/>

       <TransactionHistory/>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;




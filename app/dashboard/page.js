import Image from "next/image";
import React from "react";
import Portfolio from "@components/Dashboard/Portfolio";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { PiArrowUpRightBold, PiArrowDownLeftBold } from "react-icons/pi";
import { BiSync, BiUpArrowAlt } from "react-icons/bi";
import PortfolioDetails from "@components/Dashboard/PortfolioDetails";
function Dashboard() {
  return (
    <div className="bg-prm-bg h-[90vh] w-[85vw] flex mx-auto mt-[6vh] gap-4 shadow-2xl rounded-md">
      <div className="w-8/12 flex flex-col gap-3 ">
        <Portfolio/>
        <PortfolioDetails/>
       
      </div>
      <div className="w-1/3 flex flex-col gap-3">
        <div className="h-14 bg-sec-bg rounded-md flex items-center p-3 text-sm justify-between font-semibold">
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(208, 33, 41, 0.70) 0%, rgba(117, 0, 105, 0.70) 100%)",
            }}
            className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md"
          >
            Send <PiArrowUpRightBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Receive <PiArrowDownLeftBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Swap <BiSync className="text-lg" />{" "}
          </div>
        </div>

        <div className="h-full bg-sec-bg rounded-md"></div>
      </div>
    </div>
  );
}

export default Dashboard;




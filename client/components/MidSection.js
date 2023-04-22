import React from "react";
import Transactions from "./Transactions";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSection } from "@/redux/counterSlice";

function MidSection() {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.counter.activeSection);
  return (
    <div className="w-2/4 h-screen flex justify-center items-center">
      <div className="w-full h-[80%]">
        <h1 className="text-5xl text-white font-semibold mb-10">Hi, Rahul</h1>
        <div className="flex flex-row">
          <div className="bg-[#3A3D48] w-fit flex flex-col rounded-3xl p-5 pr-20">
            <h1 className="text-base m-2 text-white">Your Balance</h1>
            <h1 className="text-5xl m-2 text-white font-bold mb-9">$1256.70</h1>
            <h1 className="text-base ml-2 text-[#808088] tracking-widest">
              0x3C....f863
            </h1>
          </div>
          <div className="flex flex-col w-full items-center justify-around">
            <div
              className="bg-[#3A3D48] text-[#77777f] text-2xl p-5 px-[102px] rounded-3xl hover:cursor-pointer transition-colors duration-300 hover:text-white"
              style={{
                backgroundColor:
                  activeSection === "portfolio" ? "#ED1C24" : "#3A3D48",
                color: activeSection === "portfolio" ? "#ffffff" : "",
              }}
              onClick={() => {
                dispatch(setActiveSection("portfolio"));
              }}
            >
              Your portfolio
            </div>
            <div
              className=" text-2xl p-5 px-[72px] rounded-3xl text-[#77777f] hover:cursor-pointer transition-colors duration-300 hover:text-white"
              style={{
                backgroundColor:
                  activeSection === "transaction" ? "#ED1C24" : "#3A3D48",
                color: activeSection === "transaction" ? "#ffffff" : "",
              }}
              onClick={() => {
                dispatch(setActiveSection("transaction"));
              }}
            >
              Recent Transaction
            </div>
          </div>
        </div>
        <h1 className="text-white text-2xl my-4">Recent Transaction</h1>
        <Transactions />
        <Transactions />
      </div>
    </div>
  );
}

export default MidSection;

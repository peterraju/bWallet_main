import React from "react";
import FieldName from "../FieldName";
import { StepInput, handleInputClick } from "../StepsCommon";



const SetupAccount = () => {
  return (
    <div className=" py-14">
      <div className="flex h-[200px] flex-col   justify-between gap-y-4">
        <div className=" mt-14">
          <FieldName val={"Safe Name"} />
          <StepInput pholder={"myWallet"} styles={"w-[398px] h-10"} />
        </div>
        <div className="flex w-full">
          <div className=" flex h-[66px] w-28 flex-col justify-between">
            <FieldName val={"Gaurdian"} />
            <StepInput pholder={"Gaurdian"} styles={"w-full h-10"} />
          </div>
          <div className="ml-4">
            <FieldName val={"Address"} />
            <StepInput pholder={"Gaurdina Addres"} styles={"w-[270px] h-10 "} />
          </div>
        </div>
        <div onClick={handleInputClick} className=" h-4  cursor-pointer text-[#FCADFF]"> + Add New Gaurdian</div>
      </div>
    </div>
  );
};

export default SetupAccount;
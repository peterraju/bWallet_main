"use client";
import React from "react";
import Image from "next/image";
import { Switch } from "@material-tailwind/react";
import { haqqTestedge2 } from "viem/chains";

//commom to all pages



// set up your account




const emptyInputField = () => {
  const [inputValue1, setInputValue1] = useState("");

  const [inputValue2, setInputValue2] = useState("");
};

const handleInputChange1 = (e) => {
  setInputValue(e.target.value);
};

const handleInputChange2 = (e) => {
  setInputValue(e.target.value);
};

const handleInputClick = () => {
  setInputValue1("");
  setInputValue2("");
};

const def =
  "rounded-lg  placeholder:my-[11px] pl-3 border-gradient-text border placeholder:ml-3 border-white  mt-2 bg-tlbank-black ";

const StepInput = ({ styles, pholder }) => {
  return (
    <input
      placeholder={pholder}
      className={[def, styles].join("")}
    ></input>
  );
};

//Two factor auth

const Box = ({ head, para, svg }) => {
  return (
    <div className=" flex h-[102px] w-[398px] rounded-lg  border-none bg-tlbank-black p-3">
      <div className="">
        <div className=" mb-[6px] h-[18px] font-grotesque text-sm font-bold">
          {head}
        </div>
        <div className="h-[54px] w-[280px] font-grotesque text-sm font-normal">
          {para}
        </div>
      </div>
      <Image className="ml-6" src={svg} width={70} height={70} />
    </div>
  );
};

const SwitchCustomStyles = () => {
  return (
    <Switch
      id="custom-switch-component"
      ripple={false}
      className=" checked:  h-[27px]  w-[60px] bg-gradient-primary"
      containerProps={{
        className: "w-[60px] h-[27px]",
      }}
      circleProps={{
        className: "before:hidden left-0.5 bottem-0.6 border-none",
      }}
    />
  );
};

const GradBorder = () => {
  return <div className=" bg-gradient-primary"></div>;
};

//Deploy Wallet

const GardianIp = ({ address, name }) => {
  return (
    <div className="my-2 flex h-[62px]  flex-col justify-between rounded-lg border bg-tlbank-black  px-3  py-1">
      <input
        readOnly
        defaultValue={name}
        onChange={handleInputChange1}
        className=" border-none  bg-tlbank-black "
      ></input>
      <input
        readOnly
        onChange={handleInputChange2}
        className="    border-none bg-tlbank-black "
        defaultValue={address}
      ></input>
    </div>
  );
};
export {
  StepInput,
  handleInputChange1,
  handleInputChange2,
  handleInputClick,
  Box,
  GardianIp,
  SwitchCustomStyles,
  GradBorder,
  emptyInputField
};

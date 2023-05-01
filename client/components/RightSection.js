
import React from "react";
import Image from "next/image";
import Receive from "./RightSectionComponents/Receive";
import Send from "./RightSectionComponents/Send";
import { useSelector } from "react-redux";


function RightSection() {
  const activeButton = useSelector((state) => state.counter.activeButton);
  return (
    <div className='w-[380px] h-[80%] pt-4 pb-6  bg-gradient-to-b from-[#3A3D48] to-[#28292E] flex flex-col justify-start items-center rounded-[50px]'>
      <Image 
        src='/ppimg.svg'
        width={120}
        height={120}
        className=''
      />
      <h1 className='bg-[#737478] rounded-full text-white px-3 absolute top-[215px]'>
        0x3c....f863
      </h1>
      {activeButton === "receive" && <Receive />}
      {activeButton === "send" && <Send />}

    </div>
  );
}

export default RightSection;

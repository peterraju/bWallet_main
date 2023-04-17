import React from 'react'
import Image from 'next/image'

function LeftSection() {
  return (
    <div className='w-[180px] h-[80%] bg-gradient-to-b from-[#3A3D48] to-[#28292E] flex flex-col justify-start items-center rounded-[50px]'>
        <h1 className='text-5xl p-3 pt-[60px] text-white underline underline-offset-8 decoration-red-500'>Wallet</h1>
        <h1 className='text-[#808088] text-lg mt-10'>Manage</h1>
        <div className='w-[70px] h-[70px] rounded-full bg-[#ED1C24] mt-10 flex justify-center items-center hover:bg-[#da1c22b6] hover:cursor-pointer'>
          <Image
            src="/sendIcon.svg"
            width={30}
            height={30}
          />
        </div>
        <div className='w-[70px] h-[70px] mt-10 flex justify-center items-center hover:cursor-pointer'>
          <Image
            src="/receiveIcon.svg"
            width={30}
            height={30}
          />
        </div>
        <div className='w-[70px] h-[70px] mt-10 flex justify-center items-center hover:cursor-pointer'>
          <Image
            src="/swapIcon.svg"
            width={40}
            height={40}
          />
        </div>
        <div className='w-[70px] h-[70px] mt-1 flex justify-center items-center'>
          <Image
            src="/breakLine.svg"
            width={60}
            height={60}
          />
        </div>
        <div className='w-[70px] h-[70px] rounded-full bg-[#393B47] mt-5 flex justify-center items-center hover:bg-[#545768] hover:cursor-pointer'>
          <Image
            src="/shutDown.svg"
            width={20}
            height={20}
          />
        </div>
    </div>
  )
}

export default LeftSection
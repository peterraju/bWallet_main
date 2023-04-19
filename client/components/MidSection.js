import React from 'react'
import Transactions from './Transactions'

function MidSection() {
  return (
    <div className='w-2/4 h-screen flex justify-center items-center'>
      <div className='w-full h-[80%]'>
        <h1 className='text-5xl text-white font-semibold mb-10'>
          Hi, Rahul
        </h1>
        <div className='flex flex-row'>
          <div className='bg-[#3A3D48] w-fit flex flex-col rounded-3xl p-5 pr-20'>
            <h1 className='text-base m-2 text-white'>Your Balance</h1>
            <h1 className='text-5xl m-2 text-white font-bold mb-9'>$1256.70</h1>
            <h1 className='text-base ml-2 text-[#808088] tracking-widest'>0x3C....f863</h1>
          </div>
          <div className='flex flex-col w-full items-center justify-around'>
            <div className='bg-[#3A3D48] text-white text-2xl p-5 px-[102px] rounded-3xl'>
              Your portfolio
            </div>
            <div className='bg-[#ED1C24] text-white text-2xl p-5 px-[72px] rounded-3xl'>
              Recent Transaction
            </div>
          </div>
        </div>
        <h1 className='text-white text-2xl my-4'>
          Recent Transaction
        </h1>
        <Transactions />
      </div>
    </div>
  )
}

export default MidSection
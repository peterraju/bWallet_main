import React from 'react'
import {BsSendFill} from 'react-icons/bs'
import {BiDownload} from 'react-icons/bi'

function TransactionHistory() {
  return (
    <div className='h-full bg-sec-bg rounded-md overflow-hidden  px-2' > 
          <div className='border-b-[1px] pb-2 text-white border-[#545454] flex items-center p-3 text-sm justify-between '>
          Transaction History
          </div>
          <div className='overflow-y-scroll h-full px-2 pb-12'>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>

          </div>
          

    </div>
  )
}


const HistoryCard=()=>{
    return (
        <div className='flex gap-2 items-center mt-2'>
        <div className='bg-prm-bg p-2 rounded-md'>
        <BiDownload className='text-green-500 text-xl'/>
        </div>
        <div className='w-full text-white'>
            <div className='flex items-center justify-between text-sm font-semibold'>
                <h2>
                    Withdraw
                </h2>
                <div>
                    1200 MATIC
                </div>
            </div>
            <div className='flex items-center justify-between opacity-50 text-xs mt-1'>
                <h2>
                    7/8/23
                </h2>
                <h2>
                    $35.4
                </h2>
            </div>
        </div>
    
    
        </div>
    )
   

}

export default TransactionHistory
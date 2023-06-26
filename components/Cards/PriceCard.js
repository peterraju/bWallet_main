import Image from 'next/image'
import React from 'react'

export const PriceCard = () => {
  return (
    <div className='w-48 gap-4 bg-white rounded-full p-2 flex items-center '>
        <Image src="/assets/btc.png" width={50} height={50} alt=''/>
        <div >
           <span className='text-lg font-semibold'> 
            BTC <br></br>
            </span> 
         <span className='text-[#A3A3A3]'> 
            $20,000
            </span>    
        </div>
    </div>
  )
}

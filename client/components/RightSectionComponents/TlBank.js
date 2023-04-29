import { Radio } from '@nextui-org/react'
import React from 'react'
import {RxInfoCircled} from 'react-icons/rx'
function TlBank() {
  return (
    <div className='w-[340px]'>
        <div style={{
            border: '1px solid rgb(0, 0, 0, 0.2'
        }} className='flex flex-col gap-2 p-2'>
            <div className=' flex justify-between items-center text-sm'>
                <h4 className='text-white opacity-70'>
                You lock 
                </h4>
                <h4 className='text-[#D02128]'> 
                    Use Max
                </h4>
            </div>
            <div className='bg-[#464952] rounded-2xl' >
                <input type="text" className='w-full text-lg text-white opacity-70 p-4 bg-transparent outline-none border-none' />
            </div>
            <div className='bg-[#464952] rounded-2xl' >
                <input type="text" className='w-full text-lg text-white opacity-70 p-4 bg-transparent outline-none border-none' />
            </div>
            </div>
            <div>
                <h4 className='flex items-center gap-4'>Lock up term <RxInfoCircled/></h4>
                <div>
                    <div>
        
   
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TlBank
import React from 'react'

function DepositFunction() {
  return (
    <div className='mt-3 flex flex-col gap-2  pb-3'>
        <div className='flex border-b border-b-white pb-2 gap-2 px-2'>
        <div className='text-white flex flex-col  w-fit ' >
          <label className='opacity-50 text-xs'>Base Address</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='0x123456' />
        <div className='text-xs text-offwhite mt-1'>
        Only send Base tokens to this address, sending any other token from any chain will be lost forever.
        </div>
        </div>
        <div className="w-32 h-32 bg-white"></div>

        </div>
        <div className='mx-2'>
            <h2 className='text-white font-semibold text-sm'> IBAN DETAILS</h2>
            <div className='flex flex-col gap-2 w-full mt-2'>
            <div className='text-white flex flex-col  ' >
          <label className='opacity-50 text-xs'>Beneficiary</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='Some One' />
        </div>
        <div className='text-white flex flex-col  ' >
          <label className='opacity-50 text-xs'>IBAN</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='GB33 BUBK' />
        </div>
        <div className='text-white flex flex-col  ' >
          <label className='opacity-50 text-xs'>BIC</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='KJET123456' />
        </div>
            </div>
        </div>
    </div>
  )
}

export default DepositFunction
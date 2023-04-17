import Image from 'next/image'
import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

function Navbar() {
  return (
    <div className='w-screen fixed flex justify-between p-12 items-center'>
        <Image src='/assets/images/logo.png' width={100} height={100} alt='logo'/>
        <div className=''>
            <ul className='flex items-center gap-12 text-2xl '>
                <li>Home</li>
                <li>Features</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div style={{
            border: '1px solid white',
        }} className='flex items-center gap-6 text-2xl rounded-2xl p-2'>
            Launch App <BsArrowUpRight/>
        </div>
    </div>
  )
}

export default Navbar
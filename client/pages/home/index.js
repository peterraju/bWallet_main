import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

function Home() {
  return (
    <div className=''>
        <Navbar/>
        
        <div className='min-h-screen flex items-center min-w-screen bg-[#232429] lg:px-12 pt-24 flex-col-reverse lg:flex-row'>
            <div className='lg:w-3/5 flex flex-col'>
                <h1 style={{
                    lineHeight: 1.5
                }} className='text-5xl font-light'>
                    Welcome <br/>
                    to <span className='text-6xl font-normal'>Banckless Wallet</span> <br/>
                    with <span className='text-6xl font-normal'>All Services</span> <br></br>
                    You <span className='text-6xl font-normal'>Need!</span>   
                </h1>
                <p className='text-3xl text-[#808088] font-light mt-4 max-w-[40ch]'> 
                Bankless Wallet is a perfect platform for your web3 wallet, just plug your wallet and pay with additional features.
                </p>
                <div className='flex gap-6 items-center mt-12'>  
                <div className='text-2xl font-normal bg-white text-[#232429] p-4 rounded-2xl flex items-center gap-12 w-fit'>
                Create Wallet <BsArrowUpRight className='font-bold'/>
                </div>
                <div className='text-[#808088] font-light text-2xl'>
                    How it works
                </div>
                </div>
            </div>
            <div className='lg:w-2/5 flex items-end justify-end grow'>
<Image src='/assets/images/hero.png' width={800} height={600} />
            </div>

        </div>
        </div>
  )
}

export default Home
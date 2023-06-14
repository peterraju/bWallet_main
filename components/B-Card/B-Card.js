import React from 'react'
import styles from './index.module.css'
import {FcSimCardChip} from 'react-icons/fc'
import Image from 'next/image'
const BCard = () => {
  return (
   <>
    <div className={`${styles.card} lg:w-[450px] h-[270px] px-6 py-3`}>
    <div className='flex justify-between'>
    <FcSimCardChip className='text-6xl'/>
    <Image src='/assets/card2.png' width={80} height={60}/>
    </div>
    <p className='text-xl text-left text-white  mt-6'>
    0xd4ebc61981e5B9AB392b68f2
638012E2346D534C
    </p>
</div>
<div className={`${styles.card2} lg:w-[450px] h-[270px]`}>

</div>
</>
  )
}

export default BCard

import BCard from '@components/Cards/B-Card/B-Card'
import { PriceCard } from '@components/Cards/PriceCard'
import { Waitlist } from '@components/Cards/SignInCard/Waitlist'
import { Hero } from '@components/Hero'
import Image from 'next/image'

export default function Home() {
  

  return (
   <div style={{
    backgroundImage:'url(/assets/Grid.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw',
  backgroundPositionY: '20vh',
   }} className='min-h-screen w-screen'>
    <div style={{
      backgroundImage: 'url(/assets/bgdes.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '60vw',
      backgroundPosition: 'center',
    }} className='w-screen h-screen flex items-center justify-center'>
        <Hero/>
    </div>
    <div className="mt-12 flex items-center justify-center">

<BCard/>
</div>
<div className='flex mx-auto items-center justify-center my-12 '>
  <marquee >
<div className='flex items-center gap-12'>

  <PriceCard/>
  <PriceCard/>
  <PriceCard/>

</div>
  </marquee>
</div>
<div className='my-24'>
  <Waitlist/>
</div>
<div className=' w-screen bottom-0 bg-[#272727] text-center py-2 text-white font-prm text-xl'>

Built with love for the web3 community, by BanklessDAO Community
</div>
   </div>
  )
}

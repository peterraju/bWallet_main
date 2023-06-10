import { Hero } from '@components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
   <div style={{
    backgroundImage:'url(/assets/Grid.png)',
    backgroundRepeat: 'no-repeat',
    //100vw width
    backgroundSize: '100vw',
    //padding from top for background image
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
   </div>
  )
}

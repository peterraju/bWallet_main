import Step from '@components/Onboard/Step3'
import Image from 'next/image'
import {AiOutlineClose} from 'react-icons/ai'

export default function Onboard(){
    return(
        <div className="flex mx-auto my-auto justify-center items-center w-screen h-screen">
        <div className="bg-prm-bg w-96  rounded-xl text-white p-3" >
        <div className='flex justify-end w-full'>
            <AiOutlineClose className='text-white'/>
        </div>
        <div style={{
            background: 'radial-gradient(138.37% 138.37% at 50% -24.42%, rgba(234, 19, 242, 0.75) 0%, #E51E2A 54.62%, rgba(234, 19, 242, 0.75) 100%)'
        }} className='flex justify-center'>
            <Image  src='/assets/logo2.png' alt='' width={20} height={10} />
        </div>
        <h2 className='text-lg font-semibold text-center mt-2'>Set up your account</h2>
        <Step/>
        </div>
        </div>

    )
}
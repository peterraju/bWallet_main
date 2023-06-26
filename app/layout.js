import Navbar from '@components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'

const Conthrax = localFont({
  src :[
    {
      path:'../public/assets/conthrax-cdnfonts/conthrax-sb.ttf',
      weight:'400'
    },
    {
      path:'../public/assets/conthrax-cdnfonts/conthrax-sb.ttf',
      weight:'700'
    }
  ],
  variable : '--font-Conthrax'
})

const Neue = localFont({
  src : '../public/assets/neue-machina-free-for-personal-use/Neue Machina - Free for Personal Use/NeueMachina-Regular.otf',
  variable : '--font-neue'
    
})



export const metadata = {
  title: 'B-Wallet',
  description: 'By Bankless DAO',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${Conthrax.variable} ${Neue.variable}` } lang="en">
      <body className="">
        <Navbar/>
        {children}</body>
    </html>
  )
}

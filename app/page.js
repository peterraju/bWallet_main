import Image from "next/image";

import HomeNav from "@/components/navBar/HomeNav";
import Header from "@/components/layout/home/header/Header";
import Card from "@/components/layout/home/card/Card";
import EuroOnChain from "@/components/layout/home/EuroOnChain";
import OneWallet from "@/components/layout/home/OneWallet";
import Partners from "@/components/layout/home/Partners";
import Footer from "@/components/layout/home/Footer";
import Power from "@/components/layout/home/power/Power";
import LaunchApp from "@/components/layout/home/launchApp/LaunchApp";

export default function Home() {
  return (
    <>
      <HomeNav />

      <div className="hero-bg">
        <Header />
        <Card />
      </div>

      <Image
        src="/images/home/breaker.svg"
        alt="hero-bg"
        width={1920}
        height={1}
        className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5"
      />

      <main className="mx-4 lg:mx-0">
        <OneWallet />
        <EuroOnChain />

        <Image
          src="/images/home/breaker.svg"
          alt="hero-bg"
          width={1920}
          height={1}
          className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5"
        />

        <Partners />

        <Image
          src="/images/home/breaker.svg"
          alt="hero-bg"
          width={1920}
          height={1}
          className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5"
        />

        <Power />
        <LaunchApp />
      </main>

      <Footer />
    </>
  );
}

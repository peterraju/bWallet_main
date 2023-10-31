import Image from "next/image";

import Card from "@/components/layout/home/card/Card";
import EuroOnChain from "@/components/layout/home/EuroOnChain";
import Header from "@/components/layout/home/Header";
import LaunchApp from "@/components/layout/home/LaunchApp/LaunchApp";
import OneWallet from "@/components/layout/home/OneWallet";
import Partners from "@/components/layout/home/Partners";
import Power from "@/components/layout/home/power/Power";
import MainNav from "@/components/navBar/MainNav";
import Footer from "@/components/layout/home/Footer";

export default function Home() {
  return (
    <>
      <MainNav />
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

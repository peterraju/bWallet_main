import Image from "next/image";

import GradientBorder from "@/components/ui/GradientBorder";
import RippleButton from "@/components/ui/RippleButton";

const LaunchApp = () => {
  return (
    <section className="mt-24 space-y-14 text-center lg:mt-32">
      <div className="relative mx-auto w-fit">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-primary p-6"
          style={{ filter: "blur(15px)" }}
        ></div>

        <div className="rounded-3xl bg-primary-black p-6">
          <Image
            src="/logo-white.svg"
            alt="Bankless Wallet logo"
            width={90}
            height={90}
            className=""
          />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-clash-display text-3xl font-medium md:text-4xl lg:text-5xl">
          Get started with Bankless Wallet
        </h3>

        <GradientBorder>
          <RippleButton
            style={"bg-white rounded-full text-primary-black font-medium"}
            label="Launch App"
            icon=""
            location="/login"
          />
        </GradientBorder>
      </div>
    </section>
  );
};

export default LaunchApp;

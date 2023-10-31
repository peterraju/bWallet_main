import Image from "next/image";

import styles from "./card.module.css";

const CardDetails = ({ style }) => {
  return (
    <div
      className={`${styles.card} rounded-3xl transition-all duration-500 backdrop-blur-xl w-[400px] px-5 py-3 lg:w-[450px] lg:p-6 ${style}`}
    >
      <div className="flex flex-col justify-between h-full gap-4 sm:gap-5 lg:gap-7">
        <div className="flex justify-between">
          <Image
            alt=""
            src="/images/home/sim-card.svg"
            width={48}
            height={48}
            className="md:w-11 md:h-11 lg:h-12 lg:w-12"
          />

          <Image
            alt=""
            src="/images/home/2-circle.svg"
            width={80}
            height={56}
            className="md:w-16 md:h-11 lg:w-20 lg:h-14"
          />
        </div>

        <p className="text-lg lg:text-xl text-left text-white">
          0xd4ebc61981e5B9AB392b68f2 638012E2346D534C
        </p>

        <div className="flex justify-between text-white">
          <div>
            <span className="text-sm lg:text-base opacity-50 block">
              BanklessCard
            </span>
            <span className="text-lg lg:text-xl">B-wallet.eth</span>
          </div>

          <div>
            <span className="text-sm lg:text-base opacity-50 block">
              Valid thru
            </span>{" "}
            <span className="text-lg lg:text-xl">12/29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

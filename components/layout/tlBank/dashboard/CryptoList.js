"use client";

import { useRef } from "react";

import CryptoItem from "./CryptoItem";

const CryptoList = () => {
  const scrollContainer = useRef(null);

  const coins = [
    {
      name: "Bank",
      amount: 278,
      src: "bankless",
    },
    {
      name: "Ethereum",
      amount: 278,
      src: "eth",
    },
    // {
    //   name: "Base",
    //   amount: 278,
    //   src: "base",
    // },
    // {
    //   name: "Dai",
    //   amount: 278,
    //   src: "dai",
    // },
    // {
    //   name: "Euro",
    //   amount: 278,
    //   src: "euro",
    // },
    // {
    //   name: "Uniswap",
    //   amount: 278,
    //   src: "uniswap",
    // },
    {
      name: "USD Coin",
      amount: 278,
      src: "usdc",
    },
    // {
    //   name: "Dollar",
    //   amount: 278,
    //   src: "dollar",
    // },
    // {
    //   name: "Safe",
    //   amount: 278,
    //   src: "safe",
    // },
    // {
    //   name: "Aragon ANT",
    //   amount: 278,
    //   src: "aragon-ant",
    // },
    {
      name: "Tether",
      amount: 278,
      src: "usdt",
    },
  ];

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="flex w-full items-center gap-4">
      {/* <button onClick={() => scroll(-100)}>&lt;</button> */}
      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-scroll hide-scrollbar"
      >
        {coins.map((coin, index) => (
          <CryptoItem
            key={index}
            src={coin.src}
            amount={coin.amount}
            crypto={coin.name}
          />
        ))}
      </div>
      {/* <button onClick={() => scroll(100)}>&gt;</button> */}
    </div>
  );
};

export default CryptoList;

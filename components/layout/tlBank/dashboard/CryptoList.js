"use client";

import { useEffect, useRef, useState } from "react";

import CryptoItem from "./CryptoItem";
import { useAccount, useBalance } from "wagmi";
import { useSelector } from "react-redux";

const CryptoList = () => {
  const scrollContainer = useRef(null);
  const safeAddress = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const { data: ETHBalance } = useBalance({
    address: address,
    chainId: 1,
  });
  const { data: BankBalance } = useBalance({
    address: address,
    token: "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198",
    chainId: 1,
  });
  const { data: USDTBalance } = useBalance({
    address: address,
    token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainId: 1,
  });

  const coins = [
    {
      name: "Bank",
      amount: BankBalance
        ? BankBalance
        : {
            formatted: 0,
          },
      src: "bankless",
      id: "bankless-dao",
    },
    {
      name: "Ethereum",
      amount: ETHBalance
        ? ETHBalance
        : {
            formatted: 0,
          },
      src: "eth",
      id: "ethereum",
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
      amount: USDTBalance
        ? USDTBalance
        : {
            formatted: 0,
          },
      src: "usdt",
      id: "tether",
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
            id={coin.id}
          />
        ))}
      </div>
      {/* <button onClick={() => scroll(100)}>&gt;</button> */}
    </div>
  );
};

export default CryptoList;

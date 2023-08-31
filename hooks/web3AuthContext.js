"use client";
import { createContext, useState } from "react";

const Web3AuthContext = createContext();

function Web3AuthProvider({ children }) {
  const [web3authInstance, setWeb3authInstance] = useState(null);
  const [address, setAddress] = useState(null);
  return (
    <Web3AuthContext.Provider
      value={{
        web3authInstance,
        setWeb3authInstance,
        address,
        setAddress,
      }}
    >
      {children}
    </Web3AuthContext.Provider>
  );
}

export { Web3AuthProvider, Web3AuthContext };

"use client";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { goerli } from "@wagmi/core/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "3IgRi-BWemVdwlXdm7sT6CDf-bS5ECAk" }),
    publicProvider(),
  ]
);

// Set up wagmi config
const config = createConfig({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "bWallet",
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function WagmiProvider({ children }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}

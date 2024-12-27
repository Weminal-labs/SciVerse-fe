import { getDefaultWallets, getDefaultConfig } from "@rainbow-me/rainbowkit"
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets"
import {
  arbitrum,
  arbitrumSepolia,
  arbitrumNova,
  arbitrumGoerli,
  localhost,
} from "wagmi/chains"
import { arbitrumStylus } from "@/utils/arbitrumStylus"

const { wallets } = getDefaultWallets()

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not defined in .env file')
}

export const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME || "SciVerse",
  projectId,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    arbitrumStylus,
    arbitrum,
    arbitrumSepolia,
    arbitrumNova,
    arbitrumGoerli,
    localhost,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [arbitrumSepolia, arbitrumNova, arbitrumGoerli]
      : []),
  ],
  ssr: true,
})

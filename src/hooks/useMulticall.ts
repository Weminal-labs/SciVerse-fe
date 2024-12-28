import { useContractWrite } from 'wagmi'
import { encodeFunctionData } from 'viem'
import contractAddress from '@/abi/contractAddress.json'
import DeSciHubABI from '@/abi/DeSciHub.json'

export function useMulticall() {
  const { writeAsync: multicall } = useContractWrite({
    address: contractAddress.DeSciHub,
    abi: DeSciHubABI,
    functionName: 'multicall'
  })

  return {
    multicall
  }
} 
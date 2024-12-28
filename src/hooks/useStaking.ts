import { useContractRead, useContractWrite, useAccount } from 'wagmi'
import DeSciStakingABI from '@/abi/DeSciStaking.json'
import DeSciTokenABI from '@/abi/DeSciToken.json'
import contractAddress from '@/abi/contractAddress.json'
import { parseEther } from 'viem'

export enum Role {
  RESEARCHER = 0,
  REVIEWER = 1,
  INVESTOR = 2
}

export function useStaking() {
  const { address } = useAccount()

  // Approve token spending
  const { writeAsync: approveToken } = useContractWrite({
    address: contractAddress.DeSciToken as `0x${string}`,
    abi: DeSciTokenABI,
    functionName: 'approve',
  })

  // Stake tokens
  const { writeAsync: stakeTokens } = useContractWrite({
    address: contractAddress.DeSciStaking as `0x${string}`,
    abi: DeSciStakingABI,
    functionName: 'stakeForRole',
  })

  // Get minimum stake requirement
  const { data: minStake } = useContractRead({
    address: contractAddress.DeSciStaking as `0x${string}`,
    abi: DeSciStakingABI,
    functionName: 'getMinStakeForRole',
    args: [Role.RESEARCHER],
  })

  // Get current stake amount
  const { data: currentStake } = useContractRead({
    address: contractAddress.DeSciStaking as `0x${string}`,
    abi: DeSciStakingABI,
    functionName: 'getStakeForRole',
    args: [address as `0x${string}`, Role.RESEARCHER],
    enabled: !!address,
  })

  // Check if already approved
  const { data: allowance } = useContractRead({
    address: contractAddress.DeSciToken as `0x${string}`,
    abi: DeSciTokenABI,
    functionName: 'allowance',
    args: [address as `0x${string}`, contractAddress.DeSciStaking],
    enabled: !!address,
  })

  // Handle staking process
  const handleStake = async (amount: string, role: Role) => {
    try {
      if (!address) throw new Error('Please connect your wallet')

      // Convert amount to BigInt
      const stakeAmount = parseEther(amount)

      // Check if already approved
      if (!allowance || allowance < stakeAmount) {
        console.log('Approving tokens...')
        // First approve tokens
        const approveTx = await approveToken({
          args: [contractAddress.DeSciStaking, stakeAmount],
          gas: BigInt(100000),
          maxFeePerGas: BigInt(2000000000), // 2 gwei
          maxPriorityFeePerGas: BigInt(1000000000), // 1 gwei
        })

        console.log('Waiting for approval...')
        // Wait for approval confirmation
        const approveReceipt = await approveTx.wait()
        
        if (!approveReceipt?.status) {
          throw new Error('Token approval failed')
        }
      } else {
        console.log('Already approved')
      }

      console.log('Staking tokens...')
      // Then stake
      const stakeTx = await stakeTokens({
        args: [stakeAmount, role],
        gas: BigInt(200000),
        maxFeePerGas: BigInt(2000000000),
        maxPriorityFeePerGas: BigInt(1000000000),
      })

      return stakeTx

    } catch (error) {
      console.error('Staking error:', error)
      throw error
    }
  }

  return {
    minStake,
    currentStake,
    handleStake,
    allowance, // Export allowance for UI to show approval status
  }
} 
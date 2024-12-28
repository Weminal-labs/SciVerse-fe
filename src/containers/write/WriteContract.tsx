"use client"
import * as React from "react"
import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useWaitForTransactionReceipt, useWriteContract, useAccount } from "wagmi"
import { toast } from "sonner"

import { counterAbi } from "@/constants/abi"
import { counterAddress } from "@/constants"

export function WriteContract() {
  const [value, setValue] = React.useState<string>("")
  const [isLoading, setIsLoading] = React.useState(false)
  const { address } = useAccount()

  const { data: hash, error: writeError, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!address) {
      toast.error("Please connect your wallet first")
      return
    }

    setIsLoading(true)
    try {
      // Validate input
      const numValue = parseInt(value)
      if (isNaN(numValue) || numValue < 0) {
        throw new Error("Please enter a valid positive number")
      }

      // Add gas price controls and error handling
      const result = await writeContract({
        address: counterAddress as `0x${string}`,
        abi: counterAbi,
        functionName: "setNumber",
        args: [BigInt(value)],
        account: address,
        // Use lower gas settings
        gas: BigInt(100000), // Lower fixed gas limit
        maxFeePerGas: BigInt(2000000000), // 2 gwei
        maxPriorityFeePerGas: BigInt(1000000000), // 1 gwei
      })
      
      console.log("Transaction submitted:", result)
      toast.success("Transaction submitted")
      
    } catch (err: any) {
      console.error("Error:", err)
      // More detailed error messages
      if (err.message.includes("user rejected")) {
        toast.error("Transaction rejected by user")
      } else if (err.message.includes("insufficient funds")) {
        toast.error("Insufficient funds for gas")
      } else if (err.message.includes("Internal JSON-RPC error")) {
        toast.error("Contract error: Please check input value")
      } else {
        toast.error(err.message || "Failed to submit transaction")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction Successful")
      setValue("")
    }
    if (writeError) {
      console.error("Write Error:", writeError)
      toast.error(writeError.message || "Transaction Failed")
    }
  }, [isConfirmed, writeError])

  return (
    <div className="p-4">
      <form onSubmit={submit} className="space-y-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="number" 
            name="value"
            placeholder="Enter a number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min="0"
            required
          />
          <Button 
            disabled={isLoading || isConfirming || !address} 
            type="submit"
          >
            {isLoading ? "Preparing..." : isConfirming ? "Confirming..." : "Set Number"}
          </Button>
        </div>

        {!address && (
          <p className="text-yellow-500">
            Please connect your wallet to interact with the contract
          </p>
        )}

        {writeError && (
          <p className="text-red-500 mt-2">
            Error: {writeError.message}
          </p>
        )}
      </form>
    </div>
  )
}

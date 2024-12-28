"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useStaking, Role } from "@/hooks/useStaking"
import { toast } from "sonner"
import { parseEther } from "viem"

export function RoleChangeModal() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<Role>(Role.RESEARCHER)
  const [stakeAmount, setStakeAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const { minStake, batchStake } = useStaking()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsLoading(true)
      const amount = parseEther(stakeAmount)
      
      if (!minStake || amount < minStake) {
        toast.error("Stake amount is below minimum requirement")
        return
      }

      const tx = await batchStake(amount, selectedRole)
      toast.success("Transaction submitted")
      
      const receipt = await tx.wait()
      if (receipt?.status === 1) {
        toast.success("Successfully staked tokens")
        setOpen(false)
      } else {
        throw new Error("Transaction failed")
      }
      
    } catch (error: any) {
      console.error(error)
      toast.error(error.message || "Failed to stake tokens")
    } finally {
      setIsLoading(false) 
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Change Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Role</DialogTitle>
          <DialogDescription>
            Stake tokens to change your role in the platform.
            Estimated gas cost: 0.002 ETH
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label>Select Role</label>
            <Select
              value={selectedRole.toString()}
              onValueChange={(value) => setSelectedRole(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Role.RESEARCHER.toString()}>Researcher</SelectItem>
                <SelectItem value={Role.REVIEWER.toString()}>Reviewer</SelectItem>
                <SelectItem value={Role.INVESTOR.toString()}>Investor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="stake">Stake Amount</label>
            <Input
              id="stake"
              type="number"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="Enter stake amount"
              min={minStake ? minStake.toString() : "0"}
            />
            {minStake && (
              <p className="text-sm text-muted-foreground">
                Minimum stake required: {minStake.toString()} tokens
              </p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Confirm Change"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 
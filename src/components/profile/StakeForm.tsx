import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useStaking, Role } from '@/hooks/useStaking'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'
import { formatEther } from 'viem'

export function StakeForm() {
  const [amount, setAmount] = useState('')
  const [selectedRole, setSelectedRole] = useState<Role>(Role.RESEARCHER)
  const [isLoading, setIsLoading] = useState(false)
  
  const { address } = useAccount()
  const { minStake, currentStake, handleStake, allowance } = useStaking()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!address) {
      toast.error('Please connect your wallet')
      return
    }

    setIsLoading(true)

    try {
      // Validate amount
      if (!amount || parseFloat(amount) <= 0) {
        throw new Error('Please enter a valid amount')
      }

      // Check minimum stake
      if (minStake && parseFloat(amount) < parseFloat(formatEther(minStake))) {
        throw new Error(`Minimum stake required: ${formatEther(minStake)} tokens`)
      }

      // Show approval message
      toast.info('Please approve token spending...')

      // Process stake
      const tx = await handleStake(amount, selectedRole)
      toast.success('Staking transaction submitted')

      // Reset form
      setAmount('')
      
    } catch (error: any) {
      console.error('Stake error:', error)
      if (error.message.includes('user rejected')) {
        toast.error('Transaction rejected by user')
      } else if (error.message.includes('insufficient funds')) {
        toast.error('Insufficient funds')
      } else {
        toast.error(error.message || 'Failed to stake tokens')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stake Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
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

          <div className="space-y-2">
            <label>Amount</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to stake"
              min={minStake ? formatEther(minStake) : '0'}
              required
              disabled={!address || isLoading}
            />
            {minStake && (
              <p className="text-sm text-muted-foreground">
                Minimum stake: {formatEther(minStake)} tokens
              </p>
            )}
          </div>

          {currentStake && (
            <p className="text-sm">
              Current stake: {formatEther(currentStake)} tokens
            </p>
          )}

          {allowance && (
            <p className="text-sm text-green-500">
              Approved amount: {formatEther(allowance)} tokens
            </p>
          )}

          <Button 
            type="submit" 
            disabled={!address || isLoading}
          >
            {!address ? 'Connect Wallet' : 
             !allowance ? 'Approve Tokens First' :
             isLoading ? 'Processing...' : 'Stake Tokens'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 
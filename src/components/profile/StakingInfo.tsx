import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStaking, Role } from "@/hooks/useStaking"
import { formatEther } from "viem"

export default function StakingInfo() {
  const { currentStake, rewards } = useStaking()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staking Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Current Stake</h3>
          <p>{currentStake ? formatEther(currentStake) : '0'} tokens</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Available Rewards</h3>
          <p>{rewards ? formatEther(rewards) : '0'} tokens</p>
        </div>
      </CardContent>
    </Card>
  )
} 
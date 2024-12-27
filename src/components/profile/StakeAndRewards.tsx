import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StakeAndRewardsProps {
  stake: {
    amount: number
    currency: string
  }
  rewards: {
    total: number
    currency: string
  }
}

export default function StakeAndRewards({ stake, rewards }: StakeAndRewardsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stake and Rewards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Stake</h3>
          <p>{stake.amount} {stake.currency}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Rewards</h3>
          <p>{rewards.total} {rewards.currency}</p>
        </div>
      </CardContent>
    </Card>
  )
} 
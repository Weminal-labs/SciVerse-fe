import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReviewerDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviewer Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Pending Reviews</h3>
          {/* Pending reviews list */}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Review History</h3>
          {/* Review history component */}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Reputation Stats</h3>
          {/* Reputation stats component */}
        </div>
      </CardContent>
    </Card>
  )
} 
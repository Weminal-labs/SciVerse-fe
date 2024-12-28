import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReviewerDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Pending Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add pending reviews list */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add review history */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reputation Stats</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add reputation metrics */}
        </CardContent>
      </Card>
    </div>
  )
} 
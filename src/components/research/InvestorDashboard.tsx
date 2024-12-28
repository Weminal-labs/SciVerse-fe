import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestorDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Investment Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add investment portfolio summary */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ROI Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add ROI metrics */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Funding Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add recommended proposals for funding */}
        </CardContent>
      </Card>
    </div>
  )
} 
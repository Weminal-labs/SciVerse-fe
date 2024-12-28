import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestorDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investor Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Funding Opportunities</h3>
          {/* Funding opportunities list */}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Investment Portfolio</h3>
          {/* Portfolio component */}
        </div>
        <div>
          <h3 className="text-lg font-semibold">ROI Tracking</h3>
          {/* ROI tracking component */}
        </div>
      </CardContent>
    </Card>
  )
} 
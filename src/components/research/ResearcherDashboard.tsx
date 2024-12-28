import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResearcherDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Researcher Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Your Proposals</h3>
          <Button onClick={() => {}}>Submit New Proposal</Button>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Active Milestones</h3>
          {/* Milestone tracking component */}
        </div>
      </CardContent>
    </Card>
  )
} 
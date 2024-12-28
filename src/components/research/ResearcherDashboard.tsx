import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CreateProposalModal from "./CreateProposalModal"

export default function ResearcherDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={() => setIsCreateModalOpen(true)}>
              Submit New Proposal
            </Button>
            {/* Add proposal stats/summary here */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add milestone tracking here */}
        </CardContent>
      </Card>

      <CreateProposalModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateProposal={() => {}}
      />
    </div>
  )
} 
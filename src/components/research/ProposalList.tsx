"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import CreateProposalModal from './CreateProposalModal'
import ReviewProposalModal from './ReviewProposalModal'
import ViewProposalModal from './ViewProposalModal'
import FundProposalModal from './FundProposalModal'

interface Proposal {
  id: number
  title: string
  researcher: string
  status: string
  fundingGoal: number
  currentFunding: number
  dueDate: string
  description?: string
}

interface ProposalListProps {
  initialProposals: Proposal[]
}

export default function ProposalList({ initialProposals }: ProposalListProps) {
  const [proposals, setProposals] = useState(initialProposals)
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isFundModalOpen, setIsFundModalOpen] = useState(false)

  const handleCreateProposal = (newProposal: Proposal) => {
    setProposals([...proposals, { ...newProposal, id: proposals.length + 1 }])
  }

  const handleReviewProposal = (reviewedProposal: Proposal) => {
    setProposals(proposals.map(p => p.id === reviewedProposal.id ? reviewedProposal : p))
  }

  const handleFundProposal = (fundedProposal: Proposal) => {
    setProposals(proposals.map(p => p.id === fundedProposal.id ? fundedProposal : p))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsCreateModalOpen(true)}>Create Proposal</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Researcher</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Funding Progress</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proposals.map((proposal) => (
            <TableRow key={proposal.id}>
              <TableCell>{proposal.title}</TableCell>
              <TableCell>{proposal.researcher}</TableCell>
              <TableCell>
                <Badge variant={proposal.status === 'Approved' ? 'default' : 'secondary'}>
                  {proposal.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={(proposal.currentFunding / proposal.fundingGoal) * 100} className="w-[60%]" />
                  <span className="text-sm">{Math.round((proposal.currentFunding / proposal.fundingGoal) * 100)}%</span>
                </div>
              </TableCell>
              <TableCell>{new Date(proposal.dueDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedProposal(proposal)
                    setIsViewModalOpen(true)
                  }}>
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedProposal(proposal)
                    setIsReviewModalOpen(true)
                  }}>
                    Review
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedProposal(proposal)
                    setIsFundModalOpen(true)
                  }}>
                    Fund
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateProposalModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateProposal={handleCreateProposal}
      />
      {selectedProposal && (
        <>
          <ReviewProposalModal
            isOpen={isReviewModalOpen}
            onClose={() => setIsReviewModalOpen(false)}
            proposal={selectedProposal}
            onReviewProposal={handleReviewProposal}
          />
          <ViewProposalModal
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
            proposal={selectedProposal}
          />
          <FundProposalModal
            isOpen={isFundModalOpen}
            onClose={() => setIsFundModalOpen(false)}
            proposal={selectedProposal}
            onFundProposal={handleFundProposal}
          />
        </>
      )}
    </div>
  )
} 
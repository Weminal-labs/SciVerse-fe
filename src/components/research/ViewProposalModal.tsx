"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface ViewProposalModalProps {
  isOpen: boolean
  onClose: () => void
  proposal: {
    title: string
    researcher: string
    status: string
    currentFunding: number
    fundingGoal: number
    dueDate: string
    description?: string
    review?: string
  }
}

export default function ViewProposalModal({ isOpen, onClose, proposal }: ViewProposalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{proposal.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <strong>Researcher:</strong> {proposal.researcher}
          </div>
          <div>
            <strong>Status:</strong>{' '}
            <Badge variant={proposal.status === 'Approved' ? 'default' : 'secondary'}>
              {proposal.status}
            </Badge>
          </div>
          <div>
            <strong>Funding Progress:</strong>
            <div className="flex items-center gap-2 mt-1">
              <Progress value={(proposal.currentFunding / proposal.fundingGoal) * 100} className="w-[60%]" />
              <span className="text-sm">
                {proposal.currentFunding} / {proposal.fundingGoal} ({Math.round((proposal.currentFunding / proposal.fundingGoal) * 100)}%)
              </span>
            </div>
          </div>
          <div>
            <strong>Due Date:</strong> {new Date(proposal.dueDate).toLocaleDateString()}
          </div>
          {proposal.description && (
            <div>
              <strong>Description:</strong>
              <p className="mt-1">{proposal.description}</p>
            </div>
          )}
          {proposal.review && (
            <div>
              <strong>Review Comments:</strong>
              <p className="mt-1">{proposal.review}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 
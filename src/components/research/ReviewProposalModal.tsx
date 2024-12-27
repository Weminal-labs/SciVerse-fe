"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ReviewProposalModalProps {
  isOpen: boolean
  onClose: () => void
  proposal: any
  onReviewProposal: (reviewedProposal: any) => void
}

export default function ReviewProposalModal({ isOpen, onClose, proposal, onReviewProposal }: ReviewProposalModalProps) {
  const [review, setReview] = useState('')
  const [decision, setDecision] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const reviewedProposal = {
      ...proposal,
      status: decision === 'approve' ? 'Approved' : 'Rejected',
      review,
    }
    onReviewProposal(reviewedProposal)
    setReview('')
    setDecision('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Review Proposal: {proposal.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="review">Review Comments</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Decision</Label>
            <RadioGroup value={decision} onValueChange={setDecision} required>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approve" id="approve" />
                <Label htmlFor="approve">Approve</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reject" id="reject" />
                <Label htmlFor="reject">Reject</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 
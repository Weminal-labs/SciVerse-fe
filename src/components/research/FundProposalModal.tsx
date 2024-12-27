"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FundProposalModalProps {
  isOpen: boolean
  onClose: () => void
  proposal: {
    id: number
    title: string
    currentFunding: number
    fundingGoal: number
    status: string
  }
  onFundProposal: (fundedProposal: any) => void
}

export default function FundProposalModal({ isOpen, onClose, proposal, onFundProposal }: FundProposalModalProps) {
  const [fundingAmount, setFundingAmount] = useState('')
  const remainingFunding = proposal.fundingGoal - proposal.currentFunding

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = parseFloat(fundingAmount)
    const fundedProposal = {
      ...proposal,
      currentFunding: proposal.currentFunding + amount,
      status: proposal.currentFunding + amount >= proposal.fundingGoal ? 'Funded' : proposal.status,
    }
    onFundProposal(fundedProposal)
    setFundingAmount('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fund Proposal: {proposal.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fundingAmount">Funding Amount</Label>
            <Input
              id="fundingAmount"
              type="number"
              value={fundingAmount}
              onChange={(e) => setFundingAmount(e.target.value)}
              required
              min="0"
              max={remainingFunding}
              placeholder={`Maximum: ${remainingFunding}`}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Remaining funding needed: {remainingFunding}
            </p>
          </div>
          <Button type="submit">Fund Proposal</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 
"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CreateProposalModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateProposal: (proposal: any) => void
}

export default function CreateProposalModal({ isOpen, onClose, onCreateProposal }: CreateProposalModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [fundingGoal, setFundingGoal] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newProposal = {
      title,
      researcher: 'Current User', // This should be the actual user in a real application
      status: 'Pending Review',
      fundingGoal: parseFloat(fundingGoal),
      currentFunding: 0,
      dueDate,
      description,
    }
    onCreateProposal(newProposal)
    // Reset form
    setTitle('')
    setDescription('')
    setFundingGoal('')
    setDueDate('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Proposal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="fundingGoal">Funding Goal</Label>
            <Input
              id="fundingGoal"
              type="number"
              value={fundingGoal}
              onChange={(e) => setFundingGoal(e.target.value)}
              required
              min="0"
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Create Proposal</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 
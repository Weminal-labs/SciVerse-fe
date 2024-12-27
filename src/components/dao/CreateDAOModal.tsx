"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CreateDAOModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateDAO: (dao: any) => void
}

export default function CreateDAOModal({ isOpen, onClose, onCreateDAO }: CreateDAOModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [initialTreasury, setInitialTreasury] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newDAO = {
      id: Date.now(), // This should be generated on the server in a real application
      name,
      members: 1, // Creator is the first member
      projects: 0,
      treasury: parseFloat(initialTreasury),
      description,
    }
    onCreateDAO(newDAO)
    // Reset form
    setName('')
    setDescription('')
    setInitialTreasury('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New DAO</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">DAO Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Label htmlFor="initialTreasury">Initial Treasury Amount</Label>
            <Input
              id="initialTreasury"
              type="number"
              value={initialTreasury}
              onChange={(e) => setInitialTreasury(e.target.value)}
              required
              min="0"
            />
          </div>
          <Button type="submit">Create DAO</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 
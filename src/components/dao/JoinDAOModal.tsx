"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface JoinDAOModalProps {
  isOpen: boolean
  onClose: () => void
  dao: any
  onJoinDAO: (dao: any) => void
}

export default function JoinDAOModal({ isOpen, onClose, dao, onJoinDAO }: JoinDAOModalProps) {
  const handleJoin = () => {
    onJoinDAO(dao)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join DAO: {dao.name}</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to join this DAO?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleJoin}>Join</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
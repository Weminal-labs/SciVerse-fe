"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface LeaveDAOModalProps {
  isOpen: boolean
  onClose: () => void
  dao: any
  onLeaveDAO: (dao: any) => void
}

export default function LeaveDAOModal({ isOpen, onClose, dao, onLeaveDAO }: LeaveDAOModalProps) {
  const handleLeave = () => {
    onLeaveDAO(dao)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave DAO: {dao.name}</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to leave this DAO?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="destructive" onClick={handleLeave}>Leave</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
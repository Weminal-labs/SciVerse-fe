"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DAODetailsModalProps {
  isOpen: boolean
  onClose: () => void
  dao: any
}

export default function DAODetailsModal({ isOpen, onClose, dao }: DAODetailsModalProps) {
  // Mock data for projects and members
  const projects = [
    { id: 1, name: 'Project A', status: 'In Progress' },
    { id: 2, name: 'Project B', status: 'Completed' },
    { id: 3, name: 'Project C', status: 'Planning' },
  ]

  const members = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'Member' },
    { id: 3, name: 'Charlie', role: 'Member' },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{dao.name} Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">DAO Information</h3>
            <p><strong>Members:</strong> {dao.members}</p>
            <p><strong>Projects:</strong> {dao.projects}</p>
            <p><strong>Treasury:</strong> ${dao.treasury.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Members</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
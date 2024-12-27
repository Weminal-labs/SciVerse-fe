"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import CreateDAOModal from './CreateDAOModal'
import JoinDAOModal from './JoinDAOModal'
import LeaveDAOModal from './LeaveDAOModal'
import DAODetailsModal from './DAODetailsModal'

interface DAO {
  id: number
  name: string
  members: number
  projects: number
  treasury: number
}

interface DAOListProps {
  initialDAOs: DAO[]
}

export default function DAOList({ initialDAOs }: DAOListProps) {
  const [daos, setDAOs] = useState(initialDAOs)
  const [selectedDAO, setSelectedDAO] = useState<DAO | null>(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  const handleCreateDAO = (newDAO: DAO) => {
    setDAOs([...daos, { ...newDAO, id: daos.length + 1 }])
  }

  const handleJoinDAO = (joinedDAO: DAO) => {
    setDAOs(daos.map(dao => dao.id === joinedDAO.id ? { ...dao, members: dao.members + 1 } : dao))
  }

  const handleLeaveDAO = (leftDAO: DAO) => {
    setDAOs(daos.map(dao => dao.id === leftDAO.id ? { ...dao, members: dao.members - 1 } : dao))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsCreateModalOpen(true)}>Create DAO</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Treasury</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {daos.map((dao) => (
            <TableRow key={dao.id}>
              <TableCell>{dao.name}</TableCell>
              <TableCell>{dao.members}</TableCell>
              <TableCell>{dao.projects}</TableCell>
              <TableCell>${dao.treasury.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedDAO(dao)
                    setIsDetailsModalOpen(true)
                  }}>
                    Details
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedDAO(dao)
                    setIsJoinModalOpen(true)
                  }}>
                    Join
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedDAO(dao)
                    setIsLeaveModalOpen(true)
                  }}>
                    Leave
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateDAOModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateDAO={handleCreateDAO}
      />
      {selectedDAO && (
        <>
          <JoinDAOModal
            isOpen={isJoinModalOpen}
            onClose={() => setIsJoinModalOpen(false)}
            dao={selectedDAO}
            onJoinDAO={handleJoinDAO}
          />
          <LeaveDAOModal
            isOpen={isLeaveModalOpen}
            onClose={() => setIsLeaveModalOpen(false)}
            dao={selectedDAO}
            onLeaveDAO={handleLeaveDAO}
          />
          <DAODetailsModal
            isOpen={isDetailsModalOpen}
            onClose={() => setIsDetailsModalOpen(false)}
            dao={selectedDAO}
          />
        </>
      )}
    </div>
  )
} 
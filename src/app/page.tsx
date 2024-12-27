"use client"

import OverviewStats from '@/components/dashboard/OverviewStats'
import RecentProposals from '@/components/dashboard/RecentProposals'
import ActiveDAOs from '@/components/dashboard/ActiveDAOs'
import UserStatus from '@/components/dashboard/UserStatus'

export default function HomePage() {
  // Mock data - in a real app, this would come from your API
  const stats = {
    totalResearchers: 1234,
    totalReviewers: 567,
    totalInvestors: 890,
  }

  const recentProposals = [
    { id: 1, title: 'Quantum Computing Research', author: 'Dr. Alice Johnson', date: '2023-06-15' },
    { id: 2, title: 'AI Ethics Study', author: 'Prof. Bob Smith', date: '2023-06-14' },
    { id: 3, title: 'Climate Change Mitigation', author: 'Dr. Carol Williams', date: '2023-06-13' },
  ]

  const activeDAOs = [
    { id: 1, name: 'Quantum DAO', members: 50, proposals: 12 },
    { id: 2, name: 'AI Ethics DAO', members: 75, proposals: 8 },
    { id: 3, name: 'Climate Action DAO', members: 100, proposals: 15 },
  ]

  const userStatus = {
    role: 'Researcher',
    membershipStatus: 'Active',
    daos: ['Quantum DAO', 'AI Ethics DAO'],
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <OverviewStats stats={stats} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentProposals proposals={recentProposals} />
        <ActiveDAOs daos={activeDAOs} />
      </div>
      
      <UserStatus status={userStatus} />
    </div>
  )
}

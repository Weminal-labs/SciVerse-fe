"use client"

import RoleInformation from '@/components/profile/RoleInformation'
import StakeAndRewards from '@/components/profile/StakeAndRewards'
import DAOMemberships from '@/components/profile/DAOMemberships'
import UserActivity from '@/components/profile/UserActivity'
import RoleChangeHistory from '@/components/profile/RoleChangeHistory'
import StakingInfo from '@/components/profile/StakingInfo'
import { StakeForm } from '@/components/profile/StakeForm'

export default function ProfilePage() {
  // Mock data - in a real app, this would come from your API
  const userProfile = {
    name: 'Alice Johnson',
    role: 'Senior Researcher',
    specialization: 'Quantum Computing',
    joinDate: '2022-03-15',
    stake: {
      amount: 5000,
      currency: 'DAO Tokens',
    },
    rewards: {
      total: 750,
      currency: 'DAO Tokens',
    },
    daoMemberships: [
      { id: 1, name: 'Quantum DAO', role: 'Member', joinDate: '2022-03-20' },
      { id: 2, name: 'AI Ethics DAO', role: 'Contributor', joinDate: '2022-05-10' },
    ],
    activity: {
      proposals: [
        { id: 1, title: 'Quantum Entanglement Research', status: 'Approved', date: '2023-01-15' },
        { id: 2, title: 'Quantum Cryptography Study', status: 'Under Review', date: '2023-04-02' },
      ],
      reviews: [
        { id: 1, proposalTitle: 'AI in Healthcare', status: 'Completed', date: '2023-02-20' },
        { id: 2, proposalTitle: 'Quantum Machine Learning', status: 'In Progress', date: '2023-05-05' },
      ],
    },
    roleHistory: [
      { id: 1, role: 'Junior Researcher', startDate: '2022-03-15', endDate: '2022-09-30' },
      { id: 2, role: 'Researcher', startDate: '2022-10-01', endDate: '2023-03-31' },
      { id: 3, role: 'Senior Researcher', startDate: '2023-04-01', endDate: null },
    ],
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <RoleInformation user={userProfile} />
          <StakeForm />
          <StakingInfo />
          <DAOMemberships memberships={userProfile.daoMemberships} />
        </div>
        <div className="space-y-8">
          <UserActivity activity={userProfile.activity} />
          <RoleChangeHistory history={userProfile.roleHistory} />
        </div>
      </div>
    </div>
  )
} 
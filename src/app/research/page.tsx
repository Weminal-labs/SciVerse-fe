"use client"

import { useState } from 'react'
import { useAccount } from 'wagmi'
import ProposalList from '@/components/research/ProposalList'
import FilterSearch from '@/components/research/FilterSearch'
import ResearcherDashboard from '@/components/research/ResearcherDashboard'
import ReviewerDashboard from '@/components/research/ReviewerDashboard'
import InvestorDashboard from '@/components/research/InvestorDashboard'
import { UserRole } from '@/types/research'

export default function ResearchPage() {
  const { isConnected } = useAccount()
  // In a real app, this would come from your user context/auth system
  const [userRole] = useState<UserRole>('Researcher')

  // Mock data - in a real app, this would come from your API
  const initialProposals = [
    {
      id: 1,
      title: "Quantum Computing Research",
      researcher: "Dr. Alice Johnson",
      status: "Under Review",
      fundingGoal: 50000,
      currentFunding: 25000,
      dueDate: "2024-06-15",
      description: "Research on quantum entanglement and its applications in computing.",
    },
    {
      id: 2,
      title: "AI Ethics Study",
      researcher: "Prof. Bob Smith",
      status: "Approved",
      fundingGoal: 30000,
      currentFunding: 30000,
      dueDate: "2024-05-20",
      description: "Study on ethical implications of AI in healthcare decisions.",
    },
  ]

  if (!isConnected) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p>Please connect your wallet to access the research platform.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Research Hub</h1>
      </div>

      {/* Role-specific dashboard */}
      {userRole === 'Researcher' && <ResearcherDashboard />}
      {userRole === 'Reviewer' && <ReviewerDashboard />}
      {userRole === 'Investor' && <InvestorDashboard />}

      <FilterSearch />
      <ProposalList 
        initialProposals={initialProposals} 
        userRole={userRole}
      />
    </div>
  )
} 
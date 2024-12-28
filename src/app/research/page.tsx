"use client"

import { useState } from 'react'
import ProposalList from '@/components/research/ProposalList'
import FilterSearch from '@/components/research/FilterSearch'
import { useRole } from '@/hooks/useRole'
import ResearcherDashboard from '@/components/research/ResearcherDashboard'
import ReviewerDashboard from '@/components/research/ReviewerDashboard'
import InvestorDashboard from '@/components/research/InvestorDashboard'

export default function ResearchPage() {
  const { role } = useRole()
  
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
      milestones: [
        { id: 1, title: "Literature Review", status: "Completed", dueDate: "2024-02-01" },
        { id: 2, title: "Initial Experiments", status: "In Progress", dueDate: "2024-04-01" }
      ]
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Research Hub</h1>
      </div>

      {/* Role-specific dashboard */}
      {role === 'researcher' && <ResearcherDashboard />}
      {role === 'reviewer' && <ReviewerDashboard />}
      {role === 'investor' && <InvestorDashboard />}

      <FilterSearch />
      <ProposalList 
        initialProposals={initialProposals}
        userRole={role} 
      />
    </div>
  )
} 
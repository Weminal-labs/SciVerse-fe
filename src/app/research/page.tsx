"use client"

import { useState } from 'react'
import ProposalList from '@/components/research/ProposalList'
import FilterSearch from '@/components/research/FilterSearch'

export default function ResearchPage() {
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Research Hub</h1>
      </div>
      <FilterSearch />
      <ProposalList initialProposals={initialProposals} />
    </div>
  )
} 
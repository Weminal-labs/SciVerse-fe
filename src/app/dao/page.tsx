import DAOList from '@/components/dao/DAOList'

export const metadata = {
  title: 'DAO Management',
  description: 'Manage and participate in Decentralized Autonomous Organizations',
}

export default function DAOManagementPage() {
  // In a real application, you would fetch this data from your API
  const daos = [
    { id: 1, name: 'Quantum Research DAO', members: 150, projects: 5, treasury: 1000000 },
    { id: 2, name: 'AI Ethics DAO', members: 75, projects: 3, treasury: 500000 },
    { id: 3, name: 'Sustainable Energy DAO', members: 200, projects: 8, treasury: 2000000 },
    { id: 4, name: 'Blockchain Governance DAO', members: 100, projects: 4, treasury: 750000 },
    { id: 5, name: 'Space Exploration DAO', members: 50, projects: 2, treasury: 300000 },
  ]

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">DAO Management</h1>
      <DAOList initialDAOs={daos} />
    </div>
  )
} 
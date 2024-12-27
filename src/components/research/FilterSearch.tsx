"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterSearch() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    // Implement search logic here
  }

  const handleStatusChange = (value: string) => {
    setStatus(value)
    // Implement status filter logic here
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        type="text"
        placeholder="Search proposals..."
        value={search}
        onChange={handleSearch}
        className="flex-grow"
      />
      <Select value={status} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending Review</SelectItem>
          <SelectItem value="under-review">Under Review</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="funded">Funded</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
} 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Proposal {
  id: number
  title: string
  author: string
  date: string
}

interface RecentProposalsProps {
  proposals: Proposal[]
}

export default function RecentProposals({ proposals }: RecentProposalsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Registered Proposals</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proposals.map((proposal) => (
              <TableRow key={proposal.id}>
                <TableCell>{proposal.title}</TableCell>
                <TableCell>{proposal.author}</TableCell>
                <TableCell>{proposal.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 
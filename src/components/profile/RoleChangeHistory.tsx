import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface RoleChange {
  id: number
  role: string
  startDate: string
  endDate: string | null
}

interface RoleChangeHistoryProps {
  history: RoleChange[]
}

export default function RoleChangeHistory({ history }: RoleChangeHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Change History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((change) => (
              <TableRow key={change.id}>
                <TableCell>{change.role}</TableCell>
                <TableCell>{new Date(change.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{change.endDate ? new Date(change.endDate).toLocaleDateString() : 'Present'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 
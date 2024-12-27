import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DAOMembership {
  id: number
  name: string
  role: string
  joinDate: string
}

interface DAOMembershipsProps {
  memberships: DAOMembership[]
}

export default function DAOMemberships({ memberships }: DAOMembershipsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>DAO Memberships</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>DAO Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Join Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberships.map((membership) => (
              <TableRow key={membership.id}>
                <TableCell>{membership.name}</TableCell>
                <TableCell>{membership.role}</TableCell>
                <TableCell>{new Date(membership.joinDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 
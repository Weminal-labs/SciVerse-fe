import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DAO {
  id: number
  name: string
  members: number
  proposals: number
}

interface ActiveDAOsProps {
  daos: DAO[]
}

export default function ActiveDAOs({ daos }: ActiveDAOsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active DAOs</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Proposals</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {daos.map((dao) => (
              <TableRow key={dao.id}>
                <TableCell>{dao.name}</TableCell>
                <TableCell>{dao.members}</TableCell>
                <TableCell>{dao.proposals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 
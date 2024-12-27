import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Proposal {
  id: number
  title: string
  status: string
  date: string
}

interface Review {
  id: number
  proposalTitle: string
  status: string
  date: string
}

interface UserActivityProps {
  activity: {
    proposals: Proposal[]
    reviews: Review[]
  }
}

export default function UserActivity({ activity }: UserActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="proposals">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="proposals">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activity.proposals.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell>{proposal.title}</TableCell>
                    <TableCell>
                      <Badge variant={proposal.status === 'Approved' ? 'default' : 'secondary'}>
                        {proposal.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(proposal.date).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="reviews">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Proposal Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activity.reviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell>{review.proposalTitle}</TableCell>
                    <TableCell>
                      <Badge variant={review.status === 'Completed' ? 'default' : 'secondary'}>
                        {review.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(review.date).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 
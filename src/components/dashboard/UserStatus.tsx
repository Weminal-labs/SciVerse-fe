import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface UserStatusProps {
  status: {
    role: string
    membershipStatus: string
    daos: string[]
  }
}

export default function UserStatus({ status }: UserStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="font-semibold">Role:</span> {status.role}
        </div>
        <div>
          <span className="font-semibold">Membership Status:</span>{" "}
          <Badge variant="success">{status.membershipStatus}</Badge>
        </div>
        <div>
          <span className="font-semibold">DAO Memberships:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {status.daos.map((dao, index) => (
              <Badge key={index} variant="outline">
                {dao}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 
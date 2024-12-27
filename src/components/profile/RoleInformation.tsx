import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RoleChangeModal } from "./RoleChangeModal"
import { UpdateProfileModal } from "./UpdateProfileModal"

interface User {
  name: string
  role: string
  specialization: string
  joinDate: string
}

interface RoleInformationProps {
  user: User
}

export default function RoleInformation({ user }: RoleInformationProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Role Information</CardTitle>
        <div className="flex space-x-2">
          <UpdateProfileModal />
          <RoleChangeModal />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Role:</span> {user.role}</p>
        <p><span className="font-semibold">Specialization:</span> {user.specialization}</p>
        <p><span className="font-semibold">Join Date:</span> {new Date(user.joinDate).toLocaleDateString()}</p>
      </CardContent>
    </Card>
  )
} 
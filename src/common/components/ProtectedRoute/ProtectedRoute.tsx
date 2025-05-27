import { Navigate, Outlet } from "react-router"
import { Path } from "@/common/routing"

type Props = {
  children?: React.ReactNode
  isAllowed: boolean
  redirectPath?: string
}

export const ProtectedRoute = ({ children, isAllowed, redirectPath = Path.Login }: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />
  }

  return children ? children : <Outlet />
}

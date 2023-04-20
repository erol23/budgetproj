import { Outlet, Navigate } from "react-router-dom"


const PrivateRouter = ({user}) => {
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter
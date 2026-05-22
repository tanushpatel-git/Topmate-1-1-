import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import useGetCurrUser from '../../hooks/useGetCurrUser'
import { SkeletonPage } from '../ui/Skeleton'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userId = useSelector((state) => state.userData.userId)
  const location = useLocation()
  const { data, isLoading, isFetching } = useGetCurrUser()

  const isAuthenticated = userId || data?.user

  if (!isAuthenticated && (isLoading || isFetching)) {
    return <SkeletonPage />
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />
  }

  if (allowedRoles && data?.user?.role && !allowedRoles.includes(data.user.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute

import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import useGetCurrUser from '../../hooks/useGetCurrUser'
import { SkeletonPage } from '../ui/Skeleton'
import {
  setUserName,
  setUserId,
  setUserImage,
  setFirstName,
  setLastName,
  setEmail,
  setCountry,
  setCurrency,
  setExpertise,
  setLinkedInUrl,
  setTwitterUrl,
  setInstagramUrl,
  setWhatsAppNumber,
  setAvailability,
  setTimezone,
  setService,
  setGraduationYear,
  setJoinDate
} from '../../redux/userData/userDetails'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.userData.userId)
  const location = useLocation()
  const { data, isLoading, isFetching } = useGetCurrUser()

  if (data?.user && data.user._id !== userId) {
    const { user } = data
    dispatch(setUserId(user._id))
    dispatch(setUserName(user.userName))
    dispatch(setUserImage(user.userImageUrl))
    dispatch(setFirstName(user.firstName))
    dispatch(setLastName(user.lastName))
    dispatch(setEmail(user.email))
    dispatch(setCountry(user.country))
    dispatch(setCurrency(user.currency))
    dispatch(setExpertise(user.expertise))
    dispatch(setLinkedInUrl(user.linkedInUrl))
    dispatch(setTwitterUrl(user.twitterUrl))
    dispatch(setInstagramUrl(user.instagramUrl))
    dispatch(setWhatsAppNumber(user.whatsAppNumber))
    dispatch(setAvailability(user.availability))
    dispatch(setTimezone(user.timezone))
    dispatch(setService(user.service))
    dispatch(setGraduationYear(user.graduationYear))
    dispatch(setJoinDate(user.joinDate))
  }

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

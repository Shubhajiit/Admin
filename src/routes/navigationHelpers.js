import { useNavigate, useLocation } from 'react-router-dom'

// Custom hook for navigation helpers
export const useNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = (path) => {
    navigate(path)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const getCurrentPath = () => {
    return location.pathname
  }

  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  return {
    navigateTo,
    goBack,
    goForward,
    getCurrentPath,
    isCurrentPath,
  }
}
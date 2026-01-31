import { Navigate } from 'react-router-dom'

// This component can be used to protect routes that require authentication
// For now, it just renders the children, but you can add authentication logic later
const ProtectedRoute = ({ children, isAuthenticated = true }) => {
  if (!isAuthenticated) {
    // Redirect to login page when authentication is implemented
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
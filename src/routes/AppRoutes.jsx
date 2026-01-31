import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import RolePlay from '../pages/RolePlay'
import Users from '../pages/users'   // ✅ IMPORT USERS

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="roleplay" element={<RolePlay />} />
        <Route path="users" element={<Users />} />  
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

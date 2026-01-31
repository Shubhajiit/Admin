import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default Router
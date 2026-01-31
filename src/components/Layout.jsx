import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased overflow-hidden selection:bg-teal-200 selection:text-teal-900 h-screen">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] bg-purple-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 h-screen">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-0 h-full w-64 z-30">
          <Sidebar />
        </div>
        
        {/* Main Content with Left Margin */}
        <div className="ml-64 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
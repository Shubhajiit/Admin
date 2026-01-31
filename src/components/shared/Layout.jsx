import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import { SidebarProvider, useSidebar } from './SidebarContext'

const LayoutShell = () => {
  const location = useLocation()
  const { isMobileSidebarOpen, closeMobileSidebar } = useSidebar()

  useEffect(() => {
    closeMobileSidebar()
  }, [location.pathname, closeMobileSidebar])

  useEffect(() => {
    if (!isMobileSidebarOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMobileSidebar()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileSidebarOpen, closeMobileSidebar])

  return (
    <div className="bg-slate-50 text-slate-800 antialiased overflow-hidden selection:bg-teal-200 selection:text-teal-900 h-screen">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] bg-purple-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden md:block fixed left-0 top-0 h-full w-64 z-30">
          <Sidebar />
        </div>

        {/* Mobile Off-canvas Sidebar */}
        <div
          className={`md:hidden fixed inset-0 z-40 ${
            isMobileSidebarOpen ? '' : 'pointer-events-none'
          }`}
          aria-hidden={!isMobileSidebarOpen}
        >
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity ${
              isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobileSidebar}
          />

          <div
            className={`absolute left-0 top-0 h-full w-64 bg-slate-50 shadow-2xl ring-1 ring-black/5 transition-transform ${
              isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Sidebar onNavigate={closeMobileSidebar} />
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full md:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const Layout = () => {
  return (
    <SidebarProvider>
      <LayoutShell />
    </SidebarProvider>
  )
}

export default Layout
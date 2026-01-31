import { Bell, Menu, X } from 'lucide-react';
import { useSidebar } from './SidebarContext';

const Header = () => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = useSidebar();

  return (
    <header className="flex items-start md:items-center justify-between gap-3 px-4 py-4 lg:px-8 lg:py-5">
      <div className="flex items-start gap-3 min-w-0">
        <button
          type="button"
          className="md:hidden mt-1 text-slate-600 hover:text-teal-600 transition-colors rounded-lg p-2 hover:bg-white/60"
          onClick={toggleMobileSidebar}
          aria-label={isMobileSidebarOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileSidebarOpen}
        >
          {isMobileSidebarOpen ? (
            <X className="w-5 h-5 stroke-[1.75]" />
          ) : (
            <Menu className="w-5 h-5 stroke-[1.75]" />
          )}
        </button>

        <div className="min-w-0">
          <p className="text-teal-600 font-medium text-sm mb-1 flex items-center gap-1">
            Welcome back, Andrea <span className="text-base">👋</span>
          </p>
          <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-semibold">Dashboard</h2>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0 mt-1 md:mt-0">
        <div className="relative">
          <button className="text-slate-500 hover:text-teal-600 transition-colors">
            <Bell className="w-5 h-5 stroke-[1.5]" />
          </button>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </div>
        <div className="flex items-center gap-3 pl-2">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Profile" 
            className="w-9 h-9 rounded-full object-cover shadow-sm ring-2 ring-white"
          />
          <span className="text-sm font-medium text-slate-700 hidden sm:block">Andrea Pirlo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
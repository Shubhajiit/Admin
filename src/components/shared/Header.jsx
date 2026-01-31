import { Bell, Menu, X } from 'lucide-react';
import { useSidebar } from './SidebarContext';

const Header = () => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between px-4 py-2.5 lg:px-8">
      
      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile Menu */}
        <button
          type="button"
          className="md:hidden text-slate-600 hover:text-teal-600 transition-colors rounded-md p-1.5 hover:bg-slate-100"
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

        {/* Greeting */}
        <div className="min-w-0 leading-tight">
          <p className="text-xs font-medium text-teal-600 flex items-center gap-1">
            Welcome back <span className="hidden sm:inline">, Andrea</span> 👋
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button
          className="relative text-slate-500 hover:text-teal-600 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 stroke-[1.5]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200" />

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-300"
          />
          <span className="hidden sm:block text-sm font-medium text-slate-700">
            Andrea Pirlo
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

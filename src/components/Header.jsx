import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 py-4 lg:px-8 lg:py-5">
      <div>
        <p className="text-teal-600 font-medium text-sm mb-1 flex items-center gap-1">
          Welcome back, Andrea <span className="text-base">👋</span>
        </p>
        <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-teal-600 transition-colors">
          <Search className="w-5 h-5 stroke-[1.5]" />
        </button>
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
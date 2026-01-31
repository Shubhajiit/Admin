import { 
  LayoutGrid, 
  UserCheck, 
  MessageCircle, 
  BarChart2, 
  Calendar, 
  Wallet, 
  ArrowLeftRight, 
  TrendingUp 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/routeConstants';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: UserCheck, label: 'Role Play', path: ROUTES.ROLEPLAY },
    { icon: MessageCircle, label: 'Messenger', path: '#', disabled: true },
    { icon: BarChart2, label: 'Statistic', path: '#', disabled: true },
    { icon: Calendar, label: 'Calendar', path: '#', disabled: true },
    { icon: Wallet, label: 'Finance', path: '#', disabled: true },
  ];

  const isActiveRoute = (path) => {
    if (path === ROUTES.DASHBOARD && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const bottomNavItems = [
    { icon: ArrowLeftRight, label: 'Transfers' },
    { icon: TrendingUp, label: 'Youth academy' },
  ];

  return (
    <aside className="w-full h-full px-5 py-6 flex flex-col gap-8">
      {/* Logo */}
      <div className="px-2">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">CoachPro</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {/* Main Menu Items */}
        {navItems.map(({ icon: Icon, label, path, disabled }) => {
          const isActive = isActiveRoute(path);
          
          if (disabled) {
            return (
              <button
                key={label}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-left text-teal-900/40 cursor-not-allowed"
                disabled
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          }
          
          return (
            <Link
              key={label}
              to={path}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-left ${
                isActive
                  ? 'bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg shadow-teal-900/20'
                  : 'text-teal-900/60 hover:text-teal-800 hover:bg-teal-50/50'
              }`}
            >
              <Icon className="w-5 h-5 stroke-[1.5]" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          );
        })}
        
        {/* Divider */}
        <div className="my-2 border-t border-teal-900/10"></div>

        {/* Bottom Menu Items */}
        {bottomNavItems.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            className="group flex items-center gap-3 px-4 py-3 text-teal-900/60 hover:text-teal-800 hover:bg-teal-50/50 rounded-xl transition-all"
          >
            <Icon className="w-5 h-5 stroke-[1.5]" />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
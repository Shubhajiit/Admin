import { 
  LayoutGrid, 
  UserCheck, 
  MessageCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routeConstants';

const Sidebar = ({ onNavigate }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: UserCheck, label: 'Roles ', path: ROUTES.ROLEPLAY },
    { icon: MessageCircle, label: 'Users', path: ROUTES.USERS },
  ];

  const isActiveRoute = (path) => {
    if (path === ROUTES.DASHBOARD && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <aside className="w-full h-full px-5 py-6 flex flex-col gap-8">
      {/* Logo */}
      <div className="px-2">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">RMDOCTO</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {/* Main Menu Items */}
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = isActiveRoute(path);
          
          return (
            <Link
              key={label}
              to={path}
              onClick={onNavigate}
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
      </nav>
    </aside>
  );
};

export default Sidebar;
import { X, UserCheck, Shield, Crown, Users, Briefcase, Sparkles } from 'lucide-react';

const RoleAssignmentPopup = ({ isOpen, onClose, company, onAssignRole }) => {
  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      description: 'Full access to all features and settings',
      icon: Crown,
      color: 'from-purple-500 to-indigo-600',
      bgGlow: 'bg-purple-500/10',
      borderColor: 'border-purple-300/30',
      textColor: 'text-purple-800',
      accentColor: 'text-purple-600'
    },
    {
      id: 'manager',
      name: 'Manager',
      description: 'Can manage teams and view analytics',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-300/30',
      textColor: 'text-blue-800',
      accentColor: 'text-blue-600'
    },
    {
      id: 'employee',
      name: 'Employee',
      description: 'Basic access to assigned tasks',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-300/30',
      textColor: 'text-emerald-800',
      accentColor: 'text-emerald-600'
    },
    {
      id: 'contractor',
      name: 'Contractor',
      description: 'Limited access to specific projects',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      bgGlow: 'bg-amber-500/10',
      borderColor: 'border-amber-300/30',
      textColor: 'text-amber-800',
      accentColor: 'text-amber-600'
    }
  ];

  const handleRoleSelect = (role) => {
    onAssignRole(company.id, role);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop with Multiple Glass Layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/60 to-purple-900/80" 
        onClick={onClose}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Glassmorphism Modal Content */}
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/20 p-8 w-full max-w-lg mx-4 transform transition-all duration-500 scale-95 animate-[scale-in_0.3s_ease-out_forwards]">
        {/* Decorative Glass Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        <div className="absolute top-2 left-2 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl pointer-events-none"></div>
        
        {/* Header with Enhanced Glass Effect */}
        <div className="relative flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-r from-indigo-500/80 to-purple-600/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <UserCheck className="w-6 h-6 text-white drop-shadow-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                Assign Role
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </h3>
              <p className="text-white/70 font-medium">{company?.name}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="relative p-3 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 group border border-white/10 hover:border-white/30"
          >
            <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Role Options with Glassmorphism */}
        <div className="space-y-4">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role)}
                className={`relative w-full p-5 text-left rounded-2xl border backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl ${role.borderColor} ${role.bgGlow} hover:bg-white/15`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-r ${role.color} rounded-2xl shadow-lg border border-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white drop-shadow-sm" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg ${role.textColor} drop-shadow-sm group-hover:text-white transition-colors duration-300`}>
                      {role.name}
                    </h4>
                    <p className="text-white/80 font-medium leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-white to-white/60 shadow-sm"></div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Footer with Glass Effect */}
        <div className="relative mt-8 pt-6 border-t border-white/20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <p className="text-white/60 text-center font-medium">
            Select a role to assign to{' '}
            <span className="text-white font-semibold">{company?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleAssignmentPopup;
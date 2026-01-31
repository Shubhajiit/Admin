import { Crown, Shield, Users, Briefcase, TrendingUp } from 'lucide-react';

const RoleStatistics = ({ roleStats }) => {
  const stats = [
    {
      id: 'admin',
      name: 'Administrators',
      count: roleStats.admin || 0,
      icon: Crown,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 'manager',
      name: 'Managers',
      count: roleStats.manager || 0,
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 'employee',
      name: 'Employees',
      count: roleStats.employee || 0,
      icon: Users,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 'contractor',
      name: 'Contractors',
      count: roleStats.contractor || 0,
      icon: Briefcase,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    }
  ];

  const totalCompanies = stats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-teal-700 to-teal-600 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Role Statistics</h2>
          <p className="text-sm text-slate-500">Overview of role distribution</p>
        </div>
      </div>

      {/* Total Companies */}
      <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-teal-800">{totalCompanies}</h3>
          <p className="text-sm text-teal-600">Total Companies</p>
        </div>
      </div>

      {/* Role Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          const percentage = totalCompanies > 0 ? Math.round((stat.count / totalCompanies) * 100) : 0;
          
          return (
            <div key={stat.id} className={`${stat.bgColor} rounded-xl p-4`}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${stat.textColor}`}>{stat.name}</h4>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${stat.textColor}`}>{stat.count}</span>
                <span className="text-sm text-slate-500">{percentage}%</span>
              </div>
              {/* Progress bar */}
              <div className="mt-2 w-full bg-white rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoleStatistics;
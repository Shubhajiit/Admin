import { UserCheck, Building2 } from 'lucide-react';

const CompanyList = ({ companies, onAssignRole }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-teal-700 to-teal-600 rounded-lg">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Companies</h2>
          <p className="text-sm text-slate-500">Manage company roles</p>
        </div>
      </div>

      <div className="space-y-3">
        {companies.map((company) => (
          <div 
            key={company.id} 
            className="group flex items-center justify-between p-4 rounded-xl border border-teal-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{company.name}</h3>
                <p className="text-sm text-slate-500">
                  Current Role: <span className="font-medium text-teal-700">{company.currentRole}</span>
                </p>
              </div>
            </div>
            
            <button
              onClick={() => onAssignRole(company)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-sm font-medium rounded-lg hover:from-teal-800 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg shadow-teal-900/20"
            >
              <UserCheck className="w-4 h-4" />
              Assign Role
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
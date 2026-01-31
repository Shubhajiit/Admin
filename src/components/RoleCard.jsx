import { Shield, Edit, Trash2 } from 'lucide-react';

const RoleCard = ({ role, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            {role.roleName}
          </h3>
          <p className="text-xs text-slate-500">System Role</p>
        </div>
      </div>

      {/* Permissions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {role.permissions.map((perm, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700"
          >
            {perm}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 mt-auto border-t border-slate-200 flex justify-end gap-5">
        <button
          onClick={() => onEdit(role)}
          className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={() => onDelete(role)}
          className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default RoleCard;

import { UserPlus } from 'lucide-react';

const AdminRoleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-xl
        bg-teal-600/20 hover:bg-teal-600/30
        border border-teal-300/30
        text-teal-700 hover:text-teal-800
        backdrop-blur-sm
        transition-all duration-200
        shadow-sm hover:shadow-md
        font-medium
        whitespace-nowrap
      "
    >
      <UserPlus className="w-4.5 h-4.5" />
      Create Role
    </button>
  );
};

export default AdminRoleButton;

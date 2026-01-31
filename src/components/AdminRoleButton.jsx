import { User } from 'lucide-react';

const AdminRoleButton = ({ onClick }) => {
  return (
    <div className="md:fixed md:top-32 md:right-8 md:z-10">
      <button
        onClick={onClick}
        className="bg-teal-600/20 hover:bg-teal-600/30 backdrop-blur-sm border border-teal-300/30 text-teal-700 hover:text-teal-800 px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium inline-flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <User className="w-5 h-5" />
        Admin Role
      </button>
    </div>
  );
};

export default AdminRoleButton;
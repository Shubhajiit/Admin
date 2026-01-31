import { useState } from 'react';
import Header from '../components/Header';
import AdminRoleButton from '../components/AdminRoleButton';
import AdminRoleForm from '../components/AdminRoleForm';

const RolePlay = () => {
  const [isAdminPopupOpen, setIsAdminPopupOpen] = useState(false);

  const handleAdminRoleSubmit = (adminFormData) => {
    console.log('Admin role form submitted:', adminFormData);
    alert('Admin role play session configured!');
    setIsAdminPopupOpen(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 right-0 left-0 md:left-64 z-20 bg-slate-50/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 border-b border-slate-200/60 md:border-b-0">
        <Header />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 pt-36 md:pt-24 overflow-y-auto px-4 pb-6 lg:px-8 flex items-start md:items-center justify-center">
        <div className="w-full max-w-md">
          {/* Admin Role Button */}
          <div className="text-center pt-6 md:pt-0">
            <AdminRoleButton onClick={() => setIsAdminPopupOpen(true)} />
          </div>
        </div>
      </main>

      {/* Admin Role Form Popup */}
      <AdminRoleForm
        isOpen={isAdminPopupOpen}
        onClose={() => setIsAdminPopupOpen(false)}
        companies={[]}
        onSubmit={handleAdminRoleSubmit}
      />
    </div>
  );
};

export default RolePlay;
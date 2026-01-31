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
      <div className="fixed top-0 right-0 left-64 z-20">
        <Header />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 pt-24 overflow-y-auto px-4 py-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Admin Role Button */}
          <div className="text-center">
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
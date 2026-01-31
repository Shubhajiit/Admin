import { useState } from 'react';
import Header from '../components/shared/Header';
import AdminRoleButton from '../components/roleplay/AdminRoleButton';
import AdminRoleForm from '../components/roleplay/AdminRoleForm';
import RoleGrid from '../components/roleplay/RoleGrid';

const RolePlay = () => {
  const [isCreateRoleOpen, setIsCreateRoleOpen] = useState(false);

  const [roles, setRoles] = useState([
    {
      roleName: 'Admin',
      permissions: ['All Access', 'Manage Users', 'Settings'],
    },
    {
      roleName: 'Manager',
      permissions: ['View Reports', 'Manage Team'],
    },
  ]);

  /* CREATE ROLE */
  const handleCreateRole = (newRole) => {
    setRoles((prev) => [...prev, newRole]);
    setIsCreateRoleOpen(false);
  };

  /* DELETE ROLE */
  const handleDeleteRole = (roleToDelete) => {
    if (window.confirm(`Delete role "${roleToDelete.roleName}"?`)) {
      setRoles((prev) =>
        prev.filter((role) => role !== roleToDelete)
      );
    }
  };

  /* EDIT ROLE (for now console – modal can be reused later) */
  const handleEditRole = (role) => {
    console.log('Edit role:', role);
    // Next step: open AdminRoleForm in edit mode
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="fixed top-0 right-0 left-0 md:left-64 z-20">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-28 md:pt-20 px-4 pb-8 lg:px-8">
        
        {/* Title + Button */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              Role Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage roles and permissions
            </p>
          </div>

          <AdminRoleButton onClick={() => setIsCreateRoleOpen(true)} />
        </div>

        {/* Role Cards */}
        <RoleGrid
          roles={roles}
          onEditRole={handleEditRole}
          onDeleteRole={handleDeleteRole}
        />
      </main>

      {/* Create Role Modal */}
      <AdminRoleForm
        isOpen={isCreateRoleOpen}
        onClose={() => setIsCreateRoleOpen(false)}
        onSubmit={handleCreateRole}
      />
    </div>
  );
};

export default RolePlay;

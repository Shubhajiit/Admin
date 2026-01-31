import RoleCard from './RoleCard';

const RoleGrid = ({ roles, onEditRole, onDeleteRole }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {roles.map((role, index) => (
        <RoleCard
          key={index}
          role={role}
          onEdit={onEditRole}
          onDelete={onDeleteRole}
        />
      ))}
    </div>
  );
};

export default RoleGrid;
